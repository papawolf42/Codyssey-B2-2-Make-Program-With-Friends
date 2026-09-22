# B2-2 학습정리노트 1000스텝 마스터 협업 시나리오 (조은익 님 개인 저장소 버전)

> **팀원 (4명)**: **조은익(저장소 호스트), 김상교(팀장), 장양환, 김건우**  
> **저장소 형태**: **조은익 님의 개인 Public GitHub Repository + 팀원 3명 Collaborator 초대 방식**  
> **프로젝트 주제**: **Git & GitHub 개발 협업 학습정리노트 (Markdown 기반)**  
> **핵심 장점**: Organization 생성 절차 없이 조은익 님의 개인 계정에서 3분 만에 시작 가능하며, 프로그래밍 문법 에러 없이 마크다운 문서 작성만으로 과제 평가 기준(브랜치 보호, Issue-PR 연동, 1인당 PR 2개 이상, 1인당 리뷰 2개 이상, Request Changes 피드백 반영, 자명/비자명 충돌 2회, 4대 트러블슈팅)을 100% 만족합니다.

---

## 👥 팀원 배역 및 기여 분담표

| 팀원 이름 | 배역/역할 | 주 담당 업무 | 목표 PR |
|:---:|:---:|:---|:---:|
| **조은익** | **저장소 호스트 / 트러블슈팅** | 개인 Repo 생성, Collaborator 초대, 충돌노트(`03-conflict-guide.md`), [충돌 1] 라인 충돌 해결, [충돌 2] 폴더 이동(`git mv`), `revert` 실습 | **PR #3, PR #7, PR #9** |
| **김상교** | **팀장 / 가이드 & 인프라** | `CONTRIBUTING.md`, 기초노트(`01-git-basics.md`), `amend` 실습, 최종 `SUBMISSION.md` 작성 | **PR #1, PR #5, PR #12** |
| **장양환** | **코어 / 협업노트** | 브랜치노트(`02-github-flow.md`), [충돌 1] 라인 충돌 유발자, `reset --soft` 실습, `troubleshooting-log.md` 작성 | **PR #2, PR #6, PR #11** |
| **김건우** | **심화노트 / 리뷰피드백** | 협업노트(`04-open-source.md`), 리뷰 피드백 수정 반영(Request Changes), [충돌 2] 비자명 충돌 해결자, `stash` 실습 | **PR #4, PR #8, PR #10** |

---

## 📂 최종 완성될 프로젝트 디렉터리 구조
```
git-study-notes/
├── README.md                      # 프로젝트 소개 메인 문서
├── SUBMISSION.md                  # 최종 평가 제출 인덱스 표
├── docs/
│   ├── CONTRIBUTING.md            # 협업 가이드 및 커밋 컨벤션
│   ├── conflict-resolution.md     # 충돌 2회(자명/비자명) 해결 기록부
│   ├── troubleshooting-log.md     # Git 4대 트러블슈팅 실습 기록부
│   └── git-history.txt            # 전체 git 커밋 로그 증빙
└── notes/
    ├── 01-git-basics.md           # [김상교] Git 기초 개념 및 3대 영역
    ├── 02-github-flow.md          # [장양환] GitHub Flow 및 브랜치 전략
    ├── advanced/
    │   └── 03-conflict-guide.md   # [조은익, 김건우] 충돌 원리 및 해결 가이드 (충돌 2로 이동됨)
    └── 04-open-source.md          # [김건우] 오픈소스 협업 및 PR 템플릿 (리뷰 피드백 반영됨)
```

---

# [제1부] 사전 준비 & 조은익 님 개인 저장소 세팅 (Step 1 ~ 80)

