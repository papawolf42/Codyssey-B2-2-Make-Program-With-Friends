# B2-2 협업 증빙 매핑 및 캡처 체크리스트 가이드

> **대상 과제**: Codyssey B2-2 - 친구 3~5명과 함께 프로그램 만드는 법 연습하기 (`mission_02_02`)  
> **기준 시나리오**: [`docs/0011_b2-2-study-notes-scenario.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/docs/0011_b2-2-study-notes-scenario.md)  
> **저장소 URL**: [`https://github.com/nick19850906-debug/mission_02_02`](https://github.com/nick19850906-debug/mission_02_02)  
> **평가 기준 출처**: [`instruction.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md) & [`evalutation.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/evalutation.md)

---

## 📌 1. 핵심 원칙: 증빙의 본질과 세 가지 교정 사항

캡처는 평가관이 직관적으로 확인할 수 있도록 돕는 **시각적 증빙 수단**이며, 과제 명세서(`instruction.md`)가 요구하는 본질은 **"실제 수행과 재현 가능한 기록"**입니다. 문서를 해석할 때 다음 세 가지를 명확히 이해해야 합니다:

1. **“캡처 없으면 무조건 감점”이라는 규정은 없습니다**:
   - 명세서([`instruction.md` 116행, 131행](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md#L116))에 따르면 충돌 해결은 **커밋·PR·문서 기록**으로 증빙하고, 리뷰 반영도 **커밋·수정·답글**로 증빙할 수 있습니다. 캡처는 이를 가장 확실하게 뒷받침하는 강력한 보조 증거입니다.
2. **같은 hunk 충돌도 명세서상 "비자명 충돌"에 해당합니다**:
   - [`instruction.md` 132~134행](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md#L132-L134)에 명시된 비자명 충돌 기준 2가지:
     - ① 같은 파일의 같은 hunk(인접 라인)를 서로 다르게 수정하여 충돌 (우리 팀 충돌 1: `docs/CONTRIBUTING.md`)
     - ② 한쪽은 파일 이동/이름 변경(또는 삭제), 다른 한쪽은 내용 수정 (우리 팀 충돌 2: `notes/03-conflict-guide.md`)
   - 따라서 우리 팀은 명세서가 규정한 **비자명 충돌 2가지 유형을 모두 실습**하여 기준을 200% 초과 충족합니다.
3. **캡처만 모으는 것이 아니라 "재현 가능한 기록"이 핵심입니다**:
   - [`instruction.md` 146~147행](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md#L146) 및 [211행](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md#L211)에 따라, 트러블슈팅과 충돌 해결은 **상황(What)·절차(How)·결과(Outcome)·주의점/배운 점(Why)**을 고정 템플릿에 맞추어 `docs/conflict-resolution.md`와 `docs/troubleshooting-log.md`에 충실히 기록해야 합니다.
   - 모든 증빙과 PR은 [`SUBMISSION.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/instruction.md#L40)에서 클릭 가능한 링크로 종합 연결됩니다.

---

## 📊 2. `instruction.md` 요구사항 및 증빙 종합 매핑표

| 준비할 증빙 | `instruction.md` 요구사항 및 근거 | 증빙에 보여야 할 핵심 내용 | 추천 파일명 (`docs/images/`) |
|:---|:---|:---|:---|
| **브랜치 보호** | 82~85행: `main` 직접 push 금지, PR 병합, 승인 최소 1명 필수 | GitHub 브랜치 보호 규칙 설정 화면 (직접 push 차단 터미널 로그는 보조) | `01-branch-protection-blocked.png` |
| **Issue–PR 연결** | 95~99행: 작업별 Issue 생성, `Closes #` 연결, 제출 인덱스 추적 | PR 본문의 실제 Issue 번호와 연결 상태 (PR 링크로도 상시 확인 가능) | PR 웹 화면 상시 증빙 |
| **팀원별 PR·리뷰** | 112~116행: 전원 PR 2개 이상 병합, 리뷰 2개 이상 | 작성자·병합 상태(Merged)·리뷰 기록. `SUBMISSION.md` 팀원별 링크 목록 | `12-all-prs-merged.png` |
| **리뷰 피드백 반영** | 116행, 124~126행: 실질 코멘트와 답글·수정 반영 (전원 본인 PR 반영) | 리뷰어 개선 요청 코멘트 → 작성자 수정 커밋 또는 상세 기술 대응 답글 → 재승인 | `04-review-request-changes.png`, `05-review-approved.png` |
| **충돌 1 (Hunk 충돌)** | 130~135행: 같은 hunk 인접 라인 충돌 유발 및 병합 | 충돌 마커(`<<<<<<< HEAD` vs `origin/main`), 웹 알림창, 병합 커밋 | `02-conflict1-web-alert.png`, `03-conflict1-markers.png` |
| **충돌 2 (비자명 충돌)** | 130~135행: 파일 이동(Rename) vs 내용 수정(Modify) 충돌 | 양쪽 이전/새 경로가 모두 찍힌 충돌 마커 및 터미널 3-Way 병합 문구 | `06-conflict2-rename-modify.png` |
| **amend (김상교)** | 141행: 최근 커밋 메시지 수정 | `git log -1` 수정 전·후 메시지와 갱신된 커밋 해시 | `07-troubleshoot-amend.png` |
| **reset (장양환)** | 142행: 로컬 커밋 취소 + 변경 유지 | `git reset --soft HEAD~1` 후 변경사항이 Staging에 보존되고 임시 파일만 제외된 상태 | `08-troubleshoot-reset-soft.png` |
| **revert (조은익)** | 143행: 원격에 push된 커밋 취소 | 원본 커밋 push 결과, `git revert` 역커밋 생성 및 push 결과, `git log -2` | `09-troubleshoot-revert.png` |
| **stash (김건우)** | 144행: 작업 보관 후 브랜치 전환 및 복구 | 작업 보관(stash push) → 브랜치 전환·확인 후 복귀 → 꺼내기(pop) 후 변경 복원 | `10-troubleshoot-stash.png` |
| **Git 네트워크 그래프** | 45~46행: `git log --oneline --graph --all` | 알록달록한 터미널 브랜치 트리 출력 (`docs/git-history.txt` 텍스트 제출 시 캡처는 선택) | `11-git-network-graph.png` |

---

## 📂 3. 캡처 보관 위치 및 문서 내 임베딩 규칙

- **저장 위치**: 팀 작업 저장소의 `docs/images/` 디렉터리
- **문서 내 삽입**:
  - `docs/conflict-resolution.md`: 충돌 1, 2 마커 화면을 마크다운 이미지 태그(`![충돌마커](images/파일명.png)`)로 삽입
  - `docs/troubleshooting-log.md`: amend, reset, revert, stash 4인의 터미널 결과 화면 삽입
  - `docs/troubleshooting-log.md` 및 `docs/images/`를 **PR #22**에서 함께 커밋하여 원격에 병합

---

## 📋 4. 실시간 진행 체크리스트 (타임라인 순서)

팀원들과 실습할 때 아래 체크리스트를 순서대로 점검하세요:

- [x] **[Step 16] 조은익**: `main` 브랜치 직접 푸시 차단(`GH006`) 확인
- [x] **[Step 390~393] 조은익**: PR #14 GitHub 회색 충돌 경고창 및 충돌 마커 확인 (충돌 1: Hunk 충돌 해결 완료)
- [ ] **[Step 505] 김상교**: PR #16 라인 코멘트 및 빨간색 `Request changes` 화면 캡처 (`docs/images/04-review-request-changes.png`)
- [ ] **[Step 508] 김상교/김건우**: PR #16 체크리스트 수정 커밋 반영 후 녹색 `Approved` 화면 캡처 (`docs/images/05-review-approved.png`)
- [ ] **[Step 609] 김건우**: PR #20 GitHub 회색 충돌 경고창 확인
- [ ] **[Step 612] 김건우**: `notes/advanced/03-conflict-guide.md` Rename vs Modify 비자명 충돌 마커 에디터 캡처 (`docs/images/06-conflict2-rename-modify.png`)
- [ ] **[Step 753] 김상교**: `git commit --amend` 메시지 정정 터미널 캡처 (`docs/images/07-troubleshoot-amend.png`)
- [ ] **[Step 756] 장양환**: `git reset --soft` 실행 후 무손실 보존 터미널 캡처 (`docs/images/08-troubleshoot-reset-soft.png`)
- [ ] **[Step 759] 조은익**: `git revert` 원격 브랜치 역커밋 push 및 `git log -2` 캡처 (`docs/images/09-troubleshoot-revert.png`)
- [ ] **[Step 763] 김건우**: `git stash` 보관 후 브랜치 전환 및 `pop` 복구 터미널 캡처 (`docs/images/10-troubleshoot-stash.png`)
- [ ] **[Step 885] 김상교**: `git log --oneline --graph --all > docs/git-history.txt` 생성 및 터미널 그래프 캡처 (`docs/images/11-git-network-graph.png`)
- [ ] **[Step 887] 김상교/김건우**: PR #24 최종 머지 후 PR 12개 All-Merged 목록 화면 캡처 (`docs/images/12-all-prs-merged.png`)
