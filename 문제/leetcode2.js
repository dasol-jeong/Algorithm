// 단일 연결 리스트
// 두개의 수열이 주어지는데, 수열들의 역순을 더한다.

function solution(l1, l2) {
  const newList = new ListNode(); //노드 생성
  let tail = newList;
  let carry = 0;

  while (l1 || l2 || carry) {
    // 주어진 수열들과 carry할 게 있으면 반복문 계속 실행
    const sum1 = l1 ? l1.val : 0; //l1 수열의 값이 존재하면 sum1에 더하고 없으면 0
    const sum2 = l2 ? l2.val : 0;
    const sum = sum1 + sum2 + carry;

    tail.next = new ListNode(sum % 10); // 새로운 노드를 생성하여 가장 끝 노드에 next로 연결 -> 연결하면서 sum을 10으로 나눈 나머지 값 넣기 덧셈하면서 10 넘어가면 1의자리에는 그 나머지를 10의 자리에는 1을 넣어야하니까
    tail = tail.next; // tail에 가장 끝 노드로 다시 재정의
    carry = sum >= 10 ? 1 : 0; // 더할때,sum이 10 이상이면 carry에 1
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return newList.next;
}
console.log(solution([2, 4, 3], [5, 6, 4]));
