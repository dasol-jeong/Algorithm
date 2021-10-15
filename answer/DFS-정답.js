function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER; //정답에는 숫자타입의 값이 들어가는데, 가장 큰 값을 변수에 안전하게 저장하기 위해?
  let nums = [];
  let s = n;
  let flag = false; //이 문제는 테스트값 바로 다음에 오는 수가 답이 되는것으로, 그 값을 찾으면 더이상 탐색할 필요가 없음. 그래서 flag값으로 탐색진행여부 판단.
  while (s > 0) {
    //입력받은 수를 1의 자리수로 나누어 배열에 저장하는 법. s가 0이면 더 이상 나눌 수 없음! 그때 while문 종료
    let t = s % 10; // 숫자를 10으로 나누면 나머지가 무조건 1의 자리로 나옴.
    nums.push(t); // nums배열에 넣어줘
    s = parseInt(s / 10); // 테스트할 값을 10으로 나눠 나온 몫(정수)을 s에 넣어 값변경! s가 0이 될때까지!
  }
  nums.sort((a, b) => a - b); //nums배열을 오름차순으로 정렬해줘
  let tmp = []; //스택이라 생각하기
  let len = nums.length;
  let ch = Array.from({ length: len }, () => 0); // 그 노드를 들렸는지 안들렸는지 확인하기 위해 check배열을 생성하여 0으로 초기화 시켜줘(0:들리기전 1:들린후);
  function DFS(l) {
    if (flag) return; //flag값이 true이면 실행중인 함수를 종료하고 그 전 실행이 멈췄었던 함수지점으로 돌아가! 만약 지금이 D(2)함수 실행중 flag(true)가 되어 리턴을 하면 D(1) 함수 중단된 지점으로 돌아가 D(1)함수를 끝까지 실행
    if (l === len) {
      // nums배열을 다 돌면
      let res = 0; //결과를 넣어줄 변수는 0으로 초기화
      for (let i = 0; i < len; i++) {
        // 배열에 있는 숫자원소들을 1의자리로 하니씩 한 인덱스에 저장되어있음. 한 숫자로 만드려고 이 for문을 하는것!!!! 이걸 몰랐네...ㅠㅠㅠㅠ알아두자
        //배열의 시작인덱스는 0부터 시작하니 0부터 배열의 길이-1까지 돌아
        res = res * 10 + tmp[i]; //아까 숫자를 1의자리로 쪼갰을때 10으로 나눈 나머지였으니 다시 10곱하면서 더해주기
        //console.log(res);
      }
      if (res > n) {
        // 주어진값 보다 큰 첫번째로 나오는 값이 이 문제의 정답!, 주어진값보다 결과값이 클때 if문 실행
        answer = res; //결과값을 정답에 넣기
        flag = true; // 결과값을 찾았으니, 더 이상 탐색할 필요 없음. flag를 ture해주어 재귀함수 탈출
      }
    } else {
      for (let i = 0; i < len; i++) {
        //nums의 길이까지
        if (ch[i] === 0) {
          // ch[i]===0이란 뜻은 아직 들리지않았다는 것 true이면 실행
          ch[i] = 1; // 함수를 들렸으니 0에서 1로 값 변경
          tmp.push(nums[i]); //tmp 배열에 nums[i]원소 삽입
          DFS(l + 1); //dfs(레벨+1)해서 함수 다시 호츨
          ch[i] = 0; //바로 윗줄 재귀함수가 실행되고 return되어 돌아오면 여기서부터 다시 코드시작!, 이제 이 위치에서 나갈거니 0으로 바꿔주기
          tmp.pop(); //그리고 스택에서 빼주기
        }
      }
    }
  }
  DFS(0); // DFS함수호출 LEVEL 0부터 시작
  if (!flag) return -1; //만약 flag값이 false이면 -1을 리턴해줘(문제 조건);
  return answer;
}
console.log(solution(123));
console.log(solution(321));
console.log(solution(20573));
