# D 김건우: stash/pop 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 김건우
- 대상 브랜치: `feature/d-practice`
- 실습 도구: `git stash push` 및 `git stash pop`

## 2. 상황 및 재현 조건
- `src/practice/d-stash.txt` 파일 작업 중 긴급하게 `main` 브랜치 상태를 확인해야 하는 상황 발생.
- 미완성 작업을 커밋하지 않고 안전하게 보관 후 복귀하고자 함.

## 3. 실행 절차 및 검증
1. 작업 변경점 확인:
```text
diff --git a/src/practice/d-stash.txt b/src/practice/d-stash.txt
index 613b678..163440e 100644
--- a/src/practice/d-stash.txt
+++ b/src/practice/d-stash.txt
@@ -1 +1,2 @@
 stash/pop 작업 보관 실습 기준 내용
+작업 중이던 미완성 추가 라인
```
2. `git stash push -m "feature-d-wip-stash" src/practice/d-stash.txt` 실행
- `git stash list` 확인: `stash@{0}: On feature/d-practice: feature-d-wip-stash`
3. `git checkout main`으로 전환하여 메인 브랜치 확인 (`git status`: 깨끗함)
4. `git checkout feature/d-practice`로 원래 작업 브랜치 복귀
5. `git stash pop` 실행하여 보관 내용 복원
- 복원 후 diff 일치 확인:
```text
diff --git a/src/practice/d-stash.txt b/src/practice/d-stash.txt
index 613b678..163440e 100644
--- a/src/practice/d-stash.txt
+++ b/src/practice/d-stash.txt
@@ -1 +1,2 @@
 stash/pop 작업 보관 실습 기준 내용
+작업 중이던 미완성 추가 라인
```

## 4. 선택 이유 및 주의점
- 커밋할 수 없는 불완전한 상태의 코드를 안전하게 격리 보관할 수 있음.
- pop 시 충돌이 날 수 있으므로 보관 전후 파일 상태를 명확히 인지해야 함.
