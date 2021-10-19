// 2021-10-14
// 재귀함수, DFS, BFS

// 문제1 - 재귀함수를 이용한 이진수 출력
function solution1(n) {
  let answer = 0,
    temp = [];
  function DFS(n) {
    if (n === 0) return;
    else {
      //n이 0이라는건 더 이상 나눌 수 없음
      DFS(parseInt(n / 2)); // 호출
      temp.push(n % 2); // 나머지 값 배열에 넣기
      console.log(temp);
    }
  }
  DFS(n);
  for (let i = 0; i < temp.length; i++) {
    answer = answer * 10 + temp[i];
  }
  return answer;
}
console.log(solution1(11));

// 재귀함수가 control하는 건 지역변수임! 전역변수로 선언하지마
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      console.log(n);
      DFS(n - 1); //재귀함수는 stack임 stack을 사용하기때문에...먼저들어간게 먼저나옴
    }
  }
  DFS(3);
  return answer;
}
console.log(solution(3));

function solution(n) {
  let answer = [];
  function DFS(n) {
    if (n == 0) return;
    else {
      DFS(n / 2);
      //stack을 사용하기때문에 거꾸로 출력함.
    }
  }
  DFS(n);
}
console.log(solution(11));

// 문제2 - 이진트리 순회
function solution(n) {
  let answer = "";
  function DFS(v) {
    // 재귀함수
    if (v > 7) return;
    else {
      //만약 7보다 커지면 stack에 쌓은 값 반환, v는 부모
      answer += v + " "; //
      DFS(v * 2); //왼쪽자식
      DFS(v * 2 + 1); //오른쪽자식
    }
  }
  DFS(n); // 함수호출
  return answer;
}
console.log(solution(1)); // 1 2 4 5 3 6

