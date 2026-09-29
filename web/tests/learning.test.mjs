import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { questions, categories, explainPrompts, evidenceChecks } from '../content.js';
import { STORAGE_KEY, emptyState, sanitizeState, loadState, saveState, recordAnswer, summarize, buildReport } from '../logic.js';

test('all evaluation criteria have a distinct explanation or evidence check, with rebase optional', () => {
  const expected = ['1', '2', '3', '4'].flatMap((group, i) => Array.from({ length: [8, 5, 5, 4][i] }, (_, n) => `${group}-${String(n + 1).padStart(2, '0')}`));
  const covered = [...explainPrompts, ...evidenceChecks].map(item => item.source.criterion);
  assert.deepEqual([...covered].sort(), expected.sort());
  assert.equal(explainPrompts.filter(p => !p.bonus).length, 13);
  assert.equal(evidenceChecks.length, 8);
  assert.equal(explainPrompts.find(p => p.source.criterion === '4-04').bonus, true);
});

test('every question has meaningful choices, feedback and a resolvable local source', () => {
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  for (const q of questions) {
    assert.ok(categories.some(c => c.id === q.category));
    assert.equal(q.options.length, 3);
    assert.equal(new Set(q.options.map(o => o.id)).size, 3);
    assert.ok(q.options.some(o => o.id === q.correct));
    assert.ok(q.options.every(o => o.text && q.optionFeedback[o.id]));
    assert.ok(q.context && q.explanation && q.takeaway);
  }
  for (const item of [...questions, ...explainPrompts, ...evidenceChecks]) {
    assert.ok(existsSync(fileURLToPath(new URL(`../${item.source.path}`, import.meta.url))), item.source.path);
  }
  assert.equal(questions.filter(q => !q.bonus).length, 22);
});

test('retry updates current understanding without inflating question count or erasing first attempt', () => {
  const q = questions.find(q => !q.bonus);
  let state = recordAnswer(emptyState(), q, q.options.find(o => o.id !== q.correct).id);
  assert.equal(summarize(state, questions).correct, 0);
  assert.deepEqual(summarize(state, questions).wrong, [q.id]);
  state = recordAnswer(state, q, q.correct);
  const summary = summarize(state, questions);
  assert.equal(summary.answered, 1);
  assert.equal(summary.correct, 1);
  assert.equal(summary.firstCorrect, 0);
  assert.equal(state.answers[q.id].attempts, 2);
  assert.deepEqual(summary.wrong, []);
  assert.throws(() => recordAnswer(state, q, 'not-an-option'));
});

test('optional rebase questions do not alter required score', () => {
  let state = emptyState();
  for (const q of questions.filter(q => q.bonus)) state = recordAnswer(state, q, q.correct);
  const summary = summarize(state, questions);
  assert.equal(summary.answered, 0);
  assert.equal(summary.correct, 0);
  assert.equal(summary.total, 22);
});

test('resume recomputes correctness, drops unknown records, and does not accept unsupported readiness', () => {
  const q = questions[0], p = explainPrompts[0], c = evidenceChecks[0];
  const state = sanitizeState({
    version: 1, answers: { [q.id]: { choice: q.correct, correct: false, attempts: -9 }, unknown: { choice: 'a', correct: true } },
    drafts: { [p.id]: '   ' }, reflections: { [p.id]: 'ready' },
    evidence: { [c.id]: { note: '  ', checked: true } }, lastQuestion: 'unknown',
  }, questions, explainPrompts, evidenceChecks);
  assert.equal(state.answers[q.id].correct, true);
  assert.equal(state.answers[q.id].attempts, 1);
  assert.deepEqual(Object.keys(state.answers), [q.id]);
  assert.equal(state.lastQuestion, null);
  assert.equal(state.reflections[p.id], undefined);
  assert.equal(state.evidence[c.id].checked, false);
  assert.equal(summarize(state, questions, explainPrompts, evidenceChecks).reflected, 0);
  const corrupted = sanitizeState({ version: 1, evidence: { [c.id]: { note: '기록', checked: 'false' } } }, questions, explainPrompts, evidenceChecks);
  assert.equal(summarize(corrupted, questions, explainPrompts, evidenceChecks).evidenceDone, 0);
});

test('corrupt or inaccessible storage does not prevent fresh learning; a valid session resumes', () => {
  const args = [questions, explainPrompts, evidenceChecks];
  assert.deepEqual(loadState({ getItem: () => 'invalid json' }, ...args).state, emptyState());
  assert.ok(loadState({ getItem() { throw new Error('blocked'); } }, ...args).warning);
  assert.equal(saveState({ setItem() { throw new Error('full'); } }, emptyState()), false);
  assert.deepEqual(sanitizeState({ version: 0 }, ...args), emptyState());
  const data = new Map();
  const storage = { getItem: key => data.get(key), setItem: (key, value) => data.set(key, value) };
  const state = recordAnswer(emptyState(), questions[0], questions[0].correct);
  assert.equal(saveState(storage, state), true);
  assert.ok(data.has(STORAGE_KEY));
  assert.deepEqual(loadState(storage, ...args).state, state);
});

test('download includes typed explanations and evidence without turning them into an official grade', () => {
  const state = emptyState(), p = explainPrompts[0], c = evidenceChecks[0];
  state.drafts[p.id] = '우리 팀은 목적 하나마다 작업을 나눕니다.';
  state.reflections[p.id] = 'ready';
  state.evidence[c.id] = { note: '팀원 권한 목록을 직접 확인함', checked: true };
  const report = buildReport(state, questions, explainPrompts, evidenceChecks, new Date('2026-09-29T00:00:00Z'));
  assert.match(report, /공식 PASS\/FAIL 판정이나 실제 GitHub 증빙 검증 결과가 아닙니다/);
  assert.match(report, /우리 팀은 목적 하나마다 작업을 나눕니다/);
  assert.match(report, /팀원 권한 목록을 직접 확인함/);
  assert.match(report, /필수 선택형: 0\/22 풀이/);
  assert.match(report, /1\/13개/);
});
