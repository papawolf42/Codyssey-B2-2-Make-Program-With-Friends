export const STORAGE_KEY = 'together-git-study-v1';
export const VERSION = 1;

export function emptyState() {
  return { version: VERSION, answers: {}, drafts: {}, reflections: {}, evidence: {}, lastQuestion: null };
}

export function sanitizeState(raw, questions, prompts, checks) {
  const clean = emptyState();
  if (!raw || typeof raw !== 'object' || raw.version !== VERSION) return clean;
  for (const q of questions) {
    const answer = raw.answers?.[q.id];
    if (!answer || !q.options.some(o => o.id === answer.choice)) continue;
    clean.answers[q.id] = {
      choice: answer.choice,
      correct: answer.choice === q.correct,
      firstCorrect: typeof answer.firstCorrect === 'boolean' ? answer.firstCorrect : answer.choice === q.correct,
      attempts: Number.isSafeInteger(answer.attempts) ? Math.max(1, Math.min(answer.attempts, 10000)) : 1,
    };
  }
  for (const p of prompts) {
    if (typeof raw.drafts?.[p.id] === 'string') clean.drafts[p.id] = raw.drafts[p.id].slice(0, 10000);
    const reflection = raw.reflections?.[p.id];
    if (clean.drafts[p.id]?.trim() && ['ready', 'practice'].includes(reflection)) clean.reflections[p.id] = reflection;
  }
  for (const c of checks) {
    const item = raw.evidence?.[c.id];
    if (!item || typeof item.note !== 'string') continue;
    const note = item.note.slice(0, 4000);
    clean.evidence[c.id] = { note, checked: item.checked === true && Boolean(note.trim()) };
  }
  if (questions.some(q => q.id === raw.lastQuestion)) clean.lastQuestion = raw.lastQuestion;
  return clean;
}

export function loadState(storage, questions, prompts, checks) {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    if (!raw) return { state: emptyState(), warning: '' };
    const parsed = JSON.parse(raw);
    return { state: sanitizeState(parsed, questions, prompts, checks), warning: parsed?.version === VERSION ? '' : '이전 형식의 기록을 읽지 못해 새 학습을 시작합니다.' };
  } catch {
    return { state: emptyState(), warning: '저장된 기록을 읽지 못했습니다. 지금 학습은 계속할 수 있어요.' };
  }
}

export function saveState(storage, state) {
  try { storage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; } catch { return false; }
}

export function recordAnswer(state, question, choice) {
  if (!question.options.some(o => o.id === choice)) throw new Error('Unknown answer');
  const old = state.answers[question.id];
  const correct = choice === question.correct;
  return {
    ...state,
    lastQuestion: question.id,
    answers: { ...state.answers, [question.id]: { choice, correct, firstCorrect: old?.firstCorrect ?? correct, attempts: (old?.attempts ?? 0) + 1 } },
  };
}

export function summarize(state, questions, prompts = [], checks = []) {
  const required = questions.filter(q => !q.bonus);
  const answered = required.filter(q => state.answers[q.id]);
  const correct = answered.filter(q => state.answers[q.id].correct).length;
  return {
    total: required.length, answered: answered.length, correct,
    firstCorrect: answered.filter(q => state.answers[q.id].firstCorrect).length,
    wrong: answered.filter(q => !state.answers[q.id].correct).map(q => q.id),
    remaining: required.filter(q => !state.answers[q.id]).map(q => q.id),
    percent: required.length ? Math.round(correct / required.length * 100) : 0,
    promptTotal: prompts.filter(p => !p.bonus).length,
    reflected: prompts.filter(p => !p.bonus && state.drafts[p.id]?.trim() && state.reflections[p.id] === 'ready').length,
    evidenceTotal: checks.length,
    evidenceDone: checks.filter(c => state.evidence[c.id]?.checked && state.evidence[c.id]?.note?.trim()).length,
  };
}

export function buildReport(state, questions, prompts, checks, date = new Date()) {
  const s = summarize(state, questions, prompts, checks);
  const lines = [
    '# 같이, Git 학습 기록', '', `저장 시각: ${date.toISOString()}`, '',
    '이 기록은 학습용 자기 점검입니다. 공식 PASS/FAIL 판정이나 실제 GitHub 증빙 검증 결과가 아닙니다.', '',
    `- 필수 선택형: ${s.answered}/${s.total} 풀이, 현재 ${s.correct}개 정답, 첫 시도 ${s.firstCorrect}개 정답`,
    `- 내 말로 설명: ${s.reflected}/${s.promptTotal}개를 스스로 설명 가능하다고 표시`,
    `- 제출 자료: ${s.evidenceDone}/${s.evidenceTotal}개 직접 확인 표시`, '', '## 선택형 답안', '',
  ];
  for (const q of questions) {
    const a = state.answers[q.id];
    lines.push(`- ${q.bonus ? '[선택] ' : ''}${q.title}: ${a ? `${a.correct ? '정답' : '다시 학습'} / ${q.options.find(o => o.id === a.choice)?.text} / ${a.attempts}회 시도` : '아직 풀지 않음'}`);
  }
  lines.push('', '## 내 말로 설명', '');
  for (const p of prompts) {
    lines.push(`### ${p.title}`, '', state.drafts[p.id]?.trim() || '(아직 작성하지 않음)', '', `자가 판단: ${state.reflections[p.id] === 'ready' ? '설명할 수 있음' : state.reflections[p.id] === 'practice' ? '더 연습하기' : '미확인'}`, '');
  }
  lines.push('## 제출 자료 직접 확인', '');
  for (const c of checks) {
    const e = state.evidence[c.id];
    lines.push(`- [${e?.checked && e.note?.trim() ? 'x' : ' '}] ${c.label}`, `  근거: ${e?.note?.trim() || '미기록'}`, '');
  }
  return lines.join('\n');
}