// 문제3
function solution(n) {
  let answer = [];
  let temp = [];
  function DFS(v) {
    if (v === n + 1) {
      if (temp.length != 0) {
        answer.push(temp.slice());
      }
    } else {
      temp.push(v);
      DFS(v + 1);
      temp.pop();
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(3));

// 문제4
// i 인덱스에 있는 것을 사용하겠다 안하겠다는 level로....
function solution(nums) {
  let answer = "YES";
  let total = nums.reduce((a, b) => a + b, 0); // 배열의 전체 합
  let n = nums.length;
  let flag = 0;
  function DFS(l, sum) {
    if (flag) return;
    if (l === n) {
      if (total - sum === sum) {
        return answer;
      }
      answer = "NO";
      flag = -1;
    } else {
      DFS(l + 1, sum + nums[l]);
      DFS(l + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution([3, 9, 11, 13]));

// 문제5
function solution(nums, m) {
  let answer = 0;
  let n = nums.length;
  function DFS(l, sum) {
    if (sum > m) return; // sum이 m(조건값)보다 크면 전(?) 재귀함수 실행하던곳으로 돌아간다
    if (l === n) {
      // 배열을 다 돌면
      answer = Math.max(answer, sum); // m(조건값)에 가까운 값을 answer변수에 넣기
    } else {
      DFS(l + 1, sum + nums[l]); // 배열의 요소를 더함(=그 무게를 사용)
      DFS(l + 1, sum); // 배열의 요소를 사용하지 않음
    }
  }
  DFS(0, 0); // 매개변서 0,0으로 넘기기
  return answer;
}
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));

// 문제5
function solution(n, m) {
  let answer = [];
  let temp = [];
  function DFS(l) {
    if (l === n) {
      answer.push(temp.splice()); //깊은복사요?얕은복사요?...
    } else {
      for (let i = 1; i <= n; i++) {
        //여기서 호출 n번 일어나는거임
        temp.push(i);
        DFS(l + 1); //함수끝나면 일로 다시 넘어와
        temp.pop(); // 이거하고 i++되는거임
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3, 2));

// 문제6
function solution(nums, m) {
  let answer = [];
  let temp = [];
  let n = nums.length;
  let ch = Array(n).fill(0);

  function DFS(l) {
    if (l === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp.push(nums[i]);
          DFS(l + 1);
          ch[i] = 0;
          temp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([3, 6, 9], 2));

// 문제8
function solution(n, r) {
  let answer = [];
  let arr = Array.from(Array(35), () => Array(35).fill(0)); //참여한 경우 1, 참여안한경우 0으로 표시하기 위해 배열생성하여 0으로 초기화
  function DFS(n, r) {
    if (arr[n][r] > 0) return arr[n][r];
    if (n === r || r === 0) return 1;
    else return (arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution(5, 3));

// 문제9 - 수열 추측하기
function solution(n, f) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0)); // 조합의 경우의 수를 넣을 배열
  let ch = Array.from({ length: n + 1 }, () => 0); // 그 노드를 들렸는지에 대한 check를 하기 위해 배열 생성. 배열의 값을 0으로 초기화 (들렸으면 1로 값 바꿈)
  let b = [],
    queue = []; // b는 맨 앞줄 각 숫자의 계수를 담을 곳, queue는 그 계수를 통해 구해진 1부터 n까지의 숫자를 담을 배열

  function comb(n, r) {
    // 맨 앞줄 각 숫자의 계수를 구한것(위치중요)
    if (dy[n][r] > 0) return dy[n][r]; //구했던 값들은 다시 구할 필요 없으니까 값 return(메모제이션)
    if (n === r || r === 0)
      return 1; // n===r 또는 r===0인 경우는 한 경우밖에 없으니 1 return
    else return (dy[n][r] = comb(n - 1, r - 1) + comb(n - 1, r)); // 재귀함수로 계수를 함
  }

  function DFS(l, sum) {
    console.log(l, sum);
    if (flag) return; // flag가 true(1)이면 이전 함수 중단된 부분으로 돌아가기
    if (l === n) {
      // l===n이면 queue에 1부터 n까지 들어 있는거임
      if (sum === f) {
        // sum===f 되는순간 원하는 값 찾은것이니까
        answer = queue.slice(); // queue 배열에 넣었던 값을 answer에 넣기
        flag = 1; // 재귀함수라면 이전 함수로 돌아가기 위해 flag 값을 1로 해줌 (앞으로 가봤자 이미 탐색했던거니까..)
      }
    } else {
      for (let i = 1; i <= n; i++) {
        // n은 1부터 시작하니까 i=1부터 n까지 for문 돌기
        if (ch[i] === 0) {
          // 그 수의 check배열 값이 0이면 아직 확인하지 않은 것.
          ch[i] = 1; // 그 수를 queue에 넣어 확인했으면 다시 할 필요없으니 check배열 값을 1로 주기
          //p[l]=i; 이거 사용해도돼
          queue.push(i); // queue에 값 넣기
          DFS(l + 1, sum + b[l] * queue[queue.length - 1]); // b와 queue 인덱스 같은것끼리 곱하여 sum에 더해주면서 f값 찾기
          ch[i] = 0; // 숫자와 계수가 맞지 않는다면 그 수의 check배열 값을 다시 0으로 주어 그 수와 옳바른 계수가 곱해지게끔 하기 위해
          queue.pop(); // 원하는 값이 아니니 queue의 맨 앞 원소를 빼, 1부터 n까지 위치를 바꿔가며 원하는 값을 찾기 위해
        }
      }
    }
  }
  for (let i = 0; i < n; i++) b.push(comb(n - 1, i)); // 메모이제이션을 하며 앞 줄 숫자의 계수를 b배열에 넣는다.
  DFS(0, 0); // DFS 함수 시작
  return answer;
}
console.log(solution(4, 16));
// 문제10 조합구하기는 그냥 코드외우세요...
function solution(n, m) {
  let answer = [];
  let temp = [];
  function DFS(l, s) {
    if (l === m) {
      answer.push(temp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        temp.push(i);
        DFS(l + 1, i + 1); //s로 넘겨주는 값 i+1인거 기억하기!!!!
        temp.pop();
      }
    }
  }
  DFS(0, 1);
  return answer;
}
console.log(solution(4, 2));

// 문제11 - 이진트리 레벨탐색
function solution() {
  let answer = "";
  function BFS() {
    // BFS 함수 정의
    let queue = []; // queue 배열 선언
    queue.push(1); // 1을 먼저 queue에 넣기
    while (queue.length) {
      // queue의 길이가 0(false)이 아닐때, 1이상(true)일때 while문 수행
      let v = queue.shift(); //queue에 들어있는 원소를 빼서 v 즉 부모노드에 넣기
      answer += v + " "; //부모노드 다음으로 탐색하는 노드들을 나열하기 위해
      for (let nv of [v * 2, v * 2 + 1]) {
        // v의 왼쪽 노드 : v*2  , v의 오른쪽 노드 : v*2+1
        if (nv > 7) continue; // 자식 노드가 7보다 크면 아래 구문은 실행 x
        queue.push(nv); // nv가 7보다 작으면 queue에 넣기
      }
    }
  }
  BFS(); // BFS함수 시작
  return answer;
}
console.log(solution());

// 문제11 - 이진트리 레벨탐색
console.log(solution());
function solution() {
  let answer = "";
  function BFS() {
    let queue = [];
    queue.push(1);
    while (queue.length) {
      let v = queue.shift();
      answer += v + " ";
      for (let nv of [v * 2, v * 2 + 1]) {
        if (nv > 7) continue;
        queue.push(nv);
      }
    }
  }
  BFS();
  return answer;
}
console.log(solution());

// 문제12 - 송아지찾기(기출문제)
function solution(s, e) {
  //s:시작지점 e:송아지위치(끝지점)
  let answer = [];
  function BFS() {
    let ch = Array(10001).fill(0); //check하는 배열! 한번 들렸던건 다시 안들리기위해, time
    let queue = [];
    queue.push(s);
    ch[s] = 1;
    let l = 0; // 트리의 Level
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        //l이 1일때는 3개가 다나오는것.
        let x = queue.shift();
        //만약 여기서 return 하면 if(nx===e) return l; 여긴 레벨!이라
        for (let nx of [x - 1, x + 1, x + 5]) {
          if (nx === e) return l + 1; //자식에서 발견된거니까 l+1
          if (nx > 0 && nx < 10000 && ch[nx] === 0) {
            //ch[nx]!==0이면 한번 들렸던거
            ch[nx] = 1;
            queue.push(nx);
          }
        }
      }
      l++;
    }
  }
  answer = BFS();
  return answer;
}
console.log(solution(5, 14));

// 문제9 -  수열 추측하기
function solution(n, r) {
  let answer = [];
  let arr = Array.from(Array(35), () => Array(35).fill(0)); //참여한 경우 1, 참여안한경우 0으로 표시하기 위해 배열생성하여 0으로 초기화
  function DFS(n, r) {
    if (arr[n][r] > 0) return arr[n][r];
    if (n === r || r === 0) return 1;
    else return (arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution(5, 3));

// 문제13 - 타일 점프

function solution(num) {
  let answer = 0;
  let n = num.length;
  function BFS() {
    let ch = Array.from({ length: n }, () => 0);
    let queue = [];
    queue.push(0);
    ch[0] = 1;
    let l = 0;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        //level을 도는걸
        let x = queue.shift();
        for (let j = 1; j <= num[x]; j++) {
          //level의 자식
          let nx = x + j; //nx는 인덱스
          if (nx === n - 1) return l + 1; //nx가 n-1이면 도착지점에 온거
          if (nx > 0 && nx < n && ch[nx] === 0) {
            ch[nx] = 1;
            queue.push(nx);
          }
        }
      }
      l++;
    }
  }
  answer = BFS();
  if (answer === undefined) answer = -1;
  return answer;
}
console.log(solution([2, 2, 0, 2, 1, 1]));
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]));

dx = [-1, 0, 1, 0];
dy = [0, 1, 0, -1];
시계방향;
board[x][y] = 1; //출발점 체크하세요!!

// 경로탐색(DFS) - 최상의 경우의 수를 찾아라 DFS임
// 2차원 배열많이 사용해...............행과열.........ㅅㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅂㅄ

//back할때 check=0해줘야해
//인접행렬의 단점 : node가 많아졌을때, 만개 천개 정도 되면... 메모리가 아작나 그리고 v노드가 10만이면 10만번을 돌아야돼
//그래프에 node개수많아지면 인접그래프 사용하기

function solution(e, nums) {
  let answer = 0;
  let path = [];
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of edges) {
    graph[a][b] = 1;
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
    }
  }
}
let ch = Array.from({});

