import { categories, questions, explainPrompts, evidenceChecks } from './content.js';
import { STORAGE_KEY, emptyState, loadState, saveState, recordAnswer, summarize, buildReport } from './logic.js';

const $ = selector => document.querySelector(selector);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const paths = {
  home: '<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',
  quiz: '<rect x="5" y="3" width="14" height="18" rx="3"/><path d="m8 9 2 2 5-5M8 15h8M8 18h5"/>',
  talk: '<path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z"/><path d="M8 10h8M8 14h5"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h5l3 3h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m8 14 3 3 5-5"/>',
  chart: '<path d="M4 3v17h17M8 16v-5M13 16V7M18 16V4"/>',
  arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  book: '<path d="M12 5v16M3 4h5a4 4 0 0 1 4 3 4 4 0 0 1 4-3h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z"/>',
  leaf: '<path d="M19 3C6 3 2 8 5 15s15 4 14-12ZM5 19l10-10"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  reset: '<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7"/>',
  link: '<path d="M14 3h7v7M21 3l-11 11M11 3H4v17h17v-7"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  branch: '<circle cx="7" cy="5" r="3"/><circle cx="17" cy="5" r="3"/><circle cx="7" cy="19" r="3"/><path d="M7 8v8M17 8a7 7 0 0 1-7 7H7"/>',
};
const icon = (name, cls = '') => `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.book}</svg>`;
const views = { home: '학습 홈', guide: '쉬운 개념 노트', quiz: '이해도 확인', explain: '내 말로 설명', evidence: '제출 자료 확인', results: '나의 학습 기록' };
let storage;
try { storage = window.localStorage; } catch { storage = { getItem() { throw new Error(); }, setItem() { throw new Error(); }, removeItem() {} }; }
const loaded = loadState(storage, questions, explainPrompts, evidenceChecks);
let state = loaded.state;
let storageWarning = loaded.warning;
let view = views[location.hash.slice(1)] ? location.hash.slice(1) : 'home';
let session = questions.filter(q => !q.bonus).map(q => q.id);
let quizIndex = Math.max(0, session.indexOf(state.lastQuestion));
let selected = null;
let retrying = false;
let promptId = explainPrompts.find(p => !p.bonus)?.id;
let revealed = false;
let includeBonus = false;
let sessionLabel = '기본 이해 확인';

function persist() {
  const saved = saveState(storage, state);
  storageWarning = saved ? '' : '브라우저에 저장하지 못하고 있어요. 화면을 닫기 전에 학습 기록을 내려받아 주세요.';
  const badge = $('#save-state');
  if (badge) badge.textContent = saved ? '이 브라우저에 저장됨' : '저장할 수 없음';
  const warning = $('#storage-warning');
  if (warning) { warning.textContent = storageWarning; warning.hidden = !storageWarning; }
}

