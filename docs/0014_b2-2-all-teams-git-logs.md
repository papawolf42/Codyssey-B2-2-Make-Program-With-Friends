# B2-2 전체 팀 Git 커밋 네트워크 로그 및 그래프 총람 (`git log --graph --oneline --all`)

> **기준일**: 2026-09-22
> **분석 대상**: 수강생 19개 팀 + 우리 팀(`nick19850906-debug/mission_02_02`) 총 20개 저장소
> **목적**: 각 팀의 실제 Git 브랜칭 토폴로지, 머지 히스토리, 충돌 해결 그래프 원본을 단일 문서로 종합 보관하여 비교 및 참고 자료로 활용

---

## 📌 목차 (Table of Contents)

- [team_01_codyssey-b2-2-team-mission__git-flow-utility-lab](#team_01_codyssey-b2-2-team-mission__git-flow-utility-lab)
- [team_02_Im-Jongseok__Git_Collaboration](#team_02_Im-Jongseok__Git_Collaboration)
- [team_03_codyssey-2-mission__git-flow-demo](#team_03_codyssey-2-mission__git-flow-demo)
- [team_04_codyssey-git__B2-2](#team_04_codyssey-git__B2-2)
- [team_05_CodysseyBMB__02.02-Git_Collaboration](#team_05_CodysseyBMB__02.02-Git_Collaboration)
- [team_06_GitTeamWorkflow__Codyssey_2-2](#team_06_GitTeamWorkflow__Codyssey_2-2)
- [team_07_mackerel07__B2-2](#team_07_mackerel07__B2-2)
- [team_09_hkk-cody__b2-2](#team_09_hkk-cody__b2-2)
- [team_10_codyssey-git-workflow__codyssey_git_workflow](#team_10_codyssey-git-workflow__codyssey_git_workflow)
- [team_11_codyssey-git-collaboration__mission](#team_11_codyssey-git-collaboration__mission)
- [team_13_Daeung-03__Codyssey-b2-2](#team_13_Daeung-03__Codyssey-b2-2)
- [team_14_codyssey-b2-2-02__codyssey-b2-2-02](#team_14_codyssey-b2-2-02__codyssey-b2-2-02)
- [team_15_codyssey-git-team__git-team](#team_15_codyssey-git-team__git-team)
- [team_16_gitflow-practice-team__github-workflow-practice](#team_16_gitflow-practice-team__github-workflow-practice)
- [team_17_c-b2-2__make-program-with-friends](#team_17_c-b2-2__make-program-with-friends)
- [team_18_B2-2-Cody__git-collab-mission](#team_18_B2-2-Cody__git-collab-mission)
- [team_19_codyssey-b2-2-nlk__git-exercise](#team_19_codyssey-b2-2-nlk__git-exercise)
- [team_20_Codyssey2-2__cody2-2Assign](#team_20_Codyssey2-2__cody2-2Assign)
- [team_21_jha21vvv__codyssey-b2-02](#team_21_jha21vvv__codyssey-b2-02)
- [team_our_nick19850906-debug__mission_02_02](#team_our_nick19850906-debug__mission_02_02)

---

<a id="team_01_codyssey-b2-2-team-mission__git-flow-utility-lab"></a>
## 1. `team_01_codyssey-b2-2-team-mission__git-flow-utility-lab`

- **저장소 URL**: [https://github.com/codyssey-b2-2-team-mission/git-flow-utility-lab.git](https://github.com/codyssey-b2-2-team-mission/git-flow-utility-lab.git)
- **총 커밋 수**: 40개
- **로컬 경로**: `repos/team_01_codyssey-b2-2-team-mission__git-flow-utility-lab`

```text
*   55b8077 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #30 from codyssey-b2-2-team-mission/feature/sangheonlee-member-initials
|\  
| | * ead06b9 (origin/feature/sangheonlee-member-initials) Revert "feat: add member initials helper"
| |/  
| * a3cf13a feat: add member initials helper
|/  
*   a85cd5c Merge pull request #29 from codyssey-b2-2-team-mission/sangheon-final-docs-cleanup
|\  
| * abf6571 (origin/sangheon-final-docs-cleanup) docs: organize final submission docs and evidence screenshots
|/  
*   e242929 Merge pull request #27 from codyssey-b2-2-team-mission/feature/sangheon-final-submission-evidence
|\  
| * cc6fd5b (origin/feature/sangheon-final-submission-evidence) docs: add final submission evidence
* | 434e437 Merge pull request #25 from codyssey-b2-2-team-mission/chore/sangheon-codeowners
|\| 
| * 230fe49 (origin/chore/sangheon-codeowners) chore: add codeowners reviewer rules
|/  
*   b9d0641 Merge pull request #23 from codyssey-b2-2-team-mission/feature/sangheon-history-cleanup
|\  
| * 280a000 (origin/feature/sangheon-history-cleanup) docs: add history cleanup record
| * 34d7511 docs: record team notes rename edit conflict resolution
| * d8c8220 docs: add team notes review checklist
* |   987c617 Merge pull request #21 from codyssey-b2-2-team-mission/feature/sangheon-rename-edit-conflict-resolution
|\ \  
| |/  
|/|   
| * 908ec75 (origin/feature/sangheon-rename-edit-conflict-resolution) docs: document team notes rename edit conflict
| *   97d8e1b Merge remote-tracking branch 'origin/main' into feature/sangheon-rename-edit-conflict-resolution
| |\  
| |/  
|/|   
* |   7e71ad3 Merge pull request #19 from codyssey-b2-2-team-mission/feature/giyeop-rename-team-notes
|\ \  
| * | 182b168 (origin/feature/giyeop-rename-team-notes) docs: rename team notes to decisions
|/ /  
| * 2aef5be docs: add team notes review checklist
|/  
*   4e6cb0e Merge pull request #17 from codyssey-b2-2-team-mission/feature/giyeop-conflict-readme
|\  
| * b7d9ef4 (origin/feature/giyeop-conflict-readme) docs: resolve same hunk output conflict
|/  
*   4085309 Merge pull request #15 from codyssey-b2-2-team-mission/feature/giyeop-revert-stash-log
|\  
| * df3744c (origin/feature/giyeop-revert-stash-log) docs: record revert and stash scenarios
| * a1f0ebf Revert "docs: add temporary wrong note"
| * c6784f4 docs: add temporary wrong note
|/  
*   00de06c Merge pull request #13 from codyssey-b2-2-team-mission/feature/kangsik-reset-soft-log
|\  
| * 8f9267c (origin/feature/kangsik-reset-soft-log) docs: record reset soft scenario
|/  
*   76a48ca Merge pull request #11 from codyssey-b2-2-team-mission/feature/sangheon-amend-log
|\  
| * 1f3068c (origin/feature/sangheon-amend-log) docs: record amend scenario
|/  
*   3994675 Merge pull request #9 from codyssey-b2-2-team-mission/feature/giyeop-even-check-fix
|\  
| *   9c521e1 Merge branch 'main' into feature/giyeop-even-check-fix
| |\  
| |/  
|/|   
* |   2812a8b Merge pull request #7 from codyssey-b2-2-team-mission/feature/kangsik-word-count-fix
|\ \  
| * | 25466a3 (origin/feature/kangsik-word-count-fix) fix: count words with default split
|/ /  
| * 11a3186 fix: return true for even numbers
|/  
*   936a4f1 Merge pull request #5 from codyssey-b2-2-team-mission/feature/sangheon-name-normalizer
|\  
| * 08fddf2 (origin/feature/sangheon-name-normalizer) fix: normalize member name spacing
|/  
*   aba01ac Merge pull request #2 from codyssey-b2-2-team-mission/feature/sangheon-initial-starter-kit
|\  
| * a31012d (origin/feature/sangheon-initial-starter-kit) docs: clarify starter gaps and collaboration rules
| * 6cfcf15 docs: add flawed starter teamwork kit
|/  
* 14d1a31 Initial commit
```

---

<a id="team_02_Im-Jongseok__Git_Collaboration"></a>
## 2. `team_02_Im-Jongseok__Git_Collaboration`

- **저장소 URL**: [https://github.com/Im-Jongseok/Git_Collaboration.git](https://github.com/Im-Jongseok/Git_Collaboration.git)
- **총 커밋 수**: 52개
- **로컬 경로**: `repos/team_02_Im-Jongseok__Git_Collaboration`

```text
* 31628cd (HEAD -> main, origin/main, origin/HEAD) chore: .DS_Store ignore 추가
*   f4e241f Merge pull request #44 from codyssey-B2-2/feature/im-jongseok-submission
|\  
| * 45ecbbd docs: SUBMISSION.md 생성 및 작성
* |   740d874 Merge pull request #43 from codyssey-B2-2/feature/feelosophysics-revert_src
|\ \  
| * | f69fae8 Revert "refactor: revert utils.py"
* | |   41bc2ab Merge pull request #41 from codyssey-B2-2/feature/VectorSophie/rebase-evidence-bonus
|\ \ \  
| |/ /  
|/| |   
| * | d73234e feature: add rebase -i evidence bonus
* | |   862396a Merge pull request #38 from codyssey-B2-2/feature/VectorSophie/fill-readme
|\ \ \  
| |/ /  
|/| |   
| * | eb3cdac feat: meet review goals
| * | 08209d7 feat: fill up readme with lively architectural decisions
| |/  
* |   8697752 Merge pull request #37 from codyssey-B2-2/feature/feelosophy-codeowners
|\ \  
| |/  
|/|   
| * 8fedace docs: create CODEOWNERS
* |   645c93b Merge pull request #32 from codyssey-B2-2/feature/VectorSophie-stash-test
|\ \  
| * \   043d48f Merge branch 'main' into feature/VectorSophie-stash-test
| |\ \  
| |/ /  
|/| |   
* | |   a982e87 Merge pull request #28 from codyssey-B2-2/feature/im-jongseok-revert-test
|\ \ \  
| * | | 7fa56f8 Revert "test: git revert test"
| * | | aa7c576 test: git revert test
* | | |   be48b95 Merge pull request #35 from codyssey-B2-2/feature/im-jongseok-readme
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | a392316 docs: README add intro link
* | | |   328f5a4 Merge pull request #30 from codyssey-B2-2/feature/im-jongseok-troubleshooting-revert
|\ \ \ \  
| |/ / /  
|/| | |   
| * | | 28ecbf0 docs: troubleshooting-log에 revert 시나리오 작성
|/ / /  
| | * 76ca0b0 docs: add stash troubleshooting scenario
| |/  
|/|   
* |   81e35ac Merge pull request #26 from codyssey-B2-2/feature/feelosophysics-nontrivial
|\ \  
| * | bce1274 docs: conflict-resolution.md 비자명 시나리오 내용 추가
|/ /  
* |   602582b Merge pull request #24 from codyssey-B2-2/feature/feelosophysics-refactor
|\ \  
| * \   c299dd4 fix: conflict resolve utils.py
| |\ \  
| |/ /  
|/| |   
* | |   b74d492 Merge pull request #23 from codyssey-B2-2/feature/im-jongseok-add-utilcode
|\ \ \  
| * | | 1a3f1f0 refactor: utils.py 코드 리팩토링 진행
| | * | d8ea273 refactor: remove utils.py
| |/ /  
|/| |   
* | |   8141683 Merge pull request #20 from codyssey-B2-2/feature/im-jongseok-conflict-resolution
|\ \ \  
| |/ /  
|/| |   
| * |   21a3430 Merge branch 'main' into feature/im-jongseok-conflict-resolution
| |\ \  
| * | | f3282c9 test: conflict test1
* | | |   2243992 Merge pull request #14 from codyssey-B2-2/feature/feelosophysics-trouble_amend
|\ \ \ \  
| |_|/ /  
|/| | |   
| * | | 3c5f1b7 docs: troubleshooting.md 생성 및 amend, reset 시나리오 작성
* | | |   eb5e602 Merge pull request #19 from codyssey-B2-2/feature/feelosophysics-conflict
|\ \ \ \  
| * | | | 9447b48 test: conflict test2
|/ / / /  
* | | |   db11e76 Merge pull request #16 from codyssey-B2-2/feature/im-jongseok-conflict-resolution
|\ \ \ \  
| | |/ /  
| |/| |   
| * | | a90bc1b docs: conflict-resolution.md 생성
* | | |   8a3ba94 Merge pull request #12 from codyssey-B2-2/feature/feelosophysics-CONTRIBUTING
|\ \ \ \  
| |/ / /  
|/| / /   
| |/ /    
| * | 02131ac docs: CONTRIBUTING.md 수정
* | |   d8a8a65 Merge pull request #10 from codyssey-B2-2/feature/im-jongseok-readme-fix
|\ \ \  
| |/ /  
|/| /   
| |/    
| * d8a318d fix: broken VectorSophie README link
|/  
*   bee0b09 Merge pull request #8 from codyssey-B2-2/feature/im-jongseok-intro
|\  
| * 9e633e7 docs: add Im-Jongseok team introductions
|/  
*   7864a33 Merge pull request #6 from codyssey-B2-2/feature/feelosophysics-intro
|\  
| * aadb832 feat: add self-introductions for feelosophysics
|/  
*   9502a36 Merge pull request #4 from codyssey-B2-2/feature/jack-contributing-guide
|\  
| * 5e68048 docs: add contributing guide
|/  
*   2cf5e23 Merge pull request #2 from codyssey-B2-2/feature/jack-team-introduction
|\  
| * 726448c docs: add Jack team introduction
|/  
* 5aa7dff chore: add initial project structure (docs, src, team)
* 7ab3203 Initial commit
```

---

<a id="team_03_codyssey-2-mission__git-flow-demo"></a>
## 3. `team_03_codyssey-2-mission__git-flow-demo`

- **저장소 URL**: [https://github.com/codyssey-2-mission/git-flow-demo.git](https://github.com/codyssey-2-mission/git-flow-demo.git)
- **총 커밋 수**: 43개
- **로컬 경로**: `repos/team_03_codyssey-2-mission__git-flow-demo`

```text
* 77832e0 (HEAD -> main, origin/main, origin/HEAD) Revert "docs: 제출용 git log 증빙 그래프 교체"
*   2845a05 Merge pull request #25 from codyssey-2-mission/feature/18-submission-index
|\  
| * 38fe21d docs: expand submission git log evidence
* | d8c10bb docs: 제출용 git log 증빙 그래프 교체
* | f4ea98d Merge pull request #24 from codyssey-2-mission/feature/18-submission-index
|\| 
| * 0e9cf40 docs: add submission index
|/  
*   355ea1a Merge pull request #23 from codyssey-2-mission/feature/16-pytest-parser-tests
|\  
| * 77187a6 test: migrate parser tests to pytest
|/  
*   09020a4 Merge pull request #22 from codyssey-2-mission/feature/11-readme-docs
|\  
| *   eb257a6 Merge branch 'main' into feature/11-readme-docs
| |\  
| |/  
|/|   
* |   9d1d244 Merge pull request #21 from codyssey-2-mission/feature/non-trivial-conflict-update-readme
|\ \  
| * | 1d093de docs: document conflict resolution cases
| * |   58d569e fix: resolve README modify-delete conflict
| |\ \  
| |/ /  
|/| |   
* | |   ff86cbc Merge pull request #20 from codyssey-2-mission/feature/remove-readme
|\ \ \  
| * | | 70e412d docs: 프로젝트 구조 개편에 따른 README 삭제 (좌측)
|/ / /  
| * / a076f64 test: update README for non-trivial conflict
|/ /  
* |   a688f6b Merge pull request #15 from codyssey-2-mission/feature/obvious-conflict-right
|\ \  
| * \   2e0d83f Merge branch 'main' into feature/obvious-conflict-right
| |\ \  
| |/ /  
|/| |   
* | |   f50afc2 Merge pull request #13 from codyssey-2-mission/feature/obvious-conflict-left
|\ \ \  
| * | | ebb53f0 (origin/feature/obvious-conflict-left) docs: 자명 충돌 테스트용 README 작성 (좌측)
| | * | 9359cf8 docs: add right README conflict variant
| | | * 520c838 docs: add README usage and remote revert log
| |_|/  
|/| |   
| | | * c9d8a0d (origin/feature/11-remote-revert-demo) fix: revert remote demo note
| | | * 722014d docs: add remote revert demo note
| |_|/  
|/| |   
* | |   41e0e91 Merge pull request #10 from codyssey-2-mission/feature/9-cli-loop
|\ \ \  
| |_|/  
|/| |   
| * | 44cc8c0 feat: implement CLI calculator loop
| * | b2e6ad7 test: add CLI loop tests
|/ /  
* | 2a1d5ad Merge pull request #8 from codyssey-2-mission/feature/input-parser
|\| 
| * 1ec2a44 docs: add troubleshooting log for reset --soft
| * e2587f4 feat: 사용자 입력 파싱 기능 구현
|/  
*   3813739 Merge pull request #6 from codyssey-2-mission/feature/5-arithmetic-operations
|\  
| * bc6c0cc docs: add troubleshooting log for amend
| * e7beaa9 test: migrate calculator tests to pytest
| * bcf498b feat: implement calculator arithmetic operations
| * 50a8f73 test: add calculator arithmetic tests
|/  
*   5c478b4 Merge pull request #4 from codyssey-2-mission/feature/project-entry
|\  
| * aa4bba3 fix: initialize calculator package and expose main function in pyproject.toml
| * d75cb12 feat: implement project entry points
|/  
*   3e63e2c Merge pull request #2 from codyssey-2-mission/feature/uv-init
|\  
| * 75eb64f fix: project name 변경
| * 3263f4c fix: python 버전 변경
| * 63e683e feat: UV 패키지 매니저 추가 및 git ignore 설정
|/  
* 3a6b57c docs: 컨벤션 문서 추가
```

---

<a id="team_04_codyssey-git__B2-2"></a>
## 4. `team_04_codyssey-git__B2-2`

- **저장소 URL**: [https://github.com/codyssey-git/B2-2.git](https://github.com/codyssey-git/B2-2.git)
- **총 커밋 수**: 107개
- **로컬 경로**: `repos/team_04_codyssey-git__B2-2`

```text
*   35f5e4d (HEAD -> main, origin/main, origin/HEAD) Merge pull request #59 from codyssey-git/docs/54
|\  
| *   2e1df0f (origin/docs/54) Merge branch 'main' into docs/54
| |\  
| |/  
|/|   
* |   37a43c3 Merge pull request #58 from codyssey-git/bug/57
|\ \  
| * | 4b5aa7d (origin/bug/57) bug: data_utils.py에 누락된 is_blank 함수 추가
* | |   3cf6a12 Merge pull request #56 from codyssey-git/docs/49
|\ \ \  
| |/ /  
|/| |   
| * | db50489 (origin/docs/49) docs: CONTRIBUTING.md에 GitHub Flow 선택 이유 명시
* | |   91f2ac7 Merge pull request #55 from codyssey-git/docs/52
|\ \ \  
| * \ \   d5f9c00 (origin/docs/52) Merge branch 'main' into docs/52
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   ad329ea Merge pull request #53 from codyssey-git/docs/47
|\ \ \ \  
| * \ \ \   70161d3 (origin/docs/47) Merge branch 'main' into docs/47
| |\ \ \ \  
| |/ / / /  
|/| | | |   
| * | | | deaec41 docs: 팀원 4 리뷰 링크 수정
| * | | | 174c303 docs: 팀원 4 제출 및 충돌 해결 기록 정리
| | * | | 67edea2 docs: CONTRIBUTING.md에 충돌 기록 담당자 및 위치 기록
| | |/ /  
| | | * 19b65ac chore: .gitignore 수정
| | | * 9c0c88a README.md 프로젝트 구조 수정
| | | * 8cf2d0d docs: 팀원 2 내용 추가 및 git rule 문서 링크 추가
| | | * 16873a2 docs: README 체크리스트 체크 및 문서 링크 추가
| | | * 1dff1cd docs: git history 문서 추가
| | | * d2732a4 chore: git main rule 이미지 추가
| |_|/  
|/| |   
* | |   e10de9a Merge pull request #51 from codyssey-git/docs/45
|\ \ \  
| |_|/  
|/| |   
| * |   a4d53a4 (origin/docs/45) Merge branch 'main' into docs/45
| |\ \  
| |/ /  
|/| |   
* | |   52d19c9 (origin/docs/50) docs: Issue/PR 링크 연결 및 충돌 과정 작성(팀원3)
|\ \ \  
| |_|/  
|/| |   
| * | 628f1c0 (origin/docs/46) docs:충돌 과정 작성
| * | 0d24891 docs: 트러블 슈팅 로그 수정 및 증거 이미지 추가
| * | 937bfe2 docs: SUBMISSION 문서 수정
|/ /  
| * bbc147f docs: CONTRIBUTING.md 커밋 메시지 컨벤션 위치 변경
| * 77ac791 docs: SUBMISSION.md 팀원 1 내용 추가
| * 4e99b13 refactor: 이미지 이름 변경
| * ee2580a docs: 관련 이슈 및 PR 인덱싱 수정
| * 75ac941 docs: 문서 포맷팅 일관화
|/  
*   fa77cca Merge pull request #44 from codyssey-git/docs/41
|\  
| * 73d34c1 (origin/docs/41) docs: Issue/PR 링크 연결 및 충돌 과정 작성
* |   0142cf6 Merge pull request #42 from codyssey-git/docs/40
|\ \  
| * | 782d248 (origin/docs/40) docs: CODEOWNERS 제출 정보 보완
| * | 7acd3ad docs: CODEOWNERS 보너스 증빙 추가
* | |   bce3c6c Merge pull request #30 from codyssey-git/docs/27
|\ \ \  
| |_|/  
|/| |   
| * |   f470f60 (origin/docs/27) Merge branch 'main' into docs/27
| |\ \  
| |/ /  
|/| |   
* | |   0069ab0 Merge pull request #39 from codyssey-git/refactor/32
|\ \ \  
| * | | d6c5d95 (origin/refactor/32) docs: rebase-history 문서 추가
| * | | 8a10f18 chore: squash 사용해서 test.txt, .gitkeep 삭제
* | | |   4da7293 Merge pull request #38 from codyssey-git/docs/codeowners-test
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | |   8d7c201 (origin/docs/codeowners-test) Merge branch 'main' into docs/codeowners-test
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   9b55aa9 Merge pull request #36 from codyssey-git/docs/26
|\ \ \ \  
| * \ \ \   8bbf747 (origin/docs/26) Merge branch 'main' into docs/26
| |\ \ \ \  
| |/ / / /  
|/| | | |   
| * | | | 1a30a82 docs: 참여자명 변경
| * | | | 43ececc docs: reset hard 주의사항 추가
| * | | | 616f23a docs: git reset 트러블슈팅 문서 작성
| * | | | d9bc39b docs: reset soft 트러블슈팅 추가
| | * | | 3911d9c docs: CODEOWNERS 자동 리뷰어 확인
| |/ / /  
|/| | |   
* | | |   71142f1 Merge pull request #37 from codyssey-git/docs/31
|\ \ \ \  
| |_|/ /  
|/| | |   
| * | |   d6c780a (origin/docs/31) Merge branch 'main' into docs/31
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   a59ec38 Merge pull request #35 from codyssey-git/docs/28
|\ \ \ \  
| | * | | 53a9548 docs: git amend 트러블슈팅 기록 추가
| | |/ /  
| | | *   e3b5452 Merge branch 'main' into docs/27
| | | |\  
| | | * | 4d9356c docs: 트러블 슈팅 문서에 git revert 상황 추가
| | | * | e1583ab Revert "docs: 충돌 해결 문서에 이름 추가"
| | | * | 185b6fd docs: 충돌 해결 문서에 이름 추가
| | |/ /  
| | | | * 85c9c38 (origin/docs/28) docs:troubleshooting-log 업데이트
| | |_|/  
| |/| |   
| * | |   d5830ee Merge branch 'main' into docs/28
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   242e8d2 Merge pull request #34 from codyssey-git/docs/33
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | c322cb1 (origin/docs/33) docs: CODEOWNERS 리뷰어 자동화 설정
| | |/  
| |/|   
* | |   d4db6e1 Merge pull request #29 from codyssey-git/docs/25
|\ \ \  
| |/ /  
|/| |   
| * | 8a67aa6 (origin/docs/25) docs: stash 트러블슈팅 기록 추가
|/ /  
| * 7871cf9 docs: git revert 트러블슈팅 기록 추가
| * ddf150c Revert "Merge pull request #23 from codyssey-git/feat/19"
| * 434dd75 refactor: 문자열 검증 업데이트
|/  
*   9cfeacf Merge pull request #23 from codyssey-git/feat/19
|\  
| *   14ab263 (origin/feat/19) Merge branch 'main' into feat/19
| |\  
| |/  
|/|   
* |   05db6e7 Merge pull request #18 from codyssey-git/feat/15
|\ \  
| * \   2697723 (origin/feat/15) Merge branch 'main' into feat/15
| |\ \  
| |/ /  
|/| |   
* | |   5c7fcd9 Merge pull request #22 from codyssey-git/feat/16
|\ \ \  
| * | | af27a85 (origin/feat/16) regactor: 평균계산함수 타입 힌트 및 주석 보완
| * | | 4d3d809 feat: 숫자 리스트 평균 계산 함수 추가
* | | |   ef011a3 Merge pull request #20 from codyssey-git/feat/17
|\ \ \ \  
| * \ \ \   391aed1 (origin/feat/17) Merge branch 'main' into feat/17
| |\ \ \ \  
| |/ / / /  
|/| | | |   
* | | | |   eacedc6 Merge pull request #21 from codyssey-git/feat/14
|\ \ \ \ \  
| |_|/ / /  
|/| | | |   
| * | | | 66b86e4 (origin/feat/14) feat: 문자열 공백 제거 유틸 함수 추가
| | * | | fc7451e feat: 대소문자 변환 함수 타입 힌트 추가
| | * | | 4bc9d39 feat: 문자열 대소문자 변환 함수 추가
| |/ / /  
|/| | |   
| | * | 0cd3715 refactor: validate_length 입력값 검증 로직 개선
| | * | d7a6f8b feat:문자열 길이 함수 작성
| |/ /  
| | * 8b695b7 docs: 빈 값 검증 함수 주석 추가
| | * d972b3a feat: 빈 값 검증 함수 추가
| |/  
|/|   
* |   bf28759 Merge pull request #11 from codyssey-git/docs/3
|\ \  
| |/  
|/|   
| *   5a954e8 (origin/docs/3) Merge branch 'main' into docs/3
| |\  
| |/  
|/|   
* |   8b2f514 Merge pull request #12 from codyssey-git/docs/4
|\ \  
| * \   f2bd4af (origin/docs/4) Merge branch 'main' into docs/4
| |\ \  
| |/ /  
|/| |   
* | |   06d9e2d Merge pull request #10 from codyssey-git/docs/1
|\ \ \  
| * \ \   a488694 (origin/docs/1) Merge branch 'main' into docs/1
| |\ \ \  
| * | | | cea7935 docs: 커밋 메시지 컨벤션 작성
* | | | |   ede3b20 Merge pull request #13 from codyssey-git/docs/7
|\ \ \ \ \  
| |_|/ / /  
|/| | | |   
| * | | |   d4dfba5 (origin/docs/7) Merge branch 'main' into docs/7
| |\ \ \ \  
| |/ / / /  
|/| | | |   
* | | | |   23eee9b Merge pull request #9 from codyssey-git/docs/2
|\ \ \ \ \  
| |_|/ / /  
|/| | | |   
| * | | | c7f2939 (origin/docs/2) docs: CONTRIBUTING.md 브랜치 네이밍 규칙 추가
|/ / / /  
| * / / c24403e docs:PR 작성 규칙 작성
|/ / /  
| * / ca92d7b docs:코드 리뷰 규칙 작성
|/ /  
| * adf1c37 docs: 충돌 대응 흐름 작성
|/  
* 8d11663 test
* 2b36859 chore: PR 템플릿 추가
* dca625a chore: refactor 템플릿 추가
* 847a191 사라진 feat 템플릿 재추가
* 26a1cb4 chore: refactor 템플릿 추가
* a509cd8 버그 리포트 템플릿 추가
* 880f429 docs 템플릿 추가
* 1fd4e48 chore: feat 이슈 템플릿 추가
* 40696fd chore: 초기 프로젝트 설정 및 협업 문서 템플릿 추가
* ef9bc4d Initial commit
```

---

<a id="team_05_CodysseyBMB__02.02-Git_Collaboration"></a>
## 5. `team_05_CodysseyBMB__02.02-Git_Collaboration`

- **저장소 URL**: [https://github.com/CodysseyBMB/02.02-Git_Collaboration.git](https://github.com/CodysseyBMB/02.02-Git_Collaboration.git)
- **총 커밋 수**: 27개
- **로컬 경로**: `repos/team_05_CodysseyBMB__02.02-Git_Collaboration`

```text
* 804354e (origin/docs/prepare-assignment) docs: Prepare for an assessment
| *   ec2ae76 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #21 from CodysseyBMB/docs/20-final-submission
| |\  
| | * a05586e (origin/docs/20-final-submission) docs: finalize submission index and contributing guide
| |/  
| *   db06d67 Merge pull request #18 from CodysseyBMB/docs/troubleshooting-log
| |\  
| | * 884027c (origin/docs/troubleshooting-log) docs: unify troubleshooting-log author format per review
| | * 4775e5f docs: add git troubleshooting log (4 scenarios)
| |/  
|/|   
| * b9535d4 Merge pull request #16 from CodysseyBMB/feature/docs-conflict-resolution
|/| 
| * 8ebcf93 (origin/feature/docs-conflict-resolution) docs: add PR body template for conflict-resolution
| * 749abc1 docs: record conflict A and B resolution
|/  
| * ef6603e (origin/docs/record-conflict-resolution) docs: record conflict resolution process
|/  
*   fe04162 Merge pull request #14 from CodysseyBMB/feature/6-text-improve
|\  
| * a41d7a2 (origin/feature/6-text-improve) feat: add word_count to text utils
|/  
*   23928ad Merge pull request #10 from CodysseyBMB/feature/5-rename-text
|\  
| * a0e64d7 (origin/feature/5-rename-text) refactor: rename text_utils module to string_utils
* |   84863f4 Merge pull request #12 from CodysseyBMB/feature/4-collection-utils
|\ \  
| |/  
|/|   
| * 6d45048 (origin/feature/4-collection-utils) feat: add collection_utils (chunk, unique)
|/  
*   022bf18 Merge pull request #5 from CodysseyBMB/feature/3-number-utils
|\  
| *   4f64cd9 (origin/feature/3-number-utils) Merge branch 'main' into feature/3-number-utils
| |\  
| |/  
|/|   
* |   c6eecf2 Merge pull request #8 from CodysseyBMB/feature/2-date-utils
|\ \  
| * \   946bbb0 (origin/feature/2-date-utils) Merge branch 'main' into feature/2-date-utils
| |\ \  
| |/ /  
|/| |   
* | |   eace03d Merge pull request #6 from CodysseyBMB/feature/1-text-utils
|\ \ \  
| * | | 93d9831 (origin/feature/1-text-utils) feat: add text_utils utility functions
|/ / /  
| * / e0437fb feat: add date utility functions
|/ /  
| * d17015f feat: add number_utils format_currency and clamp
|/  
*   f3f5827 Merge pull request #2 from CodysseyBMB/feature/0-scaffold
|\  
| * 9211e15 (origin/feature/0-scaffold) chore: scaffold repo structure and collaboration docs
|/  
* dbfc364 docs: add subject and plan documents
```

---

<a id="team_06_GitTeamWorkflow__Codyssey_2-2"></a>
## 6. `team_06_GitTeamWorkflow__Codyssey_2-2`

- **저장소 URL**: [https://github.com/GitTeamWorkflow/Codyssey_2-2.git](https://github.com/GitTeamWorkflow/Codyssey_2-2.git)
- **총 커밋 수**: 112개
- **로컬 경로**: `repos/team_06_GitTeamWorkflow__Codyssey_2-2`

```text
*   9e2125c (HEAD -> main, origin/main, origin/feat/47-이름-자판기-동전-넣기, origin/HEAD) Merge pull request #46 from GitTeamWorkflow/docs/42-park-feat-md
|\  
| * 356555c fix: add review link
| * 851d1de fix: fix commit rule/ issue rule
| * 49d60b2 feat: README.md 작성
| * 39d4feb feat: SUBMISSON.md 작성
|/  
*   d4ec9e7 Merge pull request #43 from GitTeamWorkflow/feat/41-lim-study-b2-2
|\  
| * d4889db feat: B2-2 미션 학습 정리 노트 및 실습 정리 노트 업로드
* |   7f7b003 Merge pull request #45 from GitTeamWorkflow/feat/44-lim-reset---soft-troubleshooting-log
|\ \  
| * | c486f84 feat: rest --soft 트러블 슈팅 문서 업로드
| |/  
* |   bbe8899 Merge pull request #40 from GitTeamWorkflow/feat/39-lee-conflict-simulation
|\ \  
| * \   6630d46 fix: conflict 해결
| |\ \  
| | * | 1a1a9be [feat] 나누기 추가
| * | | b3a02ae feat: 계산기에 나머지 계산 추가
| * | | 8a16efc feat: 계산기 파일에서 나머지 계산 추가
| |/ /  
| * / 4121f3e docs: 충돌 실습파일 업로드
| |/  
* |   b50c66f Merge pull request #38 from GitTeamWorkflow/feat/37-park-command-simulation
|\ \  
| * | 1346c4e fix: fix wrong typing
| * | 2abd9c1 docs: remove park.md
| * | dead88b feat: add img
| * | 96d7fdc feat: learn stash
| * | 686de63 fix: fix test.txt conflict
| * | ee988b3 feat: stash test
| * | 18310d0 feat: stash test
| * | 710e3df feat: learn revert
| * | e46cbac Revert "feat: revert test"
| * | ccc3d3c Revert "feat: add reset scenario3"
| * | a423ba4 Revert "feat: add reset scenario3"
| * | 83944ce feat: revert test
| * | d841f2e feat: add reset scenario3
| * | a0cbf9c feat: add reset scenario2
| * | bb6c72d feat: add reset scenario1
| * | 246d7e3 feat: learn ammend
| * | 8d0ed89 feat: create command md
* | |   c3519ec Merge pull request #25 from GitTeamWorkflow/feature/24-learn-github-flow
|\ \ \  
| * | | bd5d794 feat: learned github and github flow
* | | |   3c2c278 Merge pull request #27 from GitTeamWorkflow/feature/26-git-troubleshooting-practice
|\ \ \ \  
| * | | | 9062742 feat: learnd git stash practice
| * | | | 738160f test: files for stash practice
| * | | | ce87d22 feat: complete git revert practice
| * | | | d629247 Revert "feat: test revert practice"
| * | | | ce5b6c8 feat: test revert practice
| * | | | 67c3fe0 feat: complete git reset practice
| * | | | 7b12608 feat: complete git commit amend practice
| * | | | 88736da feat: 짠! 고침! create test file for commit amend test
| |/ / /  
* | | |   553d86e Merge pull request #23 from GitTeamWorkflow/feature/13-learn-git-restore-three-things
|\ \ \ \  
| * | | | 5390d64 feat: learned git restore, reset, revert, stash
| |/ / /  
* | | |   9ae66fc Merge pull request #22 from GitTeamWorkflow/feature/12-son-learn-git-branch-and-merge
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | 6f3b11e feat: learned branch and merge with conflict
| * | | f41ab8e chore: remove temporary file
* | | |   2324005 Merge pull request #36 from GitTeamWorkflow/feature/34-lee-git-command-practice
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | 2cf7530 docs: update git command practice md
| * | | cafc3f5 chore: adjust image directory and remove uncommitted_notes.md
| * | | 048a798 feat: git stash, stash pop practice
| * | | 3669a36 feat: git revert practice
| * | | 13f8b38 Revert "chore: adjust text before revert test"
| * | | fd7b280 chore: adjust text before revert test
| * | | cdbaab3 feat: git command practice(reset, revert)
| * | | 46ba9a6 feat: git practice file
* | | |   1f43b4e Merge pull request #35 from GitTeamWorkflow/feature/11-lee-git-command
|\ \ \ \  
| * | | | f287660 docs: git study 초안 작성
| | |/ /  
| |/| |   
* | | |   79f1cd1 Merge pull request #33 from GitTeamWorkflow/docs/28-park-fix-docs
|\ \ \ \  
| |_|/ /  
|/| | |   
| * | | b5e5119 fix: fix conflict-simulation park,son
| * | | 4f6c0ab docs/ Update requirement.md
| * | | 7921296 docs: Update CONTRUBUTING.md
* | | |   b2cf569 Merge pull request #32 from GitTeamWorkflow/feat/29-park-conflict-simulation
|\ \ \ \  
| |/ / /  
|/| | |   
| * | |   07762f5 Merge pull request #31 from GitTeamWorkflow/feat/29-son-conflict-simulation
| |\ \ \  
| | * \ \   8682e73 refacotor: rename caculator, update logic
| | |\ \ \  
| | |/ / /  
| |/| | |   
| * | | | 9f708ba fix: rm minus def
| | * | | 868ddeb feat: modify function and file rename
| |/ / /  
| * | | c45bbec feat: minus def
| * | |   9c6089e Merge pull request #30 from GitTeamWorkflow/feat/29-son-conflict--simulation
| |\ \ \  
| | * | | 23f8d8b feat: calculate 함수 매개변수 값 변경
| |/ / /  
|/| | |   
| * | | 8613aac fix/add print_result def
|/ / /  
* | |   682cde1 Merge pull request #15 from GitTeamWorkflow/14-park-Organization-VS-Collaborator
|\ \ \  
| * | | 84fe002 (origin/feature/14-park-Organization-VS-Collaborator) feat: add gitignore
| * | | 62e0923 chore: fix directory set
| * | | 316c437 docs: Organization Collaborator difference
| * | | 5d8d2ca docs: add screenshot(roleset, branch rule, repo setting)
| * | | 635b5ad feat: Create Organization_vs_Collaborator.md
| | |/  
| |/|   
* | |   769168f Merge pull request #17 from GitTeamWorkflow/16-park-learn-assignment-goals
|\ \ \  
| * | | d04a675 (origin/feature/16-park-learn-assignment-goals) docs: stash 학습 정리 md 추가
| * | | 3a1490c docs: revert 학습 정리 md 추가
| * | | 02ea8cd docs: reset 학습 정리 md 추가
| * | | 6ca8651 docs: 과제 목표 정리 md 파일 추가
| |/ /  
* | |   b200dc3 Merge pull request #19 from GitTeamWorkflow/18-refactor-html-python
|\ \ \  
| * | | f496fcf (origin/feature/18-refactor-html-python) refactor: test.html -> calculator.py
| |/ /  
* | |   4f4f117 Merge pull request #21 from GitTeamWorkflow/docs/20-park-what-is-git
|\ \ \  
| |/ /  
|/| |   
| * | 8676680 (origin/feature/20-park-what-is-git) docs: diffence git and github
| * | b3d8b27 docs: learn to git
|/ /  
* |   3d2460e Merge pull request #10 from GitTeamWorkflow/feature/9-what-is-git
|\ \  
| |/  
|/|   
| * 24f4f48 feat: studied git, add, commit, log, diff, commit amend
|/  
*   7c6d9d9 Merge pull request #8 from GitTeamWorkflow/docs/7-docs-contributing-브랜치-전략-작업-흐름-예시-업데이트
|\  
| * afc02e5 docs: 작업 흐름 5. Closes #이슈번호 추가
| * 34e8449 docs: fix branch naming rules
| * 9f249c9 [Docs] CONTRIBUTING.md 브랜치 전략 수정, 작업 흐름 예시 업데이트
|/  
*   1b8c4c5 Merge pull request #4 from GitTeamWorkflow/docs/3-contributingmd-issue-title-예시-업데이트
|\  
| * 46435d7 docs: CONTRIBUTING.md Issue Title 예시 업데이트
* |   e62c5a6 Merge pull request #6 from GitTeamWorkflow/feature/park
|\ \  
| |/  
|/|   
| * b8413a1 docs/ branch ruleset 을 위한 옵션별 기능 정리, 명령어 사용 로그 수정
|/  
* 3106bef fix/rm testttt
* 0a6a4ae testttt
* 9aa2af4 docs/CONTRIBUTING.md docs/conflict-resolution.md docs/troubleshooting-log.md
* ae5a65b 초기 구성
* bf6875a fix/구조 변경
*   df87c08 Merge pull request #2 from GitTeamWorkflow/feature/park
|\  
| * 083179b feature/test.html
* | 533978f Merge pull request #1 from GitTeamWorkflow/feature/park
|\| 
| * 833332a feat: config list
|/  
* f51bb0f 초기 설정
* e66ec1b 초기 설정
* 599fdc1 park/ 초기 설정
* 27b5608 초기 구성
```

---

<a id="team_07_mackerel07__B2-2"></a>
## 7. `team_07_mackerel07__B2-2`

- **저장소 URL**: [https://github.com/mackerel07/B2-2.git](https://github.com/mackerel07/B2-2.git)
- **총 커밋 수**: 46개
- **로컬 경로**: `repos/team_07_mackerel07__B2-2`

```text
*   847d573 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #27 from mackerel07/feature/stash-demo
|\  
| * 0fac717 (origin/feature/stash-demo) docs:adding logs for stash trobleshooting
|/  
*   9934ba6 Merge pull request #26 from mackerel07/feature/add-submission-1
|\  
| * 85f6cfa (origin/feature/add-submission-1) docs: Update SUBMISSION.md
| * b9cb20d docs: add SUBMISSION and calculator.py func
|/  
*   2d186ec Merge pull request #25 from mackerel07/docs/conflict-resolution
|\  
| * 8fe24cb (origin/docs/conflict-resolution) docs: add conflict resolution 2
|/  
*   e9b0b80 Merge pull request #24 from mackerel07/feature/subtract-function
|\  
| * 145fc9a (origin/feature/subtract-function) docs: add stash trobleshooting case
|/  
*   271eb46 Merge pull request #23 from mackerel07/docs/troubleshooting-c
|\  
| * a593355 docs: troubleshooting-log-c
|/  
*   7ac4024 solving non-trivial error while merging
|\  
| *   aa6d806 (origin/feature/update-subtract-function) Merge branch 'main' into feature/update-subtract-function
| |\  
| |/  
|/|   
| * 5168868 refactior: modify subtract.py
| | * bf96796 (origin/practice/git-troubleshooting) Revert "docs: add temp line for practice"
| | * edccdc1 docs: add temp line for practice
| |/  
|/|   
* |   1739fd1 refactor: reorganize calculator structure
|\ \  
| |/  
|/|   
| * 3f268f1 (origin/feature/restructure-calculator) refactor: reorganize calculator structure
|/  
*   4a52154 refactor: modify add.py
|\  
| * 47609dd (origin/feature/refactor-add-return) refactor: store add result in variable before return
|/  
*   1035275 feat: Add subtract function
|\  
| * 7926a80 fix: remove duplicated file and fix typo
| * 1e2949d feat: Add subtract.py
|/  
*   1ebb246 Merge pull request #15 from mackerel07/feature/add-function
|\  
| * 4faf1bd (origin/feature/add-function) refactor: apply review feedback for add function
| * ac99a8e feat: implement add function
* |   6ab110d Merge pull request #18 from mackerel07/docs/troubleshooting-log-b
|\ \  
| * \   8fa005d (origin/docs/troubleshooting-log-b) docs: resolve merge conflict and add conflict-resolution case 1
| |\ \  
| |/ /  
|/| |   
* | |   8aa38c0 Merge pull request #17 from mackerel07/feature/add-trouble-8
|\ \ \  
| |_|/  
|/| |   
| * | 448adc8 (origin/feature/add-trouble-8) docs: edit troubleshooting-log.md
| * | 8b600d2 docs: edit troubleshooting-log.md
| * | e8cf4e2 docs: edit troubleshooting-log.md
| * | 839fd59 docs: add 8-1-a
|/ /  
| * 538dfbe docs: Add git reset practice
|/  
*   2467dca Merge pull request #14 from mackerel07/feature/refactor-multiply-return
|\  
| * a3dc18d (origin/feature/refactor-multiply-return) refactor: multiply.py
* |   240fce2 Merge pull request #13 from mackerel07/feature/refactor-divide-return
|\ \  
| |/  
|/|   
| * b2e3c8c (origin/feature/refactor-divide-return) refactor: modify divide.py
|/  
*   a689dce Merge pull request #11 from mackerel07/feature/divide-function
|\  
| * 159e04a (origin/feature/divide-function) refactor: add type inference and handle division by zero exception
| * 8880116 feat: Add devide.py
* |   7fee343 Merge pull request #12 from mackerel07/feature/multiply-function
|\ \  
| |/  
|/|   
| * 17c3898 (origin/feature/multiply-function) feat: Add multiply.py
|/  
*   3fbd796 Merge pull request #2 from mackerel07/feature/contributing-guide
|\  
| * 82f7dd7 (origin/feature/contributing-guide) docs: add contributing guide
|/  
* dfc4fb3 feat: initialize project structure
```

---

<a id="team_09_hkk-cody__b2-2"></a>
## 8. `team_09_hkk-cody__b2-2`

- **저장소 URL**: [https://github.com/hkk-cody/b2-2.git](https://github.com/hkk-cody/b2-2.git)
- **총 커밋 수**: 55개
- **로컬 경로**: `repos/team_09_hkk-cody__b2-2`

```text
*   a110ca9 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #33 from git-workflow/docs/32-write-readme
|\  
| * 47fb1b8 docs: 초기 README.md 작성 및 프로젝트 구조 설명 추가
* |   e47e7ae Merge pull request #34 from git-workflow/docs/27-SUBMISSION.md
|\ \  
| * | 66f357b docs: update submission requirements and remove unused image asset
| * | affffc4 docs: update submission index with detailed member PRs and add evidence images
| * | 4117df9 docs: create submission index document with team and member PRs
* | |   13a6210 Merge pull request #30 from git-workflow/docs/26-write-conflict-resolution
|\ \ \  
| * | | 5dc2b21 docs: 충돌 기록 추가 및 해결 과정 정리
| * | |   012ce66 Merge branch 'main' of https://github.com/git-workflow/b2-2 into docs/26-write-conflict-resolution
| |\ \ \  
| * | | | 90044d0 docs: 충돌 해결 로그 추가
* | | | |   b5a62d4 Merge pull request #31 from git-workflow/docs/29-rebase-history
|\ \ \ \ \  
| |_|_|_|/  
|/| | | |   
| * | | | 4770592 Update docs/rebase-history.md
| * | | | 421df87 docs: add rebase history task
| * | | | 422dacb docs: add rebase history note
|/ / / /  
* | | |   ace6445 Merge pull request #28 from git-workflow/docs/21-codeowners
|\ \ \ \  
| * | | | b72bc12 docs: add codeowners configuration
* | | | |   5cb060d Merge pull request #25 from git-workflow/docs/19-git-revert-troubleshooting
|\ \ \ \ \  
| |_|_|/ /  
|/| | | |   
| * | | |   394fa04 Merge branch 'main' of https://github.com/git-workflow/b2-2 into docs/19-git-revert-troubleshooting
| |\ \ \ \  
| | | |/ /  
| | |/| |   
| * | | | 3196f6c docs: add git revert scenario and related examples
| * | | | 34c571b Revert "docs: add initial test file with placeholder content"
| * | | | 3f6c4c5 docs: add initial test file with placeholder content
| | |_|/  
| |/| |   
* | | |   4271330 Merge pull request #24 from git-workflow/docs/23-conflict.md-1
|\ \ \ \  
| |_|/ /  
|/| | |   
| * | | a1de3f4 docs: resolve conflict markers in conflict resolution log
| * | | 297f27c docs: add conflict resolution log for git stash and amend scenarios
| |/ /  
* | |   48342f7 Merge pull request #22 from git-workflow/docs/18-git-reset-troubleshooting
|\ \ \  
| |/ /  
|/| |   
| * | 6de8f07 docs: add scenario for git reset troubleshooting with detailed explanation
| * |   4a54377 Merge branch 'main' of https://github.com/git-workflow/b2-2 into docs/18-git-reset-troubleshooting
| |\ \  
| |/ /  
|/| |   
* | |   c5d5edb Merge pull request #20 from git-workflow/docs/14-stash-troubleshooting
|\ \ \  
| |_|/  
|/| |   
| * | 413e0c2 docs: enhance troubleshooting log for git stash operations with detailed steps and images
| * |   281c8b0 Merge branch 'main' of https://github.com/git-workflow/b2-2 into docs/14-stash-troubleshooting
| |\ \  
| |/ /  
|/| |   
| * | 0ea63af docs: refine troubleshooting log for git stash operations
| * | cb7581c docs: add troubleshooting images for stash operations
| * | aa64f62 docs: add troubleshooting log for git stash operations
| * | 314544e docs: add troubleshooting images for stash operations
| | * efc8211 docs: 추가 시나리오 섹션 - git reset 및 git revert
| |/  
|/|   
* |   05e1abd Merge pull request #16 from git-workflow/docs/13-amend-troubleshooting
|\ \  
| * | 2c8dc52 docs: add amend troubleshooting markdown plus screenshot
| * | b553fc1 docs: add amend troubleshooting log
|/ /  
* | 2ff696f Merge pull request #12 from git-workflow/docs/11-learning-notes
|\| 
| * b1f3811 docs: add git workflow notes
|/  
*   747d9b5 Merge pull request #10 from git-workflow/docs/7-add-gitnote
|\  
| * ef3242c docs: clarify commit message rules
| * fb89ef1 docs: add contributing guide
* |   4de57da Merge pull request #9 from git-workflow/docs/6-add-learning-note
|\ \  
| * | 5471b55 docs: 보너스와 체크리스트 내용 추가
| * | f670c5f docs: 과제 수행에서 필요한 사전 지식에 대한 내용
|/ /  
* |   c12df92 Merge pull request #8 from git-workflow/docs/4-add-new-docs
|\ \  
| |/  
|/|   
| * 1fb6035 docs: emphasize key terms in learning notes
| * 299edfb docs: move file
| * bec5356 docs: add new docs
* |   fb084c3 Merge pull request #5 from git-workflow/chore/2-pr-template
|\ \  
| |/  
|/|   
| * 90de64b chore: create pr template
|/  
*   bfee7a7 Merge pull request #2 from git-workflow/chore/1-issue-template
|\  
| * 9805cde chore: create issue template
|/  
* 0756bda Initial commit
```

---

<a id="team_10_codyssey-git-workflow__codyssey_git_workflow"></a>
## 9. `team_10_codyssey-git-workflow__codyssey_git_workflow`

- **저장소 URL**: [https://github.com/codyssey-git-workflow/codyssey_git_workflow.git](https://github.com/codyssey-git-workflow/codyssey_git_workflow.git)
- **총 커밋 수**: 44개
- **로컬 경로**: `repos/team_10_codyssey-git-workflow__codyssey_git_workflow`

```text
*   8efae0a (HEAD -> main, origin/main, origin/HEAD) Merge pull request #31 from codyssey-git-workflow/feature/submission-index
|\  
| * 75ba775 docs: link PR #16 to issue #14 in submission index
| * 22fb999 docs: write submission index with member issue/PR links and git history
|/  
*   696f2d1 Merge pull request #29 from codyssey-git-workflow/feature/troubleshooting-reset-soft-mov-hyun
|\  
| * 0c64231 (origin/feature/troubleshooting-reset-soft-mov-hyun) docs: document reset soft troubleshooting
|/  
*   1526d8f Merge pull request #20 from codyssey-git-workflow/mov-hyun-patch-1
|\  
| * 17ced37 (origin/mov-hyun-patch-1) Delete team/mov-hyun
* |   70f6151 Merge pull request #27 from codyssey-git-workflow/feature/readme-setup
|\ \  
| * | 09e3785 (origin/feature/readme-setup) docs: apply review feedback on member one-line intros
| * | dae3311 docs: add README with team member intro links
| |/  
* |   4484ae7 Merge pull request #25 from codyssey-git-workflow/feature/troubleshooting-stash
|\ \  
| * | c2f8f39 (origin/feature/troubleshooting-stash) docs: add git stash troubleshooting log with evidence
* | |   aa0cce5 Merge pull request #19 from codyssey-git-workflow/feature/nontrivial-conflict-mov-hyun
|\ \ \  
| * | | 0860834 (origin/feature/nontrivial-conflict-mov-hyun) docs: add nontrivial conflict markers
| * | | d0298f4 docs: append nontrivial conflict log
| * | | 0169e39 docs: add nontrivial conflict evidence
| * | |   16507a2 docs: resolve nontrivial conflict log
| |\ \ \  
| | | |/  
| | |/|   
| * | | 5fb6c41 docs: add nontrivial conflict draft
* | | |   18430bb Merge pull request #23 from codyssey-git-workflow/feature/troubleshooting-amend
|\ \ \ \  
| |_|/ /  
|/| | /   
| | |/    
| |/|     
| * | 5be9f3e (origin/feature/troubleshooting-amend) docs: add amend before/after git log evidence and screenshots
| * | 10af58d docs: add git commit --amend troubleshooting log
|/ /  
* |   b919147 Merge pull request #17 from codyssey-git-workflow/feature/trivial-conflict-a
|\ \  
| * | 133dbc7 (origin/feature/trivial-conflict-a) docs : 자명충돌 관련 실습 내용 문서화
| * |   1fc2497 Merge pull request #16 from codyssey-git-workflow/feature/trivial-conflict-b
| |\ \  
| | * \   52c456c (origin/feature/trivial-conflict-b) Merge branch 'feature/trivial-conflict-a' into feature/trivial-conflict-b
| | |\ \  
| | |/ /  
| |/| |   
| * | | 12e655f docs: 자명충돌 템플릿 작성
|/ / /  
| * / c65431a docs: 비자명 충돌 템플릿 구현
|/ /  
* |   115dae1 Merge pull request #12 from codyssey-git-workflow/feature/troubleshooting-revert
|\ \  
| * | e2db070 (origin/feature/troubleshooting-revert) docs: revert에 대한 troubleshooting-log 문서화
| * | 703d343 Revert "chore: SUBMISSION.md 잘못된 수정"
| * | 8578ef3 chore: SUBMISSION.md 잘못된 수정
| |/  
* |   4a0748b Merge pull request #10 from codyssey-git-workflow/feature/mov-hyun-intro
|\ \  
| * | d7a84e9 (origin/feature/mov-hyun-intro) docs: add mov-hyun portfolio
| |/  
* |   f6e6dcf Merge pull request #9 from codyssey-git-workflow/feature/refactor-star-candy
|\ \  
| |/  
|/|   
| * dbba49e (origin/feature/refactor-star-candy) refactor: rename star-candy intro to .md
|/  
*   8748e09 Merge pull request #6 from codyssey-git-workflow/feature/star-candy-intro
|\  
| * b5a7a72 (origin/feature/star-candy-intro) docs: add star-candy team intro
* |   e593056 Merge pull request #4 from codyssey-git-workflow/feature/yun-lim-intro
|\ \  
| * | 66ac7fc (origin/feature/yun-lim-intro) docs: update yun-lim team intro and rename to .md
| * | 4b1a7ea docs: add yun-lim team intro
| |/  
* |   0b71739 Merge pull request #2 from codyssey-git-workflow/feature/add-contributing-guide
|\ \  
| |/  
|/|   
| * b110b12 (origin/feature/add-contributing-guide) docs: initial SUBMISSION.md add
| * 011704d docs: add CONTRIBUTING.md
|/  
* a79c3fc initial commit
```

---

<a id="team_11_codyssey-git-collaboration__mission"></a>
## 10. `team_11_codyssey-git-collaboration__mission`

- **저장소 URL**: [https://github.com/codyssey-git-collaboration/mission.git](https://github.com/codyssey-git-collaboration/mission.git)
- **총 커밋 수**: 69개
- **로컬 경로**: `repos/team_11_codyssey-git-collaboration__mission`

```text
*   defddd9 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #37 from codyssey-git-collaboration/feature/whitecy01-submission-issues
|\  
| * 6760ad8 (origin/feature/whitecy01-submission-issues) docs: use actual PR titles verbatim in member issues/PRs section
| * dde79df docs: link remaining issues (#38,#39,#40) and add evidence images 3,4
| * a6e714d docs: add issue links (PR-issue mapping) to submission index
|/  
*   2ed399a Merge pull request #35 from codyssey-git-collaboration/feature/whitecy01-remove-readme
|\  
| * f01b827 (origin/feature/whitecy01-remove-readme) docs: remove placeholder README.md
|/  
*   c659850 Merge pull request #33 from codyssey-git-collaboration/feature/whitecy01-review-summary
|\  
| * 7dabb2b (origin/feature/whitecy01-review-summary) docs: graph images add
| * 7e5ef2b docs: tidy review summary section
| * 337ff8e docs: add code review and review-reflection table to submission
* | 203ade6 Merge pull request #31 from codyssey-git-collaboration/feature/whitecy01-submission
|\| 
| * c6c80cf (origin/feature/whitecy01-submission) docs: attach git history graph screenshots to submission evidence
| * 81b52f8 docs: assign stash troubleshooting to 주영 (PR #26)
| * 894ef8e docs: write submission index with member PRs, conflicts, troubleshooting
|/  
*   f4b4283 Merge pull request #28 from codyssey-git-collaboration/feature/dohee-reset-troubleshoot
|\  
| *   2ef374f (origin/feature/dohee-reset-troubleshoot) Merge branch 'main' into feature/dohee-reset-troubleshoot
| |\  
| |/  
|/|   
* |   e9093e8 Merge pull request #27 from codyssey-git-collaboration/feature/yeowon-amend-practice
|\ \  
| * \   080eef9 (origin/feature/yeowon-amend-practice) Merge branch 'main' into feature/yeowon-amend-practice
| |\ \  
| |/ /  
|/| |   
* | |   b1b828d Merge pull request #26 from codyssey-git-collaboration/feature/juice-temp
|\ \ \  
| * \ \   82ecbb4 (origin/feature/juice-temp) Merge branch 'main' into feature/juice-temp
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   53c143c Merge pull request #22 from codyssey-git-collaboration/feature/whitecy01-revert-practice
|\ \ \ \  
| * | | | 69b1bef (origin/feature/whitecy01-revert-practice) docs: clarify revert behavior and --no-edit option in troubleshooting log
| * | | | c0df569 docs: log revert troubleshooting (undo pushed commit)
| * | | | 04eee6c Revert "feat: add discount util (wrong rate 1.5)"
| * | | | bb0183d feat: add discount util (wrong rate 1.5)
| | * | | 4cc29d8 feat: add git stash troubleshooting temporary file
| | | * | 407ab3d docs: add commit --amend troubleshooting log
| | | * | 5f895c6 fix: 예시 파일 수정
| |_|/ /  
|/| | |   
| | | * 0974509 docs: add troubleshooting log for git reset soft scenario
| |_|/  
|/| |   
* | |   551800f Merge pull request #23 from codyssey-git-collaboration/feature/dohee-temp-modify
|\ \ \  
| |/ /  
|/| |   
| * | 376b968 (origin/feature/dohee-temp-modify) docs: add conflict resolution log for temp_conflict rename case
| * | 4eb9659 docs: add conflict resolution log for temp_conflict rename case
* | | b86f5a9 Merge pull request #20 from codyssey-git-collaboration/feature/dohee-temp-modify
|\| | 
| * |   5738528 Merge remote-tracking branch 'origin/main' into feature/dohee-temp-modify
| |\ \  
| |/ /  
|/| |   
* | |   85a7771 Merge pull request #16 from codyssey-git-collaboration/feature/yeowon-team-info
|\ \ \  
| * | | 95b16b9 (origin/feature/yeowon-team-info) docs: CONTRIBUTING.md 재윤, 여원 병합 충돌 문서 추가
| * | |   2a958f4 Merge branch 'main' into feature/yeowon-team-info
| |\ \ \  
| * | | | 9167716 feat: fill team_info with 주영, 여원
* | | | |   4f2069c Merge pull request #17 from codyssey-git-collaboration/feature/juice-temp
|\ \ \ \ \  
| |_|/ / /  
|/| | | /   
| | |_|/    
| |/| |     
| * | | b47a92a refactor: rename temporary file for the conflict
| | | * d303025 refactor: update temp_file.py logic
| |_|/  
|/| |   
* | | 25e0760 Merge pull request #14 from codyssey-git-collaboration/feature/juice-temp
|\| | 
| * | 770f7dc refactor: rename temporary file
* | |   cbf2850 Merge pull request #15 from codyssey-git-collaboration/feature/whitecy01-team-info
|\ \ \  
| |_|/  
|/| |   
| * | aca5663 (origin/feature/whitecy01-team-info) feat: fill team_info with 재윤, 도희
|/ /  
* |   e59cc67 Merge pull request #13 from codyssey-git-collaboration/feature/whitecy01-common-utils
|\ \  
| |/  
|/|   
| * 6d25e7d (origin/feature/whitecy01-common-utils) feat: add common_utils with team_info placeholder
* |   b34d641 Merge pull request #11 from codyssey-git-collaboration/feature/dohee-temp
|\ \  
| |/  
|/|   
| * 2611b8a (origin/feature/dohee-temp) feat: add temp.py placeholder for conflict practice
|/  
*   67b74a4 Merge pull request #10 from codyssey-git-collaboration/feature/yeowon-number-utils
|\  
| * 15b3ea7 (origin/feature/yeowon-number-utils) fix: 리뷰 반영 - 모듈 레벨 print 제거 및 타입 힌트 추가
| * 58b372d feat: 짝수 반환 함수, 제곱 반환 함수, 큰 값 반환 함수
* |   ee15edb Merge pull request #6 from codyssey-git-collaboration/feature/juice-string-utils
|\ \  
| * | 39ef3af (origin/feature/juice-string-utils) fix: handle uppercase conversion for letter z
| * | abbde06 feat: add string utility functions
* | |   03ab730 Merge pull request #8 from codyssey-git-collaboration/feature/whitecy01-math-utils
|\ \ \  
| |/ /  
|/| |   
| * | 73c7694 (origin/feature/whitecy01-math-utils) Merge branch 'main' into feature/whitecy01-math-utils
| |\| 
| * | 035859a feat: add math utils (add, subtract, divide)
* | |   6185c09 Merge pull request #4 from codyssey-git-collaboration/feature/dohee-list-utils
|\ \ \  
| |_|/  
|/| |   
| * | 53ffb09 (origin/feature/dohee-list-utils) feat: add list utils (first, last, length)
|/ /  
* |   0623fde Merge pull request #2 from codyssey-git-collaboration/feature/whitecy01-contributing
|\ \  
| |/  
|/|   
| * e5e87f3 (origin/feature/whitecy01-contributing) docs: add contributing guide (branch, commit, PR, review rules)
|/  
* 3260f46 Create troubleshooting-log.md
* f5a147a Create conflict-resolution.md
* a563062 Create SUBMISSION.md
* 6c28a7c Delete docs/SUBMISSION.md
* 2a4fb18 Create SUBMISSION.md
* 7c4a195 Create CONTRIBUTING.md
* e2a9386 Initial commit
```

---

<a id="team_13_Daeung-03__Codyssey-b2-2"></a>
## 11. `team_13_Daeung-03__Codyssey-b2-2`

- **저장소 URL**: [https://github.com/Daeung-03/Codyssey-b2-2.git](https://github.com/Daeung-03/Codyssey-b2-2.git)
- **총 커밋 수**: 54개
- **로컬 경로**: `repos/team_13_Daeung-03__Codyssey-b2-2`

```text
*   3689b17 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #26 from Daeung-03/docs/kimjexnghyexn-submission-links
|\  
| * a25576f (origin/docs/kimjexnghyexn-submission-links) docs: 정현 PR/이슈 링크 SUBMISSION.md에 채움
|/  
*   e3034fa Merge pull request #24 from Daeung-03/docs/kimjexnghyexn-python-functions-fix
|\  
| * d09d9b9 (origin/docs/kimjexnghyexn-python-functions-fix) docs: 충돌 기록 #2 작성 (rename detection으로 자동 병합됨)
| *   7562387 Merge branch 'main' of https://github.com/Daeung-03/Codyssey-b2-2 into docs/kimjexnghyexn-python-functions-fix
| |\  
| |/  
|/|   
* |   e753f09 Merge pull request #22 from Daeung-03/chore/daeung-03-rename-note
|\ \  
| * \   87401b1 (origin/chore/daeung-03-rename-note) Merge branch 'main' into chore/daeung-03-rename-note
| |\ \  
| |/ /  
|/| |   
* | |   fab543d Merge pull request #8 from Daeung-03/docs/daeung-03-git-undo
|\ \ \  
| * \ \   ae77af9 Merge remote-tracking branch 'origin/main' into docs/daeung-03-git-undo
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   b6c49ad Merge pull request #18 from Daeung-03/docs/stevenkim18-python-errors
|\ \ \ \  
| * \ \ \   47e0e70 (origin/docs/stevenkim18-python-errors) Merge branch 'main' into docs/stevenkim18-python-errors
| |\ \ \ \  
| |/ / / /  
|/| | | |   
* | | | |   39e69ab Merge pull request #17 from Daeung-03/docs/stevenkim18-pr-review
|\ \ \ \ \  
| * \ \ \ \   88f89d2 (origin/docs/stevenkim18-pr-review) Merge remote-tracking branch 'origin/main' into docs/stevenkim18-pr-review
| |\ \ \ \ \  
| |/ / / / /  
|/| | | | |   
* | | | | |   fbab292 Merge pull request #16 from Daeung-03/docs/stevenkim18-git-conflict
|\ \ \ \ \ \  
| * \ \ \ \ \   3c16a18 (origin/docs/stevenkim18-git-conflict) Merge branch 'main' into docs/stevenkim18-git-conflict
| |\ \ \ \ \ \  
| |/ / / / / /  
|/| | | | | |   
| * | | | | | 7540886 docs: 충돌 마커 검사 오류 수정
| * | | | | | 7a2a99f docs: Git 충돌 노트 추가
| | * | | | |   5548787 docs: PR 리뷰 목차 충돌 해결
| | |\ \ \ \ \  
| |_|/ / / / /  
|/| | | | | |   
| | * | | | | eb63b5c docs: GitHub PR 리뷰 노트 추가
| |/ / / / /  
| | * / / / af93fae docs: Python 예외 처리 노트 추가
| |/ / / /  
| | * | | 491b4bc docs: PR 8 후속 충돌 기록 추가
| | * | |   e998777 Merge remote-tracking branch 'origin/main' into docs/daeung-03-git-undo
| | |\ \ \  
| | * | | | c19b444 docs: PR 8 충돌 해결 기록 추가
| | * | | |   c0fd9e5 Merge remote-tracking branch 'origin/main' into docs/daeung-03-git-undo
| | |\ \ \ \  
| | * | | | | 3616076 docs: Git 되돌리기 노트 작성
| | | | | * | 521a69a chore: 함수 노트 파일명 규칙에 맞게 변경
| |_|_|_|/ /  
|/| | | | |   
| | | | | * a1e4475 docs: 함수 노트에 type hint 설명 추가
| |_|_|_|/  
|/| | | |   
* | | | |   c59eeb7 Merge pull request #10 from Daeung-03/docs/daeung-03-python-basics
|\ \ \ \ \  
| |_|_|_|/  
|/| | | |   
| * | | | 28e9c4a (origin/docs/daeung-03-python-basics) docs: PR 10 후속 충돌 기록 추가
| * | | |   e65ffb5 Merge remote-tracking branch 'origin/main' into docs/daeung-03-python-basics
| |\ \ \ \  
| |/ / / /  
|/| | | |   
* | | | |   64270c2 Merge pull request #12 from Daeung-03/docs/kimjexnghyexn-troubleshoot-amend
|\ \ \ \ \  
| * | | | | cc99d4d (origin/docs/kimjexnghyexn-troubleshoot-amend) docs: 트러블슈팅 기록에 PR 링크 추가
| * | | | | 24b29da docs: commit --amend 트러블슈팅 기록
| * | | | | dcb5a18 docs: git-branch 노트 줄바꿈 정리
| | |/ / /  
| |/| | |   
* | | | |   65c69b9 Merge pull request #20 from Daeung-03/docs/kimjexnghyexn-python-functions
|\ \ \ \ \  
| |_|_|_|/  
|/| | | |   
| * | | | 36a87b1 (origin/docs/kimjexnghyexn-python-functions) docs: 충돌 기록 #1-2 추가
| * | | |   257c64a Merge branch 'main' of https://github.com/Daeung-03/Codyssey-b2-2 into docs/kimjexnghyexn-python-functions
| |\ \ \ \  
| |/ / / /  
|/| | | |   
| * | | | 0b208bf docs: 파이썬 함수 노트 추가
| |/ / /  
| | * | 993732e docs: PR 10 충돌 해결 기록 추가
| | * |   38a20f5 Merge remote-tracking branch 'origin/main' into docs/daeung-03-python-basics
| | |\ \  
| |_|/ /  
|/| | |   
* | | |   2781448 Merge pull request #5 from Daeung-03/docs/kimjexnghyexn-github-flow
|\ \ \ \  
| |/ / /  
|/| | |   
| * | | fe6ae32 (origin/docs/kimjexnghyexn-github-flow) docs: 충돌 #1 해결 기록 추가
| * | |   9e99654 Merge branch 'main' of https://github.com/Daeung-03/Codyssey-b2-2 into docs/kimjexnghyexn-github-flow
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   8abaf7b Merge pull request #6 from Daeung-03/docs/daeung-03-git-basics
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | 023c7d9 (origin/docs/daeung-03-git-basics) docs: Git 기초 노트 작성
|/ / /  
| * / 8df0090 docs: GitHub Flow 노트 추가
|/ /  
| * d258ba6 docs: Python 기초 노트 작성
|/  
*   6f42dca Merge pull request #3 from Daeung-03/docs/kimjexnghyexn-git-branch
|\  
| * 670a6c8 (origin/docs/kimjexnghyexn-git-branch) docs: 포인터 브랜치 헷갈렸던 점
| * 9cc815d docs: 브랜치 포인터 개념 노트 추가
|/  
* 5bf3784 docs: 협업 규칙 완성
* 8c1b506 docs: 이슈 템플릿 추가
* 40d31c9 docs: 팀 협업 계획과 문서 템플릿 추가
* 9858c6d Init: add problem.md
```

---

<a id="team_14_codyssey-b2-2-02__codyssey-b2-2-02"></a>
## 12. `team_14_codyssey-b2-2-02__codyssey-b2-2-02`

- **저장소 URL**: [https://github.com/codyssey-b2-2-02/codyssey-b2-2-02.git](https://github.com/codyssey-b2-2-02/codyssey-b2-2-02.git)
- **총 커밋 수**: 51개
- **로컬 경로**: `repos/team_14_codyssey-b2-2-02__codyssey-b2-2-02`

```text
*   3e42190 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #28 from codyssey-b2-2-02/segretoo-patch-1
|\  
| * 77eef8c (origin/segretoo-patch-1) Update README.md
|/  
*   dbb67ff Merge pull request #27 from codyssey-b2-2-02/docs/history-cleanup-demo
|\  
| * 26af736 (origin/docs/history-cleanup-demo) docs: history-cleanup: rebase -i squash 실습 기록 작성
| * 64c31b8 docs: readme: 히스토리 정리 실습용 문구 추가 (rebase -i squash 데모)
|/  
*   0e6fc2a Merge pull request #26 from codyssey-b2-2-02/docs/final-check
|\  
| * ab3b8ea (origin/docs/final-check) docs: 미션 최종 점검 반영
|/  
*   90754dd Merge pull request #25 from codyssey-b2-2-02/docs/submit
|\  
| * de7f1be (origin/docs/submit) fix: SUBMISSION.md: 김상원의 PR과 ISSUE 코드리뷰반영 conflict-resoulution.md: rebase시 자명충돌 경험에대한 기록 제시 troubleshooting-log.md: reset -soft head~1명령어 사용후 결과에대한제시
|/  
*   393a7f9 Merge pull request #22 from codyssey-b2-2-02/docs/submission-leeaain
|\  
| * 4f210d9 (origin/docs/submission-leeaain) docs: SUBMISSION.md: 내 활동 기록 추가
|/  
*   aff1588 Merge pull request #20 from codyssey-b2-2-02/docs/mission-logs
|\  
| * 936fefd (origin/docs/mission-logs) docs: 미션 로그 문서 정리
|/  
*   861d07c Merge pull request #18 from codyssey-b2-2-02/docs/conflict-log
|\  
| * 3e2958f (origin/docs/conflict-log) docs: conflict-resolution: add_operation 충돌 기록 #1 작성
|/  
| * fb2a41d (origin/docs/conflict,-submission,-troubleshooting, origin/docs-SUBMISSION.md-troubleshooting-log.md-conflict-resolution.md) fix: SUBMISSION.md: 김상원의 PR과 ISSUE 코드리뷰반영 conflict-resoulution.md: rebase시 자명충돌 경험에대한 기록 제시 troubleshooting-log.md: reset -soft head~1명령어 사용후 결과에대한제시
| * 8e74d65 fix: SUBMISSION.md: 김상원의 PR과 ISSUE 코드리뷰반영 conflict-resoulution.md: rebase시 자명충돌 경험에대한 기록 제시 troubleshooting-log.md: reset -soft head~1명령어 사용후 결과에대한제시
|/  
| * 0a2ae92 (origin/feature/troubleshoot-revert) Revert "docs: readme: 임시 텍스트 추가"
| * b12fbec docs: readme: 임시 텍스트 추가
|/  
| * 570d7c9 (origin/feature/troubleshoot-amend) docs: readme: 트러블슈팅 amend 실습용 문구 추가
|/  
| * 1090d46 (origin/feat/conflict-test) feat:ff
|/  
| * af7aeeb (origin/docs/git_stash) docs: troubleshooting-log.md: git stash 시나리오 기록 추가 보강
|/  
*   bfc3202 Merge pull request #16 from codyssey-b2-2-02/feature/rename-add
|\  
| *   5a35ad5 (origin/feature/rename-add) fix: add_operation: 병합 충돌 해결 - 예시값 3.0으로 통일 (파일명 rename 반영)
| |\  
| |/  
|/|   
* |   b470b92 Merge pull request #15 from codyssey-b2-2-02/feature/add-comment
|\ \  
| * | cbb8c96 (origin/feature/add-comment) docs: add: docstring 보강
|/ /  
| * 71a170a fix: add_operation.py: 3.0 -> 10.0
| * 013727e fix: add_operatino: rename
| * c4541bd refactor: add: 파일명을 add_operation.py로 변경
|/  
*   381921b Merge pull request #13 from codyssey-b2-2-02/feature/add-test
|\  
| * 7eaa78d (origin/feature/add-test) feat: add: add 연산 테스트 코드 추가
* |   5d31a94 Merge pull request #10 from codyssey-b2-2-02/fix/mul
|\ \  
| * | 5221506 (origin/fix/mul) fix: mul.py: 클래스의 이름이잘못된부분과 코드리뷰에서 파일의설명이 부족한부분을 docstring으로 채웠습니다.
* | |   80603ef Merge pull request #11 from codyssey-b2-2-02/fix/sub
|\ \ \  
| |/ /  
|/| |   
| * | 574dc5e (origin/fix/sub) fix: sub_operation.py -> sub.py
|/ /  
* |   cdcdb49 Merge pull request #7 from codyssey-b2-2-02/feature/sum
|\ \  
| * \   46a6c01 (origin/feature/sum) Merge branch 'main' into feature/sum
| |\ \  
| |/ /  
|/| |   
* | |   74ec9aa Merge pull request #5 from codyssey-b2-2-02/feature/add
|\ \ \  
| | |/  
| |/|   
| * | e248d6c (origin/feature/add) fix: add: 리뷰 반영 - docstring 작성 및 매개변수명 num1,num2로 수정
| * | 9e93673 chore: gitignore: 파이썬 캐시 파일 제외 설정 추가
| * | eb62be5 feat: add: interface.md에 규정된 규칙을 상속받아 add함수를 구현
|/ /  
* |   d474265 Merge pull request #2 from codyssey-b2-2-02/feat/mul
|\ \  
| * | c818c47 (origin/feat/mul) feat: src.mul.py: src.base_operation.py의 인터페이스를 상속받아 ,두실수를 곱하는 연산을 규정대로 구현했음.
| * | 4c871dd feat: src.mul.py: src.base_operation.py의 인터페이스를 상속받아 ,두실수를 곱하는 연산을 규정대로 구현했음.
|/ /  
| * 1e26a6e fix: sum_operation.py: sub_operation.py로 수정. sum 연산도 SubStrat 연산으로 코드 수정
| *   770ba59 Merge branch 'main' into feature/sum
| |\  
| |/  
|/|   
* | 6e3b3ed fix: codeowners: 팀원 GitHub ID 미지정 수정
* | ec53c30 feat: codeowners: 파일별 자동 리뷰어 지정 추가
| * 310527b feat: 더하기 연산 유틸 함수 작성
|/  
* 7428c65 feat: 사칙연산 프로젝트 초기 구조 정리
* 8c49895 docs: add repo structure and collaboration templates
```

---

<a id="team_15_codyssey-git-team__git-team"></a>
## 13. `team_15_codyssey-git-team__git-team`

- **저장소 URL**: [https://github.com/codyssey-git-team/git-team.git](https://github.com/codyssey-git-team/git-team.git)
- **총 커밋 수**: 87개
- **로컬 경로**: `repos/team_15_codyssey-git-team__git-team`

```text
*   affa50e (HEAD -> main, origin/main, origin/HEAD) Merge pull request #56 from codyssey-git-team/feature/sangwoo-submission
|\  
| * 0ad201c docs: README 에 프로젝트 소개와 폴더 구조 추가
| * 4f11527 docs: SUBMISSION 증빙 전부 링크화, 보호 규칙 설정 캡처와 revert #14 증빙 추가
| * 3d5e26b docs: git 히스토리 증빙과 SUBMISSION 예정 항목 채움
| *   b8557f0 Merge branch 'main' into feature/sangwoo-submission
| |\  
| |/  
|/|   
* |   6a4aa8d Merge pull request #54 from codyssey-git-team/feature/choi-log-stash
|\ \  
| * | 1f171b4 (origin/feature/choi-log-stash) docs: summarize stash scenario participants
| * | 9d21eed docs: correct stash conflict details
| * | 3bf3c03 docs: troubleshooting-log stash 시나리오 기록
| | * 7fbd63d docs: SUBMISSION.md 초안과 보호 규칙·CODEOWNERS 증빙 추가
| |/  
|/|   
* |   d8fd36d Merge pull request #53 from codyssey-git-team/feature/p516n-log-amend
|\ \  
| |/  
|/|   
| * 57951b3 (origin/feature/p516n-log-amend) docs: troubleshooting sqaush 해시 오타 수정
| * f3d28a3 docs: amend 시나리오에 squash 후 커밋 해시 표기 추가
| * f78fc83 docs: troubleshooting-log amend 시나리오 기록
|/  
*   e440890 Merge pull request #50 from codyssey-git-team/feature/whoawoodev-log-reset
|\  
| * 227465c docs: correct reflog retention for unreachable commits in reset scenario
| * 3899342 docs: add reset scenario to troubleshooting-log
* |   715bb24 Merge pull request #41 from codyssey-git-team/docs/p516n-conflict-1
|\ \  
| |/  
|/|   
| * d248d7c (origin/docs/p516n-conflict-1) docs: conflict-resolution 충돌 #1 기록 추가
* |   75b6470 Merge pull request #48 from codyssey-git-team/feature/sangwoo-log-revert
|\ \  
| * | 089d3f3 docs: revert 기록의 재머지 주의점에 실제 실행 출력 추가
| * | 6fb6b76 docs: troubleshooting-log revert 시나리오 기록
|/ /  
* |   34383fc Merge pull request #46 from codyssey-git-team/feature/sangwoo-troubleshooting-skeleton
|\ \  
| * | 2249ab1 docs: troubleshooting-log 뼈대 추가 — 시나리오 4개 제목과 담당 TODO
|/ /  
* |   d65177e Merge pull request #44 from codyssey-git-team/fix/sangwoo-revert-chunk-default
|\ \  
| * | af2012f Revert "Merge pull request #39 from codyssey-git-team/feature/sangwoo-list-default-size"
* | |   e1594d1 Merge pull request #43 from codyssey-git-team/feature/whoawoodev-codeowners
|\ \ \  
| |/ /  
|/| |   
| * | ed0788f chore: add CODEOWNERS for path-based reviewer assignment
| |/  
* |   103473f Merge pull request #39 from codyssey-git-team/feature/sangwoo-list-default-size
|\ \  
| |/  
|/|   
| * 72106f0 feat: chunk size 생략 시 자르지 않고 통째로 반환
|/  
*   00a7b04 Merge pull request #35 from codyssey-git-team/feature/sangwoo-conflict-log
|\  
| * e0b0050 docs: 충돌 #2 결과에 PR #33 머지 SHA 추가
| * f8b08af docs: 충돌 #2 배운 점의 rename 감지 설명 정정
| * fdd467f docs: conflict-resolution 뼈대 및 충돌 #2 기록 추가
* |   3e6e237 Merge pull request #33 from codyssey-git-team/feature/sangwoo-greet-validation
|\ \  
| * | 1e37419 fix: rename 충돌 해결 및 greeting.py 에 빈 이름 검증 적용
| |\| 
| * | 6a8af4f feat: greet 빈 이름 검증 추가
* | |   6404a49 Merge pull request #28 from codyssey-git-team/feature/p516n-price-comma
|\ \ \  
| * \ \   f254ca2 (origin/feature/p516n-price-comma) Merge branch 'main' into feature/p516n-price-comma
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   95755ec Merge pull request #32 from codyssey-git-team/feature/choi-price-rounding
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | b1951b2 (origin/feature/choi-price-rounding) fix: format_price 소수점 반올림
* | | |   5946b60 Merge pull request #31 from codyssey-git-team/feature/whoawoodev-move-helpers
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | 10092ca refactor: use f-string in greet
| * | | fed6888 refactor: move helpers.py into utils package as greeting.py
|/ / /  
* | |   75bcafc Merge pull request #24 from codyssey-git-team/feature/sangwoo-branch-cleanup-rule
|\ \ \  
| * | | 55dbdf2 docs: 브랜치 삭제 주체를 PR 작성자로 명시하고 자동 삭제 설정은 보류
| * | | e7b07e2 docs: 병합 완료 브랜치 삭제 규칙 추가
* | | |   b7f260e Merge pull request #25 from codyssey-git-team/feature/choi-math-utils
|\ \ \ \  
| | |/ /  
| |/| |   
| * | | a2150c6 (origin/feature/choi-math-utils) fix: clamp 범위 유효성 검사 추가
| * | | 21420f4 feat: clamp 함수 추가
| |/ /  
| | * 37f3225 feat: format_price 천 단위 쉼표 추가
| |/  
|/|   
* |   9700c86 Merge pull request #19 from codyssey-git-team/feature/P516n-string-utils
|\ \  
| |/  
|/|   
| * d3a6544 (origin/feature/P516n-string-utils) fix: string_utils 케이스 변환 시 선행 밑줄 보존 및 대문자화 로직 수정
| * 8a04190 docs: Format function names in README table
| *   ca4af78 Merge branch 'main' into feature/P516n-string-utils
| |\  
| |/  
|/|   
* |   804eeec Merge pull request #21 from codyssey-git-team/feature/choi-contributing-branch
|\ \  
| * \   fdbee25 (origin/feature/choi-contributing-branch) Merge branch 'main' into feature/choi-contributing-branch
| |\ \  
| |/ /  
|/| |   
* | |   bfa4787 Merge pull request #16 from codyssey-git-team/feature/sangwoo-list-utils
|\ \ \  
| * \ \   10c6a3e Merge branch 'main' into feature/sangwoo-list-utils
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   dca7855 Merge pull request #18 from codyssey-git-team/revert-14-feature/choi-contributing-branch
|\ \ \ \  
| | * | | b9ee286 docs: 유틸 함수 표에 chunk 추가
| | * | | 5a55714 feat: chunk 리스트 분할 유틸 추가
| | | * | 45f0831 docs: 브랜치 전략 및 네이밍 규칙 추가
| | | | *   16bc34e Merge branch 'feature/P516n-string-utils' of https://github.com/codyssey-git-team/git-team into feature/P516n-string-utils
| | | | |\  
| | | | | * 2381602 feat: string_utils 카멜, 스네이크 유틸함수 구현
| | | | * | c87f437 feat: string_utils 카멜, 스네이크, 파스칼 유틸함수 구현
| | | | |/  
| | | | | * 4026e30 (origin/revert-14-feature/choi-contributing-branch) docs: 브랜치 전략 및 핫픽스 네이밍 규칙 추가
| | |_|_|/  
| |/| | |   
| * | | | 35fc0ea Revert "docs: 브랜치 전략 및 네이밍 규칙 추가"
|/ / / /  
* | | |   8b3c5f4 Merge pull request #14 from codyssey-git-team/feature/choi-contributing-branch
|\ \ \ \  
| | |/ /  
| |/| |   
| * | | 7167eb9 docs: 브랜치 전략 및 네이밍 규칙 추가
| |/ /  
* | |   104e68c Merge pull request #13 from codyssey-git-team/feature/whoawoodev-date-utils
|\ \ \  
| |/ /  
|/| |   
| * | 33cc40a docs: clarify absolute-days behavior in days_between docstring
| * | 8f9b527 docs: add days_between to util function table
| * | 1673b46 feat: add days_between date util
* | |   6389106 Merge pull request #8 from codyssey-git-team/feature/sangwoo-contributing-conflict
|\ \ \  
| |/ /  
|/| |   
| * | 3ef6f45 docs: 충돌 해결 주체를 나중에 머지하는 쪽으로 정한 이유 추가
| * | 73bf724 docs: CONTRIBUTING 에 충돌 대응 흐름 추가
* | |   9157387 Merge pull request #9 from codyssey-git-team/feature/whoawoodev-contributing-review
|\ \ \  
| |_|/  
|/| |   
| * | 78ddcd3 docs: add review submission and reply rules per review
| * | 3fb6450 docs: add PR and code review rules
| |/  
* |   1009c99 Merge pull request #6 from codyssey-git-team/Docs/commit-convention
|\ \  
| |/  
|/|   
| * 213dbdf (origin/Docs/commit-convention) docs: CONTRIBUTING.md 커밋 메시지 컨벤션에 금지 조항 추가
| * cac0ff2 docs: CONTRIBUTING.md에 커밋 메시지 컨벤션 작성
|/  
* 159c3df chore: 저장소 뼈대와 시드 파일 추가
*   a37249d Merge pull request #2 from codyssey-git-team/feature/sangwoo-issue-pr-templates
|\  
| * 382f9ec docs: GitHub 이슈/PR 템플릿 추가
|/  
* ac33162 chore: 저장소 초기화 (.gitignore 추가)
```

---

<a id="team_16_gitflow-practice-team__github-workflow-practice"></a>
## 14. `team_16_gitflow-practice-team__github-workflow-practice`

- **저장소 URL**: [https://github.com/gitflow-practice-team/github-workflow-practice.git](https://github.com/gitflow-practice-team/github-workflow-practice.git)
- **총 커밋 수**: 64개
- **로컬 경로**: `repos/team_16_gitflow-practice-team__github-workflow-practice`

```text
*   666c627 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #26 from gitflow-practice-team/feature/taedong-edit-docs
|\  
| * 0dd85bf docs: 충돌 해결 및 git 명령어 트러블슈팅 문서화 수정
|/  
*   450dc9e Merge pull request #24 from gitflow-practice-team/feature/jeongbeen-final-evidence
|\  
| * 7d56b8c docs: 최신 main 반영 후 Git 히스토리 갱신
| * a3a88b8 docs: 팀 병합 및 리뷰 참여 확인 결과 반영
| *   6151049 Merge branch 'main' into feature/jeongbeen-final-evidence
| |\  
| |/  
|/|   
* |   5850f8d Merge pull request #20 from gitflow-practice-team/feature/juseong-contributing-prohibitions
|\ \  
| * \   9e1d89b docs: CONTRIBUTING 충돌 해결 및 main 반영
| |\ \  
| |/ /  
|/| |   
| * | afe9eb2 docs: distinguish rebase rules for shared vs personal branches
| * | be43e30 docs: add prohibitions and collaboration flow to CONTRIBUTING
| | * 3e31e0a docs: Git 히스토리 최신화
| | * 3d3bd31 docs: 중복된 충돌 기록 정리
| | * 55114c2 docs: 충돌 기록 추가 후 Git 히스토리 갱신
| | * 70e7f69 docs: CONTRIBUTING 충돌 해결 과정 기록 추가
| | * 9a1abce docs: PR 20 충돌 해결 과정과 히스토리 기록
| | * 228ae8f docs: 충돌 및 트러블슈팅 완료 상태 반영
| | * e41fc78 docs: 트러블슈팅 실습 후 Git 히스토리 갱신
| | * 7ae0ec1 docs: Git 트러블슈팅 4종 실제 실습 결과 기록
| | * ba08d62 docs: 충돌 해결 커밋 링크와 히스토리 증빙 갱신
| | *   2484c89 docs: README 충돌 해결 및 과정 기록
| | |\  
| |_|/  
|/| |   
* | |   277b14d Merge pull request #21 from gitflow-practice-team/feature/juseong-learning-notes
|\ \ \  
| * | | 33de0fc docs: correct cohort and clarify proxy vs CORS
| * | | 18a14ed docs: add concept-focused learning notes for juseong
| |/ /  
| | * a93397f docs: 제출물 인덱스에 통합 PR 링크 추가
| | * 7dd7edc docs: 제출물 인덱스와 Git 히스토리 증빙 추가
| | * 62a1836 chore: 문서별 CODEOWNERS 설정
| | * 3cf1977 docs: Git 트러블슈팅 기록 구조와 stash 실습 추가
| | * 9a4d85b docs: README 프로젝트 소개 문구 추가
| | * d482078 docs: interactive rebase 전후 히스토리 기록
| | * b677adf docs: interactive rebase 실습 내용 정리
| |/  
|/|   
* |   6d48364 Merge pull request #22 from gitflow-practice-team/feature/park-git-collab-rules
|\ \  
| * | 99a999e docs: 링크 일관성 추가
| * | 9db25a3 docs: 자기소개와 코드 리뷰 및 Git/GitHub 협업 규칙 문서화
* | |   1d8e5b0 Merge pull request #19 from gitflow-practice-team/feature/park-conflict-guide
|\ \ \  
| |/ /  
|/| |   
| * | c38fe96 docs: 충돌 대응 피드백 반영 내용 추가
| * | 834d7e0 docs: Git 충돌 해결 및 트러블슈팅 가이드 작성
|/ /  
* |   6a2f164 Merge pull request #14 from gitflow-practice-team/feature/taedong-code-review-guide
|\ \  
| |/  
|/|   
| * d3650c3 docs: 충돌 기록 내용 수정
* | 7fe6cb0 Merge pull request #9 from gitflow-practice-team/feature/taedong-code-review-guide
|\| 
| * e794dc9 docs: 해결 커밋 링크 추가
| * 094b594 fix: 병합 충돌 해결 및 문서화 작업
| *   53b2624 Merge branch 'main' into feature/taedong-code-review-guide
| |\  
| |/  
|/|   
* |   fbc3ab3 Merge pull request #10 from gitflow-practice-team/feature/taedong-introduction-and-study
|\ \  
| * | ff4121a docs: merge와 관련된 내용 추가
| * | 265e3f8 docs: 엄태동 자기소개 및 학습 내용 문서화
* | |   4523cfe Merge pull request #13 from gitflow-practice-team/feature/minwoo-collaboration-guide
|\ \ \  
| * | | f546534 docs: 커밋 메시지 컨벤션, PR 규칙, PR 병합 조건 내용 작성
| * | | 67b2942 docs: 팀 브랜치 네이밍 예시 작성
* | | |   43dc0ca Merge pull request #11 from gitflow-practice-team/feature/minwoo-introduction
|\ \ \ \  
| |_|/ /  
|/| | |   
| * | | 36102de docs: 오버플로우에 대한 부연 설명 작성
| * | | c339777 docs: n에 대한 조건 설명 작성
| |/ /  
| * / 75de895 docs: 육민우 자기소개와 이진 거듭제곱 학습 내용 추가
|/ /  
| * 6e8eb1b docs: 리뷰 예시 추가
| * 49f2241 docs: 코드 리뷰 및 반영 규칙 문서화
|/  
*   0fb39d8 Merge pull request #5 from gitflow-practice-team/feature/jeongbeen-introduction
|\  
| * 9b58ea5 docs: git stash 복원 방법 설명 보완
| * 3e573b2 docs: 정빈 자기소개와 Git 학습 내용 추가
* |   7c39963 Merge pull request #4 from gitflow-practice-team/feature/jeongbeen-collaboration-guide
|\ \  
| |/  
|/|   
| * 2ab13db docs: 실제 팀원 기준으로 브랜치 예시 수정
| * 8487cfa docs: 팀 브랜치 및 Issue 협업 규칙 반영
|/  
* 87daa92 chore: 미션 수행 내용에 맞게 폴더명 및 파일명 변경
* 9bf1cc7 chore: project setting initial
* 99a1710 chore: project initial
* 81a29f8 Initial commit
```

---

<a id="team_17_c-b2-2__make-program-with-friends"></a>
## 15. `team_17_c-b2-2__make-program-with-friends`

- **저장소 URL**: [https://github.com/c-b2-2/make-program-with-friends.git](https://github.com/c-b2-2/make-program-with-friends.git)
- **총 커밋 수**: 74개
- **로컬 경로**: `repos/team_17_c-b2-2__make-program-with-friends`

```text
*   a39398e (HEAD -> main, origin/main, origin/HEAD) Merge pull request #41 from c-b2-2/Cerhovah-patch-1
|\  
| * c99262c (origin/Cerhovah-patch-1) Revise SUBMISSION.md with updated review and tasks
* |   641f759 Merge pull request #42 from c-b2-2/Cerhovah-patch-2
|\ \  
| |/  
|/|   
| * e84e25c (origin/Cerhovah-patch-2) Revise branch naming convention in CONTRIBUTING.md
|/  
*   d484cd5 Merge pull request #40 from c-b2-2/feature/final-submission-sync
|\  
| * e4c6030 (origin/feature/final-submission-sync) docs: PR #38 병합 후 Git 이력 갱신
| *   77afa67 merge: PR #38 반영
| |\  
| |/  
|/|   
* |   78829e1 Merge pull request #38 from c-b2-2/feature/00skgun-stash-verification
|\ \  
| * | 1fe32a1 (origin/feature/00skgun-stash-verification) docs: 리뷰 반영해 stash 시나리오 분리 및 역할과 주의점 복원
| * | f512ab3 docs: stash 기록 참여자 섹션 정리
| * | 1b2bde2 docs: stash 실습 기록 정리
| * | 808fa9e docs: stash 보관 및 복원 검증 결과 추가
|/ /  
| * d90b164 docs: 제출 문서 커밋을 Git 이력에 반영
| * e3adfe6 docs: 제출 인덱스에 최종 정리 PR 연결
| * cbd2086 docs: 미션 최종 제출 문서와 증빙 상태 동기화
|/  
*   4f802bf Merge pull request #36 from c-b2-2/feature/00skgun-stash-practice
|\  
| * 1a21ad1 docs: 최건영 stash 실습 준비와 시연 기록 추가
|/  
*   0bc1f5c Merge pull request #34 from c-b2-2/feature/cerhovah-mission-completion
|\  
| * 715c928 (origin/feature/cerhovah-mission-completion) docs: 충돌 실습 이력 검증 및 재실습 절차 정리
| *   ba71362 merge: 최신 main 문서 반영
| |\  
| * | ab8ebea docs: 의도적 충돌 실습 2회 증빙 기록
| * |   2ae0b6c docs: 충돌 실습 2 해결
| |\ \  
| | * \   4d112a4 docs: 충돌 실습 1 해결
| | |\ \  
| | * | | 33ecd38 docs: 충돌 실습 1 참여자 B 변경
| * | | | 19cd9f4 docs: 충돌 실습 2 참여자 A 변경
| | |/ /  
| |/| |   
| * | | 8213827 docs: 충돌 실습 1 참여자 A 변경
| |/ /  
* | |   6f3f2da Merge pull request #28 from c-b2-2/feature/docs_troubleshooting
|\ \ \  
| * \ \   2cb5086 (origin/feature/docs_troubleshooting) Merge branch 'main' into feature/docs_troubleshooting
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   7e2731b Merge pull request #11 from c-b2-2/feature/multiply_function
|\ \ \ \  
| |_|_|/  
|/| | |   
| * | | 82ba2d7 (origin/feature/multiply_function) fix:곱셈함수
| * | |   2507c00 Merge branch 'main' into feature/multiply_function
| |\ \ \  
| * | | | bf2fc22 feat: 곱셈함수 구현
* | | | |   f5558d1 Merge pull request #29 from c-b2-2/feature/docs_trouble
|\ \ \ \ \  
| * \ \ \ \   dd9f88c (origin/feature/docs_trouble) Merge branch 'main' into feature/docs_trouble
| |\ \ \ \ \  
| |/ / / / /  
|/| | | | |   
* | | | | |   187a786 Merge pull request #31 from c-b2-2/feature/cerhovah-mission-completion
|\ \ \ \ \ \  
| | |_|_|_|/  
| |/| | | |   
| * | | | |   32f1d91 merge: troubleshooting 기록 충돌 해결
| |\ \ \ \ \  
| |/ / / / /  
|/| | | | |   
| * | | | | 3781c4b docs: 충돌 참여자 선택과 리뷰 실습 정리
| * | | | | 23b4b87 docs: 최소 사람 작업 기준 통일
| * | | | | 512b467 docs: 공개 검증 기록 상태 반영
| * | | | | 8aeb70a docs: 미션 제출 문서와 검증 자료 정리
| | * | | |   85ba892 Merge branch 'main' into feature/docs_trouble
| | |\ \ \ \  
| |_|/ / / /  
|/| | | | |   
* | | | | |   c6c9bcb Merge pull request #19 from c-b2-2/feature/etc
|\ \ \ \ \ \  
| * \ \ \ \ \   fd980f2 (origin/feature/etc) Merge branch 'main' into feature/etc
| |\ \ \ \ \ \  
| * | | | | | | 84e9df7 feat: add power utility
* | | | | | | |   57f8741 Merge pull request #32 from c-b2-2/docs/revert-practice-draft
|\ \ \ \ \ \ \ \  
| |_|_|/ / / / /  
|/| | | | | | |   
| * | | | | | | 3ce1009 (origin/feature/revert-practice) docs: 실제 revert 커밋과 검증 결과 기록
| * | | | | | | 944e17d Revert "chore: revert 실습용 파일 추가"
| * | | | | | | e5fa1a6 chore: revert 실습용 파일 추가
| * | | | | | | 39fc4eb docs: git revert 트러블슈팅 실습 초안 추가
|/ / / / / / /  
| | | * / / / 4563d79 docs: git commit --amend 실습 추가
| |_|/ / / /  
|/| | | | |   
| | | | | * bf394ca docs:troubleshooting reset 추가
| |_|_|_|/  
|/| | | |   
* | | | |   f18a482 Merge pull request #24 from c-b2-2/feature/stash-practice
|\ \ \ \ \  
| * | | | | 67d3c5c (origin/feature/stash-practice) docs: git stash 트러블슈팅 실습 기록
* | | | | |   eb4e911 Merge pull request #22 from c-b2-2/feature/code_review_rule
|\ \ \ \ \ \  
| |_|_|/ / /  
|/| | | | |   
| * | | | |   bad04f8 Merge branch 'main' into feature/code_review_rule
| |\ \ \ \ \  
| |/ / / / /  
|/| | | | |   
* | | | | |   0c891a5 Merge pull request #18 from c-b2-2/feature/member-d-divide
|\ \ \ \ \ \  
| |_|_|_|_|/  
|/| | | | |   
| * | | | | 6979f4d fix: 나눗셈의 기본 ZeroDivisionError 유지
| * | | | | 7bbdaee feat: 나눗셈 함수 및 0 나누기 예외 처리 구현
* | | | | |   8d8ca7f Merge pull request #21 from c-b2-2/feature/lee-conflict-guide
|\ \ \ \ \ \  
| |_|_|/ / /  
|/| | | | |   
| * | | | | b2ef177 (origin/feature/lee-conflict-guide) docs: 충돌 발생 시 기본 대응 흐름 추가
| |/ / / /  
* | | | |   f8224fd Merge pull request #13 from c-b2-2/feature/add-function
|\ \ \ \ \  
| |/ / / /  
|/| | | |   
| * | | | e3b21a0 refactor: 덧셈 함수만 남기도록 정리
| * | | | de05160 feat: 덧셈 함수 구현
| | |/ /  
| |/| |   
| | * | 343794c docs: 코드 리뷰 규칙 추가
| |/ /  
|/| |   
* | |   3db0377 Merge pull request #10 from c-b2-2/feature/pr-template
|\ \ \  
| |/ /  
|/| |   
| * | 0028997 docs: PR 체크리스트의 브랜치 조건 제거
| * | 09d6454 docs: PR 템플릿 추가
| |/  
* |   3486a5a Merge pull request #6 from c-b2-2/feature/lee-subtract
|\ \  
| |/  
|/|   
| * eee867a (origin/feature/lee-subtract) feat: add subtraction utility
* |   0789bb8 Merge pull request #7 from c-b2-2/feature/5-add-main-py
|\ \  
| * | 4b7255d feat: add main py with hello world
| |/  
* |   18c3fd5 Merge pull request #4 from c-b2-2/docs/commit-guidelines
|\ \  
| |/  
|/|   
| * de29726 (origin/docs/commit-guidelines) docs: 커밋 메시지 규칙 작성
|/  
* 4251988 chore: init
```

---

<a id="team_18_B2-2-Cody__git-collab-mission"></a>
## 16. `team_18_B2-2-Cody__git-collab-mission`

- **저장소 URL**: [https://github.com/B2-2-Cody/git-collab-mission.git](https://github.com/B2-2-Cody/git-collab-mission.git)
- **총 커밋 수**: 41개
- **로컬 경로**: `repos/team_18_B2-2-Cody__git-collab-mission`

```text
*   bc272b3 (HEAD -> main, origin/main, origin/HEAD) Merge pull request #23 from B2-2-Cody/feature/inho-finalize-submission
|\  
| * 65fd9bd (origin/feature/inho-finalize-submission) docs: finalize SUBMISSION.md with real PR/review links and sync checklist status
|/  
*   98369c8 Merge pull request #22 from B2-2-Cody/feature/inho-troubleshooting-doc
|\  
| * 677487e (origin/feature/inho-troubleshooting-doc) docs: record revert troubleshooting scenario
| * 42ae8bb docs: record reset soft troubleshooting
| * 3ea0436 docs: fill stash troubleshooting scenario
| * 9153013 docs: document amend troubleshooting scenario
| | * df3cdc9 (origin/feature/gitae-revert-practice) Revert "refactor: simplify is_even modulo check"
| | * ef03e8e refactor: simplify is_even modulo check
| |/  
|/|   
* |   6c15167 Merge pull request #21 from B2-2-Cody/feature/kyowon-conflict-doc
|\ \  
| |/  
|/|   
| * 4f64c5b (origin/feature/kyowon-conflict-doc) docs: align recorded conflict markers
| * 82754ad docs: complete conflict resolution log
|/  
*   123067a Merge pull request #20 from B2-2-Cody/feature/gitae-split-utils
|\  
| * 68bd729 (origin/feature/gitae-split-utils) docs: record rename vs modify conflict in conflict-resolution.md
| *   15dd216 fix: resolve docstring conflict after utils.py -> string_utils.py rename
| |\  
| |/  
|/|   
* |   4fb9de3 Merge pull request #19 from B2-2-Cody/feature/kyowon-fix-docstring
|\ \  
| * | ad4f813 (origin/feature/kyowon-fix-docstring) docs: note temporary conflict scenario wording
| * | 8ba58a6 docs: clarify shared utility module scope
|/ /  
| * 0cfa982 refactor: split utils.py into string_utils.py
|/  
*   fa6afe8 Merge pull request #17 from B2-2-Cody/feature/gitae-math-utils
|\  
| * 34ead2e (origin/feature/gitae-math-utils) feat: add numeric utilities to utils.py
|/  
*   c683adc Merge pull request #16 from B2-2-Cody/feature/kyowon-string-utils
|\  
| * 83f7598 (origin/feature/kyowon-string-utils) docs: clarify palindrome normalization behavior
| *   2799131 fix: resolve add/add conflict in utils.py
| |\  
| |/  
|/|   
* |   d2178f1 Merge pull request #15 from B2-2-Cody/feature/inho-list-utils
|\ \  
| * | a1ed940 (origin/feature/inho-list-utils) feat: add flatten and unique list utilities to utils.py
|/ /  
| * 3c46886 feat: add string utilities to utils.py
|/  
*   5c1ec0c Merge pull request #13 from B2-2-Cody/feature/inho-submission
|\  
| * 37eba5c (origin/feature/inho-submission) docs: add team info to README (real GitHub IDs) and create SUBMISSION.md index
* |   ba87fb6 Merge pull request #3 from B2-2-Cody/feature/inho-doc-templates
|\ \  
| * | bc27dde (origin/feature/inho-doc-templates) docs: sync conflict-resolution.md template with corrected SCENARIO.md
| * | c8b750f docs: add conflict-resolution and troubleshooting-log templates
| |/  
* |   be228eb Merge pull request #2 from B2-2-Cody/feature/inho-contributing
|\ \  
| * | 3e2f27a (origin/feature/inho-contributing) docs: unify kyowon branch prefix to match GitHub ID (kyowon1108)
| * | 971ad07 docs: add team contributing guide
| |/  
* |   4fe64ae Merge pull request #1 from B2-2-Cody/feature/inho-scenario-doc
|\ \  
| |/  
|/|   
| * fedb52b (origin/feature/inho-scenario-doc) docs: update team GitHub IDs, unify kyowon branch prefix, clarify checklist status
| * f7954ab docs: fix conflict #1/#2 scenarios to reflect actual git merge behavior
| * 661e394 docs: sync scenario doc with actual GitHub issue numbers
| * 55cf6de docs: add detailed team collaboration scenario
|/  
* 5b20f8e Initial commit
```

---

<a id="team_19_codyssey-b2-2-nlk__git-exercise"></a>
## 17. `team_19_codyssey-b2-2-nlk__git-exercise`

- **저장소 URL**: [https://github.com/codyssey-b2-2-nlk/git-exercise.git](https://github.com/codyssey-b2-2-nlk/git-exercise.git)
- **총 커밋 수**: 45개
- **로컬 경로**: `repos/team_19_codyssey-b2-2-nlk__git-exercise`

```text
* 32392b7 (HEAD -> main, origin/main, origin/HEAD) Fix contributor names in troubleshooting log
*   a081b93 Merge pull request #13 from dlwognsdc610-maker/ljh
|\  
| *   737b0aa Merge branch 'main' into ljh
| |\  
| |/  
|/|   
* |   b610523 Merge pull request #10 from nothingOld/feature/nothingOld-contributing
|\ \  
| * | 0f8dc20 docs/pull-request-template 추가
* | |   0424a90 Merge pull request #9 from codyssey-b2-2-nlk/sanghwa3
|\ \ \  
| * | | be769df chore: 팀소개 업로
|/ / /  
* | |   c1d2b7f Merge pull request #8 from codyssey-b2-2-nlk/sanghwa2
|\ \ \  
| * | | ff5e76a chore : 팀소개 추가
|/ / /  
* | |   751fe54 Merge pull request #7 from codyssey-b2-2-nlk/sanghwa
|\ \ \  
| * \ \   f9f0dae Merge branch 'main' into sanghwa
| |\ \ \  
| |/ / /  
|/| | |   
* | | |   b6980cb Merge pull request #5 from nothingOld/feature/nothingOld-contributing
|\ \ \ \  
| | |/ /  
| |/| |   
| * | |   2031096 Merge remote-tracking branch 'origin/feature/nothingOld-contributing' into feature/nothingOld-contributing
| |\ \ \  
| |/ / /  
|/| | |   
| * | |   d059abc Merge pull request #4 from dlwognsdc610-maker/ljh
| |\ \ \  
| | | * | 3eb33e8 chore: upload sanghwa
| |_|/ /  
|/| | |   
* | | |   4fe9054 Merge pull request #4 from dlwognsdc610-maker/ljh
|\ \ \ \  
| |/ / /  
|/| / /   
| |/ /    
| * | 3de6786 docs: correct Reviewed-by trailer guidance
| * |   4b3a0a8 Merge branch 'main' into ljh
| |\ \  
| |/ /  
|/| |   
* | |   920ab14 Merge pull request #2 from nothingOld/feature/nothingOld-contributing
|\ \ \  
| * | | 5051969 docs: contributing 작성
|/ / /  
* | |   9390e38 Merge pull request #1 from dlwognsdc610-maker/ljh
|\ \ \  
* | | | 3b4c1e1 chore: change src to team
| | * | 250ebb1 docs: record non-trivial merge conflict
| | * |   b2e92f2 docs: resolve PR guidance conflict
| | |\ \  
| | | * | 0faad02 docs/CONTRIBUTING.md: define focused review rules
| | * | |   80ae8cf docs: merge PR template guidance
| | |\ \ \  
| | | |/ /  
| | |/| |   
| | | | * 1156ff2 docs: complete submission evidence
| | | | * 74bfb53 docs/team: require pull request evidence links
| | | | * 67b2c53 docs/team: require commit evidence links
| | | | * 0d4a3c3 Revert "README: write examppel"
| | | | * a982b81 docs/team: describe contribution records
| | | | * 9d65942 docs: record stash workflow
| | | | * ad2664d README: write examppel
| | | | * 8303201 docs: correct Reviewed-by trailer guidance
| | | | * 8c2d1eb docs: contributing 작성
| | | | * 41a916f chore: change src to team
| | | | * f6cc364 docs: record non-trivial merge conflict
| | | | * a6e6a8a docs/CONTRIBUTING.md: define focused review rules
| | | |/  
| | | * d7c0785 docs/CONTRIBUTING.md: require PR evidence sections
| | |/  
| | * 1bfb1d8 docs: update other spec requirements.
| |/  
| * ec50144 docs/CONTRIBUTE.md: add commit convention
|/  
* 346c35a chore:  Branch Protection Rule
* 829516c test commit
* c158e84 test commit
* 5ee77a8 Initial commit
```

---

<a id="team_20_Codyssey2-2__cody2-2Assign"></a>
## 18. `team_20_Codyssey2-2__cody2-2Assign`

- **저장소 URL**: [https://github.com/Codyssey2-2/cody2-2Assign.git](https://github.com/Codyssey2-2/cody2-2Assign.git)
- **총 커밋 수**: 35개
- **로컬 경로**: `repos/team_20_Codyssey2-2__cody2-2Assign`

```text
*   920a81d (HEAD -> main, origin/main, origin/HEAD) Merge pull request #28 from Codyssey2-2/docs/27-complete-submission-index
|\  
| * 531044a (origin/docs/27-complete-submission-index) docs: complete submission evidence index
|/  
*   7794f2b Merge pull request #26 from Codyssey2-2/docs/25-mark-revert-complete
|\  
| * d709b17 (origin/docs/25-mark-revert-complete) docs: mark revert troubleshooting complete
|/  
*   2a59020 Merge pull request #24 from Codyssey2-2/feature/20-stash-troubleshooting
|\  
| * 081425b (origin/feature/20-stash-troubleshooting) docs: record git stash troubleshooting
* |   90916cf Merge pull request #23 from Codyssey2-2/feature/21-cheolho-git-revert
|\ \  
| * \   4d3f9c0 (origin/feature/21-cheolho-git-revert) Merge branch 'main' into feature/21-cheolho-git-revert
| |\ \  
| |/ /  
|/| |   
* | |   78c4f3f Merge pull request #22 from Codyssey2-2/feature/19-kim-amend-reset-log
|\ \ \  
| |_|/  
|/| |   
| * | c962f28 (origin/feature/19-kim-amend-reset-log) docs: record amend and reset practice
|/ /  
| * 6f5c60a docs: record git revert troubleshooting scenario
| * 35fd318 Revert "docs: update member-2 comment"
| * dd40cfa docs: update member-2 comment
|/  
*   4cf24e4 Merge pull request #17 from Codyssey2-2/feature/16-cheolho-git-history
|\  
| * b7cbcbc (origin/feature/16-cheolho-git-history) docs: record git-history modify/delete conflict resolution
| * b120dce docs: record git log graph in git-history
* |   5f553d3 Merge pull request #18 from Codyssey2-2/docs/13-member-3-collaboration
|\ \  
| |/  
|/|   
| * 724f86e (origin/docs/13-member-3-collaboration) docs: update member 3 collaboration info
* |   84d8207 Merge pull request #15 from Codyssey2-2/feature/14-remove-git-history-template
|\ \  
| |/  
|/|   
| * b47b35a (origin/feature/14-remove-git-history-template) docs: remove git history evidence template
|/  
*   7ae9816 Merge pull request #12 from Codyssey2-2/docs/4-member-3-profile
|\  
| *   ceb504b (origin/docs/4-member-3-profile) Merge branch 'main' into docs/4-member-3-profile
| |\  
| * | b117b00 docs: add member 3 team profile
* | |   31012d9 Merge pull request #11 from Codyssey2-2/feature/10-kimhyunjung-collaboration-checklist
|\ \ \  
| |_|/  
|/| |   
| * | 97065d9 (origin/feature/10-kimhyunjung-collaboration-checklist) docs: add kim collaboration checklist
* | |   6c77c38 Merge pull request #9 from Codyssey2-2/feature/8-cheolho-readme
|\ \ \  
| |/ /  
|/| |   
| * | 6cfe812 (origin/feature/8-cheolho-readme) docs: record readme conflict resolution
| * | a8bba2f docs: update member-2 label in readme
|/ /  
* |   dd19348 Merge pull request #5 from Codyssey2-2/feature/2-kimhyunjung-profile
|\ \  
| * | c52e184 (origin/feature/2-kimhyunjung-profile) docs: add kim hyunjung team profile
| |/  
* |   a7c2714 Merge pull request #7 from Codyssey2-2/feature/6-cheolho-profile
|\ \  
| |/  
|/|   
| * 25e4111 (origin/feature/6-cheolho-profile) docs: update member-2 introduction
|/  
*   7afc1d4 Merge pull request #1 from Codyssey2-2/feature/team-introduction-scaffold
|\  
| * 31ed548 (origin/feature/team-introduction-scaffold) 초기_문서
|/  
* b3602ab [docs][n/a][chul5] create empty README.md
```

---

<a id="team_21_jha21vvv__codyssey-b2-02"></a>
## 19. `team_21_jha21vvv__codyssey-b2-02`

- **저장소 URL**: [https://github.com/jha21vvv/codyssey-b2-02.git](https://github.com/jha21vvv/codyssey-b2-02.git)
- **총 커밋 수**: 48개
- **로컬 경로**: `repos/team_21_jha21vvv__codyssey-b2-02`

```text
* 51a8e05 (HEAD -> main, origin/main, origin/HEAD) feat: Add root game.py runner shortcut
* f82e3d6 docs: Reorganize project and add study materials including audio overviews and slide PDFs to STUDY folder
* 77d8d4c docs: Perfect PR reference consistency in NOTEBOOKLM_AND_SLIDE_PROMPTS.md
* a7191ff docs: Update requirements fulfillment guide and add Git collaboration study prompts for NotebookLM
* 2713017 fix: Support tie_breaker module import in voting.py following rename conflict resolution
*   38930ac Merge pull request #15 from jha21vvv/feature/ahn-modify-lottery
|\  
| *   219111f (origin/feature/ahn-modify-lottery) Merge branch 'main' into feature/ahn-modify-lottery
| |\  
| |/  
|/|   
* |   16d0719 Merge pull request #19 from jha21vvv/feature/kim-submission-final
|\ \  
| * | 7c42c61 (origin/feature/kim-submission-final) docs: Complete submission index with verified PR and issue links
| * | 78041ac docs: Record actual git stash practice log in troubleshooting scenario 4
|/ /  
| *   b5482ae Merge origin/main into feature/ahn-modify-lottery
| |\  
| |/  
|/|   
| * f117b91 docs: Add remaining tasks checklist as of 2026-09-20 16:00
| * a47fd07 docs: Embed all verification screenshots in conflict resolution and troubleshooting logs
| * e84c579 docs: Complete real execution evidence for reset, revert, and non-trivial conflict
| * 733cf07 Revert "feat: Add experimental temporary logger"
| * 7124020 feat: Add experimental temporary logger
| * bbbb0b7 feat: Add experimental temporary logger
| * 2dd5904 docs: Record real commit hash for Conflict #2 (Rename vs Modify)
| * 6a9cfd6 fix: Resolve rename/modify conflict by migrating lottery to tie_breaker.py
| * 78bc1e0 feat: Enhance draw_lots docstring and logging
| | * de597e6 (origin/feature/kim-voting-input-guard) fix: Reject boolean choice_index and clarify invalid vote message
| | * 6e836e0 (origin/feature/kim-stash-troubleshooting) docs: Replace stash scenario with actual practice log in troubleshooting-log
| |/  
|/|   
| | * 66d8c19 (origin/feature/kim-rename-tiebreaker) refactor: Rename lottery.py to tie_breaker.py for module clarity
| |/  
|/|   
* |   9461a9b Merge pull request #11 from jha21vvv/feature/kang-amend-practice
|\ \  
| * | 0af6b0d (origin/feature/kang-amend-practice) docs: Record amend hashes and verification evidence
| * | 075d062 docs: Add amend practice log
| |/  
* |   93577d1 Merge pull request #9 from jha21vvv/feature/kang-contributing-guide
|\ \  
| * | 444348e (origin/feature/kang-contributing-guide) docs: Cover documentation changes in review checklist (apply review feedback)
| * | 19dbebf docs: Add review checklist and practical tips
* | |   325d386 Merge pull request #12 from jha21vvv/feature/ahn-game-integration
|\ \ \  
| |_|/  
|/| |   
| | | * f6ef89b (origin/feature/ahn-game-integration) docs: Add non-trivial conflict guide for Kim Jinwoo
| | | * a012ea5 docs: Update Conflict #1 log with real test scenario and resolution details
| | |/  
| |/|   
| * | 0167f77 feat: Integrate game runner and add simulation tests (Closes #4)
|/ /  
* |   a72615f Merge pull request #7 from jha21vvv/feature/ahn-dish
|\ \  
| |/  
|/|   
| *   fafaa6d (origin/feature/ahn-dish) fix: Resolve merge conflict in food_data.json by keeping both dishes
| |\  
| |/  
|/|   
| * 7fe8210 feat: Add Sundubu-jjigae to food data
| | * 64e6cd4 (origin/feature/kang-dish) chore: Prefix budae-jjigae description with 1_
| |/  
|/|   
* |   ddd0834 Merge pull request #4 from jha21vvv/feature/kim-voting-system
|\ \  
| * | d450e85 (origin/feature/kim-voting-system) feat: Implement multi-player turn-based voting and tie-breaker lottery
| |/  
* |   31e2c8b Merge pull request #6 from jha21vvv/feature/kang-food-loader
|\ \  
| |/  
|/|   
| * 6e62aaa (origin/feature/kang-food-loader) feat: Add Korean food loader and tournament sampling
|/  
*   2d22858 Merge pull request #2 from jha21vvv/feature/ahn-tournament-engine
|\  
| * b3ae7de (origin/feature/ahn-tournament-engine) refactor: Add edge case test coverage based on review feedback
| * 44c461d feat: Implement tournament bracket engine and round manager
|/  
* c17e907 docs: Deep-dive explanation on why issues are created before coding
* 934a062 docs: Add EXPLAIN_FOR_ME.md explaining Git collaboration processes and benefits
* f8478e6 docs: Update Ahn Jaehyun guide with simple 3-step action plan
* 1c128f6 Initial commit: Setup Codyssey b2-02 Korean food tournament project
```

---

<a id="team_our_nick19850906-debug__mission_02_02"></a>
## 20. `team_our_nick19850906-debug__mission_02_02`

- **저장소 URL**: [https://github.com/nick19850906-debug/mission_02_02.git](https://github.com/nick19850906-debug/mission_02_02.git)
- **총 커밋 수**: 16개
- **로컬 경로**: `repos/team_our_nick19850906-debug__mission_02_02`

```text
*   15ae97d (HEAD -> main, origin/main, origin/HEAD) Merge pull request #14 from nick19850906-debug/feature/eunik-style-rule
|\  
| *   04d6a73 (origin/feature/eunik-style-rule) Merge branch 'main' into feature/eunik-style-rule
| |\  
| |/  
|/|   
* |   6b7b8e0 Merge pull request #13 from nick19850906-debug/feature/yanghwan-test-rule
|\ \  
| * | df33eca (origin/feature/yanghwan-test-rule) docs: Add test tag rule to commit conventions
|/ /  
| * 95c9c05 docs: Add style tag rule to commit conventions
|/  
*   d1e7641 Merge pull request #10 from nick19850906-debug/feature/sangkyo-git-basics
|\  
| * e6d38bb (origin/feature/sangkyo-git-basics) feat: Add notes/01-git-basics.md explaining git three areas
|/  
*   64b78e9 Merge pull request #8 from nick19850906-debug/feature/gunwoo-opensource
|\  
| * d76627b (origin/feature/gunwoo-opensource) feat: Add notes/04-open-source.md on open source PR practices
|/  
*   a06ed26 Merge pull request #6 from nick19850906-debug/feature/eunik-conflict
|\  
| * c3b95d0 (origin/feature/eunik-conflict) feat: Add notes/03-conflict-guide.md explaining conflict causes
|/  
*   8121b02 Merge pull request #4 from nick19850906-debug/feature/yanghwan-flow
|\  
| * f880933 (origin/feature/yanghwan-flow) feat: Add notes/02-github-flow.md detailing branch lifecycle
|/  
*   e58d77e Merge pull request #2 from nick19850906-debug/feature/sangkyo-contributing
|\  
| * ef44833 (origin/feature/sangkyo-contributing) docs: Add CONTRIBUTING.md guide for team collaboration
|/  
* 8f3bcf8 docs: Initialize project repository with basic README.md
```

---
