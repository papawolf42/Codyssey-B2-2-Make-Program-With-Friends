# B2-2 재시도 상세 실행서 — 4명이 각자 따라가는 Step-by-step

작성일: 2026-09-29. 이 문서는 **실행 안내**이며, 아래 명령·리뷰·병합을 이미 수행했다는 기록이 아니다. 운영 원칙과 요건은 [0015 실행안](0015_b2-2-retry-workflow.md)을 따른다.

**읽는 방법:** 1부를 함께 확인하고, 2부 준비 후 각자의 노트와 실습을 진행한다. Step 번호는 찾기 위한 번호다. 다른 사람의 Step 번호를 기다리지 않는다. `대기 조건`이 적힌 지점에서만 상대방 상태를 확인한다.

모든 명령은 **Windows PowerShell**, 각자의 계정과 로컬 팀 저장소 기준이다. Git/GitHub 로그인은 각자가 한다. 명령 블록이 실패하면 해당 블록의 후속 명령을 실행하지 말고 마지막의 대응표를 확인한다. 새 터미널에서 중간 재개할 때는 [세션 재개](#resume)의 기존 경로·브랜치 복원 절차를 쓴다. Step 04를 다시 실행해 새 증빙 폴더를 만들지 않는다.

## 바로 찾기

- [1부: 기존 기록과 내 환경](#part-1)
- [2부: 공통 준비](#part-2)
- [3부: 개인 노트와 리뷰](#part-3)
- [4부: 두 쌍의 실습 브랜치 준비](#part-4)
- [5부: 각자의 트러블슈팅](#part-5)
- [6부: 실습 PR 생성과 두 번의 충돌](#part-6)
- [7부: 제출 문서와 최종 확인](#part-7)
- [문제가 생겼을 때](#recovery)

| 코드 | 담당자 | 개인 노트 | 노트 PR 리뷰어 | 실습 | 실습 PR 리뷰어 |
| --- | --- | --- | --- | --- | --- |
| a | 김상교 | Git 기초 | 장양환 | amend + A/B 선병합 | 조은익 |
| b | 장양환 | GitHub Flow | 조은익 | soft reset + A/B 충돌 해결 | 김건우 |
| c | 조은익 | 충돌 원리 | 김건우 | 원격 커밋 revert + C/D 선병합 | 김상교 |
| d | 김건우 | PR·리뷰 | 김상교 | stash + C/D 충돌 해결 | 장양환 |

공통 준비 PR: 김상교 작성·장양환 리뷰. 최종 통합 PR: 김상교 작성·김건우 리뷰. 대체 담당자가 작성하면 본인 이외의 리뷰어를 배정한다.

<a id="part-1"></a>
## 1부. 기존 기록과 내 환경

### Step 01 — 전원: 이번 팀 저장소를 확인한다

기본은 기존 `nick19850906-debug/mission_02_02`를 이어 쓰는 것이다. 기존 저장소 주소를 팀원 모두 확인한다. 새 저장소를 쓰기로 정했다면 그 URL을 사용하고, 이전 PR 수를 합산하지 않는다. 이 분석용 `B2-2` 폴더에서 실습 명령을 실행하지 않는다.

새 저장소인 경우 조은익이 GitHub의 `New repository`에서 팀이 정한 이름과 공개 범위를 설정하고 README를 포함해 생성한다. 팀원 초대와 보호 설정은 Step 07에서 한다. 기존 저장소를 비우거나 브랜치를 삭제할 필요는 없다.

### Step 02 — 김상교: 운영 Issue를 연다

팀 저장소 → `Issues` → `New issue`. 제목은 `B2-2 재시도 진행 및 증빙 확인`으로 한다. 본문에 아래 표를 넣는다. 이 Issue는 운영판이며, 각 작업 PR은 자기 작업 Issue를 별도로 연결한다.

```markdown
## 진행 상태
| 담당자 | 본인 merged PR | 작성한 동료 리뷰 | 본인 PR 리뷰 반영 | 노트 기여 | 실습 기록 | 다음 작업 |
| --- | --- | --- | --- | --- | --- | --- |
| 김상교 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | |
| 장양환 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | |
| 조은익 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | |
| 김건우 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | 확인 전 | |

## 공통 상태
- [ ] main 보호와 전원 접근 권한 확인
- [ ] 협업 가이드와 실습 파일 준비
- [ ] 충돌 1: 실제 기록 URL
- [ ] 충돌 2: 실제 기록 URL
- [ ] amend / soft reset / 원격 커밋 revert / stash-pop 기록
- [ ] SUBMISSION과 필수 문서, README 목차, Git 로그 확인
```

### Step 03 — 전원: 이미 완료한 증빙을 등록한다

GitHub `Pull requests`에서 `is:pr is:merged author:자신의GitHubID`로 본인 PR을 찾는다. 본인이 다른 사람 PR에 남긴 실제 리뷰의 링크, 본인 PR에 받은 피드백과 반영 커밋/답글 링크도 찾는다. 운영 Issue에 자기 행의 내용을 댓글로 제출하고 김상교가 표를 갱신한다. 지정 리뷰어가 링크를 확인한다.

**통과 기준:** 각자 병합 PR 2개, 동료 리뷰 2개, 본인 PR 반영 1회, 노트 기여 1건이 실제로 있는지 구분된다. 충족한 개인 노트 작업은 3부를 생략한다. 아직 본인 리뷰 반영이 없다면 이번 실습 PR의 실제 개선점으로 충족할 수 있다.

기존 충돌·트러블슈팅도 기록이 확인된 것만 인정한다. 필요한 실습만 선택한다. 예를 들어 충돌 1이 이미 유효하면 A/B 쌍은 충돌용 변경을 생략하고 자기 트러블슈팅만 진행할 수 있다. 다른 쌍은 자신의 계획대로 진행한다.

### Step 04 — 전원: 각자의 코드를 설정한다

아래 블록에서 자신의 코드 `a`, `b`, `c`, `d` 중 하나를 입력한다.

```powershell
$MemberCode = (Read-Host '본인 코드 a/b/c/d').Trim().ToLower()
if ($MemberCode -notin @('a','b','c','d')) { throw '코드를 다시 확인하세요.' }
$Members = @{ a='김상교'; b='장양환'; c='조은익'; d='김건우' }
$Tools = @{ a='amend'; b='reset'; c='revert'; d='stash' }
$MemberName = $Members[$MemberCode]
$ToolName = $Tools[$MemberCode]
$TeamRepoUrl = (Read-Host '팀 저장소 HTTPS URL').Trim().TrimEnd('/') -replace '\.git$',''
$RunId = Get-Date -Format 'yyyyMMdd-HHmmss'
$EvidenceRoot = Join-Path ([System.IO.Path]::GetTempPath()) "b2-2-$MemberCode-$RunId"
New-Item -ItemType Directory -Path $EvidenceRoot | Out-Null
Write-Output "담당자: $MemberName / 증빙 임시 경로: $EvidenceRoot"
```

증빙 폴더는 저장소 바깥에 있으므로 Git 실습 중 사라지지 않는다. 임시 폴더의 실제 출력은 5부에서 저장소 문서로 옮긴다. 임시 폴더만 남기고 제출하지 않는다.

### Step 05 — 전원: 팀 저장소로 이동한다

**이미 로컬 복제본이 있다면** 그 경로로 이동한다.

```powershell
$RepoPath = Read-Host '실제 팀 저장소의 로컬 폴더 절대 경로'
Set-Location -LiteralPath $RepoPath
git rev-parse --show-toplevel
git remote get-url origin
git status --short
```

**복제본이 없다면** 아직 존재하지 않는 새 폴더 경로를 사용한다.

```powershell
$RepoPath = Read-Host '새로 복제할 로컬 폴더 절대 경로'
if (Test-Path -LiteralPath $RepoPath) { throw '기존 폴더입니다. 다른 새 경로를 쓰세요.' }
git clone $TeamRepoUrl $RepoPath
if ($LASTEXITCODE -ne 0) { throw 'clone 실패. 로그인과 저장소 주소를 확인하세요.' }
Set-Location -LiteralPath $RepoPath
git remote get-url origin
git status --short
```

**통과 기준:** `origin`이 팀 저장소이며, `git status --short`가 비어 있다. 수정 중인 파일이 있으면 먼저 해당 작업을 보존·정리하고 돌아온다. 정리 목적으로 `reset --hard`를 사용하지 않는다.

### Step 06 — 전원: 본인 작성자 정보와 도구를 확인한다

```powershell
git --version
$PSVersionTable.PSVersion
git config user.name
git config user.email
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패. 연결을 확인하세요.' }
git branch --show-current
```

작성자 정보가 없거나 다른 사람이라면 **본인 정보**를 이 저장소에만 설정한다.

```powershell
git config --local user.name (Read-Host '본인 Git 작성자 이름')
git config --local user.email (Read-Host '본인 GitHub 연결 이메일 또는 noreply 이메일')
```

<a id="part-2"></a>
## 2부. 공통 준비 — 준비된 항목은 확인하고 생략

### Step 07 — 조은익: 권한과 보호를 확인한다

GitHub `Settings`의 Collaborators/접근 관리에서 세 팀원의 초대 수락을 확인한다. 기본 브랜치가 `main`인지 확인한다. 브랜치 보호 설정에서 main에 PR 경유 병합과 최소 1명 승인을 요구하고, 소유자 우회도 팀 운영 규칙에 맞게 차단한다. UI 이름은 저장소 설정 방식에 따라 달라질 수 있으므로 적용 대상이 main인지 확인한다.

설정 화면 또는 조회 결과를 증빙으로 남기고 운영 Issue에 연결한다. 준비 PR에서 승인이 없을 때 병합 조건이 충족되지 않는지도 확인한다. 보호 여부를 확인하기 위한 main 직접 push 실험은 생략한다.

### Step 08 — 김상교: 준비 Issue를 만든다

제목: `재시도 협업 규칙과 실습 기본 파일 준비`.

```markdown
## What
- 협업 가이드의 누락 보완, PR 템플릿과 실습 기본 파일 준비
## Why
- 개인 작업은 독립적으로, 충돌 실습은 정한 두 파일에서 수행하기 위해
## How
- 팀원 권한·보호 설정, 문서 내용과 파일 경로를 동료가 확인
## 분담
- 김상교: 브랜치·커밋 규칙
- 장양환: Issue·PR 규칙
- 조은익: 충돌 대응
- 김건우: 리뷰·응답 규칙
```

각 팀원은 맡은 절의 실제 문구를 이 Issue에 댓글로 작성한다. 김상교는 문구와 댓글 링크를 가이드에 합친다. 기존 가이드에 해당 내용과 분담 근거가 이미 있으면 재작성하지 않는다.

### Step 09 — 김상교: 준비 브랜치를 만든다

```powershell
if (git status --porcelain) { throw '진행 중인 파일을 먼저 정리하세요.' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
$SetupBranch = "feature/retry-setup-$RunId"
git switch -c $SetupBranch origin/main
if ($LASTEXITCODE -ne 0) { throw '브랜치 생성 실패' }
```

### Step 10 — 김상교: 공통 파일을 준비한다

필요한 폴더를 만든다. 기존 파일은 보존한다.

```powershell
New-Item -ItemType Directory -Force -Path 'docs','docs/evidence','notes','src/practice','.github' | Out-Null
$SeedFiles = @{
    'src/practice/review-request.md' = "# 리뷰 요청 실습`n`n리뷰 요청: PR 링크를 공유한다.`n"
    'src/practice/sync-timing.md' = "# 동기화 시점 실습`n`n동기화: 원격 변경을 확인한다.`n"
}
foreach ($entry in $SeedFiles.GetEnumerator()) {
    if (Test-Path -LiteralPath $entry.Key) {
        Write-Output "기존 파일을 확인하세요: $($entry.Key)"
        Get-Content -LiteralPath $entry.Key
    } else {
        Set-Content -LiteralPath $entry.Key -Value $entry.Value -Encoding utf8
    }
}
```

두 쌍이 새 충돌을 실습한다면 4부 진입 전에 각각의 기본 문장을 위 표와 일치시키는 준비 변경을 리뷰받는다. 기존 충돌 증빙은 별도 보존한다.

`docs/CONTRIBUTING.md`를 열어 다음 항목을 채운다. 이미 있는 규칙과 충돌하는 새 규칙을 덧붙이지 말고 하나로 정리한다.

```markdown
# 협업 가이드
## GitHub Flow를 선택한 이유
- 개인 작업을 작업 단위 브랜치에서 독립적으로 진행한다.
- PR에서 서로 변경 내용을 확인하고 main에 합친다.
- main은 읽을 수 있는 문서와 유효한 링크를 유지한다.
## 브랜치
- main은 보호하고 feature/<담당자>-<작업>을 사용한다.
## 커밋
- 무엇을 위해 바꿨는지 구체적으로 적는다. update/fix만 적지 않는다.
## Issue와 PR
- 작업별 Issue, PR 본문 What/Why/How와 Closes #실제번호.
- 본인 이외 최소 1명의 승인 후 merge commit으로 병합한다.
## 리뷰
- 모든 PR에 파일 근거가 있는 실질 코멘트와 작성자 응답/수정을 남긴다.
- 수정 후 최종 diff를 확인하고 승인한다.
## 충돌
- PR/Issue로 상황 공유 → 담당 쌍이 원인·해결 판단 → 기록을 검토 후 병합.
- 기록은 docs/conflict-resolution.md에 통합한다.
## 작성 분담
- 실제 담당자와 준비 Issue의 분담 댓글 링크를 적는다.
```

이 문구는 초안이다. Step 08에서 팀원들이 직접 쓴 내용을 반영한다. 팀에서 Lore 형식을 적용한다면 의도 중심 첫 줄과 필요한 trailer 규칙을 커밋 절에 함께 적는다.

### Step 11 — 김상교: PR 템플릿을 준비하고 변경을 확인한다

`.github/pull_request_template.md`가 없다면 아래 내용으로 만든다. 기존 템플릿이 있다면 빠진 항목만 추가한다.

```markdown
## What

## Why

## How
- 실제 확인한 방법과 결과:

## 연결 Issue
Closes #실제번호

## 증빙
- 필요한 경우 실제 리뷰·실습 기록 링크:
```

아직 실습하지 않은 종합 문서는 이 단계에서 없어도 된다. 최종 통합에서 완성한다. 생성한 파일과 변경만 확인한다.

```powershell
git diff
git status --short
git add docs/CONTRIBUTING.md .github/pull_request_template.md src/practice/review-request.md src/practice/sync-timing.md
if ($LASTEXITCODE -ne 0) { throw '파일 경로를 확인하세요.' }
git diff --cached
```

변경이 없으면 빈 준비 커밋을 만들지 않는다. 준비 요건이 충족되었음을 운영 Issue에 표시하고 3부로 간다. 변경이 있으면 커밋한다.

```powershell
git commit -m '독립 작업과 충돌 실습을 함께 진행할 협업 기준을 마련한다'
if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
git push -u origin $SetupBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
```

### Step 12 — 김상교·장양환: 준비 PR을 만들고 병합한다

GitHub `Pull requests` → `New pull request` → base `main`, compare 준비 브랜치. Step 08 Issue의 **실제 번호**로 `Closes`를 채운다. What/Why/How는 이번 diff와 수행한 확인을 적는다. 장양환을 reviewer로 지정한다.

장양환은 `Files changed`에서 가이드·실습 파일·템플릿을 확인하고 구체적인 질문/개선점을 남긴다. 김상교가 답하거나 수정한 뒤 장양환이 `Review changes` → `Approve`한다. 최종 diff를 확인하고 `Merge pull request` → `Confirm merge`한다.

**대기 조건 G0:** 필요한 설정과 공통 파일이 main에 준비됐다. 이제 네 사람이 3부를 동시에 시작한다. 이미 요건이 준비돼 있으면 준비 PR을 새로 만들지 않아도 된다.

<a id="part-3"></a>
## 3부. 개인 노트 — 전원 병렬

### Step 13 — 각자: 노트 작업이 필요한지 확인한다

Step 03에서 노트와 개인 기여가 충분하다고 확인되었으면 이 부를 생략한다. 새 노트가 필요하면 아래 주제로 작성한다. 기존 노트 보완이 필요하면 실제 부족한 설명·예시를 작업 범위로 정한다.

| 사람 | 기본 파일 | 본인이 작성하고 확인할 내용 |
| --- | --- | --- |
| 김상교 | `notes/01-git-basics.md` | working tree/index/commit을 구분하고 add 전후 차이를 예시로 설명 |
| 장양환 | `notes/02-github-flow.md` | Issue → feature → PR → 리뷰 → 병합, main 안정성의 이유 |
| 조은익 | `notes/03-conflict-guide.md` | 공통 조상과 두 변경, 충돌 마커의 의미, 둘 다 보존할 때의 판단 |
| 김건우 | `notes/04-open-source.md` | 리뷰 요청에 필요한 정보, 파일 근거 코멘트, 응답·수정·재확인 |

이미 이동된 노트는 실제 경로를 사용한다. `advanced/`로 옮겨진 파일을 원래 경로에 중복 생성하지 않는다.

### Step 14 — 각자: Issue를 만든다

GitHub `Issues` → `New issue`. 제목은 `담당 주제의 학습 노트 작성/보완`. 본문은 아래 구조로 구체화한다.

```markdown
## What
- 대상 파일과 작성/수정할 내용:
## Why
- 현재 부족한 설명 또는 필요한 학습 내용:
## How
- 문서 미리보기, 예시 확인, 동료의 설명 재현:
```

Issue가 생성된 뒤 주소 끝의 번호를 기록한다. 다른 사람이 동시에 만든 Issue 때문에 번호가 달라도 그대로 사용한다.

### Step 15 — 각자: 자기 노트 브랜치를 만든다

```powershell
if (git status --porcelain) { throw '작업 트리를 먼저 정리하세요.' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
$NoteBranch = "feature/retry-$MemberCode-notes-$RunId"
git switch -c $NoteBranch origin/main
if ($LASTEXITCODE -ne 0) { throw '브랜치 생성 실패' }
$NotePath = Read-Host '본인 노트 상대 경로(예: notes/01-git-basics.md)'
```

### Step 16 — 각자: 자기 노트만 작성한다

아래 블록은 새 노트의 시작 내용을 제공한다. 기존 파일이 있으면 출력해서 읽고, 필요한 보완만 편집기로 반영한다.

```powershell
$NoteDrafts = @{
    a = @'
# Git 기초: 작업 파일, 스테이징, 커밋

## 세 영역
- Working tree: 지금 편집하는 파일의 상태다.
- Index: 다음 커밋에 넣을 내용을 준비하는 영역이다.
- Commit: 준비한 내용을 기록한 스냅샷이다.

## 변경 확인 예시
추적 중인 파일을 수정한 뒤 `git diff`로 아직 스테이징하지 않은 변경을 본다.
`git add 파일경로` 후 `git diff --cached`로 커밋에 들어갈 변경을 본다.
add한 뒤 파일을 다시 수정하면 staged 변경과 unstaged 변경이 동시에 있을 수 있다.

## 협업에서의 활용
커밋 전에 staged diff를 읽어 이번 작업에 필요한 변경만 포함됐는지 확인한다.
커밋 메시지는 변경의 대상과 목적을 설명하고, 리뷰어는 PR에서 그 의도를 확인한다.
'@
    b = @'
# GitHub Flow: 작업에서 병합까지

## 작업 흐름
작업 Issue를 만들고 main에서 feature 브랜치를 나눈다.
커밋과 push 후 PR을 열고 동료의 검토를 받는다.
질문에 답하거나 내용을 수정한 뒤 승인을 받아 main에 병합한다.

## main을 안정적으로 유지하는 이유
다른 사람이 새 작업을 시작할 수 있는 공통 기준이기 때문이다.
이 문서 프로젝트에서는 문서가 열리고 목차 링크가 유효한 상태를 안정 상태로 정한다.

## Issue와 PR
Issue에는 해결할 일을, PR에는 실제 변경과 이유·검증 결과를 적는다.
기본 브랜치로 병합하는 PR의 `Closes #실제번호`로 작업과 결과를 연결한다.
독립적인 파일 작업은 서로 다른 feature 브랜치에서 동시에 진행할 수 있다.
'@
    c = @'
# Git 충돌: 서로 다른 변경을 통합하는 판단

## 충돌이 발생하는 상황
공통 기준에서 나뉜 두 브랜치가 같은 파일의 같은 구간을 다르게 바꾸면
Git이 자동으로 합치지 못해 사람의 판단이 필요할 수 있다.

## 마커 읽기
현재 브랜치에서 `git merge origin/main`을 한 상황을 기준으로 읽는다.
`<<<<<<< HEAD` 쪽은 현재 브랜치, `=======`는 경계,
`>>>>>>> origin/main` 쪽은 가져온 변경을 나타낸다.
실제 표기와 파일은 명령 출력으로 확인한다.

## 해결 기준
마커를 지우기 전에 두 변경의 목적을 확인하고 필요한 내용을 보존한다.
해결 후 파일 상태를 검토하고, 어떤 내용을 선택했는지와 이유를 기록한다.
같은 곳의 충돌이 반복되면 작업 범위와 동기화 시점을 함께 조정한다.
'@
    d = @'
# PR과 리뷰: 서로 확인할 수 있는 변경 만들기

## PR 작성
What에는 변경한 내용, Why에는 필요한 이유, How에는 실제 확인 방법과 결과를 적는다.
작업 Issue를 연결하고 한 PR의 범위를 동료가 이해할 수 있게 설명한다.

## 리뷰 작성
특정 파일이나 문장을 근거로 질문, 대안, 빠진 조건을 제시한다.
예를 들어 실행 예시에 초기 상태가 없다면 어떤 상태에서 재현하는지 질문할 수 있다.
좋다는 말만 적기보다 무엇을 확인했는지와 검토 이유를 남긴다.

## 피드백 반영
작성자는 질문에 근거를 들어 답하거나 필요한 내용을 수정한다.
수정 커밋을 같은 PR에 올리고 코멘트에 연결한다.
리뷰어는 답변과 최종 변경을 다시 읽고 승인한다.
'@
}
if (Test-Path -LiteralPath $NotePath) {
    Get-Content -LiteralPath $NotePath
    Write-Output '기존 파일입니다. 위 초안과 비교해 필요한 부분만 직접 보완하세요.'
} else {
    $NoteParent = Split-Path -Parent $NotePath
    if ($NoteParent) { New-Item -ItemType Directory -Force -Path $NoteParent | Out-Null }
    Set-Content -LiteralPath $NotePath -Value $NoteDrafts[$MemberCode] -Encoding utf8
}
```

파일을 읽고 자신이 설명할 수 있는 예시를 추가한다. 초안은 개념 설명이며 본인의 실습 완료 증빙은 아니다. 예상 출력은 예상이라고 적고, 실제 출력은 실행한 뒤 기록한다. Markdown 미리보기와 예시를 확인한다. README 목차는 최종 통합에서 갱신하므로 여기서는 수정하지 않는다.

### Step 17 — 각자: 변경을 커밋·push한다

```powershell
git diff -- $NotePath
git add -- $NotePath
if ($LASTEXITCODE -ne 0) { throw '노트 경로를 확인하세요.' }
git diff --cached
$CommitReason = Read-Host '무엇을 이해/해결할 수 있게 하는 변경인지 구체적으로 입력'
git commit -m $CommitReason
if ($LASTEXITCODE -ne 0) { throw '커밋 실패 또는 변경 없음' }
git push -u origin $NoteBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
```

### Step 18 — 각자: PR을 만든다

GitHub `Pull requests` → `New pull request` → base `main`, compare 본인 노트 브랜치. 본문 What/Why/How를 실제 변경과 확인 결과로 채우고 `Closes #실제Issue번호`를 적는다. 맨 위 표의 노트 PR 리뷰어를 지정한다. 운영 Issue에 PR URL을 댓글로 남긴다.

**기대 결과:** 네 PR이 동시에 열려 있어도 정상이다. 자신의 번호를 맞추려고 다른 사람의 Issue/PR 생성을 기다리지 않는다.

### Step 19 — 리뷰어: 파일을 읽고 실질 코멘트를 남긴다

자기에게 배정된 PR → `Files changed`. 구체적인 줄에서 `+`를 눌러 질문 또는 개선점을 작성한다. 확인할 수 있는 근거를 포함한다. 예를 들어 예시의 전후 상태가 빠졌는지, 용어 설명이 실제 명령과 맞는지를 확인한다. 모든 사람에게 복사할 동일한 코멘트를 사용하지 않는다.

수정이 필요하면 `Request changes`, 질문이라면 `Comment` 등 상황에 맞는 방식으로 제출한다. 버튼 선택 자체가 평가 목표는 아니다.

### Step 20 — 작성자: 답하거나 실제 개선을 반영한다

PR 코멘트에 근거를 들어 답한다. 파일 수정이 필요하면 본인 브랜치에서 수정하고 아래처럼 추가 커밋한다.

```powershell
git branch --show-current
git diff -- $NotePath
git add -- $NotePath
git commit -m (Read-Host '리뷰를 반영해 어떤 설명을 명확히 했는지 입력')
if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
git push origin $NoteBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
```

같은 PR이 갱신되는지 확인하고, 코멘트에 반영 커밋 URL과 바꾼 내용을 답한다. 파일 변경이 필요 없었다면 같은 명령을 실행하지 말고 기술적인 근거로 응답한다. 본인 반영 요건은 단순 감사/미래 약속이 아닌 실제 내용으로 확인한다.

### Step 21 — 리뷰어·작성자: 승인 후 병합한다

리뷰어는 최종 diff와 답글을 읽고 `Review changes` → `Approve`. 작성자는 승인 조건과 충돌 여부를 확인한 뒤 `Merge pull request` → `Confirm merge`. Issue가 자동으로 닫혔는지도 확인한다. `Squash and merge` 대신 이번 설계에서 정한 merge commit 방식을 쓴다.

### Step 22 — 각자: 기록하고 다음 작업으로 간다

운영 Issue에 병합 PR URL, 본인이 작성한 동료 리뷰 URL, 본인 PR의 리뷰 반영 링크, 노트 기여 커밋을 남긴다. 자신의 노트 작업이 끝나면 다음 실습을 준비한다. 다른 쌍의 노트 완료를 기다릴 필요는 없다.

<a id="part-4"></a>
## 4부. 실습 브랜치 준비 — A/B와 C/D는 서로 독립

### Step 23 — 각자: 실습 Issue를 만든다

제목 예시: `김상교 amend 실습과 리뷰 요청 문장 보완`. 자기 도구·파일·역할에 맞게 바꾼다. 내용에는 사용할 도구, 개인 증빙 경로, 충돌 쌍/대상 파일, 완료 확인 방법을 넣는다. 노트 Issue와 별개의 실제 번호를 사용한다.

충돌은 이미 충분하고 도구만 부족하면 충돌 작업을 빼고 적는다. 반대로 특정 도구는 이미 충분하면 그 실습을 재수행하지 않고 검증된 기록을 연결한다.

### Step 24 — 각 쌍: 공통 기준 커밋을 정한다

A/B 또는 C/D 두 사람만 서로 준비 상태를 확인한다. 각자의 미커밋 변경을 정리한 뒤 fetch한다. 선병합자 A/C가 main의 SHA를 Issue 댓글에 기록하고 상대방에게 전달한다.

```powershell
if (git status --porcelain) { throw '작업 트리가 깨끗해야 합니다.' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
git rev-parse origin/main
```

동시에 다른 PR이 병합되더라도 두 사람은 **Issue에 기록한 하나의 SHA**를 쓴다. 각자 다시 읽은 최신 main이 서로 다른 상태로 분기하지 않는다. 충돌을 생략하고 자기 도구만 수행하는 사람은 자기 fetch 시점의 main을 기준으로 삼는다.

### Step 25 — 각자: 지정 SHA에서 실습 브랜치를 만든다

```powershell
$PairBase = (Read-Host 'Issue에 기록한 기준 커밋 SHA').Trim()
git show --no-patch --oneline $PairBase
if ($LASTEXITCODE -ne 0) { throw '기준 SHA를 확인하세요.' }
$PracticeBranch = "feature/retry-$MemberCode-practice-$RunId"
git switch -c $PracticeBranch $PairBase
if ($LASTEXITCODE -ne 0) { throw '브랜치 생성 실패' }
$RecoveryPath = "src/practice/$MemberCode-recovery.txt"
$EvidenceFile = "docs/evidence/$MemberCode-$ToolName.md"
New-Item -ItemType Directory -Force -Path 'src/practice','docs/evidence' | Out-Null
if (Test-Path -LiteralPath $RecoveryPath) { $RecoveryPath = "src/practice/$MemberCode-recovery-$RunId.txt" }
if (Test-Path -LiteralPath $EvidenceFile) { $EvidenceFile = "docs/evidence/$MemberCode-$ToolName-$RunId.md" }
Write-Output "새로 실습할 경우 사용할 경로: $RecoveryPath / $EvidenceFile"
```

### Step 26 — 각자: 자기 도구 실습부터 진행한다

지금은 충돌용 공통 문장을 아직 수정하지 않는다. 5부에서 자기 도구를 수행하고 기록을 커밋한 뒤 6부에서 공통 문장을 수정한다. A/B는 amend/reset을 마치기 전에 실습 커밋을 push하지 않는다. 도구 증빙이 이미 검증됐다면 기존 기록 경로를 운영 Issue에 연결하고 5부 전체를 생략한다. Step 25에서 정한 새 경로에 빈 파일을 만들지 않는다.

<a id="part-5"></a>
## 5부. 자기 도구 실습과 기록

아래에서 **자기 이름의 두 Step만** 수행한다. 도구 실습이 이미 검증된 사람은 기존 기록을 유지하고 6부의 필요한 작업으로 이동한다. 명령 출력은 임시 증빙 폴더에 저장된다. 문서에는 출력뿐 아니라 실제 실행한 명령과 해석도 적는다.

### Step 27 — 김상교: amend 전후 상태를 만든다

최신 개인 커밋의 메시지를 원격 공유 전에 수정하는 실습이다. 다른 사람 커밋이나 이미 push한 커밋에 적용하지 않는다.

```powershell
& {
    if ($MemberCode -ne 'a') { throw '김상교의 단계입니다.' }
    if ((git branch --show-current) -ne $PracticeBranch) { throw '실습 브랜치를 확인하세요.' }
    if (git status --porcelain) { throw '작업 트리가 깨끗해야 합니다.' }
    $LogPath = Join-Path $EvidenceRoot 'a-amend.txt'
    "실습: amend / 브랜치: $PracticeBranch" | Tee-Object -FilePath $LogPath
    Set-Content -LiteralPath $RecoveryPath -Value 'amend 메시지 수정 실습' -Encoding utf8
    git add -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '파일 추가 실패' }
    git commit -m '메시지 수정 전 비교할 실습 기록을 남긴다' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
    $OriginalCommit = (git rev-parse HEAD).Trim()
    git show -s --format=fuller HEAD | Tee-Object -FilePath $LogPath -Append
    git commit --amend -m 'amend 전후 메시지와 해시를 비교할 근거를 남긴다' 2>&1 |
        Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw 'amend 실패' }
    $AmendedCommit = (git rev-parse HEAD).Trim()
    git show -s --format=fuller HEAD | Tee-Object -FilePath $LogPath -Append
    git diff --exit-code $OriginalCommit $AmendedCommit -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '메시지 수정 중 파일 내용도 달라졌습니다.' }
    if ($OriginalCommit -eq $AmendedCommit) { throw '해시가 바뀌지 않았습니다.' }
    "확인: 파일 내용 동일 / 이전 $OriginalCommit / 이후 $AmendedCommit" |
        Tee-Object -FilePath $LogPath -Append
    git status --short --branch | Tee-Object -FilePath $LogPath -Append
}
```

### Step 28 — 김상교: 결과를 확인하고 Step 35로 간다

**기대 결과:** 파일은 같고 커밋 메시지와 해시가 바뀐다. 작업 트리는 깨끗하다. 수정 전후 `git show` 출력이 `a-amend.txt`에 남는다. 아직 push하지 않는다. Step 35에서 기록을 작성한다.

### Step 29 — 장양환: soft reset으로 커밋을 취소한다

바로 앞에서 만든 로컬 실습 커밋 한 개만 취소하고 변경이 staged 상태에 남는지 확인한다.

```powershell
& {
    if ($MemberCode -ne 'b') { throw '장양환의 단계입니다.' }
    if ((git branch --show-current) -ne $PracticeBranch) { throw '실습 브랜치를 확인하세요.' }
    if (git status --porcelain) { throw '작업 트리가 깨끗해야 합니다.' }
    $LogPath = Join-Path $EvidenceRoot 'b-reset.txt'
    "실습: reset --soft / 브랜치: $PracticeBranch" | Tee-Object -FilePath $LogPath
    $BaseCommit = (git rev-parse HEAD).Trim()
    Set-Content -LiteralPath $RecoveryPath -Value 'soft reset 변경 보존 실습' -Encoding utf8
    git add -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '파일 추가 실패' }
    git commit -m '로컬 커밋 취소 전 비교할 기록을 남긴다' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
    $OriginalCommit = (git rev-parse HEAD).Trim()
    git show --format=fuller --stat HEAD | Tee-Object -FilePath $LogPath -Append
    git reset --soft HEAD~1 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw 'soft reset 실패' }
    $ResetHead = (git rev-parse HEAD).Trim()
    if ($ResetHead -ne $BaseCommit) { throw 'HEAD가 예상 기준과 다릅니다.' }
    "취소 전 $OriginalCommit / 취소 후 $ResetHead" | Tee-Object -FilePath $LogPath -Append
    git status --short | Tee-Object -FilePath $LogPath -Append
    git diff --cached -- $RecoveryPath | Tee-Object -FilePath $LogPath -Append
    git diff --cached --exit-code $OriginalCommit -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '스테이징 내용이 원래 커밋과 다릅니다.' }
    '확인: HEAD는 이동했고 파일 변경은 스테이징에 유지됨' | Tee-Object -FilePath $LogPath -Append
    git commit -m '커밋 취소 후 보존한 변경을 다시 기록한다' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '재커밋 실패' }
    git show --format=fuller --stat HEAD | Tee-Object -FilePath $LogPath -Append
    git status --short --branch | Tee-Object -FilePath $LogPath -Append
}
```

### Step 30 — 장양환: 결과를 확인하고 Step 35로 간다

**기대 결과:** reset 직후 HEAD가 이전 커밋을 가리키며 파일 내용은 staged 상태다. `git status --short` 첫 번째 열의 `A`와 `git diff --cached`를 확인한다. 이후 재커밋하여 작업 트리를 깨끗하게 했다. 원본·reset 직후·재커밋 결과가 `b-reset.txt`에 남는다.

### Step 31 — 조은익: 원본을 push한 뒤 revert한다

이 단계는 실제로 자기 feature 브랜치에 두 번 push한다. 원본 push가 실패하면 뒤의 revert를 진행하지 않는다. 충돌용 공통 파일은 건드리지 않으며, 새 개인 예시 파일을 추가한 일반 커밋만 취소한다.

```powershell
& {
    if ($MemberCode -ne 'c') { throw '조은익의 단계입니다.' }
    if ((git branch --show-current) -ne $PracticeBranch) { throw '실습 브랜치를 확인하세요.' }
    if (git status --porcelain) { throw '작업 트리가 깨끗해야 합니다.' }
    $LogPath = Join-Path $EvidenceRoot 'c-revert.txt'
    "실습: revert / 브랜치: $PracticeBranch" | Tee-Object -FilePath $LogPath
    $BeforeCommit = (git rev-parse HEAD).Trim()
    Set-Content -LiteralPath $RecoveryPath -Value '원격 공유 후 취소할 실습 문장' -Encoding utf8
    git add -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '파일 추가 실패' }
    git commit -m '공유한 변경을 취소하는 실습의 원본을 남긴다' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
    $OriginalCommit = (git rev-parse HEAD).Trim()
    git show --format=fuller --stat HEAD | Tee-Object -FilePath $LogPath -Append
    git push -u origin HEAD 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '원본 push 실패. 여기서 중단하세요.' }
    '원본 push 후 원격 추적 브랜치:' | Tee-Object -FilePath $LogPath -Append
    git rev-parse "origin/$PracticeBranch" | Tee-Object -FilePath $LogPath -Append
    git revert --no-commit $OriginalCommit 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw 'revert 실패. 현재 상태를 먼저 확인하세요.' }
    git diff --cached -- $RecoveryPath | Tee-Object -FilePath $LogPath -Append
    git commit -m '공유 이력을 보존하며 실습 변경을 취소한다' -m "Reverts: $OriginalCommit" 2>&1 |
        Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '취소 커밋 실패' }
    $RevertCommit = (git rev-parse HEAD).Trim()
    git push origin HEAD 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '취소 커밋 push 실패' }
    git log -3 --format=fuller | Tee-Object -FilePath $LogPath -Append
    git diff --exit-code $BeforeCommit HEAD -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '원래 파일 상태로 복구되지 않았습니다.' }
    "원본: $TeamRepoUrl/commit/$OriginalCommit" | Tee-Object -FilePath $LogPath -Append
    "역커밋: $TeamRepoUrl/commit/$RevertCommit" | Tee-Object -FilePath $LogPath -Append
    '확인: 원본과 역커밋을 보존하고 파일 상태를 복구함' | Tee-Object -FilePath $LogPath -Append
}
```

### Step 32 — 조은익: 원격 기록을 확인하고 Step 35로 간다

**기대 결과:** GitHub에서 원본과 역커밋 URL이 모두 열린다. 새로 추가했던 개인 실습 파일은 revert로 없어졌고, 이전 커밋은 삭제되지 않았다. `--no-commit`은 취소 변경을 먼저 만든 뒤 이유가 드러나는 메시지로 커밋하기 위해 사용했다. 이 두 커밋을 포함한 같은 브랜치로 Step 38의 PR을 만든다.

### Step 33 — 김건우: 추적 파일을 stash하고 돌아와 복구한다

실습 기준 파일을 먼저 커밋해 Git이 추적하게 만든다. 작성 중 변경을 보관한 뒤 main으로 갔다가 원래 브랜치로 돌아온다. main에서는 파일을 수정하거나 커밋하지 않는다.

```powershell
& {
    if ($MemberCode -ne 'd') { throw '김건우의 단계입니다.' }
    if ((git branch --show-current) -ne $PracticeBranch) { throw '실습 브랜치를 확인하세요.' }
    if (git status --porcelain) { throw '작업 트리가 깨끗해야 합니다.' }
    $LogPath = Join-Path $EvidenceRoot 'd-stash.txt'
    "실습: stash / 브랜치: $PracticeBranch" | Tee-Object -FilePath $LogPath
    Set-Content -LiteralPath $RecoveryPath -Value 'stash 복구 비교용 기준 내용' -Encoding utf8
    git add -- $RecoveryPath
    if ($LASTEXITCODE -ne 0) { throw '기준 파일 추가 실패' }
    git commit -m '추적 파일의 임시 보관과 복구를 비교할 기준을 마련한다' 2>&1 |
        Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '기준 커밋 실패' }
    Add-Content -LiteralPath $RecoveryPath -Value '브랜치 전환 후 되살릴 작성 중 내용' -Encoding utf8
    $BeforeStash = Get-Content -LiteralPath $RecoveryPath -Raw
    git diff -- $RecoveryPath | Tee-Object -FilePath $LogPath -Append
    git stash push -m '브랜치 전환 실습' -- $RecoveryPath 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw 'stash 실패' }
    $SavedStash = (git rev-parse refs/stash).Trim()
    "보관한 stash: $SavedStash" | Tee-Object -FilePath $LogPath -Append
    git status --short --branch | Tee-Object -FilePath $LogPath -Append
    git switch main 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw 'main 전환 실패' }
    git branch --show-current | Tee-Object -FilePath $LogPath -Append
    git switch $PracticeBranch 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '원래 브랜치 복귀 실패' }
    if ((git rev-parse refs/stash).Trim() -ne $SavedStash) { throw 'stash 순서가 달라졌습니다.' }
    git stash pop 'stash@{0}' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '복원 실패. 파일과 stash 상태를 확인하세요.' }
    if ((Get-Content -LiteralPath $RecoveryPath -Raw) -cne $BeforeStash) { throw '복원 내용이 다릅니다.' }
    git diff -- $RecoveryPath | Tee-Object -FilePath $LogPath -Append
    '확인: 브랜치 복귀 후 작성 중 내용이 동일하게 복원됨' | Tee-Object -FilePath $LogPath -Append
    git add -- $RecoveryPath
    git commit -m '브랜치 전환 후 복구한 실습 내용을 남긴다' 2>&1 | Tee-Object -FilePath $LogPath -Append
    if ($LASTEXITCODE -ne 0) { throw '복구 내용 커밋 실패' }
}
```

### Step 34 — 김건우: 상태를 확인하고 Step 35로 간다

**기대 결과:** stash 후 작업 변경이 보관되었고, main을 거쳐 원래 브랜치에 돌아온 뒤 동일한 내용이 복원됐다. 복원한 내용까지 커밋해 작업 트리가 깨끗하다. 기본 stash는 미추적 파일을 포함하지 않으므로 이 실습은 먼저 파일을 추적하게 만들었다.

### Step 35 — 각자: 실행 결과를 자기 기록 파일로 옮긴다

자기 도구 실습을 마치고 작업 트리가 깨끗한지 확인한다. 새 증빙 파일에는 상황·명령·전후 상태·선택 이유를 적고 실제 터미널 로그를 함께 넣는다.

```powershell
$RawLogPath = Join-Path $EvidenceRoot "$MemberCode-$ToolName.txt"
if (-not (Test-Path -LiteralPath $RawLogPath)) { throw '실습 로그 경로를 확인하세요.' }
$RecordHeader = @"
# $MemberName - $ToolName 실습

## 참여자와 작업
- 수행·기록: $MemberName
- Issue/PR: 실제 URL 입력
- Git 버전과 셸: 실제 버전 입력

## 상황과 재현 조건
기준 브랜치/SHA, 대상 파일의 초기 내용, 문제 상황을 적는다.

## 명령과 결과
아래 실제 로그의 명령 순서, 전후 파일/HEAD/index 변화와 결과를 설명한다.

## 선택 이유와 주의점
이 명령을 선택한 이유, 원격 공유 전후의 차이를 적는다.

## 증빙
원본/결과 커밋 URL을 적는다. amend/reset으로 사라진 이전 상태는 아래 로그로 확인한다.
"@
@($RecordHeader, '', '```text', (Get-Content -LiteralPath $RawLogPath -Raw), '```') |
    Set-Content -LiteralPath $EvidenceFile -Encoding utf8
```

기록 파일을 열어 안내 문장을 **자기 실제 내용**으로 바꾼다. C는 원본 push 성공과 원본·역커밋 URL을 꼭 넣는다. D는 전환한 브랜치와 pop 뒤 복원된 diff를 설명한다. 아직 PR이 없으면 Issue URL과 브랜치 이름을 적고 PR을 만든 뒤 연결한다.

```powershell
git add -- $EvidenceFile
git commit -m "$MemberName 실습의 상태 변화와 복구 판단을 재현할 수 있게 기록한다"
if ($LASTEXITCODE -ne 0) { throw '증빙 커밋 실패' }
git status --short
```

**통과 기준:** 로컬 임시 폴더 없이도 동료가 저장소의 기록을 읽을 수 있다. 빈칸·예정 문구가 남은 기록은 완료가 아니다. 도구만 실습하는 사람은 Step 36~37을 생략하고 Step 38로 간다.

<a id="part-6"></a>
## 6부. 실습 PR과 충돌 — 쌍 내부에서만 병합 순서 조율

### Step 36 — 각자: 자기 쌍의 공통 문장을 다르게 바꾼다

```powershell
if (git status --porcelain) { throw '앞 단계의 변경을 먼저 정리하세요.' }
if ($MemberCode -in @('a','b')) {
    $PairFile = 'src/practice/review-request.md'
    $BaseLine = '리뷰 요청: PR 링크를 공유한다.'
} else {
    $PairFile = 'src/practice/sync-timing.md'
    $BaseLine = '동기화: 원격 변경을 확인한다.'
}
$Variants = @{
    a='리뷰 요청: PR 링크와 변경 이유를 공유한다.'
    b='리뷰 요청: PR 링크와 검증 결과를 공유한다.'
    c='동기화: 작업 시작 전에 원격 변경을 확인한다.'
    d='동기화: PR 병합 전에 원격 변경을 확인한다.'
}
$CurrentText = Get-Content -LiteralPath $PairFile -Raw
if (-not $CurrentText.Contains($BaseLine)) { throw '기본 문장이 다릅니다. 두 사람의 기준 SHA와 파일을 확인하세요.' }
$CurrentText.Replace($BaseLine, $Variants[$MemberCode]) |
    Set-Content -LiteralPath $PairFile -Encoding utf8
git diff -- $PairFile
```

**기대 결과:** 같은 기존 한 줄을 두 사람이 서로 다른 문장으로 바꾼다. 상대방의 파일을 복사해서 덮어쓰지 않는다.

### Step 37 — 각자: 공통 파일 변경을 커밋한다

```powershell
git add -- $PairFile
git commit -m '협업 시 전달 정보와 동기화 시점을 구체화한다'
if ($LASTEXITCODE -ne 0) { throw '공통 파일 커밋 실패' }
git status --short
```

### Step 38 — 각자: push하고 실습 PR을 연다

```powershell
git push -u origin $PracticeBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
```

GitHub `New pull request` → base `main`, compare 본인 실습 브랜치. 실제 실습 Issue 번호를 `Closes`에 넣는다. What에 수행한 도구·기록 파일·공통 문장 변경, Why에 복구 방법과 협업 규칙을 학습하는 목적, How에 실제 확인한 결과를 적는다.

B/D는 아직 충돌을 해결하지 않았으므로 `충돌 해결과 기록은 선행 PR 병합 후 수행 예정`이라고 적는다. 미래 결과를 완료했다고 적지 않는다. 위 역할표의 실습 리뷰어를 지정하고 운영 Issue에 URL을 남긴다.

**분기:** 충돌을 생략한 도구 전용 PR은 Step 39~45를 건너뛰고 바로 **Step 46의 지정 리뷰·응답·승인·병합**으로 간다. 상대방의 PR이나 충돌 발생을 기다리지 않는다.

### Step 39 — 각 쌍: 두 브랜치가 준비됐는지 확인한다

**대기 조건 AB/CD:** 두 사람의 PR이 모두 열렸고, 같은 기준 SHA에서 같은 기존 줄을 다르게 수정한 커밋이 각각 올라왔다. A/B 쌍은 A/B만, C/D 쌍은 C/D만 확인한다.

이 시점까지 상대방 main 변경을 미리 merge하거나 GitHub의 `Update branch`로 동기화하지 않는다. 두 변경이 준비되기 전에 선병합하지 않는다.

### Step 40 — A/C와 리뷰어: 선행 PR을 병합한다

A의 PR은 C가, C의 PR은 A가 검토한다. **자신의 실습이 끝날 때까지 동료 리뷰를 미루지 않는다.** 기록과 diff에 실질 코멘트를 남기고 작성자의 답변/수정을 확인한다. final diff를 승인한 뒤 A/C PR을 먼저 병합한다. 두 쌍의 선행 PR 순서는 자유다.

운영 Issue 또는 해당 상대 PR에 실제 선행 병합 URL을 알린다. B/D PR은 아직 병합하지 않는다.

### Step 41 — B/D: 최신 main을 합쳐 실제 충돌을 확인한다

본인 쌍의 선행 PR 병합을 확인한 뒤 실행한다.

```powershell
if ($MemberCode -notin @('b','d')) { throw '이 단계는 충돌 해결자 B/D만 수행합니다.' }
if ((git branch --show-current) -ne $PracticeBranch) { throw '본인 실습 브랜치로 돌아오세요.' }
if (git status --porcelain) { throw '작업 트리를 먼저 정리하세요.' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
$BeforeMergeHead = (git rev-parse HEAD).Trim()
$IncomingHead = (git rev-parse origin/main).Trim()
$ConflictRaw = Join-Path $EvidenceRoot "conflict-$MemberCode.txt"
git merge origin/main 2>&1 | Tee-Object -FilePath $ConflictRaw
git status
git diff --name-only --diff-filter=U
```

**기대 결과:** 병합이 멈추고 자기 `$PairFile`이 충돌 파일로 나온다. 이 merge의 실패 종료코드는 충돌 상황에서 예상되는 결과다. 자동 병합되거나 엉뚱한 파일이 충돌했다면 Step 42를 진행하지 말고 대응표를 확인한다.

### Step 42 — B/D: 해결 전 증빙을 보존한다

```powershell
$Unmerged = @(git diff --name-only --diff-filter=U)
if ($PairFile -notin $Unmerged) { throw '예정한 파일의 충돌을 확인하지 못했습니다.' }
git status 2>&1 | Tee-Object -FilePath $ConflictRaw -Append
git diff -- $PairFile 2>&1 | Tee-Object -FilePath $ConflictRaw -Append
$OriginalMarkers = Get-Content -LiteralPath $PairFile -Raw
$OriginalMarkers | Tee-Object -FilePath $ConflictRaw -Append
```

에디터에서 `<<<<<<<`, `=======`, `>>>>>>>` 사이의 두 변경을 읽는다. 여기서 HEAD는 현재 B/D 브랜치, 상대는 가져온 main이다. 화면 캡처가 없어도 원문과 명령 출력이 문서에 남아야 한다.

### Step 43 — B/D와 상대 A/C: 해결 결과를 정한다

둘이 각 변경의 의도를 확인한다. A/B는 변경 이유와 검증 결과를 모두 전달하고, C/D는 작업 시작 전과 PR 병합 전에 모두 동기화하는 의미를 보존한다. 합의한 최종 문장은 다음과 같다.

```powershell
if ($MemberCode -eq 'b') {
    $ResolvedText = "# 리뷰 요청 실습`n`n리뷰 요청: PR 링크, 변경 이유와 검증 결과를 공유한다.`n"
} else {
    $ResolvedText = "# 동기화 시점 실습`n`n동기화: 작업 시작 전과 PR 병합 전에 원격 변경을 확인한다.`n"
}
Set-Content -LiteralPath $PairFile -Value $ResolvedText -Encoding utf8
Get-Content -LiteralPath $PairFile
```

이 명령은 위 기본 실습 파일 전체에만 적용한다. 실습 중 다른 유효한 내용이 추가됐다면 파일 전체를 덮어쓰지 말고 마커 구간만 편집해 그 내용도 보존한다.

### Step 44 — B/D: 실제 충돌 기록을 작성한다

```powershell
$PairCode = if ($MemberCode -eq 'b') { 'ab' } else { 'cd' }
$ConflictDoc = "docs/evidence/conflict-$PairCode.md"
if (Test-Path -LiteralPath $ConflictDoc) { throw '기존 충돌 기록이 있습니다. 덮어쓰지 말고 새 기록 경로를 정하세요.' }
$ConflictHeader = @"
# 충돌 $PairCode

## 참여자
- 해결자: $MemberName
- 상대방: 실제 이름 입력
## 상황
- 파일: $PairFile
- 분기 기준: $PairBase
- 병합 전 내 커밋: $BeforeMergeHead
- 가져온 main 커밋: $IncomingHead
- 연결된 두 Issue/PR: 실제 URL 입력
## 충돌 마커와 명령 출력
"@
@($ConflictHeader, '```text', (Get-Content -LiteralPath $ConflictRaw -Raw), '```',
  '', '## 해결 절차와 선택 이유', '실제 수행한 병합·편집·스테이징 절차와 두 의미를 보존한 이유를 적는다.',
  '', '## 결과와 배운 점', '해결 결과와 검증, 재발 예방 방법을 적는다.') |
    Set-Content -LiteralPath $ConflictDoc -Encoding utf8
```

파일을 열어 참여자·링크·설명 빈칸을 실제 내용으로 채운다. A/C가 당시 변경과 일치하는지 확인한다. 해결 커밋 URL은 생성 후 PR 답글에 연결하고 최종 종합 문서에도 넣는다.

### Step 45 — B/D: 병합 커밋을 만들고 push한다

```powershell
git add -- $PairFile $ConflictDoc
if ($LASTEXITCODE -ne 0) { throw '스테이징 실패' }
git diff --name-only --diff-filter=U
git diff --cached --check -- $PairFile
```

첫 명령 결과에 미해결 파일이 남지 않고, staged diff에 실제 충돌 마커가 남지 않았는지 확인한다. 기록 파일에 보관한 마커는 증빙이므로 제거하지 않는다.

```powershell
git commit -m '두 팀원의 협업 규칙을 보존하며 충돌을 해결한다'
if ($LASTEXITCODE -ne 0) { throw '병합 커밋 실패' }
git push origin $PracticeBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
git log -1 --oneline
```

### Step 46 — 작성자와 리뷰어: 해결 PR 또는 도구 전용 PR을 병합한다

B의 PR은 D가, D의 PR은 B가 리뷰한다. 상대의 기록이 올라오면 자기 작업과 병행해 리뷰한다. 파일 근거 코멘트 → 작성자 응답/수정 → 최종 diff 승인 순서를 지킨다. 아직 개인 리뷰 반영 요건이 부족한 사람은 이 PR에서 실제 필요한 개선을 반영하고 링크를 남긴다.

충돌 표시가 해소되고 승인 조건이 충족되면 merge commit으로 병합한다. 운영 Issue의 충돌 항목에 실제 PR·해결 커밋·기록 파일을 연결한다. 충돌을 생략한 도구 전용 PR도 같은 실질 리뷰와 상호작용을 거쳐 병합한다.

<a id="part-7"></a>
## 7부. 제출물 통합과 전원 확인

### Step 47 — 전원: 자기 기록의 누락을 먼저 채운다

운영 표에 본인 PR, 본인이 쓴 리뷰, 본인 PR의 반영, 노트 기여, 도구 실습의 실제 링크를 넣는다. 링크가 없는 칸은 완료로 바꾸지 않는다. 개인 기준이 부족하면 실제 필요한 보완 작업을 Issue/PR로 추가한다. 8개 또는 12개라는 전체 숫자에 맞출 필요는 없다.

### Step 48 — 김상교: 통합 Issue와 브랜치를 만든다

Issue 제목: `검토된 실습 기록과 개인 기여를 제출 문서로 연결`.

```powershell
if (git status --porcelain) { throw '진행 중인 작업을 먼저 정리하세요.' }
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
$FinalBranch = "feature/retry-submission-$RunId"
git switch -c $FinalBranch origin/main
if ($LASTEXITCODE -ne 0) { throw '브랜치 생성 실패' }
```

### Step 49 — 김상교: 필수 기록 문서 두 개를 완성한다

`docs/conflict-resolution.md`에 실제 충돌 2건을 각각 아래 구조로 넣는다. 기존 유효 기록이 있으면 보존한다.

```markdown
## 충돌 이름
### 참여자
### 상황과 기준 커밋
### 실제 충돌 마커
### 해결 절차와 선택 이유
### 결과: PR·해결 커밋·상세 증빙 링크
### 배운 점
```

`docs/troubleshooting-log.md`에는 amend/reset/revert/stash 각 항목을 아래 구조로 넣는다. 각 수행자의 검토된 기록에서 내용을 옮긴다. 중앙 문서를 링크 목록만으로 남기지 않는다.

```markdown
## 명령어
### 참여자와 역할
### 상황·재현 조건
### 실제 명령/절차
### 전후 결과와 증빙 링크
### 선택 이유와 주의점
```

### Step 50 — 김상교: SUBMISSION과 README를 완성한다

`SUBMISSION.md`에 팀 저장소 URL과 팀원을 적고 아래 표를 채운다. 각 셀에 클릭 가능한 실제 링크를 사용한다.

```markdown
| 팀원 | 만든 Issue | 병합된 본인 PR 2개 이상 | 작성한 타인 리뷰 2개 이상 | 본인 PR 리뷰→반영 | 노트 기여 커밋 | 도구 기록 |
| --- | --- | --- | --- | --- | --- | --- |
| 김상교 | | | | | | |
| 장양환 | | | | | | |
| 조은익 | | | | | | |
| 김건우 | | | | | | |

## 팀 증빙
- 보호 설정:
- 협업 가이드: [CONTRIBUTING](docs/CONTRIBUTING.md)
- 충돌 기록: [conflict-resolution](docs/conflict-resolution.md)
- 트러블슈팅: [troubleshooting-log](docs/troubleshooting-log.md)
- Git 로그: [git-history](docs/git-history.txt)
- 최종 통합 PR:
```

README에는 실제 노트 4개의 링크·담당자와 문서 열람 방법을 적는다. 팀원은 자기 노트 경로가 맞는지 확인한다.

### Step 51 — 김상교: Git 로그를 저장한다

```powershell
git fetch origin
if ($LASTEXITCODE -ne 0) { throw 'fetch 실패' }
$HistoryBase = (git rev-parse origin/main).Trim()
@("Captured: $(Get-Date -Format o)", "origin/main: $HistoryBase", '',
  (git log --oneline --graph --all)) |
    Set-Content -LiteralPath 'docs/git-history.txt' -Encoding utf8
```

이 파일은 채집 시점의 기록이다. 아직 만들지 않은 통합 PR의 최종 병합은 포함하지 않으므로 그 PR URL을 SUBMISSION에 보충한다. 최신 로그에 최신 로그 커밋을 다시 넣으려고 반복 커밋하지 않는다.

### Step 52 — 김상교: 통합 PR을 연다

```powershell
git diff --check -- README.md SUBMISSION.md docs/troubleshooting-log.md
git add README.md SUBMISSION.md docs/conflict-resolution.md docs/troubleshooting-log.md docs/git-history.txt
if ($LASTEXITCODE -ne 0) { throw '파일 경로를 확인하세요.' }
git diff --cached
git commit -m '전원의 협업 기여와 복구 근거를 제출물에서 추적할 수 있게 한다'
if ($LASTEXITCODE -ne 0) { throw '커밋 실패' }
git push -u origin $FinalBranch
if ($LASTEXITCODE -ne 0) { throw 'push 실패' }
```

GitHub에서 main 대상 PR을 열고 실제 통합 Issue 번호를 연결한다. PR URL을 확인한 뒤 SUBMISSION의 최종 통합 PR 칸에 넣고 같은 브랜치에 추가 커밋·push한다. PR URL은 추가 커밋 후에도 유지된다.

### Step 53 — 전원: 서로의 증빙을 확인한다

장양환→김상교, 조은익→장양환, 김건우→조은익, 김상교→김건우의 증빙을 확인한다. 모든 PR에 실질 코멘트와 작성자 상호작용이 있는지, 개인별 PR 2개·리뷰 2개·반영 1회가 있는지 링크를 직접 연다. 충돌 2건과 4종 실습은 실제 출력·커밋·역할을 확인한다.

원격 push 이전 amend/reset의 예전 상태는 커밋 그래프만으로 판단하지 않고 저장한 전후 출력을 읽는다. revert는 원본이 push된 뒤 역커밋을 만들었는지 확인한다.

### Step 54 — 김건우·김상교: 통합 PR을 병합한다

김건우가 통합 문서에 파일 근거 코멘트를 남기고 김상교가 응답/수정한다. 전원의 증빙 확인이 끝난 최종 diff에 승인한 뒤 merge commit으로 병합한다. main에서 README 링크와 필수 문서를 다시 연다.

### Step 55 — 전원: 평가 질문에 실제 작업으로 답한다

[evalutation.md](../evalutation.md)의 21~34행 질문 전체를 서로 묻는다. 작업 단위, PR 템플릿, 리뷰 기준, 충돌 대응, 재현성, main 안정성, 승인·Issue 연결 이유, revert 선택 이유와 마커 의미를 실제 PR/기록으로 설명한다.

이어 긴급 수정, 이미 push한 의미 없는 메시지, 반복 충돌 상황도 설명한다. 보너스 rebase를 실제로 했다면 안전 수칙과 전후 기록도 확인한다. 수행하지 않은 보너스를 완료했다고 쓰지 않는다.

### Step 56 — 전원: 종료 조건을 확인한다

[0015의 완료표](0015_b2-2-retry-workflow.md#8-완료-기준과-구두-확인)가 모두 충족되면 운영 Issue를 완료 처리한다. 부족한 항목이 있으면 그 작업만 보완한다. PR·브랜치·원본 증빙은 제출 확인까지 보존한다.

<a id="recovery"></a>
## 문제가 생겼을 때

<a id="resume"></a>
### 새 터미널에서 중간 재개

이미 완료한 커밋·reset·revert·stash를 다시 실행하지 않는다. 현재 브랜치와 파일 상태를 먼저 확인하고, 다음에 할 Step의 변수만 복구한다. 도구 실습 블록 중간에 실패했다면 로그와 상태를 확인한 뒤 대응하며 블록 전체를 무조건 재실행하지 않는다.

```powershell
$RepoPath = Read-Host '기존 팀 저장소 로컬 절대 경로'
Set-Location -LiteralPath $RepoPath
$MemberCode = (Read-Host '본인 코드 a/b/c/d').Trim().ToLower()
if ($MemberCode -notin @('a','b','c','d')) { throw '본인 코드를 확인하세요.' }
$Members = @{ a='김상교'; b='장양환'; c='조은익'; d='김건우' }
$Tools = @{ a='amend'; b='reset'; c='revert'; d='stash' }
$MemberName = $Members[$MemberCode]
$ToolName = $Tools[$MemberCode]
$TeamRepoUrl = (Read-Host '기존 팀 저장소 HTTPS URL').Trim().TrimEnd('/') -replace '\.git$',''
$EvidenceRoot = Read-Host 'Step 04에서 출력된 기존 임시 증빙 폴더 경로'
if (-not (Test-Path -LiteralPath $EvidenceRoot)) { throw '기존 증빙 폴더를 찾으세요. 새 폴더로 대체하지 않습니다.' }
git branch --show-current
git status
```

노트/준비/통합 PR 단계에서는 해당 변수만 기존 브랜치 이름으로 설정한다. 새 브랜치를 만들 때에만 새 `$RunId`를 정한다.

```powershell
# 해당하는 행만 실행한다.
$NoteBranch = Read-Host '계속 작업할 기존 노트 feature 브랜치'
$NotePath = Read-Host '기존 본인 노트 상대 경로'
$SetupBranch = Read-Host '계속 작업할 기존 준비 feature 브랜치'
$FinalBranch = Read-Host '계속 작업할 기존 통합 feature 브랜치'
# 다음에 새 브랜치를 만드는 경우에만:
$RunId = Get-Date -Format 'yyyyMMdd-HHmmss'
```

4~6부 실습 단계에서는 아래 변수를 기존 값으로 복구한다. stash 도중 main에 있는 경우도 있으므로 현재 브랜치를 실습 브랜치라고 가정하지 않는다. 이름은 GitHub PR/로컬 `git branch`에서 확인한다.

```powershell
$PracticeBranch = Read-Host '기존 실습 feature 브랜치 이름'
$PairBase = Read-Host 'Issue에 기록한 기존 공통 기준 SHA'
$RecoveryPath = Read-Host '기존 개인 실습 파일 상대 경로'
$EvidenceFile = Read-Host '기존 개인 증빙 문서 상대 경로'
$PairCode = if ($MemberCode -in @('a','b')) { 'ab' } else { 'cd' }
$PairFile = if ($PairCode -eq 'ab') { 'src/practice/review-request.md' } else { 'src/practice/sync-timing.md' }
$ConflictRaw = Join-Path $EvidenceRoot "conflict-$MemberCode.txt"
$ConflictDoc = "docs/evidence/conflict-$PairCode.md"
```

충돌 merge가 아직 진행 중이고 Step 42~44를 이어 갈 때만 두 부모를 복원한다. 이 명령이 실패하면 merge가 진행 중이라고 가정하지 않는다. 이미 작성한 기록 파일이 있다면 Step 44로 덮어쓰지 말고 그 파일을 이어 편집한다.

```powershell
$BeforeMergeHead = (git rev-parse HEAD).Trim()
$IncomingHead = git rev-parse --verify MERGE_HEAD
if ($LASTEXITCODE -ne 0) { throw '진행 중인 merge가 아닙니다. 현재 상태와 마지막 완료 Step을 확인하세요.' }
$IncomingHead = $IncomingHead.Trim()
```

원래 PowerShell 창이 닫혀 stash 비교 변수 등이 사라졌다면 기존 로그·stash 목록·실제 diff로 상태를 먼저 복구한다. 기존 작업을 정상 복원한 뒤 필요하면 새 실습 브랜치와 새 기록으로 재실습한다.

| 상황 | 다음 행동 |
| --- | --- |
| Issue/PR 번호가 예상과 다름 | 실제 번호와 URL 사용. 뒤 작업 순서를 바꾸지 않음 |
| 기존 노트·실습 기록이 있음 | 먼저 증빙 확인. 같은 내용을 다시 만들거나 기존 파일을 덮어쓰지 않음 |
| 작업 트리가 깨끗하지 않음 | `git status`, `git diff`로 본인 변경을 확인하고 해당 작업에서 보존·정리. 실습 명령 잠시 중단 |
| 개인 브랜치 생성 실패 | 기존 이름·기준 SHA 확인. 기존 브랜치를 삭제하지 말고 새 이름 사용 |
| push/로그인 실패 | 성공 전에는 원격 공유 완료로 기록하지 않음. C는 원본 push 성공 전 revert 단계로 넘어가지 않음 |
| 충돌이 자동 해결됨 | 실제 충돌로 세지 않음. 기준 SHA·같은 줄 교체 여부를 확인하고 새 작업에서 재실습 |
| 예상 외 파일 충돌 | 증빙 보존 후 원인 확인. 깨끗한 상태에서 시작한 진행 중 merge는 `git merge --abort`로 중단 가능. 자동 병합 완료 후에는 abort 불가 |
| stash pop 충돌 | stash가 남았는지 `git stash list`로 확인. 실제 파일을 해결하기 전에 pop을 반복하지 않음. 상태와 복구 과정을 기록 |
| 리뷰어가 응답하지 않음 | 함께 접속한 시간 기준 15분 후 다른 동료에게 요청. 자신의 PR을 승인하지 않음. 빠진 개인 리뷰 수는 운영 표에서 보완 |
| 통합 담당자가 지연됨 | 검토된 개인 기록과 운영 표를 넘겨 다른 팀원이 통합. 새 작성자 이외의 리뷰어 배정 |
| 기록에 실제 출력이 없음 | 예상 결과를 붙여넣지 말고 해당 실습만 다시 수행·기록 |

Git 동작과 공식 자료는 [0015 참고](0015_b2-2-retry-workflow.md#9-설계-검토-범위와-참고)를 따른다. 이번 문서 작성에서는 팀 저장소에 위 명령을 실행하거나 GitHub 기록을 생성하지 않았다.
