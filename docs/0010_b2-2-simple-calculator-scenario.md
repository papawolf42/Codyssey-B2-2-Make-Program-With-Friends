# B2-2 초간단 사칙연산 계산기 1000스텝 마스터 협업 시나리오 (7팀 벤치마크)

> **대상**: Git/GitHub 협업이 완전히 처음인 4인 초보자 팀  
> **기반 벤치마크**: 피어 리뷰 100점 만점을 받은 **7팀 (사칙연산 계산기)** 모델  
> **핵심 원칙**: 복잡한 파이썬 문법(클래스, JSON, CLI 파서)을 전면 배제하고, **3줄짜리 사칙연산 함수**로 과제 평가 기준(브랜치 보호, Issue-PR 연동, 자명/비자명 충돌, 4대 트러블슈팅, 코드리뷰 피드백 반영)을 100% 만족하는 완전 무결 대본.

---

## 👥 팀원 배역 및 역할 분담표

| 역할 | 가상 이름 (표기) | GitHub ID 예시 | 주 담당 업무 | 목표 PR 번호 |
|:---:|:---:|:---:|:---|:---:|
| **팀원 A** | **김철수 (팀장)** | `@leader-chulsoo` | Org/Repo 세팅, 초기 문서(README), `subtract.py`, 트러블슈팅(`amend`), 최종 인덱스 | PR #1, PR #5, PR #12 |
| **팀원 B** | **이영희 (코어)** | `@core-younghee` | `add.py`, [충돌 1] 자명 충돌 유발자, 트러블슈팅(`reset`), 트러블슈팅 문서화 | PR #2, PR #6, PR #11 |
| **팀원 C** | **박민수 (연산)** | `@calc-minsoo` | `multiply.py`, [충돌 1] 자명 충돌 해결자, [충돌 2] 폴더 이동(Rename), 트러블슈팅(`revert`) | PR #3, PR #7, PR #9 |
| **팀원 D** | **최수진 (검증)** | `@qa-sujin` | `divide.py`, 리뷰 피드백 수정 반영(Request Changes), [충돌 2] 비자명 충돌 해결자, 트러블슈팅(`stash`) | PR #4, PR #8, PR #10 |

---

# [제1부] 사전 준비 & GitHub Organization 세팅 (Step 1 ~ 80)