### 1-1. 조은익: 개인 저장소 생성 및 Collaborator 초대
- **Step 1**: 조은익 님이 웹 브라우저를 열고 [GitHub](https://github.com)에 로그인합니다.
- **Step 2**: 우측 상단 `+` 버튼 클릭 ➔ **`New repository`** 선택.
- **Step 3**: Repository name 입력창에 `git-study-notes` 입력.
- **Step 4**: 공개 범위를 반드시 **`Public`**으로 선택. (GitHub Free 계정에서 Branch Protection 기능을 사용하기 위해 Public 필수)
- **Step 5**: `Add a README file` 체크박스는 **반드시 체크 해제** (완전 빈 저장소로 시작).
- **Step 6**: 녹색 버튼 **`Create repository`** 클릭.
- **Step 7**: 생성된 저장소 페이지의 상단 메뉴 중 **`Settings`** 탭 클릭.
- **Step 8**: 좌측 사이드바에서 **`Collaborators`** 클릭. (비밀번호 또는 2FA 확인창이 뜨면 인증)
- **Step 9**: 녹색 버튼 **`Add people`** 클릭.
- **Step 10**: 검색창에 **김상교, 장양환, 김건우** 님의 GitHub ID(또는 이메일)를 한 명씩 입력하고 **`Add <ID> to this repository`** 클릭.
- **Step 11**: 3명 모두에게 `Pending Invite` 상태가 표시되는 것을 확인.

### 1-2. 김상교, 장양환, 김건우: Collaborator 초대 수락
- **Step 12**: 김상교, 장양환, 김건우 님은 본인 이메일함 또는 GitHub 알림창(`https://github.com/<조은익_GitHub_ID>/git-study-notes/invitations`)으로 이동.
- **Step 13**: 초록색 버튼 **`Accept invitation`**을 클릭하여 저장소 공동 작업자로 합류 완료.

### 1-3. 조은익: 첫 커밋 푸시 및 Branch Protection 설정
- **Step 14**: 조은익 님 로컬 터미널(VS Code 또는 Git Bash)을 열고 작업 디렉터리로 이동:
  ```bash
  mkdir git-study-notes
  cd git-study-notes
  git init
  ```
- **Step 15**: 루트 `README.md` 파일을 생성하고 첫 커밋 작성:
  ```bash
  echo "# Git & GitHub 개발 협업 학습정리노트" > README.md
  git add README.md
  git commit -m "init: Initial commit with basic README"
  ```
- **Step 16**: 원격 저장소 연결 후 `main` 브랜치에 최초 푸시:
  ```bash
  git branch -M main
  git remote add origin https://github.com/<조은익_GitHub_ID>/git-study-notes.git
  git push -u origin main
  ```
- **Step 17**: 저장소 웹 페이지(`Settings` ➔ 좌측 사이드바 `Branches`)로 이동.
- **Step 18**: **`Add branch protection rule`** (또는 `Add rule`) 클릭.
- **Step 19**: Branch name pattern에 `main` 입력.
- **Step 20**: **`Require a pull request before merging`** 체크.
- **Step 21**: **`Require approvals`** 체크 및 숫자 `1` 확인.
- **Step 22**: 하단 **`Do not allow bypassing the above settings`** 체크 (저장소 소유자도 직접 푸시 불가).
- **Step 23**: 녹색 버튼 **`Create`** (또는 `Save changes`) 클릭하여 보호 규칙 저장.
- **Step 24**: 직접 푸시 차단 검증 (조은익 님 터미널):
  ```bash
  echo "test direct push" >> README.md
  git commit -am "test: Direct push to main"
  git push origin main
  ```
- **Step 25**: 터미널에 `remote: error: GH006: Protected branch hook declined` 에러가 뜨며 직접 푸시가 완벽히 차단됨을 확인!
- **Step 26**: 테스트 변경사항 취소:
  ```bash
  git reset --hard HEAD~1
  ```

### 1-4. 김상교, 장양환, 김건우: 저장소 로컬 클론
- **Step 27**: 김상교 님 로컬 터미널:
  ```bash
  git clone https://github.com/<조은익_GitHub_ID>/git-study-notes.git
  cd git-study-notes
  ```
- **Step 28**: 장양환 님 로컬 터미널:
  ```bash
  git clone https://github.com/<조은익_GitHub_ID>/git-study-notes.git
  cd git-study-notes
  ```
- **Step 29**: 김건우 님 로컬 터미널:
  ```bash
  git clone https://github.com/<조은익_GitHub_ID>/git-study-notes.git
  cd git-study-notes
  ```

---

# [제2부] 협업 규칙 가이드(CONTRIBUTING.md) 구축 (Step 81 ~ 180)

### 2-1. 김상교: Issue #1 발행 및 협업 가이드 작성 (PR #1)
- **Step 81**: 저장소 `Issues` 탭 ➔ **`New issue`** 클릭.
- **Step 82**: 제목: `[docs] 협업 규칙 가이드 CONTRIBUTING.md 작성`
- **Step 83**: 내용:
  ```markdown
  ## 작업 목적
  - 팀원 전원이 준수할 브랜치 명명 규칙, 커밋 컨벤션, PR 규칙 명시
  ## 세부 항목
  - docs/CONTRIBUTING.md 생성
  ```
- **Step 84**: **`Submit new issue`** 클릭 ➔ **이슈 #1** 생성 확인.
- **Step 85**: 김상교 님 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b docs/contributing-guide
  ```
- **Step 86**: `docs/` 폴더를 생성하고 `docs/CONTRIBUTING.md` 작성:
  ```markdown
  # 개발 협업 가이드라인 (CONTRIBUTING)

  ## 1. 브랜치 전략 (GitHub Flow)
  - `main`: 배포 가능한 안정 상태의 보호 브랜치 (직접 push 금지)
  - `feature/<이름>-<기능>`: 신규 학습 노트 작성 브랜치 (예: `feature/yanghwan-flow`)
  - `docs/<이름>-<문서>`: 문서 수정 및 정리 브랜치

  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리

  ## 3. Pull Request 및 코드 리뷰 규칙
  - 모든 PR 본문에는 `Closes #이슈번호`를 반드시 명시합니다.
  - 최소 1명 이상의 동료 리뷰 승인(Approve)을 받아야 머지할 수 있습니다.
  ```
- **Step 87**: 커밋 및 원격 푸시:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add CONTRIBUTING.md guide for team collaboration"
  git push -u origin docs/contributing-guide
  ```
- **Step 88**: GitHub 저장소 웹 페이지에서 **`Compare & pull request`** 클릭.
- **Step 89**: 제목: `docs: Add CONTRIBUTING guide (Closes #1)`
- **Step 90**: 본문에 `Closes #1` 작성, Reviewers에 **장양환** 님 지정 ➔ **`Create pull request`** 클릭 (PR #1).

### 2-2. 장양환: PR #1 코드 리뷰 및 머지
- **Step 91**: 장양환 님이 PR #1 페이지로 이동하여 **`Files changed`** 탭 확인.
- **Step 92**: 우측 상단 **`Review changes`** 클릭.
- **Step 93**: 코멘트에 *"협업 규칙과 커밋 컨벤션이 깔끔하게 정리되었습니다. 확인했습니다!"* 작성.
- **Step 94**: **`Approve`** 선택 후 **`Submit review`** 클릭.
- **Step 95**: PR 메인 화면으로 돌아와 **`Merge pull request`** ➔ **`Confirm merge`** 클릭.
- **Step 96**: 이슈 #1이 자동으로 Closed 되었는지 확인!

---

# [제3부] 4인 4색 기초 학습노트 분담 작성 (Step 181 ~ 380)

> **원칙**: 4명의 팀원이 각자 담당한 주제의 학습 정리 노트를 작성하고 순서대로 PR 및 상호 코드 리뷰를 진행합니다.

### 3-1. 장양환: GitHub Flow 학습노트 작성 (PR #2)
- **Step 181**: 장양환 님 이슈 발행: `[feat] GitHub Flow 브랜치 전략 학습노트 작성` ➔ **이슈 #2**.
- **Step 182**: 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/yanghwan-flow
  ```
- **Step 183**: `notes/` 폴더를 생성하고 `notes/02-github-flow.md` 작성:
  ```markdown
  # 02. GitHub Flow 브랜치 전략

  ## 1. GitHub Flow의 핵심 원칙
  - `main` 브랜치는 항상 배포 가능하고 신뢰할 수 있는 안정된 상태를 유지합니다.
  - 새로운 작업을 시작할 때는 항상 최신 `main`에서 구체적인 이름을 가진 브랜치를 분기합니다.
  - 작업 도중 수시로 원격 브랜치에 커밋을 푸시하여 동료들과 진행 상황을 공유합니다.

  ## 2. Pull Request와 코드 리뷰
  - 작업이 완료되거나 피드백이 필요할 때 PR을 생성합니다.
  - 팀원의 코드 리뷰와 피드백 반영을 거쳐 최종 승인을 얻은 후 `main`에 병합합니다.
  ```
- **Step 184**: 커밋 및 푸시:
  ```bash
  git add notes/02-github-flow.md
  git commit -m "feat: Add study note for GitHub Flow"
  git push -u origin feature/yanghwan-flow
  ```
- **Step 185**: GitHub에서 PR #2 생성 (`Closes #2`), Reviewer로 **조은익** 님 지정.
- **Step 186**: **조은익** 님이 `Files changed` 확인 후 `Approve` ➔ 장양환 님이 `Merge pull request` 클릭하여 머지 완료.

### 3-2. 조은익: 충돌 원리 학습노트 작성 (PR #3)
- **Step 187**: 조은익 님 이슈 발행: `[feat] Git 충돌 원리와 해결법 학습노트 작성` ➔ **이슈 #3**.
- **Step 188**: 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/eunik-conflict
  ```
- **Step 189**: `notes/03-conflict-guide.md` 작성 (※ 추후 비자명 충돌의 대상 파일이 됩니다):
  ```markdown
  # 03. Git 충돌(Conflict)의 원리와 해결

  ## 1. 충돌이란 무엇인가?
  - 동일한 파일의 동일한 영역을 서로 다른 브랜치에서 다르게 수정하고 병합할 때 Git이 자동으로 판단하지 못해 멈추는 현상입니다.

  ## 2. 충돌 마커의 구조
  - `<<<<<<< HEAD`: 현재 내가 머지를 수행 중인 로컬 브랜치의 변경사항
  - `=======`: 두 브랜치 변경사항의 경계선
  - `>>>>>>> origin/main`: 원격 main에서 가져오려는 최신 변경사항
  ```
- **Step 190**: 커밋 및 푸시:
  ```bash
  git add notes/03-conflict-guide.md
  git commit -m "feat: Add study note for conflict resolution basics"
  git push -u origin feature/eunik-conflict
  ```
- **Step 191**: GitHub에서 PR #3 생성 (`Closes #3`), Reviewer로 **김건우** 님 지정.
- **Step 192**: **김건우** 님이 `Approve` ➔ 조은익 님이 `Merge pull request` 클릭하여 머지 완료.

### 3-3. 김건우: 오픈소스 협업 기본노트 작성 (PR #4)
- **Step 193**: 김건우 님 이슈 발행: `[feat] 오픈소스 협업 및 PR 문화 학습노트 작성` ➔ **이슈 #4**.
- **Step 194**: 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/gunwoo-opensource
  ```
- **Step 195**: `notes/04-open-source.md` 작성:
  ```markdown
  # 04. 오픈소스 협업과 PR 문화

  ## 1. 협업 에티켓
  - 작은 단위로 자주 커밋하고 PR 크기를 작게 유지하여 리뷰어의 부담을 줄입니다.
  - 명확한 제목과 본문 설명을 작성하고 관련 이슈 번호를 연동합니다.

  ## 2. 코드 리뷰 피드백 수용
  - 리뷰어의 피드백은 코드 품질을 높이기 위한 건설적인 조언으로 받아들입니다.
  ```
- **Step 196**: 커밋 및 푸시:
  ```bash
  git add notes/04-open-source.md
  git commit -m "feat: Add study note for open source collaboration"
  git push -u origin feature/gunwoo-opensource
  ```
- **Step 197**: GitHub에서 PR #4 생성 (`Closes #4`), Reviewer로 **김상교** 님 지정.
- **Step 198**: **김상교** 님이 `Approve` ➔ 김건우 님이 `Merge pull request` 클릭하여 머지 완료.

### 3-4. 김상교: Git 기초 개념노트 작성 (PR #5)
- **Step 199**: 김상교 님 이슈 발행: `[feat] Git 3대 영역과 기본 명령어 학습노트 작성` ➔ **이슈 #5**.
- **Step 200**: 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/sangkyo-git-basics
  ```
- **Step 201**: `notes/01-git-basics.md` 작성:
  ```markdown
  # 01. Git 기초 개념과 3대 영역

  ## 1. Git의 3대 작업 영역
  1. **Working Directory**: 실제 파일을 수정하고 작업하는 로컬 디렉터리
  2. **Staging Area (Index)**: 커밋할 파일들이 준비되는 중간 대기 영역 (`git add`)
  3. **Repository (Commit History)**: 영구적으로 버전 기록이 저장되는 저장소 (`git commit`)

  ## 2. 기본 라이프사이클
  - 파일 수정 ➔ `git add`로 스테이징 ➔ `git commit`으로 스냅샷 기록 ➔ `git push`로 원격 공유
  ```
- **Step 202**: 커밋 및 푸시:
  ```bash
  git add notes/01-git-basics.md
  git commit -m "feat: Add study note for git basics and three areas"
  git push -u origin feature/sangkyo-git-basics
  ```
- **Step 203**: GitHub에서 PR #5 생성 (`Closes #5`), Reviewer로 **장양환** 님 지정.
- **Step 204**: **장양환** 님이 `Approve` ➔ 김상교 님이 `Merge pull request` 클릭하여 머지 완료.

---

# [제4부] ★ [실전 충돌 1] 자명한 충돌 (Hunk 충돌) (Step 381 ~ 500)

> **상황**: `docs/CONTRIBUTING.md` 문서의 동일한 라인에 **장양환** 님과 **조은익** 님이 각각 서로 다른 커밋 메시지 규칙 항목을 추가하여 자연스러운 라인 충돌(Hunk 충돌)을 유발합니다.

```
                    ┌───────────────────────────────┐
                    │      docs/CONTRIBUTING.md     │
                    └───────────────┬───────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
[장양환: docs/yanghwan-test-rule]               [조은익: docs/eunik-style-rule]
4번째 줄: - test: 단위 테스트 및 실습 검증 추가   4번째 줄: - style: 마크다운 서식 정리 추가
(PR #6 -> main에 먼저 머지 완료!)               (PR #7 생성 시 CONFLICT 발생!)
```

### 4-1. 두 팀원의 동시 분기
- **Step 381**: 장양환 님 이슈 발행: `[docs] 커밋 컨벤션에 test 규칙 추가` ➔ **이슈 #6**.
- **Step 382**: 조은익 님 이슈 발행: `[docs] 커밋 컨벤션에 style 규칙 추가` ➔ **이슈 #7**.
- **Step 383**: 두 팀원 모두 동일한 최신 `main`에서 브랜치를 분기합니다:
  ```bash
  # 장양환:
  git checkout main && git pull origin main
  git checkout -b docs/yanghwan-test-rule

  # 조은익:
  git checkout main && git pull origin main
  git checkout -b docs/eunik-style-rule
  ```

### 4-2. 장양환: 수정 및 main 선반영
- **Step 384**: 장양환 님이 `docs/CONTRIBUTING.md`의 `## 2. 커밋 메시지 컨벤션` 아래 마지막 줄에 `- test: 단위 테스트 및 실습 검증 추가`를 추가합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리
  - `test`: 단위 테스트 및 실습 검증 추가
  ```
- **Step 385**: 커밋 후 원격 푸시 및 PR #6 생성 (`Closes #6`):
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add test tag rule to commit conventions"
  git push -u origin docs/yanghwan-test-rule
  ```
- **Step 386**: **김상교** 님이 확인 후 `Approve` ➔ **PR #6이 `main`에 먼저 머지 완료!**

### 4-3. 조은익: 수정 및 충돌 직면
- **Step 387**: 조은익 님은 장양환 님의 머지 사실을 모른 채, 본인의 `docs/eunik-style-rule` 브랜치에서 **장양환 님이 작성했던 바로 그 위치**에 `- style: 마크다운 서식 및 줄바꿈 정리`를 추가합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리
  - `style`: 마크다운 서식 및 줄바꿈 정리
  ```
- **Step 388**: 커밋 후 푸시:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add style tag rule to commit conventions"
  git push -u origin docs/eunik-style-rule
  ```
- **Step 389**: 조은익 님이 GitHub에서 PR #7을 생성합니다 (`Closes #7`).
- **Step 390**: **GitHub PR 화면에 회색 경고창 발생!**
  > **`This branch has conflicts that must be resolved`**  
  > `Conflicting files: docs/CONTRIBUTING.md`

### 4-4. 조은익: 로컬 충돌 해결 절차
- **Step 391**: 조은익 님은 웹 편집기를 쓰지 않고, 원칙대로 **로컬 터미널**에서 `origin/main`을 병합합니다:
  ```bash
  git fetch origin
  git merge origin/main
  ```
- **Step 392**: **터미널에 실제 출력되는 충돌 문구 확인**:
  ```text
  Auto-merging docs/CONTRIBUTING.md
  CONFLICT (content): Merge conflict in docs/CONTRIBUTING.md
  Automatic merge failed; fix conflicts and then commit the result.
  ```
- **Step 393**: VS Code 에디터로 `docs/CONTRIBUTING.md`를 열어 충돌 마커를 확인합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 코드 리팩터링
  <<<<<<< HEAD
  - `style`: 마크다운 서식 및 줄바꿈 정리
  =======
  - `test`: 단위 테스트 및 실습 검증 추가
  >>>>>>> origin/main
  ```
- **Step 394**: 충돌 마커(`<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main`)를 지우고 두 항목이 순서대로 모두 보존되도록 합칩니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 코드 리팩터링
  - `style`: 마크다운 서식 및 줄바꿈 정리
  - `test`: 단위 테스트 및 실습 검증 추가
  ```
- **Step 395**: 스테이징 후 머지 커밋 생성:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "fix: Resolve conflict by keeping both style and test conventions"
  ```
- **Step 396**: 원격 브랜치로 푸시:
  ```bash
  git push origin docs/eunik-style-rule
  ```
- **Step 397**: GitHub PR #7 화면을 새로고침하여 녹색 `This branch has no conflicts`로 바뀐 것을 확인!
- **Step 398**: **장양환** 님이 `Approve` ➔ PR #7 머지 완료!

### 4-5. 조은익: 충돌 1 문서화
- **Step 399**: 조은익 님이 `docs/conflict-resolution.md` 파일을 생성하고 충돌 1 내용을 기록하여 머지합니다:
  ```markdown
  # Merge Conflict Resolution Log

  ## 1. 충돌 1: 자명한 충돌 (Hunk 충돌)
  - **참여자**: 장양환, 조은익
  - **대상 파일**: `docs/CONTRIBUTING.md`
  - **발생 원인**: 동일 위치에 커밋 규칙 항목(`test` vs `style`)을 동시 추가
  - **충돌 마커**: `<<<<<<< HEAD` (style) vs `>>>>>>> origin/main` (test)
  - **해결 전략**: 두 규칙을 모두 보존(Union Merge)하여 순서대로 배치
  - **해결 커밋**: PR #7 머지 커밋
  ```

---

# [제5부] ★ 필수 요건: 코드 리뷰 피드백 반영 (Request Changes) (Step 501 ~ 600)

> **목표**: 리뷰어가 단순 텍스트 승인만 하는 것이 아니라, **코드 라인에 개선을 요구(`Request changes`)하고 작업자가 수정 커밋을 올려 재승인받는 필수 평가 항목**을 완벽히 충족합니다.

- **Step 501**: 김건우 님 이슈 발행: `[feat] 오픈소스 PR 템플릿 작성 요령 보강` ➔ **이슈 #8**.
- **Step 502**: 김건우 님 브랜치 분기: `feature/gunwoo-template-guide`
- **Step 503**: 김건우 님이 `notes/04-open-source.md`에 내용을 추가할 때, **고의로 PR 템플릿의 핵심 체크리스트를 누락**한 채 작성합니다:
  ```markdown
  ## 3. PR 템플릿 작성 요령
  - PR 본문에는 작업한 내용을 텍스트로 자세하게 적습니다.
  ```
- **Step 504**: 커밋 및 푸시 후 PR #8 생성 (`Closes #8`):
  ```bash
  git add notes/04-open-source.md
  git commit -m "feat: Add brief PR template guide"
  git push -u origin feature/gunwoo-template-guide
  ```
- **Step 505**: **김상교 님이 코드 리뷰를 수행합니다**:
  1. PR #8의 **`Files changed`** 탭 클릭.
  2. `notes/04-open-source.md`의 추가된 라인에 마우스를 올리고 파란색 **`+`** 버튼 클릭.
  3. 코멘트 입력:  
     *"단순 텍스트 설명 외에도 실무에서 사용하는 [ ] 체크리스트 양식 예시를 추가해 주시면 훨씬 완성도 높은 학습 노트가 될 것 같습니다!"*
  4. 우측 상단 **`Finish your review`** 클릭.
  5. 라디오 버튼 중 **`Request changes`** 선택 후 **`Submit review`** 클릭! (빨간색 마크 표시)
- **Step 506**: 김건우 님은 피드백 알림을 확인하고 로컬에서 `notes/04-open-source.md`를 수정합니다:
  ```markdown
  ## 3. PR 템플릿 작성 요령
  - 작업 요약 및 변경 이유를 명시합니다.
  - 아래와 같이 실무형 자가 검증 체크리스트를 포함합니다:
    - [ ] 로컬에서 변경사항을 직접 검증했는가?
    - [ ] 관련된 이슈 번호(Closes #)를 명시했는가?
    - [ ] 불필요한 임시 파일이 포함되지 않았는가?
  ```
- **Step 507**: 김건우 님이 수정 커밋을 생성하고 원격에 푸시합니다:
  ```bash
  git add notes/04-open-source.md
  git commit -m "docs: Add self-review checklist to PR template as requested in review"
  git push origin feature/gunwoo-template-guide
  ```
- **Step 508**: **김상교** 님이 PR #8 화면에서 추가된 수정 커밋을 확인하고, 코멘트에 *"피드백이 완벽하게 반영되었습니다! 수고하셨습니다."* 답글을 남긴 뒤 **`Approve`**를 제출합니다.
- **Step 509**: PR #8이 `main`에 성공적으로 머지됩니다. (리뷰 피드백 반영 증빙 완료!)

---

# [제6부] ★ [실전 충돌 2] 비자명한 충돌 (Rename vs Modify) (Step 601 ~ 750)

> **상황**:  
> **조은익** 님은 학습 노트 디렉터리 체계화를 위해 `notes/03-conflict-guide.md`를 `notes/advanced/03-conflict-guide.md`로 폴더 이동(`git mv`)하여 `main`에 먼저 머지합니다.  
> 같은 시점에 **김건우** 님은 기존 경로의 `notes/03-conflict-guide.md` 파일에 "3-Way Merge 원리" 설명을 추가하고 있었습니다.  
> **파일 경로 이동(Rename) vs 구 경로 파일 내용 수정(Modify)**이 충돌하여 Git 머지 엔진에서 고급 **비자명 충돌**이 발생합니다!

```
                    ┌───────────────────────────────────┐
                    │    notes/03-conflict-guide.md     │
                    └─────────────────┬─────────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
[조은익: feature/eunik-reorganize]              [김건우: feature/gunwoo-conflict-patch]
git mv notes/03-... notes/advanced/03-...       기존 notes/03-conflict-guide.md 내용 수정
(PR #9 -> main에 먼저 머지 완료!)               (PR #10 생성 시 비자명 충돌 발생!)
```

### 6-1. 두 팀원의 동시 분기
- **Step 601**: 조은익 님 이슈 발행: `[refactor] 충돌 가이드 노트를 advanced 하위 디렉터리로 이동` ➔ **이슈 #9**.
- **Step 602**: 김건우 님 이슈 발행: `[docs] 충돌 가이드 노트에 3-Way Merge 개념 보강` ➔ **이슈 #10**.
- **Step 603**: 두 팀원 모두 최신 `main`에서 브랜치를 분기합니다:
  ```bash
  # 조은익:
  git checkout main && git pull origin main
  git checkout -b feature/eunik-reorganize

  # 김건우:
  git checkout main && git pull origin main
  git checkout -b feature/gunwoo-conflict-patch
  ```

### 6-2. 조은익: 파일 이동(Rename) 및 main 선반영
- **Step 604**: 조은익 님은 로컬 터미널에서 `notes/advanced/` 폴더를 만들고 파일을 Git 명령어로 이동합니다:
  ```bash
  mkdir notes/advanced
  git mv notes/03-conflict-guide.md notes/advanced/03-conflict-guide.md
  ```
- **Step 605**: 커밋 및 푸시 후 PR #9 생성 (`Closes #9`):
  ```bash
  git add notes/advanced/03-conflict-guide.md
  git commit -m "refactor: Relocate conflict guide to notes/advanced/ directory"
  git push -u origin feature/eunik-reorganize
  ```
- **Step 606**: **김상교** 님이 확인 후 `Approve` ➔ **PR #9가 `main`에 먼저 머지 완료!**

### 6-3. 김건우: 기존 파일 수정(Modify)
- **Step 607**: 김건우 님은 조은익 님이 파일을 이동한 사실을 모른 채, 본인의 구 경로 `notes/03-conflict-guide.md`에 내용을 추가합니다:
  ```markdown
  ## 3. 3-Way Merge 원리
  - Git은 공통 조상 커밋(Base), 내 브랜치 커밋(Ours), 병합할 브랜치 커밋(Theirs) 3가지를 비교하여 자동으로 합칩니다.
  ```
- **Step 608**: 커밋 및 푸시 후 PR #10 생성 (`Closes #10`):
  ```bash
  git add notes/03-conflict-guide.md
  git commit -m "docs: Add 3-Way Merge principles to conflict guide"
  git push -u origin feature/gunwoo-conflict-patch
  ```

### 6-4. 김건우: 비자명 충돌 직면 및 해결 절차
- **Step 609**: GitHub PR #10 화면에 충돌 경고 발생!
- **Step 610**: 김건우 님은 로컬 터미널에서 최신 `main`을 병합합니다:
  ```bash
  git fetch origin
  git merge origin/main
  ```
- **Step 611**: **터미널에 실제 출력되는 비자명 충돌 문구 확인**:
  ```text
  CONFLICT (rename/modify): notes/03-conflict-guide.md renamed to notes/advanced/03-conflict-guide.md in origin/main. Version HEAD of notes/03-conflict-guide.md left in tree.
  Automatic merge failed; fix conflicts and then commit the result.
  ```
- **Step 612**: `git status`로 상태를 확인합니다:
  ```text
  Unmerged paths:
    (use "git add/rm <file>..." as appropriate to mark resolution)
      both modified:   notes/03-conflict-guide.md
      added by them:   notes/advanced/03-conflict-guide.md
  ```
- **Step 613**: **해결 전략 실행**:
  1. 상대방이 이동시킨 새 위치 `notes/advanced/03-conflict-guide.md`를 최종 경로로 채택합니다.
  2. 내가 수정한 `## 3. 3-Way Merge 원리` 내용을 새 파일 `notes/advanced/03-conflict-guide.md`의 하단에 복사하여 반영합니다.
  3. 구 경로의 `notes/03-conflict-guide.md`는 더 이상 필요 없으므로 Git에서 삭제합니다:
     ```bash
     git rm notes/03-conflict-guide.md
     ```
- **Step 614**: 새 위치 파일을 스테이징하고 해결 머지 커밋을 작성합니다:
  ```bash
  git add notes/advanced/03-conflict-guide.md
  git commit -m "fix: Resolve rename/modify conflict by applying 3-Way Merge content into relocated path"
  ```
- **Step 615**: 원격 브랜치로 푸시합니다:
  ```bash
  git push origin feature/gunwoo-conflict-patch
  ```
- **Step 616**: GitHub PR #10 화면에서 충돌이 자동으로 해소되었음을 확인하고, **조은익 승인** 후 `main`에 머지합니다.

### 6-5. 김건우: 충돌 2 문서화
- **Step 617**: 김건우 님이 `docs/conflict-resolution.md`에 [충돌 2 - 비자명 충돌] 내용을 추가 기록합니다:
  ```markdown
  ## 2. 충돌 2: 비자명한 충돌 (Rename vs Modify)
  - **참여자**: 조은익, 김건우
  - **대상 파일**: `notes/03-conflict-guide.md` ➔ `notes/advanced/03-conflict-guide.md`
  - **발생 원인**: 한쪽은 파일 경로 이동(Rename), 다른 쪽은 구 경로 파일의 내용 수정(Modify)을 동시에 진행하여 3-Way 머지 시 `CONFLICT (rename/modify)` 발생
  - **해결 전략**: 이동된 새 경로(`notes/advanced/...`)를 최종 경로로 채택하고, 수정된 3-Way Merge 설명을 해당 파일에 이식한 뒤 구 파일은 `git rm`으로 정리
  - **해결 커밋**: PR #10 머지 커밋
  ```

---

# [제7부] Git 4대 트러블슈팅 4인 전원 분담 실습 (Step 751 ~ 880)

> **목표**: 4명의 팀원이 각각 1개씩 Git 핵심 복구 명령어를 직접 실습하고, 터미널 로그를 `docs/troubleshooting-log.md`에 기록하여 PR #11로 머지합니다.

### 7-1. 김상교: `git commit --amend` (커밋 메시지 오타 정정)
- **Step 751**: 작업 브랜치에서 실수로 오타 커밋 작성:
  ```bash
  git commit -m "docs: Ad git basic summar note"
  ```
- **Step 752**: 직전 커밋 메시지를 즉시 수정:
  ```bash
  git commit --amend -m "docs: Add git basics summary note"
  ```
- **Step 753**: `git log -1`로 커밋 해시가 갱신되고 메시지가 깔끔하게 수정된 터미널 로그를 캡처합니다.

### 7-2. 장양환: `git reset --soft` (실수 커밋 무손실 취소)
- **Step 754**: 불필요한 임시 디버깅 파일(`temp_draft.txt`)을 실수로 포함하여 커밋:
  ```bash
  git add .
  git commit -m "docs: Add study note with accidental temp_draft.txt"
  ```
- **Step 755**: 작업한 코드는 Staging Area에 그대로 남겨두고 커밋만 안전하게 취소:
  ```bash
  git reset --soft HEAD~1
  ```
- **Step 756**: `git status`로 변경 파일이 보존되어 있음을 확인하고, `rm temp_draft.txt`로 임시 파일만 제외한 뒤 정상 커밋합니다.

### 7-3. 조은익: `git revert` (원격에 공유된 잘못된 커밋 안전 취소)
- **Step 757**: 이미 원격 `main`에 머지된 커밋에 잘못된 Git 명령어 설명이 포함된 상황을 가정합니다.
- **Step 758**: 협업 중인 동료들의 히스토리를 망치지 않기 위해 강제 푸시(`push -f`) 대신 반대 변경을 적용하는 역커밋 생성:
  ```bash
  git log --oneline -n 3
  # 취소할 커밋 해시 확인 (예: a1b2c3d)
  git revert a1b2c3d --no-edit
  ```
- **Step 759**: `Revert "..."` 역커밋이 히스토리에 안전하게 추가된 과정을 캡처합니다.

### 7-4. 김건우: `git stash` & `stash pop` (작업 중 긴급 브랜치 이동)
- **Step 760**: `notes/04-open-source.md`를 한창 작성하던 도중 긴급 문서 점검 요청을 받음.
- **Step 761**: 커밋할 수 없는 미완성 작업 내용을 안전한 임시 스택에 격리 보관:
  ```bash
  git stash save "WIP: open source checklist update"
  ```
- **Step 762**: `git status`로 작업 트리가 깨끗해진 것을 확인하고 다른 브랜치를 확인한 뒤, 다시 복귀하여 보관했던 작업 내용을 꺼내옵니다:
  ```bash
  git stash pop
  ```
- **Step 763**: 작업 내용이 한 줄도 유실되지 않고 원상 복구됨을 확인하고 로그를 캡처합니다.

### 7-5. 장양환: 트러블슈팅 종합 기록부 작성 및 머지 (PR #11)
- **Step 764**: 장양환 님 이슈 발행: `[docs] 4인의 Git 트러블슈팅 실습 로그 작성` ➔ **이슈 #11**.
- **Step 765**: 브랜치 분기: `git checkout -b docs/troubleshooting-log`
- **Step 766**: `docs/troubleshooting-log.md`를 생성하고 4명의 실습 결과를 표와 원본 터미널 로그로 작성합니다:
  ```markdown
  # Git Troubleshooting Practice Log

  | 팀원 | 사용 명령어 | 의도적 실수 상황 | 해결 및 복구 결과 |
  |:---:|:---|:---|:---|
  | **김상교** | `git commit --amend` | 커밋 메시지 오타 발생 | 최신 커밋 해시 재생성 및 메시지 수정 확인 |
  | **장양환** | `git reset --soft` | 불필요한 임시 파일 포함 커밋 | 작업 트리 보존 상태로 커밋 취소 후 파일 제외 커밋 |
  | **조은익** | `git revert` | 머지된 잘못된 노트 커밋 롤백 | 히스토리 훼손 없이 역(Revert) 커밋 안전 머지 |
  | **김건우** | `git stash` & `pop` | 작업 중 긴급 브랜치 전환 | 미완성 변경사항 임시 격리 보관 후 무손실 복구 |
  ```
- **Step 767**: 커밋 후 원격 푸시 및 PR #11 생성 (`Closes #11`).
- **Step 768**: **조은익** 님이 리뷰 후 `Approve` ➔ PR #11 머지 완료!

---

# [제8부] 최종 산출물 제출 인덱스 & 인터뷰 대비 (Step 881 ~ 1000)

### 8-1. 김상교: SUBMISSION.md 작성 및 최종 머지 (PR #12)
- **Step 881**: 김상교 님 이슈 발행: `[docs] 최종 제출 문서 SUBMISSION.md 작성` ➔ **이슈 #12**.
- **Step 882**: 브랜치 분기: `git checkout -b docs/submission-index`
- **Step 883**: 루트 경로에 `SUBMISSION.md`를 작성하여 4명의 기여 내역을 표로 일목요연하게 정리합니다:
  ```markdown
  # Submission Index

  ## 1. 프로젝트 및 저장소 정보
  - **프로젝트명**: Git & GitHub 개발 협업 학습정리노트
  - **저장소 형태**: 개인 저장소 (소유자: 조은익) + Collaborator (김상교, 장양환, 김건우)
  - **저장소 URL**: https://github.com/<조은익_GitHub_ID>/git-study-notes
  - **기본 브랜치**: `main` (Branch Protection 적용)

  ## 2. 팀원별 기여 내역표 (전원 요건 충족)
  | 팀원 | 역할 | 생성한 이슈 | 병합된 PR | 동료 코드 리뷰 참여 내역 |
  |:---:|:---:|:---|:---|:---|
  | **조은익** | 저장소 호스트 / 트러블슈팅 | #3, #7, #9 | PR #3, PR #7 (충돌 1 해결), PR #9 | PR #2, PR #10, PR #11 |
  | **김상교** | 팀장 / 가이드 & 인프라 | #1, #5, #12 | PR #1, PR #5, PR #12 | PR #4, PR #6, PR #8 (Request changes) |
  | **장양환** | 코어 / 협업노트 | #2, #6, #11 | PR #2, PR #6, PR #11 | PR #1, PR #5, PR #7 |
  | **김건우** | 심화노트 / 검증 | #4, #8, #10 | PR #4, PR #8 (리뷰 반영), PR #10 (충돌 2 해결) | PR #3, PR #9, PR #12 |

  ## 3. 핵심 산출물 바로가기
  - [협업 가이드라인 (CONTRIBUTING.md)](docs/CONTRIBUTING.md)
  - [충돌 해결 기록부 (conflict-resolution.md)](docs/conflict-resolution.md)
  - [트러블슈팅 실습 기록부 (troubleshooting-log.md)](docs/troubleshooting-log.md)
  ```
- **Step 884**: 터미널에서 전체 Git 히스토리 로그 텍스트를 추출하여 저장합니다:
  ```bash
  git log --oneline --graph --all > docs/git-history.txt
  ```
- **Step 885**: 커밋 후 원격 푸시 및 PR #12 생성 (`Closes #12`).
- **Step 886**: **김건우** 님이 리뷰 후 `Approve` ➔ PR #12 최종 머지 완료!

---

## 🎓 피어 리뷰 구두 질의응답 5대 기출 스크립트 (외우기만 하면 PASS!)

- **Q1. Organization 대신 조은익 님의 개인 저장소(Collaborator 방식)를 선택한 이유는 무엇인가요?**
  - 👉 *"과제 명세서의 저장소 구성 옵션 중 개인 Public 저장소 + Collaborator 방식을 채택했습니다. 조은익 님의 저장소에 팀원들을 Collaborator(Write 권한)로 등록하여 동등한 협업 권한을 부여하고, `main` 브랜치에 Branch Protection Rule을 설정하여 실무와 동일한 PR 기반 협업 및 직접 푸시 방지 환경을 구축했습니다."*
- **Q2. 비자명한 충돌(Rename vs Modify)은 어떻게 발생했고 어떻게 해결했나요?**
  - 👉 *"조은익 팀원이 `notes/03-conflict-guide.md`를 `notes/advanced/` 폴더 안으로 이동(`git mv`)하여 머지했고, 같은 시점에 김건우 팀원이 구 경로의 파일에 3-Way Merge 내용을 추가하여 `CONFLICT (rename/modify)`가 발생했습니다. 해결 시 이동된 새 경로를 채택하고 추가된 내용을 해당 파일에 합친 뒤 구 파일을 `git rm` 처리하여 해결했습니다."*
- **Q3. 코드 리뷰에서 Request Changes를 어떻게 활용했나요?**
  - 👉 *"PR #8에서 PR 템플릿 체크리스트가 누락되어 김상교 팀원이 `Request changes`로 보완을 요청했습니다. 작업자인 김건우 팀원이 실무형 체크리스트를 보강하는 추가 커밋을 올려 재승인받아 머지했습니다."*
- **Q4. `reset`과 `revert`의 실무적인 사용 차이점은 무엇인가요?**
  - 👉 *"로컬에서만 발생한 개인 실수는 히스토리를 깔끔하게 지우는 `reset --soft`를 사용했고, 이미 원격에 푸시되어 팀원들과 공유된 커밋은 동료들의 저장소가 꼬이지 않도록 역커밋을 생성하는 `revert`로 안전하게 취소했습니다."*
- **Q5. 충돌 마커에서 `HEAD`와 `origin/main`의 의미는 무엇인가요?**
  - 👉 *"`<<<<<<< HEAD`는 현재 내가 머지를 수행 중인 로컬 체크아웃 브랜치의 내용이고, `>>>>>>> origin/main`은 당겨오려는 원격 `main` 브랜치의 최신 내용입니다."*
