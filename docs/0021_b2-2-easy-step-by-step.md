# 0021. B2-2 왕초보 전용 마스터 실행 매뉴얼 — 11번처럼 한 단계씩 따라 하는 Step-by-Step (김상교 팀장 새 레포 기준)

> **문서 안내**:  
> 이 문서는 Git/GitHub 협업이 처음인 팀원들을 위해 **11번 문서의 친절한 클릭/복붙 가이드** 방식과 **0015/0016의 체계적인 병렬 협업 구조**를 결합한 최신 실전 매뉴얼입니다.  
> 특히 **김상교 님이 새 저장소를 생성하고 호스트를 맡아 진행하는 상황**에 맞추어 모든 절차를 재배치했습니다.  
> 복잡한 스크립트나 위압적인 용어 없이, **[화면 어디를 누르는지]**, **[터미널에 무엇을 입력하는지]**, **[본문에 무엇을 복사-붙여넣는지]**를 아주 자잘한 마이크로 스텝(Micro-step)으로 하나씩 안내합니다.

---

## 👥 팀원 배역 및 기여 분담표

| 기호 | 팀원 이름 | 역할 | 개인 학습 노트 (제3부) | 4대 트러블슈팅 (제4/5부) | 충돌 실습 (공통 파일) | 내가 작성할 동료 리뷰 (2건) | 내 PR을 검토할 리뷰어 |
|:---:|:---:|:---:|:---|:---:|:---|:---|:---|
| **A** | **김상교** | **호스트 & 팀장** / 인프라 & 최종 취합 | `notes/01-git-basics.md` | `git commit --amend` | **1조 선병합** (`review-request.md`) | **김건우 노트 PR**, **조은익 실습 PR** | 장양환 (노트), 조은익 (실습) |
| **B** | **장양환** | 코어 / Flow & 충돌해결 | `notes/02-github-flow.md` | `git reset --soft` | **1조 충돌 해결** (`review-request.md`) | **김상교 노트 PR**, **김건우 실습 PR** | 조은익 (노트), 김건우 (실습) |
| **C** | **조은익** | 코어 / 충돌이론 & revert | `notes/03-conflict-guide.md` | `git revert` | **2조 선병합** (`sync-timing.md`) | **장양환 노트 PR**, **김상교 실습 PR** | 김건우 (노트), 김상교 (실습) |
| **D** | **김건우** | 심화 / PR문화 & 충돌해결 | `notes/04-open-source.md` | `git stash` & `pop` | **2조 충돌 해결** (`sync-timing.md`) | **조은익 노트 PR**, **장양환 실습 PR** | 김상교 (노트), 장양환 (실습) |

> 💡 **공통 PR 분담**:
> - **제2부 공통 준비 PR**: 김상교 작성 ➔ 장양환 리뷰 및 승인
> - **제6부 추가 충돌 PR 2건**: 조은익의 삭제 PR ➔ 김상교 리뷰 / 김건우의 수정·해결 PR ➔ 장양환 리뷰
> - **제7부 최종 통합 PR**: 김상교 작성 ➔ 김건우 리뷰 및 승인

---

## 🧭 전체 진행 로드맵 한눈에 보기

```
[제1부] 사전 준비 (김상교 새 저장소 생성/보호 + 전원 클론 & 설정)
   ↓
[제2부] 협업 규칙 & 공통 실습 파일 준비 (김상교 작성/취합 ➔ 장양환 리뷰 & 머지)
   ↓
[제3부] 4인 4색 개인 학습노트 작성 (★ 4명이 동시에 각자 진행!)
   ├─ 김상교: 01-git-basics.md (리뷰어: 장양환)
   ├─ 장양환: 02-github-flow.md (리뷰어: 조은익)
   ├─ 조은익: 03-conflict-guide.md (리뷰어: 김건우)
   └─ 김건우: 04-open-source.md (리뷰어: 김상교)
   ↓
[제4부] 1조 트러블슈팅 & 충돌 1       [제5부] 2조 트러블슈팅 & 충돌 2
   (김상교 & 장양환 독립 진행)            (조은익 & 김건우 독립 진행)
   ├─ 김상교: amend 실습 & 선병합         ├─ 조은익: revert 실습 & 선병합
   └─ 장양환: reset 실습 & 충돌 해결      └─ 김건우: stash 실습 & 충돌 해결
   ↓
[제6부] 추가 충돌 3: 파일 삭제 vs 내용 수정 (제4·5부 완료 후 시작)
   ├─ 조은익: 삭제 PR 선병합 (리뷰어: 김상교)
   └─ 김건우: 내용 수정 & 충돌 해결 (리뷰어: 장양환)
   ↓
[제7부] 최종 산출물 취합 & 제출 PR (김상교 작성 ➔ 김건우 리뷰 & 최종 머지)
   ↓
[제8부] 최종 평가 항목별 구두 면접 문답 대비 (항목 2~4 전수 점검)
```

**충돌 실습은 총 3번입니다**:
- **제4·5부**: 같은 파일의 같은 줄을 서로 다르게 수정하고 문장을 합칩니다. 과제의 비자명 충돌 조건 1번에 해당합니다.
- **새 제6부**: 한 사람은 파일을 삭제하고 다른 사람은 그 파일을 수정합니다. 파일을 남길지 결정하며, 과제의 비자명 충돌 조건 2번을 경험합니다.
- 과제의 최소 요구는 충돌 2회(그중 비자명 충돌 1회)입니다. 이 문서에서는 유형을 바꾼 실습을 하나 더 하며, 총 3회의 실제 충돌과 해결 기록을 남깁니다.

---

## 💡 왕초보 3대 황금 원칙 (이것만 기억하세요!)

1. **고정된 번호에 집착하지 마세요!**
   - 이전 11번 문서가 꼬였던 가장 큰 이유는 "#1번 다음에 무조건 #2번이어야 한다"는 고정관념 때문이었습니다.
   - GitHub에서는 누가 먼저 버튼을 누르느냐에 따라 번호가 1, 2, 3... 달라질 수 있습니다.
   - 본 매뉴얼에서는 **"방금 화면에 생성된 실제 번호(예: #5)"**를 확인하고 복사해 넣도록 안내하므로 절대 꼬이지 않습니다.
2. **개인 작업(제3부 학습노트)은 4명이 동시에 시작하세요!**
   - 다른 사람 끝날 때까지 기다리지 마세요. 4개의 노트는 서로 다른 파일이므로 각자 자기 컴퓨터에서 동시에 만들고 PR을 올리면 됩니다.
3. **충돌 실습은 자기 파트너(1조는 상교-양환, 2조는 은익-건우)하고만 맞추세요!**
   - 1조와 2조는 다루는 파일이 완전히 다르므로 서로 기다릴 필요 없이 자기 조끼리만 순서를 지켜 머지하면 됩니다.
   - 제6부는 제4·5부 PR이 모두 병합된 뒤, 새 브랜치에서 시작하는 추가 실습입니다.

---

# [제1부] 사전 준비 & 팀 저장소 기본 세팅

> **목표**: 저장소 호스트인 **김상교** 님이 팀 저장소를 새로 생성하고, 팀원 3명(장양환, 조은익, 김건우)을 초대한 뒤, 전원이 로컬로 복제하고 `main` 브랜치 보호를 검증합니다.

### Step 1-1. [김상교] 저장소 생성 (새 저장소 기준)
1. 웹 브라우저를 열고 김상교 님의 GitHub에 로그인합니다.
2. 우측 상단 `+` 버튼 ➔ **`New repository`** 클릭.
3. 설정 입력:
   - **Repository name**: `mission_02_02` (또는 팀에서 정한 새 저장소 이름)
   - **Public** (또는 평가관 접근이 가능한 상태) 선택
   - **Add a README file** 체크 (초기 `main` 브랜치 자동 생성용)
4. 초록색 **`Create repository`** 버튼 클릭!
5. 📌 **저장소 URL 확인**: 생성된 저장소 주소(예: `https://github.com/김상교GitHubID/mission_02_02`)를 팀원들에게 공유합니다.

### Step 1-2. [김상교] 팀원 3명 Collaborator 초대
1. 저장소 상단 탭에서 **`Settings`** 클릭.
2. 좌측 사이드바에서 **`Collaborators`** 클릭 (비밀번호나 모바일 2FA 인증 요구 시 완료).
3. 초록색 **`Add people`** 버튼 클릭.
4. 검색창에 팀원 3명의 GitHub ID(또는 이메일)를 차례대로 검색하여 추가:
   - **장양환** 님 GitHub ID 입력 ➔ **`Add ... to this repository`** 클릭
   - **조은익** 님 GitHub ID 입력 ➔ **`Add ... to this repository`** 클릭
   - **김건우** 님 GitHub ID 입력 ➔ **`Add ... to this repository`** 클릭

### Step 1-3. [장양환, 조은익, 김건우] 초대 수락
1. 각자의 이메일함 또는 GitHub 알림창(`https://github.com/notifications`)을 확인합니다.
2. 김상교 님이 보낸 초대장을 열고 초록색 **`Accept invitation`** 버튼을 클릭합니다.
3. 저장소 메인 페이지가 정상적으로 열리는지 확인합니다.

### Step 1-4. [김상교] `main` 브랜치 보호 규칙(Branch Protection) 설정
> ⚠️ **이유**: 누군가 실수로 `main` 브랜치에 직접 푸시하여 코드가 꼬이는 것을 원천 차단하고, 반드시 PR과 1명 이상의 승인(Review)을 거쳐서만 머지되도록 강제합니다.

1. 저장소 상단 **`Settings`** ➔ 좌측 사이드바 **`Branches`** 클릭.
2. **Branch protection rules** 섹션에서 **`Add branch protection rule`** (또는 `Add rule`) 클릭.
3. **Branch name pattern** 입력창에 `main` 입력.
4. 아래 핵심 항목들을 체크합니다:
   - [x] **`Require a pull request before merging`** 체크
   - [x] **`Require approvals`** 체크하고 숫자 `1` 확인
   - [x] **`Do not allow bypassing the above settings`** 체크 (저장소 소유자인 김상교 님을 포함해 전원 우회 금지)
5. 맨 아래 초록색 **`Create`** (또는 `Save changes`) 버튼 클릭!

### Step 1-5. [전원: 김상교, 장양환, 조은익, 김건우] 로컬 복제 & Git 사용자 설정
> ⚠️ **필독**: Git 실습을 진행하려면 반드시 먼저 저장소를 로컬 컴퓨터로 복제(`clone`)하고 해당 폴더로 들어가야 합니다!

1. 각자의 컴퓨터에서 터미널(PowerShell, CMD, Git Bash, Mac 터미널 등)을 엽니다.
2. 작업할 폴더(예: `Dev`)로 이동한 후 김상교 님의 새 저장소를 복제합니다:
   ```bash
   git clone https://github.com/김상교GitHubID/mission_02_02.git
   cd mission_02_02
   ```
3. 이번 프로젝트에서 사용할 본인의 이름과 이메일을 이 저장소에 정확히 설정합니다:
   ```bash
   git config --local user.name "본인이름"
   git config --local user.email "본인GitHub이메일"
   ```
4. 설정 확인:
   ```bash
   git config user.name
   git config user.email
   git status
   ```
   `nothing to commit, working tree clean`이 나오면 정상 복제 및 준비 완료입니다!

### Step 1-6. [김상교] main 직접 푸시 차단 검증 (캡처 포인트 📸)
> ⚠️ 방금 clone한 `mission_02_02` 폴더 안에서 실행합니다.

1. 김상교 님의 로컬 터미널에서 `main` 브랜치에 직접 푸시를 시도해 봅니다:
   ```bash
   git checkout main
   echo "test direct push" >> README.md
   git commit -am "test: Try direct push to main"
   git push origin main
   ```
2. **기대 결과**: 터미널에 아래와 같은 에러가 발생하며 푸시가 단호히 거부되어야 정상입니다!
   ```text
   remote: error: GH006: Protected branch hook declined
   remote: error: Changes must be made through a pull request.
   ```
   > 📸 **[증빙 캡처]**: 이 차단 에러 메시지가 뜬 터미널 화면을 캡처해 두면 훌륭한 보고서 증빙이 됩니다!
3. 테스트 커밋 취소 (작업 트리 깨끗이 복원):
   ```bash
   git reset --hard HEAD~1
   ```

---

# [제2부] 협업 규칙 & 공통 실습 시드 파일 준비

> **목표**: 팀원 4인이 역할을 분담하여 협업 규칙 가이드(`CONTRIBUTING.md`) 내용을 준비하고, 팀장 김상교 님이 이를 취합하여 PR 템플릿과 공통 시드 파일 2종과 함께 `main`에 머지합니다.

### Step 2-1. [김상교] 준비 Issue 발행 (협업 가이드 분담 명시)
1. 저장소 웹 페이지 ➔ **`Issues`** 탭 클릭 ➔ 초록색 **`New issue`** 버튼 클릭.
2. **Title**: `[docs] 협업 규칙 가이드 및 실습 기반 환경 구축`
3. **Description**:
   ```markdown
   ## 작업 목적
   - 팀원 전원이 준수할 브랜치 전략(GitHub Flow), 커밋 규칙, PR 작성 및 코드 리뷰 규칙 수립
   - 향후 4대 트러블슈팅 및 2건의 충돌 실습에 사용할 기본 파일과 PR 템플릿 구축

   ## 팀원별 가이드 작성 분담
   - 김상교: 1. 브랜치 전략 (GitHub Flow 선택 이유 3줄 포함)
   - 장양환: 2. 커밋 메시지 컨벤션
   - 조은익: 3. 충돌 발생 시 기본 대응 흐름
   - 김건우: 4. Pull Request 및 코드 리뷰 규칙

   ## 세부 작업 항목
   - [ ] docs/CONTRIBUTING.md 팀원 분담 작성 및 취합
   - [ ] .github/pull_request_template.md 생성
   - [ ] src/practice/review-request.md 시드 파일 생성
   - [ ] src/practice/sync-timing.md 시드 파일 생성
   ```
