# B2-2 학습정리노트 1000스텝 마스터 협업 시나리오 (mission_02_02 완전 무결판)

> **팀원 (4명)**: **조은익(저장소 호스트), 김상교(팀장), 장양환, 김건우**  
> **저장소 URL**: **[`https://github.com/nick19850906-debug/mission_02_02`](https://github.com/nick19850906-debug/mission_02_02)**  
> **저장소 형태**: **조은익 님의 개인 Public GitHub Repository + 팀원 3명 Collaborator 초대 방식**  
> **프로젝트 주제**: **Git & GitHub 개발 협업 학습정리노트 (Markdown 기반)**  
> **문서 상태**: 과제 수행 시나리오입니다. PR·리뷰 횟수와 산출물은 완료 목표이며, 실제 충족 여부는 최종 제출 시 GitHub 기록으로 확인합니다. 진행 중 아직 생성되지 않은 후반부 산출물은 현재 단계의 미이행으로 판단하지 않습니다.
> **증빙 캡처 가이드**: [`docs/0012_b2-2-screenshot-checklist.md`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/docs/0012_b2-2-screenshot-checklist.md) (필수 4장, 추천 4장, 보너스 2장 실시간 타이밍 체크리스트)

---

## 👥 팀원 배역 및 1:1 완벽 대칭 기여 분담표 (실제 GitHub 번호 반영)

| 팀원 이름 | 배역/역할 | 생성한 Issue (실제 번호) | 생성한 PR (실제 번호) | 코드 리뷰 참여 (리뷰어) | 4대 트러블슈팅 |
|:---:|:---:|:---|:---|:---|:---:|
| **조은익** | **호스트 / 트러블슈팅** | **#5** (충돌노트), **#12** (충돌 1 해결), **#17** (advanced 이동) | **PR #6**, **PR #14**, **PR #19** | PR #4, PR #20, PR #22 | `git revert` |
| **김상교** | **팀장 / 가이드 & 인프라** | **#1** (가이드), **#9** (기초노트), **#23** (최종 제출 인덱스) | **PR #2**, **PR #10**, **PR #24** | PR #8, PR #13, PR #16 (Request changes) | `git commit --amend` |
| **장양환** | **코어 / 협업노트** | **#3** (Flow노트), **#11** (test규칙), **#21** (트러블슈팅 종합) | **PR #4**, **PR #13**, **PR #22** | PR #2, PR #10, PR #14 | `git reset --soft` |
| **김건우** | **심화노트 / 리뷰피드백** | **#7** (협업노트), **#15** (리뷰반영), **#18** (충돌 2 해결) | **PR #8**, **PR #16**, **PR #20** | PR #6, PR #19, PR #24 | `git stash` & `pop` |

> 💡 **기여 목표**: 4인 전원 정확히 **Issue 3개 + PR 3개 생성·병합 + 타인 PR 3회 실질 리뷰**를 달성하여 1:1 완벽 대칭을 이룹니다.

---

## 🚨 [실시간 동기화 완료] GitHub #1 ~ #24 전수 일련번호 및 생성 순서 완벽 정리표

> [!NOTE]
> **GitHub 일련번호 카운터 원리**: Issue와 PR은 생성될 때마다 1부터 카운터를 공유합니다.  
> 현재 저장소는 **#1부터 #14까지 전원 머지/종료**되었으며, 앞으로 진행할 **#15부터 #24까지의 생성 순서와 번호**는 아래와 같이 100% 확정됩니다.

| 순서(ID) | 구분 | 작성자 | 작업 내용 및 제목 | 연결 Issue (Closes #) | 지정 리뷰어 | 상태 |
|:---:|:---:|:---:|:---|:---:|:---:|:---:|
| **#1** | **ISSUE** | 김상교 | `[docs] 협업 규칙 가이드 CONTRIBUTING.md 작성` | - | - | **Closed** |
| **#2** | **PR** | 김상교 | `docs: Add CONTRIBUTING.md guide for team collaboration` | Closes #1 | 장양환 (Approve) | **Merged** |
| **#3** | **ISSUE** | 장양환 | `[feat] GitHub Flow 브랜치 전략 학습노트 작성` | - | - | **Closed** |
| **#4** | **PR** | 장양환 | `feat: Add notes/02-github-flow.md detailing branch lifecycle` | Closes #3 | 조은익 (Approve) | **Merged** |
| **#5** | **ISSUE** | 조은익 | `[feat] Git 충돌 원리와 해결법 학습노트 작성` | - | - | **Closed** |
| **#6** | **PR** | 조은익 | `feat: Add notes/03-conflict-guide.md explaining conflict causes...` | Closes #5 | 김건우 (Approve) | **Merged** |
| **#7** | **ISSUE** | 김건우 | `[feat] 오픈소스 협업 및 PR 문화 학습노트 작성` | - | - | **Closed** |
| **#8** | **PR** | 김건우 | `feat: Add notes/04-open-source.md on open source PR practices` | Closes #7 | 김상교 (Approve) | **Merged** |
| **#9** | **ISSUE** | 김상교 | `[feat] Git 3대 영역과 기본 명령어 학습노트 작성` | - | - | **Closed** |
| **#10** | **PR** | 김상교 | `feat: Add notes/01-git-basics.md explaining git three areas` | Closes #9 | 장양환 (Approve) | **Merged** |
| **#11** | **ISSUE** | 장양환 | `[docs] 커밋 컨벤션에 test 규칙 추가` | - | - | **Closed** |
| **#12** | **ISSUE** | 조은익 | `[docs] 커밋 컨벤션에 test 규칙 추가` | - | - | **Closed** |
| **#13** | **PR** | 장양환 | `docs: Add test tag rule to commit conventions` | Closes #11 | 김상교 (Approve) | **Merged** |
| **#14** | **PR** | 조은익 | `docs: Add style tag rule and resolve merge conflict (충돌 1)` | Closes #12 | 장양환 (Approve) | **Merged** |
| **#15** | **ISSUE** | 김건우 | `[feat] 오픈소스 PR 템플릿 작성 요령 보강` | - | - | **진행 예정 (NEXT)** |
| **#16** | **PR** | 김건우 | `feat: Add PR template guidelines and structure to notes/04` | Closes #15 | 김상교 (Request changes ➔ 반영 ➔ Approve) | **진행 예정** |
| **#17** | **ISSUE** | 조은익 | `[refactor] 충돌 가이드 노트를 advanced 디렉터리로 이동 및 예방 수칙 추가` | - | - | **진행 예정** |
| **#18** | **ISSUE** | 김건우 | `[docs] 충돌 가이드 노트에 3-Way Merge 개념 보강` | - | - | **진행 예정** |
| **#19** | **PR** | 조은익 | `refactor: Relocate conflict guide to advanced dir and add prevention tips` | Closes #17 | 김건우 (Approve & 머지 선반영) | **진행 예정** |
| **#20** | **PR** | 김건우 | `docs: Add 3-Way Merge principles and resolve rename/modify conflict` | Closes #18 | 조은익 (충돌 2 로컬 해결 후 Approve) | **진행 예정** |
| **#21** | **ISSUE** | 장양환 | `[docs] 4인의 Git 트러블슈팅 실습 로그 작성` | - | - | **진행 예정** |
| **#22** | **PR** | 장양환 | `docs: Add troubleshooting-log.md documenting 4 recovery scenarios` | Closes #21 | 조은익 (Approve) | **진행 예정** |
| **#23** | **ISSUE** | 김상교 | `[docs] 최종 제출 문서 SUBMISSION.md 작성 및 README 목차 업데이트` | - | - | **진행 예정** |
| **#24** | **PR** | 김상교 | `docs: Add SUBMISSION.md index and update README table of contents` | Closes #23 | 김건우 (Approve & Final 머지) | **진행 예정** |

---

## 📂 최종 완성될 프로젝트 디렉터리 구조
```
mission_02_02/
├── README.md                      # 프로젝트 소개 및 학습노트 목차(TOC) 필수 포함
├── SUBMISSION.md                  # 최종 평가 제출 인덱스 표 (클릭 가능한 Full PR URL)
├── docs/
│   ├── CONTRIBUTING.md            # 협업 가이드 (GitHub Flow 채택 사유 3줄 필수 포함)
│   ├── conflict-resolution.md     # 충돌 2회(자명/비자명) 해결 기록부 (배운 점 포함)
│   ├── troubleshooting-log.md     # Git 4대 트러블슈팅 실습 기록부 (Why 및 주의점 포함)
│   └── git-history.txt            # 전체 git 커밋 로그 증빙 (UTF-8 인코딩)
└── notes/
    ├── 01-git-basics.md           # [김상교] Git 기초 개념 및 3대 작업 영역
    ├── 02-github-flow.md          # [장양환] GitHub Flow 브랜치 전략 및 생명주기
    ├── advanced/
    │   └── 03-conflict-guide.md   # [조은익, 김건우] 충돌 원리 및 3-Way 병합 (충돌 2로 이동/병합됨)
    └── 04-open-source.md          # [김건우] 오픈소스 협업 및 자가 검증 체크리스트 (리뷰 반영됨)
```

---

# [제1부] 사전 준비 & mission_02_02 저장소 세팅 (Step 1 ~ 80)

### 1-1. 조은익: Collaborator 초대 및 기본 브랜치(main) 정립
- **Step 1**: 조은익 님이 웹 브라우저에서 저장소 [`https://github.com/nick19850906-debug/mission_02_02`](https://github.com/nick19850906-debug/mission_02_02)로 이동합니다.
- **Step 2**: 상단 메뉴 중 **`Settings`** 탭 클릭.
- **Step 3**: 좌측 메뉴 **`Collaborators`** 클릭 ➔ 비밀번호/2FA 인증 후 녹색 버튼 **`Add people`** 클릭.
- **Step 4**: 검색창에 **김상교, 장양환, 김건우** 님의 GitHub ID(또는 이메일)를 입력하고 **`Add to this repository`** 클릭하여 초대 전송.
- **Step 5**: **기본 브랜치 `main` 생성 및 Default 설정**:
  - 만약 저장소에 이미 `docs/contributing-guide` 같은 브랜치가 올라가 있어 Default 브랜치로 잡혀 있다면:
  - 조은익 님 로컬 터미널에서 `main` 브랜치를 생성하여 원격에 푸시합니다:
    ```bash
    mkdir mission_02_02
    cd mission_02_02
    git init
    echo "# Git & GitHub 개발 협업 학습정리노트" > README.md
    git add README.md
    git commit -m "docs: Initialize project repository with basic README.md"
    git branch -M main
    git remote add origin https://github.com/nick19850906-debug/mission_02_02.git
    git push -u origin main
    ```
  - GitHub 저장소 웹 페이지 `Settings` ➔ 좌측 `General` (또는 `Branches`)로 이동.
  - **Default branch** 항목에서 기본 브랜치를 **`main`**으로 변경하고 `Update` 클릭.
  - 이제 불필요해진 이전 브랜치는 GitHub 웹의 `Branches` 탭에서 휴지통 아이콘을 누르거나, 터미널에서 삭제합니다:
    ```bash
    git push origin --delete docs/contributing-guide
    ```

### 1-2. 김상교, 장양환, 김건우: Collaborator 초대 수락
- **Step 6**: 김상교, 장양환, 김건우 님은 이메일 또는 알림창(`https://github.com/nick19850906-debug/mission_02_02/invitations`)으로 이동.
- **Step 7**: 초록색 버튼 **`Accept invitation`**을 클릭하여 정식 협업자로 합류 완료.

### 1-3. 조은익: Branch Protection 설정 (main 직접 푸시 차단)
- **Step 8**: 저장소 웹 페이지(`Settings` ➔ 좌측 사이드바 `Branches`)로 이동.
- **Step 9**: **`Add branch protection rule`** (또는 `Add rule`) 클릭.
- **Step 10**: Branch name pattern에 `main` 입력.
- **Step 11**: **`Require a pull request before merging`** 체크.
- **Step 12**: **`Require approvals`** 체크 및 숫자 `1` 확인.
- **Step 13**: 하단 **`Do not allow bypassing the above settings`** 체크 (소유자 포함 전원 직접 푸시 금지).
- **Step 14**: 녹색 버튼 **`Create`** (또는 `Save changes`) 클릭하여 보호 규칙 저장.
- **Step 15**: 직접 푸시 차단 검증 (조은익 님 터미널):
  ```bash
  echo "test direct push" >> README.md
  git commit -am "test: Direct push to main"
  git push origin main
  ```
- **Step 16**: 터미널에 `remote: error: GH006: Protected branch hook declined` 에러가 발생하며 차단되는 것을 확인!  
  > 📸 **[필수 캡처 1] `main` 브랜치 직접 푸시 차단 화면**: 터미널에 `GH006: Protected branch hook declined` 에러가 찍힌 전체 터미널 화면을 캡처하여 `docs/images/01-branch-protection-blocked.png`로 저장하세요. ([`0012 캡처 체크리스트`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/docs/0012_b2-2-screenshot-checklist.md#필수-1-main-브랜치-직접-푸시-차단-화면-step-16) 참고)
- **Step 17**: 테스트 커밋 취소:
  ```bash
  git reset --hard HEAD~1
  ```

### 1-4. 팀원 전원: 저장소 로컬 클론
- **Step 18**: 김상교 님 로컬 터미널:
  ```bash
  git clone https://github.com/nick19850906-debug/mission_02_02.git
  cd mission_02_02
  ```
- **Step 19**: 장양환 님 로컬 터미널:
  ```bash
  git clone https://github.com/nick19850906-debug/mission_02_02.git
  cd mission_02_02
  ```
- **Step 20**: 김건우 님 로컬 터미널:
  ```bash
  git clone https://github.com/nick19850906-debug/mission_02_02.git
  cd mission_02_02
  ```

---

# [제2부] 협업 가이드(CONTRIBUTING.md) 구축 (Step 81 ~ 180)

### 2-1. 김상교: Issue #1 발행 및 협업 가이드 작성 (PR #2)
- **Step 81**: 저장소 `Issues` 탭 ➔ **`New issue`** 클릭.
- **Step 82**: 제목: `[docs] 협업 규칙 가이드 CONTRIBUTING.md 작성`
- **Step 83**: 내용:
  ```markdown
  ## 작업 목적
  - 팀원 전원이 준수할 브랜치 명명 규칙(feature/*), GitHub Flow 채택 이유, 커밋 컨벤션, PR 규칙 명시
  ## 세부 항목
  - docs/CONTRIBUTING.md 생성
  ```
- **Step 84**: **`Submit new issue`** 클릭 ➔ **이슈 #1** 생성 확인.
- **Step 85**: 김상교 님 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/sangkyo-contributing
  ```
- **Step 86**: `docs/` 폴더를 생성하고 `docs/CONTRIBUTING.md` 작성 (※ GitHub Flow 채택 이유 3줄 필수 포함):
  ```markdown
  # 개발 협업 가이드라인 (CONTRIBUTING)

  ## 1. 브랜치 전략 (GitHub Flow)
  - `main`: 배포 가능한 안정 상태의 보호 브랜치 (직접 push 금지)
  - `feature/*`: 작업 단위 브랜치 (예: `feature/yanghwan-flow`, `feature/sangkyo-contributing`)

  ### [우리 팀이 GitHub Flow를 선택한 이유]
  1. 수시 배포 및 빠른 피드백 반영에 가장 최적화된 단순하고 명확한 브랜치 모델입니다.
  2. 복잡한 릴리즈 브랜치(Git Flow 등) 대신 main 브랜치를 항상 안정된 상태로 유지하여 협업 병목을 방지합니다.
  3. 모든 기능 개발을 독립된 feature 브랜치와 PR 기반 코드 리뷰로 진행하여 문서 품질을 극대화합니다.

  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리

  ## 3. Pull Request 및 코드 리뷰 규칙
  - 모든 PR 본문에는 `Closes #이슈번호` 및 What(변경사항), Why(변경이유), How(검증방법)를 반드시 명시합니다.
  - 최소 1명 이상의 동료 리뷰 승인(Approve)을 받아야 머지할 수 있습니다.
  - 단순 "LGTM" 승인을 지양하고, 구체적인 라인 피드백이나 질문을 남기며 최소 1회 이상 상호작용(답글)을 나눕니다.

  ## 4. 충돌 발생 시 기본 대응 흐름
  - **발생 감지**: GitHub PR 화면에 충돌 경고가 발생하거나 로컬 머지 시 `CONFLICT` 알림을 확인합니다.
  - **대응 주체**: 충돌을 유발한 PR 작업자가 즉시 팀원들에게 상황을 공유하고 로컬 터미널에서 직접 해결합니다.
  - **해결 절차**: `git fetch origin && git merge origin/main` 후 VS Code에서 충돌 마커를 정리하고 머지 커밋을 올립니다.
  - **기록 의무**: 충돌 원인, 충돌 마커 원문, 해결 전략, 배운 점을 `docs/conflict-resolution.md`에 필수로 기록합니다.
  ```
- **Step 87**: 커밋 및 원격 푸시:
  ```bash
  git add docs/CONTRIBUTING.md
  git commit -m "docs: Add CONTRIBUTING.md guide for team collaboration"
  git push -u origin feature/sangkyo-contributing
  ```
- **Step 88**: GitHub 저장소 웹 페이지에서 **`Compare & pull request`** 클릭 (실제 GitHub PR #2).
- **Step 89**: 제목(Title): `docs: Add CONTRIBUTING.md guide for team collaboration`
- **Step 90**: 본문(Description) 작성:
  ```markdown
  Closes #1

  ## 1. 변경 이유 (Why)
  - 팀원 전원이 일관된 브랜치 전략(GitHub Flow)과 커밋 컨벤션, PR 규칙을 준수하여 협업 품질을 높이기 위해 작성했습니다.

  ## 2. 변경 사항 (What)
  - `docs/CONTRIBUTING.md` 가이드라인 문서 생성
    - GitHub Flow 브랜치 전략 및 채택 이유 3줄 명시
    - 팀 커밋 메시지 규칙(`feat`, `fix`, `docs`, `refactor`) 정의
    - PR 생성 시 필수 항목(What/Why/How) 및 코드 리뷰 규칙 규정

  ## 3. 검증 방법 (How)
  - 마크다운 서식 렌더링 정상 확인
  - 과제 명세서(`instruction.md`)의 협업 가이드 필수 요건 포함 여부 자체 검증 완료
  ```
  우측 사이드바 **`Reviewers`**에 **장양환** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

### 2-2. 장양환: PR #2 실질 코드 리뷰 및 머지
- **Step 91**: 장양환 님이 PR #2 페이지로 이동하여 **`Files changed`** 탭 확인.
- **Step 92**: `docs/CONTRIBUTING.md`의 브랜치 전략 라인에 마우스를 올리고 파란색 `+` 버튼 클릭 후 코멘트 작성:
  - 코멘트: *"브랜치 명명 규칙에 `feature/*` 외에 긴급 수정용 `hotfix/*` 브랜치 규칙도 고려해볼 수 있을까요?"*
- **Step 93**: 김상교 님이 답글(Reply) 작성:
  - 답글: *"좋은 제안입니다! GitHub Flow에서는 빠른 수정을 위해 기본 feature로 통일하되, 긴급 상황 시 hotfix 브랜치도 유연하게 허용하도록 추후 반영하겠습니다."*
- **Step 94**: 장양환 님이 우측 상단 **`Review changes`** ➔ **`Approve`** 선택 후 **`Submit review`** 클릭.
- **Step 95**: PR 메인 화면으로 돌아와 **`Merge pull request`** ➔ **`Confirm merge`** 클릭.
- **Step 96**: 이슈 #1이 자동으로 Closed 되었는지 확인!

---

# [제3부] 4인 4색 기초 학습노트 분담 작성 (Step 181 ~ 380)

### 3-1. 장양환: GitHub Flow 학습노트 작성 (PR #4)
- **Step 181**: 장양환 님 이슈 발행:
  - **제목(Title)**: `[feat] GitHub Flow 브랜치 전략 학습노트 작성`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 팀원들이 실무 브랜치 전략인 GitHub Flow의 핵심 원칙과 생명주기를 이해하고 협업에 적용할 수 있도록 학습 노트를 작성합니다.

    ## 세부 작업 내용
    - [ ] notes/02-github-flow.md 작성
    - [ ] main 브랜치의 배포 안정성 원칙 정리
    - [ ] feature/* 브랜치 분기 및 PR/코드리뷰 생명주기 가이드 수록
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **이슈 #3** 생성 확인.
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
  git commit -m "feat: Add notes/02-github-flow.md detailing branch lifecycle"
  git push -u origin feature/yanghwan-flow
  ```
- **Step 185**: GitHub에서 **PR #4** 생성:
  - **제목(Title)**: `feat: Add notes/02-github-flow.md detailing branch lifecycle`
  - **본문(Description)**: (※ What, Why, How, Closes 필수 포함)
    ```markdown
    Closes #3

    ## 1. 변경 이유 (Why)
    - 팀 협업의 근간이 되는 GitHub Flow 브랜치 전략의 핵심 원칙과 작업 생명주기를 팀원들과 공유하기 위해 작성했습니다.

    ## 2. 변경 사항 (What)
    - `notes/02-github-flow.md` 학습 노트 신규 추가
      - `main` 브랜치 배포 안정성 원칙 서술
      - `feature/*` 브랜치 분기, 커밋, PR, 코드 리뷰, 머지 생명주기 정리

    ## 3. 검증 방법 (How)
    - 마크다운 문법 렌더링 및 프리뷰 정상 표시 확인
    - `docs/CONTRIBUTING.md`의 협업 규칙과의 정합성 자체 검증 완료
    ```
  - 우측 사이드바 **`Reviewers`**에 **조은익** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 186**: **조은익** 님이 `Files changed`에서 라인 코멘트 작성:
  - 코멘트: *"main 브랜치의 배포 안정성을 유지하기 위해 만약 실수로 깨진 코드가 머지되었을 때의 롤백 대책도 나중에 언급되면 좋겠습니다."*
  - 장양환 님 답글: *"동의합니다! 제7부 트러블슈팅 실습의 git revert 내용과 연계하겠습니다."*
  - 조은익 님 **`Approve`** 제출 ➔ 장양환 님이 `Merge pull request` 클릭하여 머지 완료. (이슈 #3 자동 종료)

### 3-2. 조은익: 충돌 원리 학습노트 작성 (PR #6)
- **Step 187**: 조은익 님 이슈 발행:
  - **제목(Title)**: `[feat] Git 충돌 원리와 해결법 학습노트 작성`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 팀원들이 Git 충돌(Conflict)이 발생하는 근본 원인과 충돌 마커 구조를 이해할 수 있도록 기초 가이드 노트를 작성합니다.

    ## 세부 작업 내용
    - [ ] notes/03-conflict-guide.md 생성
    - [ ] 충돌 발생 정의 및 메커니즘 정리
    - [ ] 충돌 마커(HEAD, =======, origin/main) 구조 설명
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **이슈 #5** 생성 확인.
- **Step 188**: 로컬 터미널에서 브랜치 분기:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/eunik-conflict
  ```
- **Step 189**: `notes/03-conflict-guide.md` 작성 (※ 추후 비자명 충돌의 대상 파일):
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
  git commit -m "feat: Add notes/03-conflict-guide.md explaining conflict causes and markers"
  git push -u origin feature/eunik-conflict
  ```
- **Step 191**: GitHub에서 **PR #6** 생성:
  - **제목(Title)**: `feat: Add notes/03-conflict-guide.md explaining conflict causes and markers`
  - **본문(Description)**:
    ```markdown
    Closes #5

    ## 1. 변경 이유 (Why)
    - 팀 협업 중 발생하는 Git 충돌(Conflict)의 발생 원인과 충돌 마커 구조를 이해하기 위한 학습 노트를 작성했습니다.

    ## 2. 변경 사항 (What)
    - `notes/03-conflict-guide.md` 신규 생성
      - Git 충돌 발생 정의 및 원리 서술
      - 충돌 마커(`<<<<<<< HEAD`, `=======`, `>>>>>>>`)의 의미와 판독법 설명

    ## 3. 검증 방법 (How)
    - 마크다운 문법 렌더링 정상 확인
    - 충돌 마커 설명의 가독성 및 정확성 자체 검토 완료
    ```
  - 우측 사이드바 **`Reviewers`**에 **김건우** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 192**: **김건우** 님이 `Files changed`에서 라인 코멘트 작성:
  - 코멘트: *"충돌 마커 설명이 직관적입니다. 추후 3-Way Merge 개념도 보강하면 좋겠습니다."*
  - 조은익 님 답글: *"좋습니다! 다음 리팩터링 단계에서 3-Way 병합 원리를 추가하겠습니다."*
  - 김건우 님 **`Approve`** 제출 ➔ 조은익 님이 `Merge pull request` 클릭하여 머지 완료. (이슈 #5 자동 종료)

### 3-3. 김건우: 오픈소스 협업 기본노트 작성 (PR #8)
- **Step 193**: 김건우 님 이슈 발행:
  - **제목(Title)**: `[feat] 오픈소스 협업 및 PR 문화 학습노트 작성`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 팀원들이 오픈소스 커뮤니티와 현업에서 사용하는 PR 작성 에티켓 및 코드 리뷰 수용 문화를 체득할 수 있도록 가이드를 작성합니다.

    ## 세부 작업 내용
    - [ ] notes/04-open-source.md 생성
    - [ ] 작은 단위 커밋/PR의 중요성 정리
    - [ ] 코드 리뷰 피드백 수용 자세 서술
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **이슈 #7** 생성 확인.
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
  git commit -m "feat: Add notes/04-open-source.md on open source PR practices"
  git push -u origin feature/gunwoo-opensource
  ```
- **Step 197**: GitHub에서 **PR #8** 생성:
  - **제목(Title)**: `feat: Add notes/04-open-source.md on open source PR practices`
  - **본문(Description)**:
    ```markdown
    Closes #7

    ## 1. 변경 이유 (Why)
    - 건강한 오픈소스 협업 문화와 코드 리뷰 에티켓, PR 작성 수칙을 공유하여 팀 협업 효율을 극대화하기 위해 작성했습니다.

    ## 2. 변경 사항 (What)
    - `notes/04-open-source.md` 신규 생성
      - 작은 단위 커밋 및 작은 PR의 중요성 설명
      - 리뷰어 피드백 수용 자세와 건설적인 소통 에티켓 명시

    ## 3. 검증 방법 (How)
    - 마크다운 프리뷰 검토 완료
    - 오픈소스 표준 협업 가이드라인과의 부합 여부 확인
    ```
  - 우측 사이드바 **`Reviewers`**에 **김상교** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 198**: **김상교** 님이 라인 코멘트 작성:
  - 코멘트: *"작은 단위 커밋의 중요성이 잘 서술되었습니다. PR 템플릿 항목도 기대됩니다."*
  - 김건우 님 답글: *"감사합니다. 다음 PR에서 체크리스트를 포함한 PR 템플릿을 다루겠습니다."*
  - 김상교 님 **`Approve`** 제출 ➔ 김건우 님이 `Merge pull request` 클릭하여 머지 완료. (이슈 #7 종료)

### 3-4. 김상교: Git 기초 개념노트 작성 (PR #10)
- **Step 199**: 김상교 님 이슈 발행:
  - **제목(Title)**: `[feat] Git 3대 영역과 기본 명령어 학습노트 작성`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - Git의 핵심 3대 작업 영역(Working Directory, Staging Area, Repository)의 데이터 흐름과 기본 라이프사이클을 정리합니다.

    ## 세부 작업 내용
    - [ ] notes/01-git-basics.md 생성
    - [ ] 3대 작업 영역별 역할 정의
    - [ ] add -> commit -> push 기본 라이프사이클 서술
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **이슈 #9** 생성 확인.
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
  git commit -m "feat: Add notes/01-git-basics.md explaining git three areas"
  git push -u origin feature/sangkyo-git-basics
  ```
- **Step 203**: GitHub에서 **PR #10** 생성:
  - **제목(Title)**: `feat: Add notes/01-git-basics.md explaining git three areas`
  - **본문(Description)**:
    ```markdown
    Closes #9

    ## 1. 변경 이유 (Why)
    - Git의 동작 원리인 3대 작업 영역과 기본 라이프사이클을 정리하여 팀원들의 Git 기반 지식을 공고히 하기 위해 작성했습니다.

    ## 2. 변경 사항 (What)
    - `notes/01-git-basics.md` 신규 생성
      - Working Directory, Staging Area(Index), Repository 3대 영역 정의
      - add -> commit -> push 기본 작업 흐름 설명

    ## 3. 검증 방법 (How)
    - 마크다운 렌더링 및 개념 설명의 정확성 자체 검토 완료
    - README.md의 1장 목차와 연계 확인
    ```
  - 우측 사이드바 **`Reviewers`**에 **장양환** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 204**: **장양환** 님이 `Files changed`에서 라인 코멘트 작성 및 상호작용 후 **`Approve`**:
  - 코멘트: *"Git 3대 영역의 개념 설명이 아주 직관적입니다. Staging Area(Index)를 거치는 이유가 버전 히스토리의 원자성을 보장하기 위함이라는 점이 잘 드러나 있네요."*
  - 김상교 님 답글: *"좋은 피드백 감사합니다! 추후 트러블슈팅의 reset --soft 실습과 연결하여 Staging의 장점을 더 부각하겠습니다."*
  - 장양환 님 **`Approve`** 제출 ➔ 김상교 님이 `Merge pull request` 클릭하여 머지 완료. (이슈 #9 자동 종료)

---

> [!NOTE]
> **💡 [실시간 진행 현황 확인 (1~10번 완결)]**:
> - 김상교: Issue #1 ➔ PR #2 머지 완료
> - 장양환: Issue #3 ➔ PR #4 머지 완료
> - 조은익: Issue #5 ➔ PR #6 머지 완료
> - 김건우: Issue #7 ➔ PR #8 머지 완료
> - 김상교: Issue #9 ➔ PR #10 머지 완료
> 4인 기초 학습노트 4종이 모두 `main`에 성공적으로 반영되었습니다.

## 💡 코드 리뷰 피드백 반영 및 상호작용 지침

과제 명세서(`instruction.md`) 기준, 단순 "LGTM" 승인이 아닌 **구체적인 라인 피드백 → 작성자의 파일 수정 및 추가 커밋 → 답글 상호작용 → 재확인 및 최종 승인(Approve)** 흐름이 필수로 입증되어야 합니다.

| 순서 | 대상 PR | 작성자 | 리뷰어 | 리뷰 및 개선 반영 핵심 내용 | 반영 파일 |
|:---:|:---:|:---:|:---:|:---|:---|
| **PR #14** | 충돌 1 해결 | 조은익 | 장양환 | 충돌 1(Hunk) 해결 전략 및 충돌 마커 원문 기록 보강 피드백 반영 | `docs/conflict-resolution.md` |
| **PR #16** | PR 템플릿 가이드 | 김건우 | 김상교 | **★ Request changes**: 실무형 자가 검증 체크리스트 `[ ]` 보강 요청 ➔ 수정 커밋 반영 후 재승인 | `notes/04-open-source.md` |
| **PR #20** | 충돌 2 해결 | 김건우 | 조은익 | Rename vs Modify 비자명 충돌 해소 및 3-Way Merge 개념 정합성 검토 후 승인 | `notes/advanced/03-conflict-guide.md` |
| **PR #22** | 트러블슈팅 종합 | 장양환 | 조은익 | 4대 트러블슈팅(amend/reset/revert/stash) 재현 절차와 Why/주의점 검토 후 승인 | `docs/troubleshooting-log.md` |
| **PR #24** | 최종 제출 인덱스 | 김상교 | 김건우 | README 목차(TOC) 연결 및 SUBMISSION.md 12개 PR 링크 검증 후 최종 승인 | `SUBMISSION.md`, `README.md` |

# [제4부] ★ [실전 충돌 1] 자명한 충돌 (Hunk 충돌) (Step 381 ~ 500)

> **상황**: `docs/CONTRIBUTING.md` 문서의 동일한 라인에 **장양환** 님과 **조은익** 님이 각각 서로 다른 커밋 메시지 규칙 항목을 추가하여 자연스러운 라인 충돌(Hunk 충돌)을 유발합니다.

```
                    ┌───────────────────────────────┐
                    │      docs/CONTRIBUTING.md     │
                    └───────────────┬───────────────┘
                                    │
            ┌───────────────────────┴───────────────────────┐
            ▼                                               ▼
[장양환: feature/yanghwan-test-rule]            [조은익: feature/eunik-style-rule]
4번째 줄: - test: 단위 테스트 및 실습 검증 추가   4번째 줄: - style: 마크다운 서식 정리 추가
(PR #13 -> main에 먼저 머지 완료!)              (PR #14 생성 시 CONFLICT 발생!)
```

### 4-1. 두 팀원의 동시 분기
- **Step 381**: 장양환 님 이슈 발행:
  - **제목(Title)**: `[docs] 커밋 컨벤션에 test 규칙 추가`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 협업 가이드라인 문서에 단위 테스트 및 검증을 위한 `test` 커밋 태그 규칙을 추가합니다.

    ## 세부 작업 내용
    - [ ] docs/CONTRIBUTING.md에 `test` 커밋 컨벤션 항목 추가
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #11** 생성 완료.
- **Step 382**: 조은익 님 이슈 발행:
  - **제목(Title)**: `[docs] 커밋 컨벤션에 style 규칙 추가`
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 협업 가이드라인 문서에 마크다운 서식 정리를 위한 `style` 커밋 태그 규칙을 추가합니다.

    ## 세부 작업 내용
    - [ ] docs/CONTRIBUTING.md에 `style` 커밋 컨벤션 항목 추가
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #12** 생성 완료.
- **Step 383**: 두 팀원 모두 동일한 최신 `main`에서 브랜치를 분기합니다:
  ```bash
  # 장양환 님:
  git checkout main
  git pull origin main
  git checkout -b feature/yanghwan-test-rule

  # 조은익 님:
  git checkout main
  git pull origin main
  git checkout -b feature/eunik-style-rule
  ```

### 4-2. 장양환: 수정 및 main 선반영 (PR #13)
- **Step 384**: 장양환 님이 `docs/CONTRIBUTING.md`의 `## 2. 커밋 메시지 컨벤션` 아래 마지막 줄에 `- test: 단위 테스트 및 실습 검증 추가`를 추가합니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리
  - `test`: 단위 테스트 및 실습 검증 추가
  ```
- **Step 385**: 커밋 후 원격 푸시 및 **PR #13** 생성:
  - **터미널 커밋 및 푸시 명령**:
    ```bash
    git add docs/CONTRIBUTING.md
    git commit -m "docs: Add test tag rule to commit conventions"
    git push -u origin feature/yanghwan-test-rule
    ```
  - **GitHub에서 PR 생성**:
    - **제목(Title)**: `docs: Add test tag rule to commit conventions`
    - **본문(Description)**:
      ```markdown
      Closes #11

      ## 1. 변경 이유 (Why)
      - 단위 테스트 및 실습 검증 커밋을 명확히 분류하기 위해 커밋 컨벤션에 `test` 태그를 추가하고자 합니다.

      ## 2. 변경 사항 (What)
      - `docs/CONTRIBUTING.md`의 커밋 메시지 컨벤션 항목에 `- test: 단위 테스트 및 실습 검증 추가` 규칙 반영

      ## 3. 검증 방법 (How)
      - CONTRIBUTING.md 문서 내 서식 및 줄바꿈 정상 여부 확인
      ```
    > 💡 **주의 (`Closes #11`)**: GitHub 브라우저 상단에 열려 있는 장양환 님의 실제 이슈 번호인 **#11**을 적어야 PR 머지 시 이슈가 자동으로 닫힙니다!
  - 우측 사이드바 **`Reviewers`**에 **김상교** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 386**: **김상교** 님이 `Files changed`에서 확인 및 상호작용 후 `Approve`:
  - 코멘트: *"커밋 컨벤션에 `test` 태그를 추가하는 것은 검증 커밋 구분에 매우 유용해 보입니다. 위치도 기존 컨벤션 목록 하단에 깔끔하게 잘 배치되었습니다."*
  - 장양환 님 답글: *"확인 감사합니다! 이제 테스트 코드나 실습 검증 시 일관되게 `test:` 태그를 활용하겠습니다."*
  - 김상교 님 **`Approve`** 제출 ➔ **PR #13이 `main`에 먼저 머지 완료!** (머지 즉시 Issue #11 자동 Closed 확인)

### 4-3. 조은익: 수정 및 충돌 직면 (PR #14)
- **Step 387**: 조은익 님은 장양환 님의 머지 사실을 모른 채, 본인의 `feature/eunik-style-rule` 브랜치에서 **장양환 님이 작성했던 바로 그 위치**에 `- style: 마크다운 서식 및 줄바꿈 정리`를 추가합니다:
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
  git push -u origin feature/eunik-style-rule
  ```
- **Step 389**: 조은익 님이 GitHub에서 **PR #14** 생성:
  - **제목(Title)**: `docs: Add style tag rule and resolve merge conflict`
  - **본문(Description)**:
    ```markdown
    Closes #12

    ## 1. 변경 이유 (Why)
    - 마크다운 서식 및 줄바꿈 정리를 위한 `style` 커밋 태그를 추가하고, 앞선 PR 머지로 발생한 라인 충돌을 로컬에서 해결하기 위함입니다.

    ## 2. 변경 사항 (What)
    - `docs/CONTRIBUTING.md`: 충돌 마커를 해소하고 `test`와 `style` 커밋 규칙을 순서대로 모두 보존(Union Merge)
    - `docs/conflict-resolution.md`: [충돌 1 - 자명한 충돌] 발생 원인, 충돌 마커, 해결 전략, 배운 점 기록부 신규 생성

    ## 3. 검증 방법 (How)
    - 로컬에서 `git merge origin/main` 후 충돌 해결 및 마크다운 렌더링 정상 확인
    - `git status`로 충돌 해소 및 작업 트리 Clean 상태 검증
    ```
  - 우측 사이드바 **`Reviewers`**에 **장양환** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.
- **Step 390**: **GitHub PR #14 화면에 회색 경고창 발생!**
  > **`This branch has conflicts that must be resolved`**  
  > `Conflicting files: docs/CONTRIBUTING.md`  
  > 📸 **[필수 캡처 2-A] GitHub PR 충돌 경고창**: PR #14 상단에 회색 경고창(`This branch has conflicts...`)이 뜬 웹 브라우저 화면을 캡처하여 `docs/images/02-conflict1-web-alert.png`로 저장하세요.

### 4-4. 조은익: 로컬 충돌 해결 및 기록부 작성
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
  - `refactor`: 디렉터리 구조 개편 및 파일 정리
  <<<<<<< HEAD
  - `style`: 마크다운 서식 및 줄바꿈 정리
  =======
  - `test`: 단위 테스트 및 실습 검증 추가
  >>>>>>> origin/main
  ```
  > 📸 **[필수 캡처 2-B] VS Code 충돌 마커 화면**: 충돌 마커(`<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main`)가 선명하게 보이는 에디터 화면을 캡처하여 `docs/images/03-conflict1-markers.png`로 저장하세요. ([`0012 캡처 체크리스트`](file:///C:/Users/alsgu/Dev/Codyssey/B2-2/docs/0012_b2-2-screenshot-checklist.md#필수-2-충돌-1-자명한-충돌-발생-및-충돌-마커-화면-step-390-393) 참고)
- **Step 394**: 충돌 마커(`<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main`)를 지우고 두 항목이 순서대로 모두 보존되도록 합칩니다:
  ```markdown
  ## 2. 커밋 메시지 컨벤션
  - `feat`: 새로운 학습 노트 추가
  - `fix`: 문서 내용 오류 수정
  - `docs`: 가이드 문서 및 인덱스 수정
  - `refactor`: 디렉터리 구조 개편 및 파일 정리
  - `style`: 마크다운 서식 및 줄바꿈 정리
  - `test`: 단위 테스트 및 실습 검증 추가
  ```
- **Step 395**: **충돌 해결 기록부(`docs/conflict-resolution.md`) 동시 생성** (PR #14에 함께 포함시켜 머지):
  ```markdown
  # Merge Conflict Resolution Log

  ## 1. 충돌 1: 자명한 충돌 (Hunk 충돌)
  - **참여자**: 장양환, 조은익
  - **대상 파일**: `docs/CONTRIBUTING.md`
  - **발생 원인**: 동일 위치에 커밋 규칙 항목(`test` vs `style`)을 동시 추가하여 라인 충돌 발생
  - **충돌 마커**: `<<<<<<< HEAD` (style) vs `>>>>>>> origin/main` (test)
  - **해결 전략**: 두 규칙을 모두 보존(Union Merge)하여 순서대로 배치
  - **해결 커밋**: PR #14 머지 커밋
  - **배운 점(Learnings)**:
    - 공통 설정 문서를 수정할 때는 작업 착수 전 팀원들에게 사전 공유하여 수정 위치가 겹치지 않도록 조율해야 합니다.
    - 충돌 마커 발생 시 HEAD는 내 로컬 변경점, origin/main은 당겨온 원격 변경점임을 명확히 이해했습니다.
  ```
  > [!NOTE] 실전 진행 팁 (PR #14가 이미 웹에서 머지된 경우)
  > 만약 GitHub 웹 화면에서 충돌을 먼저 해결하여 `docs/conflict-resolution.md` 없이 PR #14가 이미 머지 완료되었다면 전혀 걱정하지 않으셔도 됩니다!
  > 충돌 1의 해결 기록은 **PR #20 (김건우 님의 비자명 충돌 해결 PR)**에서 충돌 1과 충돌 2를 한꺼번에 묶은 **완전체 통합 문서**로 생성하여 머지하면 평가 기준을 100% 충족합니다. (번외 PR을 만들지 마시고 곧바로 **Step 501**로 진행하세요!)
- **Step 396**: 스테이징 후 머지 커밋 생성:
  ```bash
  git add docs/CONTRIBUTING.md docs/conflict-resolution.md
  git commit -m "fix: Resolve conflict by keeping both style and test conventions"
  ```
- **Step 397**: 원격 브랜치로 푸시:
  ```bash
  git push origin feature/eunik-style-rule
  ```
- **Step 398**: GitHub PR #14 화면을 새로고침하여 녹색 `This branch has no conflicts`로 바뀐 것을 확인!
- **Step 399**: **장양환** 님이 `Files changed`에서 확인 및 상호작용 후 **`Approve`**:
  - 코멘트: *"로컬에서 `origin/main`을 병합하여 충돌 마커를 직접 정리하고, `conflict-resolution.md`에 발생 원인과 해결 전략, 배운 점까지 완벽히 기록해주셨네요! 승인합니다."*
  - 조은익 님 답글: *"충돌을 해결하면서 두 커밋 규칙(`test`와 `style`)을 순서대로 모두 보존했습니다. 꼼꼼히 확인해 주셔서 감사합니다!"*
  - 장양환 님 **`Approve`** 제출 ➔ **PR #14 머지 완료! (Issue #12 자동 Closed)**

---

# [제5부] ★ 필수 요건: 코드 리뷰 피드백 반영 (Request Changes) (Step 501 ~ 600)

- **Step 501**: **김건우 님 이슈 발행** (GitHub 웹 `Issues` ➔ `New issue`):
  - **제목(Title)**:
    ```text
    [feat] 오픈소스 PR 템플릿 작성 요령 보강
    ```
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 오픈소스 협업 노트에 PR 본문 템플릿 구조와 작성 요령 항목을 추가합니다.

    ## 세부 작업 내용
    - [ ] notes/04-open-source.md에 PR 템플릿 작성 가이드 추가
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #15** 생성 확인.

- **Step 502**: **김건우 님 로컬 브랜치 분기** (로컬 터미널 실행):
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/gunwoo-template-guide
  ```

- **Step 503**: **김건우 님이 `notes/04-open-source.md` 파일 수정** (초안 작성):
  - **파일 전체 내용 (아래 내용을 복사하여 `notes/04-open-source.md`에 전체 붙여넣기)**:
    ```markdown
    # 04. 오픈소스 협업과 PR 문화

    ## 1. 협업 에티켓
    - 작은 단위로 자주 커밋하고 PR 크기를 작게 유지하여 리뷰어의 부담을 줄입니다.
    - 명확한 제목과 본문 설명을 작성하고 관련 이슈 번호를 연동합니다.

    ## 2. 코드 리뷰 피드백 수용
    - 리뷰어의 피드백은 코드 품질을 높이기 위한 건설적인 조언으로 받아들입니다.

    ## 3. PR 템플릿 작성 요령
    - PR 본문에는 작업한 내용을 텍스트로 자세하게 적습니다.
    ```
  - *(참고: 실무형 체크리스트를 고의로 누락하여 김상교 님의 Request Changes 리뷰를 유도합니다.)*

- **Step 504**: **김건우 님 커밋 및 푸시 후 PR #16 생성**:
  - **터미널 커밋 및 원격 푸시 명령**:
    ```bash
    git add notes/04-open-source.md
    git commit -m "feat: Add PR template guidelines and structure to notes/04"
    git push -u origin feature/gunwoo-template-guide
    ```
  - **GitHub 웹에서 PR #16 생성**:
    - **제목(Title)**:
      ```text
      feat: Add PR template guidelines and structure to notes/04
      ```
    - **본문(Description)**:
      ```markdown
      Closes #15

      ## 1. 변경 이유 (Why)
      - 효과적인 PR 작성을 돕기 위해 PR 템플릿의 기본 구조와 작성 요령을 학습 노트에 보강하고자 합니다.

      ## 2. 변경 사항 (What)
      - `notes/04-open-source.md`에 PR 템플릿 작성 요령 섹션 추가

      ## 3. 검증 방법 (How)
      - 마크다운 렌더링 및 문맥 흐름 검토
      ```
    - 우측 사이드바 **`Reviewers`**에 **김상교** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

- **Step 505**: **김상교 님이 Request Changes 코드 리뷰를 수행합니다**:
  1. GitHub PR #16 페이지에서 **`Files changed`** 탭 클릭.
  2. `notes/04-open-source.md`의 `## 3. PR 템플릿 작성 요령` 라인에 마우스를 올리고 파란색 **`+`** 버튼 클릭.
  3. 코멘트 입력창에 아래 내용 복사-붙여넣기:
     ```text
     단순 텍스트 설명 외에도 실무에서 사용하는 [ ] 체크리스트 양식 예시를 추가해 주시면 훨씬 완성도 높은 학습 노트가 될 것 같습니다!
     ```
  4. 우측 상단 녹색 **`Finish your review`** 버튼 클릭.
  5. 라디오 버튼 3개 중 반드시 **`Request changes`** 선택!
  6. 하단 녹색 **`Submit review`** 클릭! (PR 상단에 빨간색 `Changes requested` 상태 표시)  
  > 📸 **[필수 캡처 3-A] Request Changes 화면**: PR #16에 빨간색 `Changes requested` 상태와 김상교 님의 개선 요청 라인 코멘트가 함께 보이도록 웹 브라우저를 캡처하여 `docs/images/04-review-request-changes.png`로 저장하세요.

- **Step 506**: **김건우 님이 피드백을 반영하여 `notes/04-open-source.md`를 수정합니다**:
  - **파일 전체 내용 (아래 완성본 내용을 복사하여 `notes/04-open-source.md`에 전체 덮어쓰기)**:
    ```markdown
    # 04. 오픈소스 협업과 PR 문화

    ## 1. 협업 에티켓
    - 작은 단위로 자주 커밋하고 PR 크기를 작게 유지하여 리뷰어의 부담을 줄입니다.
    - 명확한 제목과 본문 설명을 작성하고 관련 이슈 번호를 연동합니다.

    ## 2. 코드 리뷰 피드백 수용
    - 리뷰어의 피드백은 코드 품질을 높이기 위한 건설적인 조언으로 받아들입니다.

    ## 3. PR 템플릿 작성 요령
    - 작업 요약 및 변경 이유를 명시합니다.
    - 아래와 같이 실무형 자가 검증 체크리스트를 포함합니다:
      - [ ] 로컬에서 변경사항을 직접 검증했는가?
      - [ ] 관련된 이슈 번호(Closes #)를 명시했는가?
      - [ ] 불필요한 임시 파일이 포함되지 않았는가?
    ```

- **Step 507**: **김건우 님이 수정 커밋을 생성하고 원격에 푸시합니다**:
  ```bash
  git add notes/04-open-source.md
  git commit -m "docs: Add self-review checklist to PR template as requested in review"
  git push origin feature/gunwoo-template-guide
  ```

- **Step 508**: **김상교 님이 PR #16을 재승인(Approve)합니다**:
  1. GitHub PR #16 페이지를 새로고침하여 김건우 님의 추가 커밋(`docs: Add self-review checklist...`)이 들어온 것을 확인.
  2. 김상교 님의 이전 코멘트 아래 답글 입력창에 아래 내용 입력 후 **`Reply`**:
     ```text
     피드백이 완벽하게 반영되었습니다! 체크리스트가 포함되어 훨씬 실용적인 가이드가 되었네요. 수고하셨습니다.
     ```
  3. 우측 상단 **`Files changed`** ➔ **`Finish your review`** 클릭.
  4. 라디오 버튼 중 **`Approve`** 선택 후 **`Submit review`** 클릭! (녹색 `Approved` 상태로 전환)  
  > 📸 **[필수 캡처 3-B] 재승인(Approved) 화면**: 김건우 님의 수정 커밋이 반영된 후 김상교 님이 녹색 `Approved`로 상태를 변경하고 칭찬 답글을 남긴 화면을 캡처하여 `docs/images/05-review-approved.png`로 저장하세요.

- **Step 509**: **김건우 님이 PR #16 머지 완료**:
  - PR 하단의 녹색 **`Merge pull request`** 클릭 ➔ **`Confirm merge`** 클릭! (보라색 `Merged` 확인)
  - 우측의 **`Delete branch`** 버튼 클릭하여 원격 브랜치 정리.
  - GitHub `Issues` 탭에서 **Issue #15가 자동으로 `Closed`**되었음을 확인.

---

# [제6부] ★ [실전 충돌 2] 비자명한 충돌 (Rename vs Modify) (Step 601 ~ 750)

> **Git ORT 엔진 100% 충돌 메커니즘**:  
> 조은익 님은 `notes/03-conflict-guide.md`를 `notes/advanced/03-conflict-guide.md`로 이동(`git mv`)하고 **`## 3. 충돌 예방 수칙`을 추가**하여 `main`에 먼저 머지합니다.  
> 같은 시점에 김건우 님은 구 경로의 `notes/03-conflict-guide.md` 파일 동일 위치에 **`## 3. 3-Way Merge 원리`를 추가**합니다.  
> **파일 경로 이동(Rename) + 동일 섹션 동시 수정(Modify)**이 겹치면서 Git 머지 엔진에서 양쪽 파일 경로를 모두 표기하는 실무형 비자명 충돌이 100% 발생합니다!

```
                        ┌───────────────────────────────────┐
                        │    notes/03-conflict-guide.md     │
                        └─────────────────┬─────────────────┘
                                          │
            ┌─────────────────────────────┴─────────────────────────────┐
            ▼                                                           ▼
[조은익: feature/eunik-reorganize]                  [김건우: feature/gunwoo-conflict-patch]
git mv notes/03-... notes/advanced/03-...           기존 notes/03-conflict-guide.md에
+ ## 3. 충돌 예방 수칙 추가                         + ## 3. 3-Way Merge 원리 추가
(PR #19 -> main에 먼저 머지 완료!)                  (PR #20 생성 시 비자명 충돌 발생!)
```

### 6-1. 두 팀원의 이슈 발행 및 동시 브랜치 분기
- **Step 601**: **조은익 님 이슈 발행** (GitHub 웹 `Issues` ➔ `New issue`):
  - **제목(Title)**:
    ```text
    [refactor] 충돌 가이드 노트를 advanced 디렉터리로 이동 및 예방 수칙 추가
    ```
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 프로젝트 문서 구조 개선을 위해 충돌 가이드를 notes/advanced 디렉터리로 이동하고 충돌 예방 수칙을 보강합니다.

    ## 세부 작업 내용
    - [ ] notes/advanced/03-conflict-guide.md로 경로 이동
    - [ ] 충돌 예방 수칙 항목 작성
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #17** 생성 확인.

- **Step 602**: **김건우 님 이슈 발행** (GitHub 웹 `Issues` ➔ `New issue`):
  - **제목(Title)**:
    ```text
    [docs] 충돌 가이드 노트에 3-Way Merge 개념 보강
    ```
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 충돌 가이드 노트에 Git 내부 병합 알고리즘인 3-Way Merge의 원리를 상세히 설명하는 내용을 추가합니다.

    ## 세부 작업 내용
    - [ ] notes/03-conflict-guide.md에 3-Way Merge 원리 항목 추가
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #18** 생성 확인.

- **Step 603**: **두 팀원이 각자의 터미널에서 최신 `main`으로부터 동시 분기합니다**:
  ```bash
  # 조은익 님 로컬 터미널:
  git checkout main
  git pull origin main
  git checkout -b feature/eunik-reorganize

  # 김건우 님 로컬 터미널:
  git checkout main
  git pull origin main
  git checkout -b feature/gunwoo-conflict-patch
  ```

### 6-2. 조은익: 파일 경로 이동(Rename) 및 main 선반영 (PR #19)
- **Step 604**: **조은익 님이 폴더를 생성하고 파일을 이동한 뒤 내용을 보강합니다**:
  ```bash
  # 조은익 님 로컬 터미널:
  mkdir notes/advanced
  git mv notes/03-conflict-guide.md notes/advanced/03-conflict-guide.md
  ```
  - **파일 전체 내용 (아래 내용을 복사하여 `notes/advanced/03-conflict-guide.md`에 전체 덮어쓰기)**:
    ```markdown
    # 03. Git 충돌(Conflict)의 원리와 해결

    ## 1. 충돌이란 무엇인가?
    - 동일한 파일의 동일한 영역을 서로 다른 브랜치에서 다르게 수정하고 병합할 때 Git이 자동으로 판단하지 못해 멈추는 현상입니다.

    ## 2. 충돌 마커의 구조
    - `<<<<<<< HEAD`: 현재 내가 머지를 수행 중인 로컬 브랜치의 변경사항
    - `=======`: 두 브랜치 변경사항의 경계선
    - `>>>>>>> origin/main`: 원격 main에서 가져오려는 최신 변경사항

    ## 3. 충돌 예방 수칙
    - 수시로 main의 최신 변경사항을 pull하여 동기화합니다.
    - 기능 단위로 브랜치를 잘게 쪼개어 작업 기간을 단축합니다.
    ```

- **Step 605**: **조은익 님 커밋 및 푸시 후 PR #19 생성**:
  - **터미널 커밋 및 푸시 명령**:
    ```bash
    git add notes/advanced/03-conflict-guide.md
    git commit -m "refactor: Relocate conflict guide to advanced dir and add prevention tips"
    git push -u origin feature/eunik-reorganize
    ```
  - **GitHub 웹에서 PR #19 생성**:
    - **제목(Title)**:
      ```text
      refactor: Relocate conflict guide to advanced dir and add prevention tips
      ```
    - **본문(Description)**:
      ```markdown
      Closes #17

      ## 1. 변경 이유 (Why)
      - 문서 디렉터리 구조를 체계화하고 심화 학습 내용을 분리하기 위해 충돌 가이드를 `notes/advanced/`로 이동하고 충돌 예방 수칙을 추가합니다.

      ## 2. 변경 사항 (What)
      - `git mv notes/03-conflict-guide.md notes/advanced/03-conflict-guide.md` 경로 이동
      - 이동된 파일 하단에 `## 3. 충돌 예방 수칙` 항목 작성

      ## 3. 검증 방법 (How)
      - 파일 경로 변경 정상 반영 여부 (`git status`에서 renamed 확인)
      - 파일 내 충돌 예방 수칙 마크다운 렌더링 검증
      ```
    - 우측 사이드바 **`Reviewers`**에 **김건우** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

- **Step 606**: **김건우 님이 PR #19 리뷰 및 머지 완료**:
  1. GitHub PR #19 페이지에서 **`Files changed`** 확인.
  2. 코멘트 작성:
     ```text
     문서 구조를 `notes/advanced/`로 분리하여 심화 내용을 체계화한 점이 인상적입니다. 충돌 예방 수칙 2가지도 실무에서 바로 적용하기 좋은 팁이네요. 승인합니다!
     ```
  3. 조은익 님 답글:
     ```text
     감사합니다! 심화 주제들을 별도 디렉터리로 관리하면 독자들이 학습 수준에 맞춰 읽기 훨씬 수월할 것 같아 분리했습니다.
     ```
  4. 김건우 님 **`Approve`** 제출 ➔ 하단 녹색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭하여 머지 완료! (보라색 Merged 확인, Issue #17 자동 Closed)
  5. **`Delete branch`** 클릭하여 원격 브랜치 정리.

### 6-3. 김건우: 기존 파일 수정(Modify) 및 PR #20 생성
- **Step 607**: **김건우 님은 조은익 님이 파일을 이동한 사실을 모른 채, 구 경로 `notes/03-conflict-guide.md`를 수정합니다**:
  - **파일 전체 내용 (아래 내용을 복사하여 `notes/03-conflict-guide.md`에 전체 덮어쓰기)**:
    ```markdown
    # 03. Git 충돌(Conflict)의 원리와 해결

    ## 1. 충돌이란 무엇인가?
    - 동일한 파일의 동일한 영역을 서로 다른 브랜치에서 다르게 수정하고 병합할 때 Git이 자동으로 판단하지 못해 멈추는 현상입니다.

    ## 2. 충돌 마커의 구조
    - `<<<<<<< HEAD`: 현재 내가 머지를 수행 중인 로컬 브랜치의 변경사항
    - `=======`: 두 브랜치 변경사항의 경계선
    - `>>>>>>> origin/main`: 원격 main에서 가져오려는 최신 변경사항

    ## 3. 3-Way Merge 원리
    - Git은 공통 조상 커밋(Base), 내 브랜치 커밋(Ours), 병합할 브랜치 커밋(Theirs) 3가지를 비교하여 자동으로 합칩니다.
    ```

- **Step 608**: **김건우 님 커밋 및 푸시 후 PR #20 생성**:
  - **터미널 커밋 및 푸시 명령**:
    ```bash
    git add notes/03-conflict-guide.md
    git commit -m "docs: Add 3-Way Merge principles to notes/03"
    git push -u origin feature/gunwoo-conflict-patch
    ```
  - **GitHub 웹에서 PR #20 생성**:
    - **제목(Title)**:
      ```text
      docs: Add 3-Way Merge principles and resolve rename/modify conflict
      ```
    - **본문(Description)**:
      ```markdown
      Closes #18

      ## 1. 변경 이유 (Why)
      - 충돌 가이드에 3-Way Merge 개념을 보강하고, 앞선 PR의 파일 이동(Rename)과 동시 수정(Modify)으로 인한 비자명 충돌을 해결하기 위함입니다.

      ## 2. 변경 사항 (What)
      - `notes/advanced/03-conflict-guide.md`: 이동된 최신 경로에 `3-Way Merge 원리`와 `충돌 예방 수칙`을 모두 통합 보존
      - `docs/conflict-resolution.md`: [충돌 1 - Hunk 충돌] 및 [충돌 2 - Rename vs Modify] 통합 기록부 작성

      ## 3. 검증 방법 (How)
      - 로컬 터미널에서 `git merge origin/main`으로 비자명 충돌 유발 및 수동 해결 검증
      - 이동된 경로(`notes/advanced/...`)에 두 내용이 누락 없이 병합되었는지 확인
      ```
    - 우측 사이드바 **`Reviewers`**에 **조은익** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

### 6-4. 김건우: 비자명 충돌 직면 및 로컬 CLI 해결 절차
- **Step 609**: **GitHub PR #20 화면에 회색 충돌 경고창 발생 확인!**
  > `This branch has conflicts that must be resolved`  
  > `Conflicting files: notes/advanced/03-conflict-guide.md`

- **Step 610**: **김건우 님이 로컬 터미널에서 최신 `main`을 병합합니다**:
  ```bash
  git fetch origin
  git merge origin/main
  ```

- **Step 611**: **터미널에 실제 출력되는 비자명 충돌 문구 확인**:
  ```text
  Auto-merging notes/advanced/03-conflict-guide.md
  CONFLICT (content): Merge conflict in notes/advanced/03-conflict-guide.md
  Automatic merge failed; fix conflicts and then commit the result.
  ```

- **Step 612**: **VS Code 에디터로 `notes/advanced/03-conflict-guide.md`를 열어 비자명 충돌 마커 확인**:
  ```markdown
  # 03. Git 충돌(Conflict)의 원리와 해결

  ## 1. 충돌이란 무엇인가?
  - 동일한 파일의 동일한 영역을 서로 다른 브랜치에서 다르게 수정하고 병합할 때 Git이 자동으로 판단하지 못해 멈추는 현상입니다.

  ## 2. 충돌 마커의 구조
  - `<<<<<<< HEAD`: 현재 내가 머지를 수행 중인 로컬 브랜치의 변경사항
  - `=======`: 두 브랜치 변경사항의 경계선
  - `>>>>>>> origin/main`: 원격 main에서 가져오려는 최신 변경사항

  <<<<<<< HEAD:notes/03-conflict-guide.md
  ## 3. 3-Way Merge 원리
  - Git은 공통 조상 커밋(Base), 내 브랜치 커밋(Ours), 병합할 브랜치 커밋(Theirs) 3가지를 비교하여 자동으로 합칩니다.
  =======
  ## 3. 충돌 예방 수칙
  - 수시로 main의 최신 변경사항을 pull하여 동기화합니다.
  - 기능 단위로 브랜치를 잘게 쪼개어 작업 기간을 단축합니다.
  >>>>>>> origin/main:notes/advanced/03-conflict-guide.md
  ```
  > 📸 **[필수 캡처 4] 비자명 충돌(Rename vs Modify) 마커 및 터미널 화면**: 이전 경로와 새 경로(`HEAD:notes/03-conflict-guide.md` vs `origin/main:notes/advanced/03-conflict-guide.md`)가 모두 찍힌 충돌 마커 화면을 캡처하여 `docs/images/06-conflict2-rename-modify.png`로 저장하세요.

- **Step 613**: **충돌 해결 - `notes/advanced/03-conflict-guide.md` 파일 수정**:
  - **파일 전체 내용 (아래 통합 완성본 내용을 복사하여 `notes/advanced/03-conflict-guide.md`에 전체 덮어쓰기)**:
    ```markdown
    # 03. Git 충돌(Conflict)의 원리와 해결

    ## 1. 충돌이란 무엇인가?
    - 동일한 파일의 동일한 영역을 서로 다른 브랜치에서 다르게 수정하고 병합할 때 Git이 자동으로 판단하지 못해 멈추는 현상입니다.

    ## 2. 충돌 마커의 구조
    - `<<<<<<< HEAD`: 현재 내가 머지를 수행 중인 로컬 브랜치의 변경사항
    - `=======`: 두 브랜치 변경사항의 경계선
    - `>>>>>>> origin/main`: 원격 main에서 가져오려는 최신 변경사항

    ## 3. 3-Way Merge 원리
    - Git은 공통 조상 커밋(Base), 내 브랜치 커밋(Ours), 병합할 브랜치 커밋(Theirs) 3가지를 비교하여 자동으로 합칩니다.

    ## 4. 충돌 예방 수칙
    - 수시로 main의 최신 변경사항을 pull하여 동기화합니다.
    - 기능 단위로 브랜치를 잘게 쪼개어 작업 기간을 단축합니다.
    ```

- **Step 614**: **충돌 해결 기록부(`docs/conflict-resolution.md`) 신규 생성**:
  - **파일 전체 내용 (아래 통합 완성본 내용을 복사하여 `docs/conflict-resolution.md`에 전체 붙여넣기)**:
    ```markdown
    # Merge Conflict Resolution Log

    ## 1. 충돌 1: 자명한 충돌 (Hunk 충돌)
    - **참여자**: 장양환, 조은익
    - **대상 파일**: `docs/CONTRIBUTING.md`
    - **발생 원인**: 동일 위치에 커밋 규칙 항목(`test` vs `style`)을 동시 추가하여 라인 충돌 발생
    - **충돌 마커**: `<<<<<<< HEAD` (style) vs `>>>>>>> origin/main` (test)
    - **해결 전략 및 절차**: GitHub 웹의 `Resolve conflicts` 편집기에서 충돌 마커를 확인하고 두 규칙(`test`, `style`)을 순서대로 모두 유지(Union Merge)하여 병합 커밋(`04d6a73`) 생성 후 최종 머지(`15ae97d`)
    - **배운 점(Learnings)**:
      - 단순 라인 충돌(Hunk conflict)은 GitHub 웹 인터페이스에서도 신속하게 해결할 수 있음을 확인했습니다.
      - 다만 웹 편집기에서는 해결과 동시에 추가 문서(`conflict-resolution.md`)를 함께 스테이징할 수 없으므로, 기록 문서 생성이 수반되거나 복잡한 충돌(비자명 충돌 등)은 로컬 터미널(CLI) 병합이 훨씬 유연하고 안전하다는 점을 체득했습니다.

    ## 2. 충돌 2: 비자명한 충돌 (Rename vs Modify)
    - **참여자**: 조은익, 김건우
    - **대상 파일**: `notes/03-conflict-guide.md` ➔ `notes/advanced/03-conflict-guide.md`
    - **발생 원인**: 한쪽은 파일 경로 이동(Rename) 및 예방수칙 추가, 다른 쪽은 구 경로 파일의 동일 위치에 3-Way Merge 내용 추가(Modify)를 동시에 진행하여 3-Way 머지 시 충돌 발생
    - **충돌 마커**: `HEAD:notes/03-conflict-guide.md` vs `origin/main:notes/advanced/03-conflict-guide.md` (Git이 이전 경로와 새 경로를 동시에 표시)
    - **해결 전략**: 이동된 새 경로(`notes/advanced/...`)를 최종 경로로 채택하고 두 내용을 순서대로 통합
    - **해결 커밋**: PR #20 머지 커밋
    - **배운 점(Learnings)**:
      - 대규모 디렉터리 리팩터링이나 파일 이름 변경 시에는 반드시 팀원들에게 사전 공지하여 브랜치를 최신화하도록 해야 합니다.
      - Git은 파일 이름이 바뀌어도 내용 유사도를 기반으로 추적하여 새 경로에 충돌 마커를 생성한다는 내부 원리를 체득했습니다.
    ```

- **Step 615**: **해결된 파일들을 스테이징하고 머지 커밋을 작성합니다**:
  ```bash
  git add notes/advanced/03-conflict-guide.md docs/conflict-resolution.md
  git commit -m "fix: Resolve rename/modify conflict by merging 3-Way Merge principles and prevention tips into relocated path"
  ```

- **Step 616**: **원격 브랜치로 푸시**:
  ```bash
  git push origin feature/gunwoo-conflict-patch
  ```

- **Step 617**: **조은익 님이 PR #20 리뷰 및 머지 완료**:
  1. GitHub PR #20 화면을 새로고침하여 녹색 `This branch has no conflicts` 확인.
  2. `Files changed` 확인 후 코멘트 입력:
     ```text
     파일 이동(Rename)과 동시 수정(Modify)으로 인한 비자명 충돌을 새 경로(`notes/advanced/`)에서 성공적으로 병합하셨군요! 3-Way Merge 개념 설명도 매우 명확합니다. conflict-resolution.md 통합 기록도 훌륭합니다. 승인합니다!
     ```
  3. 김건우 님 답글:
     ```text
     Git이 이전 경로와 새 경로를 동시에 표시하는 충돌 마커를 직접 보면서 3-Way 병합 원리를 확실히 체득했습니다. 승인 감사합니다!
     ```
  4. 조은익 님 **`Approve`** 제출 ➔ 하단 녹색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭하여 머지 완료! (Issue #18 자동 Closed)
  5. **`Delete branch`** 클릭하여 원격 브랜치 정리.

---

# [제7부] Git 4대 트러블슈팅 4인 전원 분담 실습 (Step 751 ~ 880)

### 7-1. 김상교: `git commit --amend` (커밋 메시지 오타 정정)
- **Step 751**: **김상교 님이 연습 브랜치를 생성하고 오타가 포함된 커밋을 작성합니다**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b practice/sangkyo-amend
  # README에 가벼운 빈 줄 추가 후 오타 커밋 작성
  echo "" >> README.md
  git add README.md
  git commit -m "docs: Ad git basic summar note"
  ```
- **Step 752**: **`--amend` 명령어로 직전 커밋 메시지를 즉시 수정합니다**:
  ```bash
  git commit --amend -m "docs: Add git basics summary note"
  ```
- **Step 753**: **`git log -1`로 커밋 해시가 갱신되고 메시지가 수정된 화면을 캡처하고 연습 브랜치를 정리합니다**:
  ```bash
  git log -1
  # 터미널 화면 캡처 후 메인으로 복귀 및 연습 브랜치 삭제
  git checkout main
  git branch -D practice/sangkyo-amend
  ```
  > 📸 **[추천 캡처 - 김상교] `git commit --amend` 실습 화면**: 직전 오타 커밋 메시지가 정정된 터미널 로그를 캡처하여 `docs/images/07-troubleshoot-amend.png`로 저장하세요.

### 7-2. 장양환: `git reset --soft` (실수 커밋 무손실 취소)
- **Step 754**: **장양환 님이 연습 브랜치에서 불필요한 임시 디버깅 파일(`temp_draft.txt`)을 실수로 포함하여 커밋합니다**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b practice/yanghwan-reset
  echo "debug temp cache note" > temp_draft.txt
  git add temp_draft.txt
  git commit -m "docs: Add study note with accidental temp_draft.txt"
  ```
- **Step 755**: **`--soft` 옵션으로 작업 내용은 Staging Area에 그대로 보존하고 커밋만 안전하게 취소합니다**:
  ```bash
  git reset --soft HEAD~1
  ```
- **Step 756**: **인덱스(Staging Area)에서 임시 파일을 제외하고 삭제한 뒤 정상 커밋합니다**:
  ```bash
  git restore --staged temp_draft.txt
  # Windows PowerShell:
  Remove-Item temp_draft.txt -ErrorAction SilentlyContinue
  # Git Bash / Mac / Linux:
  rm -f temp_draft.txt 2>/dev/null
  git commit -m "docs: Add study note excluding temp files"
  git status
  # 터미널 화면 캡처 후 메인으로 복귀 및 연습 브랜치 삭제
  git checkout main
  git branch -D practice/yanghwan-reset
  ```
  > 📸 **[추천 캡처 - 장양환] `git reset --soft` 실습 화면**: 작업 파일은 Staging에 안전하게 보존되고 임시 파일만 제외된 터미널 화면을 캡처하여 `docs/images/08-troubleshoot-reset-soft.png`로 저장하세요.

### 7-3. 조은익: `git revert` (원격에 공유된 잘못된 커밋 안전 취소)
- **Step 757**: **조은익 님이 연습 브랜치에서 잘못된 주석이 포함된 커밋을 작성합니다**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b practice/eunik-revert
  echo "<!-- 잘못된 Git 명령어 설명 항목 -->" >> README.md
  git add README.md
  git commit -m "docs: Add incorrect git command notes"
  ```
- **Step 758**: **히스토리를 삭제하지 않고 안전하게 반대 변경을 적용하는 역(Revert) 커밋을 생성합니다**:
  ```bash
  git revert HEAD --no-edit
  ```
- **Step 759**: **`git log -2 --oneline`으로 원본 커밋 위에 안전하게 Revert 역커밋이 쌓인 화면을 캡처합니다**:
  ```bash
  git log -2 --oneline
  # 터미널 화면 캡처 후 메인으로 복귀 및 연습 브랜치 삭제
  git checkout main
  git branch -D practice/eunik-revert
  ```
  > 📸 **[추천 캡처 - 조은익] `git revert` 실습 화면**: 히스토리 맨 위에 안전하게 Revert 역커밋이 추가된 `git log -2` 화면을 캡처하여 `docs/images/09-troubleshoot-revert.png`로 저장하세요.

### 7-4. 김건우: `git stash` & `stash pop` (작업 중 긴급 브랜치 이동)
- **Step 760**: **김건우 님이 미완성 코드를 작성하여 작업 트리를 Dirty 상태로 만듭니다**:
  ```bash
  git checkout main
  git pull origin main
  echo "## 임시 작성 중인 오픈소스 체크리스트 (미완성)" >> notes/04-open-source.md
  git status
  ```
- **Step 761**: **커밋할 수 없는 미완성 작업 내용을 안전한 임시 스택에 격리 보관합니다**:
  ```bash
  git stash push -m "work-in-progress: open source checklist update"
  git status
  ```
- **Step 762**: **작업 트리가 깨끗해진 것을 확인한 뒤, 다시 보관했던 작업 내용을 꺼내옵니다**:
  ```bash
  git stash pop
  ```
- **Step 763**: **작업 내용이 원상 복구됨을 확인하고 터미널을 캡처한 뒤 작업 트리를 정리합니다**:
  ```bash
  git status
  # 터미널 화면 캡처 후 미완성 변경사항 원래대로 복원
  git restore notes/04-open-source.md
  git status
  ```
  > 📸 **[추천 캡처 - 김건우] `git stash` & `pop` 실습 화면**: stash pop 후 미완성 작업 내용이 완벽 복원된 터미널 화면을 캡처하여 `docs/images/10-troubleshoot-stash.png`로 저장하세요.

### 7-5. 장양환: 트러블슈팅 종합 기록부 작성 및 머지 (PR #22)
- **Step 764**: **장양환 님 이슈 발행** (GitHub 웹 `Issues` ➔ `New issue`):
  - **제목(Title)**:
    ```text
    [docs] 4인의 Git 트러블슈팅 실습 로그 작성
    ```
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - 팀원 4인이 각자 실습한 Git 복구 명령어(amend, reset, revert, stash)의 과정과 Why, 주의점을 종합 기록합니다.

    ## 세부 작업 내용
    - [ ] docs/troubleshooting-log.md 작성
    - [ ] 4인 트러블슈팅 종합 요약표 및 협업 시 주의사항 명시
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #21** 생성 확인.

- **Step 765**: **장양환 님 로컬 브랜치 분기**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/yanghwan-troubleshooting-log
  ```

- **Step 766**: **`docs/troubleshooting-log.md` 신규 생성**:
  - **파일 전체 내용 (아래 내용을 복사하여 `docs/troubleshooting-log.md`에 전체 붙여넣기)**:
    ```markdown
    # Git Troubleshooting Practice Log

    ## 1. 종합 실습 요약표
    | 팀원 | 사용 명령어 | 의도적 실수 상황 | 해결 및 복구 결과 |
    |:---:|:---|:---|:---|
    | **김상교** | `git commit --amend` | 커밋 메시지 오타 발생 | 최신 커밋 해시 재생성 및 메시지 수정 확인 |
    | **장양환** | `git reset --soft` | 불필요한 임시 파일 포함 커밋 | unstage 후 커밋 취소, 임시 파일 안전 제외 |
    | **조은익** | `git revert` | 머지된 잘못된 노트 커밋 롤백 | 히스토리 훼손 없이 역(Revert) 커밋 안전 머지 |
    | **김건우** | `git stash` & `pop` | 작업 중 긴급 브랜치 전환 | 미완성 변경사항 임시 격리 보관 후 무손실 복구 |

    ## 2. 명령어별 선택 이유(Why) 및 협업 시 주의점
    - **`git commit --amend`**:
      - **Why**: 오타 수정을 위해 불필요한 "오타 수정" 커밋을 추가로 남기지 않고 직전 커밋을 깔끔하게 덮어쓰기 위함입니다.
      - **주의점**: 이미 원격에 푸시된 커밋에 amend를 적용하면 커밋 해시가 바뀌어 강제 푸시가 필요해지므로, 반드시 **로컬에만 존재하는 커밋**에만 사용해야 합니다.
    - **`git reset --soft`**:
      - **Why**: 실수로 들어간 파일을 커밋에서 제외하되, 정성껏 작성한 다른 코드 작업물은 유실 없이 Staging 상태로 보존하기 위함입니다.
      - **주의점**: `--hard`를 쓰면 작업 트리의 모든 변경사항이 영구 삭제되므로 반드시 `--soft`를 사용해야 하며, reset 후 `git restore --staged`로 제외할 파일을 명시적으로 unstage해야 합니다.
    - **`git revert`**:
      - **Why**: 이미 원격 `main` 브랜치에 머지되어 동료들에게 공유된 커밋은 reset 후 강제 푸시하면 동료들의 로컬 저장소와 충돌하므로, 히스토리를 보존하면서 안전하게 역커밋을 올리기 위함입니다.
      - **주의점**: 머지 커밋을 revert할 때는 `-m 1` 옵션을 지정하여 부모 브랜치를 지정해야 합니다.
    - **`git stash`**:
      - **Why**: 작업 중 커밋하기 애매한 미완성 코드가 있을 때, 작업 트리를 깨끗하게 비워야만 다른 브랜치로의 체크아웃이 가능하기 때문입니다.
      - **주의점**: stash 스택에 너무 많은 작업을 오래 방치하면 나중에 pop 시 충돌이 발생할 수 있으므로, 용무를 마친 후 즉시 pop하여 적용해야 합니다.

    ## 3. 팀원별 상세 재현 절차 (Reproducible Steps)
    ### 3-1. 김상교: 직전 커밋 메시지 수정 (`git commit --amend`)
    - **상황**: 커밋 메시지에 오타 발생 (`docs: Ad git basic summar note`)
    - **수행 명령**: `git commit --amend -m "docs: Add git basics summary note"`
    - **결과**: `git log -1` 확인 시 새로운 커밋 해시로 갱신되고 오타가 정정됨

    ### 3-2. 장양환: 실수 커밋 무손실 취소 (`git reset --soft`)
    - **상황**: 임시 디버깅 파일(`temp_draft.txt`)을 실수로 포함하여 커밋
    - **수행 명령**:
      ```bash
      git reset --soft HEAD~1
      git restore --staged temp_draft.txt
      Remove-Item temp_draft.txt
      git commit -m "docs: Add study note excluding temp files"
      ```
    - **결과**: 작성한 노트는 Staging 상태로 보존되고 `temp_draft.txt`만 안전하게 제외됨

    ### 3-3. 조은익: 공유된 머지 커밋 안전 취소 (`git revert`)
    - **상황**: 원격 `main`에 머지된 커밋 중 수정이 필요한 커밋 발생
    - **수행 명령**: `git revert HEAD --no-edit`
    - **결과**: 히스토리를 삭제하지 않고 반대 변경을 적용하는 역커밋(`Revert "..."`)이 안전하게 머지됨

    ### 3-4. 김건우: 미완성 작업 임시 격리 및 복원 (`git stash` & `pop`)
    - **상황**: 미완성 작업 중 긴급하게 브랜치를 전환해야 하는 Dirty 상태 발생
    - **수행 명령**:
      ```bash
      git stash push -m "work-in-progress"
      # 브랜치 전환 및 용무 완료 후 복귀
      git stash pop
      ```
    - **결과**: 작업 트리가 깨끗해져 브랜치 이동이 가능했고, 복귀 후 미완성 작업물이 완벽 복구됨
    ```

- **Step 767**: **장양환 님 커밋 및 푸시 후 PR #22 생성**:
  - **터미널 커밋 및 푸시 명령**:
    ```bash
    git add docs/troubleshooting-log.md
    git commit -m "docs: Add troubleshooting-log.md documenting 4 recovery scenarios"
    git push -u origin feature/yanghwan-troubleshooting-log
    ```
  - **GitHub 웹에서 PR #22 생성**:
    - **제목(Title)**:
      ```text
      docs: Add troubleshooting-log.md documenting 4 recovery scenarios
      ```
    - **본문(Description)**:
      ```markdown
      Closes #21

      ## 1. 변경 이유 (Why)
      - 팀원 4인이 각자 실습한 Git 핵심 복구 명령어(amend, reset, revert, stash)의 과정과 Why, 협업 주의사항을 영구 기록하기 위해 작성했습니다.

      ## 2. 변경 사항 (What)
      - `docs/troubleshooting-log.md` 신규 생성
        - 4인 분담 트러블슈팅 종합 요약표 수록
        - 명령어별 선택 이유(Why) 및 실무 협업 시 주의점(Caution) 상세 문서화

      ## 3. 검증 방법 (How)
      - 4명 전원의 실습 내용과 캡처 매핑 검증 완료
      - 과제 명세서(`instruction.md`)의 4대 트러블슈팅 필수 요건 충족 여부 확인
      ```
    - 우측 사이드바 **`Reviewers`**에 **조은익** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

- **Step 768**: **조은익 님이 PR #22 리뷰 및 머지 완료**:
  1. GitHub PR #22 페이지에서 **`Files changed`** 확인.
  2. 코멘트 작성:
     ```text
     팀원 4인이 각자 실습한 4대 복구 명령어(amend, reset, revert, stash)의 상황, 절차, 주의점, Why가 일목요연하게 정리되었습니다. 특히 revert와 reset의 실무적 차이점이 명쾌합니다. 승인합니다!
     ```
  3. 장양환 님 답글:
     ```text
     리뷰 감사합니다. 실무 협업에서 실수 상황 발생 시 팀원들이 바로 찾아보고 복구할 수 있는 실전 가이드가 되도록 정리했습니다.
     ```
  4. 조은익 님 **`Approve`** 제출 ➔ 하단 녹색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭하여 머지 완료! (Issue #21 자동 Closed)
  5. **`Delete branch`** 클릭하여 원격 브랜치 정리.

---

# [제8부] 최종 산출물 제출 인덱스 & 인터뷰 대비 (Step 881 ~ 1000)

### 8-1. 김상교: README 목차 보강, SUBMISSION.md 작성 및 최종 머지 (PR #24)
- **Step 881**: **김상교 님 이슈 발행** (GitHub 웹 `Issues` ➔ `New issue`):
  - **제목(Title)**:
    ```text
    [docs] 최종 제출 문서 SUBMISSION.md 작성 및 README 목차 업데이트
    ```
  - **내용(Description)**:
    ```markdown
    ## 작업 목적
    - README.md에 전체 학습노트 목차를 완성하고, 최종 과제 제출용 SUBMISSION.md 인덱스를 작성합니다.

    ## 세부 작업 내용
    - [ ] README.md 목차(TOC) 보강
    - [ ] SUBMISSION.md 작성 (팀원별 기여 내역 및 Full PR URL 연결)
    - [ ] docs/git-history.txt 생성
    ```
  - **`Submit new issue`** 클릭 ➔ GitHub에서 **실제 이슈 번호: Issue #23** 생성 확인.

- **Step 882**: **김상교 님 로컬 브랜치 분기**:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feature/sangkyo-submission-index
  ```

- **Step 883**: **`README.md` 전체 내용 수정**:
  - **파일 전체 내용 (아래 내용을 복사하여 루트 경로의 `README.md`에 전체 덮어쓰기)**:
    ```markdown
    # Git & GitHub 개발 협업 학습정리노트

    > 조은익, 김상교, 장양환, 김건우 4인이 함께 작성한 Git 협업 및 브랜치 전략 학습정리노트입니다.

    ## 📚 학습 정리 노트 목차 (Table of Contents)
    1. [01. Git 기초 개념과 3대 작업 영역](notes/01-git-basics.md) - 담당: 김상교
    2. [02. GitHub Flow 브랜치 전략과 생명주기](notes/02-github-flow.md) - 담당: 장양환
    3. [03. Git 충돌(Conflict) 원리와 3-Way 병합](notes/advanced/03-conflict-guide.md) - 담당: 조은익, 김건우
    4. [04. 오픈소스 PR 문화 및 자가 검증 체크리스트](notes/04-open-source.md) - 담당: 김건우

    ## 📑 협업 필수 문서 바로가기
    - [협업 가이드라인 (docs/CONTRIBUTING.md)](docs/CONTRIBUTING.md)
    - [충돌 해결 기록부 (docs/conflict-resolution.md)](docs/conflict-resolution.md)
    - [트러블슈팅 실습 기록부 (docs/troubleshooting-log.md)](docs/troubleshooting-log.md)
    ```

- **Step 884**: **루트 경로에 `SUBMISSION.md` 신규 생성**:
  - **파일 전체 내용 (아래 내용을 복사하여 루트 경로의 `SUBMISSION.md`에 전체 붙여넣기)**:
    ```markdown
    # Submission Index

    ## 1. 프로젝트 및 저장소 정보
    - **프로젝트명**: Git & GitHub 개발 협업 학습정리노트
    - **저장소 형태**: 개인 저장소 (소유자: 조은익 / nick19850906-debug) + Collaborator (김상교, 장양환, 김건우)
    - **저장소 URL**: https://github.com/nick19850906-debug/mission_02_02
    - **기본 브랜치**: `main` (Branch Protection 적용)

    ## 2. 팀원별 기여 내역표 (1:1 완벽 대칭 달성)
    | 팀원 | 역할 | 생성한 이슈 링크 (클릭 가능) | 병합된 PR 링크 (클릭 가능) | 동료 코드 리뷰 참여 내역 |
    |:---:|:---:|:---|:---|:---|
    | **조은익** | 호스트 / 트러블슈팅 | [#5](https://github.com/nick19850906-debug/mission_02_02/issues/5), [#12](https://github.com/nick19850906-debug/mission_02_02/issues/12), [#17](https://github.com/nick19850906-debug/mission_02_02/issues/17) | [PR #6](https://github.com/nick19850906-debug/mission_02_02/pull/6), [PR #14](https://github.com/nick19850906-debug/mission_02_02/pull/14), [PR #19](https://github.com/nick19850906-debug/mission_02_02/pull/19) | PR #4, PR #20, PR #22 |
    | **김상교** | 팀장 / 가이드 & 인프라 | [#1](https://github.com/nick19850906-debug/mission_02_02/issues/1), [#9](https://github.com/nick19850906-debug/mission_02_02/issues/9), [#23](https://github.com/nick19850906-debug/mission_02_02/issues/23) | [PR #2](https://github.com/nick19850906-debug/mission_02_02/pull/2), [PR #10](https://github.com/nick19850906-debug/mission_02_02/pull/10), [PR #24](https://github.com/nick19850906-debug/mission_02_02/pull/24) | PR #8, PR #13, PR #16 (Request changes) |
    | **장양환** | 코어 / 협업노트 | [#3](https://github.com/nick19850906-debug/mission_02_02/issues/3), [#11](https://github.com/nick19850906-debug/mission_02_02/issues/11), [#21](https://github.com/nick19850906-debug/mission_02_02/issues/21) | [PR #4](https://github.com/nick19850906-debug/mission_02_02/pull/4), [PR #13](https://github.com/nick19850906-debug/mission_02_02/pull/13), [PR #22](https://github.com/nick19850906-debug/mission_02_02/pull/22) | PR #2, PR #10, PR #14 |
    | **김건우** | 심화노트 / 검증 | [#7](https://github.com/nick19850906-debug/mission_02_02/issues/7), [#15](https://github.com/nick19850906-debug/mission_02_02/issues/15), [#18](https://github.com/nick19850906-debug/mission_02_02/issues/18) | [PR #8](https://github.com/nick19850906-debug/mission_02_02/pull/8), [PR #16](https://github.com/nick19850906-debug/mission_02_02/pull/16), [PR #20](https://github.com/nick19850906-debug/mission_02_02/pull/20) | PR #6, PR #19, PR #24 |

    ## 3. 핵심 산출물 및 증빙 바로가기
    - [협업 가이드라인 (docs/CONTRIBUTING.md)](docs/CONTRIBUTING.md)
    - [충돌 해결 기록부 (docs/conflict-resolution.md)](docs/conflict-resolution.md)
    - [트러블슈팅 실습 기록부 (docs/troubleshooting-log.md)](docs/troubleshooting-log.md)
    - [전체 Git 커밋 네트워크 로그 증빙 (docs/git-history.txt)](docs/git-history.txt)
    ```

- **Step 885**: **터미널에서 전체 Git 히스토리 로그를 파일로 추출합니다**:
  ```bash
  git log --oneline --graph --all > docs/git-history.txt
  ```
  > 📸 **[보너스 캡처 1] Git 네트워크 커밋 그래프 트리 터미널 화면**: `git log --oneline --graph --all` 실행 시 출력되는 알록달록한 브랜치 그래프 화면을 캡처하여 `docs/images/11-git-network-graph.png`로 저장하세요.

- **Step 886**: **김상교 님 커밋 및 푸시 후 PR #24 생성**:
  - **터미널 커밋 및 푸시 명령**:
    ```bash
    git add README.md SUBMISSION.md docs/git-history.txt
    git commit -m "docs: Add SUBMISSION.md index and update README table of contents"
    git push -u origin feature/sangkyo-submission-index
    ```
  - **GitHub 웹에서 PR #24 생성**:
    - **제목(Title)**:
      ```text
      docs: Add SUBMISSION.md index and update README table of contents
      ```
    - **본문(Description)**:
      ```markdown
      Closes #23

      ## 1. 변경 이유 (Why)
      - 최종 프로젝트 과제 제출을 위한 인덱스 문서(`SUBMISSION.md`)를 작성하고, `README.md`에 전체 학습노트 목차를 완성하기 위함입니다.

      ## 2. 변경 사항 (What)
      - `README.md`: 1장부터 4장까지의 전체 학습노트 목차(TOC) 및 주요 문서 바로가기 링크 추가
      - `SUBMISSION.md`: 팀원별 기여 내역표(클릭 가능한 Full PR 링크 12개) 및 핵심 산출물 인덱스 작성
      - `docs/git-history.txt`: 전체 git 커밋 네트워크 로그 증빙 파일 추가

      ## 3. 검증 방법 (How)
      - SUBMISSION.md 내 모든 PR 링크의 클릭 동작 확인
      - README.md 목차 링크 및 마크다운 렌더링 정상 검증
      - 4인 1:1 대칭 기여 요건(PR 3개 / 리뷰 3개) 전수 검증 완료
      ```
    - 우측 사이드바 **`Reviewers`**에 **김건우** 님 지정 ➔ 녹색 **`Create pull request`** 클릭.

- **Step 887**: **김건우 님이 PR #24 최종 리뷰 및 머지 완료**:
  1. GitHub PR #24 페이지에서 **`Files changed`** 확인.
  2. 코멘트 작성:
     ```text
     SUBMISSION.md의 12개 PR 링크와 README.md 목차가 완벽히 연결되어 있습니다. 4인 1:1 대칭 기여와 전원 코드리뷰 요건이 한눈에 증명되네요. 대단히 수고하셨습니다!
     ```
  3. 김상교 님 답글:
     ```text
     모든 팀원분들의 적극적인 협업 덕분에 과제 명세서 전 요건을 무결점으로 완수했습니다. 4인 전원 고생 많으셨습니다!
     ```
  4. 김건우 님 **`Approve`** 제출 ➔ 김상교 님이 하단 녹색 **`Merge pull request`** ➔ **`Confirm merge`** 클릭하여 **PR #24 최종 머지 완료! (Issue #23 자동 Closed)**
  5. **`Delete branch`** 클릭하여 원격 브랜치 정리.  
  > 📸 **[보너스 캡처 2] PR 12개 All-Merged 목록 화면**: GitHub 저장소 `Pull requests` 탭에서 `is:pr is:closed` 검색 시 PR #2부터 PR #24까지 12개 전체가 보라색 Merged 상태로 정렬된 화면을 캡처하여 `docs/images/12-all-prs-merged.png`로 저장하세요.

---

## 🎓 피어 리뷰 구두 질의응답 9대 기출 무적의 Q&A 뱅크

- **Q1. 프로젝트 주제로 "학습 정리 노트"를 선택한 이유는 무엇인가요?**
  - 👉 *"과제 명세서의 간단한 결과물 옵션 C인 '학습 정리 노트'를 채택했습니다. 복잡한 코드 문법 구현보다 Git 3대 영역, 브랜치 전략, 충돌 해결 메커니즘을 팀원 전원이 깊이 있게 학습하고 실습하는 데 집중하기 위해 선택했습니다."*
- **Q2. 비자명한 충돌(Rename vs Modify)은 어떻게 발생했고 어떻게 해결했나요?**
  - 👉 *"조은익 팀원이 `notes/03-conflict-guide.md`를 `notes/advanced/` 폴더로 이동(`git mv`)하고 예방 수칙을 추가하여 머지했고, 같은 시점에 김건우 팀원이 구 경로의 파일 동일 위치에 3-Way Merge 내용을 추가하여 충돌이 발생했습니다. Git은 새 경로와 구 경로를 모두 표시하며 충돌을 알렸고, 이동된 새 경로를 채택하여 두 내용을 순서대로 통합해 해결했습니다."*
- **Q3. 코드 리뷰에서 Request Changes를 어떻게 활용했나요?**
  - 👉 *"PR #16에서 PR 템플릿 체크리스트가 누락되어 김상교 팀원이 `Request changes`로 보완을 요청했습니다. 작업자인 김건우 팀원이 실무형 체크리스트를 보강하는 추가 커밋을 올려 재승인받아 머지했습니다."*
- **Q4. `reset`과 `revert`의 실무적인 사용 차이점은 무엇인가요?**
  - 👉 *"로컬에서만 발생한 개인 실수는 히스토리를 깔끔하게 되돌리는 `reset --soft`를 사용했고, 이미 원격에 푸시되어 동료들과 공유된 커밋은 동료들의 저장소가 꼬이지 않도록 역커밋을 생성하는 `revert`로 안전하게 취소했습니다."*
- **Q5. 충돌 마커에서 `HEAD`와 `origin/main`의 의미는 무엇인가요?**
  - 👉 *"`<<<<<<< HEAD`는 현재 내가 머지를 수행 중인 로컬 체크아웃 브랜치의 내용이고, `>>>>>>> origin/main`은 당겨오려는 원격 `main` 브랜치의 최신 내용입니다."*
- **Q6. 팀원이 실수로 의미 없는 커밋을 여러 개 작성했다면 push 전/후에 각각 어떻게 해결하나요?**
  - 👉 *"push 전이라면 `git rebase -i`를 통해 `reword`로 메시지를 수정하거나 `squash`로 합쳐서 클린하게 올립니다. 이미 원격에 push된 공유 브랜치라면 동료들의 동기화 꼬임을 막기 위해 `git revert`로 취소하거나, 개인 feature 브랜치에 한해 사전 협의 후 `--force-with-lease`를 사용하여 안전하게 덮어씁니다."*
- **Q7. GitHub Flow와 Git Flow의 차이점과 GitHub Flow를 선택한 이유는?**
  - 👉 *"Git Flow는 develop, release 등 5개 브랜치를 엄격히 관리하는 주기적 배포 모델이고, GitHub Flow는 main과 feature 브랜치만으로 수시 배포하는 민첩한 모델입니다. 저희는 빠른 피드백과 지속적 문서 통합을 위해 오버헤드가 적은 GitHub Flow를 선택했습니다."*
- **Q8. 특정 영역에서 팀원 간 충돌이 반복적으로 일어난다면 어떻게 해결해야 하나요?**
  - 👉 *"작업 단위(WBS)와 설계의 문제입니다. PR 단위를 잘게 쪼개어 브랜치 수명을 단축하고, 하나의 큰 파일에 집중되지 않도록 책임을 분리하여 모듈을 분할하며, 공통 파일 수정 전 슬랙/이슈로 사전 조율해야 합니다."*
- **Q9. 긴급 핫픽스(Hotfix) 배포 시 Branch Protection이 걸려있다면 어떻게 대처하나요?**
  - 👉 *"최신 main에서 hotfix 브랜치를 분기하여 최소 단위로 수정한 뒤, 비상 연락망으로 리뷰어를 호출하여 실시간 동기 리뷰 후 승인받아 머지합니다. 규칙을 임의 해제하지 않고 빠른 협업으로 대응하는 것이 원칙입니다."*
