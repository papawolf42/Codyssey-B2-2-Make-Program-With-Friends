export const categories = [
  { id: 'flow', label: '작업의 흐름', description: '따로 작업하고, 기록하고, 팀 결과에 합치는 순서' },
  { id: 'review', label: '함께 확인하기', description: 'PR을 쓰고 동료 의견을 주고받는 방법' },
  { id: 'recovery', label: '실수와 충돌 풀기', description: '상황에 맞는 도구를 고르고 과정을 남기는 방법' },
  { id: 'judgment', label: '새로운 상황 판단하기', description: '급한 수정이나 반복되는 문제에 대처하는 방법' }
];

export const questions = [
  {
    id: 'commit-push', category: 'flow', title: '커밋했는데 동료에게 안 보여요',
    context: '내 컴퓨터에서 글을 수정하고 커밋까지 했습니다. GitHub에 있는 팀 저장소에는 아직 보이지 않습니다. 무엇이 빠졌을까요?',
    options: [{ id: 'a', text: '파일 이름을 다시 저장해야 한다.' }, { id: 'b', text: '커밋을 원격 저장소로 보내는 push가 필요하다.' }, { id: 'c', text: '커밋을 하나 더 만들면 자동으로 전달된다.' }],
    correct: 'b', explanation: '커밋은 내 저장소에 변경 기록을 만드는 일입니다. 동료가 접근하는 원격 저장소에 그 기록을 보내는 일은 push입니다.',
    optionFeedback: { a: '파일 저장과 Git 기록의 공유는 다른 일입니다. 이미 커밋했다면 공유할 저장소로 보내야 합니다.', b: '맞습니다. 내 커밋을 공유할 곳으로 보내는 단계가 push입니다.', c: '커밋이 여러 개여도 내 저장소에만 있으면 동료에게 자동 전달되지 않습니다.' },
    takeaway: 'commit은 기록하기, push는 공유할 곳에 보내기입니다.', source: { criterion: 'foundation', label: '쉬운 설명서 · 커밋과 푸시', path: '../docs/0018_b2-2-first-week-guide.md' }, bonus: false
  },
  {
    id: 'pr-merge', category: 'flow', title: 'PR을 열면 이미 합쳐진 건가요?',
    context: '작업 브랜치의 글을 main에 넣으려고 PR을 열었습니다. 아직 동료는 검토하지 않았습니다.',
    options: [{ id: 'a', text: 'PR을 열었으므로 main에 바로 합쳐졌다.' }, { id: 'b', text: 'PR은 git pull의 다른 이름이므로 최신 내용을 받아 왔다.' }, { id: 'c', text: '합쳐 달라고 요청한 상태이며, 확인 후 merge해야 한다.' }],
    correct: 'c', explanation: 'PR은 변경을 검토하고 합쳐 달라는 요청입니다. merge는 실제로 작업을 합치는 행동입니다. git pull은 원격 변경을 가져와 현재 브랜치에 반영하는 별도의 명령입니다.',
    optionFeedback: { a: '요청을 열었다는 사실만으로 main이 바뀌지는 않습니다.', b: '이름에 pull이 들어가지만 PR과 git pull은 다릅니다.', c: '맞습니다. 요청과 실제 병합을 구분해야 합니다.' },
    takeaway: 'PR은 검토 요청, merge는 실제 합치기입니다.', source: { criterion: 'foundation', label: '쉬운 설명서 · PR과 머지', path: '../docs/0018_b2-2-first-week-guide.md' }, bonus: false
  },
  {
    id: 'branch-unit', category: 'flow', title: '브랜치를 무엇을 기준으로 나눌까요?',
    context: '리뷰 방법 노트를 쓰는 일과 충돌 실습을 기록하는 일이 있습니다. 동료가 각각 이해하고 검토하기 쉽게 작업을 나누려 합니다.',
    options: [{ id: 'a', text: '목적이 분명한 작업 하나를 기준으로 나눈다.' }, { id: 'b', text: '사람마다 브랜치 하나를 만들어 모든 일을 계속 넣는다.' }, { id: 'c', text: '파일을 한 번 저장할 때마다 새 브랜치를 만든다.' }],
    correct: 'a', explanation: '작업 단위는 동료가 변경 목적과 완료 기준을 설명할 수 있을 만큼 묶습니다. 한 작업이 여러 파일을 고칠 수도 있고, 같은 사람도 여러 작업 브랜치를 쓸 수 있습니다.',
    optionFeedback: { a: '맞습니다. 목적이 드러나는 작업 단위는 검토하고 합칠 시점을 정하기 쉽습니다.', b: '서로 다른 목적의 일이 섞이면 PR을 읽고 완료 여부를 판단하기 어렵습니다.', c: '저장 횟수는 작업 목적과 다릅니다. 의미 있는 작업 단위를 정해야 합니다.' },
    takeaway: '누가 하느냐보다 무엇을 완성하느냐를 기준으로 작업을 나눕니다.', source: { criterion: '2-01', label: '평가 항목 2 · 작업 단위 브랜치', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'pr-template', category: 'review', title: 'PR 설명을 자꾸 빠뜨려요',
    context: '팀원들이 PR에 바꾼 내용만 적고, 이유나 확인 방법은 자꾸 빼먹습니다. 어떤 약속이 도움이 될까요?',
    options: [{ id: 'a', text: '커밋 개수만 적으면 PR 설명을 대신할 수 있다.' }, { id: 'b', text: 'What·Why·How·연결 Issue 칸이 있는 양식을 함께 사용한다.' }, { id: 'c', text: '제목을 자세히 쓰면 본문과 이슈 연결은 생략한다.' }],
    correct: 'b', explanation: '공통 PR 양식에 무엇을 바꿨는지, 왜 바꿨는지, 어떻게 확인했는지와 연결할 할 일을 넣습니다. 양식이 있다는 것에 그치지 않고 각 작업의 실제 내용으로 채웁니다.',
    optionFeedback: { a: '커밋 수로는 변경 이유나 검증 결과를 알 수 없습니다.', b: '맞습니다. 공통 양식과 제출 전 확인으로 빠뜨리는 항목을 줄일 수 있습니다.', c: '제목 하나만으로 확인 방법과 연결 Issue까지 충분히 전달하기 어렵습니다.' },
    takeaway: 'PR에는 무엇을·왜·어떻게 확인했는지와 연결한 할 일을 적습니다.', source: { criterion: '2-02', label: '평가 항목 2 · PR 작성 규칙과 도구', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'review-quality', category: 'review', title: '어떤 리뷰가 도움이 될까요?',
    context: '동료의 Git 기초 노트에는 commit 설명이 있지만 push와의 차이를 설명한 예시는 없습니다.',
    options: [{ id: 'a', text: '“수고했어요. LGTM!”만 남기고 승인한다.' }, { id: 'b', text: '내용과 관계없이 “다시 작성해 주세요”라고 남긴다.' }, { id: 'c', text: '“commit 설명 아래에 push와 다른 점을 보여 주는 예시를 넣으면 어떨까요?”라고 묻는다.' }],
    correct: 'c', explanation: '좋은 리뷰는 실제 파일의 특정 부분을 근거로 질문이나 개선 의견을 줍니다. 작성자는 답하거나 수정하고, 리뷰어는 그 결과를 확인합니다.',
    optionFeedback: { a: '격려는 좋지만, 이번 과제에서는 구체적인 내용에 대한 의견도 필요합니다.', b: '어느 부분이 왜 부족한지 알려 주어야 작성자가 개선할 수 있습니다.', c: '맞습니다. 위치와 이유가 있는 제안이라 작성자가 구체적으로 답할 수 있습니다.' },
    takeaway: '어느 부분을 왜 보완하면 좋을지 말하고, 답변까지 확인합니다.', source: { criterion: '2-03', label: '평가 항목 2 · 리뷰 최소 품질과 운영', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'conflict-process', category: 'recovery', title: '충돌이 났을 때 누구와 무엇을 하나요?',
    context: '동료는 같은 문장에 변경 이유를, 나는 검증 결과를 넣었습니다. 합치려 하자 충돌이 났습니다.',
    options: [{ id: 'a', text: '동료와 상황을 공유하고 의도를 확인해 해결한 뒤 과정과 결과를 기록한다.' }, { id: 'b', text: '내 브랜치에서 생긴 일이므로 내 문장만 남기고 알리지 않는다.' }, { id: 'c', text: '충돌 파일을 지우면 해결되므로 파일을 삭제하고 끝낸다.' }],
    correct: 'a', explanation: '충돌을 만난 사람이 관련 팀원에게 알리고 양쪽 작업 의도를 확인합니다. 최종 내용을 함께 확인한 뒤 실제 해결 과정과 이유를 충돌 기록에 남깁니다.',
    optionFeedback: { a: '맞습니다. 공유 → 해결과 확인 → 기록의 흐름입니다.', b: '한쪽 내용만 남기면 동료가 넣으려던 정보가 사라질 수 있습니다.', c: '충돌 표시만 없애는 것이 목적이 아닙니다. 필요한 결과물을 보존해야 합니다.' },
    takeaway: '충돌은 함께 뜻을 확인하고, 해결 이유까지 남깁니다.', source: { criterion: '2-04', label: '평가 항목 2 · 충돌 대응 흐름', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'reproducible-log', category: 'recovery', title: '다른 사람도 따라 볼 수 있는 기록은?',
    context: 'stash 실습을 마쳤습니다. 며칠 뒤 팀원이 같은 상황을 이해하고 다시 확인할 수 있게 기록하려 합니다.',
    options: [{ id: 'a', text: '“stash 성공”과 담당자 이름만 적는다.' }, { id: 'b', text: '실행 전 상황, 실제 순서와 명령, 전후 결과, 주의점을 적는다.' }, { id: 'c', text: '마지막 파일 화면만 남기면 과정을 알 수 있다.' }],
    correct: 'b', explanation: '재현 가능한 기록은 무엇에서 시작해 무엇을 했더니 어떤 결과가 나왔는지 연결합니다. 브랜치와 파일, 실제 출력, 선택 이유와 주의점도 남기면 이해하기 쉽습니다.',
    optionFeedback: { a: '완료 선언만으로는 실제로 무엇을 했는지 확인할 수 없습니다.', b: '맞습니다. 시작 상태와 절차, 관찰한 결과가 있어야 다시 따라 볼 수 있습니다.', c: '마지막 화면만으로는 중간 명령이나 처음 상태를 알기 어렵습니다.' },
    takeaway: '상황 → 실제 절차 → 결과 → 주의점을 한 묶음으로 남깁니다.', source: { criterion: '2-05', label: '평가 항목 2 · 재현 가능한 실습 로그', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'stable-main', category: 'flow', title: 'main은 왜 정상 상태여야 하나요?',
    context: 'main은 팀원이 새 작업을 시작할 때 가져가는 공통 버전입니다. 여기에는 어떤 내용을 합치는 것이 좋을까요?',
    options: [{ id: 'a', text: '일단 합치고, 문제가 있는지는 다른 팀원이 발견하게 한다.' }, { id: 'b', text: 'main에는 처음 만든 파일만 두고 이후 작업은 합치지 않는다.' }, { id: 'c', text: '확인된 변경을 합쳐 팀이 믿고 사용할 수 있는 상태로 유지한다.' }],
    correct: 'c', explanation: '팀원들은 main을 기준으로 다음 작업을 합니다. 깨진 변경이 들어가면 다른 사람도 그 문제를 이어받습니다. 노트 과제에서는 글과 링크가 정상이고 필요한 확인을 마친 상태가 기준이 됩니다.',
    optionFeedback: { a: '공통 기준이 깨지면 다른 팀원의 작업까지 막힐 수 있습니다.', b: 'main은 확인된 작업을 계속 합쳐 가는 곳입니다. 처음 상태로 고정하는 곳이 아닙니다.', c: '맞습니다. 팀원이 안전하게 작업을 이어 갈 수 있는 공통 기준이 필요합니다.' },
    takeaway: 'main은 팀이 믿고 다음 작업을 시작할 수 있는 공통 버전입니다.', source: { criterion: '3-01', label: '평가 항목 3 · main을 정상 상태로 유지하는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'approval-purpose', category: 'review', title: '왜 직접 push 대신 PR과 승인을 거치나요?',
    context: '내가 보기에는 맞는 수정입니다. 그래도 이번 팀 규칙은 main에 직접 push하지 않고 동료 승인을 받도록 합니다.',
    options: [{ id: 'a', text: '다른 시선으로 확인하고, 변경 이유와 확인한 사람을 기록하기 위해서다.' }, { id: 'b', text: 'Git은 main에 직접 push하는 기능이 없기 때문이다.' }, { id: 'c', text: '승인 버튼을 누르면 GitHub가 모든 오류를 자동으로 고치기 때문이다.' }],
    correct: 'a', explanation: 'PR과 승인은 놓친 문제를 찾고 변경 이유를 공유하는 기회입니다. 누가 무엇을 확인했는지도 남깁니다. 보호 설정으로 이 약속을 지키도록 도울 수 있지만, 사람의 검토를 대신하지는 않습니다.',
    optionFeedback: { a: '맞습니다. 품질을 확인하고 책임과 변경 과정을 추적하기 위한 약속입니다.', b: '직접 push가 원래 불가능한 것은 아닙니다. 팀이 보호 규칙으로 제한하는 것입니다.', c: '승인은 확인 의사 표시입니다. 오류가 자동으로 없어지는 것은 아닙니다.' },
    takeaway: 'PR과 승인은 서로 확인하고 변경 이유를 남기는 과정입니다.', source: { criterion: '3-02', label: '평가 항목 3 · PR과 승인의 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'issue-link', category: 'flow', title: 'PR에 Closes #12를 왜 적나요?',
    context: '실제 GitHub의 Issue #12에는 “리뷰 예시 추가하기”가 적혀 있습니다. 그 일을 해결한 PR 본문에 Closes #12를 넣었습니다.',
    options: [{ id: 'a', text: 'PR 번호도 반드시 12번으로 바꾸기 위해서다.' }, { id: 'b', text: '할 일과 해결 작업을 연결하고, 조건에 맞는 병합 때 Issue 완료도 처리하기 위해서다.' }, { id: 'c', text: 'PR을 열자마자 검토 없이 main에 합치기 위해서다.' }],
    correct: 'b', explanation: 'Issue는 할 일, PR은 그 일을 해결한 변경입니다. 둘을 연결하면 무엇을 해결했는지 찾기 쉽습니다. 실제 GitHub에서는 기본 브랜치로 병합하는 등 조건이 맞으면 연결한 Issue가 자동으로 닫힙니다.',
    optionFeedback: { a: 'Issue 번호를 가리킬 뿐, PR 번호를 바꾸는 기능은 아닙니다.', b: '맞습니다. 작업 추적과 팀 소통을 돕고 완료 처리도 연결할 수 있습니다.', c: 'Closes는 리뷰와 병합 절차를 건너뛰게 하지 않습니다.' },
    takeaway: 'Issue와 PR을 연결하면 할 일부터 해결까지 따라갈 수 있습니다.', source: { criterion: '3-03', label: '평가 항목 3 · Issue와 PR을 연결하는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'shared-revert', category: 'recovery', title: '이미 공유한 잘못된 변경을 취소하려면?',
    context: '잘못된 파일 변경이 담긴 커밋을 push했고, 동료도 그 기록을 가져갔습니다. 기존 기록을 유지하면서 그 변경을 취소하려 합니다.',
    options: [{ id: 'a', text: 'reset 후 강제로 push해서 기존 커밋이 없었던 것처럼 만든다.' }, { id: 'b', text: '커밋 메시지만 amend하면 파일 변경도 취소된다.' }, { id: 'c', text: 'revert로 해당 변경을 취소하는 새 커밋을 만든다.' }],
    correct: 'c', explanation: 'revert는 원래 커밋을 남기고 그 파일 변경을 되돌리는 새 커밋을 만듭니다. 이미 동료가 사용한 기록을 바꿔 버리면 서로 가진 기록이 달라질 수 있으므로, 이번 상황에는 revert가 맞습니다.',
    optionFeedback: { a: '공유한 기록을 바꾸면 동료가 가진 기록과 어긋날 수 있습니다.', b: '메시지만 고쳐도 파일 내용은 취소되지 않습니다.', c: '맞습니다. 기존 기록을 보존하며 취소했다는 기록을 추가합니다.' },
    takeaway: '공유한 파일 변경을 취소할 때는 기존 기록을 남기는 revert를 선택합니다.', source: { criterion: '3-04', label: '평가 항목 3 · 공유 커밋에 revert를 쓰는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'conflict-markers', category: 'recovery', title: '충돌 표시의 위아래는 무엇인가요?',
    context: '내 작업 브랜치에서 main을 merge했습니다. <<<<<<< HEAD 아래에는 “검증 결과 공유”, ======= 아래부터 >>>>>>> main 앞까지는 “변경 이유 공유”가 있습니다. 두 정보 모두 필요합니다.',
    options: [{ id: 'a', text: '위는 현재 브랜치, 아래는 합치려는 main의 내용이다. 두 의도를 살린 문장으로 고친다.' }, { id: 'b', text: '위가 더 최신이라는 뜻이므로 항상 위쪽만 남긴다.' }, { id: 'c', text: '======= 아래는 Git이 만든 정답이므로 그대로 사용한다.' }],
    correct: 'a', explanation: '이 merge 상황에서 HEAD 쪽은 현재 브랜치, 반대쪽은 가져오는 main의 내용입니다. 기호는 경계를 표시할 뿐 정답을 알려 주지 않습니다. 두 변경의 목적을 확인해 최종 문장을 정하고 결과도 검토합니다.',
    optionFeedback: { a: '맞습니다. 이 상황의 양쪽 내용을 구분하고 필요한 의미를 보존하는 판단입니다.', b: '위아래 위치는 최신 순위나 정답 순위가 아닙니다.', c: '구분선 아래도 사람이 작성한 다른 쪽 변경입니다. Git이 고른 정답이 아닙니다.' },
    takeaway: '충돌 마커는 양쪽의 경계이고, 최종 내용은 사람이 판단합니다.', source: { criterion: '3-05', label: '평가 항목 3 · 충돌 마커와 해결 기준', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'urgent-fix', category: 'judgment', title: 'main에 급한 오류가 발견됐어요',
    context: '함께 쓰는 버전에 급히 고쳐야 하는 오류가 있습니다. GitHub Flow와 팀의 PR 승인 규칙을 지키면서 빠르게 해결하려 합니다.',
    options: [{ id: 'a', text: '급하므로 main 보호를 끄고 곧바로 수정한 뒤 확인은 생략한다.' }, { id: 'b', text: '최신 main에서 작은 수정 브랜치를 만들고, 검증 → PR·빠른 리뷰와 승인 → 병합 → 배포·확인을 진행한다.' }, { id: 'c', text: '진행 중인 모든 기능을 함께 합친 뒤에 오류가 사라지는지 본다.' }],
    correct: 'b', explanation: '급한 수정도 목적이 작은 브랜치로 나누면 영향 범위를 확인하기 쉽습니다. 필요한 검증과 동료 확인을 신속하게 진행하고, 합친 뒤 배포한 결과도 확인합니다. 문서 결과물이라면 게시한 글과 링크를 확인합니다.',
    optionFeedback: { a: '급할수록 작은 확인 절차로 추가 오류를 막아야 합니다. 과제의 보호·승인 규칙도 유지합니다.', b: '맞습니다. 수정 범위를 좁혀 확인 과정을 빠르게 진행합니다.', c: '관련 없는 기능까지 묶으면 급한 수정의 영향을 판단하기 어려워집니다.' },
    takeaway: '급한 수정도 작은 브랜치에서 고치고, 확인받아 합친 뒤 실제 결과를 봅니다.', source: { criterion: '4-01', label: '평가 항목 4 · 긴급 수정의 순서', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'shared-message', category: 'judgment', title: 'push한 메시지가 update뿐이에요',
    context: '팀원이 여러 커밋을 “update”, “fix”라고 적어 push했습니다. 파일 내용은 올바르고 동료도 이미 그 기록으로 작업 중입니다. 협업을 멈추지 않으려면?',
    options: [{ id: 'a', text: '설명이 나쁜 커밋을 모두 revert해서 파일 변경을 없앤다.' }, { id: 'b', text: '동료에게 알리지 않고 모든 커밋을 고친 뒤 강제로 push한다.' }, { id: 'c', text: '공유한 기록은 두고 PR 등에 각 변경의 뜻을 보완하며, 다음 메시지부터 구체적으로 적도록 약속한다.' }],
    correct: 'c', explanation: '메시지가 부족한 것과 파일 변경이 잘못된 것은 다릅니다. PR 등에 커밋 식별자와 변경 대상을 연결해 설명하고, 팀 규칙과 리뷰에서 다음 메시지를 확인합니다. 공유 기록 정리가 꼭 필요하다면 영향 범위와 팀 합의를 먼저 확인해야 합니다.',
    optionFeedback: { a: 'revert는 메시지가 아니라 파일 변경을 취소하므로 올바른 작업까지 없앨 수 있습니다.', b: '동료가 이미 사용하는 기록을 갑자기 바꾸면 작업이 어긋날 수 있습니다.', c: '맞습니다. 필요한 설명을 보완하고 같은 문제가 반복되지 않도록 규칙을 개선합니다.' },
    takeaway: '공유한 메시지의 문제와 파일 내용의 문제를 구분합니다.', source: { criterion: '4-02', label: '평가 항목 4 · 의미 없는 공유 커밋 메시지 개선', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'repeated-conflicts', category: 'judgment', title: '같은 부분에서 계속 충돌해요',
    context: '두 팀원이 매번 같은 README 구역을 고치고, 브랜치를 오래 합치지 않아 충돌이 반복됩니다.',
    options: [{ id: 'a', text: '겹치는 작업과 오래 분리된 원인을 살펴 담당 범위를 나누고, 작은 변경을 자주 검토·통합한다.' }, { id: 'b', text: '앞으로 모든 충돌에서 먼저 합친 사람의 내용만 남긴다.' }, { id: 'c', text: '충돌을 피하려고 동료의 최신 변경은 마지막 날까지 가져오지 않는다.' }],
    correct: 'a', explanation: '반복되는 충돌은 겹치는 편집 범위, 큰 작업 덩어리, 늦은 통합 같은 원인을 살펴야 합니다. 파일이나 구역의 담당을 조율하고 작업을 작게 나누며 최신 변경을 확인합니다. 이후 충돌이 줄었는지도 봅니다.',
    optionFeedback: { a: '맞습니다. 한 번 해결하는 데서 끝내지 않고 원인에 맞춰 작업 방식을 고칩니다.', b: '먼저 합쳤다는 이유만으로 나중 작업의 필요한 내용까지 버릴 수 없습니다.', c: '변경이 오래 쌓이면 차이가 더 커져 마지막 통합이 어려워질 수 있습니다.' },
    takeaway: '반복 충돌은 편집 범위와 작업 크기, 통합 시점을 함께 점검합니다.', source: { criterion: '4-03', label: '평가 항목 4 · 반복 충돌의 원인과 예방', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'personal-contribution', category: 'review', title: '내 PR 2개가 합쳐졌으면 끝인가요?',
    context: '내 PR 두 개는 main에 합쳐졌습니다. 이번 과제에서 내 협업 참여를 확인하려면 무엇도 봐야 할까요?',
    options: [{ id: 'a', text: '팀 전체 커밋 수만 많으면 내 기록은 더 필요 없다.' }, { id: 'b', text: '다른 사람 PR 리뷰 2개 이상과 내 PR 의견 반영 1회, 결과물 기여와 실습 기록 참여도 확인한다.' }, { id: 'c', text: 'PR 하나에 커밋이 두 개 있으면 리뷰 두 번으로 센다.' }],
    correct: 'b', explanation: '개인별로 병합된 PR 2개 이상, 타인 PR 리뷰 2개 이상, 본인 PR의 리뷰 반영 1회 이상이 필요합니다. 결과물 기여와 최소 한 가지 실습 기록 작성 참여도 확인합니다. 숫자뿐 아니라 실제 내용과 링크가 있어야 합니다.',
    optionFeedback: { a: '팀 전체 수치가 각자의 최소 참여 기준을 대신하지 않습니다.', b: '맞습니다. 내 작업뿐 아니라 다른 사람과 확인하고 답한 기록도 필요합니다.', c: '커밋 수와 리뷰 횟수는 다른 기준입니다.' },
    takeaway: '내가 만든 작업, 남에게 준 의견, 내가 반영한 의견을 각각 확인합니다.', source: { criterion: '1-04', label: '과제 원문 · 팀원별 최소 기여와 기록 참여', path: '../instruction.md' }, bonus: false
  },
  {
    id: 'local-mock', category: 'judgment', title: '모의 PR 번호가 있으면 실제 PR인가요?',
    context: '로컬 test/에서 작성자 이름을 바꾸고, 병합 커밋 설명에 “Merge pull request #3”과 “Closes #3”를 적었습니다. GitHub에는 연결하지 않았습니다.',
    options: [{ id: 'a', text: '커밋 작성자 이름을 바꿨으므로 네 사람이 각자 GitHub에 로그인한 것이다.' }, { id: 'b', text: 'Closes #3를 적었으므로 GitHub Issue가 자동으로 생성되고 닫힌다.' }, { id: 'c', text: 'Git 병합은 실제 연습이지만 PR·Issue는 모의 기록이다. 실제 GitHub 증빙은 따로 필요하다.' }],
    correct: 'c', explanation: '로컬 Git만으로도 브랜치와 병합을 연습할 수 있습니다. 하지만 메시지에 PR 번호를 쓰거나 작성자 이름을 바꾼 것이 GitHub의 실제 PR, 계정 참여, 보호 설정을 만드는 것은 아닙니다.',
    optionFeedback: { a: '커밋 작성자 표시는 이름표입니다. 실제 로그인이나 계정 참여를 증명하지 않습니다.', b: '로컬 문구만으로 GitHub Issue가 생성되거나 닫히지 않습니다.', c: '맞습니다. 연습한 Git 동작과 실제 서비스에서 확인할 증빙을 구분합니다.' },
    takeaway: '로컬 모의 기록은 학습용이고, 실제 팀의 GitHub 기록은 별도로 확인합니다.', source: { criterion: 'foundation', label: '쉬운 설명서 · test의 모의 연습 범위', path: '../docs/0018_b2-2-first-week-guide.md' }, bonus: false
  },
  {
    id: 'local-amend', category: 'recovery', title: '아직 push하지 않은 마지막 설명의 오타',
    context: '마지막 커밋의 메시지에 오타가 있습니다. 아직 push하지 않았고, 파일 내용은 맞으며 새로 add한 변경도 없습니다.',
    options: [{ id: 'a', text: 'commit --amend로 마지막 커밋 메시지를 고친다.' }, { id: 'b', text: 'revert로 메시지의 오타만 취소한다.' }, { id: 'c', text: 'stash에 커밋을 넣었다가 꺼내 메시지를 바꾼다.' }],
    correct: 'a', explanation: '이 상황에서는 amend로 마지막 커밋을 새 커밋으로 교체하며 메시지를 고칠 수 있습니다. 커밋 식별자도 바뀝니다. 새로 add한 변경이 있다면 그 내용까지 포함될 수 있으므로 상태를 먼저 확인합니다.',
    optionFeedback: { a: '맞습니다. 아직 공유하지 않은 마지막 커밋의 메시지를 고치는 실습입니다.', b: 'revert는 커밋의 파일 변경을 되돌리며 메시지 오타만 고치지 않습니다.', c: 'stash는 아직 커밋하지 않은 작업을 임시 보관하는 도구입니다.' },
    takeaway: 'amend는 최근 커밋을 교체합니다. 공유 여부와 add 상태를 먼저 봅니다.', source: { criterion: '1-07', label: '과제 원문 · amend 실습', path: '../instruction.md' }, bonus: false
  },
  {
    id: 'soft-reset', category: 'recovery', title: '작성한 내용은 남기고 다시 커밋하고 싶어요',
    context: '개인 연습 브랜치에서 마지막 커밋을 아직 push하지 않았습니다. 직전 커밋이 존재하며, 새로 수정한 내용은 없습니다. git reset --soft HEAD~1을 실행하면?',
    options: [{ id: 'a', text: '마지막 커밋의 파일 내용까지 모두 삭제된다.' }, { id: 'b', text: '브랜치가 직전 커밋을 가리키고, 취소한 커밋의 변경은 add된 상태로 남는다.' }, { id: 'c', text: '원래 커밋 다음에 취소 커밋이 자동으로 추가된다.' }],
    correct: 'b', explanation: '이 조건의 soft reset은 마지막 커밋 한 단계를 되돌리지만 파일과 스테이징 영역을 유지합니다. 취소한 변경을 다시 묶어 커밋할 수 있습니다. 다른 reset 옵션까지 같은 결과라고 생각하면 안 됩니다.',
    optionFeedback: { a: '--soft는 작업 파일의 내용을 지우는 옵션이 아닙니다.', b: '맞습니다. 파일 내용과 다음 커밋에 넣을 상태를 유지하며 커밋 위치를 되돌립니다.', c: '새 취소 커밋을 만드는 설명은 revert에 해당합니다.' },
    takeaway: 'soft reset은 커밋 위치를 되돌리면서 작업 내용을 유지합니다.', source: { criterion: '1-07', label: '과제 원문 · reset --soft 실습', path: '../instruction.md' }, bonus: false
  },
  {
    id: 'stash-switch', category: 'recovery', title: '미완성 글을 두고 잠깐 다른 브랜치로 가려면?',
    context: 'Git이 이미 관리하던 파일을 수정 중입니다. 아직 커밋할 단계는 아니지만, 잠깐 다른 브랜치에서 확인할 일이 있습니다.',
    options: [{ id: 'a', text: 'revert로 쓰던 내용을 취소한 뒤 나중에 다시 쓴다.' }, { id: 'b', text: 'stash를 하면 GitHub에도 자동으로 백업되므로 push는 필요 없다.' }, { id: 'c', text: 'stash로 잠시 보관하고 전환한 뒤, 돌아와 pop하고 내용이 복원됐는지 확인한다.' }],
    correct: 'c', explanation: 'stash는 아직 커밋하지 않은 변경을 잠시 보관하는 데 씁니다. 다른 브랜치를 확인하고 돌아와 복원한 다음 diff 등으로 내용을 확인합니다. 기본 stash는 새로 만든 미추적 파일까지 모두 포함하지 않고, 원격 백업도 아닙니다.',
    optionFeedback: { a: '미완성 작업을 잠깐 치우는 목적에는 stash가 맞습니다.', b: 'stash는 로컬 임시 보관입니다. 자동으로 원격에 전달되지 않습니다.', c: '맞습니다. 보관 → 다른 브랜치 확인 → 복귀 → 복원과 내용 확인을 연습합니다.' },
    takeaway: 'stash는 미완성 작업의 임시 보관이며, 복원한 내용까지 확인합니다.', source: { criterion: '1-07', label: '과제 원문 · stash 후 브랜치 전환', path: '../instruction.md' }, bonus: false
  },
  {
    id: 'conflict-setup', category: 'recovery', title: '같은 줄 충돌을 확실히 연습하려면?',
    context: '두 사람이 같은 문장에 서로 다른 정보를 넣어 충돌을 경험하려 합니다. 시작 순서를 어떻게 맞추면 좋을까요?',
    options: [{ id: 'a', text: '같은 시작 커밋에서 각각 분기해 같은 줄을 다르게 고치고, 양쪽 커밋이 준비된 뒤 한쪽부터 합친다.' }, { id: 'b', text: '한 사람이 수정해 합친 뒤 다른 사람은 그 최신 문장을 그대로 사용한다.' }, { id: 'c', text: '각자 전혀 다른 파일을 고치면 반드시 충돌한다.' }],
    correct: 'a', explanation: '두 갈래가 같은 시작점의 같은 부분을 다르게 고쳐야 의도한 충돌 상황을 만들 수 있습니다. 한쪽이 최신 변경을 이미 포함한 상태에서 시작하면 같은 충돌이 나지 않을 수 있습니다.',
    optionFeedback: { a: '맞습니다. 출발점과 수정 구역, 양쪽 준비 여부를 맞춥니다.', b: '두 번째 사람이 첫 변경을 이미 포함하면 의도한 두 갈래 차이가 생기지 않을 수 있습니다.', c: '다른 파일의 변경은 보통 함께 합칠 수 있으며, 반드시 충돌하는 조건이 아닙니다.' },
    takeaway: '충돌 실습은 같은 시작점과 겹치는 수정, 양쪽 준비 상태를 확인합니다.', source: { criterion: '1-06', label: '쉬운 설명서 · 충돌을 만드는 시작 조건', path: '../docs/0018_b2-2-first-week-guide.md' }, bonus: false
  },
  {
    id: 'branch-meaning', category: 'flow', title: '브랜치를 만들면 폴더가 복사되나요?',
    context: 'main에서 새 작업 브랜치를 만들었습니다. Git에서 브랜치를 가장 정확하게 설명한 것은 무엇일까요?',
    options: [{ id: 'a', text: '프로젝트 폴더를 다른 위치에 통째로 복사한 것이다.' }, { id: 'b', text: '작업의 마지막 커밋을 가리키는 이름이며, main도 같은 종류의 브랜치다.' }, { id: 'c', text: 'GitHub에 새 계정을 만든 것이다.' }],
    correct: 'b', explanation: '브랜치는 커밋을 가리키는 이름입니다. 그 브랜치에서 새 커밋을 만들면 가리키는 위치도 이어 이동합니다. main은 팀의 공통 버전으로 정해 둔 브랜치 이름입니다.',
    optionFeedback: { a: '일반적인 브랜치 생성은 별도 폴더 복사를 뜻하지 않습니다.', b: '맞습니다. 기록이 이어지는 갈래에 붙인 이름으로 이해할 수 있습니다.', c: '브랜치는 Git 기록에 관한 것이며 사용자 계정 생성과는 다릅니다.' },
    takeaway: '브랜치는 커밋을 가리키는 이름이며 main도 브랜치입니다.', source: { criterion: 'foundation', label: '과제 원문 · 브랜치의 동작 원리', path: '../instruction.md' }, bonus: false
  },
  {
    id: 'rebase-bonus', category: 'judgment', title: '보너스: 기록 정리는 왜 조심해야 하나요?',
    context: '개인 작업 브랜치의 작은 커밋을 묶거나 설명을 고치려고 rebase를 배우고 있습니다. 어떤 설명이 맞을까요?',
    options: [{ id: 'a', text: '파일 결과가 같으면 공유한 커밋 번호가 바뀌어도 동료에게 영향이 없다.' }, { id: 'b', text: 'rebase는 커밋을 수정하지 않고 화면에서만 숨긴다.' }, { id: 'c', text: '커밋을 다시 만들 수 있으므로 우선 공유 전 개인 브랜치에서 연습하고, 공유 기록은 팀 합의 없이 바꾸지 않는다.' }],
    correct: 'c', explanation: 'rebase로 커밋을 재배치하거나 묶으면 기록을 읽기 쉬워질 수 있지만 커밋 식별자가 바뀝니다. 이미 그 기록으로 작업하는 동료가 있다면 서로 기록이 어긋날 수 있습니다. 대상과 공유 여부를 확인하고 복구할 기준도 남겨 둡니다.',
    optionFeedback: { a: '파일 결과뿐 아니라 함께 사용하는 커밋 기록도 중요합니다.', b: '단순한 화면 정리가 아닙니다. 커밋 기록을 다시 만들 수 있습니다.', c: '맞습니다. 공유 여부와 대상, 팀 합의를 먼저 확인하는 것이 안전 수칙입니다.' },
    takeaway: '보너스 기록 정리는 개인 범위에서 배우고, 공유 기록은 합의 없이 바꾸지 않습니다.', source: { criterion: '4-04', label: '평가 항목 4 · 보너스 rebase의 효과와 주의점', path: '../evalutation.md', anchor: '항목-4' }, bonus: true
  }
];

export const explainPrompts = [
  {
    id: 'explain-branch-unit', title: '작업을 어떻게 나눴나요?', prompt: '우리 팀에서 브랜치 하나에 담을 일을 어떤 기준으로 정했는지, 실제 작업 하나를 예로 설명해 보세요.',
    points: ['한 브랜치의 목적과 끝나는 기준이 분명하다.', '서로 다른 목적은 분리하고 관련된 파일은 함께 고칠 수 있다.', '본인 팀의 실제 작업과 나눈 이유를 연결한다.'],
    sample: '예를 들면 리뷰 방법 노트를 쓰는 일과 충돌 실습 기록을 따로 나눴습니다. 동료가 한 가지 목적을 읽고 확인하기 쉽고, 각각 끝났을 때 합칠 수 있기 때문입니다. 실제 답에는 우리 팀 작업 이름을 넣겠습니다.',
    source: { criterion: '2-01', label: '평가 항목 2 · 작업 단위 브랜치', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'explain-pr-template', title: 'PR에 빠짐없이 적는 방법', prompt: '무엇을 바꿨는지, 왜 바꿨는지, 어떻게 확인했는지와 Issue 연결을 빠뜨리지 않도록 어떤 규칙을 쓰나요?',
    points: ['What·Why·How·연결 Issue를 공통 양식에 둔다.', '양식의 빈칸을 해당 작업의 실제 내용과 확인 결과로 채운다.', '리뷰할 때 누락 여부와 링크를 확인한다.'],
    sample: 'PR 양식에 변경 내용, 이유, 확인 방법, Closes #실제번호를 넣습니다. “확인 완료”만 쓰지 않고 어떤 예시와 링크를 봤는지 적습니다. 동료도 검토할 때 빈 항목이 없는지 확인합니다.',
    source: { criterion: '2-02', label: '평가 항목 2 · PR 작성 규칙과 도구', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'explain-review-quality', title: '“좋아요”보다 도움이 되는 리뷰', prompt: '어떤 리뷰를 좋은 리뷰로 정했는지, 작성자와 리뷰어가 그다음 무엇을 하는지 설명해 보세요.',
    points: ['파일이나 문장의 특정 부분을 근거로 질문 또는 개선 의견을 준다.', '작성자는 답변이나 실제 수정으로 응답한다.', '리뷰어가 응답과 결과를 확인하고 기록을 남긴다.'],
    sample: '“좋아요”만 남기지 않고 “commit 설명 다음에 push와의 차이 예시를 넣으면 어떨까요?”처럼 위치와 이유를 적습니다. 작성자는 예시를 추가하거나 현재 설명으로 충분한 이유를 답하고, 리뷰어가 다시 확인합니다.',
    source: { criterion: '2-03', label: '평가 항목 2 · 리뷰 최소 품질과 운영', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'explain-conflict-process', title: '충돌이 나면 어떤 순서로 대응하나요?', prompt: '누가 누구와 이야기하고, 어떻게 해결하며, 어디에 무엇을 기록하는지 말해 보세요.',
    points: ['충돌을 만난 사람이 관련 팀원에게 브랜치와 파일 상황을 알린다.', '양쪽 의도를 확인해 최종 내용을 정하고 함께 검증한다.', 'conflict-resolution.md에 상황·마커·절차·선택 이유·결과와 관련 기록을 남긴다.'],
    sample: '충돌을 만난 사람이 같은 부분을 바꾼 팀원에게 알립니다. 두 변경이 필요한 이유를 함께 보고 최종 문장을 정한 뒤 리뷰어와 결과를 확인합니다. 충돌 기록에는 실제 표시와 고친 이유, 관련 PR·커밋을 남깁니다.',
    source: { criterion: '2-04', label: '평가 항목 2 · 충돌 대응 흐름', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'explain-reproducible-log', title: '다시 따라 볼 수 있는 기록', prompt: '실습 기록을 본 다른 사람이 같은 상황을 이해하고 재현하려면 어떤 내용을 남겨야 하나요?',
    points: ['담당자, 브랜치, 파일, 시작 상태 등 당시 상황을 적는다.', '실제로 실행한 순서와 명령, 전후 결과를 남긴다.', '결과의 확인 방법, 선택 이유와 주의점을 적는다.'],
    sample: '어떤 브랜치의 어느 파일에서 시작했는지 적고 실제 명령을 순서대로 남깁니다. 실행 전후의 상태와 출력으로 무엇이 바뀌었는지 보여 줍니다. 왜 그 명령을 골랐는지와 공유한 커밋에서는 주의할 점도 적습니다.',
    source: { criterion: '2-05', label: '평가 항목 2 · 재현 가능한 실습 로그', path: '../evalutation.md', anchor: '항목-2' }, bonus: false
  },
  {
    id: 'explain-stable-main', title: 'main이 정상이어야 하는 이유', prompt: 'main을 항상 사용할 수 있는 상태로 유지하지 않으면 다른 팀원의 작업에는 어떤 영향이 생길까요?',
    points: ['main은 팀의 공통 기준이며 새 작업의 출발점이다.', '깨진 내용을 합치면 다른 작업에도 문제가 이어질 수 있다.', '우리 결과물에서 정상이라는 기준과 확인 방법을 말한다.'],
    sample: '동료가 main을 가져와 다음 작업을 시작하므로 잘못된 링크나 오류가 있으면 같이 영향을 받습니다. 우리 노트라면 글이 빠지지 않았는지, 링크가 열리는지 등을 확인하고 합쳐야 합니다.',
    source: { criterion: '3-01', label: '평가 항목 3 · main을 정상 상태로 유지하는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'explain-approval', title: 'PR과 승인을 거치는 이유', prompt: '내가 보기엔 맞는 수정도 main에 바로 넣지 않고 동료 확인을 받는 이유를 설명해 보세요.',
    points: ['다른 시선으로 오류와 빠진 설명을 찾는다.', '변경 이유와 확인한 사람을 기록으로 남긴다.', '보호 설정은 규칙을 돕지만 내용 검토를 대신하지 않는다.'],
    sample: '내가 놓친 부분을 동료가 찾을 수 있고, 왜 고쳤는지와 누가 확인했는지도 남습니다. main 보호로 이 순서를 지키게 할 수 있지만 승인 버튼만 누르면 끝나는 것이 아니라 실제 변경을 읽어야 합니다.',
    source: { criterion: '3-02', label: '평가 항목 3 · PR과 승인의 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'explain-issue-link', title: '할 일과 해결 작업을 연결하는 이유', prompt: 'Issue와 PR을 연결하면 나중에 작업을 찾는 사람과 현재 팀원에게 어떤 도움이 되나요?',
    points: ['할 일의 목적과 해결한 변경을 함께 찾을 수 있다.', '담당자와 진행 상황을 공유하기 쉽다.', '실제 GitHub에서 조건에 맞는 병합 때 Issue 종료를 자동 연결할 수 있다.'],
    sample: 'Issue에서 왜 필요한 일인지 읽고 연결된 PR에서 실제 변경을 볼 수 있습니다. 팀원은 누가 진행하는지도 확인할 수 있습니다. Closes에 실제 Issue 번호를 쓰면 기본 브랜치 병합 등 조건이 맞을 때 완료 처리도 연결됩니다.',
    source: { criterion: '3-03', label: '평가 항목 3 · Issue와 PR을 연결하는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'explain-revert', title: '공유한 파일 변경을 되돌리는 방법', prompt: '동료가 이미 가져간 커밋의 파일 변경을 취소할 때, reset 뒤 강제 push보다 revert를 선택하는 이유는 무엇인가요?',
    points: ['revert는 원래 기록을 남기고 취소하는 새 커밋을 만든다.', '공유 기록을 갑자기 바꾸면 동료가 가진 기록과 어긋날 수 있다.', '취소 대상과 최종 파일 상태를 확인하며 메시지 오타와 구분한다.'],
    sample: 'revert는 기존 커밋을 없애지 않고 그 파일 변경을 취소한 커밋을 추가합니다. 동료가 쓰는 기록을 바꾸지 않으면서 취소 이유를 남길 수 있습니다. 메시지만 잘못됐다면 파일까지 취소하는 revert는 쓰지 않습니다.',
    source: { criterion: '3-04', label: '평가 항목 3 · 공유 커밋에 revert를 쓰는 이유', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'explain-markers', title: '충돌 표시를 보고 판단하기', prompt: '내 브랜치에서 main을 merge할 때 나타난 <<<<<<< HEAD, =======, >>>>>>> main의 의미와 최종 내용을 고르는 기준을 설명해 보세요.',
    points: ['이 merge 상황에서 HEAD 쪽은 현재 브랜치, 반대쪽은 main 내용이다.', '표시는 두 내용의 경계이며 최신 순위나 정답 표시가 아니다.', '양쪽 의도와 필요한 동작을 확인해 선택·통합하고 최종 결과를 검증한다.'],
    sample: '이 경우 위쪽은 내 브랜치, 아래쪽은 합치려는 main의 내용이고 가운데는 구분선입니다. 두 사람이 각각 변경 이유와 검증 결과를 추가했다면 둘 다 필요한지 확인해 함께 담습니다. 기호만 지우지 않고 결과가 맞는지도 봅니다.',
    source: { criterion: '3-05', label: '평가 항목 3 · 충돌 마커와 해결 기준', path: '../evalutation.md', anchor: '항목-3' }, bonus: false
  },
  {
    id: 'explain-hotfix', title: '급한 수정도 순서가 있어요', prompt: 'main에서 급한 오류가 발견됐습니다. 브랜치 만들기부터 실제 반영 결과를 확인하기까지 어떤 순서로 처리할까요?',
    points: ['최신 main에서 목적이 작은 수정 브랜치를 만든다.', '수정·검증 후 PR로 신속한 동료 리뷰와 승인을 받는다.', 'main에 병합하고 배포·게시한 결과도 확인한다.'],
    sample: '최신 main에서 오류 하나를 고치는 브랜치를 만듭니다. 수정하고 필요한 확인을 한 뒤 PR을 열어 동료에게 빠른 검토를 요청합니다. 승인 후 main에 합치고 배포하거나 게시한 결과에서 오류가 해결됐는지 다시 확인합니다.',
    source: { criterion: '4-01', label: '평가 항목 4 · 긴급 수정의 순서', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'explain-shared-message', title: '공유한 기록의 설명이 부족하다면?', prompt: '여러 커밋 메시지가 update뿐인데 파일은 맞습니다. 동료가 계속 작업할 수 있도록 현재 기록과 앞으로의 습관을 어떻게 개선할까요?',
    points: ['공유한 커밋을 무단으로 고쳐 강제 push하거나 파일을 revert하지 않는다.', 'PR·Issue 등에 커밋과 실제 변경 대상을 연결해 뜻을 보완한다.', '구체적인 메시지 예시와 검토 규칙을 정해 재발을 줄인다.'],
    sample: '이미 공유한 기록은 그대로 두고 PR에 각 커밋이 무엇을 바꿨는지 설명합니다. 파일이 맞으므로 revert하지 않습니다. 앞으로는 “docs: 리뷰 예시 추가”처럼 대상을 적고 리뷰 때 확인하기로 약속합니다.',
    source: { criterion: '4-02', label: '평가 항목 4 · 의미 없는 공유 커밋 메시지 개선', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'explain-repeated-conflicts', title: '반복되는 충돌을 줄이려면?', prompt: '같은 파일의 같은 구역에서 계속 충돌합니다. 어떤 원인을 확인하고 어떤 작업 약속을 바꿀지 제안해 보세요.',
    points: ['겹치는 편집 구역, 작업 크기, 오래 분리된 브랜치 등 원인을 찾는다.', '담당 범위를 조율하고 작은 작업을 자주 검토·통합하며 최신 변경을 확인한다.', '규칙을 바꾼 뒤 충돌이 줄었는지 확인한다.'],
    sample: '누가 같은 구역을 고치는지와 브랜치를 얼마나 오래 합치지 않았는지 살펴봅니다. 공통 목차를 정리할 담당을 조율하고 각자 글은 다른 파일에 쓰며 작은 단위로 검토받습니다. 이후 같은 원인의 충돌이 줄었는지 확인합니다.',
    source: { criterion: '4-03', label: '평가 항목 4 · 반복 충돌의 원인과 예방', path: '../evalutation.md', anchor: '항목-4' }, bonus: false
  },
  {
    id: 'explain-rebase-bonus', title: '보너스: 기록 정리의 장점과 주의점', prompt: 'rebase로 작은 커밋을 묶거나 설명을 고치면 왜 읽기 쉬워지며, 이미 공유한 기록에서는 무엇을 조심해야 하나요?',
    points: ['관련 커밋을 묶거나 순서·설명을 정리해 변경의 목적을 읽기 쉽게 할 수 있다.', '커밋을 다시 만들면 식별자가 바뀌어 동료의 기록과 어긋날 수 있다.', '공유 전 개인 브랜치에서 연습하고, 대상·복구 기준·공유 여부와 팀 합의를 확인한다.'],
    sample: '관련된 작은 기록을 묶으면 작업 목적을 따라가기 쉬워집니다. 하지만 새 커밋으로 바뀌면 동료가 쓰던 기록과 달라질 수 있습니다. 우선 공유 전 개인 브랜치에서 배우고, 공유 기록은 팀 합의 없이 정리하거나 강제로 push하지 않습니다.',
    source: { criterion: '4-04', label: '평가 항목 4 · 보너스 rebase의 효과와 주의점', path: '../evalutation.md', anchor: '항목-4' }, bonus: true
  }
];

export const evidenceChecks = [
  { id: 'team-access', label: '팀 저장소 하나와 팀원 접근 권한', help: '실제 제출할 GitHub 저장소 URL과 참여한 팀원들의 협업 권한을 확인하세요. 로컬 작성자 이름만으로는 실제 참여 권한을 확인할 수 없습니다.', source: { criterion: '1-01', label: '평가 항목 1 · 팀 저장소와 권한', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'main-protection', label: 'main 보호와 PR을 통한 병합', help: 'main 직접 push 제한, PR 경유, 최소 1명 승인 설정과 실제 병합 기록을 확인하세요. 규칙을 문서에 쓴 것만으로 설정이 완료되지는 않습니다.', source: { criterion: '1-02', label: '평가 항목 1 · main 보호와 병합 방식', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'issue-pr-links', label: '각 PR과 실제 Issue의 연결', help: '각 PR 본문의 Closes 또는 Fixes가 실제 해당 Issue를 가리키는지 확인하세요. 로컬 모의 번호와 실제 GitHub 링크를 구분하세요.', source: { criterion: '1-03', label: '평가 항목 1 · Issue와 PR 추적', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'personal-prs', label: '전원 병합 PR 2개 이상과 제출표 링크', help: '팀원별로 본인이 만든 PR이 최소 2개 병합됐는지 실제 링크와 상태를 확인하고 SUBMISSION.md에 모으세요. 커밋 2개가 PR 2개를 뜻하지는 않습니다.', source: { criterion: '1-04', label: '평가 항목 1 · 개인별 병합 PR', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'personal-reviews', label: '전원 타인 PR 리뷰 2개와 본인 의견 반영 1회', help: '전원이 다른 사람 PR에 구체적인 리뷰를 2개 이상 남겼고, 본인 PR에서 받은 의견을 최소 한 번 반영했는지 확인하세요. 실제 코멘트·답글·수정 기록으로 연결하세요.', source: { criterion: '1-05', label: '평가 항목 1 · 리뷰와 피드백 반영', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'two-conflicts', label: '충돌 해결 2회와 요구한 충돌 조건', help: '팀 전체에서 실제 충돌 해결 기록 2건을 확인하세요. 최소 1건은 같은 부분의 서로 다른 수정 또는 파일 이동·삭제와 내용 수정 등 과제의 비자명 충돌 조건에 맞아야 합니다. 상황·마커·해결 이유·결과도 확인하세요.', source: { criterion: '1-06', label: '평가 항목 1 · 충돌 횟수와 비자명 기준', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'four-recoveries', label: 'amend·reset·revert·stash와 전원 기록 참여', help: '팀 전체 네 가지 실습의 실제 전후 기록과 각 팀원의 최소 한 가지 기록 작성 참여를 확인하세요. 원격에 push한 커밋의 revert, stash 후 다른 브랜치 전환과 복원도 확인해야 합니다. 로컬 가정은 실제 원격 증빙과 구분하세요.', source: { criterion: '1-07', label: '평가 항목 1 · 네 가지 실습과 참여', path: '../evalutation.md', anchor: '항목-1' } },
  { id: 'three-documents', label: '협업 가이드·충돌 기록·실습 기록 3종', help: 'docs/CONTRIBUTING.md, docs/conflict-resolution.md, docs/troubleshooting-log.md가 실제로 있는지 확인하세요. 빈 파일이나 링크 목록에 그치지 않고 규칙·상황·절차·결과·주의점 등 필요한 본문이 있어야 합니다.', source: { criterion: '1-08', label: '평가 항목 1 · 필수 문서 3종', path: '../evalutation.md', anchor: '항목-1' } }
];