### 1-1. 팀장(팀원 A): GitHub Organization 및 저장소 생성
- **Step 1**: 팀원 A가 웹 브라우저를 열고 [GitHub](https://github.com)에 로그인합니다.
- **Step 2**: 우측 상단 프로필 아이콘 클릭 ➔ **`Your organizations`** 메뉴 선택.
- **Step 3**: 녹색 버튼 **`New organization`** 클릭.
- **Step 4**: 플랜 선택 화면에서 가장 왼쪽 **`Create a free organization`** 클릭.
- **Step 5**: Organization name 입력창에 팀 조직 이름 입력:  
  👉 예시: `codyssey-b2-2-calc-team`
- **Step 6**: Contact email에 본인 이메일 입력, 개인 계정 선택 후 체크박스 동의 ➔ **`Next`** 클릭.
- **Step 7**: 팀원 초대 화면에서 팀원 B, C, D의 GitHub ID를 검색하여 추가하고 **`Complete setup`** 클릭.
- **Step 8**: Organization 메인 페이지에서 상단 **`Settings`** 탭 클릭.
- **Step 9**: 좌측 메뉴 **`Member privileges`** 클릭 ➔ Base permissions 항목을 **`Write`** 또는 **`Admin`**으로 설정 (팀원 전원 자유로운 브랜치 생성 및 PR 권한 부여).
- **Step 10**: 조직 상단 탭 **`Repositories`** 클릭 ➔ 녹색 **`New repository`** 클릭.
- **Step 11**: Repository name에 `simple-calculator` 입력.
- **Step 12**: 공개 여부를 **`Public`**으로 선택.
- **Step 13**: `Add a README file` 체크박스는 **반드시 체크 해제** (완전 빈 저장소로 시작).
- **Step 14**: 녹색 버튼 **`Create repository`** 클릭.

### 1-2. 팀원 B, C, D: 초대 수락
- **Step 15**: 팀원 B, C, D는 각자의 이메일함 또는 GitHub 알림창(`github.com/orgs/codyssey-b2-2-calc-team/invitation`)에 접속.
- **Step 16**: 파란색 **`Join codyssey-b2-2-calc-team`** 버튼 클릭하여 멤버 합류 완료.

### 1-3. 팀장(팀원 A): 첫 커밋 및 Branch Protection 활성화
- **Step 17**: 팀원 A가 로컬 터미널(VS Code 또는 Git Bash)을 열고 작업 폴더로 이동:
  ```bash
  mkdir simple-calculator
  cd simple-calculator
  git init
  ```
- **Step 18**: 첫 파일 생성:
  ```bash
  echo "# Simple Calculator" > README.md
  git add README.md
  git commit -m "init: Initial commit with basic README"
  ```
- **Step 19**: 원격 저장소 연결 후 `main` 브랜치 최초 푸시:
  ```bash
  git branch -M main
  git remote add origin https://github.com/codyssey-b2-2-calc-team/simple-calculator.git
  git push -u origin main
  ```
- **Step 20**: GitHub 저장소 웹 페이지(`Settings` ➔ 좌측 `Branches`)로 이동.
- **Step 21**: **`Add branch protection rule`** (또는 `Add rule`) 클릭.
- **Step 22**: Branch name pattern에 `main` 입력.
- **Step 23**: **`Require a pull request before merging`** 체크.
- **Step 24**: **`Require approvals`** 체크하고 숫자 `1` 확인.
- **Step 25**: 하단 **`Do not allow bypassing the above settings`** 체크 (관리자도 직접 푸시 불가).
- **Step 26**: 녹색 버튼 **`Create`** (또는 `Save changes`) 클릭하여 보호 규칙 저장.
- **Step 27**: 직접 푸시 차단 검증 (팀원 A 로컬 터미널):
  ```bash
  echo "test direct push" >> README.md
  git commit -am "test: Direct push to main"
  git push origin main
  ```
- **Step 28**: 터미널에 `remote: error: GH006: Protected branch hook declined` 에러가 뜨며 차단되는 것을 확인!
- **Step 29**: 테스트 변경사항 롤백:
  ```bash
  git reset --hard HEAD~1
  ```

### 1-4. 팀원 B, C, D: 저장소 로컬 클론
- **Step 30**: 팀원 B 로컬 터미널:
  ```bash
  git clone https://github.com/codyssey-b2-2-calc-team/simple-calculator.git
  cd simple-calculator
  ```
- **Step 31**: 팀원 C 로컬 터미널:
  ```bash
  git clone https://github.com/codyssey-b2-2-calc-team/simple-calculator.git
  cd simple-calculator
  ```
- **Step 32**: 팀원 D 로컬 터미널:
  ```bash
  git clone https://github.com/codyssey-b2-2-calc-team/simple-calculator.git
  cd simple-calculator
  ```

---

# [제2부] 프로젝트 기본 규칙 및 문서 구축 (Step 81 ~ 180)

### 2-1. 팀원 A: Issue #1 발행 및 협업 가이드 작성 (PR #1)
- **Step 81**: GitHub 저장소의 `Issues` 탭 ➔ **`New issue`** 클릭.
- **Step 82**: 제목: `[docs] 협업 규칙 CONTRIBUTING.md 및 프로젝트 설명 작성` 입력.
- **Step 83**: 내용:
  ```markdown
  ## 작업 목적
  - 팀원들이 준수해야 할 브랜치 전략(GitHub Flow) 및 커밋 컨벤션 가이드 문서 작성
  ## 세부 작업
  - docs/CONTRIBUTING.md 생성
  - README.md 프로젝트 개요 보강
  ```
- **Step 84**: 우측 녹색 **`Submit new issue`** 클릭 ➔ **이슈 #1** 발행 확인.
- **Step 85**: 팀원 A 로컬 터미널에서 기능 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b docs/contributing-guide
  ```
- **Step 86**: `docs/` 폴더를 생성하고 `docs/CONTRIBUTING.md` 작성:
  ```markdown
  # 협업 가이드라인 (CONTRIBUTING)

  ## 1. 브랜치 전략 (GitHub Flow)
  - `main`: 배포 가능한 안정 상태를 유지하는 보호 브랜치 (직접 push 절대 금지)
  - `feature/<이름>-<기능>`: 기능 개발 브랜치 (예: `feature/b-add`)
  - `docs/<이름>-<문서>`: 문서 작성 브랜치

  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `refactor`: 코드 리팩터링

  ## 3. PR 및 리뷰 규칙
  - 모든 PR 본문에는 `Closes #이슈번호`를 반드시 명시합니다.
  - 최소 1명 이상의 동료 리뷰 승인(Approve)을 받아야 머지할 수 있습니다.
  ```
- **Step 87**: 커밋 및 원격 푸시:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add CONTRIBUTING.md with GitHub Flow and commit conventions"
  git push -u origin docs/contributing-guide
  ```
- **Step 88**: GitHub 저장소로 이동하여 상단에 뜬 **`Compare & pull request`** 클릭.
- **Step 89**: PR 제목: `docs: Add CONTRIBUTING guide (Closes #1)`
- **Step 90**: PR 본문:
  ```markdown
  ## 작업 내용
  - 팀 협업을 위한 브랜치 명명 규칙 및 커밋 컨벤션을 명시했습니다.

  Closes #1
  ```
- **Step 91**: 우측 `Reviewers`에 **팀원 B (`@core-younghee`)**를 지정하고 **`Create pull request`** 클릭 ➔ **PR #1** 생성.

### 2-2. 팀원 B: 코드 리뷰 및 머지
- **Step 92**: 팀원 B가 GitHub 알림을 확인하고 PR #1 페이지로 이동.
- **Step 93**: 상단 **`Files changed`** 탭 클릭하여 작성된 문서 확인.
- **Step 94**: 우측 상단 녹색 버튼 **`Review changes`** 클릭.
- **Step 95**: 코멘트에 *"규칙이 명확하여 초보자도 쉽게 따라갈 수 있을 것 같습니다. 승인합니다!"* 입력.
- **Step 96**: **`Approve`** 라디오 버튼 선택 후 **`Submit review`** 클릭.
- **Step 97**: PR 메인 화면으로 돌아와 녹색 버튼 **`Merge pull request`** ➔ **`Confirm merge`** 클릭.
- **Step 98**: 보라색 `Merged` 상태 확인 및 이슈 #1이 자동으로 `Closed` 되었는지 확인!

---

# [제3부] 4인 4색 사칙연산 기본 기능 개발 (Step 181 ~ 380)

> **원칙**: 팀원 각자가 덧셈(`add`), 곱셈(`multiply`), 나눗셈(`divide`), 뺄셈(`subtract`) 모듈을 각자의 브랜치에서 작성하고 순서대로 PR 및 상호 리뷰를 진행합니다.

### 3-1. 팀원 B: 덧셈(Add) 모듈 개발 (PR #2)
- **Step 181**: 팀원 B가 이슈 발행: `[feat] 두 수의 덧셈을 계산하는 add 모듈 구현` ➔ **이슈 #2**.
- **Step 182**: 로컬 터미널에서 브랜치 생성:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/b-add
  ```
- **Step 183**: `src/` 폴더를 생성하고 `src/add.py` 작성:
  ```python
  def add(a: float, b: float) -> float:
      """두 수의 합을 반환합니다."""
      return a + b
  ```
- **Step 184**: 커밋 및 푸시:
  ```bash
  git add src/add.py
  git commit -m "feat: Implement add function"
  git push -u origin feature/b-add
  ```
- **Step 185**: GitHub에서 PR #2 생성 (`Closes #2`), Reviewer로 **팀원 C** 지정.
- **Step 186**: **팀원 C**가 `Files changed` 확인 후 `Approve` ➔ 팀원 B가 `Merge pull request` 클릭하여 머지 완료.

### 3-2. 팀원 C: 곱셈(Multiply) 모듈 개발 (PR #3)
- **Step 187**: 팀원 C가 이슈 발행: `[feat] 두 수의 곱을 계산하는 multiply 모듈 구현` ➔ **이슈 #3**.
- **Step 188**: 로컬 터미널에서 브랜치 생성:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/c-multiply
  ```
- **Step 189**: `src/multiply.py` 작성:
  ```python
  def multiply(a: float, b: float) -> float:
      """두 수의 곱을 반환합니다."""
      return a * b
  ```
- **Step 190**: 커밋 및 푸시:
  ```bash
  git add src/multiply.py
  git commit -m "feat: Implement multiply function"
  git push -u origin feature/c-multiply
  ```
- **Step 191**: GitHub에서 PR #3 생성 (`Closes #3`), Reviewer로 **팀원 D** 지정.
- **Step 192**: **팀원 D**가 `Approve` ➔ 팀원 C가 `Merge pull request` 클릭하여 머지 완료.

### 3-3. 팀원 D: 나눗셈(Divide) 기본 모듈 개발 (PR #4)
- **Step 193**: 팀원 D가 이슈 발행: `[feat] 두 수의 나눗셈을 계산하는 divide 모듈 구현` ➔ **이슈 #4**.
- **Step 194**: 로컬 터미널에서 브랜치 생성:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/d-divide
  ```
- **Step 195**: `src/divide.py` 작성:
  ```python
  def divide(a: float, b: float) -> float:
      """두 수의 나눗셈 결과를 반환합니다."""
      return a / b
  ```
- **Step 196**: 커밋 및 푸시:
  ```bash
  git add src/divide.py
  git commit -m "feat: Implement basic divide function"
  git push -u origin feature/d-divide
  ```
- **Step 197**: GitHub에서 PR #4 생성 (`Closes #4`), Reviewer로 **팀원 A** 지정.
- **Step 198**: **팀원 A**가 `Approve` ➔ 팀원 D가 `Merge pull request` 클릭하여 머지 완료.

### 3-4. 팀원 A: 뺄셈(Subtract) 기본 모듈 개발 (PR #5)
- **Step 199**: 팀원 A가 이슈 발행: `[feat] 두 수의 뺄셈을 계산하는 subtract 모듈 구현` ➔ **이슈 #5**.
- **Step 200**: 로컬 터미널에서 브랜치 생성:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/a-subtract
  ```
- **Step 201**: `src/subtract.py` 작성 (※ 추후 비자명 충돌의 핵심 대상 파일이 됩니다):
  ```python
  def subtract(a: float, b: float) -> float:
      """두 수의 차를 반환합니다."""
      return a - b
  ```
- **Step 202**: 커밋 및 푸시:
  ```bash
  git add src/subtract.py
  git commit -m "feat: Implement subtract function"
  git push -u origin feature/a-subtract
  ```
- **Step 203**: GitHub에서 PR #5 생성 (`Closes #5`), Reviewer로 **팀원 B** 지정.
- **Step 204**: **팀원 B**가 `Approve` ➔ 팀원 A가 `Merge pull request` 클릭하여 머지 완료.

---

# [제4부] ★ [실전 충돌 1] 자명한 충돌 (Hunk 충돌) (Step 381 ~ 500)

> **상황**: 문서(`docs/CONTRIBUTING.md`)의 동일한 라인에 팀원 B와 팀원 C가 서로 다른 커밋 메시지 예시 항목을 동시에 추가하여 일반적인 텍스트 라인 충돌(Hunk 충돌)을 유발합니다.

```
                    ┌───────────────────────────────┐
                    │      docs/CONTRIBUTING.md     │
                    └───────────────┬───────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
[팀원 B: docs/b-commit-rule]                    [팀원 C: docs/c-commit-rule]
4번째 줄: - test: 테스트 코드 작성 추가           4번째 줄: - style: 코드 포맷팅 변경 추가
(PR #6 -> main에 먼저 머지됨!)                   (PR #7 생성 시 CONFLICT 발생!)
```

### 4-1. 두 팀원의 동시 분기
- **Step 381**: 팀원 B 이슈 발행: `[docs] 커밋 컨벤션에 test 태그 규칙 추가` ➔ **이슈 #6**.
- **Step 382**: 팀원 C 이슈 발행: `[docs] 커밋 컨벤션에 style 태그 규칙 추가` ➔ **이슈 #7**.
- **Step 383**: 팀원 B, C 모두 동일한 최신 `main`에서 브랜치를 분기합니다:
  ```bash
  # 팀원 B:
  git checkout main && git pull origin main
  git checkout -b docs/b-commit-rule

  # 팀원 C:
  git checkout main && git pull origin main
  git checkout -b docs/c-commit-rule
  ```

### 4-2. 팀원 B의 수정 및 main 선반영
- **Step 384**: 팀원 B가 `docs/CONTRIBUTING.md`의 `## 2. 커밋 메시지 컨벤션` 아래 마지막 줄에 `- test: 단위 테스트 코드 추가`를 추가합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `refactor`: 코드 리팩터링
  - `test`: 단위 테스트 코드 추가
  ```
- **Step 385**: 팀원 B 커밋, 푸시 후 PR #6 생성 (`Closes #6`):
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add test tag rule to commit conventions"
  git push -u origin docs/b-commit-rule
  ```
- **Step 386**: **팀원 A**가 확인 후 `Approve` ➔ **PR #6이 `main`에 먼저 머지 완료!**

### 4-3. 팀원 C의 수정 및 충돌 마주하기
- **Step 387**: 팀원 C는 B가 머지한 사실을 모른 채, 본인의 로컬 `docs/c-commit-rule` 브랜치에서 **B가 추가했던 동일한 위치**에 `- style: 코드 포맷팅 변경`을 추가합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `refactor`: 코드 리팩터링
  - `style`: 코드 포맷팅 및 세미콜론 수정
  ```
- **Step 388**: 팀원 C 커밋 후 푸시:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add style tag rule to commit conventions"
  git push -u origin docs/c-commit-rule
  ```
- **Step 389**: 팀원 C가 GitHub에서 PR #7을 생성 (`Closes #7`).
- **Step 390**: **GitHub PR 화면에 회색 경고 발생!**
  > **`This branch has conflicts that must be resolved`**  
  > `Conflicting files: docs/CONTRIBUTING.md`

### 4-4. 팀원 C의 로컬 충돌 해결 절차
- **Step 391**: 팀원 C는 GitHub 웹에서 풀지 않고, 원칙대로 **로컬 터미널**에서 최신 `main`을 가져와 병합합니다:
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
- **Step 393**: 에디터(VS Code)로 `docs/CONTRIBUTING.md`를 열어 **충돌 마커**를 확인합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `refactor`: 코드 리팩터링
  <<<<<<< HEAD
  - `style`: 코드 포맷팅 및 세미콜론 수정
  =======
  - `test`: 단위 테스트 코드 추가
  >>>>>>> origin/main
  ```
- **Step 394**: 충돌 마커(`<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main`)를 지우고, **두 항목이 모두 들어가도록 통합**합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 기능 추가
  - `fix`: 버그 수정
  - `docs`: 문서 수정
  - `refactor`: 코드 리팩터링
  - `style`: 코드 포맷팅 및 세미콜론 수정
  - `test`: 단위 테스트 코드 추가
  ```
- **Step 395**: 해결된 파일을 스테이징하고 머지 커밋을 작성합니다:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "fix: Resolve conflict by including both style and test commit conventions"
  ```
- **Step 396**: 원격 브랜치로 푸시합니다:
  ```bash
  git push origin docs/c-commit-rule
  ```
- **Step 397**: GitHub PR #7 화면을 새로고침하여 녹색 **`This branch has no conflicts with the base branch`**로 변경된 것을 확인!
- **Step 398**: **팀원 B**가 `Approve` ➔ PR #7 머지 완료.

### 4-5. 충돌 1 문서화 (팀원 C 진행)
- **Step 399**: 팀원 C가 `docs/conflict-resolution.md` 파일을 생성하고 충돌 1 내용을 작성하여 커밋 및 머지합니다:
  ```markdown
  # Merge Conflict Resolution Log

  ## 1. 충돌 1: 자명한 충돌 (Hunk 충돌)
  - **참여자**: 팀원 B(이영희), 팀원 C(박민수)
  - **대상 파일**: `docs/CONTRIBUTING.md`
  - **발생 원인**: 동일 라인에 커밋 규칙 항목(`test` vs `style`)을 동시 추가
  - **충돌 마커**: `<<<<<<< HEAD` (내 브랜치 style) vs `>>>>>>> origin/main` (원격 main test)
  - **해결 전략**: 두 변경사항을 모두 보존(Union Merge)하여 두 규칙을 순서대로 나열
  - **해결 커밋**: PR #7 머지 커밋
  ```

---

# [제5부] ★ 필수 요건: 코드 리뷰 피드백 반영 (Request Changes) (Step 501 ~ 600)

> **목표**: 리뷰어가 단순 텍스트 승인(`LGTM`)만 남기는 것이 아니라, **코드 라인에 개선을 요구(`Request changes`)하고 작업자가 수정 커밋을 올려 재승인받는 필수 평가 항목**을 완벽하게 수행합니다.

- **Step 501**: 팀원 D가 이슈 발행: `[feat] 나눗셈 0 나누기 예외 처리 보강` ➔ **이슈 #8**.
- **Step 502**: 팀원 D 브랜치 분기: `feature/d-divide-exception`
- **Step 503**: 팀원 D가 `src/divide.py`를 열고, **고의로 예외 처리 없이 단순 출력문만 추가**합니다:
  ```python
  def divide(a: float, b: float) -> float:
      """두 수의 나눗셈 결과를 반환합니다."""
      print(f"Dividing {a} by {b}")
      return a / b
  ```
- **Step 504**: 커밋 및 푸시 후 PR #8 생성 (`Closes #8`):
  ```bash
  git add src/divide.py
  git commit -m "feat: Add logging print to divide function"
  git push -u origin feature/d-divide-exception
  ```
- **Step 505**: **팀원 A가 코드 리뷰를 수행합니다**:
  1. PR #8의 **`Files changed`** 탭 클릭.
  2. `src/divide.py`의 `return a / b` 라인에 마우스를 올리고 파란색 **`+`** 버튼 클릭.
  3. 코멘트 입력:  
     *"b가 0으로 들어올 경우 ZeroDivisionError가 발생하거나 충돌할 수 있습니다. `if b == 0: raise ValueError('0으로 나눌 수 없습니다.')` 예외 처리를 추가해 주실 수 있나요?"*
  4. 우측 상단 녹색 버튼 **`Finish your review`** 클릭.
  5. 라디오 버튼 중 **`Request changes`**를 선택하고 **`Submit review`** 클릭! (빨간색 변경 요청 마크 표시)
- **Step 506**: 팀원 D는 피드백 알림을 확인하고 로컬에서 `src/divide.py` 코드를 수정합니다:
  ```python
  def divide(a: float, b: float) -> float:
      """두 수의 나눗셈 결과를 반환합니다. 0으로 나눌 경우 ValueError를 발생시킵니다."""
      if b == 0:
          raise ValueError("0으로 나눌 수 없습니다.")
      return a / b
  ```
- **Step 507**: 팀원 D가 수정 커밋을 생성하고 다시 원격에 푸시합니다:
  ```bash
  git add src/divide.py
  git commit -m "refactor: Add ZeroDivision zero check with ValueError as requested in review"
  git push origin feature/d-divide-exception
  ```
- **Step 508**: **팀원 A**가 PR #8 화면에서 새로 추가된 수정 커밋을 확인하고, 코멘트에 *"피드백이 완벽히 반영되었습니다! 감사합니다."* 답글을 단 뒤 **`Approve`**를 제출합니다.
- **Step 509**: PR #8이 `main`에 성공적으로 머지됩니다. (리뷰 피드백 반영 증빙 완료!)

---

# [제6부] ★ [실전 충돌 2] 비자명한 충돌 (Rename vs Modify) (Step 601 ~ 750)

> **상황 (7팀 벤치마크)**:  
> 팀원 C는 폴더 구조 정리를 위해 `src/subtract.py`를 `src/calculator/subtract.py`로 폴더 이동(`git mv`)하여 `main`에 먼저 머지합니다.  
> 같은 시점에 팀원 D는 기존 `src/subtract.py`의 Docstring과 주석을 개선하고 있었습니다.  
> 한쪽은 **파일 경로 이동(Rename)**, 다른 쪽은 **기존 파일 내용 수정(Modify)**이 겹치면서 Git의 3-Way 머지 엔진에서 고급 **비자명 충돌(Rename/Modify Conflict)**이 발생합니다!

```
                    ┌───────────────────────────────┐
                    │        src/subtract.py        │
                    └───────────────┬───────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
[팀원 C: feature/c-reorganize]                  [팀원 D: feature/d-subtract-doc]
git mv src/subtract.py src/calculator/subtract.py   기존 src/subtract.py에 Docstring 보강
(PR #9 -> main에 먼저 머지 완료!)                 (PR #10 생성 시 비자명 충돌 발생!)
```

### 6-1. 두 팀원의 동시 분기
- **Step 601**: 팀원 C 이슈 발행: `[refactor] src 모듈들을 calculator 하위 패키지로 이동` ➔ **이슈 #9**.
- **Step 602**: 팀원 D 이슈 발행: `[docs] subtract 모듈 함수 설명 상세화` ➔ **이슈 #10**.
- **Step 603**: 두 팀원 모두 최신 `main`에서 브랜치를 분기합니다:
  ```bash
  # 팀원 C:
  git checkout main && git pull origin main
  git checkout -b feature/c-reorganize

  # 팀원 D:
  git checkout main && git pull origin main
  git checkout -b feature/d-subtract-doc
  ```

### 6-2. 팀원 C의 파일 이동(Rename) 및 main 선반영
- **Step 604**: 팀원 C는 로컬 터미널에서 `src/calculator/` 폴더를 만들고 `src/subtract.py`를 Git 명령어로 이동시킵니다:
  ```bash
  mkdir src/calculator
  git mv src/subtract.py src/calculator/subtract.py
  ```
- **Step 605**: 팀원 C 커밋 및 푸시 후 PR #9 생성 (`Closes #9`):
  ```bash
  git add src/calculator/subtract.py
  git commit -m "refactor: Move subtract.py into src/calculator package"
  git push -u origin feature/c-reorganize
  ```
- **Step 606**: **팀원 A**가 확인 후 `Approve` ➔ **PR #9가 `main`에 먼저 머지 완료!**

### 6-3. 팀원 D의 기존 파일 수정(Modify)
- **Step 607**: 팀원 D는 C가 파일을 이동한 사실을 모른 채, 기존 경로의 `src/subtract.py` 파일을 열고 설명을 수정합니다:
  ```python
  def subtract(a: float, b: float) -> float:
      """두 수(a, b)의 뺄셈(a - b) 결과를 반환합니다. (음수 결과 가능)"""
      return a - b
  ```
- **Step 608**: 팀원 D 커밋 및 푸시 후 PR #10 생성 (`Closes #10`):
  ```bash
  git add src/subtract.py
  git commit -m "docs: Improve docstring explanation in subtract.py"
  git push -u origin feature/d-subtract-doc
  ```

### 6-4. 팀원 D의 비자명 충돌 직면 및 해결 절차
- **Step 609**: PR #10 화면에 충돌 경고가 뜹니다!
- **Step 610**: 팀원 D는 로컬 터미널에서 최신 `main`을 병합합니다:
  ```bash
  git fetch origin
  git merge origin/main
  ```
- **Step 611**: **터미널에 실제 출력되는 비자명 충돌 문구 확인**:
  ```text
  CONFLICT (rename/modify): src/subtract.py renamed to src/calculator/subtract.py in origin/main. Version HEAD of src/subtract.py left in tree.
  Automatic merge failed; fix conflicts and then commit the result.
  ```
- **Step 612**: `git status`를 입력하여 상태를 확인합니다:
  ```text
  Unmerged paths:
    (use "git add/rm <file>..." as appropriate to mark resolution)
      both modified:   src/subtract.py
      added by them:   src/calculator/subtract.py
  ```
  *(상대방이 파일을 옮긴 새 위치 `src/calculator/subtract.py`와 내가 수정한 구 위치 `src/subtract.py`가 동시에 존재하는 전형적인 구조 충돌!)*
- **Step 613**: **해결 전략 실행**:
  1. 상대방이 이동시킨 새 파일 위치 `src/calculator/subtract.py`를 최종 경로로 채택합니다.
  2. 내가 수정한 상세 Docstring 내용을 새 파일 `src/calculator/subtract.py`에 적용합니다:
     ```python
     def subtract(a: float, b: float) -> float:
         """두 수(a, b)의 뺄셈(a - b) 결과를 반환합니다. (음수 결과 가능)"""
         return a - b
     ```
  3. 구 위치의 `src/subtract.py`는 더 이상 필요 없으므로 Git에서 삭제합니다:
     ```bash
     git rm src/subtract.py
     ```
- **Step 614**: 새 위치 파일을 스테이징하고 해결 머지 커밋을 작성합니다:
  ```bash
  git add src/calculator/subtract.py
  git commit -m "fix: Resolve rename/modify conflict by adopting relocated path and keeping docstring"
  ```
- **Step 615**: 원격 브랜치로 푸시합니다:
  ```bash
  git push origin feature/d-subtract-doc
  ```
- **Step 616**: GitHub PR #10 화면에서 충돌이 자동으로 풀렸음을 확인하고, **팀원 C 승인** 후 `main`에 머지합니다.

### 6-5. 충돌 2 문서화 (팀원 D 진행)
- **Step 617**: 팀원 D가 `docs/conflict-resolution.md`에 [충돌 2 - 비자명 충돌] 내용을 이어서 기록합니다:
  ```markdown
  ## 2. 충돌 2: 비자명한 충돌 (Rename vs Modify)
  - **참여자**: 팀원 C(박민수), 팀원 D(최수진)
  - **대상 파일**: `src/subtract.py` ➔ `src/calculator/subtract.py`
  - **발생 원인**: 한쪽은 파일 경로 이동(Rename), 다른 쪽은 구 경로 파일의 내용 수정(Modify)을 동시에 수행하여 3-Way 병합 시 `CONFLICT (rename/modify)` 발생
  - **해결 전략**: 이동된 새 경로(`src/calculator/subtract.py`)를 최종 경로로 채택하고, 수정된 함수 주석을 해당 파일에 반영한 뒤 구 파일은 `git rm` 처리
  - **해결 커밋**: PR #10 머지 커밋
  ```

---

# [제7부] Git 4대 트러블슈팅 4인 전원 분담 실습 (Step 751 ~ 880)

> **목표**: 4명의 팀원이 각각 1개씩 Git 핵심 복구 명령어를 직접 실습하고, 터미널 로그를 `docs/troubleshooting-log.md`에 기록하여 PR #11로 머지합니다.

### 7-1. 팀원 A: `git commit --amend` (커밋 오타 수정)
- **Step 751**: 작업 브랜치에서 실수로 오타 커밋 발생:
  ```bash
  git commit -m "feat: Ad subtrct functin"
  ```
- **Step 752**: `--amend`로 직전 커밋 메시지 즉시 정정:
  ```bash
  git commit --amend -m "feat: Add subtract function"
  ```
- **Step 753**: `git log -1`로 커밋 해시가 갱신되고 메시지가 깔끔하게 고쳐진 터미널 로그를 캡처합니다.

### 7-2. 팀원 B: `git reset --soft` (실수 커밋 안전 취소)
- **Step 754**: 불필요한 임시 메모 파일(`memo.tmp`)을 실수로 포함하여 커밋:
  ```bash
  git add .
  git commit -m "feat: Add calculator note with accidental memo.tmp"
  ```
- **Step 755**: 작업 내용은 하나도 날리지 않고 직전 커밋만 안전하게 취소:
  ```bash
  git reset --soft HEAD~1
  ```
- **Step 756**: `git status`로 변경사항이 Staging Area에 온전히 남아있음을 확인하고 `rm memo.tmp` 후 정상 커밋합니다.

### 7-3. 팀원 C: `git revert` (원격에 반영된 버그 안전 취소)
- **Step 757**: 이미 원격 `main`에 푸시된 커밋에 치명적인 계산 오류가 발견된 상황을 가정합니다.
- **Step 758**: 협업 중인 동료들의 저장소를 보호하기 위해 강제 푸시(`push -f`) 대신 반대 변경을 담은 안전한 역커밋 생성:
  ```bash
  git log --oneline -n 3
  # 취소할 커밋 해시 확인 (예: a1b2c3d)
  git revert a1b2c3d --no-edit
  ```
- **Step 759**: `Revert "..."` 형태의 역커밋이 히스토리에 정상 기록됨을 확인하고 로그를 캡처합니다.

### 7-4. 팀원 D: `git stash` & `stash pop` (작업 중 긴급 브랜치 이동)
- **Step 760**: `src/divide.py`를 작업하던 중 팀장으로부터 긴급 핫픽스 요청을 받음.
- **Step 761**: 커밋할 수 없는 미완성 코드를 임시 작업 공간에 안전 보관:
  ```bash
  git stash save "WIP: divide benchmark"
  ```
- **Step 762**: `git status`로 작업 트리가 깨끗해진 것을 확인하고 다른 브랜치를 다녀온 뒤, 보관했던 작업을 복원:
  ```bash
  git stash pop
  ```
- **Step 763**: 작업 내용이 무손실로 정확히 복구됨을 확인하고 로그를 캡처합니다.

### 7-5. 팀원 B: 트러블슈팅 종합 기록부 작성 및 머지 (PR #11)
- **Step 764**: 팀원 B 이슈 발행: `[docs] 4인의 Git 트러블슈팅 실습 로그 작성` ➔ **이슈 #11**.
- **Step 765**: 브랜치 분기: `git checkout -b docs/troubleshooting-log`
- **Step 766**: `docs/troubleshooting-log.md`를 생성하고 4명의 실습 결과를 표와 원본 터미널 로그로 정리합니다:
  ```markdown
  # Git Troubleshooting Log

  | 팀원 | 사용 명령어 | 의도적 실수 상황 | 해결 및 복구 결과 |
  |:---:|:---|:---|:---|
  | **팀원 A** | `git commit --amend` | 커밋 메시지 오타 발생 | 최신 커밋 해시 재생성 및 메시지 수정 확인 |
  | **팀원 B** | `git reset --soft` | 불필요한 임시 파일 포함 커밋 | 작업 트리 보존 상태로 커밋 취소 후 파일 제외 커밋 |
  | **팀원 C** | `git revert` | 머지된 버그 커밋 긴급 롤백 | 히스토리 훼손 없이 역(Revert) 커밋 안전 머지 |
  | **팀원 D** | `git stash` & `pop` | 작업 중 긴급 브랜치 이동 | 미완성 변경사항 임시 격리 보관 후 무손실 복구 |
  ```
- **Step 767**: 커밋 후 푸시, PR #11 생성 (`Closes #11`).
- **Step 768**: **팀원 C**가 리뷰 후 `Approve` ➔ PR #11 머지 완료!

---

# [제8부] 최종 산출물 제출 인덱스 & 인터뷰 대비 (Step 881 ~ 1000)

### 8-1. 팀원 A: SUBMISSION.md 작성 및 최종 머지 (PR #12)
- **Step 881**: 팀원 A 이슈 발행: `[docs] 최종 제출 문서 SUBMISSION.md 작성` ➔ **이슈 #12**.
- **Step 882**: 브랜치 분기: `git checkout -b docs/submission-index`
- **Step 883**: 루트 경로에 `SUBMISSION.md`를 작성하여 모든 산출물과 기여 내역을 표로 정리합니다:
  ```markdown
  # Submission Index

  ## 1. 프로젝트 및 저장소 정보
  - **프로젝트명**: Simple Calculator
  - **저장소 URL**: https://github.com/codyssey-b2-2-calc-team/simple-calculator
  - **기본 브랜치**: `main` (Branch Protection 적용)

  ## 2. 팀원별 기여 내역표 (전원 요건 충족)
  | 팀원 | 역할 | 생성한 이슈 | 병합된 PR | 코드 리뷰 참여 내역 |
  |:---:|:---:|:---|:---|:---|
  | **팀원 A (김철수)** | 팀장/인프라 | #1, #5, #12 | PR #1, PR #5, PR #12 | PR #4, PR #6, PR #8(Request changes) |
  | **팀원 B (이영희)** | 코어/연산 | #2, #6, #11 | PR #2, PR #6, PR #11 | PR #1, PR #5, PR #7 |
  | **팀원 C (박민수)** | 연산/충돌1 | #3, #7, #9 | PR #3, PR #7(충돌 1 해결), PR #9 | PR #2, PR #10, PR #11 |
  | **팀원 D (최수진)** | 연산/충돌2 | #4, #8, #10 | PR #4, PR #8(리뷰 반영), PR #10(충돌 2 해결) | PR #3, PR #9, PR #12 |

  ## 3. 필수 검증 문서 링크
  - [협업 가이드 (CONTRIBUTING.md)](docs/CONTRIBUTING.md)
  - [충돌 해결 기록부 (conflict-resolution.md)](docs/conflict-resolution.md)
  - [트러블슈팅 실습 기록부 (troubleshooting-log.md)](docs/troubleshooting-log.md)
  ```
- **Step 884**: 터미널에서 전체 Git 히스토리 텍스트를 추출하여 저장합니다:
  ```bash
  git log --oneline --graph --all > docs/git-history.txt
  ```
- **Step 885**: 커밋 후 푸시, PR #12 생성 (`Closes #12`).
- **Step 886**: **팀원 D**가 리뷰 후 `Approve` ➔ PR #12 최종 머지 완료!

---

## 🎓 피어 리뷰 구두 질의응답 5대 기출 스크립트 (외우기만 하면 PASS!)

- **Q1. Organization을 생성한 이유는 무엇인가요?**
  - 👉 *"실무와 동일하게 전원이 동등한 팀 권한을 갖고 조직 단위의 브랜치 보호 규칙(Branch Protection Rule)을 적용하기 위해 생성했습니다."*
- **Q2. 비자명한 충돌(Rename vs Modify)은 어떻게 발생했고 어떻게 해결했나요?**
  - 👉 *"한 팀원이 `subtract.py`를 `src/calculator/` 폴더 안으로 이동(`git mv`)하고, 다른 팀원이 기존 경로의 `subtract.py` 주석을 수정하여 `CONFLICT (rename/modify)`가 발생했습니다. 해결 시 이동된 새 경로를 채택하고 수정된 주석을 합친 뒤 구 파일을 `git rm`하여 해결했습니다."*
- **Q3. 코드 리뷰에서 Request Changes를 사용해 본 경험이 있나요?**
  - 👉 *"PR #8에서 나눗셈 0 나누기 예외 처리가 누락되어 팀원 A가 `Request changes`로 보완을 요청했고, 작업자 D가 `ValueError` 예외 처리를 추가 커밋으로 반영한 뒤 재승인받아 머지했습니다."*
- **Q4. `reset`과 `revert`의 결정적 차이는 무엇인가요?**
  - 👉 *"로컬에서만 발생한 개인 실수는 히스토리를 깔끔하게 지우는 `reset --soft`를 사용했고, 이미 원격에 푸시되어 동료들과 공유된 커밋은 동료들의 저장소가 꼬이지 않도록 역커밋을 생성하는 `revert`로 안전하게 취소했습니다."*
- **Q5. 충돌 마커에서 `HEAD`와 `origin/main`의 의미는 무엇인가요?**
  - 👉 *"`<<<<<<< HEAD`는 현재 내가 작업 중인 로컬 브랜치의 내용이고, `>>>>>>> origin/main`은 당겨오려는 원격 `main` 브랜치의 최신 내용입니다."*