/* n+3배열로 
그래프화시키고 1번사람...부터 돌려
for문이 1부터 7까지도는데.....
ch[i]===0이면 cnt++하고
ch[i]===1이면....DFS돌아
*/

function solution(n, edges) {
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  function DFS(v) {
    for (let nv of graph[v]) {
      if (ch[nv] === 0) {
        ch[nv] = 1;
        DFS(nv);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      answer++;
      ch[i] = 1;
      DFS(i);
    }
  }
  return answer;
}
console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]]));

//1만나면 dfs! 만나면 그 안에 있는 수 0으로 바꾸고! dfs를 몇번 호출했냐가 답?
// 섬나라 아일랜드
function solution(board) {
  let answer = 0;
  let n = board.length;
  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1];
}

/*제곱근까지..돌려서....:소수.......
for(let i=0;i<arr.length;i++){
  let check = true;
  for(let j=2;j*j<=arr[i];j++){
    if(arr[i]%j===0){
      check=false;
      break;
    }
  }
  if(check){
    count++;
  }
}
*/

function solution(n, edges) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  function DFS(v) {
    for (let nv of graph[v]) {
      if (ch[nv] === 0) {
        ch[nv] = 1;
        DFS(nv);
      }
    }
  }
  for (let i = 1; i <= n; i++) {
    if (ch[i] === 0) {
      answer++;
      ch[i] = 1;
      DFS(i);
    }
  }
  return answer;
}
console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]]));

