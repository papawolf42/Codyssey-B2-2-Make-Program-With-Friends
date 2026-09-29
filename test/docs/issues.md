# B2-2 모의 Issue 대장 (작업 추적 관리부)

모든 작업은 GitHub Flow 원칙에 따라 사전에 Issue를 등록하고 진행되었습니다. 각 PR은 `Closes #이슈번호` 키워드를 통해 해당 이슈와 유기적으로 연결되어 머지 시 자동 종료되었습니다.

---

## 📋 Issue 전수 등록 및 연동 현황표

| Issue # | 작업 제목 | 담당자 | 연결된 PR | 상태 | 병합 커밋 요약 |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **#1** | [setup] 협업 규칙 가이드 및 실습 기본 파일 준비 | 김상교 | PR #2 | **Closed** | `docs: Prepare collaboration guidelines...` |
| **#3** | [feat] Git 3대 작업 영역 및 기초 명령어 학습노트 작성 | 김상교 | PR #3 | **Closed** | `feat: Add notes/01-git-basics.md...` |
| **#4** | [feat] GitHub Flow 브랜치 전략 및 생명주기 학습노트 작성 | 장양환 | PR #4 | **Closed** | `feat: Add notes/02-github-flow.md...` |
| **#5** | [feat] Git 충돌 발생 원리 및 3-Way Merge 학습노트 작성 | 조은익 | PR #5 | **Closed** | `feat: Add notes/03-conflict-guide.md...` |
| **#6** | [feat] 오픈소스 협업 및 코드 리뷰 문화 학습노트 작성 | 김건우 | PR #6 | **Closed** | `feat: Add notes/04-open-source.md...` |
| **#7** | [practice] amend 실습 및 리뷰 요청 가이드 보완 | 김상교 | PR #7 | **Closed** | `docs: amend 커밋 메시지 오타 수정 실습...` |
| **#8** | [practice] soft reset 실습 및 충돌 1(review-request) 해결 | 장양환 | PR #8 | **Closed** | `docs: reset --soft 커밋 취소 실습...` |
| **#9** | [practice] revert 실습 및 동기화 시점 가이드 보완 | 조은익 | PR #9 | **Closed** | `docs: revert 실습 증빙 기록 작성...` |
| **#10** | [practice] stash 실습 및 충돌 2(sync-timing) 해결 | 김건우 | PR #10 | **Closed** | `docs: stash/pop 실습 완료 및 증빙...` |
| **#11** | [docs] 최종 평가 제출 인덱스 및 필수 종합 문서 통합 | 김상교 | PR #11 | **Closed** | `docs: Finalize SUBMISSION.md index...` |

---

## 📝 이슈별 세부 본문 내용 (What / Why / How)

### Issue #1: [setup] 협업 규칙 가이드 및 실습 기본 파일 준비
- **작성자**: 김상교 (팀장)
- **What**: `docs/CONTRIBUTING.md`, PR 템플릿, `src/practice/` 씨앗 파일 생성
- **Why**: 4인 비동기 병렬 작업을 위한 최소 운영 기준 및 충돌 실습 토대 마련
- **How**: 템플릿 및 기본 문장 마크다운 렌더링 확인

### Issue #3: [feat] Git 3대 작업 영역 및 기초 명령어 학습노트 작성
- **작성자**: 김상교
- **What**: `notes/01-git-basics.md` 작성 (Working Tree, Index, Commit 개념)
- **Why**: Git의 기본 작동 원리 학습 및 팀원 지식 공유
- **How**: 마크다운 프리뷰 검증 및 diff 명령어 예시 추가

### Issue #4: [feat] GitHub Flow 브랜치 전략 및 생명주기 학습노트 작성
- **작성자**: 장양환
- **What**: `notes/02-github-flow.md` 작성 (브랜치 생명주기 및 머지 규칙)
- **Why**: 팀의 브랜치 전략 표준화 및 협업 규칙 이해
- **How**: 브랜치 라이프사이클 다이어그램 및 main 브랜치 안정성 이유 명시

### Issue #5: [feat] Git 충돌 발생 원리 및 3-Way Merge 학습노트 작성
- **작성자**: 조은익
- **What**: `notes/03-conflict-guide.md` 작성 (충돌 원인, 마커 기호 의미, 3-Way Merge)
- **Why**: 의도적 충돌 실습 전 충돌 메커니즘을 명확히 이해
- **How**: 충돌 마커 원문 예시 및 맥락 통합 판단 기준 서술

### Issue #6: [feat] 오픈소스 협업 및 코드 리뷰 문화 학습노트 작성
- **작성자**: 김건우
- **What**: `notes/04-open-source.md` 작성 (PR 작성법, 실질 리뷰 품질 기준)
- **Why**: 형식적인 "LGTM" 방지 및 파일 근거 상호작용 문화 정착
- **How**: 코드 리뷰 체크리스트 작성 및 자가 검증

### Issue #7: [practice] amend 실습 및 리뷰 요청 가이드 보완
- **작성자**: 김상교
- **What**: `git commit --amend` 실습 및 `review-request.md` 수정
- **Why**: 로컬 오타 커밋 수정 기술 습득 및 1조 충돌 선행 변경 제공
- **How**: 전후 커밋 해시 비교 및 `a-amend.md` 증빙 작성

### Issue #8: [practice] soft reset 실습 및 충돌 1(review-request) 해결
- **작성자**: 장양환
- **What**: `git reset --soft HEAD~1` 실습 및 `review-request.md` 충돌 해결
- **Why**: 커밋 취소 후 Staged 상태 보존 기술 습득 및 동일 hunk 비자명 충돌 수동 해결
- **How**: `git status`로 Staged 유지 확인 후 마커 통합 및 `conflict-ab.md` 작성

### Issue #9: [practice] revert 실습 및 동기화 시점 가이드 보완
- **작성자**: 조은익
- **What**: `git revert` 실습 및 `sync-timing.md` 수정
- **Why**: 원격 공유 커밋의 안전한 취소 절차 습득 및 2조 충돌 선행 변경 제공
- **How**: 역커밋 생성 확인 및 `c-revert.md` 증빙 작성

### Issue #10: [practice] stash 실습 및 충돌 2(sync-timing) 해결
- **작성자**: 김건우
- **What**: `git stash` & `pop` 실습 및 `sync-timing.md` 충돌 해결
- **Why**: 미완성 작업 보관 후 브랜치 전환 복원 기술 습득 및 비자명 충돌 수동 해결
- **How**: main 브랜치 전환 후 복귀 및 pop diff 일치 확인 후 `conflict-cd.md` 작성

### Issue #11: [docs] 최종 평가 제출 인덱스 및 필수 종합 문서 통합
- **작성자**: 김상교
- **What**: `SUBMISSION.md`, README 목차, 필수 3종 문서 종합 정리 및 Git 로그 저장
- **Why**: 과제 평가 항목 1:1 대응 및 전체 산출물 추적성 완결
- **How**: 모든 PR 링크, 리뷰 링크, Git 로그 그래프 정상 출력 확인
