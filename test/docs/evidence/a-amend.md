# A 김상교: amend 실습 기록

## 1. 참여자 및 작업 정보
- 수행자: 김상교
- 대상 브랜치: `feature/a-practice`
- 실습 도구: `git commit --amend`

## 2. 상황 및 재현 조건
- 로컬에서 최신 커밋을 생성했으나 커밋 메시지에 오타(`커밋 오타 낫서요`)가 포함됨.
- 아직 원격에 푸시하기 전이므로 안전하게 로컬 최신 커밋 메시지를 교체하고자 함.

## 3. 실행 명령 및 전후 결과
- 수정 전 커밋 SHA: `9061d353e09f90c664b084ae544801189522ff8e`
- 실행 명령: `git commit --amend -m "docs: amend 커밋 메시지 오타 수정 실습 기록"`
- 수정 후 커밋 SHA: `8ca401f9ca60dd97c2d445d9291b383d2a9d3032`

### git log -1 fuller 출력
```text
commit 8ca401f9ca60dd97c2d445d9291b383d2a9d3032
Author:     김상교 <sanggyo.kim@codyssey.team>
AuthorDate: Tue Sep 29 10:12:39 2026 +0900
Commit:     김상교 <sanggyo.kim@codyssey.team>
CommitDate: Tue Sep 29 10:12:39 2026 +0900

    docs: amend 커밋 메시지 오타 수정 실습 기록
```

- 이미 원격에 푸시된 공유 커밋에는 amend를 사용해서는 안 됩니다 (강제 푸시 force push로 인해 동료들의 로컬 이력이 손상될 위험).
- 만약 이미 푸시된 커밋의 메시지에만 오타가 발생했다면, 파일의 실제 변경 내용을 취소해 버리는 `revert`를 사용해서는 안 됩니다. (revert는 메시지가 아니라 파일의 작업 내용을 되돌리는 명령임)
- 이 경우에는 공유 이력을 그대로 보존한 채, 관련 Issue/PR의 본문이나 코멘트를 통해 올바른 커밋 의도를 명시적으로 보완 설명하는 것이 실무 협업의 정석입니다.
