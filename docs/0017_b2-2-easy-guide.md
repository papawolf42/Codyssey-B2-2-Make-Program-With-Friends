# B2-2 초간편 실전 협업 가이드 (완결 개정판)

> **이 문서의 목적**: GPT-6 아스트라 울트라가 작성한 0015, 0016의 완벽한 합격 요건과 병렬 협업 구조는 그대로 유지하면서, 어려운 전문 용어를 걷어내고 누구나 복사-붙여넣기하며 바로 따라 할 수 있게 정리한 실전 가이드입니다.

---

## 💡 1. 시작하기 전에: "노트 PR"과 "실습 PR"이 뭔가요?

과제 공식 평가 기준에 **"팀원 1인당 최소 PR 2개 이상을 만들어서 main에 머지(Merge)해야 한다"**라는 규칙이 있습니다.  
4명이니까 팀 전체로는 최소 8개의 PR이 나와야 합니다. 그래서 역할을 1인당 딱 2개씩 분담합니다.

| 구분 | 무엇을 하는 PR인가요? | 왜 필요한가요? |
| :--- | :--- | :--- |
| **1. 노트 PR** | 내가 맡은 주제의 **공부 정리 글(마크다운)**을 써서 올리는 PR | 기술 문서 작성 기여 + 전원 기여도 증명 |
| **2. 실습 PR** | **Git 명령어 실수 수습(트러블슈팅)** + **짝꿍과의 충돌 해결**을 담는 PR | Git 심화 역량 증명 (과제 필수 조건) |

👉 이렇게 하면 4명 전원이 **[노트 PR 1개] + [실습 PR 1개] = 총 2개 PR**을 달성해서 과제 기준을 완벽하게 만족합니다!

---

## 👥 2. 우리 팀 4명의 역할 분담표 (1:1 완전 대칭)

혼선을 방지하기 위해 **"내 글을 봐줄 리뷰어"**와 **"내가 리뷰하러 갈 동료의 글"**을 명확히 구분했습니다.

| 담당자 | 1. 개인 노트 PR (동시 진행) | 2. 실습 PR (짝꿍 실습) | 내 PR을 봐줄 리뷰어 (노트 / 실습) | 내가 리뷰하러 갈 동료의 PR |
| :---: | :--- | :--- | :---: | :---: |
| **A 김상교** | `notes/01-git-basics.md` (Git 기초) | `amend` (커밋 오타 수정) + 1조 선머지 | **장양환** (노트) / **조은익** (실습) | **D 김건우** 노트 / **C 조은익** 실습 |
| **B 장양환** | `notes/02-github-flow.md` (GitHub Flow) | `reset --soft` (커밋 취소) + 1조 충돌 해결 | **조은익** (노트) / **김건우** (실습) | **A 김상교** 노트 / **D 김건우** 실습 |
| **C 조은익** | `notes/03-conflict-guide.md` (충돌 원리) | `revert` (원격 커밋 취소) + 2조 선머지 | **김건우** (노트) / **김상교** (실습) | **B 장양환** 노트 / **A 김상교** 실습 |
| **D 김건우** | `notes/04-open-source.md` (오픈소스·리뷰) | `stash` (작업 임시보관) + 2조 충돌 해결 | **김상교** (노트) / **장양환** (실습) | **C 조은익** 노트 / **B 장양환** 실습 |

> 💡 **검증**:  
> - 4명 전원이 **남의 PR 실질 리뷰 정확히 2회 작성**  
> - 4명 전원이 **본인 PR에 리뷰 피드백 반영 정확히 1회 커밋**  
> ➔ 과제 평가 기준의 1:1 대칭 기여도를 완벽하게 충족합니다.

---

## 🚀 3. 전체 진행 흐름 (4단계)

```
[0단계: 공통 준비] ──▶ [1단계: 각자 달리기]    ──▶ [2단계: 짝꿍 실습]       ──▶ [3단계: 최종 통합]
저장소 보호 설정        4명이 동시에 노트 작성     2명씩 짝지어 충돌 해결       김상교 님이 필수문서
+ 가이드/연습파일 준비    + 서로 리뷰 후 머지         + 4종 트러블슈팅 기록        3종 완성 후 최종 제출
```

---

## [0단계] 공통 준비: 시작 전 필수 세팅 (1회만 수행)