// 최대 선호 음식(DFS) - 다시해보기
// k개 씀 최대라곤 되어있지만 4combi3
// 어떤 집합에 부분집합으로 자기가 속하면 자기 자신이 나옴 -> 이진수화  이진 &연산!
// 이렇게 하면서 학생이 이 음식을 먹을 수 있는지 계속 알아봐 최대값을 answer에 넣고
function solution(nums, d, k) {
  let answer;
  let n = nums.length;
  let pow = Array(d + 1).fill(0);
  let st = Array(n).fill(0);
  pow[1] = 1;
  for (let i = 2; i <= d; i++) {
    pow[i] = pow[i - 1] * 2;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      st[i] += pow[nums[i][j]];
    }
  }
  function DFS(l, s, bit) {
    if (l === k) {
      let cnt = 0;
      for (let j = 0; j < n; j++) {
        if ((bit & st[j]) === st[j]) cnt++;
      }
      answer = Math.max(answer, cnt);
    } else {
      for (let i = s; i <= d; i++) {
        DFS(l + 1, i + 1, bit + pow[i]);
      }
    }
  }
  DFS(0, 1, 0);
  return answer;
}
console.log(
  solution([[1], [2, 3], [3], [1, 2], [], [2, 1], [2, 3, 4], [3, 4]], 4, 3)
);

//BFS...출발지점이...여러개일수있어...
// 문제7 - 토마토

function solution(board) {
  let answer = 0;
  let n = boadr.length;
  let m = board[0].length;
  let ch = Array.from(Array(n), () => Array(m).fill(0));
  let queue = [];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
}

// 문제8 - 스도쿠
/*
 빈곳(0값인곳들)을 좌표로 배열에 저장해둬야해
 스도쿠판에 있는 값들을 행,열,그룹(스도쿠는 행과 열뿐만아니라 3*3도 1~9까지 들어있어야하니까) 배열에 그 수가 있는 체크
*/
function group(x, y) {
  //x행 y열
  return x / 3 * 3 + y / 3;
}
//그룹번호 리턴되면 그룹배열로 가서 체크....