function navigate(next) {
  view = views[next] ? next : 'home';
  history.replaceState(null, '', `#${view}`);
  render();
  $('#page-title')?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function sourceLink(source) {
  if (!source) return '';
  return `<a class="source-link" href="${esc(source.path)}" target="_blank" rel="noopener">${icon('book')}${esc(source.label)} ${icon('link')}</a>`;
}

function pageHeader(kicker, title, description, action = '') {
  return `<div class="page-heading"><div><p class="eyebrow">${esc(kicker)}</p><h1 id="page-title" tabindex="-1">${esc(title)}</h1><p class="page-description">${esc(description)}</p></div>${action}</div>`;
}

function render() {
  const summary = summarize(state, questions, explainPrompts, evidenceChecks);
  const nav = [ ['home', 'home', '학습 홈'], ['quiz', 'quiz', '이해도 확인'], ['explain', 'talk', '내 말로 설명'], ['evidence', 'folder', '제출 자료 확인'], ['results', 'chart', '나의 학습 기록'] ];
  document.title = `${views[view]} · 같이, Git`;
  $('#app').innerHTML = `
    <aside class="sidebar">
      <a class="brand" href="#home" data-view="home"><span class="brand-mark">${icon('branch')}</span><span>같이, <b>Git</b><small>한 걸음씩 이해하는 협업</small></span></a>
      <div class="nav-caption">MY LEARNING</div>
      <nav aria-label="학습 메뉴">${nav.map(([id, glyph, label], i) => `<button class="nav-item ${view === id ? 'active' : ''}" data-view="${id}" ${view === id ? 'aria-current="page"' : ''}>${icon(glyph)}<span>${label}</span>${i === 1 ? `<small>${summary.answered}/${summary.total}</small>` : ''}</button>`).join('')}</nav>
      <div class="sidebar-bottom"><button class="guide-link" data-view="guide">${icon('book')} 용어가 낯설다면?</button><div class="sidebar-note"><span class="tiny-dot"></span> 서두르지 않아도 괜찮아요.<br>이해한 만큼, 한 걸음씩.</div><span class="course-tag">CODYSSEY · B2-2</span></div>
    </aside>
    <div class="workspace"><header class="topbar"><span>우리의 첫 번째 Git 협업 <span class="topbar-separator">/</span> <b>${views[view]}</b></span><span class="save-indicator"><span class="tiny-dot"></span><span id="save-state">${storageWarning ? '저장 상태 확인 필요' : '이 브라우저에 저장됨'}</span></span></header>
      <main id="main-content"><p id="storage-warning" class="storage-warning" role="status" ${storageWarning ? '' : 'hidden'}>${esc(storageWarning)}</p>${view === 'home' ? homePage(summary) : view === 'quiz' ? quizPage() : view === 'explain' ? explainPage() : view === 'evidence' ? evidencePage(summary) : view === 'results' ? resultsPage(summary) : guidePage()}</main>
      <footer class="app-footer"><span>외우는 Git에서, 설명할 수 있는 Git으로.</span><a href="../evalutation.md" target="_blank" rel="noopener">평가 기준 원문 ${icon('link')}</a></footer>
    </div>
    <dialog id="reset-dialog" aria-labelledby="reset-title"><h2 id="reset-title">이 브라우저의 학습 기록을 지울까요?</h2><p>선택한 답, 직접 쓴 설명, 제출 자료 메모가 지워집니다. 필요한 기록은 먼저 내려받아 주세요.</p><div class="dialog-actions"><button class="button secondary" data-action="cancel-reset">취소</button><button class="button danger" data-action="confirm-reset">학습 기록 지우기</button></div></dialog>`;
  bindInputs();
}

function homePage(s) {
  return `<section class="welcome"><div class="welcome-copy"><p class="eyebrow"><span class="tiny-line"></span> 첫 협업을 위한 작은 연습</p><h1 id="page-title" tabindex="-1">같이 만드는 Git,<br>얼마나 <em>이해했나요?</em></h1><p>명령어를 외우지 않아도 괜찮아요.<br>실제 상황을 풀어 보고, 내 말로 설명하며<br>네 사람이 함께 일하는 흐름을 익혀 봐요.</p><div class="hero-actions"><button class="button primary" data-action="continue">${s.answered ? '이어서 이해도 확인' : '이해도 확인 시작'} ${icon('arrow')}</button><button class="text-button" data-view="guide">개념부터 살펴보기</button></div><span class="microcopy">필수 ${s.total}문항 · 시간 제한 없음 · 중간에 쉬어도 저장돼요</span></div>
      <div class="journey-art" aria-label="서로 다른 작업이 모여 하나의 결과가 되는 Git 협업"><div class="art-caption"><span class="tiny-dot"></span> 작은 작업이 모여, 하나의 팀으로</div><svg class="branch-art" viewBox="0 0 350 220" fill="none" aria-hidden="true"><path d="M65 34v151" stroke="#466b54" stroke-width="4"/><path d="M65 77c0 25 97 0 97 38v12c0 38-97 21-97 55" stroke="#9eae79" stroke-width="4"/><path d="M65 56c0 32 192 12 192 70 0 65-192 22-192 65" stroke="#ceb78d" stroke-width="4"/><circle cx="65" cy="37" r="11" fill="#2c5d49"/><circle cx="65" cy="185" r="15" fill="#2c5d49"/><path d="m58 185 5 5 10-11" stroke="#fff" stroke-width="3"/><circle cx="162" cy="120" r="10" fill="#9eae79"/><circle cx="257" cy="119" r="10" fill="#ceb78d"/><rect x="92" y="17" width="98" height="33" rx="10" fill="white"/><text x="141" y="39" text-anchor="middle" fill="#466b54" font-size="13" font-family="sans-serif">함께 시작해요</text><rect x="188" y="153" width="115" height="33" rx="10" fill="white"/><text x="245" y="175" text-anchor="middle" fill="#766549" font-size="13" font-family="sans-serif">서로 확인해요</text></svg><div class="art-footer"><span class="avatar-stack"><i>상</i><i>양</i><i>은</i><i>건</i></span><span>각자의 작업을<br><strong>함께 완성하는 연습</strong></span></div></div></section>
    <section class="home-progress"><div class="progress-copy"><span class="progress-icon">${icon('leaf')}</span><div><strong>${s.answered ? '조금씩, 이해가 쌓이고 있어요' : '오늘, 첫 번째 기록을 남겨 보세요'}</strong><span>필수 문제 ${s.answered}/${s.total}개 풀이 · 현재 ${s.correct}개 정답</span></div></div><div class="progress-track" role="progressbar" aria-label="필수 문제 풀이 진행률" aria-valuenow="${s.answered}" aria-valuemin="0" aria-valuemax="${s.total}"><i style="width:${s.total ? s.answered / s.total * 100 : 0}%"></i></div><b>${s.total ? Math.round(s.answered / s.total * 100) : 0}%</b></section>
    <section class="section"><div class="section-heading"><div><p class="eyebrow">LEARNING PATH</p><h2>세 단계로, 내 것으로 만들어요</h2></div><span class="subtle">정답보다 중요한 건, 그 이유예요.</span></div><div class="path-grid">${[
      ['01', 'quiz', 'quiz', '상황을 보고 골라요', '커밋과 PR은 뭐가 다를까요? 실제 협업 상황에서 다음 행동을 선택해요.', `${s.total}개 상황 문제`, '문제 풀기'],
      ['02', 'talk', 'explain', '내 말로 설명해요', '왜 그렇게 해야 할까요? 짧게 써 보고 핵심 내용과 비교해 봐요.', `${s.promptTotal}개 설명 연습`, '설명해 보기'],
      ['03', 'folder', 'evidence', '내 자료를 확인해요', '이해한 것과 실제 한 일은 달라요. 우리 팀의 작업 근거를 직접 찾아봐요.', '8개 제출 자료 점검', '자료 확인하기'],
    ].map(([n, glyph, route, title, description, count, label]) => `<article class="path-card"><div class="card-top"><span class="card-icon">${icon(glyph)}</span><span class="step-number">${n}</span></div><h3>${title}</h3><p>${description}</p><span class="card-count">${count}</span><button class="card-link" data-view="${route}">${label}${icon('arrow')}</button></article>`).join('')}</div></section>
    <section class="gentle-note">${icon('book')}<div><strong>개발을 시작한 지 얼마 안 됐다면</strong><p>‘저장하기 → 올리기 → 검토 요청 → 합치기’부터 구분해 보세요. 쉬운 말로 한 번 더 설명해 드려요.</p></div><button class="text-button" data-view="guide">개념 노트 ${icon('arrow')}</button></section>`;
}

function quizPage() {
  const q = questions.find(q => q.id === session[quizIndex]);
  if (!q) return `${pageHeader('한 번 더 이해하기', '다시 풀 문제가 없어요', '기본 문제를 시작하거나 내 말로 설명하는 연습을 해 보세요.')}<button class="button primary" data-action="continue">기본 문제 시작 ${icon('arrow')}</button>`;
  const answer = retrying ? null : state.answers[q.id];
  const category = categories.find(c => c.id === q.category);
  return `${pageHeader('STEP 01 · 상황을 보고 골라요', '이해도 확인', '한 번에 한 문제씩. 고른 이유를 생각한 뒤 답을 확인해 보세요.')}<div class="quiz-layout"><section class="quiz-panel"><div class="quiz-meta"><span class="pill">${esc(category?.label || 'Git 협업')}${q.bonus ? ' · 선택' : ''}</span><span>${quizIndex + 1}<span class="muted"> / ${session.length}</span></span></div><div class="question-progress"><i style="width:${(quizIndex + 1) / session.length * 100}%"></i></div><p class="question-context">${esc(q.context)}</p><h2 id="question-title" tabindex="-1">${esc(q.title)}</h2><fieldset class="answers" ${answer ? 'disabled' : ''}><legend class="sr-only">정답을 하나 선택해 주세요</legend>${q.options.map((o, i) => `<label class="answer-option ${answer?.choice === o.id || selected === o.id ? 'selected' : ''} ${answer && o.id === q.correct ? 'correct-option' : ''} ${answer && answer.choice === o.id && !answer.correct ? 'wrong-option' : ''}"><input type="radio" name="answer" value="${esc(o.id)}" ${answer?.choice === o.id || selected === o.id ? 'checked' : ''}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${esc(o.text)}</span>${answer && o.id === q.correct ? icon('check') : ''}</label>`).join('')}</fieldset>
      ${answer ? `<div class="answer-feedback ${answer.correct ? 'right' : 'rethink'}" role="status"><strong>${icon(answer.correct ? 'check' : 'leaf')}${answer.correct ? '잘 이해했어요.' : '괜찮아요. 이 차이를 기억해 봐요.'}</strong><p>${esc(q.optionFeedback?.[answer.choice] || q.explanation)}</p>${q.optionFeedback?.[answer.choice] !== q.explanation ? `<p>${esc(q.explanation)}</p>` : ''}<div class="takeaway">${esc(q.takeaway)}</div></div>` : ''}
      <div class="quiz-actions"><button class="text-button" data-action="previous-question" ${quizIndex === 0 ? 'disabled' : ''}>이전 문제</button>${answer ? `<div class="action-pair"><button class="button secondary small" data-action="retry-question">한 번 더 풀기</button><button class="button primary" data-action="next-question">${quizIndex === session.length - 1 ? '학습 결과 보기' : '다음 문제'} ${icon('arrow')}</button></div>` : `<button class="button primary" data-action="submit-answer" ${selected ? '' : 'disabled'}>답 확인하기 ${icon('arrow')}</button>`}</div>${sourceLink(q.source)}</section>
      <aside class="quiz-aside"><span class="aside-label">이번 연습</span><h3>${esc(sessionLabel)}</h3><p>틀린 문제는 다시 풀 수 있어요. 처음 고른 답과 다시 이해한 결과를 따로 기록해요.</p><div class="question-dots" aria-label="문제 이동">${session.map((id, i) => `<button class="question-dot ${i === quizIndex ? 'current' : ''} ${state.answers[id] ? state.answers[id].correct ? 'done' : 'incorrect' : ''}" data-question="${id}" aria-label="${i + 1}번 문제${state.answers[id] ? state.answers[id].correct ? ', 정답' : ', 다시 학습' : ', 아직 풀지 않음'}" ${i === quizIndex ? 'aria-current="step"' : ''}>${i + 1}</button>`).join('')}</div><p class="mini-legend"><span class="legend-green"></span> 이해했어요 <span class="legend-amber"></span> 다시 볼게요</p><button class="text-button" data-view="guide">용어가 헷갈리나요? ${icon('arrow')}</button></aside></div>`;
}

function explainPage() {
  const prompts = explainPrompts.filter(p => includeBonus || !p.bonus);
  if (!prompts.some(p => p.id === promptId)) promptId = prompts[0].id;
  const p = prompts.find(p => p.id === promptId);
  const draft = state.drafts[p.id] || '';
  return `${pageHeader('STEP 02 · 내 말로 설명해요', '이유까지 말할 수 있나요?', '두세 문장이어도 좋아요. 직접 쓴 뒤 예시와 비교해 보세요. 자동으로 점수를 매기지 않아요.')}<div class="explain-layout"><aside class="prompt-list"><label class="bonus-toggle"><input id="bonus-toggle" type="checkbox" ${includeBonus ? 'checked' : ''}>보너스 rebase도 보기</label>${prompts.map((item, i) => `<button class="prompt-item ${item.id === promptId ? 'active' : ''}" data-prompt="${item.id}" ${item.id === promptId ? 'aria-current="true"' : ''}><span>${String(i + 1).padStart(2, '0')}</span><b>${esc(item.title)}</b>${state.reflections[item.id] === 'ready' ? icon('check') : ''}</button>`).join('')}</aside><section class="explain-panel"><span class="pill">${esc(p.source?.label || '말로 설명하기')}${p.bonus ? ' · 선택' : ''}</span><h2>${esc(p.title)}</h2><p class="prompt-description">${esc(p.prompt)}</p><label class="field-label" for="my-explanation">내가 이해한 내용</label><textarea id="my-explanation" data-prompt-input="${p.id}" rows="7" maxlength="10000" placeholder="예를 들어, 우리 팀에서는…">${esc(draft)}</textarea><div class="input-caption"><span>입력한 내용은 이 브라우저에만 저장돼요.</span><span id="draft-count">${draft.length.toLocaleString()} / 10,000</span></div><button class="button primary" id="reveal-answer" data-action="reveal-explanation" ${draft.trim() ? '' : 'disabled'}>${revealed ? '예시를 보고 계속 다듬기' : '예시와 비교하기'} ${icon('arrow')}</button>
      ${revealed ? `<div class="reflection-box"><p class="eyebrow">비교하며 확인해요</p><h3>이 내용이 내 설명에 들어 있나요?</h3><ul class="point-list">${p.points.map(point => `<li>${icon('check')}<span>${esc(point)}</span></li>`).join('')}</ul><details class="sample-answer"><summary>설명 예시 펼쳐 보기</summary><p>${esc(p.sample)}</p></details><p class="reflection-prompt">예시를 덮어도 다시 설명할 수 있나요?</p><div class="reflection-actions"><button class="button ${state.reflections[p.id] === 'ready' ? 'primary' : 'secondary'}" data-reflection="ready">${icon('check')} 설명할 수 있어요</button><button class="button ${state.reflections[p.id] === 'practice' ? 'primary' : 'secondary'}" data-reflection="practice">조금 더 연습할래요</button></div><p class="microcopy">직접 판단한 기록입니다. 문장에 특정 단어가 있다고 정답 처리하지 않아요.</p></div>` : '<p class="writing-tip">처음부터 완벽하게 쓰지 않아도 돼요. 동료에게 말하듯 적어 보세요.</p>'}${sourceLink(p.source)}</section></div>`;
}

function evidencePage(s) {
  return `${pageHeader('STEP 03 · 내 자료를 확인해요', '실제로 한 일도 남아 있나요?', '평가 항목 1의 여덟 가지 자료를 직접 열어 보고 확인해 주세요. 이 화면은 GitHub 설정이나 링크 내용을 대신 검사하지 않아요.')}<div class="evidence-banner"><span>${icon('folder')} 직접 확인한 자료</span><strong id="evidence-count">${s.evidenceDone} <small>/ ${s.evidenceTotal}</small></strong><span class="subtle">근거를 적으면 완료 표시를 할 수 있어요.</span></div><div class="evidence-list">${evidenceChecks.map((c, i) => { const e = state.evidence[c.id] || { checked: false, note: '' }; return `<details class="evidence-card" ${i === 0 ? 'open' : ''}><summary><span class="evidence-number">${String(i + 1).padStart(2, '0')}</span><span>${esc(c.label)}</span><span id="evidence-status-${c.id}" class="evidence-status ${e.checked ? 'complete' : ''}">${e.checked ? '직접 확인함' : '확인 전'}</span></summary><div class="evidence-content"><p>${esc(c.help)}</p><label class="field-label" for="proof-${c.id}">확인한 링크 또는 기록</label><textarea id="proof-${c.id}" data-evidence-input="${c.id}" maxlength="4000" rows="3" placeholder="예: 실제 팀 PR 주소와 확인한 내용을 적어 주세요.">${esc(e.note)}</textarea><label class="check-row"><input type="checkbox" data-evidence-check="${c.id}" ${e.checked ? 'checked' : ''} ${e.note.trim() ? '' : 'disabled'}>위 자료를 직접 확인했습니다.</label>${sourceLink(c.source)}</div></details>`; }).join('')}</div><div class="gentle-note">${icon('book')}<div><strong>test/의 연습 기록과 실제 제출은 구분해요.</strong><p>이름을 바꾼 로컬 커밋은 실제 팀원의 로그인·리뷰·권한 설정을 증명하지 않아요. 현재 자료의 검토 결과도 함께 볼 수 있어요.</p><a class="source-link" href="../docs/0020_b2-2-evaluation-audit.md" target="_blank" rel="noopener">현재 저장소 평가 검토 읽기 ${icon('link')}</a></div></div><button class="button secondary" data-action="download">${icon('download')} 내 확인 기록 내려받기</button>`;
}

function resultsPage(s) {
  const categoryStats = categories.map(c => ({ ...c, ...summarize(state, questions.filter(q => q.category === c.id)) }));
  return `${pageHeader('MY LEARNING · 차곡차곡 쌓인 기록', '어디까지 이해했을까요?', '선택형 결과, 스스로 설명한 내용, 실제 자료 확인을 따로 볼 수 있어요.', '<button class="button secondary" data-action="download">' + icon('download') + ' 기록 내려받기</button>')}<div class="result-grid"><article class="result-primary"><span>필수 선택형 · 현재 정답</span><strong>${s.correct}<small> / ${s.total}</small></strong><p>${s.answered}문항 풀이 · 첫 시도 정답 ${s.firstCorrect}개</p><div class="progress-track"><i style="width:${s.percent}%"></i></div></article><article class="result-small"><span>${icon('talk')} 내 말로 설명</span><strong>${s.reflected}<small> / ${s.promptTotal}</small></strong><p>스스로 설명 가능하다고 표시</p></article><article class="result-small"><span>${icon('folder')} 제출 자료</span><strong>${s.evidenceDone}<small> / ${s.evidenceTotal}</small></strong><p>근거를 적고 직접 확인한 항목</p></article></div><p class="result-boundary">이 결과는 학습 방향을 알려 줍니다. 실제 팀의 과제 PASS/FAIL 판정은 평가자와 제출 자료 확인이 필요해요.</p>
    <section class="results-section"><div class="section-heading"><h2>주제별로 살펴보기</h2><span class="subtle">현재 정답 / 필수 문제</span></div><div class="category-results">${categoryStats.map(c => `<article><div><strong>${esc(c.label)}</strong><span>${c.correct} / ${c.total}</span></div><div class="progress-track"><i style="width:${c.percent}%"></i></div><p>${esc(c.description)}</p><button class="text-button" data-category="${c.id}">이 주제 다시 풀기 ${icon('arrow')}</button></article>`).join('')}</div></section>
    <section class="results-section"><div class="section-heading"><h2>${s.wrong.length ? '한 번 더 보면 좋을 내용' : s.remaining.length ? '아직 만나지 않은 문제가 있어요' : '이제 이유를 설명해 볼 차례예요'}</h2>${s.wrong.length ? '<button class="button secondary small" data-action="retry-wrong">오답만 다시 풀기</button>' : ''}</div>${s.wrong.length ? `<div class="wrong-list">${s.wrong.map(id => { const q = questions.find(q => q.id === id); return `<button data-review-question="${id}"><span>${esc(q.title)}<small>${esc(q.takeaway)}</small></span>${icon('arrow')}</button>`; }).join('')}</div>` : `<div class="empty-card">${icon('leaf')}<p>${s.remaining.length ? `아직 ${s.remaining.length}문항이 남았어요. 한 문제씩 이어가 보세요.` : '정답을 고른 이유도 내 말로 설명할 수 있다면, 더 단단한 이해가 됩니다.'}</p><button class="button primary" ${s.remaining.length ? 'data-action="continue"' : 'data-view="explain"'}>${s.remaining.length ? '이어서 풀기' : '내 말로 설명하기'} ${icon('arrow')}</button></div>`}</section>
    <section class="bonus-card"><div><span class="eyebrow">OPTIONAL</span><h3>rebase도 연습했다면</h3><p>보너스 문제는 필수 점수에 포함하지 않아요.</p></div><button class="button secondary" data-action="bonus-quiz">보너스 문제 풀기 ${icon('arrow')}</button></section><div class="reset-area"><button class="text-button" data-action="ask-reset">${icon('reset')} 이 브라우저의 학습 기록 초기화</button></div>`;
}

function guidePage() {
  const concepts = [
    ['01', '파일 저장 · commit · push', '노트에 글을 썼다고 팀원에게 바로 보이는 건 아니에요.', '파일 저장은 지금 편집한 내용을 남기는 것, commit은 의미 있는 변경을 Git에 기록하는 것, push는 그 기록을 팀이 공유하는 저장소에 보내는 것이에요.'],
    ['02', 'branch · main', '팀의 기본 버전에서 내 작업을 따로 이어 가요.', 'branch는 작업 기록의 갈래예요. main도 브랜치이고, 팀이 확인한 결과를 모아 두는 기본 브랜치로 정한 이름이에요. 작업별로 브랜치를 나누면 동료 작업과 섞지 않고 검토할 수 있어요.'],
    ['03', 'Issue · PR · merge', '할 일, 확인 요청, 합치기를 구분해요.', 'Issue에는 할 일을 적어요. PR은 “이 변경을 확인하고 합쳐 주세요”라는 요청이에요. 리뷰와 승인 뒤 실제로 합치는 행동이 merge예요. PR 하나에 커밋 여러 개가 들어갈 수 있어요.'],
    ['04', '리뷰 · 피드백 반영', '동료가 읽고, 내가 이유를 답해요.', '“좋아요”만 적기보다 특정 문장이나 예시를 보고 질문해요. 작성자는 수정하거나 근거 있는 답변을 남기고, 동료가 최종 결과를 확인해요.'],
    ['05', '충돌 해결', 'Git이 최종 내용을 고르지 못하면 사람이 판단해요.', '같은 문장을 두 사람이 다르게 고칠 수 있어요. 둘의 의도를 확인하고 최종 문장을 정한 뒤 검토해요. 충돌 표시 기호만 지우는 것으로 끝나지 않아요.'],
    ['06', 'amend · reset · revert · stash', '무엇을 되돌리고 싶은지 먼저 생각해요.', '공유 전 메시지 오타는 amend, 공유 전 마지막 커밋을 풀고 내용은 유지하려면 reset --soft HEAD~1, 공유된 파일 변경 취소는 revert, 미완성 변경 임시 보관은 stash예요. revert는 메시지 오타를 고치는 명령이 아니에요.'],
  ];
  return `${pageHeader('작은 개념 노트', '어려운 말부터 풀어 볼까요?', '네 사람이 공부 노트를 함께 만든다고 생각해 보세요.')}<div class="concept-grid">${concepts.map(([n, title, lead, text]) => `<article class="concept-card"><span class="step-number">${n}</span><h2>${esc(title)}</h2><strong>${esc(lead)}</strong><p>${esc(text)}</p></article>`).join('')}</div><div class="guide-actions"><button class="button primary" data-action="continue">이제 한 문제 풀어 보기 ${icon('arrow')}</button><a class="button secondary" href="../docs/0018_b2-2-first-week-guide.md" target="_blank" rel="noopener">전체 쉬운 설명서 ${icon('link')}</a></div>`;
}

function bindInputs() {
  document.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener('change', () => {
    selected = input.value;
    document.querySelectorAll('.answer-option').forEach(label => label.classList.toggle('selected', label.contains(input)));
    $('[data-action="submit-answer"]').disabled = false;
  }));
  $('#bonus-toggle')?.addEventListener('change', event => { includeBonus = event.target.checked; render(); });
  $('#my-explanation')?.addEventListener('input', event => {
    state.drafts[promptId] = event.target.value;
    delete state.reflections[promptId];
    document.querySelectorAll('[data-reflection]').forEach(b => { b.classList.remove('primary'); b.classList.add('secondary'); });
    $('#draft-count').textContent = `${event.target.value.length.toLocaleString()} / 10,000`;
    $('#reveal-answer').disabled = !event.target.value.trim();
    persist();
  });
  document.querySelectorAll('[data-evidence-input]').forEach(input => input.addEventListener('input', () => {
    const id = input.dataset.evidenceInput;
    state.evidence[id] = { note: input.value, checked: false };
    const check = document.querySelector(`[data-evidence-check="${id}"]`);
    check.disabled = !input.value.trim(); check.checked = false;
    updateEvidenceStatus(id); persist();
  }));
  document.querySelectorAll('[data-evidence-check]').forEach(input => input.addEventListener('change', () => {
    const id = input.dataset.evidenceCheck;
    state.evidence[id].checked = input.checked && Boolean(state.evidence[id].note.trim());
    updateEvidenceStatus(id); persist();
  }));
}

