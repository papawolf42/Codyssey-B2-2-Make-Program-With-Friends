# Git 4대 트러블슈팅 종합 실습 로그

## 1. `git commit --amend` (수행자: 김상교)
- **상황**: 로컬 최신 커밋 메시지에 오타 발생 (원격 푸시 전)
- **재현 절차**: `git commit --amend -m "수정된 메시지"` 실행
- **전후 결과**: 커밋 내용은 유지되고 커밋 해시가 갱신되며 메시지 교체 완료
- **선택 이유 및 주의점**: 미푸시 커밋의 오타를 깔끔히 바로잡는 용도이며, 이미 공유된 커밋에는 강제 푸시를 피해야 하므로 사용 금지 (메시지 오타는 이력 보존 후 PR/이슈 코멘트로 보완)
- **상세 증빙**: [docs/evidence/a-amend.md](evidence/a-amend.md)

## 2. `git reset --soft HEAD~1` (수행자: 장양환)
- **상황**: 로컬 커밋을 취소하되 작업 중인 파일 변경점(Staged)은 보존 필요
- **재현 절차**: `git reset --soft HEAD~1` 실행 후 `git status`로 Staged 상태 확인 후 재커밋
- **전후 결과**: HEAD는 이전 부모로 이동하고 변경점은 Staging Area에 온전히 유지됨
- **선택 이유 및 주의점**: 작업 손실 없이 커밋만 안전하게 취소하는 용도이며, 공유 이력 재작성 금지
- **상세 증빙**: [docs/evidence/b-reset.md](evidence/b-reset.md)

## 3. `git revert` (수행자: 조은익)
- **상황**: 이미 원격에 푸시된 공유 커밋을 안전하게 취소해야 하는 상황
- **재현 절차**: `git revert --no-edit <대상SHA>` 실행 후 역커밋 생성
- **전후 결과**: 이전 커밋 이력을 삭제하지 않고 역(Reverse) 변경 커밋을 추가하여 안전 복구
- **선택 이유 및 주의점**: 공유 이력을 깨뜨리지 않고 취소 사실을 투명하게 남기기 위해 revert 선택
- **상세 증빙**: [docs/evidence/c-revert.md](evidence/c-revert.md)

## 4. `git stash` & `git stash pop` (수행자: 김건우)
- **상황**: 미완성 작업 중 긴급하게 다른 브랜치(main) 상태 확인 필요
- **재현 절차**: `git stash push` ➔ `git checkout main` ➔ `git checkout <작업브랜치>` ➔ `git stash pop`
- **전후 결과**: 작업 트리가 깨끗해진 상태로 브랜치를 전환하고, 복귀 후 작업 변경점 완벽 복원
- **선택 이유 및 주의점**: 불완전한 코드를 커밋하지 않고 안전하게 임시 보관할 수 있음
- **상세 증빙**: [docs/evidence/d-stash.md](evidence/d-stash.md)
