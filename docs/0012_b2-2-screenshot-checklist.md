# B2-2 필수 및 권장 증빙 캡처 체크리스트 가이드

> **대상 과제**: Codyssey B2-2 - 친구 3~5명과 함께 프로그램 만드는 법 연습하기 (`mission_02_02`)  
> **기준 시나리오**: [`docs/0011_b2-2-study-notes-scenario.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/docs/0011_b2-2-study-notes-scenario.md)  
> **저장소 URL**: [`https://github.com/nick19850906-debug/mission_02_02`](https://github.com/nick19850906-debug/mission_02_02)  
> **목적**: 실습 진행 도중 **어느 타이밍(Step)에 어떤 화면을 캡처해야 감점 없이 100점 만점을 받을 수 있는지** 한눈에 확인하고 체크하는 실전 가이드.

---

## 📂 1. 캡처 이미지 저장 위치 및 권장 파일명

- **저장 위치**: 팀 작업 저장소의 `docs/images/` 디렉터리
- 캡처한 이미지를 `docs/images/` 폴더에 넣고, `docs/conflict-resolution.md`와 `docs/troubleshooting-log.md` 본문에 마크다운 이미지 태그(`![설명](images/파일명.png)`)로 삽입하면 피어 리뷰어가 검토할 때 가독성이 극대화됩니다.

---

## 🔴 2. [절대 필수 4대 증빙] 누락 시 무조건 감점되는 핵심 캡처

다음 4가지 캡처는 `instruction.md` 명세서의 핵심 통과 기준(Branch Protection, 충돌 2회 해결, 코드리뷰 피드백 반영)을 입증하는 증거이므로 **반드시** 실습 중 캡처해야 합니다.

### [필수 1] `main` 브랜치 직접 푸시 차단 화면 (Step 16)
- **시점**: Step 15~16 (조은익 님이 Branch Protection 설정 후 직접 push 테스트할 때)
- **캡처 대상**: 로컬 터미널에서 `git push origin main` 입력 시 **`remote: error: GH006: Protected branch hook declined`** 에러 메시지가 출력된 화면
- **파일명 권장**: `docs/images/01-branch-protection-blocked.png`
- **루브릭 요건**: `main 직접 push 금지` 규칙이 정상 적용되었음을 완벽 증명

---

### [필수 2] [충돌 1] 자명한 충돌 발생 및 충돌 마커 화면 (Step 390, 393)
- **시점**: Step 389~393 (조은익 님이 PR #7 생성 및 로컬 merge 수행 시)
- **캡처 대상 (2장 권장)**:
  1. **GitHub 웹 화면**: PR #7 화면 상단에 뜬 회색 경고창 (**`This branch has conflicts that must be resolved`**)
  2. **VS Code / 에디터 화면**: `docs/CONTRIBUTING.md`에 충돌 마커(**`<<<<<<< HEAD`**, **`=======`**, **`>>>>>>> origin/main`**)가 선명하게 표시된 화면
- **파일명 권장**: 
  - `docs/images/02-conflict1-web-alert.png`
  - `docs/images/03-conflict1-markers.png`
- **루브릭 요건**: 자명한 라인 충돌(Hunk conflict) 유발 및 수동 해결 과정 증빙

---

### [필수 3] [리뷰 피드백 반영] Request Changes & 재승인 화면 (Step 505, 508)
- **시점**: Step 505~508 (김상교 님이 변경 요청 ➔ 김건우 님이 수정 커밋 ➔ 김상교 님이 승인할 때)
- **캡처 대상 (2장 권장)**:
  1. **Request Changes 화면**: PR #8의 `Files changed` 탭에서 김상교 님이 특정 라인에 체크리스트 보강 요청 코멘트를 남기고 빨간색 **`Changes requested`** 마크가 찍힌 화면
  2. **재승인(Approved) 화면**: 김건우 님이 수정 커밋(`docs: Add self-review checklist...`)을 푸시한 후 김상교 님이 녹색 **`Approved`**로 상태를 바꾼 화면
- **파일명 권장**: 
  - `docs/images/04-review-request-changes.png`
  - `docs/images/05-review-approved.png`
- **루브릭 요건**: `본인 PR에서 최소 1회 이상 리뷰 코멘트를 반영(커밋/수정/답글로 증빙)` 필수 기준 충족

---

### [필수 4] [충돌 2] 비자명 충돌(Rename vs Modify) 화면 (Step 609, 612)
- **시점**: Step 609~612 (김건우 님이 PR #10에서 최신 main 병합 시)
- **캡처 대상**:
  1. **터미널 병합 문구**: `Auto-merging notes/advanced/03-conflict-guide.md` 및 `CONFLICT (content)` 문구
  2. **VS Code 충돌 마커 화면**: 양쪽 파일 경로가 각각 표기된 충돌 마커 화면:
     ```markdown
     <<<<<<< HEAD:notes/03-conflict-guide.md
     ...
     =======
     ...
     >>>>>>> origin/main:notes/advanced/03-conflict-guide.md
     ```
- **파일명 권장**: `docs/images/06-conflict2-rename-modify.png`
- **루브릭 요건**: `최소 1회 비자명 충돌(파일 이동/이름 변경 vs 내용 수정)` 해결 증빙

---

## 🟡 3. [강력 추천 4대 증빙] Git 4대 트러블슈팅 실습 (4인 전원 1장씩)

`docs/troubleshooting-log.md` 문서에 4명이 각자 실습한 터미널 캡처를 첨부하면 피어 리뷰어의 질문을 완벽히 방어할 수 있습니다.

| 팀원 | 담당 명령어 | 실습 타이밍 | 캡처할 터미널 화면 | 권장 파일명 |
|:---:|:---|:---:|:---|:---|
| **김상교** | `git commit --amend` | **Step 753** | 오타 커밋 작성 후 `--amend`로 메시지 정정된 직후의 `git log -1` 화면 | `docs/images/07-troubleshoot-amend.png` |
| **장양환** | `git reset --soft` | **Step 755~756** | `git reset --soft HEAD~1` 실행 직후 `git status`에서 변경 파일들이 Staging에 보존되어 있고, `git restore --staged`로 임시 파일만 제외된 화면 | `docs/images/08-troubleshoot-reset-soft.png` |
| **조은익** | `git revert` | **Step 759** | `git revert <해시>` 실행 후 새로운 `Revert "..."` 역커밋이 히스토리 맨 위에 안전하게 추가된 `git log -2` 화면 | `docs/images/09-troubleshoot-revert.png` |
| **김건우** | `git stash` & `pop` | **Step 761~763** | `git stash push` 실행 후 `git status`로 깨끗해졌다가, `git stash pop` 실행 후 작업 파일이 정상 복원된 터미널 화면 | `docs/images/10-troubleshoot-stash.png` |

---

## 🟢 4. [보너스 2종] 최종 발표 및 완결 증빙

### [보너스 1] 전체 Git 커밋 그래프 트리 화면 (Step 885)
- **시점**: 모든 PR 머지가 완료된 후
- **명령어**: `git log --oneline --graph --all`
- **내용**: 4명의 feature 브랜치가 뻗어나갔다가 머지되고, 충돌 머지 커밋이 생성된 알록달록한 터미널 그래프 전체 화면
- **파일명 권장**: `docs/images/11-git-network-graph.png`

### [보너스 2] GitHub PR 목록 전체 Merged 화면
- **시점**: PR #12까지 최종 머지 완료 후
- **화면**: GitHub 저장소의 `Pull requests` 탭에서 `is:pr is:closed` (또는 `is:merged`) 필터링 시 **PR #1부터 PR #12까지 12개 전체가 보라색 Merged 상태**로 정렬된 화면
- **파일명 권장**: `docs/images/12-all-prs-merged.png`

---

## 📋 5. 시나리오 진행 중 실시간 체크박스 (타임라인 순서)

팀원들과 화면 공유하며 실습할 때 아래 체크박스를 하나씩 체크하며 캡처를 수집하세요:

- [ ] **[Step 16] 조은익**: `main` 직접 푸시 차단(`GH006`) 터미널 캡처 완료
- [ ] **[Step 390] 조은익**: PR #7 GitHub 회색 충돌 경고창 캡처 완료
- [ ] **[Step 393] 조은익**: `docs/CONTRIBUTING.md` 충돌 마커(`<<<<<<< HEAD`) 에디터 캡처 완료
- [ ] **[Step 505] 김상교**: PR #8 라인 코멘트 및 빨간색 `Request changes` 화면 캡처 완료
- [ ] **[Step 508] 김상교/김건우**: PR #8 수정 커밋 반영 후 녹색 `Approved` 화면 캡처 완료
- [ ] **[Step 609] 김건우**: PR #10 GitHub 회색 충돌 경고창 캡처 완료
- [ ] **[Step 612] 김건우**: `notes/advanced/03-conflict-guide.md` 비자명 충돌 마커 캡처 완료
- [ ] **[Step 753] 김상교**: `git commit --amend` 성공 터미널 캡처 완료
- [ ] **[Step 756] 장양환**: `git reset --soft` 및 unstage 터미널 캡처 완료
- [ ] **[Step 759] 조은익**: `git revert` 역커밋 생성 터미널 캡처 완료
- [ ] **[Step 763] 김건우**: `git stash push & pop` 복원 터미널 캡처 완료
- [ ] **[Step 885] 김상교**: `git log --oneline --graph --all` 전체 그래프 캡처 완료