function updateEvidenceStatus(id) {
  const el = $(`#evidence-status-${id}`);
  el.textContent = state.evidence[id].checked ? '직접 확인함' : '확인 전';
  el.classList.toggle('complete', state.evidence[id].checked);
  const s = summarize(state, questions, explainPrompts, evidenceChecks);
  $('#evidence-count').innerHTML = `${s.evidenceDone} <small>/ ${s.evidenceTotal}</small>`;
}

function startSession(ids, label, first = 0) {
  session = ids; sessionLabel = label; quizIndex = first;
  selected = null; retrying = false; navigate('quiz');
}

document.addEventListener('click', event => {
  const el = event.target.closest('[data-view],[data-action],[data-question],[data-prompt],[data-reflection],[data-category],[data-review-question]');
  if (!el || el.disabled) return;
  if (el.dataset.view) { event.preventDefault(); navigate(el.dataset.view); return; }
  if (el.dataset.question) { quizIndex = session.indexOf(el.dataset.question); selected = null; retrying = false; render(); $('#question-title')?.focus(); return; }
  if (el.dataset.prompt) { promptId = el.dataset.prompt; revealed = false; render(); $('#my-explanation')?.focus({ preventScroll: true }); return; }
  if (el.dataset.reflection) { if (state.drafts[promptId]?.trim()) { state.reflections[promptId] = el.dataset.reflection; persist(); render(); $('#announcer').textContent = '나의 판단을 저장했어요.'; } return; }
  if (el.dataset.category) { startSession(questions.filter(q => q.category === el.dataset.category && !q.bonus).map(q => q.id), categories.find(c => c.id === el.dataset.category).label); return; }
  if (el.dataset.reviewQuestion) { startSession([el.dataset.reviewQuestion], '다시 이해하기'); return; }
  const action = el.dataset.action;
  if (action === 'continue') {
    const ids = questions.filter(q => !q.bonus).map(q => q.id);
    startSession(ids, '기본 이해 확인', Math.max(0, ids.findIndex(id => !state.answers[id])));
  } else if (action === 'submit-answer' && selected) {
    const q = questions.find(q => q.id === session[quizIndex]);
    state = recordAnswer(state, q, selected); retrying = false; persist(); render();
    $('.answer-feedback')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    $('#announcer').textContent = state.answers[q.id].correct ? '정답이에요. 설명을 읽고 다음 문제로 이동해 주세요.' : '다시 생각해 볼 문제예요. 아래 설명을 읽어 주세요.';
  } else if (action === 'retry-question') { retrying = true; selected = null; render(); $('input[name="answer"]')?.focus(); }
  else if (action === 'next-question') { if (quizIndex === session.length - 1) navigate('results'); else { quizIndex++; selected = null; retrying = false; render(); $('#question-title')?.focus(); } }
  else if (action === 'previous-question' && quizIndex > 0) { quizIndex--; selected = null; retrying = false; render(); $('#question-title')?.focus(); }
  else if (action === 'reveal-explanation' && state.drafts[promptId]?.trim()) { revealed = true; render(); $('.reflection-box')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
  else if (action === 'retry-wrong') { startSession(summarize(state, questions).wrong, '오답 다시 보기'); }
  else if (action === 'bonus-quiz') { startSession(questions.filter(q => q.bonus).map(q => q.id), '보너스 · rebase'); }
  else if (action === 'download') {
    const blob = new Blob([buildReport(state, questions, explainPrompts, evidenceChecks)], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob); const link = document.createElement('a');
    link.href = url; link.download = `같이-Git-학습기록-${new Date().toLocaleDateString('sv-SE')}.md`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    $('#announcer').textContent = '학습 기록 다운로드를 시작했어요.';
  } else if (action === 'ask-reset') $('#reset-dialog').showModal();
  else if (action === 'cancel-reset') $('#reset-dialog').close();
  else if (action === 'confirm-reset') {
    state = emptyState(); selected = null; retrying = false; revealed = false; includeBonus = false; quizIndex = 0;
    try { storage.removeItem(STORAGE_KEY); } catch { /* Report persistence failure below. */ }
    persist(); navigate('home'); $('#announcer').textContent = '이 브라우저의 학습 기록을 초기화했어요.';
  }
});
window.addEventListener('hashchange', () => { view = views[location.hash.slice(1)] ? location.hash.slice(1) : 'home'; render(); });
render();
