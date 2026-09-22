# Codyssey B2-2: 친구 3~5명과 함께 프로그램 만드는 법 연습하기 (Make Program With Friends)

- **과제 분야**: AI/SW 기초
- **구분**: Python과 Git 심화 (협업 프로젝트)
- **과제 코드**: B2-2 (`185007`)

---

## 📌 개요

본 저장소는 Codyssey B2-2 미션인 **"친구 3~5명과 함께 프로그램 만드는 법 연습하기"**의 분석 문서와 실제 통과한 21개 팀의 협업 저장소를 정리한 모노레포입니다.

Git의 기본 기능(Commit, Push)을 넘어 **GitHub Flow, Issue/PR 연동, 코드 리뷰, Branch Protection Rule, 충돌(Conflict) 해결, 그리고 Git 트러블슈팅 4종(`amend`, `reset`, `revert`, `stash`)**의 실무 적용 방안을 다룹니다.

---

## 📂 저장소 구조

```text
├── docs/                                    # 분석 및 기획 문서
│   ├── 0001_b2-2-teams.md                   # B2-2 통과 21개 팀 목록
│   ├── 0002_b2-2-repo-type-analysis.md      # Organization vs 개인 레포 유형 분석
│   ├── 0003_b2-2-project-topics-and-contents.md # 시뮬레이션 구현 내용 전수 분석
│   └── 0004_b2-2-realistic-conflict-scenarios.md # 실무형 현실적 충돌 시나리오 설계
├── repos/                                   # 통과 19개 팀 Git Submodule 모음
│   ├── team_01_codyssey-b2-2-team-mission__git-flow-utility-lab
│   ├── team_02_Im-Jongseok__Git_Collaboration
│   ├── team_03_codyssey-2-mission__git-flow-demo
│   ├── ...
│   └── team_21_jha21vvv__codyssey-b2-02
├── .gitmodules                              # Git Submodule 설정 파일
└── instruction.md                           # 과제 공식 요구사항 명세서
```

---

## 📑 핵심 문서 인덱스

1. **[0001. B2-2 통과 팀 목록](docs/0001_b2-2-teams.md)**: 기준일자별 21개 팀(71명) 구성 및 GitHub 핸들
2. **[0002. 저장소 구성 유형 분석](docs/0002_b2-2-repo-type-analysis.md)**: Organization(14팀, 70%) vs 개인 레포(6팀) 비교 및 추천
3. **[0003. 시뮬레이션 구현 내용 분석](docs/0003_b2-2-project-topics-and-contents.md)**: 유틸리티 모음(13팀), 팀 소개 문서(4팀), 학습 노트(2팀) 전수 분석
4. **[0004. 실무형 충돌 시나리오 설계](docs/0004_b2-2-realistic-conflict-scenarios.md)**: 실무 아키텍처 공유 접점(CLI 서브커맨드 등록, 모듈 리팩토링 vs 버그수정 비자명 충돌) 기반 시나리오 추천

---

## 🔗 Submodule 업데이트 안내

저장소를 클론할 때 하위 서브모듈(통과 팀 저장소 19개)을 함께 가져오려면 다음 명령어를 사용합니다:

```bash
git clone --recurse-submodules https://github.com/papawolf42/Codyssey-B2-2-Make-Program-With-Friends.git
```

이미 클론한 후 서브모듈을 초기화/업데이트하려면:

```bash
git submodule update --init --recursive
```
