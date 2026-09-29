# 0021. B2-2 왕초보 전용 마스터 실행 매뉴얼 — 11번처럼 한 단계씩 따라 하는 Step-by-Step (김상교 팀장 새 레포 기준)

> **문서 안내**:  
> 이 문서는 Git/GitHub 협업이 처음인 팀원들을 위해 **11번 문서의 친절한 클릭/복붙 가이드** 방식과 **0015/0016의 합격 보장 병렬 협업 구조**를 완벽하게 결합한 최신 실전 매뉴얼입니다.  
> 특히 **김상교 님이 새 저장소를 생성하고 호스트를 맡아 진행하는 상황**에 맞추어 작성되었습니다.  
> 복잡한 스크립트나 어려운 용어 없이, **[화면 어디를 누르는지]**, **[터미널에 무엇을 입력하는지]**, **[본문에 무엇을 복사-붙여넣는지]**를 아주 자잘한 마이크로 스텝(Micro-step)으로 하나씩 안내합니다. 기존 0016(PowerShell 전문 스크립트 기반)이나 0017보다 훨씬 따라 하기 쉬운 완전 초보자 전용 문서입니다.

---

## 👥 팀원 배역 및 1:1 완벽 대칭 기여 분담표

| 기호 | 팀원 이름 | 역할 | 개인 학습 노트 (제3부) | 4대 트러블슈팅 (제4/5부) | 충돌 실습 (공통 파일) | 리뷰 담당 (리뷰어) |
|:---:|:---:|:---:|:---|:---:|:---|:---|
| **A** | **김상교** | 호스트 & 팀장 / 인프라 & 최종 취합 | `notes/01-git-basics.md` | `git commit --amend` | **1조 선병합** (`review-request.md`) | 장양환 노트 리뷰, 조은익 실습 리뷰 |
| **B** | **장양환** | 코어 / Flow & 충돌해결 | `notes/02-github-flow.md` | `git reset --soft` | **1조 충돌 해결** (`review-request.md`) | 조은익 노트 리뷰, 김건우 실습 리뷰 |
| **C** | **조은익** | 코어 / 충돌이론 & revert | `notes/03-conflict-guide.md` | `git revert` | **2조 선병합** (`sync-timing.md`) | 김건우 노트 리뷰, 김상교 실습 리뷰 |
| **D** | **김건우** | 심화 / PR문화 & 충돌해결 | `notes/04-open-source.md` | `git stash` & `pop` | **2조 충돌 해결** (`sync-timing.md`) | 김상교 노트 리뷰, 장양환 실습 리뷰 |

> 💡 **공통 PR 분담**:
> - **제2부 공통 준비 PR**: 김상교 작성 ➔ 장양환 리뷰 및 승인
> - **제6부 최종 통합 PR**: 김상교 작성 ➔ 김건우 리뷰 및 승인

---

## 🧭 전체 진행 로드맵 한눈에 보기

```
[제1부] 사전 준비 (김상교 새 저장소 생성/보호 + 전원 클론)
   ↓
[제2부] 협업 규칙 & 공통 실습 파일 준비 (김상교 작성 ➔ 장양환 리뷰 & 머지)
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
[제6부] 최종 산출물 취합 & 제출 PR (김상교 작성 ➔ 김건우 리뷰 & 최종 머지)
   ↓
[제7부] 최종 평가 5대 구두 문답 자가 검증 & 완료!
```

---

## 💡 왕초보 3대 황금 원칙 (이것만 기억하세요!)

1. **고정된 번호에 집착하지 마세요!**
   - 이전 11번 문서가 꼬였던 가장 큰 이유는 "#1번 다음에 무조건 #2번이어야 한다"는 고정관념 때문이었습니다.
   - GitHub에서는 누가 먼저 버튼을 누르느냐에 따라 번호가 1, 2, 3... 달라질 수 있습니다.
   - 본 매뉴얼에서는 **"방금 화면에 생성된 실제 번호(예: #5)"**를 확인하고 복사해 넣도록 안내하므로 절대 꼬이지 않습니다.
2. **개인 작업(제3부 학습노트)은 4명이 동시에 시작하세요!**
   - 다른 사람 끝날 때까지 멍하니 기다리지 마세요. 4개의 노트는 서로 다른 파일이므로 각자 자기 컴퓨터에서 동시에 만들고 PR을 올리면 됩니다.
3. **충돌 실습은 자기 파트너(1조는 상교-양환, 2조는 은익-건우)하고만 맞추세요!**
   - 1조와 2조는 다루는 파일이 완전히 다르므로 서로 기다릴 필요 없이 자기 조끼리만 순서를 지켜 머지하면 됩니다.

---

# [제1부] 사전 준비 & 팀 저장소 기본 세팅

> **목표**: 저장소 호스트인 **김상교** 님이 팀 저장소를 새로 생성하고, 팀원 3명(장양환, 조은익, 김건우)을 초대하며, `main` 브랜치를 안전하게 보호합니다.

### Step 1-1. [김상교] 저장소 생성 (새 저장소 기준)
1. 웹 브라우저를 열고 김상교 님의 GitHub에 로그인합니다.
2. 우측 상단 `+` 버튼 ➔ **`New repository`** 클릭.
3. 설정 입력:
   - **Repository name**: `mission_02_02` (또는 팀에서 정한 새 저장소 이름)
   - **Public** 선택 (과제 평가를 위해 필수)
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

### Step 1-5. [김상교] 직접 푸시 차단 검증 (캡처 포인트 📸)
1. 김상교 님의 로컬 터미널(PowerShell 또는 Bash)을 엽니다.
2. 임의로 `main`에 직접 푸시를 시도해 봅니다:
   ```bash
   git checkout main
   echo "test direct push" >> README.md
   git commit -am "test: Try direct push to main"
   git push origin main
   ```
3. **기대 결과**: 터미널에 아래와 같은 에러가 뜨며 푸시가 거부되어야 정상입니다!
   ```text
   remote: error: GH006: Protected branch hook declined
   remote: error: Changes must be made through a pull request.
   ```
   > 📸 **[증빙 캡처]**: 이 차단 에러 메시지가 뜬 터미널 화면을 캡처해 두면 훌륭한 보고서 증빙이 됩니다!
4. 테스트 커밋 취소:
   ```bash
   git reset --hard HEAD~1
   ```

### Step 1-6. [전원: 김상교, 장양환, 조은익, 김건우] 로컬 복제 & Git 사용자 설정
1. 각자의 컴퓨터에서 터미널(PowerShell, CMD, Git Bash, Mac 터미널 등)을 엽니다.
2. 작업할 폴더로 이동한 후 김상교 님의 새 저장소를 복제합니다:
   ```bash
   git clone https://github.com/김상교GitHubID/mission_02_02.git
   cd mission_02_02
   ```