### 0-1. 김상교 (호스트): Collaborator 초대 및 main 브랜치 보호 설정
1. GitHub 저장소 `Settings` ➔ `Collaborators`에서 팀원 3명(장양환, 조은익, 김건우) 초대 수락 확인.
2. `Settings` ➔ `Branches` ➔ `Branch protection rule` 생성 (대상: `main`):
   - [x] **Require a pull request before merging** (체크)
   - [x] **Require approvals: 1** (체크)
   - [x] **Do not allow bypassing the above settings** (체크)
   *(이를 통해 main 직접 push를 원천 차단하고 오직 1명 이상의 PR 승인으로만 머지되도록 설정합니다.)*
3. 설정 화면을 캡처하여 보관합니다.

### 0-2. 김상교 (팀장): 협업 규칙 및 연습용 기본 파일 준비 PR
1. GitHub `Issues` ➔ `New issue` 생성:
   - 제목: `[docs] 협업 규칙 CONTRIBUTING.md 및 실습 파일 준비`
   - 생성 후 발급된 **이슈 번호(예: #1)**를 기억합니다.
2. 로컬 터미널에서 준비 브랜치를 따고 파일을 생성합니다:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/retry-setup
   ```
3. 다음 파일들을 생성합니다:
   - `docs/CONTRIBUTING.md` (GitHub Flow 채택 이유 3줄, 브랜치명/커밋/PR 규칙 및 **충돌 대응 규칙: 후병합자 해결, 선병합자 확인, conflict-resolution 기록** 포함)
   - `.github/pull_request_template.md` (What/Why/How 및 Closes # 템플릿)
   - `src/practice/review-request.md` (1조 충돌 연습용 씨앗 파일):
     ```markdown
     # 리뷰 요청 실습

     리뷰 요청: PR 링크를 공유한다.
     ```
   - `src/practice/sync-timing.md` (2조 충돌 연습용 씨앗 파일):
     ```markdown
     # 동기화 시점 실습

     동기화: 원격 변경을 확인한다.
     ```
4. 커밋 및 푸시 후 PR을 생성합니다:
   ```bash
   git add .
   git commit -m "docs: 협업 가이드 CONTRIBUTING.md 및 연습용 파일 2개 준비"
   git push -u origin feature/retry-setup
   ```
5. GitHub에서 PR 생성:
   - 제목: `docs: Prepare collaboration guidelines and practice files`
   - 본문에 `Closes #1` (0-2에서 만든 이슈 번호) 기재
   - 리뷰어로 **장양환** 지정
6. **장양환**이 `Files changed` 확인 후 `Approve` ➔ 김상교가 `main`에 머지!

---

## [1단계] 내 노트 쓰고 서로 리뷰하기 (4명 동시 진행)

> **핵심**: 남이 끝날 때까지 기다리지 마세요! 4명이 각자 자기 브랜치를 파고 동시에 진행합니다.

### 1-1. 작업 Issue 생성 (각자 실행)
각자 GitHub `Issues` ➔ `New issue`를 열어 작업 이슈를 등록하고 **발급된 이슈 번호**를 확인합니다.
- 김상교: `[feat] Git 3대 작업 영역 및 기초 명령어 학습노트 작성`
- 장양환: `[feat] GitHub Flow 브랜치 전략 및 생명주기 학습노트 작성`
- 조은익: `[feat] Git 충돌 발생 원리 및 3-Way Merge 학습노트 작성`
- 김건우: `[feat] 오픈소스 협업 및 코드 리뷰 문화 학습노트 작성`

### 1-2. 브랜치 파고 노트 작성하기 (각자 실행)
```bash
git checkout main
git pull origin main
git checkout -b feature/<본인코드>-notes   # 예: feature/a-notes, feature/b-notes 등
```

각자 담당 파일 작성:
* **김상교(a)**: `notes/01-git-basics.md` (Working Tree, Index, Commit 개념 작성)
* **장양환(b)**: `notes/02-github-flow.md` (브랜치 생성부터 PR 머지까지 라이프사이클 작성)
* **조은익(c)**: `notes/03-conflict-guide.md` (충돌 발생 원인 및 마커 기호 작성)
* **김건우(d)**: `notes/04-open-source.md` (좋은 PR 작성법과 코드 리뷰 에티켓 작성)

작성 후 1차 커밋 및 푸시:
```bash
git add notes/
git commit -m "feat: Add 담당 학습노트 1차 작성"
git push -u origin feature/<본인코드>-notes
```

### 1-3. PR 생성 및 이슈 연동 (`Closes #번호`)
GitHub에서 `Compare & pull request`를 눌러 PR을 생성합니다.
* **제목**: `feat: Add 담당 학습노트 작성`
* **본문**:
  ```markdown
  ## What
  - 담당 학습노트 작성

  ## Why
  - 팀 협업 지식 공유 및 Git 개념 정립

  ## How
  - 마크다운 미리보기 및 오탈자 검증 완료

  ## 연결 Issue
  Closes #<1-1에서 확인한 본인 이슈번호>
  ```
* **리뷰어 지정**: 역할표에 따라 지정합니다.
  - 상교 PR ➔ **장양환**
  - 양환 PR ➔ **조은익**
  - 은익 PR ➔ **김건우**
  - 건우 PR ➔ **김상교**

### 1-4. 실질 리뷰 작성 및 피드백 반영 (필수 요건!)
1. **리뷰어**: 배정받은 PR의 `Files changed` 탭에서 특정 라인에 마우스를 대고 `+`를 눌러 **구체적인 개선 요청 코멘트**를 남깁니다.
   - *상교 노트 리뷰(장양환)*: `"Git 3대 영역 간의 차이를 확인할 수 있는 git diff 명령어 예시를 보완해주세요."`
   - *양환 노트 리뷰(조은익)*: `"GitHub Flow에서 main 브랜치를 안정적으로 유지해야 하는 구체적인 이유가 추가되면 좋겠습니다."`
   - *은익 노트 리뷰(김건우)*: `"충돌 마커(<<<<<<<, =======, >>>>>>>)의 각 기호 의미와 3-Way Merge 설명을 보완해 주세요."`
   - *건우 노트 리뷰(김상교)*: `"실제 팀에서 점검할 수 있는 코드 리뷰 품질 기준 체크리스트를 포함해 주세요."`
2. **작성자**: 피드백을 확인하고 로컬에서 해당 노트를 보완 수정한 뒤 **2차 커밋/푸시**합니다:
   ```bash
   # 파일 수정 후
   git add notes/
   git commit -m "docs: 리뷰 피드백 반영하여 내용 보완"
   git push origin feature/<본인코드>-notes
   ```
3. **작성자**: PR 코멘트에 `"요청하신 피드백 반영 커밋 완료했습니다!"`라고 답글 작성.
4. **리뷰어**: `Review changes` ➔ `Approve` 제출.
5. **작성자**: `Merge pull request` ➔ `Confirm merge` 클릭하여 머지 완료! (이슈 자동 종료 확인)

---

## [2단계] 짝꿍과 충돌 & 트러블슈팅 실습 (2개 조 분리)

> **조 편성**:  
> * **1조**: 김상교(A) + 장양환(B)  
> * **2조**: 조은익(C) + 김건우(D)

### 🚨 충돌 실습의 절대 규칙 (순서 보장 가이드)
충돌이 100% 나려면 **"두 사람이 같은 최신 main 커밋(SHA)에서 분기"**해야 하고, **"두 사람 모두 수정을 커밋한 것을 확인한 뒤에 선병합자가 머지"**해야 합니다! 한 명이 먼저 머지한 뒤 다른 한 명이 브랜치를 따면 충돌이 나지 않습니다.

---

### 2-1. [1조 실습] 김상교(A: amend) & 장양환(B: soft reset)

#### ① 이슈 생성 및 공통 브랜치 분기 (동시 진행)
1. 상교와 양환 각자 GitHub Issue 생성:
   - 상교: `[practice] amend 실습 및 리뷰 요청 가이드 보완`
   - 양환: `[practice] soft reset 실습 및 충돌 1 해결`
2. **두 사람 모두 최신 main으로 이동 후 브랜치 생성**:
   ```bash
   git checkout main
   git pull origin main
   # 상교 실행:
   git checkout -b feature/a-practice
   # 양환 실행:
   git checkout -b feature/b-practice
   ```

#### ② 각자의 트러블슈팅 수행 및 증빙 파일 기록
* **김상교 (`amend` 실습)**:
  ```bash
  # 1. 파일 만들고 오타 있는 메시지로 커밋
  echo "amend 실습" > src/practice/a-amend.txt
  git add src/practice/a-amend.txt
  git commit -m "커밋 오타 낫서요 (수정 전)"

  # 2. amend로 커밋 메시지 깔끔하게 수정
  git commit --amend -m "docs: amend 커밋 메시지 오타 수정 실습 기록"

  # 3. git log -1 출력 확인 후 docs/evidence/a-amend.md 작성 (전후 SHA 및 명령어 기록)
  git add docs/evidence/a-amend.md
  git commit -m "docs: amend 실습 증빙 기록 작성"
  ```
  > ⚠️ **주의 (평가 핵심 질문)**: `amend`는 오직 **아직 푸시하지 않은 로컬 커밋**에서만 써야 합니다! 만약 이미 원격에 푸시된 커밋의 메시지에 오타가 났다면, 파일 내용을 취소해 버리는 `revert`를 써선 안 되며, 이력을 그대로 유지하고 PR/Issue 코멘트나 설명으로 올바른 의도를 보완해야 합니다.
* **장양환 (`reset --soft` 실습)**:
  ```bash
  # 1. 파일 만들고 임시 커밋
  echo "reset 실습" > src/practice/b-reset.txt
  git add src/practice/b-reset.txt
  git commit -m "앗 잘못 커밋했다 (취소할 커밋)"

  # 2. soft reset으로 커밋만 취소하고 Staged 상태 유지
  git reset --soft HEAD~1

  # 3. git status로 초록색 파일 확인 후 깔끔한 메시지로 재커밋
  git commit -m "docs: reset --soft 커밋 취소 실습 기록"

  # 4. docs/evidence/b-reset.md 작성 (Staged 상태 보존 확인 기록)
  git add docs/evidence/b-reset.md
  git commit -m "docs: reset --soft 실습 증빙 기록 작성"
  ```

#### ③ `src/practice/review-request.md` 한 줄 다르게 수정하기 (둘 다 커밋!)
* **상교**: 두 번째 줄을 이렇게 고치고 커밋 & 푸시:
  `리뷰 요청: PR 링크와 변경 이유를 공유한다.`
  ```bash
  git add src/practice/review-request.md
  git commit -m "docs: review-request.md 리뷰 요청 문장 수정 (A 버전: 변경 이유)"
  git push -u origin feature/a-practice
  ```
* **양환**: **정확히 똑같은 바로 그 줄**을 이렇게 고치고 커밋 & 푸시:
  `리뷰 요청: PR 링크와 검증 결과를 공유한다.`
  ```bash
  git add src/practice/review-request.md
  git commit -m "docs: review-request.md 리뷰 요청 문장 수정 (B 버전: 검증 결과)"
  git push -u origin feature/b-practice
  ```

#### ④ 선병합 및 충돌 해결
1. **상교**가 PR 생성 (`Closes #상교이슈번호`, 리뷰어: **조은익**).  
   조은익이 코멘트 남기고 `Approve` ➔ **상교가 main에 먼저 머지!**
2. **양환**이가 자기 브랜치에서 최신 main을 당겨옵니다:
   ```bash
   git fetch origin
   git merge origin/main
   # 💥 CONFLICT 발생! (Auto-merging src/practice/review-request.md)
   ```
3. **양환**이가 `src/practice/review-request.md`를 열어 마커를 지우고 **두 의견을 모두 보존**하여 수정:
   ```markdown
   # 리뷰 요청 실습

   리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.
   ```
4. 충돌 발생 증빙 문서 `docs/evidence/conflict-ab.md` 작성 (마커 원문 및 해결 사유 기재).
5. 해결 커밋 완료 및 푸시:
   ```bash
   git add src/practice/review-request.md docs/evidence/conflict-ab.md
   git commit -m "Merge branch 'main' into feature/b-practice (충돌 해결: 변경 이유와 검증 결과 보존)"
   git push origin feature/b-practice
   ```
6. **양환**이가 PR 생성 (`Closes #양환이슈번호`, 리뷰어: **김건우**).  
   김건우가 해결 내역 확인 후 `Approve` ➔ **양환이가 main에 머지!** (1조 완료 🎉)

---

### 2-2. [2조 실습] 조은익(C: revert) & 김건우(D: stash)

#### ① 이슈 생성 및 공통 브랜치 분기 (동시 진행)
1. 은익과 건우 각자 GitHub Issue 생성:
   - 은익: `[practice] revert 실습 및 동기화 시점 가이드 보완`
   - 건우: `[practice] stash 실습 및 충돌 2 해결`
2. **두 사람 모두 최신 main으로 이동 후 브랜치 생성**:
   ```bash
   git checkout main
   git pull origin main
   # 은익 실행:
   git checkout -b feature/c-practice
   # 건우 실행:
   git checkout -b feature/d-practice
   ```

#### ② 각자의 트러블슈팅 수행 및 증빙 파일 기록
* **조은익 (`revert` 실습)**:
  ```bash
  # 1. 취소할 임시 커밋 생성 후 푸시
  echo "원격 공유 후 취소할 내용" > src/practice/c-temp.txt
  git add src/practice/c-temp.txt
  git commit -m "feat: Add temporary file for revert demonstration"
  git push origin feature/c-practice

  # 2. revert 명령어로 안전하게 취소 역커밋 생성 후 재푸시
  git revert HEAD --no-edit
  git push origin feature/c-practice

  # 3. docs/evidence/c-revert.md 작성 (원본 SHA, 역커밋 SHA, 원격 공유 이력 보존 사유)
  git add docs/evidence/c-revert.md
  git commit -m "docs: revert 실습 증빙 기록 작성"
  ```
* **김건우 (`stash` & `pop` 실습)**:
  ```bash
  # 1. 기준 파일 생성 및 추적
  echo "기준 내용" > src/practice/d-stash.txt
  git add src/practice/d-stash.txt
  git commit -m "docs: stash 실습을 위한 기준 파일 추적"

  # 2. 미완성 내용 작성
  echo "작업 중이던 미완성 내용" >> src/practice/d-stash.txt

  # 3. stash로 임시 보관
  git stash push -m "feature-d-wip" src/practice/d-stash.txt

  # 4. [중요] 다른 브랜치(main)로 전환하여 작업 트리가 깨끗해진 것 확인!
  git checkout main
  git status   # 깨끗함 확인!

  # 5. 원래 작업 브랜치로 복귀 후 복원
  git checkout feature/d-practice
  git stash pop

  # 6. 복원된 내용 커밋 및 docs/evidence/d-stash.md 작성
  git add src/practice/d-stash.txt docs/evidence/d-stash.md
  git commit -m "docs: stash/pop 실습 완료 및 증빙 기록 작성"
  ```

#### ③ `src/practice/sync-timing.md` 한 줄 다르게 수정하기 (둘 다 커밋!)
* **은익**: 두 번째 줄을 이렇게 고치고 커밋 & 푸시:
  `동기화: 작업 시작 전에 원격 변경을 확인한다.`
  ```bash
  git add src/practice/sync-timing.md
  git commit -m "docs: sync-timing.md 동기화 시점 문장 수정 (C 버전: 작업 시작 전)"
  git push -u origin feature/c-practice
  ```
* **건우**: **정확히 똑같은 바로 그 줄**을 이렇게 고치고 커밋 & 푸시:
  `동기화: PR 병합 전에 원격 변경을 확인한다.`
  ```bash
  git add src/practice/sync-timing.md
  git commit -m "docs: sync-timing.md 동기화 시점 문장 수정 (D 버전: PR 병합 전)"
  git push -u origin feature/d-practice
  ```

#### ④ 선병합 및 충돌 해결
1. **은익**이 PR 생성 (`Closes #은익이슈번호`, 리뷰어: **김상교**).  
   김상교가 코멘트 남기고 `Approve` ➔ **은익이가 main에 먼저 머지!**
2. **건우**가 자기 브랜치에서 최신 main을 당겨옵니다:
   ```bash
   git fetch origin
   git merge origin/main
   # 💥 CONFLICT 발생! (Auto-merging src/practice/sync-timing.md)
   ```
3. **건우**가 `src/practice/sync-timing.md`를 열어 마커를 지우고 **두 의견을 모두 보존**하여 수정:
   ```markdown
   # 동기화 시점 실습

   동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.
   ```
4. 충돌 발생 증빙 문서 `docs/evidence/conflict-cd.md` 작성.
5. 해결 커밋 완료 및 푸시:
   ```bash
   git add src/practice/sync-timing.md docs/evidence/conflict-cd.md
   git commit -m "Merge branch 'main' into feature/d-practice (충돌 해결: 시작 전과 병합 전 동기화 보존)"
   git push origin feature/d-practice
   ```
6. **건우**가 PR 생성 (`Closes #건우이슈번호`, 리뷰어: **장양환**).  
   장양환이 해결 내역 확인 후 `Approve` ➔ **건우가 main에 머지!** (2조 완료 🎉)

---

## [3단계] 최종 정리 및 제출 (총대: 김상교 님)

모든 실습이 머지되었으면 팀장(김상교 님)이 최종 인덱스 문서를 통합합니다.

### 3-1. 최종 통합 브랜치 생성 및 필수 문서 3종 완성
1. 이슈 생성: `[docs] 최종 평가 제출 인덱스 및 필수 종합 문서 통합`
2. 브랜치 생성:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/submission-final
   ```
3. **필수 문서 3종 및 추적 대장 완성**:
   * **`docs/CONTRIBUTING.md`**: 협업 가이드 (Flow 이유, 브랜치/커밋/PR 규칙, 충돌 해결 3대 규칙 최종 점검)
   * **`docs/conflict-resolution.md`**: 충돌 2건의 참여자, 기준 커밋, 충돌 마커, 해결 이유, 배운 점을 본문에 정리
   * **`docs/troubleshooting-log.md`**: 4종(amend, reset, revert, stash) 각각의 상황, 명령어, 전후 결과, 주의점을 본문에 정리
   * **`docs/issues.md`**: 작업 Issue 10건 전수 등록 및 What/Why/How 대장 정리
   * **`docs/pull-requests.md`**: 모의 PR 10건 본문 및 리뷰 상호작용 전수 대장 정리
4. **`README.md` 목차 최신화**:
   * `notes/01-git-basics.md` ~ `04-open-source.md` 링크 및 작성자 표시
5. **`SUBMISSION.md` 제출 인덱스 표 작성**:
   * 팀원 4명의 생성한 Issue 번호, 병합된 PR 링크(최소 2개), 작성한 리뷰 링크(최소 2개), 리뷰 피드백 반영 링크를 표로 기재
   * 필수 문서 링크 기재
6. **Git 커밋 로그 텍스트 파일 저장**:
   ```bash
   git log --oneline --graph --all > docs/git-history.txt
   ```
7. 커밋 및 푸시 후 최종 PR 생성:
   ```bash
   git add .
   git commit -m "docs: Finalize SUBMISSION.md index, README TOC, and consolidated logs"
   git push -u origin feature/submission-final
   ```
8. GitHub PR 생성 (`Closes #최종이슈번호`, 리뷰어: **김건우**).  
   김건우가 모든 링크 검토 후 `Approve` ➔ 김상교가 `main`에 최종 머지 완료! 🏆

---

## 🎯 평가 구두 질문 대비 3초 답변 요약

1. **"긴급 핫픽스가 발생하면 어떻게 대처하나요?"**
   * ➔ main에 직접 푸시하지 않고 최신 main에서 hotfix 브랜치를 파서 빠른 PR + 승인 후 머지합니다.
2. **"이미 push한 커밋을 취소할 때 왜 reset 대신 revert를 썼나요?"**
   * ➔ reset 후 force push를 하면 동료들의 로컬 이력이 깨지기 때문입니다. 이력을 투명하게 보존하면서 안전하게 취소하기 위해 revert를 사용했습니다.
3. **"충돌이 왜 났고 어떻게 해결했나요?"**
   * ➔ 두 팀원이 동일 파일의 같은 라인을 서로 다르게 수정하여 충돌이 났으며, 두 팀원의 수정 목적(이유 공유 + 결과 공유)을 모두 합쳐서 사이좋게 해결했습니다.
4. **"팀원이 실수로 의미 없는 커밋 메시지를 여러 개 push했다면 어떻게 하나요?"**
   * ➔ 이미 원격에 공유되었으므로 reset 후 강제 푸시를 하거나 파일 내용을 취소하는 revert를 쓰지 않습니다. 공유 이력을 그대로 유지하면서 Issue/PR 본문이나 코멘트에 각 커밋의 올바른 목적을 명시적으로 보완 설명합니다.