4. 초록색 **`Submit new issue`** 클릭!
5. 📌 **화면 확인**: 생성된 **실제 이슈 번호(예: #1)**를 꼭 메모해 둡니다.

### Step 2-2. [장양환, 조은익, 김건우] Issue에 담당 섹션 의견 댓글 등록
각 팀원은 방금 생성된 Issue #1로 이동하여 하단 댓글창에 자신이 담당한 규칙 초안을 남겨 분담 작성에 참여합니다:
- **장양환 댓글**:
  > *"커밋 메시지 태그로 `feat`(새 기능/노트), `fix`(버그/충돌해결), `docs`(가이드/증빙/SUBMISSION), `refactor`(구조 개선) 4종을 기본으로 채택할 것을 제안합니다."*
- **조은익 댓글**:
  > *"충돌 발생 시 로컬 터미널에서 두 사람의 의도를 파악하고, 문장을 합칠지 또는 파일을 유지할지 등을 합의한 뒤 `docs/conflict-resolution.md`에 결정 이유를 기록하는 규칙을 제안합니다."*
- **김건우 댓글**:
  > *"PR 작성 시 What/Why/How 및 Closes #이슈번호 기재를 필수로 하고, 단순 'LGTM' 승인을 지양하며 라인 코멘트로 질문/대안을 주고받는 최소 품질 기준을 제안합니다."*

### Step 2-3. [김상교] 로컬 브랜치 생성
김상교 님 터미널에서 실행:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-setup
```

### Step 2-4. [김상교] 협업 가이드 `docs/CONTRIBUTING.md` 작성
1. 폴더 생성:
   ```bash
   mkdir -p docs
   ```
2. `docs/CONTRIBUTING.md` 파일을 생성하고 팀원들의 의견을 취합한 아래 내용을 저장합니다:
   ```markdown
   # 개발 협업 가이드라인 (CONTRIBUTING)

   ## 1. 브랜치 전략 (GitHub Flow) - 작성 담당: 김상교
   - `main`: 배포 가능한 안정 상태의 보호 브랜치 (직접 push 절대 금지)
   - `feature/<이름>-<작업명>`: 작업 단위 브랜치 (예: `feature/sangkyo-git-basics`)

   ### [우리 팀이 GitHub Flow를 선택한 이유]
   1. 수시 배포 및 빠른 피드백 반영에 가장 최적화된 단순하고 직관적인 브랜치 모델입니다.
   2. 복잡한 릴리즈 브랜치(Git Flow 등) 대신 main 브랜치를 항상 안정된 상태로 유지하여 협업 병목을 방지합니다.
   3. 모든 기능 개발을 독립된 feature 브랜치와 PR 기반 코드 리뷰로 진행하여 문서 품질을 극대화합니다.

   ## 2. 커밋 메시지 컨벤션 - 작성 담당: 장양환
   - `feat`: 새로운 학습 노트 또는 실습 기능 추가
   - `fix`: 문서 내용 오류 수정 또는 머지 충돌 해결
   - `docs`: 가이드 문서, 증빙 기록, SUBMISSION 수정
   - `refactor`: 디렉터리 구조 개편 및 파일 정리

   ## 3. Pull Request 및 코드 리뷰 규칙 - 작성 담당: 김건우
   - 모든 PR 본문에는 `Closes #이슈번호` 및 What(변경사항), Why(변경이유), How(검증방법)를 반드시 명시합니다.
   - 최소 1명 이상의 동료 리뷰 승인(Approve)을 받아야 머지할 수 있습니다.
   - 단순 "확인했습니다"를 지양하고, 구체적인 라인 피드백이나 질문을 남기며 최소 1회 이상 상호작용(답글/수정)을 나눕니다.

   ## 4. 충돌 발생 시 기본 대응 흐름 - 작성 담당: 조은익
   - **발생 감지**: GitHub PR 화면에 충돌 경고가 뜨거나 로컬 머지 시 `CONFLICT` 알림을 확인합니다.
   - **대응 주체**: 충돌을 유발한 PR 작업자가 즉시 팀원들에게 상황을 공유하고 로컬 터미널에서 직접 해결합니다.
   - **해결 절차**: `git fetch origin` 다음 `git merge origin/main`을 실행하고 `git status`로 충돌 파일을 확인합니다. 문장 충돌은 마커를 정리하고, 삭제/수정 충돌은 파일을 유지할지 삭제할지 합의한 뒤 해결 결과를 커밋합니다.
   - **기록 의무**: 충돌 원인, 충돌 마커 원문(있는 경우), 실제 충돌 메시지와 상태, 해결 전략, 배운 점을 `docs/conflict-resolution.md`에 필수로 기록합니다.
   ```

### Step 2-5. [김상교] PR 템플릿 `.github/pull_request_template.md` 작성
1. 폴더 생성:
   ```bash
   mkdir -p .github
   ```
2. `.github/pull_request_template.md` 파일 생성 및 저장:
   ```markdown
   ## What (변경 사항)
   - 어떤 파일이 추가/수정되었는지 적어주세요.

   ## Why (변경 이유)
   - 왜 이 작업이 필요한지 목적을 적어주세요.

   ## How (검증 방법)
   - 정상 작동/서식 표시를 어떻게 확인했는지 적어주세요.

   ## 연결 Issue
   Closes #이슈번호
   ```

### Step 2-6. [김상교] 실습 시드 파일 2종 생성
> ⚠️ **주의**: 이 파일들은 나중에 1조(A/B)와 2조(C/D)가 진짜 충돌을 일으킬 기초 파일입니다. 오타 없이 정확히 만들어주세요!

1. 폴더 생성:
   ```bash
   mkdir -p src/practice
   ```
2. `src/practice/review-request.md` 파일 생성 및 저장:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크를 공유한다.
   ```
3. `src/practice/sync-timing.md` 파일 생성 및 저장:
   ```markdown
   # 동기화 시점 실습

   동기화: 원격 변경을 확인한다.
   ```

### Step 2-7. [김상교] 커밋 및 원격 푸시
```bash
git add docs/CONTRIBUTING.md .github/pull_request_template.md src/practice/review-request.md src/practice/sync-timing.md
git commit -m "docs: Add CONTRIBUTING guide, PR template, and practice seed files"
git push -u origin feature/sangkyo-setup
```

### Step 2-8. [김상교 & 장양환] 준비 PR 생성, 리뷰 및 머지
1. **[김상교]**: GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `docs: Add CONTRIBUTING guide, PR template, and practice seed files`
3. **Description**:
   ```markdown
   Closes #1

   ## What (변경 사항)
   - docs/CONTRIBUTING.md: 4인이 분담 작성한 GitHub Flow 브랜치 전략, 커밋 규칙, 리뷰 규칙 수립
   - .github/pull_request_template.md: 기본 PR 템플릿 생성
   - src/practice/: review-request.md, sync-timing.md 충돌 실습용 시드 파일 생성

   ## Why (변경 이유)
   - 팀원 전체의 일관된 협업 기준을 마련하고 향후 트러블슈팅/충돌 실습 기반을 마련하기 위함입니다.

   ## How (검증 방법)
   - 마크다운 렌더링 확인 완료
   - 시드 파일 내용 및 경로 정상 확인
   ```
   *(※ `Closes #1`의 숫자는 Step 2-1에서 생성된 실제 번호로 적어주세요!)*
4. **Reviewers**: **장양환** 지정 ➔ `Create pull request` 클릭!
5. **[장양환]**: PR `Files changed` 탭 ➔ 브랜치 전략 라인 `+` 클릭 후 코멘트 작성:
   > *"브랜치 명명 규칙에 `feature/*` 외에 운영 중 긴급 대응을 위한 `hotfix/*` 브랜치 규칙도 고려해볼 수 있을까요?"*
   `Start a review` ➔ `Submit review` (Comment).
6. **[김상교]**: 답글 작성:
   > *"좋은 제안입니다! GitHub Flow에서는 빠른 수정을 위해 기본 feature로 통일하되, 긴급 상황 시 hotfix 브랜치도 유연하게 허용하도록 가이드에 반영하겠습니다."*
7. **[장양환]**: `Review changes` ➔ **`Approve`** 제출!
8. **[김상교]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (이슈 #1 자동 종료 확인)

---

# [제3부] 4인 4색 개인 학습노트 작성 (동시 병렬 진행!)

> 🌟 **왕초보 필독**:
> - 4명의 작업 파일(`notes/01~04`)이 완전히 분리되어 있으므로 **4명이 서로 기다리지 않고 지금 바로 동시에 각자 터미널과 웹에서 진행**합니다!

---

## 3-1. [김상교] Git 기초 학습노트 작성
- **작성자**: 김상교 | **작성 파일**: `notes/01-git-basics.md` | **지정 리뷰어**: 장양환

#### Step 3-1-1. 김상교 Issue 생성
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[feat] Git 3대 영역과 기본 명령어 학습노트 작성`
3. **Description**:
   ```markdown
   ## 작업 목적
   - Git의 핵심 3대 영역(Working Tree, Staging Area, Repository)의 동작 원리를 정리합니다.
   ## 세부 내용
   - [ ] notes/01-git-basics.md 작성 및 diff 예시 수록
   ```
4. `Submit new issue` 클릭 ➔ **생성된 이슈 번호(예: #2) 메모!**

#### Step 3-1-2. 브랜치 분기 & 파일 작성
김상교 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-git-basics
mkdir -p notes
```
`notes/01-git-basics.md` 파일 생성 후 아래 내용 저장:
```markdown
# 01. Git 기초: 세 가지 영역과 기본 흐름

## 1. Git의 세 가지 작업 영역
Git은 파일의 상태를 세 가지 영역에서 관리합니다.
1. **Working Tree (작업 디렉터리)**: 개발자가 실제로 파일을 작성하고 수정하는 로컬 디렉터리입니다.
2. **Staging Area (Index)**: 다음 커밋에 포함할 변경 사항들을 선별하여 준비하는 영역입니다.
3. **Repository (저장소, Commit)**: Staging Area에 준비된 스냅샷이 영구적으로 기록되는 Git 이력의 영역입니다.

## 2. 변경 사항 추적 및 확인 (diff)
- `git diff`: Working Tree와 Staging Area의 차이를 비교합니다 (아직 add하지 않은 변경).
- `git diff --cached`: Staging Area와 최신 커밋(HEAD)의 차이를 비교합니다 (커밋에 포함될 변경).

## 3. 커밋의 책임
한 커밋에는 관련된 변경만 묶어서 담아야 하며, 커밋 메시지는 동료가 그 의도를 쉽게 파악할 수 있도록 구체적으로 작성해야 합니다.
```

#### Step 3-1-3. 커밋 & 푸시
```bash
git add notes/01-git-basics.md
git commit -m "feat: Add notes/01-git-basics.md explaining git three areas"
git push -u origin feature/sangkyo-git-basics
```

#### Step 3-1-4. PR 생성 & 리뷰어 지정
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `feat: Add notes/01-git-basics.md explaining git three areas`
3. **Description**:
   ```markdown
   Closes #실제이슈번호

   ## What
   - notes/01-git-basics.md: Git 3대 영역 및 diff 명령어 개념 정리
   ## Why
   - Git의 동작 원리를 팀원들과 공유하여 정확한 커밋 습관을 기르기 위함입니다.
   ## How
   - 마크다운 프리뷰 정상 렌더링 확인 완료
   ```
4. **Reviewers**: **장양환** 지정 ➔ `Create pull request` 클릭.

#### Step 3-1-5. 장양환 리뷰 ➔ 김상교 답글 & 반영 ➔ 머지
1. **[장양환]**: PR `Files changed` 탭 ➔ 본문 라인 `+` 클릭 ➔ 코멘트 작성:
   > *"3대 영역 설명이 명확합니다! 초보자를 위해 git status 명령어의 역할도 한 줄 추가되면 완벽할 것 같습니다."*
2. **[김상교]**: 에디터로 `notes/01-git-basics.md` 파일 맨 아래에 다음 내용 추가:
   ```markdown

   ## 4. 상태 확인
   - `git status`: 현재 세 영역의 상태(수정된 파일, 스테이징된 파일 등)를 한눈에 확인합니다.
   ```
   커밋 및 푸시:
   ```bash
   git commit -am "docs: Add git status explanation based on review feedback"
   git push origin feature/sangkyo-git-basics
   ```
   PR에 답글: *"좋은 피드백 감사합니다! git status 설명 반영하여 추가 커밋 올렸습니다."*
3. **[장양환]**: 변경 확인 후 `Review changes` ➔ **`Approve`** 제출.
4. **[김상교]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭!

---

## 3-2. [장양환] GitHub Flow 학습노트 작성
- **작성자**: 장양환 | **작성 파일**: `notes/02-github-flow.md` | **지정 리뷰어**: 조은익

#### Step 3-2-1. 장양환 Issue 생성
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[feat] GitHub Flow 브랜치 전략 학습노트 작성`
3. **Description**:
   ```markdown
   ## 작업 목적
   - GitHub Flow의 핵심 원칙과 기능 브랜치 생명주기를 정리합니다.
   ## 세부 내용
   - [ ] notes/02-github-flow.md 작성 및 main 안정성 서술
   ```
4. `Submit new issue` 클릭 ➔ **생성된 이슈 번호 메모!**

#### Step 3-2-2. 브랜치 분기 & 파일 작성
장양환 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/yanghwan-github-flow
mkdir -p notes
```
`notes/02-github-flow.md` 파일 생성 후 아래 내용 저장:
```markdown
# 02. GitHub Flow: 브랜치 생명주기와 협업

## 1. GitHub Flow의 핵심 원칙
1. **`main` 브랜치는 항상 안정 상태를 유지한다**: 언제 배포해도 오류가 없는 신뢰할 수 있는 상태여야 합니다.
2. **작업은 항상 `feature` 브랜치에서 시작한다**: main에서 브랜치를 따서 목적에 맞는 작업을 진행합니다.
3. **수시로 원격에 push한다**: 작업 진행 상황을 팀원들과 투명하게 공유합니다.
4. **Pull Request를 통해 피드백을 받는다**: 코드 리뷰와 토론을 거쳐 승인을 얻습니다.
5. **승인 후 `main`에 병합한다**: 동료 검증이 끝난 코드만 배포 브랜치에 합쳐집니다.

## 2. 브랜치 명명 규칙
- `feature/<이름>-<작업명>`: 기능 및 문서 작성 브랜치
- `hotfix/<이름>-<수정명>`: 긴급 롤백 및 버그 수정 브랜치
```

#### Step 3-2-3. 커밋 & 푸시
```bash
git add notes/02-github-flow.md
git commit -m "feat: Add notes/02-github-flow.md detailing branch lifecycle"
git push -u origin feature/yanghwan-github-flow
```

#### Step 3-2-4. PR 생성 & 리뷰어 지정
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `feat: Add notes/02-github-flow.md detailing branch lifecycle`
3. **Description**:
   ```markdown
   Closes #실제이슈번호

   ## What
   - notes/02-github-flow.md: GitHub Flow 원칙 및 브랜치 생명주기 정리
   ## Why
   - 안전하고 민첩한 브랜치 전략을 체화하기 위함입니다.
   ## How
   - 마크다운 렌더링 확인 완료
   ```
4. **Reviewers**: **조은익** 지정 ➔ `Create pull request` 클릭.

#### Step 3-2-5. 조은익 리뷰 ➔ 장양환 답글 & 반영 ➔ 머지
1. **[조은익]**: PR `Files changed` 탭 ➔ 라인 `+` 클릭 ➔ 코멘트 작성:
   > *"브랜치 생명주기가 잘 정리되었습니다. 머지 완료 후 로컬과 원격의 작업 브랜치를 삭제(delete branch)하는 규칙도 권장사항으로 들어가면 좋겠습니다."*
2. **[장양환]**:
   > ⚠️ **인코딩 주의**: 터미널 `echo >>` 명령은 Windows PowerShell에서 UTF-16LE로 저장되어 글자가 깨질 수 있습니다! **VS Code나 메모장에서 직접 파일을 열고 맨 아래에 다음 한 줄을 추가하고 저장**하세요:
   ```markdown
   6. **머지 후 브랜치 정리**: 역할을 다한 feature 브랜치는 삭제하여 깔끔한 저장소를 유지합니다.
   ```
   커밋 및 푸시:
   ```bash
   git commit -am "docs: Add branch deletion guideline after merge"
   git push origin feature/yanghwan-github-flow
   ```
   답글 작성: *"좋은 의견 감사합니다! 머지 후 브랜치 정리 항목 추가했습니다."*
3. **[조은익]**: `Review changes` ➔ **`Approve`** 제출.
4. **[장양환]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭!

---

## 3-3. [조은익] Git 충돌 원리 학습노트 작성
- **작성자**: 조은익 | **작성 파일**: `notes/03-conflict-guide.md` | **지정 리뷰어**: 김건우

#### Step 3-3-1. 조은익 Issue 생성
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[feat] Git 충돌 원리와 해결법 학습노트 작성`
3. **Description**:
   ```markdown
   ## 작업 목적
   - Git 머지 충돌(Conflict)이 발생하는 원인과 마커 구조, 해결 기준을 정리합니다.
   ## 세부 내용
   - [ ] notes/03-conflict-guide.md 작성 및 마커 설명
   ```
4. `Submit new issue` 클릭 ➔ **생성된 이슈 번호 메모!**

#### Step 3-3-2. 브랜치 분기 & 파일 작성
조은익 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/eunik-conflict-guide
mkdir -p notes
```
`notes/03-conflict-guide.md` 파일 생성 후 아래 내용 저장:

````markdown
# 03. Git 충돌(Conflict)의 원리와 해결

## 1. 충돌이 발생하는 원인
동일한 공통 조상(Base)에서 분기한 두 브랜치가 **동일한 파일의 동일한 위치(Hunk)**를 서로 다르게 수정하고 병합할 때, Git은 어떤 것이 올바른 변경인지 스스로 판단할 수 없어 충돌을 일으키고 작업을 멈춥니다. **한쪽은 파일을 삭제하고 다른 쪽은 그 파일을 수정한 경우**에도, 파일을 없앨지 수정 내용을 살릴지 사람이 결정해야 하므로 충돌이 발생합니다.

## 2. 충돌 마커 읽는 법
같은 부분의 문장 수정이 충돌하면 파일 내에 다음과 같은 마커가 표시됩니다:
```text
<<<<<<< HEAD
현재 내 브랜치의 변경 사항
=======
가져오려는 대상 브랜치(origin/main)의 변경 사항
>>>>>>> origin/main
```
- `<<<<<<< HEAD`: 현재 내가 위치한 브랜치의 코드
- `=======`: 두 변경 사항의 경계선
- `>>>>>>> ...`: 병합하려는 상대방 브랜치의 코드

## 3. 충돌 해결 원칙
1. `git status`와 충돌 메시지를 확인하고 두 사람의 작업 의도를 파악합니다. 삭제/수정 충돌에는 위 마커가 없을 수 있습니다.
2. 양쪽의 유효한 내용을 합의하여 하나의 온전한 코드로 정리합니다.
3. 문장 충돌은 마커 기호(`<<<<<<<`, `=======`, `>>>>>>>`)를 완전히 지운 후 `git add`합니다. 삭제/수정 충돌은 파일을 남기기로 했다면 `git add`, 삭제하기로 했다면 `git rm`으로 결정을 반영한 뒤 머지 커밋을 작성합니다.
````

#### Step 3-3-3. 커밋 & 푸시
```bash
git add notes/03-conflict-guide.md
git commit -m "feat: Add notes/03-conflict-guide.md explaining conflict causes and markers"
git push -u origin feature/eunik-conflict-guide
```

#### Step 3-3-4. PR 생성 & 리뷰어 지정
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `feat: Add notes/03-conflict-guide.md explaining conflict causes and markers`
3. **Description**:
   ```markdown
   Closes #실제이슈번호

   ## What
   - notes/03-conflict-guide.md: 충돌 메커니즘 및 충돌 마커 해독법 정리
   ## Why
   - 팀원들이 충돌을 두려워하지 않고 합리적으로 해결할 수 있는 기준을 제시합니다.
   ## How
   - 마크다운 렌더링 확인 완료
   ```
4. **Reviewers**: **김건우** 지정 ➔ `Create pull request` 클릭.

#### Step 3-3-5. 김건우 리뷰 ➔ 조은익 답글 & 반영 ➔ 머지
1. **[김건우]**: PR `Files changed` 탭 ➔ 라인 `+` 클릭 ➔ 코멘트 작성:
   > *"충돌 마커 설명이 아주 직관적입니다! 만약 충돌 해결 도중 실수를 해서 머지를 아예 취소하고 처음 상태로 되돌리고 싶을 때 쓰는 명령어(`git merge --abort`)도 팁으로 들어가면 실무에 큰 도움이 될 것 같습니다."*
2. **[조은익]**: 에디터로 파일 맨 아래에 팁 추가 후 저장:
   ```markdown

   ## 4. 긴급 탈출: git merge --abort
   충돌 해결 도중 파일이 꼬였거나 작업을 처음부터 다시 시도하고 싶다면 `git merge --abort` 명령어로 병합 시도 전 상태로 깨끗하게 롤백할 수 있습니다.
   ```
   커밋 & 푸시:
   ```bash
   git commit -am "docs: Add git merge --abort tip based on review"
   git push origin feature/eunik-conflict-guide
   ```
   답글 작성: *"유용한 명령어 제안 감사합니다! merge --abort 설명 추가했습니다."*
3. **[김건우]**: `Review changes` ➔ **`Approve`** 제출.
4. **[조은익]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭!

---

## 3-4. [김건우] 오픈소스 & PR 문화 학습노트 작성
- **작성자**: 김건우 | **작성 파일**: `notes/04-open-source.md` | **지정 리뷰어**: 김상교

#### Step 3-4-1. 김건우 Issue 생성
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[feat] 오픈소스 협업 및 PR 문화 학습노트 작성`
3. **Description**:
   ```markdown
   ## 작업 목적
   - 건강한 코드 리뷰 문화와 효과적인 PR 작성 요령을 정리합니다.
   ## 세부 내용
   - [ ] notes/04-open-source.md 작성 및 리뷰 에티켓 수록
   ```
4. `Submit new issue` 클릭 ➔ **생성된 이슈 번호 메모!**

#### Step 3-4-2. 브랜치 분기 & 파일 작성
김건우 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/gunwoo-open-source
mkdir -p notes
```
`notes/04-open-source.md` 파일 생성 후 아래 내용 저장:
```markdown
# 04. PR과 코드 리뷰 문화: 서로 신뢰하는 협업

## 1. 좋은 Pull Request의 조건
- **명확한 제목과 본문**: What(무엇을), Why(왜), How(어떻게 검증했는가)가 담겨야 합니다.
- **적절한 작업 단위**: 한 PR의 변경 범위가 너무 크면 리뷰어의 피로도가 증가하고 버그를 놓치기 쉽습니다.
- **연결 Issue 명시**: `Closes #이슈번호`를 기재하여 PR이 머지될 때 관련 이슈가 자동으로 닫히도록 설정합니다.

## 2. 건강한 코드 리뷰 에티켓
- **사람이 아닌 코드에 집중하기**: 작성자를 평가하는 것이 아니라 결과물의 완성도를 함께 높이는 협력 과정입니다.
- **구체적인 근거와 대안 제시**: "별로예요" 대신 "이 방식은 예외 처리가 누락될 수 있으니 X 방식을 고려해보는 건 어떨까요?"처럼 대안을 제안합니다.
- **감사와 피드백 반영**: 피드백을 받으면 감사를 표하고, 수정 커밋을 올려 코멘트에 링크를 공유합니다.
```

#### Step 3-4-3. 커밋 & 푸시
```bash
git add notes/04-open-source.md
git commit -m "feat: Add notes/04-open-source.md on open source PR practices"
git push -u origin feature/gunwoo-open-source
```

#### Step 3-4-4. PR 생성 & 리뷰어 지정
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `feat: Add notes/04-open-source.md on open source PR practices`
3. **Description**:
   ```markdown
   Closes #실제이슈번호

   ## What
   - notes/04-open-source.md: PR 작성 규칙 및 코드 리뷰 에티켓 수록
   ## Why
   - 팀원 간 건강한 소통과 높은 코드 품질을 유지하기 위함입니다.
   ## How
   - 마크다운 서식 렌더링 확인 완료
   ```
4. **Reviewers**: **김상교** 지정 ➔ `Create pull request` 클릭.

#### Step 3-4-5. 김상교 리뷰 ➔ 김건우 답글 & 반영 ➔ 머지
1. **[김상교]**: PR `Files changed` 탭 ➔ 라인 `+` 클릭 ➔ 코멘트 작성:
   > *"리뷰 에티켓이 매우 공감됩니다! 리뷰 요청자가 PR을 올리기 전에 스스로 체크해보는 자가 점검 체크리스트(Self-checklist)도 2~3줄 들어가면 더 실용적일 것 같습니다."*
2. **[김건우]**: 에디터로 파일 맨 아래에 내용 추가 후 저장:
   ```markdown

   ## 3. PR 제출 전 자가 점검 체크리스트
   - [ ] 내가 작성한 코드가 요구사항을 충족하는가?
   - [ ] 불필요한 공백이나 디버깅용 코드가 남아있지 않은가?
   - [ ] 문서 링크나 서식이 깨지지 않고 정상 표시되는가?
   ```
   커밋 & 푸시:
   ```bash
   git commit -am "docs: Add PR self-checklist based on review feedback"
   git push origin feature/gunwoo-open-source
   ```
   답글 작성: *"좋은 제안 감사합니다! 자가 점검 체크리스트 추가 커밋 올렸습니다."*
3. **[김상교]**: `Review changes` ➔ **`Approve`** 제출.
4. **[김건우]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭!

---

# [제4부] 1조(김상교 & 장양환) 트러블슈팅 및 충돌 1 실습

> 🎯 **1조 미션**:
> - **대상 공통 파일**: `src/practice/review-request.md` (초기 내용: `리뷰 요청: PR 링크를 공유한다.`)
> - **김상교**: Issue 발행 ➔ `git commit --amend` 실습 후 공통 파일 수정 ➔ **먼저 main에 머지(선병합)!**
> - **장양환**: Issue 발행 ➔ `git reset --soft` 실습 후 공통 파일 수정 ➔ **최신 main 머지 시 충돌 발생 ➔ 로컬에서 두 의미를 모두 살려 직접 해결 & 머지!**

---

### Step 4-1. [김상교 & 장양환] 공통 기준 커밋(SHA) 확인
김상교 님과 장양환 님 모두 로컬 터미널에서:
```bash
git checkout main
git pull origin main
git log -1 --oneline
```
두 사람 화면의 최신 커밋 해시(예: `abc1234`)가 동일한지 확인합니다. 이 공통 조상에서 두 사람이 각자 출발합니다!

---

### Step 4-2. [김상교] 실습 Issue A 발행
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[practice] amend 실습 및 리뷰 요청 가이드 보완 (김상교)`
3. **Description**:
   ```markdown
   ## 작업 목적
   - git commit --amend 명령어로 미푸시 로컬 커밋 메시지 오타를 안전하게 수정
   - src/practice/review-request.md에 '변경 이유' 안내 문구 추가
   ```
4. `Submit new issue` 클릭 ➔ **실제 이슈 번호(예: #6) 메모!**

### Step 4-3. [김상교] 브랜치 생성 및 `amend` 실습
김상교 님 터미널:
```bash
git checkout -b feature/sangkyo-amend-practice
mkdir -p src/practice docs/evidence
```

1. **오타가 포함된 1차 커밋 생성**:
   ```bash
   # Mac / Linux / Git Bash:
   echo "amend 메시지 수정 실습 파일" > src/practice/sangkyo-recovery.txt

   # Windows PowerShell:
   "amend 메시지 수정 실습 파일" | Out-File -FilePath src/practice/sangkyo-recovery.txt -Encoding utf8

   git add src/practice/sangkyo-recovery.txt
   git commit -m "feat: Rekord amend practice with typoo"
   ```
2. **수정 전 커밋 해시 및 메시지 확인**:
   ```bash
   git rev-parse HEAD
   git log -1 --oneline
   ```
   *(터미널에 출력된 이전 해시(예: `9061d35...`)와 오타 메시지를 복사해 둡니다.)*
3. **`git commit --amend`로 오타 바로잡기 (원격 push 전!)**:
   ```bash
   git commit --amend -m "feat: Record amend practice with corrected commit message"
   ```
4. **결과 확인 (커밋 해시 교체 및 fuller 로그 확인)**:
   ```bash
   git rev-parse HEAD
   git log -1 --format=fuller
   git reflog -2
   ```
   *(새로 갱신된 해시와 `git log -1 --format=fuller` 출력 내용을 복사해 둡니다.)*

### Step 4-4. [김상교] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/sangkyo-amend.md` 생성 후 아래 내용을 저장합니다 (복사한 실제 SHA와 터미널 로그를 입력):

````markdown
# A 김상교: amend 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 김상교
- 대상 브랜치: `feature/sangkyo-amend-practice`
- 실습 도구: `git commit --amend`

## 2. 상황 및 재현 조건
- 로컬에서 최신 커밋을 생성했으나 커밋 메시지에 오타(`Rekord ... typoo`)가 포함됨.
- 아직 원격에 푸시하기 전이므로 안전하게 로컬 최신 커밋 메시지를 교체하고자 함.

## 3. 실행 명령 및 전후 결과
- 수정 전 커밋 SHA: `(Step 4-3 2번에서 복사한 해시 입력)`
- 실행 명령: `git commit --amend -m "feat: Record amend practice with corrected commit message"`
- 수정 후 커밋 SHA: `(Step 4-3 4번에서 복사한 새 해시 입력)`
- 결과: 커밋 내용(트리 스냅샷)은 온전히 유지되고, 커밋 해시가 갱신되며 메시지가 교체됨.

### git log -1 fuller 출력 (실행 증빙)
```text
(Step 4-3 4번에서 확인한 git log -1 --format=fuller 터미널 출력을 붙여넣습니다)
```

## 4. 선택 이유 및 주의점
- 이미 원격에 푸시된 공유 커밋에는 amend를 사용해서는 안 됩니다 (강제 푸시 force push로 인해 동료들의 로컬 이력이 손상될 위험).
- 만약 이미 푸시된 커밋의 메시지에만 오타가 발생했다면, 파일의 실제 변경 내용을 취소해 버리는 `revert`를 사용해서는 안 됩니다. (revert는 메시지가 아니라 파일의 작업 내용을 되돌리는 명령임)
- 이 경우에는 공유 이력을 그대로 보존한 채, 관련 Issue/PR의 본문이나 코멘트를 통해 올바른 커밋 의도를 명시적으로 보완 설명하는 것이 실무 협업의 정석입니다.
````
2. **공통 파일 `src/practice/review-request.md` 수정**:
   파일을 열어 기존 내용을 아래와 같이 수정합니다:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크와 변경 이유를 공유한다.
   ```
3. **커밋 및 푸시**:
   ```bash
   git add docs/evidence/sangkyo-amend.md src/practice/review-request.md
   git commit -m "practice: Amend commit message and update review request guide with reason"
   git push -u origin feature/sangkyo-amend-practice
   ```

### Step 4-5. [김상교] PR A 생성 및 선병합 (리뷰어: 조은익)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Review request workflow and amend practice (김상교)`
3. **Description**:
   ```markdown
   Closes #김상교실습이슈번호

   ## What
   - src/practice/sangkyo-recovery.txt: amend 실습 파일
   - docs/evidence/sangkyo-amend.md: amend 실습 증빙 문서
   - src/practice/review-request.md: 리뷰 요청 가이드에 '변경 이유' 명시

   ## Why
   - amend 트러블슈팅을 완결하고 1조 충돌 실습의 선행 변경을 반영하기 위함입니다.

   ## How
   - git log/reflog를 통해 커밋 해시 갱신 확인 완료
   ```
4. **Reviewers**: **조은익** 지정 ➔ `Create pull request` 클릭.
5. **[조은익]**: `Files changed` 확인 ➔ 라인 코멘트 작성:
   > *"amend 실습 전후 커밋 해시와 원격 푸시 전 사용 원칙이 `sangkyo-amend.md` 증빙에 명확히 기록되었습니다. 공유 이력 보호 원칙을 잘 준수했네요!"*
6. **[김상교]**: 답글 작성 (*"네, 원격 푸시 전 로컬 브랜치에서만 안전하게 실행했습니다. 확인 감사합니다!"*).
7. **[조은익]**: `Review changes` ➔ **`Approve`** 클릭.
8. **[김상교]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (선병합 완료! 🎉)

---

### Step 4-6. [장양환] 실습 Issue B 발행
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[practice] soft reset 실습 및 충돌 1 해결 (장양환)`
3. **Description**:
   ```markdown
   ## 작업 목적
   - git reset --soft HEAD~1 명령어로 작업 손실 없이 직전 로컬 커밋을 취소하고 staged 상태 검증
   - src/practice/review-request.md 수정 후 김상교 PR과의 머지 충돌을 로컬에서 합의 해결
   ```
4. `Submit new issue` 클릭 ➔ **실제 이슈 번호(예: #7) 메모!**

### Step 4-7. [장양환] 브랜치 생성 및 `reset --soft` 실습
장양환 님 터미널:
```bash
git checkout -b feature/yanghwan-reset-practice
mkdir -p src/practice docs/evidence
```

1. **로컬 커밋 생성**:
   ```bash
   # Mac / Linux / Git Bash:
   echo "soft reset 변경 보존 실습 파일" > src/practice/yanghwan-recovery.txt

   # Windows PowerShell:
   "soft reset 변경 보존 실습 파일" | Out-File -FilePath src/practice/yanghwan-recovery.txt -Encoding utf8

   git add src/practice/yanghwan-recovery.txt
   git commit -m "feat: Temporary commit to be reset"
   git rev-parse HEAD
   ```
   *(취소 대상이 될 커밋 해시(예: `a1b2c3d...`)를 복사해 둡니다.)*

2. **`git reset --soft HEAD~1` 실행 (원격 push 전!)**:
   ```bash
   git reset --soft HEAD~1
   ```

3. **리셋 직후 상태 및 되돌아간 HEAD 위치 복사 (가장 중요!)**:
   ```bash
   git rev-parse HEAD
   git status --short
   ```
   *(★ 다시 커밋하기 전, 이 시점에서 되돌아간 HEAD 해시와 `A  src/practice/yanghwan-recovery.txt` 출력을 복사해 둡니다!)*  
   **기대 화면**: `A  src/practice/yanghwan-recovery.txt`가 **녹색 'A' (Changes to be committed, Staged 상태)**로 온전히 살아있어야 합니다! 커밋 껍데기만 쏙 빠지고 작업 내용은 안전하게 보존되었습니다.

4. **올바른 메시지로 다시 커밋**:
   ```bash
   git commit -m "feat: Record soft reset practice and preserve staged changes"
   git rev-parse HEAD
   ```
   *(새로 생성된 재커밋 해시를 복사해 둡니다.)*

### Step 4-8. [장양환] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/yanghwan-reset.md` 생성 후 아래 내용 저장 (복사한 실제 SHA와 터미널 출력 입력):

````markdown
# B 장양환: reset --soft 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 장양환
- 대상 브랜치: `feature/yanghwan-reset-practice`
- 실습 도구: `git reset --soft HEAD~1`

## 2. 상황 및 재현 조건
- 로컬 실습 파일을 커밋했으나 커밋을 취소하고 staged 상태를 유지한 채 재작업하고자 함.
- 아직 원격에 푸시하기 전이므로 로컬 히스토리만 안전하게 한 단계 롤백함.

## 3. 실행 명령 및 상태 변화
- 취소 대상 커밋 SHA: `(Step 4-7 1번에서 복사한 취소 대상 해시 입력)`
- 실행 명령: `git reset --soft HEAD~1`
- 리셋 후 HEAD 위치: `(Step 4-7 3번에서 복사한 리셋 직후 HEAD 해시 입력)`
- 리셋 후 `git status --short`:
  ```text
  (Step 4-7 3번에서 확인한 git status --short 터미널 출력을 붙여넣으세요)
  ```
- 확인: 파일이 Staged Area에 온전히 보존되어 녹색 'A' 상태로 확인됨.
- 재커밋 SHA: `(Step 4-7 4번에서 복사한 재커밋 해시 입력)`
- 재커밋 명령: `git commit -m "feat: Record soft reset practice and preserve staged changes"`

## 4. 선택 이유 및 주의점
- `--mixed`나 `--hard`와 달리 `--soft`는 작업 파일 및 스테이징 상태를 전혀 손실하지 않고 HEAD 위치만 한 단계 뒤로 이동시킴.
- 로컬 전용 커밋에서만 사용해야 하며, 이미 원격에 공유된 커밋에는 적용하지 않음.
````
2. **공통 파일 `src/practice/review-request.md` 수정**:
   파일을 열어 기존 내용을 아래와 같이 수정합니다:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크와 검증 결과를 공유한다.
   ```
3. **커밋 및 푸시**:
   ```bash
   git add docs/evidence/yanghwan-reset.md src/practice/review-request.md
   git commit -m "practice: Soft reset practice and update review request guide with test result"
   git push -u origin feature/yanghwan-reset-practice
   ```

### Step 4-9. [장양환] PR B 생성 (리뷰어: 김건우)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Review request verification and reset practice (장양환)`
3. **Description**:
   ```markdown
   Closes #장양환실습이슈번호

   ## What
   - src/practice/yanghwan-recovery.txt: soft reset 실습 파일
   - docs/evidence/yanghwan-reset.md: soft reset 실습 증빙 문서
   - src/practice/review-request.md: 리뷰 요청 가이드에 '검증 결과' 명시

   ## Why
   - soft reset 트러블슈팅을 완결하고 1조 충돌 실습을 진행하기 위함입니다.
   - (김상교 님 선병합에 따라 로컬 충돌 해결 진행 예정)

   ## How
   - git status --short를 통해 Staged 상태 보존 확인 완료
   ```
4. **Reviewers**: **김건우** 지정 ➔ `Create pull request` 클릭!
5. 📌 **화면 확인**: GitHub PR 하단에 회색 경고창으로 **"This branch has conflicts that must be resolved"**가 떠 있는 것을 확인합니다!

---

### Step 4-10. [장양환] 💥 충돌 발생 및 로컬 해결!
1. 장양환 님 터미널에서 최신 `main`의 변경 사항을 당겨옵니다:
   ```bash
   git fetch origin
   git merge origin/main
   ```
2. **터미널 충돌 발생 메시지 확인!**:
   ```text
   Auto-merging src/practice/review-request.md
   CONFLICT (content): Merge conflict in src/practice/review-request.md
   Automatic merge failed; fix conflicts and then commit the result.
   ```
3. 에디터로 `src/practice/review-request.md` 파일을 엽니다. 아래처럼 충돌 마커가 보입니다:
   ```markdown
   # 리뷰 요청 실습

   <<<<<<< HEAD
   리뷰 요청: PR 링크와 검증 결과를 공유한다.
   =======
   리뷰 요청: PR 링크와 변경 이유를 공유한다.
   >>>>>>> origin/main
   ```
4. **두 사람의 의도를 모두 살려 파일 수정하기**:
   충돌 마커(`<<<<<<<`, `=======`, `>>>>>>>`)를 모두 지우고, 변경 이유와 검증 결과를 모두 포함한 한 문장으로 수정합니다:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.
   ```
   저장합니다!
5. **충돌 해결 증빙 문서 `docs/evidence/conflict-ab.md` 작성**:
   `docs/evidence/conflict-ab.md` 파일을 생성하고 아래 내용을 저장합니다:

````markdown
# 충돌 1 해결 보고서 (1조: 김상교 & 장양환)

## 1. 충돌 발생 배경
- 대상 파일: `src/practice/review-request.md`
- 발생 원인: 동일한 공통 기준 커밋에서 분기한 두 브랜치가 동일한 라인을 각각 다르게 수정함 (김상교: 변경 이유 / 장양환: 검증 결과).
- 김상교 PR이 먼저 main에 머지된 후, 장양환 브랜치에서 `git merge origin/main` 수행 시 충돌 발생.

## 2. 충돌 마커 원문
```text
<<<<<<< HEAD
리뷰 요청: PR 링크와 검증 결과를 공유한다.
=======
리뷰 요청: PR 링크와 변경 이유를 공유한다.
>>>>>>> origin/main
```

## 3. 해결 전략 및 합의 내용
- 변경 이유와 검증 결과 모두 코드 리뷰 요청 시 필수적인 정보이므로 두 의미를 모두 보존하기로 합의함.
- 최종 문장: `리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.`

## 4. 배운 점
- 충돌은 오류가 아니라 협업 과정에서 발생하는 자연스러운 현상이며, 소통을 통해 더 완전한 결과물로 발전시킬 수 있음을 확인함.
````

### Step 4-11. [장양환] 머지 커밋 생성 및 푸시
```bash
git add src/practice/review-request.md docs/evidence/conflict-ab.md
git commit -m "fix: Resolve merge conflict in review-request.md by preserving both reasons and results"
git push origin feature/yanghwan-reset-practice
```

### Step 4-12. [김건우 & 장양환] 리뷰, Approve 및 머지
1. **[장양환]**: GitHub PR B 페이지 새로고침 ➔ 충돌 경고 해소 확인!
2. **[김건우]**: PR B `Files changed` 탭 확인 ➔ 라인 코멘트 작성:
   > *"충돌 마커가 깨끗이 제거되었고, 두 팀원의 의도('변경 이유'와 '검증 결과')가 한 문장으로 올바르게 통합되었습니다. `conflict-ab.md` 증빙도 완벽하여 승인합니다!"*
3. **[장양환]**: 답글 작성 (*"세심한 검토 감사합니다! 두 변경점 모두 누락 없이 반영했습니다."*).
4. **[김건우]**: `Review changes` ➔ **`Approve`** 제출!
5. **[장양환]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (1조 미션 완벽 완료! 🏆)

---

# [제5부] 2조(조은익 & 김건우) 트러블슈팅 및 충돌 2 실습

> 🎯 **2조 미션**:
> - **대상 공통 파일**: `src/practice/sync-timing.md` (초기 내용: `동기화: 원격 변경을 확인한다.`)
> - **조은익**: Issue 발행 ➔ `git revert` 실습 후 공통 파일 수정 ➔ **먼저 main에 머지(선병합)!**
> - **김건우**: Issue 발행 ➔ `git stash` 실습 후 공통 파일 수정 ➔ **최신 main 머지 시 충돌 발생 ➔ 로컬에서 두 의미를 모두 살려 직접 해결 & 머지!**

---

### Step 5-1. [조은익 & 김건우] 공통 기준 커밋(SHA) 확인
조은익 님과 김건우 님 모두 로컬 터미널에서:
```bash
git checkout main
git pull origin main
git log -1 --oneline
```
두 사람 화면의 커밋 해시가 동일한지 확인하고 출발합니다!

---

### Step 5-2. [조은익] 실습 Issue C 발행
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[practice] revert 실습 및 동기화 가이드 보완 (조은익)`
3. **Description**:
   ```markdown
   ## 작업 목적
   - 이미 원격에 푸시된 공유 커밋을 git revert로 안전하게 취소하고 역커밋 생성
   - src/practice/sync-timing.md에 '작업 시작 전' 안내 문구 추가
   ```
4. `Submit new issue` 클릭 ➔ **실제 이슈 번호(예: #8) 메모!**

### Step 5-3. [조은익] 브랜치 생성 및 `revert` 실습
조은익 님 터미널:
```bash
git checkout -b feature/eunik-revert-practice
mkdir -p src/practice docs/evidence
```

1. **실수로 잘못 공유된 1차 커밋 생성**:
   ```bash
   # Mac / Linux / Git Bash:
   echo "원격 공유 후 취소할 실수 문장" > src/practice/eunik-recovery.txt

   # Windows PowerShell:
   "원격 공유 후 취소할 실수 문장" | Out-File -FilePath src/practice/eunik-recovery.txt -Encoding utf8

   git add src/practice/eunik-recovery.txt
   git commit -m "feat: Add faulty feature to be reverted"
   git rev-parse HEAD
   ```
   *(취소 대상이 될 1차 커밋 해시를 복사해 둡니다.)*

2. **원격에 먼저 푸시 (공유 이력 만들기!)**:
   ```bash
   git push -u origin feature/eunik-revert-practice
   ```
   *(원격 푸시 성공을 확인합니다. 원격에 이미 공유된 커밋임을 확정합니다.)*

3. **`git revert`로 공유 이력을 보존하며 안전 취소**:
   ```bash
   git revert --no-commit HEAD
   ```

4. **역커밋(Revert Commit) 생성 및 2차 원격 푸시**:
   ```bash
   git commit -m "revert: Revert faulty feature to preserve public commit history"
   git rev-parse HEAD
   git push origin feature/eunik-revert-practice
   ```
   *(새로 생성된 역커밋 해시를 복사하고, 2차 원격 푸시 성공을 확인합니다.)*

5. **결과 확인 (두 커밋 이력 보존 확인)**:
   ```bash
   git log -2 --oneline
   ```
   *(원본 커밋 위에 이를 뒤집는 revert 커밋이 나란히 생성된 터미널 출력을 복사해 둡니다!)*

### Step 5-4. [조은익] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/eunik-revert.md` 생성 후 아래 내용 저장 (복사한 실제 SHA와 터미널 출력 입력):

````markdown
# C 조은익: revert 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 조은익
- 대상 브랜치: `feature/eunik-revert-practice`
- 실습 도구: `git revert`

## 2. 상황 및 재현 조건
- 원격 저장소에 이미 푸시된 공유 커밋을 취소해야 하는 상황을 가정하여 실습 파일 생성 후 원격 푸시 완료.
- 1차 푸시 대상 커밋 SHA: `(Step 5-3 1번에서 복사한 1차 커밋 해시 입력)`
- 1차 푸시 실행: `git push -u origin feature/eunik-revert-practice` (원격 브랜치에 공유 확인)

## 3. 실행 명령 및 전후 결과
- 취소 명령: `git revert --no-commit HEAD`
- 역커밋 생성 명령: `git commit -m "revert: Revert faulty feature to preserve public commit history"`
- 역커밋 SHA: `(Step 5-3 4번에서 복사한 역커밋 해시 입력)`
- 역커밋 2차 푸시: `git push origin feature/eunik-revert-practice` (원격 반영 완료)
- 결과: 이전 커밋 이력을 삭제(reset)하지 않고 취소하는 새로운 역커밋을 추가하여 파일 상태를 안전하게 원복함.

### git log -2 결과 확인 (실행 증빙)
```text
(Step 5-3 5번에서 확인한 git log -2 --oneline 터미널 출력을 붙여넣으세요)
```

## 4. 선택 이유 및 주의점
- 원격에 이미 푸시된 커밋을 reset으로 되돌리고 force push하면 다른 동료들의 로컬 이력이 깨지는 치명적인 문제가 발생함.
- 협업 중 공유된 커밋 취소에는 항상 revert를 사용하여 이력을 투명하게 보존해야 함.
````

2. **공통 파일 `src/practice/sync-timing.md` 수정**:
   파일을 열어 기존 내용을 아래와 같이 수정합니다:
   ```markdown
   # 동기화 시점 실습

   동기화: 작업 시작 전에 원격 변경을 확인한다.
   ```
3. **커밋 및 푸시**:
   ```bash
   git add docs/evidence/eunik-revert.md src/practice/sync-timing.md
   git commit -m "practice: Revert faulty commit and update sync timing guide for pre-task"
   git push origin feature/eunik-revert-practice
   ```

### Step 5-5. [조은익] PR C 생성 및 선병합 (리뷰어: 김상교)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Sync timing on start and revert practice (조은익)`
3. **Description**:
   ```markdown
   Closes #조은익실습이슈번호

   ## What
   - src/practice/eunik-recovery.txt: revert 실습 및 역커밋 완료
   - docs/evidence/eunik-revert.md: revert 실습 증빙 문서
   - src/practice/sync-timing.md: 동기화 가이드에 '작업 시작 전' 명시

   ## Why
   - revert 트러블슈팅을 완결하고 2조 충돌 실습의 선행 변경을 반영하기 위함입니다.

   ## How
   - git log를 통해 원본 커밋과 역커밋 이력 보존 확인 완료
   ```
4. **Reviewers**: **김상교** 지정 ➔ `Create pull request` 클릭.
5. **[김상교]**: `Files changed` 확인 ➔ 라인 코멘트 작성:
   > *"원격에 이미 공유된 커밋에 대해 `reset` 대신 `revert`를 사용하여 원본 커밋과 역커밋(Revert commit)을 투명하게 남긴 점이 매우 좋습니다. 원격 푸시 후 revert 커밋이 정상 생성되었음을 확인했습니다!"*
6. **[조은익]**: 답글 작성 (*"네, 공유 브랜치의 히스토리를 보호하기 위해 revert를 적용했습니다. 확인 감사합니다!"*).
7. **[김상교]**: `Review changes` ➔ **`Approve`** 클릭.
8. **[조은익]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (선병합 완료! 🎉)

---

### Step 5-6. [김건우] 실습 Issue D 발행
1. GitHub `Issues` ➔ `New issue` 클릭.
2. **Title**: `[practice] stash 실습 및 충돌 2 해결 (김건우)`
3. **Description**:
   ```markdown
   ## 작업 목적
   - git stash 명령어로 미완성 작업을 임시 보관하고 브랜치 전환 후 복원 검증
   - src/practice/sync-timing.md 수정 후 조은익 PR과의 머지 충돌을 로컬에서 합의 해결
   ```
4. `Submit new issue` 클릭 ➔ **실제 이슈 번호(예: #9) 메모!**

### Step 5-7. [김건우] 브랜치 생성 및 `stash` 실습
김건우 님 터미널:
```bash
git checkout -b feature/gunwoo-stash-practice
mkdir -p src/practice docs/evidence
```

1. **기준 파일 생성 및 1차 커밋 (UTF-8 인코딩 필수!)**:
   ```bash
   # Mac / Linux / Git Bash:
   echo "stash 복구 비교용 기준 내용" > src/practice/gunwoo-recovery.txt

   # Windows PowerShell:
   "stash 복구 비교용 기준 내용" | Out-File -FilePath src/practice/gunwoo-recovery.txt -Encoding utf8

   git add src/practice/gunwoo-recovery.txt
   git commit -m "feat: Add base tracking file for stash practice"
   ```
   > ⚠️ **인코딩 주의 (Windows PowerShell 5.1)**:  
   > PowerShell 5.1에서 `echo ... >` 리디렉션을 쓰면 기본 UTF-16LE로 저장되어 이후 `git diff` 실행 시 텍스트 대신 `Binary files ... differ`로 출력됩니다! PowerShell 사용자는 반드시 위와 같이 `| Out-File -FilePath ... -Encoding utf8` 명령을 사용하거나, VS Code에서 파일을 직접 생성하여 UTF-8로 저장해 주세요.

2. **작업 중인 미완성 변경 사항 추가**:
   에디터(VS Code 등)로 `src/practice/gunwoo-recovery.txt` 파일을 열고 둘째 줄에 다음 내용을 추가하고 저장합니다:
   ```text
   작업 중이던 미완성 추가 라인
   ```
3. **보관 전 변경점(diff) 확인 및 복사**:
   ```bash
   git diff src/practice/gunwoo-recovery.txt
   ```
   *(터미널에 출력된 `+작업 중이던 미완성 추가 라인` diff를 복사해 둡니다.)*
4. **`git stash push`로 작업 임시 보관**:
   ```bash
   git stash push -m "브랜치 전환 전 임시 보관" src/practice/gunwoo-recovery.txt
   git status
   ```
   **기대 화면**: `working tree clean`이 뜨며 작업 중이던 내용이 보관함으로 들어갔습니다!
5. **stash 보관 목록 확인 및 복사**:
   ```bash
   git stash list
   ```
   *(출력된 `stash@{0}: ...` 항목을 복사해 둡니다.)*
6. **급한 확인을 위해 다른 브랜치(main) 다녀오기**:
   ```bash
   git checkout main
   git status
   git checkout feature/gunwoo-stash-practice
   ```
   *(main에서 작업 트리가 깨끗함을 확인하고 원래 작업 브랜치로 돌아옵니다.)*
7. **`git stash pop`으로 작업 내용 완벽 복원!**:
   ```bash
   git stash pop
   git status
   ```
8. **복원 내용 diff 일치 검증 및 복사**:
   ```bash
   git diff src/practice/gunwoo-recovery.txt
   ```
   *(3번에서 복사해 둔 diff와 정확히 일치하여 작업 내용이 온전히 복원되었음을 확인하고, 해당 diff 출력을 복사해 둡니다!)*
9. **복원된 내용 커밋**:
   ```bash
   git commit -am "feat: Restore stashed work after branch switching"
   ```

### Step 5-8. [김건우] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/gunwoo-stash.md` 생성 후 아래 내용 저장 (복사한 실제 터미널 출력 입력):

````markdown
# D 김건우: stash/pop 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 김건우
- 대상 브랜치: `feature/gunwoo-stash-practice`
- 실습 도구: `git stash push` 및 `git stash pop`

## 2. 상황 및 재현 조건
- `src/practice/gunwoo-recovery.txt` 파일 작업 중 긴급하게 `main` 브랜치 상태를 확인해야 하는 상황 발생.
- 미완성 작업을 커밋하지 않고 안전하게 보관 후 복귀하고자 함.

## 3. 실행 절차 및 검증
1. 작업 변경점 확인 (보관 전 git diff 출력):
```text
(Step 5-7 3번에서 확인한 git diff 터미널 출력을 붙여넣으세요)
```
2. `git stash push -m "브랜치 전환 전 임시 보관" src/practice/gunwoo-recovery.txt` 실행
- `git stash list` 확인 출력:
```text
(Step 5-7 5번에서 확인한 git stash list 터미널 출력을 붙여넣으세요)
```
3. `git checkout main`으로 전환하여 메인 브랜치 확인 (`git status`: 깨끗함)
4. `git checkout feature/gunwoo-stash-practice`로 원래 작업 브랜치 복귀
5. `git stash pop` 실행하여 보관 내용 복원
- 복원 후 diff 일치 확인:
```text
(Step 5-7 8번에서 확인한 git diff 터미널 출력을 붙여넣으세요)
```
6. 복원 커밋: `git commit -am "feat: Restore stashed work after branch switching"`

## 4. 선택 이유 및 주의점
- 커밋할 수 없는 불완전한 상태의 코드를 안전하게 격리 보관할 수 있음.
- pop 시 충돌이 날 수 있으므로 보관 전후 파일 상태를 명확히 인지해야 함.
````

2. **공통 파일 `src/practice/sync-timing.md` 수정**:
   파일을 열어 기존 내용을 아래와 같이 수정합니다:
   ```markdown
   # 동기화 시점 실습

   동기화: PR 병합 전에 원격 변경을 확인한다.
   ```
3. **커밋 및 푸시**:
   ```bash
   git add docs/evidence/gunwoo-stash.md src/practice/sync-timing.md
   git commit -m "practice: Stash practice and update sync timing guide for pre-merge"
   git push -u origin feature/gunwoo-stash-practice
   ```

### Step 5-9. [김건우] PR D 생성 (리뷰어: 장양환)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Sync timing before merge and stash practice (김건우)`
3. **Description**:
   ```markdown
   Closes #김건우실습이슈번호

   ## What
   - src/practice/gunwoo-recovery.txt: stash 임시 보관 및 pop 복원 완료
   - docs/evidence/gunwoo-stash.md: stash 실습 증빙 문서
   - src/practice/sync-timing.md: 동기화 가이드에 'PR 병합 전' 명시

   ## Why
   - stash 트러블슈팅을 완결하고 2조 충돌 실습을 진행하기 위함입니다.
   - (조은익 님 선병합에 따라 로컬 충돌 해결 진행 예정)

   ## How
   - stash pop 후 diff 및 커밋 복원 정상 확인 완료
   ```
4. **Reviewers**: **장양환** 지정 ➔ `Create pull request` 클릭!
5. 📌 **화면 확인**: GitHub PR 하단에 충돌 경고가 표시되는 것을 확인합니다.

---

### Step 5-10. [김건우] 💥 충돌 발생 및 로컬 해결!
1. 김건우 님 터미널에서 최신 `main`의 변경 사항을 당겨옵니다:
   ```bash
   git fetch origin
   git merge origin/main
   ```
2. **터미널 충돌 발생 메시지 확인!**:
   ```text
   Auto-merging src/practice/sync-timing.md
   CONFLICT (content): Merge conflict in src/practice/sync-timing.md
   Automatic merge failed; fix conflicts and then commit the result.
   ```
3. 에디터로 `src/practice/sync-timing.md` 파일을 엽니다. 아래처럼 충돌 마커가 보입니다:
   ```markdown
   # 동기화 시점 실습

   <<<<<<< HEAD
   동기화: PR 병합 전에 원격 변경을 확인한다.
   =======
   동기화: 작업 시작 전에 원격 변경을 확인한다.
   >>>>>>> origin/main
   ```
4. **두 사람의 의도를 모두 살려 파일 수정하기**:
   충돌 마커를 모두 지우고, 두 시점을 모두 포함한 한 문장으로 수정합니다:
   ```markdown
   # 동기화 시점 실습

   동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.
   ```
   저장합니다!
5. **충돌 해결 증빙 문서 `docs/evidence/conflict-cd.md` 작성**:
   `docs/evidence/conflict-cd.md` 파일을 생성하고 아래 내용을 저장합니다:

````markdown
# 충돌 2 해결 보고서 (2조: 조은익 & 김건우)

## 1. 충돌 발생 배경
- 대상 파일: `src/practice/sync-timing.md`
- 발생 원인: 동일한 공통 기준 커밋에서 분기한 두 브랜치가 동일한 라인을 각각 다르게 수정함 (조은익: 작업 시작 전 / 김건우: PR 병합 전).
- 조은익 PR이 먼저 main에 머지된 후, 김건우 브랜치에서 `git merge origin/main` 수행 시 충돌 발생.

## 2. 충돌 마커 원문
```text
<<<<<<< HEAD
동기화: PR 병합 전에 원격 변경을 확인한다.
=======
동기화: 작업 시작 전에 원격 변경을 확인한다.
>>>>>>> origin/main
```

## 3. 해결 전략 및 합의 내용
- 작업 시작 전 동기화와 PR 병합 직전 동기화는 둘 다 안전한 협업을 위한 필수 절차이므로 두 조건을 모두 명시하기로 합의함.
- 최종 문장: `동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.`

## 4. 배운 점
- 충돌 해결 과정에서 서로의 관점을 합쳐 규칙을 더욱 완성도 높게 발전시킬 수 있음을 체득함.
````

### Step 5-11. [김건우] 머지 커밋 생성 및 푸시
```bash
git add src/practice/sync-timing.md docs/evidence/conflict-cd.md
git commit -m "fix: Resolve merge conflict in sync-timing.md by including both start and pre-merge timings"
git push origin feature/gunwoo-stash-practice
```

### Step 5-12. [장양환 & 김건우] 리뷰, Approve 및 머지
1. **[김건우]**: GitHub PR D 페이지 새로고침 ➔ 충돌 경고 해소 확인!
2. **[장양환]**: PR D `Files changed` 탭 확인 ➔ 라인 코멘트 작성:
   > *"조은익 님의 '작업 시작 전'과 김건우 님의 'PR 병합 전' 동기화 조건이 누락 없이 모두 충족되도록 잘 정리되었습니다. `conflict-cd.md` 마커 증빙도 완벽하여 승인합니다!"*
3. **[김건우]**: 답글 작성 (*"감사합니다! 두 시점 모두 안전한 협업에 필수적이므로 함께 보존했습니다."*).
4. **[장양환]**: `Review changes` ➔ **`Approve`** 제출!
5. **[김건우]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (2조 미션 완벽 완료! 🏆)

---

# [제6부] 추가 충돌 3 — 한쪽은 파일 삭제, 다른 쪽은 내용 수정

> **목표**: 앞의 두 충돌 실습을 마친 뒤, 과제의 두 번째 비자명 충돌 유형도 경험합니다.
> - **조은익**: `src/practice/sync-timing.md`가 짧은 실습용 문서여서 이제 필요 없다고 판단하고 삭제합니다.
> - **김건우**: 같은 파일을 PR 병합 전 확인 안내로 계속 쓰려고 내용을 추가합니다.
> - **김상교**: 삭제 PR 리뷰 / **장양환**: 내용 수정·충돌 해결 PR 리뷰
> - **결정할 문제**: "이 파일을 지울까, 수정한 내용을 살려 남길까?"
> - **이번 안내의 해결 방향**: 두 사람이 논의한 뒤 파일을 유지합니다. 문장을 합치는 대신 **파일의 존속 여부**를 결정하는 연습입니다.

앞의 `amend/reset/revert/stash` 실습은 반복하지 않습니다. 제4·5부의 PR을 모두 병합한 뒤 진행하세요.

### Step 6-1. [조은익 & 김건우] 추가 실습 Issue를 각각 만들기
GitHub의 `Issues` ➔ `New issue`에서 각자 아래 이슈를 만들고 실제 번호를 메모합니다.

**조은익의 삭제 이슈**:
```markdown
제목: [practice] 동기화 실습 파일 삭제로 추가 충돌 준비

## 작업 목적
- 짧은 실습 문서가 더 이상 필요 없다고 판단한 상황을 가정한다.
- src/practice/sync-timing.md를 삭제하고 PR로 먼저 병합한다.
- 김건우의 내용 수정과 삭제/수정 충돌을 만들기 전에 공통 기준에서 브랜치를 준비한다.
```

**김건우의 수정·해결 이슈**:
```markdown
제목: [practice] 동기화 안내 보완 및 삭제/수정 충돌 해결

## 작업 목적
- src/practice/sync-timing.md에 확인 항목을 추가한다.
- 조은익의 삭제와 충돌하면 파일을 유지할지 논의한다.
- 실제 충돌 출력, 해결 과정과 판단 이유를 docs/evidence/conflict-delete-modify.md에 기록한다.
```

### Step 6-2. [조은익 & 김건우] 같은 출발점에서 브랜치를 미리 만들기
두 사람 모두 실행합니다:
```bash
git checkout main
git pull origin main
git status
git rev-parse HEAD
```
작업 중인 변경이 없는지 확인하고, 두 사람의 마지막 커밋 번호가 같은지 비교합니다. 이 번호를 **공통 기준 SHA**로 복사해 둡니다. 파일을 열어 제5부에서 완성한 다음 내용도 확인하세요:
```markdown
# 동기화 시점 실습

동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.
```

이제 **각자 자기 이름의 명령만** 실행합니다.

- 조은익:
  ```bash
  git checkout -b feature/eunik-delete-guide
  ```
- 김건우:
  ```bash
  git checkout -b feature/gunwoo-keep-guide
  ```

**두 사람 모두 브랜치를 만들었다고 확인한 뒤 삭제 작업을 시작합니다.** 김건우는 Step 6-5 전까지 이 작업 브랜치에 최신 main을 합치지 않습니다. 삭제가 끝난 main에서 새 브랜치를 만들면, 이번에 연습하려는 "원래 있던 파일의 삭제 vs 수정" 상황이 달라집니다.

### Step 6-3. [조은익 & 김상교] 파일 삭제 PR을 먼저 병합하기
1. **조은익** 터미널에서:
   ```bash
   git rm src/practice/sync-timing.md
   git status --short
   ```
   `D  src/practice/sync-timing.md`가 보이면 삭제가 다음 커밋에 들어갈 준비가 된 것입니다. `git rm`은 파일을 지우면서 그 삭제를 Git에도 기록합니다.
2. 커밋하고 푸시합니다:
   ```bash
   git commit -m "practice: Remove sync timing practice guide"
   git push -u origin feature/eunik-delete-guide
   ```
3. GitHub에서 PR을 만듭니다. **base는 `main`**, **compare는 `feature/eunik-delete-guide`**, **Reviewers는 김상교**입니다.
   - **Title**: `practice: Remove sync timing practice guide`
   - **본문** (이슈 번호는 Step 6-1에서 만든 실제 번호로 교체):
   ```markdown
   Closes #삭제이슈번호

   ## What
   - src/practice/sync-timing.md 삭제
   ## Why
   - 짧은 실습 문서를 정리하려는 상황을 가정한 삭제/수정 충돌 연습
   ## How
   - git status에서 삭제가 기록된 것을 확인
   - 두 사람이 삭제 전 공통 기준에서 각자 브랜치를 만든 것을 확인
   ```
4. **김상교**는 `Files changed`의 삭제된 줄에 근거 있는 질문을 남깁니다. 예: *"이 안내를 삭제해도 된다고 판단한 이유가 무엇인가요?"*
5. **조은익**은 실습에서 가정한 삭제 이유를 답합니다. 예: *"짧은 연습용 문서라 정리해도 된다고 판단한 상황입니다. 이후 다른 팀원이 추가한 내용과 충돌할 때 유지 필요성을 다시 논의하겠습니다."*
6. **김상교**가 검토 후 `Approve`, **조은익**이 `Merge pull request` ➔ `Confirm merge`를 누릅니다. 삭제 PR 주소도 복사해 둡니다.

### Step 6-4. [김건우] 기존 파일에 내용을 추가하고 PR 만들기
1. Step 6-2에서 만든 브랜치인지 확인합니다:
   ```bash
   git branch --show-current
   ```
   `feature/gunwoo-keep-guide`가 보여야 합니다. 이 브랜치에는 삭제 이전 파일이 그대로 있습니다.
2. `src/practice/sync-timing.md`를 열어 아래처럼 마지막 줄을 추가하고 저장합니다:
   ```markdown
   # 동기화 시점 실습

   동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.
   확인 항목: 원격 변경 내용과 내 작업에 미치는 영향을 확인한다.
   ```
3. 커밋하고 푸시합니다:
   ```bash
   git add src/practice/sync-timing.md
   git commit -m "practice: Add a checklist to the sync timing guide"
   git push -u origin feature/gunwoo-keep-guide
   ```
4. GitHub에서 **base `main`**, **compare `feature/gunwoo-keep-guide`**, **Reviewers 장양환**으로 PR을 만듭니다.
   - **Title**: `practice: Keep sync guide and resolve delete-modify conflict`
   - **본문**:
   ```markdown
   Closes #수정해결이슈번호

   ## What
   - src/practice/sync-timing.md에 확인 항목 추가
   - 삭제/수정 충돌 해결 기록은 아래 실습 완료 후 추가 예정
   ## Why
   - PR 병합 전에 확인할 안내가 필요하므로 파일을 계속 활용하려고 함
   ## How
   - 조은익의 삭제가 반영된 main을 로컬에서 병합해 충돌 확인 예정
   - 파일 유지 여부를 논의하고 해결 결과를 검증할 예정
   ```
5. 삭제 PR이 병합된 상태이므로 이 PR에는 충돌 경고가 표시됩니다. **아직 병합하지 않고**, PR 주소를 복사한 뒤 다음 단계로 갑니다.

### Step 6-5. [김건우] 삭제/수정 충돌을 직접 확인하고 출력 복사하기
1. 최신 원격 정보를 가져오고, 합치기 전 두 커밋 번호를 각각 복사합니다:
   ```bash
   git fetch origin
   git rev-parse HEAD
   git rev-parse origin/main
   ```
   첫 번호는 **김건우의 수정 커밋**, 두 번째는 **삭제가 반영된 main의 커밋**입니다.
2. main을 현재 브랜치에 합칩니다:
   ```bash
   git merge origin/main
   ```
   아래는 **예상 출력**입니다. 증빙에는 자신의 터미널에 나온 실제 출력을 복사하세요.
   ```text
   CONFLICT (modify/delete): src/practice/sync-timing.md deleted in origin/main and modified in HEAD.  Version HEAD of src/practice/sync-timing.md left in tree.
   Automatic merge failed; fix conflicts and then commit the result.
   ```
3. 상태도 확인하고 실제 출력을 복사합니다:
   ```bash
   git status --short
   ```
   이번 순서에서는 `UD src/practice/sync-timing.md`가 나옵니다. **나는 파일을 수정했는데, 합치려는 상대 쪽은 삭제했다**는 뜻입니다.
4. 파일을 열어 Step 6-4에서 추가한 줄이 남아 있는지 확인합니다.

**이번 충돌에는 `<<<<<<<` 같은 문장 충돌 표시가 없습니다.** Git이 김건우의 수정본을 남겨 놓았지만, 파일을 유지할지 삭제할지 결정하지 못한 상태입니다. 파일이 열리거나 마커가 없다는 이유만으로 해결됐다고 판단하면 안 됩니다.

### Step 6-6. [조은익 & 김건우] 유지 여부를 합의하고 증빙 작성하기
1. 두 사람은 수정·해결 PR에 **삭제 이유, 유지할 필요성, 최종 결정**을 댓글로 남깁니다. 다음은 대화 예시이며, 실제 대화와 결정에 맞게 작성합니다:
   - **김건우**: *"이 안내에 확인 항목을 추가했습니다. PR 병합 전에 계속 쓸 수 있으니 파일을 남기면 어떨까요?"*
   - **조은익**: *"짧은 실습 문서여서 삭제하려 했습니다. 확인 항목을 실제로 활용한다면 유지하는 데 동의합니다."*
2. 이 안내에서는 **파일 유지**로 합의합니다. 김건우가 파일 내용을 확인한 뒤 실행합니다:
   ```bash
   git add src/practice/sync-timing.md
   git diff --name-only --diff-filter=U
   git status
   ```
   `git add`는 여기서 **이 파일을 남기는 것으로 충돌을 해결했다**는 뜻도 됩니다. `git diff --name-only --diff-filter=U`에 파일명이 나오지 않고, `git status`에 `All conflicts fixed but you are still merging`이 보이는지 확인합니다. 상태 출력을 복사해 둡니다. 아직 머지 커밋을 만들기 전입니다.

   > 참고: 삭제하기로 합의했다면 `git rm`으로 해결합니다. 이번 안내는 유지 경로이므로 **두 명령을 모두 실행하지 마세요.**

3. `docs/evidence/conflict-delete-modify.md`를 만들고 아래 빈칸을 **실제 번호·출력·대화 링크**로 채웁니다:

````markdown
# 충돌 3: 파일 삭제와 내용 수정

## 1. 참여자 및 재현 조건
- 삭제: 조은익 / 수정 및 해결: 김건우
- 대상 파일: `src/practice/sync-timing.md`
- 공통 기준 SHA: (Step 6-2에서 복사한 번호)
- 병합 직전 김건우 HEAD: (Step 6-5의 첫 번째 번호)
- 병합 직전 origin/main: (Step 6-5의 두 번째 번호)
- 삭제 PR: (실제 URL)
- 수정·해결 PR: (실제 URL)
- 합의 댓글: (실제 URL)

## 2. 상황 및 재현 절차
1. 같은 공통 기준에서 두 브랜치를 만들었다.
2. 조은익이 `git rm src/practice/sync-timing.md`로 삭제하고 PR을 먼저 병합했다.
3. 김건우는 삭제 전 기준의 같은 파일에 확인 항목을 추가하고 커밋했다.
4. 김건우 브랜치에서 `git fetch origin`, `git merge origin/main`을 실행했다.

## 3. 실제 충돌 출력
### git merge origin/main
```text
(Step 6-5에서 복사한 실제 충돌 메시지)
```
### 해결 전 git status --short
```text
(Step 6-5에서 복사한 UD 상태 출력)
```
- 문장 충돌 마커 유무: 없음. 수정한 파일이 남아 있어도 삭제 여부는 미해결 상태였음.

## 4. 판단과 해결 결과
- 삭제하려던 이유: (조은익이 설명한 이유)
- 유지할 필요성: (김건우가 설명한 이유)
- 합의한 결정: 파일을 유지하고 확인 항목을 보존한다.
- 해결 명령: `git add src/practice/sync-timing.md`
- 미해결 파일 확인: `git diff --name-only --diff-filter=U`에 출력 없음.
### git add 후 git status
```text
(Step 6-6에서 복사한 실제 상태 출력)
```

## 5. 배운 점과 주의점
- 삭제/수정 충돌은 문장 충돌 마커가 없어도 발생한다.
- 삭제 이유와 수정 내용의 필요성을 확인하고 파일을 유지할지 결정해야 한다.
- `git add`로 해결을 표시한 뒤에도 머지 커밋을 만들어야 병합이 끝난다.
````

### Step 6-7. [김건우 & 장양환] 해결 커밋, 리뷰 및 병합
1. **김건우**가 증빙을 포함해 머지 커밋을 만듭니다:
   ```bash
   git add docs/evidence/conflict-delete-modify.md
   git diff --cached --check
   git commit -m "fix: Resolve delete-modify conflict by keeping sync guide"
   git status
   git show --no-patch --format="%H%n%P%n%s" HEAD
   git push origin feature/gunwoo-keep-guide
   ```
   `git diff --cached --check`가 문제를 표시하면 먼저 해당 줄을 고칩니다. 커밋 후 작업 트리가 깨끗한지 확인합니다. `git show` 결과의 첫 줄은 **해결 커밋 번호**, 둘째 줄의 두 번호는 **합친 두 이력의 마지막 커밋**입니다. 이 결과를 수정·해결 PR 댓글에도 붙여넣습니다.
2. PR의 `What`에는 증빙 문서 추가를, `How`에는 실제 충돌·파일 유지·미해결 파일 없음 확인 결과를 적어 **예정 문구를 수행 결과로 바꿉니다.** 충돌 경고가 사라졌는지도 확인합니다.
3. **장양환**은 `Files changed`의 증빙 문서에서 판단 이유를 검토하고 질문합니다. 예: *"파일에 충돌 마커가 없었는데 미해결 상태인 것을 어떻게 확인했나요?"*
4. **김건우**는 실제 증빙을 근거로 답합니다. 예: *"`CONFLICT (modify/delete)`와 `UD`를 확인했습니다. 유지하기로 합의한 뒤 `git add`했고, 미해결 파일 목록이 비었는지 확인했습니다."*
5. **장양환**이 확인 후 `Approve`, **김건우**가 `Merge pull request` ➔ `Confirm merge`를 누릅니다.

### Step 6-8. [전원] 최종 결과 확인
```bash
git checkout main
git pull origin main
git status
```
`src/practice/sync-timing.md`를 열어 **파일이 존재하고 Step 6-4의 확인 항목이 남았는지**, `docs/evidence/conflict-delete-modify.md`에 실제 기록이 있는지 확인합니다. 이제 제7부에서 기존 충돌 2건과 이번 충돌 1건을 합쳐 **총 3건**을 정리합니다.

---

# [제7부] 최종 산출물 취합 및 SUBMISSION 제출 PR

> **실제 저장소 기준으로 채운 버전**: [beatles12/codyssey-b2-2-gitflow](https://github.com/beatles12/codyssey-b2-2-gitflow)
> **확인 시점**: 2026-09-29, main `06ef0c10efeba1d9ecfff7a2d59bae0f617b417f`.
> 이슈·PR·리뷰 댓글·피드백 반영 커밋은 실제 기록으로 채웠습니다. 아래 코드 상자는 각각 지정된 파일에 복사할 내용입니다. 터미널 명령은 **이 팀 저장소를 복제한 폴더**에서 실행합니다.
>
> **합의 근거**: [PR #22에 포함된 판단·합의 기록](https://github.com/beatles12/codyssey-b2-2-gitflow/blob/4c88be797baaf1e4a4d2f913ef2298efaaf10b86/docs/evidence/conflict-delete-modify.md#L31-L36)에 삭제 이유, 유지 필요성, 파일 유지 결정이 적혀 있어 그 부분으로 연결했습니다.
> **남은 항목**: 최종 제출 PR은 아직 생성 전입니다. stash 증빙에는 실제 출력 3곳이 아직 비어 있어 보완 필요로 표시했습니다.

### Step 7-1. [김상교] 이미 만든 최종 제출 이슈 확인
새 이슈를 만들 필요 없이 [최종 제출 이슈 #23](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/23)을 사용합니다.
- 작성자: 김상교 (`beatles12`)
- 제목: `[docs] 최종 평가 제출 산출물 취합 및 SUBMISSION 색인 작성`
- 최종 PR 본문에는 **`Closes #23`**을 넣습니다.

### Step 7-2. [김상교] 최종 브랜치 분기
팀 저장소 폴더에서 실행합니다:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-final-submission
```

### Step 7-3. [김상교] 충돌 종합 보고서 `docs/conflict-resolution.md` 작성
아래 내용을 파일에 저장합니다. SHA·PR·댓글 링크는 실제 기록을 반영했습니다.
```markdown
# 충돌 해결 종합 보고서 — 실제 기록 3건

- 대상 저장소: [beatles12/codyssey-b2-2-gitflow](https://github.com/beatles12/codyssey-b2-2-gitflow)
- 확인 기준: 2026-09-29, main `06ef0c10efeba1d9ecfff7a2d59bae0f617b417f`
- 공통 기준과 두 부모 커밋은 Git 이력으로 확인했다. 충돌 당시 출력은 각 실습 증빙 문서를 근거로 기록했다.

## 1. 충돌 1: 같은 줄 수정 — 리뷰 요청 가이드
- **참여자**: 김상교(변경 이유 추가·선병합), 장양환(검증 결과 추가·해결)
- **대상 파일**: `src/practice/review-request.md`
- **공통 기준 SHA**: `b6a572a8ecdef171c7809f005e27b8baa736d126`
- **병합 직전 작업 브랜치**: `551dab461e0901161f429e5b5756f92e64c89391`
- **병합한 main**: `a61b344a89ad35dffb4a5c19ea87f60d4cdcf21e`
- **관련 PR**: [선병합 #13](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/13), [충돌 해결 #14](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/14)
- **해결 커밋**: [ce78f45](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/ce78f45eb352f271f10747d3208e56b8159c1243)
- **충돌 내용**: HEAD는 `리뷰 요청: PR 링크와 검증 결과를 공유한다.`, main은 `리뷰 요청: PR 링크와 변경 이유를 공유한다.`로 같은 줄을 다르게 수정했다.
- **판단 이유**: 변경 이유와 검증 결과가 모두 필요하므로 한 문장에 두 정보를 포함했다.
- **해결 절차**: `git fetch origin` → `git merge origin/main` → 양쪽 의도를 반영해 문장 수정 및 마커 제거 → `git add` → 머지 커밋 생성.
- **결과**: 리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.
- **상세 증빙**: [conflict-ab.md](evidence/conflict-ab.md)
- **주의점과 배운 점**: 같은 부분의 수정은 Git이 자동 선택할 수 없으므로 두 사람의 의도를 확인하고 필요한 내용을 보존한다.

## 2. 충돌 2: 같은 줄 수정 — 동기화 시점 가이드
- **참여자**: 조은익(작업 시작 전 추가·선병합), 김건우(PR 병합 전 추가·해결)
- **대상 파일**: `src/practice/sync-timing.md`
- **공통 기준 SHA**: `a61b344a89ad35dffb4a5c19ea87f60d4cdcf21e`
- **병합 직전 작업 브랜치**: `2fc1ee4ee6e56944a90540df3f8613aebb79d85c`
- **병합한 main**: `dfad80634ec2ba70ba1124af3912ed01cfaecd8f`
- **관련 PR**: [선병합 #17](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/17), [충돌 해결 #18](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/18)
- **해결 커밋**: [877c3d8](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/877c3d8b235824e3cce22a9b2154f242f9db4cd9)
- **충돌 내용**: HEAD는 `동기화: PR 병합 전에 원격 변경을 확인한다.`, main은 `동기화: 작업 시작 전에 원격 변경을 확인한다.`로 같은 줄을 다르게 수정했다.
- **판단 이유**: 작업 시작 전과 PR 병합 전 확인이 모두 필요하므로 두 시점을 보존했다.
- **해결 절차**: `git fetch origin` → `git merge origin/main` → 양쪽 의도를 반영해 문장 수정 및 마커 제거 → `git add` → 머지 커밋 생성.
- **결과**: 동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.
- **상세 증빙**: [conflict-cd.md](evidence/conflict-cd.md)
- **주의점과 배운 점**: 같은 부분의 수정은 Git이 자동 선택할 수 없으므로 두 사람의 의도를 확인하고 필요한 내용을 보존한다.

## 3. 충돌 3: 파일 삭제 vs 내용 수정 — 동기화 시점 가이드
- **참여자**: 조은익(파일 삭제·선병합), 김건우(확인 항목 추가·해결)
- **대상 파일**: `src/practice/sync-timing.md`
- **공통 기준 SHA**: `fd69265bc0dc394c5b6de84c8a38dbc5b66ded0e`
- **병합 직전 작업 브랜치**: `ec5e025eaf9353289ccccd3fce29c589eb9b63fd`
- **병합한 main**: `f721723200224b5f3fd5b35ce2dad3e2417fa1e7`
- **관련 PR**: [선병합 #21](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21), [충돌 해결 #22](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22)
- **해결 커밋**: [4c88be7](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/4c88be797baaf1e4a4d2f913ef2298efaaf10b86)
- **충돌 내용**: main에서는 파일을 삭제했고 김건우 브랜치에서는 파일 내용을 수정했다. 증빙에 `CONFLICT (modify/delete)`와 `UD src/practice/sync-timing.md`가 기록되어 있으며 문장 충돌 마커는 없었다.
- **판단 이유**: 짧은 연습용 문서라 삭제하려 했지만, PR 병합 전에 계속 사용할 안내와 확인 항목이 필요하다는 이유로 파일을 유지했다.
- **해결 절차**: `git fetch origin` → `git merge origin/main` → 파일 유지 결정 → `git add src/practice/sync-timing.md` → 미해결 파일 목록 확인 → 증빙을 포함한 머지 커밋 생성.
- **결과**: 파일을 유지하고, 원래 동기화 문장 아래에 “확인 항목: 원격 변경 내용과 내 작업에 미치는 영향을 확인한다.”를 보존했다.
- **상세 증빙**: [conflict-delete-modify.md](evidence/conflict-delete-modify.md)
- **삭제 이유 답변**: [조은익의 답변](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21#discussion_r4130999727)
- **유지·해결 설명**: [김건우의 답변](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#discussion_r4131095430)
- **리뷰 확인**: [장양환의 질문](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#discussion_r4131086126), [승인](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#pullrequestreview-5349538018)
- **합의 기록**: [PR #22에 포함된 판단·합의 기록](https://github.com/beatles12/codyssey-b2-2-gitflow/blob/4c88be797baaf1e4a4d2f913ef2298efaaf10b86/docs/evidence/conflict-delete-modify.md#L31-L36) — 삭제 이유와 유지 필요성을 비교한 뒤 파일과 확인 항목을 보존하기로 한 결정이 기록됨.
- **주의점과 배운 점**: 문장 마커가 없어도 충돌일 수 있다. `UD` 상태와 미해결 파일 목록을 확인하고 파일을 남길지 결정해야 한다.
```

### Step 7-4. [김상교] 트러블슈팅 종합 보고서 `docs/troubleshooting-log.md` 작성
실습자가 기록한 내용과 원격에서 확인할 수 있는 이력을 구분했습니다. 아래 내용을 저장합니다:
```markdown
# Git 4대 트러블슈팅 실습 기록

대상: [beatles12/codyssey-b2-2-gitflow](https://github.com/beatles12/codyssey-b2-2-gitflow) / 확인 기준: 2026-09-29

## 1. amend — 김상교
- **상황**: 원격에 올리기 전 로컬 커밋 메시지의 오타 수정.
- **명령**: `git commit --amend -m "feat: Record amend practice with corrected commit message"`
- **증빙 문서에 기록된 이전 SHA**: `38eaa9998342e3787dd2281f522179d0bfad7bbd` (로컬에서 교체된 이력이며 원격에서 직접 확인한 커밋으로 간주하지 않음).
- **원격에서 확인한 수정 후 커밋**: [24444d3](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/24444d3b2555316734453af0d29779ff1591fd4c)
- **결과**: 증빙에는 파일 내용 유지와 메시지 변경이 기록되어 있음.
- **주의점**: 이미 공유한 커밋에 무리하게 amend와 강제 푸시를 적용하지 않음.
- **관련 링크**: [#11](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/11), [PR #13](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/13), [amend 증빙](evidence/sangkyo-amend.md)

## 2. reset --soft — 장양환
- **상황**: 직전 로컬 커밋을 취소하되 파일과 스테이징 상태는 유지.
- **명령**: `git reset --soft HEAD~1`
- **증빙 문서의 취소 대상 SHA**: `ecdac5a` (로컬 기록).
- **reset 직후 HEAD**: `b6a572a8ecdef171c7809f005e27b8baa736d126`
- **기록된 상태**: `A  src/practice/yanghwan-recovery.txt`
- **재커밋**: [5bb0b18](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/5bb0b185f192c0602a2f2d855cbe21f3013dd953)
- **주의점**: 이 실습은 미푸시 커밋을 대상으로 수행. 공유 이력을 강제로 덮어쓰지 않음.
- **관련 링크**: [#12](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/12), [PR #14](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/14), [reset 증빙](evidence/yanghwan-reset.md)

## 3. revert — 조은익
- **상황**: 증빙에 따르면 원격에 먼저 공유한 잘못된 변경을 취소.
- **명령**: `git revert --no-commit HEAD` 후 역커밋 생성 및 푸시.
- **원본 커밋**: [8a3deb9](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/8a3deb979893e71db17db3d28734867b1381a3fd)
- **역커밋**: [f1cf34a](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/f1cf34a5eba6b0fdb1261ebb88cd007eb8d24341)
- **결과**: 원격 Git 이력에 원본과 역커밋이 모두 남아 있음. 푸시를 먼저 했다는 실행 순서는 실습 증빙의 기록을 근거로 함.
- **주의점**: 공유 이력을 지우지 않고 취소 내용을 새 커밋으로 남김.
- **관련 링크**: [#16](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/16), [PR #17](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/17), [revert 증빙](evidence/eunik-revert.md)

## 4. stash / pop — 김건우 (실행 출력 보완 필요)
- **상황**: 파일을 수정하던 중 main 브랜치를 확인한 뒤 작업을 복원하는 실습.
- **문서에 적힌 절차**: `git stash push` → main 전환 → 원래 브랜치 복귀 → `git stash pop`.
- **원격에서 확인한 기준 파일 커밋**: [067c43d](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/067c43d4b9f4331d83d85eb8f96c8a0b101170c0)
- **원격에서 확인한 복원 커밋**: [9545889](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/95458897008bab7a78d8e78c30190d505f45f184). 실제 변경에는 `작업 중이던 미완성 추가 라인` 추가가 포함됨.
- **확인 한계**: 현재 stash 증빙의 보관 전 diff, stash 목록, 복원 후 diff는 입력 안내 문구로 남아 있음. 커밋만으로 stash/pop 실행과 전후 일치까지 확인할 수는 없음.
- **남은 작업**: 당시 실제 출력이 있으면 첨부. 없다면 재실습 날짜와 별도 기록임을 명시해 수행한 뒤 증빙을 보완함.
- **주의점**: 현재 커밋에서 계산한 diff를 과거 터미널 실행 기록인 것처럼 넣지 않음.
- **관련 링크**: [#15](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/15), [PR #18](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/18), [stash 증빙](evidence/gunwoo-stash.md)
```

### Step 7-5. [김상교] `README.md` 목차 최신화
아래 내용으로 저장하고, 이번에 만드는 종합 문서 링크도 함께 확인합니다:
```markdown
# Git & GitHub 개발 협업 학습정리노트 (B2-2)

4명이 학습 노트, PR 리뷰, 충돌 해결과 Git 복구 실습을 함께 수행한 저장소입니다.

- 저장소: [beatles12/codyssey-b2-2-gitflow](https://github.com/beatles12/codyssey-b2-2-gitflow)
- 최종 정리 이슈: [#23](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/23)

## 팀원별 학습 노트
1. [Git 기초](notes/01-git-basics.md) — 김상교 / [PR #6](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/6)
2. [GitHub Flow](notes/02-github-flow.md) — 장양환 / [PR #5](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/5)
3. [충돌 원리](notes/03-conflict-guide.md) — 조은익 / [PR #10](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/10)
4. [오픈소스 PR 문화](notes/04-open-source.md) — 김건우 / [PR #9](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/9)

## 협업 및 실습 기록
- [협업 가이드](docs/CONTRIBUTING.md)
- [충돌 3회 종합 보고서](docs/conflict-resolution.md)
- [트러블슈팅 4종 기록과 확인 상태](docs/troubleshooting-log.md)
- [최종 제출 인덱스](SUBMISSION.md)
- [Git 이력](docs/git-history.txt)

## 확인이 남은 항목
- stash 증빙의 실제 출력 3곳 보완
- 최종 제출 PR 생성, 리뷰와 병합
```

### Step 7-6. [김상교] `SUBMISSION.md` 작성
이슈·PR·리뷰·피드백 반영 링크는 채워 두었습니다. **최종 제출 PR 링크는 생성 후 Step 7-8-B에서 추가**합니다. 체크리스트는 파일 작성 및 확인이 끝난 항목만 `[x]`로 바꿉니다.
```markdown
# B2-2 최종 평가 제출 인덱스

- 저장소: [beatles12/codyssey-b2-2-gitflow](https://github.com/beatles12/codyssey-b2-2-gitflow)
- 확인 기준: 2026-09-29 / main `06ef0c10efeba1d9ecfff7a2d59bae0f617b417f`
- 최종 정리 이슈: [#23](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/23)
- 최종 제출 PR: 아직 생성 전. 생성 후 이 줄을 실제 PR 링크로 갱신한다.
- 아래 PR 목록은 확인 시점에 병합된 PR만 포함한다. 최종 제출 PR과 그 리뷰는 완료 건수에 포함하지 않는다.

## 1. 팀원별 기여도 증빙

| 팀원·GitHub 계정 | 역할 | 생성한 이슈 | 병합된 본인 PR | 작성한 동료 리뷰 | 본인 PR 피드백 반영 | 트러블슈팅 |
|---|---|---|---|---|---|---|
| 김상교 (`beatles12`) | 호스트·amend | [#1](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/1), [#4](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/4), [#11](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/11), [#23](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/23) | [PR #2](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/2), [PR #6](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/6), [PR #13](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/13); 최종 제출 PR은 아직 생성 전 | [#9 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/9#discussion_r4130342783), [#17 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/17#discussion_r4130699673), [#21 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21#discussion_r4130998461) | [답글](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/6#discussion_r4130327381) / [수정 커밋](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/04e73f57662dc05fe0ed84fba13e1a20c2cd2d34) | [증빙](docs/evidence/sangkyo-amend.md) |
| 장양환 (`surilog`) | reset·충돌 1 | [#3](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/3), [#12](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/12) | [PR #5](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/5), [PR #14](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/14) | [#2 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/2#discussion_r4129609129), [#6 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/6#discussion_r4130296198), [#18 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/18#discussion_r4130871572), [#22 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#discussion_r4131086126) | [답글](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/5#discussion_r4130279945) / [수정 커밋](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/9cf8ebdbd3e59d78e83be23f3bcd367ac8041c3f) | [증빙](docs/evidence/yanghwan-reset.md) |
| 조은익 (`nick19850906-debug`) | revert·삭제 | [#8](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/8), [#16](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/16), [#20](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/20) | [PR #10](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/10), [PR #17](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/17), [PR #21](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21) | [#5 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/5#discussion_r4130256916), [#13 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/13#discussion_r4130518024) | [답글](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/10#discussion_r4130381744) / [수정 커밋](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/d8b5259581d4fb32f13cc2331742aea1dc731d69) | [증빙](docs/evidence/eunik-revert.md) |
| 김건우 (`papawolf42`) | stash·충돌 2·3 | [#7](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/7), [#15](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/15), [#19](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/19) | [PR #9](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/9), [PR #18](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/18), [PR #22](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22) | [#10 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/10#discussion_r4130362745), [#14 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/14#discussion_r4130573312) | [답글](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/9#discussion_r4130349921) / [수정 커밋](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/7552a917fc1c68e7c9ee98b9f723ba3ac080d1da) | [증빙](docs/evidence/gunwoo-stash.md) — 실제 출력 보완 필요 |

## 2. 추가 충돌 실습 연결
- 삭제 이슈 [#20](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/20) / 삭제 [PR #21](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21) / [김상교 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21#discussion_r4130998461) / [조은익 답변](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/21#discussion_r4130999727)
- 수정·해결 이슈 [#19](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/19) / 해결 [PR #22](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22) / [장양환 리뷰](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#discussion_r4131086126) / [김건우 답변](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/22#discussion_r4131095430)
- 해결 커밋: [4c88be7](https://github.com/beatles12/codyssey-b2-2-gitflow/commit/4c88be797baaf1e4a4d2f913ef2298efaaf10b86)
- 합의 근거: [PR #22에 포함된 판단·합의 기록](https://github.com/beatles12/codyssey-b2-2-gitflow/blob/4c88be797baaf1e4a4d2f913ef2298efaaf10b86/docs/evidence/conflict-delete-modify.md#L31-L36). 삭제·유지 이유와 파일을 유지하기로 한 결정이 기록되어 있음.

## 3. 산출물 확인 상태
- [x] [협업 가이드](docs/CONTRIBUTING.md): 파일과 팀원 분담 의견 확인 — [#1](https://github.com/beatles12/codyssey-b2-2-gitflow/issues/1), [PR #2](https://github.com/beatles12/codyssey-b2-2-gitflow/pull/2)
- [x] [개인 학습 노트](notes/): 4개 파일 및 리뷰 반영 커밋 확인
- [x] [충돌 상세 증빙](docs/evidence/): content 충돌 2건과 삭제/수정 충돌 1건 존재
- [ ] [충돌 종합 보고서](docs/conflict-resolution.md): 제7부에서 작성 후 확인
- [ ] [트러블슈팅 종합 기록](docs/troubleshooting-log.md): 제7부에서 작성 후 확인
- [ ] [stash 실행 증빙](docs/evidence/gunwoo-stash.md): 실제 출력 3곳 보완 필요
- [ ] [Git 이력](docs/git-history.txt): Step 7-7에서 생성 후 확인
- [ ] 최종 제출 PR 링크 추가, 김건우 리뷰 및 최종 병합

증빙 파일은 총 7개 존재하지만, 파일 존재와 내용의 완결 여부는 다르다. 완료하지 않은 항목은 완료로 표시하지 않는다.
```

### Step 7-7. [김상교] Git 히스토리 로그 추출 (UTF-8 인코딩)
김상교 님 터미널에서 전체 커밋 로그를 UTF-8 텍스트 파일로 추출합니다:

**Mac / Linux / Git Bash 터미널:**
```bash
git log --graph --oneline --all > docs/git-history.txt
```

**Windows PowerShell 터미널:**
```powershell
git log --graph --oneline --all | Out-File -FilePath docs/git-history.txt -Encoding utf8
```

> ⚠️ **인코딩 주의사항 (Windows PowerShell 5.1)**:  
> Windows PowerShell 기본 창에서 `>` 리디렉션을 사용할 경우 UTF-16LE(BOM 포함)로 저장되어 GitHub 웹이나 Linux 환경에서 파일이 깨져 보일 수 있습니다. PowerShell 환경에서는 반드시 위와 같이 `| Out-File -FilePath docs/git-history.txt -Encoding utf8` 명령을 사용하거나 Git Bash 터미널에서 실행해 주세요.

### Step 7-8. [김상교] 커밋, 푸시 및 최종 PR 생성
1. 위 파일을 저장하고 링크와 상태 표시를 확인한 다음 커밋합니다:
   ```bash
   git add docs/conflict-resolution.md docs/troubleshooting-log.md README.md SUBMISSION.md docs/git-history.txt
   git diff --cached --check
   git commit -m "docs: Add verified submission links and practice summaries"
   git push -u origin feature/sangkyo-final-submission
   ```
2. [팀 저장소 PR 화면](https://github.com/beatles12/codyssey-b2-2-gitflow/pulls)에서 `New pull request`를 누릅니다. **base `main`**, **compare `feature/sangkyo-final-submission`**을 선택합니다.
3. **Title**: `docs: Add verified submission links and practice summaries`
4. **본문**:
   ```markdown
   Closes #23

   ## What
   - 충돌 3회 종합 기록 및 실제 해결 커밋·PR 링크
   - 트러블슈팅 4종의 기록과 확인 가능한 범위
   - README, SUBMISSION, Git 히스토리
   - 4인의 실제 이슈·PR·리뷰·피드백 반영 링크

   ## Why
   - 최종 평가자가 협업 과정과 산출물을 직접 확인할 수 있도록 정리

   ## How
   - 2026-09-29 기준 병합된 PR 11개와 리뷰 댓글·반영 커밋을 대조함
   - 충돌 해결 커밋 3개의 부모와 공통 기준을 Git 이력으로 확인함
   - 아래 미완료 항목은 완료로 표시하지 않음

   ## 남은 확인
   - stash 증빙의 실제 출력 3곳 보완
   - 본 PR 생성 후 SUBMISSION의 최종 PR 링크 추가
   - 생성한 문서와 로그의 링크·내용 최종 검토
   ```
5. **Reviewers**에 김건우 (`papawolf42`)를 지정해 PR을 만듭니다. 남은 작업을 완료하면 PR 본문도 실제 상태로 갱신합니다.

### Step 7-8-B. [김상교] 생성된 최종 PR 링크 추가
현재는 최종 PR이 없어 실제 번호를 미리 채울 수 없습니다. **#24 등으로 추측하지 마세요.**
1. 생성된 최종 PR의 주소를 복사합니다. 주소가 `https://github.com/beatles12/codyssey-b2-2-gitflow/pull/`로 시작하는지 확인합니다.
2. `SUBMISSION.md`의 `최종 제출 PR: 아직 생성 전...` 줄을 방금 복사한 실제 링크로 바꿉니다. 위 기여도 표의 김상교 행에도 같은 링크를 추가하되, 아직 병합 전이라는 상태를 적습니다.
3. 링크 추가 내용을 커밋하고 같은 브랜치에 푸시합니다:
   ```bash
   git add SUBMISSION.md
   git commit -m "docs: Add final PR link to SUBMISSION index"
   git push origin feature/sangkyo-final-submission
   ```
4. README와 PR 본문에 남은 상태 표시가 실제 상황과 맞는지도 확인합니다.

### Step 7-9. [김건우 & 김상교] 최종 리뷰 및 병합
1. **김건우**는 `Files changed`에서 다음을 확인합니다:
   - 실제 이슈·PR·리뷰·커밋 링크가 열리는가?
   - 종합 문서와 Git 로그가 생성됐으며 한글이 정상인가?
   - stash 증빙의 실제 출력이 보완됐는가? 미완료 내용이 완료로 표시되지 않았는가?
   - `SUBMISSION.md`에 방금 만든 최종 PR 주소가 있는가?
2. 확인한 파일의 해당 줄에 실제 질문이나 수정 요청을 남기고, **김상교**는 답변하거나 내용을 수정합니다. 아직 없는 리뷰 주소를 과거 리뷰인 것처럼 표에 넣지 않습니다.
3. 필요한 보완이 끝나면 **김건우**가 `Approve`, **김상교**가 `Merge pull request` ➔ `Confirm merge`를 누릅니다.
4. `git-history.txt`는 Step 7-7 시점의 이력입니다. 아직 만들어지지 않았던 최종 병합 커밋까지 그 파일에 포함됐다고 적지 않습니다. 최종 병합 여부는 방금 만든 PR의 실제 병합 상태로 확인합니다.

---

# [제8부] 평가 항목별 핵심 구두 면접 문답 대비 (항목 2~4 전수 점검)

> 🎓 **평가관 질문 대비 요령**:  
> 평가관 면접 시 단순히 정답만 외우기보다, **우리 팀이 실제로 작성한 파일과 PR 이력을 근거로 대답**하면 최고의 평가를 받습니다.

### [항목 2 대비] 브랜치 전략, PR/리뷰 품질 기준, 충돌/트러블슈팅 원칙

#### Q1. "브랜치 전략을 '작업 단위'로 나누는 기준을 어떻게 정했나요?"
- **답변**: "하나의 브랜치가 너무 많은 기능을 담으면 코드 리뷰가 지연되고 충돌 해결이 어려워집니다. 저희 팀은 이슈 하나당 하나의 명확한 작업 목적(예: 학습 노트 1편 작성, 트러블슈팅 실습 1건 수행)을 기준으로 브랜치를 분기했습니다." (근거: `docs/CONTRIBUTING.md` 1절)

#### Q2. "PR 본문에 What/Why/How와 이슈 연동 정보를 남기기 위해 어떤 도구를 정했나요?"
- **답변**: "`.github/pull_request_template.md` 템플릿을 구축하여 PR 생성 시 자동으로 What(변경 파일), Why(목적), How(검증 방법), Closes #이슈번호 양식이 채워지도록 강제했습니다." (근거: `.github/pull_request_template.md`)

#### Q3. "리뷰 코멘트가 'LGTM'에 그치지 않도록 팀에서 정한 최소 품질 기준은 무엇인가요?"
- **답변**: "단순 칭찬이나 확인 인사를 금지하고, 반드시 `Files changed`의 특정 코드 라인에 대해 질문, 대안, 또는 보완할 조건을 제시하도록 했습니다. 또한 작성자가 답글을 남기거나 수정 커밋을 올리는 상호작용이 확인된 후에만 Approve하도록 운영했습니다." (근거: `docs/CONTRIBUTING.md` 3절)

#### Q4. "충돌이 발생했을 때 팀이 어떤 흐름(공유→해결→기록)으로 대응했나요?"
- **답변**: "1) 충돌 발생 즉시 팀원들에게 알리고, 2) 앞의 두 실습에서는 서로 다르게 수정한 문장을 합쳤으며, 제6부에서는 삭제 이유와 수정 내용의 필요성을 비교해 파일을 유지하기로 합의했습니다. 3) 문장 충돌은 마커 원문을, 삭제/수정 충돌은 실제 충돌 메시지와 상태 출력을 남겼고, 해결 이유와 배운 점을 `docs/conflict-resolution.md`에 기록했습니다." (근거: `docs/conflict-resolution.md`)

#### Q5. "트러블슈팅 로그를 '재현 가능'하게 만들기 위해 어떤 항목을 고정했나요?"
- **답변**: "상황 및 재현 조건, 실행한 정확한 명령어, 변경 전후의 커밋 SHA 및 `git status`/`diff` 출력, 해당 명령을 선택한 이유와 주의점의 4가지 항목을 필수로 수록하여 누구나 동일하게 재현할 수 있게 작성했습니다." (근거: `docs/troubleshooting-log.md`)

---

### [항목 3 대비] GitHub Flow 원리, main 보호, 이슈 연동, revert 선택 이유

#### Q6. "GitHub Flow에서 `main`을 '항상 배포 가능 상태'로 유지해야 하는 이유는 무엇인가요?"
- **답변**: "main은 모든 팀원이 새로운 기능을 개발하기 위해 분기하는 공통의 기준점입니다. main이 깨져 있으면 다른 팀원들의 작업 브랜치에도 오류가 전파되므로, 리뷰와 승인을 통과한 안정된 코드만 main에 병합해야 합니다." (근거: `notes/02-github-flow.md`)

#### Q7. "`main`에 직접 push하지 않고 PR + 승인으로 병합하는 이유는 무엇인가요?"
- **답변**: "개인의 독단적인 실수로 메인 코드가 오염되는 것을 방지(품질 관리)하고, 팀원의 검토를 거쳐 코드에 대한 공동 책임을 확보하며(책임성), PR과 커밋 그래프를 통해 변경 사유를 투명하게 추적하기 위함입니다(추적성)." (근거: `docs/CONTRIBUTING.md`)

#### Q8. "이슈-PR 연동을 하는 이유는 무엇인가요?"
- **답변**: "`Closes #이슈번호` 키워드를 사용하면 PR이 머지될 때 관련 이슈가 자동으로 종료되어 작업 관리의 자동화를 이룰 수 있고, 어떤 문제를 해결하기 위해 이 PR이 올라왔는지 히스토리를 명확히 추적할 수 있기 때문입니다."

#### Q9. "원격에 push된 커밋을 되돌릴 때 `reset` 대신 `revert`를 선택해야 하는 이유는 무엇인가요?"
- **답변**: "`reset`은 이전 커밋 이력 자체를 지워버리므로, 이미 원격에 푸시된 상태에서 reset 후 강제 푸시(`--force`)를 하면 다른 동료들의 로컬 이력과 충돌하여 심각한 협업 장애를 일으킵니다. 반면 `revert`는 기존 이력을 온전히 보존하면서 이를 상쇄하는 새로운 역커밋을 추가하므로 공유 브랜치에서 가장 안전합니다." (근거: `docs/troubleshooting-log.md` 3절)

#### Q10. "충돌 마커(`<<<<<<<`, `=======`, `>>>>>>>`)의 의미와 비자명 충돌의 해결 기준은 무엇인가요?"
- **답변**: "`<<<<<<< HEAD` 아래는 현재 내 브랜치의 내용이고, `=======`는 양쪽 내용을 구분하며, `>>>>>>> origin/main` 위쪽은 합치려는 main의 내용입니다. 앞의 두 실습에서는 양쪽 정보가 모두 필요해 문장을 합쳤습니다. 추가 삭제/수정 충돌에는 이 마커가 없었지만 `UD`로 미해결 상태를 확인했고, 확인 안내가 계속 필요하다는 판단에 따라 파일을 유지했습니다." (근거: `notes/03-conflict-guide.md`, `docs/evidence/conflict-delete-modify.md`)

---

### [항목 4 대비] 긴급 핫픽스, 푸시된 불량 커밋 메시지 처리, 반복 충돌 예방

#### Q11. "만약 `main`에 긴급 핫픽스(버그 수정)가 필요하다면 어떤 순서로 처리하나요?"
- **답변**: "1) 최신 `main`에서 `hotfix/<수정내용>` 브랜치를 분기하고, 2) 버그를 수정한 커밋을 작성하여 푸시한 뒤, 3) `main`을 대상으로 긴급 PR을 발행하여 팀원에게 빠른 리뷰를 요청하고, 4) 승인 즉시 머지하여 배포를 완료한 후 역할을 다한 핫픽스 브랜치를 정리합니다."

#### Q12. "만약 팀원이 실수로 '의미 없는 커밋 메시지'를 여러 개 `push`했다면 어떻게 개선하나요?"
- **답변**: "아직 push하기 전이라면 `git commit --amend`나 대화형 리베이스(`git rebase -i`)로 메시지를 바로잡을 수 있습니다. 하지만 **이미 원격에 push된 상태라면 동료들의 작업 중단을 막기 위해 절대로 강제 푸시(force push)로 이력을 재작성하지 않습니다.** 대신 공유 이력을 그대로 유지하고, 해당 PR이나 이슈의 본문/댓글을 통해 올바른 작업 의도와 변경 내용을 상세히 보완 설명하여 추적성을 확보합니다."

#### Q13. "충돌이 같은 파일/같은 영역에서 반복적으로 발생한다면 원인과 예방 방안은 무엇인가요?"
- **답변**: "원인은 한 파일에 너무 많은 역할이 집중되어 있거나(결합도 높음), 팀원 간 작업 분담 범위가 겹치기 때문입니다. 예방 방안으로는 1) 하나의 큰 파일을 모듈별로 잘게 분리하고, 2) 브랜치 수명을 짧게 유지하여 수시로 `main`의 변경을 동기화(`fetch & merge`)하며, 3) 공통 접점(인터페이스나 시드 파일)의 구조를 작업 전에 미리 합의하여 정의하는 것입니다."

---

# [부록] 왕초보 긴급 구조 SOS 대응표

| 문제 상황 | 증상 및 에러 메시지 | 즉시 해결 방법 |
|:---|:---|:---|
| **터미널에서 푸시 거부** | `remote: error: GH006: Protected branch hook declined` | `main`에 직접 푸시하려 했기 때문입니다. `git checkout -b feature/작업명`으로 브랜치를 따서 푸시하세요. |
| **충돌 해결 중 파일이 꼬임** | `Automatic merge failed; ...` 후 손을 못 대겠음 | 당황하지 말고 `git merge --abort`를 치면 머지 시도 전으로 깨끗하게 롤백됩니다. 다시 차근차근 시도하세요. |
| **PR 화면에 리뷰 승인 버튼이 없음** | `Approve` 라디오 버튼이 비활성화됨 | 본인이 만든 PR은 본인이 승인할 수 없습니다! 지정된 다른 리뷰어 계정으로 로그인해 승인하세요. |
| **커밋 메시지에 오타를 냄** | 아직 원격에 push 안 한 상태 | `git commit --amend -m "올바른메시지"`로 즉시 수정 가능합니다. |
| **이미 push한 커밋에 오타를 냄** | 원격에 이미 푸시된 상태 | force push나 revert를 하지 말고, 공유 이력을 유지한 채 PR 본문/댓글에 의도를 보완 설명하세요. |
| **Windows에서 한글이 깨짐** | `echo >>` 명령 후 특수문자로 깨짐 | PowerShell 5.1의 UTF-16 저장 때문입니다. VS Code에서 직접 편집하거나 UTF-8 인코딩을 명시하세요. |
| **현재 브랜치가 헷갈릴 때** | 내가 어디 있는지 모르겠음 | `git branch --show-current`를 입력하면 현재 브랜치 이름이 나옵니다. |
| **상태 확인이 필요할 때** | 파일이 수정됐는지 확신이 안 섬 | 언제든지 `git status`를 치세요! Git에서 가장 안전하고 유용한 명령어입니다. |