3. 이번 프로젝트에서 사용할 본인의 이름과 이메일을 정확히 설정합니다:
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
   `nothing to commit, working tree clean`이 나오면 준비 완료입니다!

---

# [제2부] 협업 규칙 & 공통 실습 시드 파일 준비

> **목표**: 팀장 김상교 님이 협업 규칙 가이드(`CONTRIBUTING.md`), PR 템플릿, 그리고 제4/5부 충돌 실습에 쓰일 공통 시드 파일 2개를 준비하고, 장양환 님의 리뷰를 거쳐 `main`에 머지합니다.

### Step 2-1. [김상교] 준비 Issue 발행
1. 저장소 웹 페이지 ➔ **`Issues`** 탭 클릭 ➔ 초록색 **`New issue`** 버튼 클릭.
2. **Title**: `[docs] 협업 규칙 가이드 및 실습 기반 환경 구축`
3. **Description** (아래 내용을 그대로 복사해 붙여넣기):
   ```markdown
   ## 작업 목적
   - 팀원 전원이 준수할 브랜치 전략(GitHub Flow), 커밋 규칙, PR 작성 및 코드 리뷰 규칙 수립
   - 향후 4대 트러블슈팅 및 2건의 충돌 실습에 사용할 기본 파일과 PR 템플릿 구축

   ## 세부 작업 내용
   - [ ] docs/CONTRIBUTING.md 생성 (GitHub Flow 선택 이유 3줄 포함)
   - [ ] .github/pull_request_template.md 생성
   - [ ] src/practice/review-request.md 시드 파일 생성
   - [ ] src/practice/sync-timing.md 시드 파일 생성
   ```
