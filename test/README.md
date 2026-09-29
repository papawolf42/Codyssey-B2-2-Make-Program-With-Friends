# Git & GitHub 개발 협업 학습정리노트

Codyssey B2-2 미션 팀 협업 저장소입니다.

## 📚 팀원별 학습 정리 노트 목차
1. [Git 기초 개념 및 3대 영역](notes/01-git-basics.md) - 작성자: 김상교
2. [GitHub Flow 브랜치 전략 및 생명주기](notes/02-github-flow.md) - 작성자: 장양환
3. [Git 충돌 원리와 3-Way Merge](notes/03-conflict-guide.md) - 작성자: 조은익
4. [오픈소스 협업 및 코드 리뷰 문화](notes/04-open-source.md) - 작성자: 김건우

## 🛠️ 협업 및 복구 기록
- [협업 규칙 가이드 (충돌 대응 규칙 포함)](docs/CONTRIBUTING.md)
- [작업 Issue 10건 전수 대장](docs/issues.md)
- [모의 PR 10건 본문 및 리뷰 상호작용 대장](docs/pull-requests.md)
- [충돌 2회 해결 종합 보고서](docs/conflict-resolution.md)
- [Git 4대 트러블슈팅 종합 실습 기록부](docs/troubleshooting-log.md)
- [최종 제출 인덱스 표](SUBMISSION.md)

## 📦 Git 이력 번들 (로컬 저장소 복원 안내)
본 시뮬레이션의 전체 Git 브랜치(12개)와 커밋 이력은 `test-repo.bundle` 파일에 안전하게 보존되어 있습니다.
터미널에서 직접 `git log`나 브랜치를 탐색하고 싶다면 아래 명령어로 로컬 `.git`을 즉시 복원할 수 있습니다:
```bash
git clone test-repo.bundle .git-temp && mv .git-temp/.git . && rm -rf .git-temp
```