function solution(board) {
  let answer = 0;
  let p = Array.from(Array(2), () => Array(81).fill(0));
  let row = Array.from(Array(10), () => Array(10).fill(0));
  let col = Array.from(Array(10), () => Array(10).fill(0));
  let group = Array.from(Array(10), () => Array(10).fill(0));
  let cnt = 0;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        p[0][cnt] = i;
        p[1][cnt++] = j;
      } else {
        function solution(n, r) {
          let answer = [];
          let dy = Array.from(Array(35), () => Array(35).fill(0));

          function DFS(n, r) {
            if (dy[n][r] > 0) return dy[n][r];
            if (n === r || r === 0) return 1;
            else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
          }
          answer = DFS(n, r);
          return answer;
        }
        row[i][board[i][j]] = 1;
        col[j][board[i][j]] = 1;
        group[find(i, j)][board[i][j]] = 1;
      }
    }
  }
  let flag = false;
  DFS(0);
  function find(x, y) {
    return parseInt(x / 3) * 3 + parseInt(y / 3);
  }
  function DFS(l) {
    if (flag) return;
    if (l === cnt) {
      answer = board.map(v => v.slice());
      flag = true;
    } else {
      let xx = p[0][l];
      let yy = p[1][l];
      let gg = find(xx, yy);
      for (let i = 1; i <= 9; i++) {
        if (row[xx][i] === 0 && col[yy][i] === 0 && group[gg][i] === 0) {
          row[xx][i] = col[yy][i] = group[gg][i] = 1;
          board[xx][yy] = i;
          DFS(l + 1);
          board[xx][yy] = 0;
          row[xx][i] = col[yy][i] = group[gg][i] = 0;
        }
      }
    }
  }
  return answer;
}
let b = [
  [0, 2, 3, 0, 5, 0, 7, 8, 9],
  [0, 5, 6, 0, 8, 9, 1, 0, 3],
  [0, 8, 9, 1, 0, 3, 0, 5, 6],
  [0, 1, 0, 0, 6, 0, 8, 9, 0],
  [3, 0, 5, 0, 9, 7, 0, 1, 4],
  [0, 9, 7, 0, 1, 0, 0, 6, 5],
  [5, 3, 0, 6, 0, 2, 9, 7, 8],
  [6, 0, 2, 9, 0, 8, 5, 3, 1],
  [9, 0, 8, 0, 3, 0, 6, 0, 2]
];
console.log(solution(b));

function solution(nums, k) {
  //nums : 랜선의 길이들이 담긴 배열, k : 랜선의 개수
  let answer;
  function count(len) {
    let cnt = 0; //랜선을 자르는 횟수를 담을 변수
    for (let x of nums) {
      //nums배열에 들어있는 랜선의 길이 하나하나를 x에 담음
      cnt += Math.floor(x / len); // len:자를려는 길이, x라는 랜선을 len으로 나눈 몫이 그 단위로 나눠진 랜선의 개수이다.
    }
    return cnt; // nums배열에 있는 랜선의 길이를 다 len이라는 길이로 나눠 나온 랜선의 개수를 return
  }
  let left = 1; // left는 1로 선언. 랜선의 길이가 0일 순 없으니까..(근데 0으로 해줘도 상관은 x)
  let right = Math.max(...nums); // nums 배열 중 가장 큰수를 right로 해줌, 배열에 가장 작은 수로 하면 그것보다 큰수가 들어오게되면 반례가 생김.
  // left가 right보다 커지면 while문 종료(이분검색은 left,right로 배열의 범위를 정하고 mid를 구해 배열의 반토막씩 줄여나가면서 구하는 알고리즘이라 left가 right를 넘어가면 끝임)
  while (left <= right) {
    let mid = parseInt((left + right) / 2); // 배열의 양쪽 끝지점을 더해 나누기 2한 몫이 그 배열의 중앙값임
    if (count(mid) >= k) {
      // 만약, 현재 정한 자를려는 단위로 랜선들을 잘랐을때 나온 랜선의 개수가 k보다 크거나 같으면 문제의 조건에 충족한거임
      answer = mid; // 그래서 자를려는 길이를 answer에 담아두고 계속 최적의 길이를 찾기
      left = mid + 1; // 위의 자를려는 길이가 충족하니 길이를 더 늘려보기 위해 left의 위치를 현 mid+1으로 재위치시킴.
    } else right = mid - 1; // 현재 정한 자를려는 단위가 너무 커 랜선의 개수가 조건보단 적은상태. 자를려는 단위를 줄이기위해, right를 mid-1로 재위치시킴.
  }
  return answer;
}
console.log(solution([802, 743, 457, 539], 11));
//11개 이상이면 일단 답으로 해놓고 길이를 늘려서 되면 계속 답을 교체! 더 좋은 답을 찾기 위해 계속 함.