4. 초록색 **`Submit new issue`** 클릭!
5. 📌 **화면 확인**: 이슈가 생성되면 URL 끝이나 제목 옆에 표시된 **실제 이슈 번호(예: #1)**를 꼭 메모해 두세요!

### Step 2-2. [김상교] 로컬 브랜치 생성
김상교 님 터미널에서 실행:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-setup
```

### Step 2-3. [김상교] 협업 가이드 `docs/CONTRIBUTING.md` 작성
1. 폴더 생성:
   ```bash
   mkdir docs
   ```
2. `docs/CONTRIBUTING.md` 파일을 생성하고 아래 내용을 붙여넣고 저장합니다:
   ```markdown
   # 개발 협업 가이드라인 (CONTRIBUTING)

   ## 1. 브랜치 전략 (GitHub Flow)
   - `main`: 배포 가능한 안정 상태의 보호 브랜치 (직접 push 절대 금지)
   - `feature/<이름>-<작업명>`: 작업 단위 브랜치 (예: `feature/sangkyo-git-basics`)

   ### [우리 팀이 GitHub Flow를 선택한 이유]
   1. 수시 배포 및 빠른 피드백 반영에 가장 최적화된 단순하고 직관적인 브랜치 모델입니다.
   2. 복잡한 릴리즈 브랜치(Git Flow 등) 대신 main 브랜치를 항상 안정된 상태로 유지하여 협업 병목을 방지합니다.
   3. 모든 기능 개발을 독립된 feature 브랜치와 PR 기반 코드 리뷰로 진행하여 문서 품질을 극대화합니다.

   ## 2. 커밋 메시지 컨벤션
   - `feat`: 새로운 학습 노트 또는 실습 기능 추가
   - `fix`: 문서 내용 오류 수정 또는 머지 충돌 해결
   - `docs`: 가이드 문서, 증빙 기록, SUBMISSION 수정
   - `refactor`: 디렉터리 구조 개편 및 파일 정리

   ## 3. Pull Request 및 코드 리뷰 규칙
   - 모든 PR 본문에는 `Closes #이슈번호` 및 What(변경사항), Why(변경이유), How(검증방법)를 반드시 명시합니다.
   - 최소 1명 이상의 동료 리뷰 승인(Approve)을 받아야 머지할 수 있습니다.
   - 단순 "확인했습니다"를 지양하고, 구체적인 라인 피드백이나 질문을 남기며 최소 1회 이상 상호작용(답글/수정)을 나눕니다.

   ## 4. 충돌 발생 시 기본 대응 흐름
   - **발생 감지**: GitHub PR 화면에 충돌 경고가 뜨거나 로컬 머지 시 `CONFLICT` 알림을 확인합니다.
   - **대응 주체**: 충돌을 유발한 PR 작업자가 즉시 팀원들에게 상황을 공유하고 로컬 터미널에서 직접 해결합니다.
   - **해결 절차**: `git fetch origin && git merge origin/main` 후 VS Code에서 충돌 마커를 정리하고 머지 커밋을 올립니다.
   - **기록 의무**: 충돌 원인, 충돌 마커 원문, 해결 전략, 배운 점을 `docs/conflict-resolution.md`에 필수로 기록합니다.
   ```

### Step 2-4. [김상교] PR 템플릿 `.github/pull_request_template.md` 작성
1. 폴더 생성:
   ```bash
   mkdir .github
   ```
2. `.github/pull_request_template.md` 파일을 생성하고 아래 내용을 붙여넣고 저장합니다:
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

### Step 2-5. [김상교] 실습 시드 파일 2종 생성
> ⚠️ **주의**: 이 파일들은 나중에 1조(A/B)와 2조(C/D)가 진짜 충돌을 일으킬 기초 파일입니다. 오타 없이 정확히 만들어주세요!

1. 폴더 생성:
   ```bash
   mkdir -p src/practice
   ```
2. `src/practice/review-request.md` 파일 생성 및 내용 저장:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크를 공유한다.
   ```
3. `src/practice/sync-timing.md` 파일 생성 및 내용 저장:
   ```markdown
   # 동기화 시점 실습

   동기화: 원격 변경을 확인한다.
   ```

### Step 2-6. [김상교] 커밋 및 원격 푸시
김상교 님 터미널에서 실행:
```bash
git add docs/CONTRIBUTING.md .github/pull_request_template.md src/practice/review-request.md src/practice/sync-timing.md
git commit -m "docs: Add CONTRIBUTING guide, PR template, and practice seed files"
git push -u origin feature/sangkyo-setup
```

### Step 2-7. [김상교] 준비 PR 생성
1. GitHub 저장소 페이지로 이동 ➔ 노란색 알림창의 **`Compare & pull request`** 클릭 (또는 `Pull requests` 탭 ➔ `New pull request`).
2. **base: `main`**, **compare: `feature/sangkyo-setup`** 확인.
3. **Title**: `docs: Add CONTRIBUTING guide, PR template, and practice seed files`
4. **Description**:
   ```markdown
   Closes #1

   ## What (변경 사항)
   - docs/CONTRIBUTING.md: GitHub Flow 브랜치 전략, 커밋 규칙, 리뷰 규칙 수립
   - .github/pull_request_template.md: 기본 PR 템플릿 생성
   - src/practice/: review-request.md, sync-timing.md 충돌 실습용 시드 파일 생성

   ## Why (변경 이유)
   - 팀원 전체의 일관된 협업 기준을 마련하고 향후 트러블슈팅/충돌 실습 기반을 마련하기 위함입니다.

   ## How (검증 방법)
   - 마크다운 렌더링 확인 완료
   - 시드 파일 내용 및 경로 정상 확인
   ```
   *(※ `Closes #1` 부분의 숫자는 Step 2-1에서 생성된 실제 번호로 적어주세요!)*
5. 우측 사이드바 **`Reviewers`** 톱니바퀴 클릭 ➔ **장양환** 님 선택.
6. 초록색 **`Create pull request`** 버튼 클릭!

### Step 2-8. [장양환 & 김상교] PR 리뷰, 답변 및 머지
1. **[장양환]**: PR 페이지로 이동 ➔ 상단 **`Files changed`** 탭 클릭.
2. `docs/CONTRIBUTING.md`의 브랜치 규칙 라인 옆 파란색 **`+`** 버튼 클릭.
3. 코멘트 입력창에 아래 내용 입력 후 초록색 **`Start a review`** 클릭:
   > *"GitHub Flow 브랜치 전략이 깔끔하네요! 나중에 긴급 수정이 필요할 때 hotfix 브랜치도 유연하게 허용하는 방향인지 궁금합니다."*
4. 우측 상단 초록색 **`Review changes`** ➔ **`Comment`** (또는 Request changes) 선택 후 **`Submit review`** 클릭.
5. **[김상교]**: 해당 코멘트 아래 답글(Reply) 작성:
   > *"좋은 질문입니다! 기본은 feature로 통일하되, 운영 중 긴급 롤백이 필요할 경우 hotfix 브랜치를 임시 활용할 수 있도록 가이드에 유연하게 반영하겠습니다."*
   답글 등록 후 **`Add single comment`** 클릭.
6. **[장양환]**: 다시 **`Review changes`** 클릭 ➔ **`Approve`** 선택 ➔ **`Submit review`** 클릭!
7. **[김상교]**: PR 메인 화면으로 돌아와 초록색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭!
8. 📌 **확인**: 이슈가 자동으로 `Closed`로 바뀌었는지 확인합니다.

---

# [제3부] 4인 4색 개인 학습노트 작성 (동시 병렬 진행!)

> 🌟 **왕초보 필독**:
> - 4명의 작업 파일(`notes/01~04`)이 완전히 분리되어 있으므로 **4명이 서로 기다리지 않고 지금 바로 동시에 각자 터미널과 웹에서 진행**합니다!
> - 각자 작업이 끝나면 지정된 리뷰어에게 카톡이나 디스코드로 "PR 올렸으니 리뷰 부탁해~"라고 알려주세요.

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
4. `Submit new issue` 클릭 ➔ **생성된 이슈 번호(예: #2 or #3) 메모!**

#### Step 3-1-2. 브랜치 분기 & 파일 작성
김상교 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-git-basics
mkdir -p notes
```
`notes/01-git-basics.md` 파일 생성 후 아래 내용 붙여넣기:
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
   Closes #본인이슈번호

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
   `Start a review` ➔ `Submit review` (Comment).
2. **[김상교]**: 터미널에서 `notes/01-git-basics.md` 맨 아래에 다음 내용 추가:
   ```markdown

   ## 4. 상태 확인
   - `git status`: 현재 세 영역의 상태(수정된 파일, 스테이징된 파일 등)를 한눈에 확인합니다.
   ```
   커밋 및 푸시:
   ```bash
   git commit -am "docs: Add git status explanation based on review feedback"
   git push origin feature/sangkyo-git-basics
   ```
   PR 코멘트에 답글: *"좋은 피드백 감사합니다! git status 설명 반영하여 추가 커밋 올렸습니다."*
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
`notes/02-github-flow.md` 파일 생성 후 아래 내용 붙여넣기:
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
   Closes #본인이슈번호

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
2. **[장양환]**: 파일에 내용 보강 후 추가 커밋 & 푸시:
   ```bash
   echo "6. **머지 후 브랜치 정리**: 역할을 다한 feature 브랜치는 삭제하여 깔끔한 저장소를 유지합니다." >> notes/02-github-flow.md
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
`notes/03-conflict-guide.md` 파일 생성 후 아래 내용 붙여넣기:
```markdown
# 03. Git 충돌(Conflict)의 원리와 해결

## 1. 충돌이 발생하는 원인
동일한 공통 조상(Base)에서 분기한 두 브랜치가 **동일한 파일의 동일한 위치(Hunk)**를 서로 다르게 수정하고 병합할 때, Git은 어떤 것이 올바른 변경인지 스스로 판단할 수 없어 충돌을 일으키고 작업을 멈춥니다.

## 2. 충돌 마커 읽는 법
충돌이 발생하면 파일 내에 다음과 같은 마커가 표시됩니다:
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
1. 충돌 마커를 무작정 지우지 말고 두 사람의 작업 의도를 파악합니다.
2. 양쪽의 유효한 내용을 합의하여 하나의 온전한 코드로 정리합니다.
3. 충돌 마커 기호(`<<<<<<<`, `=======`, `>>>>>>>`)를 완전히 삭제한 후 스테이징(`git add`)하고 머지 커밋을 작성합니다.
```

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
   Closes #본인이슈번호

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
2. **[조은익]**: 파일 맨 아래에 팁 추가 후 커밋 & 푸시:
   ```markdown

   ## 4. 긴급 탈출: git merge --abort
   충돌 해결 도중 파일이 꼬였거나 작업을 처음부터 다시 시도하고 싶다면 `git merge --abort` 명령어로 병합 시도 전 상태로 깨끗하게 롤백할 수 있습니다.
   ```
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
`notes/04-open-source.md` 파일 생성 후 아래 내용 붙여넣기:
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
   Closes #본인이슈번호

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
2. **[김건우]**: 파일 맨 아래에 내용 추가 후 커밋 & 푸시:
   ```markdown

   ## 3. PR 제출 전 자가 점검 체크리스트
   - [ ] 내가 작성한 코드가 요구사항을 충족하는가?
   - [ ] 불필요한 공백이나 디버깅용 코드가 남아있지 않은가?
   - [ ] 문서 링크나 서식이 깨지지 않고 정상 표시되는가?
   ```
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
> - **김상교**: `git commit --amend` 실습 후 공통 파일 수정 ➔ **먼저 main에 머지(선병합)!**
> - **장양환**: `git reset --soft` 실습 후 공통 파일 수정 ➔ **최신 main 당겨와서 진짜 충돌 발생 ➔ 로컬에서 두 의미를 모두 살려 직접 해결 & 머지!**
> - *2조(조은익, 김건우)의 진행 상황과 무관하게 독립적으로 시작할 수 있습니다.*

---

### Step 4-1. [김상교 & 장양환] 공통 기준 커밋(SHA) 확인
1. 김상교 님과 장양환 님 모두 로컬 터미널에서:
   ```bash
   git checkout main
   git pull origin main
   git log -1 --oneline
   ```
2. 두 사람 화면에 찍힌 최신 커밋 해시(예: `abc1234`)가 동일한지 카톡/디스코드로 확인합니다. 이 공통 조상에서 두 사람이 각자 브랜치를 만듭니다!

---

### Step 4-2. [김상교] 브랜치 생성 및 `amend` 실습
김상교 님 터미널:
```bash
git checkout -b feature/sangkyo-amend-practice
mkdir -p src/practice docs/evidence
```

1. **오타가 포함된 1차 커밋 생성**:
   ```bash
   echo "amend 메시지 수정 실습 파일" > src/practice/sangkyo-recovery.txt
   git add src/practice/sangkyo-recovery.txt
   git commit -m "feat: Rekord amend practice with typoo"
   ```
2. **커밋 확인**:
   ```bash
   git log -1 --oneline
   ```
   *(메시지에 `Rekord`, `typoo` 같은 오타가 찍혀 있습니다.)*
3. **`git commit --amend`로 오타 바로잡기 (원격 push 전!)**:
   ```bash
   git commit --amend -m "feat: Record amend practice with corrected commit message"
   ```
4. **결과 확인**:
   ```bash
   git log -1 --oneline
   git reflog -2
   ```
   *(커밋 해시가 바뀌면서 오타가 말끔하게 수정된 것을 확인합니다!)*

### Step 4-3. [김상교] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/sangkyo-amend.md` 생성 후 아래 내용 저장:
   ```markdown
   # 김상교 - git commit --amend 실습 기록

   ## 1. 수행 상황
   - 로컬에서 최신 커밋 메시지에 오타가 발생했으나, 아직 원격에 push하지 않은 안전한 상태임.

   ## 2. 실행 명령어 및 절차
   - 오타 커밋: `git commit -m "feat: Rekord amend practice with typoo"`
   - 수정 명령어: `git commit --amend -m "feat: Record amend practice with corrected commit message"`

   ## 3. 결과 및 선택 이유
   - 커밋 해시가 갱신되며 파일 변경 내용은 그대로 유지된 채 메시지만 교체됨.
   - 아직 공유되지 않은 로컬 커밋의 실수를 가장 깔끔하게 수정하는 최선의 도구임.
   - (주의: 이미 원격에 push된 커밋에는 강제 푸시(force push)를 피해야 하므로 사용 금지)
   ```
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

### Step 4-4. [김상교] PR A 생성 및 선병합 (리뷰어: 조은익)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Review request workflow and amend practice (김상교)`
3. **Description**:
   ```markdown
   ## What
   - src/practice/sangkyo-recovery.txt: amend 실습 파일
   - docs/evidence/sangkyo-amend.md: amend 실습 증빙 문서
   - src/practice/review-request.md: 리뷰 요청 가이드에 '변경 이유' 명시

   ## Why
   - amend 트러블슈팅을 완결하고 1조 충돌 실습의 선행 변경을 반영하기 위함입니다.

   ## How
   - git reflog를 통해 커밋 해시 갱신 확인 완료
   ```
4. **Reviewers**: **조은익** 지정 ➔ `Create pull request` 클릭.
5. **[조은익]**: `Files changed` 확인 ➔ 라인 코멘트 남기기 (*"amend 전후 해시 변화가 명확합니다!"*) ➔ 김상교 답글 (*"감사합니다!"*) ➔ **`Approve`** 클릭.
6. **[김상교]**: 초록색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (선병합 완료! 🎉)

---

### Step 4-5. [장양환] 브랜치 생성 및 `reset --soft` 실습
> ⚠️ **장양환 님 필독**:
> - 김상교 님의 PR이 머지되었더라도, 장양환 님은 Step 4-1의 공통 조상에서 출발해야 자연스러운 충돌이 일어납니다!

장양환 님 터미널:
```bash
git checkout -b feature/yanghwan-reset-practice
mkdir -p src/practice docs/evidence
```

1. **로컬 커밋 생성**:
   ```bash
   echo "soft reset 변경 보존 실습 파일" > src/practice/yanghwan-recovery.txt
   git add src/practice/yanghwan-recovery.txt
   git commit -m "feat: Temporary commit to be reset"
   ```
2. **`git reset --soft HEAD~1` 실행 (원격 push 전!)**:
   ```bash
   git reset --soft HEAD~1
   ```
3. **결과 확인 (가장 중요!)**:
   ```bash
   git status
   ```
   **기대 화면**: `src/practice/yanghwan-recovery.txt`가 **초록색 (Changes to be committed, Staged 상태)**으로 온전히 살아있어야 합니다! 커밋 껍데기만 쏙 빠지고 작업 내용은 안전하게 보존되었습니다.
4. **올바른 메시지로 다시 커밋**:
   ```bash
   git commit -m "feat: Record soft reset practice and preserve staged changes"
   ```

### Step 4-6. [장양환] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/yanghwan-reset.md` 생성 후 아래 내용 저장:
   ```markdown
   # 장양환 - git reset --soft 실습 기록

   ## 1. 수행 상황
   - 로컬에서 방금 작성한 커밋을 취소하되, 작업 중인 파일 변경 사항(Staged)은 그대로 보존하고 싶은 상황.

   ## 2. 실행 명령어 및 절차
   - 1차 커밋: `git commit -m "feat: Temporary commit to be reset"`
   - 커밋 취소: `git reset --soft HEAD~1`
   - 상태 확인: `git status` (Staging Area에 파일이 초록색으로 온전히 보존됨 확인)
   - 재커밋: `git commit -m "feat: Record soft reset practice and preserve staged changes"`

   ## 3. 결과 및 선택 이유
   - 작업 손실 없이 커밋만 안전하게 취소하여 변경 내용을 재구성할 수 있음.
   - (주의: 아직 push하지 않은 로컬 커밋에만 사용하며, 공유 이력은 reset 금지)
   ```
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

### Step 4-7. [장양환] PR B 생성 (리뷰어: 김건우)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Review request verification and reset practice (장양환)`
3. **Description**:
   ```markdown
   ## What
   - src/practice/yanghwan-recovery.txt: soft reset 실습 파일
   - docs/evidence/yanghwan-reset.md: soft reset 실습 증빙 문서
   - src/practice/review-request.md: 리뷰 요청 가이드에 '검증 결과' 명시

   ## Why
   - soft reset 트러블슈팅을 완결하고 1조 충돌 실습을 진행하기 위함입니다.
   - (김상교 님 선병합에 따라 로컬 충돌 해결 진행 예정)

   ## How
   - git status를 통해 Staged 상태 보존 확인 완료
   ```
4. **Reviewers**: **김건우** 지정 ➔ `Create pull request` 클릭!
5. 📌 **화면 확인**: GitHub PR 하단에 회색 경고창으로 **"This branch has conflicts that must be resolved"**가 떠 있는 것을 확인합니다! (정상입니다!)

---

### Step 4-8. [장양환] 💥 충돌 발생 및 로컬 해결!
> 🚨 **주의**: GitHub 웹 화면의 'Resolve conflicts' 버튼을 누르지 마세요! 과제 요구사항에 따라 **내 컴퓨터 터미널에서 직접 충돌을 해결**해야 합니다.

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
3. 에디터(VS Code 등)로 `src/practice/review-request.md` 파일을 엽니다. 아래처럼 충돌 마커가 보입니다:
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
   ```markdown
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
   ```

### Step 4-9. [장양환] 머지 커밋 생성 및 푸시
장양환 님 터미널에서 실행:
```bash
git add src/practice/review-request.md docs/evidence/conflict-ab.md
git commit -m "fix: Resolve merge conflict in review-request.md by preserving both reasons and results"
git push origin feature/yanghwan-reset-practice
```

### Step 4-10. [김건우 & 장양환] 리뷰, Approve 및 머지
1. **[장양환]**: GitHub PR B 페이지를 새로고침하면 충돌 경고가 사라지고 **"This branch has no conflicts with the base branch"**로 바뀐 것을 확인합니다!
2. **[김건우]**: PR B `Files changed` 탭 확인 ➔ 충돌 해결 및 `conflict-ab.md` 라인에 코멘트 작성:
   > *"충돌 마커가 깔끔히 정리되었고 두 팀원의 의견이 완벽히 통합되었네요!"*
3. **[장양환]**: 답글 작성 (*"확인 감사합니다!"*).
4. **[김건우]**: `Review changes` ➔ **`Approve`** 제출!
5. **[장양환]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (1조 미션 완벽 완료! 🏆)

---

# [제5부] 2조(조은익 & 김건우) 트러블슈팅 및 충돌 2 실습

> 🎯 **2조 미션**:
> - **대상 공통 파일**: `src/practice/sync-timing.md` (초기 내용: `동기화: 원격 변경을 확인한다.`)
> - **조은익**: `git revert` 실습 후 공통 파일 수정 ➔ **먼저 main에 머지(선병합)!**
> - **김건우**: `git stash` 실습 후 공통 파일 수정 ➔ **최신 main 당겨와서 진짜 충돌 발생 ➔ 로컬에서 두 의미를 모두 살려 직접 해결 & 머지!**
> - *1조(김상교, 장양환)와 독립적으로 진행할 수 있습니다.*

---

### Step 5-1. [조은익 & 김건우] 공통 기준 커밋(SHA) 확인
1. 조은익 님과 김건우 님 모두 로컬 터미널에서:
   ```bash
   git checkout main
   git pull origin main
   git log -1 --oneline
   ```
2. 두 사람 화면의 커밋 해시가 동일한지 확인합니다. 이 공통 조상에서 각자 출발합니다!

---

### Step 5-2. [조은익] 브랜치 생성 및 `revert` 실습
조은익 님 터미널:
```bash
git checkout -b feature/eunik-revert-practice
mkdir -p src/practice docs/evidence
```

1. **실수로 잘못 공유된 1차 커밋 생성**:
   ```bash
   echo "원격 공유 후 취소할 실수 문장" > src/practice/eunik-recovery.txt
   git add src/practice/eunik-recovery.txt
   git commit -m "feat: Add faulty feature to be reverted"
   ```
2. **원격에 먼저 푸시 (공유 이력 만들기!)**:
   ```bash
   git push -u origin feature/eunik-revert-practice
   ```
3. **`git revert`로 공유 이력을 보존하며 안전 취소**:
   ```bash
   git revert --no-commit HEAD
   ```
4. **역커밋(Revert Commit) 생성 및 원격 푸시**:
   ```bash
   git commit -m "revert: Revert faulty feature to preserve public commit history"
   git push origin feature/eunik-revert-practice
   ```
5. **결과 확인**:
   ```bash
   git log -2 --oneline
   ```
   *(이전 커밋이 삭제되지 않고, 그 커밋을 뒤집는 revert 커밋이 새로 추가된 것을 확인합니다!)*

### Step 5-3. [조은익] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/eunik-revert.md` 생성 후 아래 내용 저장:
   ```markdown
   # 조은익 - git revert 실습 기록

   ## 1. 수행 상황
   - 이미 원격 저장소에 push되어 팀원들에게 공유된 커밋을 안전하게 취소해야 하는 상황.

   ## 2. 실행 명령어 및 절차
   - 잘못된 커밋 push: `git push -u origin feature/eunik-revert-practice`
   - 취소 명령어: `git revert --no-commit HEAD`
   - 역커밋 생성 및 push:
     ```bash
     git commit -m "revert: Revert faulty feature to preserve public commit history"
     git push origin feature/eunik-revert-practice
     ```

   ## 3. 결과 및 선택 이유
   - 이미 공유된 커밋을 reset으로 지우면 팀원들의 저장소와 히스토리가 어긋나 심각한 협업 오류를 유발함.
   - revert는 기존 이력을 그대로 보존하면서 반대되는 변경을 새 커밋으로 기록하므로 협업 환경에서 가장 안전한 롤백 방식임.
   ```
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

### Step 5-4. [조은익] PR C 생성 및 선병합 (리뷰어: 김상교)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Sync timing on start and revert practice (조은익)`
3. **Description**:
   ```markdown
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
5. **[김상교]**: `Files changed` 확인 ➔ 라인 코멘트 남기기 (*"revert를 통해 공유 이력을 안전하게 보존한 점이 훌륭합니다!"*) ➔ 조은익 답글 (*"감사합니다!"*) ➔ **`Approve`** 클릭.
6. **[조은익]**: 초록색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (선병합 완료! 🎉)

---

### Step 5-5. [김건우] 브랜치 생성 및 `stash` 실습
> ⚠️ **김건우 님 필독**:
> - 조은익 님의 PR이 머지되었더라도, 김건우 님은 Step 5-1의 공통 조상에서 출발해야 자연스러운 충돌이 일어납니다!

김건우 님 터미널:
```bash
git checkout -b feature/gunwoo-stash-practice
mkdir -p src/practice docs/evidence
```

1. **기준 파일 생성 및 1차 커밋 (Git이 추적하게 만듦)**:
   ```bash
   echo "stash 복구 비교용 기준 내용" > src/practice/gunwoo-recovery.txt
   git add src/practice/gunwoo-recovery.txt
   git commit -m "feat: Add base tracking file for stash practice"
   ```
2. **작업 중인 미완성 변경 사항 추가**:
   ```bash
   echo "브랜치 전환 후 되살릴 작성 중 내용" >> src/practice/gunwoo-recovery.txt
   git status
   ```
   *(파일이 빨간색 Modified 상태입니다.)*
3. **`git stash push`로 작업 임시 보관**:
   ```bash
   git stash push -m "브랜치 전환 전 임시 보관"
   git status
   ```
   **기대 화면**: `working tree clean`이 뜨며 작업 중이던 내용이 안전한 보관함으로 들어갔습니다!
4. **급한 확인을 위해 다른 브랜치(main) 다녀오기**:
   ```bash
   git checkout main
   git checkout feature/gunwoo-stash-practice
   ```
5. **`git stash pop`으로 작업 내용 완벽 복원!**:
   ```bash
   git stash pop
   git status
   ```
   **기대 화면**: 아까 작성 중이던 변경 사항이 그대로 다시 살아났습니다!
6. **복원된 내용 커밋**:
   ```bash
   git commit -am "feat: Restore stashed work after branch switching"
   ```

### Step 5-6. [김건우] 증빙 문서 작성 및 공통 파일 수정
1. `docs/evidence/gunwoo-stash.md` 생성 후 아래 내용 저장:
   ```markdown
   # 김건우 - git stash 실습 기록

   ## 1. 수행 상황
   - 기능 작업 도중 커밋하기에는 아직 미완성인 코드가 있는 상태에서, 급하게 다른 브랜치를 확인해야 하는 상황.

   ## 2. 실행 명령어 및 절차
   - 임시 보관: `git stash push -m "브랜치 전환 전 임시 보관"`
   - 브랜치 이동: `git checkout main` ➔ `git checkout feature/gunwoo-stash-practice`
   - 작업 복원: `git stash pop`
   - 복원 커밋: `git commit -am "feat: Restore stashed work after branch switching"`

   ## 3. 결과 및 선택 이유
   - 불완전한 상태의 임시 코드를 불필요하게 커밋으로 남기지 않고 작업 트리를 깨끗이 정리할 수 있음.
   - 브랜치 복귀 후 pop을 통해 이전 작업을 손실 없이 완벽하게 복구함.
   ```
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

### Step 5-7. [김건우] PR D 생성 (리뷰어: 장양환)
1. GitHub에서 `Compare & pull request` 클릭.
2. **Title**: `practice: Sync timing before merge and stash practice (김건우)`
3. **Description**:
   ```markdown
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

### Step 5-8. [김건우] 💥 충돌 발생 및 로컬 해결!
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
   ```markdown
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
   ```

### Step 5-9. [김건우] 머지 커밋 생성 및 푸시
김건우 님 터미널에서 실행:
```bash
git add src/practice/sync-timing.md docs/evidence/conflict-cd.md
git commit -m "fix: Resolve merge conflict in sync-timing.md by including both start and pre-merge timings"
git push origin feature/gunwoo-stash-practice
```

### Step 5-10. [장양환 & 김건우] 리뷰, Approve 및 머지
1. **[김건우]**: GitHub PR D 페이지 새로고침 ➔ 충돌 경고 해소 확인!
2. **[장양환]**: PR D `Files changed` 탭 확인 ➔ 충돌 해결 및 `conflict-cd.md` 라인에 코멘트 작성:
   > *"작업 시작 전과 병합 전 두 시점을 모두 살린 해결책이 아주 훌륭합니다!"*
3. **[김건우]**: 답글 작성 (*"감사합니다!"*).
4. **[장양환]**: `Review changes` ➔ **`Approve`** 제출!
5. **[김건우]**: **`Merge pull request`** ➔ **`Confirm merge`** 클릭! (2조 미션 완벽 완료! 🏆)

---

# [제6부] 최종 산출물 취합 및 SUBMISSION 제출 PR

> **목표**: 팀장 김상교 님이 전원의 충돌 기록과 트러블슈팅 기록을 종합 문서로 취합하고, `README.md` 목차와 평가 제출용 `SUBMISSION.md`를 완성하여 최종 PR을 올립니다. 김건우 님이 최종 검토 후 머지합니다.

### Step 6-1. [김상교] 최종 브랜치 분기
김상교 님 터미널:
```bash
git checkout main
git pull origin main
git checkout -b feature/sangkyo-final-submission
```

### Step 6-2. [김상교] 충돌 종합 보고서 `docs/conflict-resolution.md` 작성
`docs/conflict-resolution.md` 파일을 생성하고 아래 내용을 저장합니다:
```markdown
# 충돌 해결 종합 보고서 (팀 전체 2회 완결)

## 1. 충돌 1: 리뷰 요청 가이드 (`src/practice/review-request.md`)
- **참여자**: 김상교(선병합), 장양환(충돌해결)
- **상황 및 기준 커밋**: 공통 기준 커밋에서 분기 후 동일한 한 줄을 각자 수정
- **충돌 마커**:
  - HEAD: `리뷰 요청: PR 링크와 검증 결과를 공유한다.`
  - main: `리뷰 요청: PR 링크와 변경 이유를 공유한다.`
- **해결 절차 및 의사결정**:
  - 변경 이유와 검증 결과 모두 협업에 필요한 핵심 정보이므로 두 의미를 모두 보존
  - 최종 해결: `리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.`
- **관련 증빙**: [docs/evidence/conflict-ab.md](evidence/conflict-ab.md)
- **배운 점**: 동일 hunk 수정 시 기계적 병합이 불가능하므로, 팀원 간 의도 공유를 통한 의미적 통합이 필수적임을 확인함.

## 2. 충돌 2: 동기화 시점 가이드 (`src/practice/sync-timing.md`)
- **참여자**: 조은익(선병합), 김건우(충돌해결)
- **상황 및 기준 커밋**: 공통 기준 커밋에서 분기 후 동일한 동기화 안내 문구를 각자 수정
- **충돌 마커**:
  - HEAD: `동기화: PR 병합 전에 원격 변경을 확인한다.`
  - main: `동기화: 작업 시작 전에 원격 변경을 확인한다.`
- **해결 절차 및 의사결정**:
  - 작업 시작 전 동기화와 PR 병합 직전 동기화는 둘 다 필수적인 절차이므로 두 조건을 모두 명시
  - 최종 해결: `동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.`
- **관련 증빙**: [docs/evidence/conflict-cd.md](evidence/conflict-cd.md)
- **배운 점**: 충돌은 협업 과정에서 서로 다른 관점이 모이는 자연스러운 현상이며, 명확한 기준을 통해 더 완전한 결과물로 발전시킬 수 있음을 학습함.
```

### Step 6-3. [김상교] 트러블슈팅 종합 보고서 `docs/troubleshooting-log.md` 작성
`docs/troubleshooting-log.md` 파일을 생성하고 아래 내용을 저장합니다:
```markdown
# Git 4대 트러블슈팅 종합 실습 로그

## 1. `git commit --amend` (수행자: 김상교)
- **상황**: 로컬 최신 커밋 메시지에 오타 발생 (원격 푸시 전)
- **재현 절차**: `git commit --amend -m "수정된 메시지"` 실행
- **전후 결과**: 커밋 내용은 유지되고 커밋 해시가 갱신되며 메시지 교체 완료
- **선택 이유 및 주의점**: 미푸시 커밋의 오타를 깔끔히 바로잡는 용도이며, 이미 공유된 커밋에는 강제 푸시를 피해야 하므로 사용 금지
- **상세 증빙**: [docs/evidence/sangkyo-amend.md](evidence/sangkyo-amend.md)

## 2. `git reset --soft HEAD~1` (수행자: 장양환)
- **상황**: 로컬 커밋을 취소하되 작업 중인 파일 변경점(Staged)은 보존 필요
- **재현 절차**: `git reset --soft HEAD~1` 실행 후 `git status`로 Staged 상태 확인 후 재커밋
- **전후 결과**: HEAD는 이전 부모로 이동하고 변경점은 Staging Area에 온전히 유지됨
- **선택 이유 및 주의점**: 작업 손실 없이 커밋만 안전하게 취소하는 용도이며, 공유 이력 재작성 금지
- **상세 증빙**: [docs/evidence/yanghwan-reset.md](evidence/yanghwan-reset.md)

## 3. `git revert` (수행자: 조은익)
- **상황**: 이미 원격에 푸시된 공유 커밋을 안전하게 취소해야 하는 상황
- **재현 절차**: `git revert --no-commit HEAD` 실행 후 역커밋 생성
- **전후 결과**: 이전 커밋 이력을 삭제하지 않고 역(Reverse) 변경 커밋을 추가하여 안전 복구
- **선택 이유 및 주의점**: 공유 이력을 깨뜨리지 않고 취소 사실을 투명하게 남기기 위해 revert 선택
- **상세 증빙**: [docs/evidence/eunik-revert.md](evidence/eunik-revert.md)

## 4. `git stash` & `git stash pop` (수행자: 김건우)
- **상황**: 미완성 작업 중 긴급하게 다른 브랜치(main) 상태 확인 필요
- **재현 절차**: `git stash push` ➔ `git checkout main` ➔ `git checkout <작업브랜치>` ➔ `git stash pop`
- **전후 결과**: 작업 트리가 깨끗해진 상태로 브랜치를 전환하고, 복귀 후 작업 변경점 완벽 복원
- **선택 이유 및 주의점**: 불완전한 코드를 커밋하지 않고 안전하게 임시 보관할 수 있음
- **상세 증빙**: [docs/evidence/gunwoo-stash.md](evidence/gunwoo-stash.md)
```

### Step 6-4. [김상교] `README.md` 목차(TOC) 최신화
`README.md` 파일을 열어 프로젝트 소개 및 전체 산출물 링크를 작성합니다:
```markdown
# Git & GitHub 개발 협업 학습정리노트 (B2-2 팀 프로젝트)

본 저장소는 실무 Git/GitHub 협업 워크플로우를 완벽하게 체화하기 위해 4인의 팀원이 1:1 대칭 기여로 완성한 학습 프로젝트입니다.

## 📚 팀원별 학습 정리 노트
1. [01. Git 기초와 3대 작업 영역](notes/01-git-basics.md) - 담당자: 김상교
2. [02. GitHub Flow 브랜치 생명주기](notes/02-github-flow.md) - 담당자: 장양환
3. [03. Git 충돌 원리와 마커 해독](notes/03-conflict-guide.md) - 담당자: 조은익
4. [04. 오픈소스 PR 문화와 리뷰 에티켓](notes/04-open-source.md) - 담당자: 김건우

## 🛠️ 실습 및 협업 보고서
- [협업 가이드라인 (CONTRIBUTING)](docs/CONTRIBUTING.md)
- [충돌 2회 해결 종합 보고서](docs/conflict-resolution.md)
- [Git 4대 트러블슈팅 종합 실습 로그](docs/troubleshooting-log.md)
- [최종 평가 제출 인덱스 표](SUBMISSION.md)
```

### Step 6-5. [김상교] 평가 제출용 최종 색인표 `SUBMISSION.md` 작성
`SUBMISSION.md` 파일을 생성하고 아래 표를 작성합니다 (실제 팀 저장소의 이슈/PR 링크를 기재):
```markdown
# B2-2 최종 평가 제출 인덱스

## 1. 팀원별 기여도 증빙표 (1:1 완전 대칭)

| 팀원 | 역할 | 개인 학습 노트 PR | 트러블슈팅 & 실습 PR | 동료 리뷰 참여 |
|:---:|:---:|:---|:---|:---|
| **김상교** | 호스트 & 팀장 / 인프라 | PR (Git 기초) | PR (amend 실습) | 장양환 노트 리뷰, 조은익 실습 리뷰 |
| **장양환** | 코어 / 충돌1 | PR (GitHub Flow) | PR (reset & 충돌해결) | 조은익 노트 리뷰, 김건우 실습 리뷰 |
| **조은익** | 코어 / 충돌이론 | PR (충돌 원리) | PR (revert 실습) | 김건우 노트 리뷰, 김상교 실습 리뷰 |
| **김건우** | 심화 / 충돌2 | PR (PR 문화) | PR (stash & 충돌해결) | 김상교 노트 리뷰, 장양환 실습 리뷰 |

## 2. 필수 산출물 점검
- [x] [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) (GitHub Flow 채택 이유 3줄 포함)
- [x] [docs/conflict-resolution.md](docs/conflict-resolution.md) (비자명 충돌 2회 완결 기록)
- [x] [docs/troubleshooting-log.md](docs/troubleshooting-log.md) (트러블슈팅 4종 완결 기록)
- [x] [docs/evidence/](docs/evidence/) (개인별 도구 및 충돌 증빙 6건)
- [x] [notes/](notes/) (팀원 4인의 학습 정리 노트 4종)
- [x] [docs/git-history.txt](docs/git-history.txt) (전체 Git 커밋 이력)
```

### Step 6-6. [김상교] Git 히스토리 로그 추출
김상교 님 터미널에서 전체 커밋 로그를 텍스트 파일로 추출합니다:
```bash
git log --graph --oneline --all > docs/git-history.txt
```

### Step 6-7. [김상교] 커밋, 푸시 및 최종 PR 생성
1. 커밋 & 푸시:
   ```bash
   git add docs/conflict-resolution.md docs/troubleshooting-log.md README.md SUBMISSION.md docs/git-history.txt
   git commit -m "docs: Finalize SUBMISSION index, conflict report, troubleshooting log, and TOC"
   git push -u origin feature/sangkyo-final-submission
   ```
2. GitHub에서 `Compare & pull request` 클릭.
3. **Title**: `docs: Add SUBMISSION index and finalize project documentation`
4. **Description**:
   ```markdown
   ## What
   - docs/conflict-resolution.md: 비자명 충돌 2회 종합 기록
   - docs/troubleshooting-log.md: 4대 트러블슈팅 종합 기록
   - README.md: 목차 링크 갱신
   - SUBMISSION.md: 최종 평가 인덱스 표 완성
   - docs/git-history.txt: 전체 커밋 로그 추출

   ## Why
   - B2-2 과제 최종 평가 제출을 위한 모든 산출물을 완결하기 위함입니다.

   ## How
   - 모든 상대 링크 유효성 검증 완료
   - 기여 분담표 및 필수 산출물 전수 확인 완료
   ```
5. **Reviewers**: **김건우** 지정 ➔ `Create pull request` 클릭!

### Step 6-8. [김건우 & 김상교] 최종 검토, Approve 및 최종 머지!
1. **[김건우]**: PR `Files changed` 탭 확인 ➔ `SUBMISSION.md` 라인에 코멘트 작성:
   > *"팀원 4인의 기여와 증빙 문서가 완벽하게 정리되었습니다! 고생 많으셨습니다."*
2. **[김상교]**: 답글 작성 (*"함께 고생해주셔서 감사합니다!"*).
3. **[김건우]**: `Review changes` ➔ **`Approve`** 제출!
4. **[김상교]**: 초록색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭! 🎉

---

# [제7부] 최종 평가 5대 구두 문답 및 합격 자가 점검표

> 🎓 **평가관 질문 대비**:  
> 과제 제출 후 구두 면접이나 질문이 들어왔을 때, 팀원 전원이 아래 답변 요령을 숙지하고 있으면 100점 만점을 받습니다!

### Q1. "팀이 GitHub Flow를 선택한 이유가 무엇인가요?"
- **답변**: "저희 프로젝트는 수시 배포와 빠른 문서 작성이 핵심이었습니다. Git Flow처럼 복잡한 릴리즈 브랜치를 두는 대신, `main`을 항상 배포 가능한 안정 상태로 유지하고, 모든 작업을 독립된 `feature` 브랜치와 PR 기반 코드 리뷰로 진행하여 협업 병목을 없애고 품질을 높이기 위해 선택했습니다." (근거: `docs/CONTRIBUTING.md`)

### Q2. "충돌(Conflict)이 발생했을 때 어떻게 대처했나요?"
- **답변**: "웹에서 임의로 해결하지 않고, 로컬 터미널에서 `git merge origin/main`을 실행하여 충돌 마커를 직접 확인했습니다. 1조는 '변경 이유'와 '검증 결과'를, 2조는 '시작 전'과 '병합 전' 동기화 조건을 논의하여 두 팀원의 의도를 모두 살리는 방향으로 합의하고 머지 커밋을 올렸습니다." (근거: `docs/conflict-resolution.md`)

### Q3. "이미 원격에 push된 커밋을 취소할 때 왜 reset 대신 revert를 썼나요?"
- **답변**: "이미 원격에 push된 커밋을 `reset`으로 지우고 강제 푸시(`--force`)를 하면 다른 팀원들의 로컬 이력과 충돌하여 심각한 혼란을 초래합니다. 반면 `revert`는 기존 이력을 온전히 보존하면서 반대되는 변경을 새 커밋으로 남기므로 공유 히스토리를 깨뜨리지 않는 가장 안전한 방식이기 때문입니다." (근거: `docs/troubleshooting-log.md`)

### Q4. "`git stash`는 어떤 상황에서 활용했나요?"
- **답변**: "작업 중 아직 커밋하기에는 미완성인 코드가 있을 때, 급하게 `main` 브랜치로 전환해 최신 상태를 확인해야 했습니다. `git stash`로 작업 트리를 깨끗이 보관한 후 브랜치를 다녀왔고, 복귀 후 `git stash pop`으로 코드를 손실 없이 안전하게 복구했습니다." (근거: `docs/evidence/gunwoo-stash.md`)

### Q5. "main 브랜치에 직접 푸시하지 못하도록 어떻게 보호했나요?"
- **답변**: "GitHub Branch Protection Rule을 설정하여 `main` 브랜치에 직접 push를 전면 차단하고, 반드시 PR을 생성하여 최소 1명 이상의 승인(Approve)을 받아야만 머지되도록 강제했습니다. 실제로 직접 푸시를 시도했을 때 `GH006` 에러로 차단되는 것을 확인했습니다." (근거: 제1부 캡처)

---

# [부록] 왕초보 긴급 구조 SOS 대응표

| 문제 상황 | 증상 및 에러 메시지 | 즉시 해결 방법 |
|:---|:---|:---|
| **터미널에서 푸시 거부** | `remote: error: GH006: Protected branch hook declined` | `main`에 직접 푸시하려 했기 때문입니다. `git checkout -b feature/작업명`으로 브랜치를 따서 푸시하세요. |
| **충돌 해결 중 파일이 꼬임** | `Automatic merge failed; ...` 후 손을 못 대겠음 | 당황하지 말고 `git merge --abort`를 치면 머지 시도 전으로 깨끗하게 롤백됩니다. 다시 차근차근 시도하세요. |
| **PR 화면에 리뷰 승인 버튼이 없음** | `Approve` 라디오 버튼이 비활성화됨 | 본인이 만든 PR은 본인이 승인할 수 없습니다! 지정된 다른 리뷰어 계정으로 로그인해 승인하세요. |
| **커밋 메시지에 오타를 냄** | 아직 push 안 함 | `git commit --amend -m "올바른메시지"`로 즉시 수정 가능합니다. |
| **stash pop 후 충돌 발생** | `CONFLICT (content): ... in stash` | 당황하지 말고 파일을 열어 마커를 정리한 뒤 `git add`하고 커밋하면 됩니다. `git stash list`로 확인 후 필요시 `git stash drop`합니다. |
| **현재 브랜치가 헷갈릴 때** | 내가 어디 있는지 모르겠음 | `git branch --show-current`를 입력하면 현재 브랜치 이름이 딱 나옵니다. |
| **상태 확인이 필요할 때** | 파일이 수정됐는지 확신이 안 섬 | 언제든지 `git status`를 치세요! Git에서 가장 안전하고 유용한 명령어입니다. |
