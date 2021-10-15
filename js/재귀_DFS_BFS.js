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



// 조합의 경우수
function solution(n, m) {
  let answer;
  let arr=Array.from(())

  function DFS(n,m) {
    if(arr)
  }
  return answer;
}
console.log(solution(5, 3));




// 문제12 - 송아지찾기(기출문제)
function solution(s,e){ //s:시작지점 e:송아지위치(끝지점)
  let answer=[];
  function BFS(){
    let ch=Array(10001).fill(0); //check하는 배열! 한번 들렸던건 다시 안들리기위해, time
    let queue=[];
    queue.push(s);
    ch[s]=1;
    let l=0; // 트리의 Level
    while(queue.length){
      let len=queue.length;
      for(let i=0;i<len;i++){ //l이 1일때는 3개가 다나오는것.
        let x=queue.shift();
        //만약 여기서 return 하면 if(nx===e) return l; 여긴 레벨!이라 
        for(let nx of [x-1,x+1,x+5]){
          if(nx===e) return l+1; //자식에서 발견된거니까 l+1
          if(nx>0 &&nx<10000 &&ch[nx]===0){ //ch[nx]!==0이면 한번 들렸던거
            ch[nx]=1;
            queue.push(nx);
          }
        }
      }
      l++;
    }
  }
  answer=BFS();
  return answer;
}
console.log(solution(5,14));




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


function solution(n,m){
  let answer=[];
  let n=nums.length;
  let dy=Array.from()
  let ch=Array(n).fill(0);
  
  function DFS(l,sum){
    if(flag) return; //찾았으니 그 다음 재귀에서 나오는것들은 flag 1로 만들어서 종료시킴
    if(l===n){
      if(sum===m) answer=p.slice(); //이부분....건드려라........ string 처리
      flag=1;
    }
    else{
      for(let i=1;i<=n;i++){
        if(ch[i]===0){
          ch[i]=1;
          //p[l]=i; 이거 사용해도돼
          p.push(i);
          DFS(l+1,sum+(b[l]*p[l]])); //p
          ch[i]=0;
          p.pop();
        }
      }
    }
    for(let i=0;i<n;i++){
      b.push(combi(n-1,i));
    }
  }
}


// 문제13 - 타일 점프

function solution(num) {
  let answer = 0;
  let n=num.length;
  function BFS() {
    let ch = Array.from({length:n},()=>0);
    let queue = [];
    queue.push(0);
    ch[0]=1;
    let l=0;
    while(queue.length){
      let len=queue.length;
      for(let i=0;i<len;i++){ //level을 도는걸
        let x=queue.shift();
        for(let j=1;j<=num[x];j++){//level의 자식
          let nx=x+j; //nx는 인덱스
          if(nx===n-1) return l+1; //nx가 n-1이면 도착지점에 온거
          if(nx>0&&nx<n&&ch[nx]===0){
            ch[nx]=1;
            queue.push(nx);
          }

        }
      }
      l++;
    }
  }
  answer=BFS();
  if(answer===undefined) answer=-1;
  return answer;
}
console.log(solution([2, 2, 0, 2, 1, 1]));
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1]));


dx=[-1,0,1,0];
dy=[0,1,0,-1];
시계방향
board[x][y]=1; //출발점 체크하세요!!

// 경로탐색(DFS) - 최상의 경우의 수를 찾아라 DFS임
// 2차원 배열많이 사용해...............행과열.........ㅅㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅄㅂㅄ

//back할때 check=0해줘야해
//인접행렬의 단점 : node가 많아졌을때, 만개 천개 정도 되면... 메모리가 아작나 그리고 v노드가 10만이면 10만번을 돌아야돼
//그래프에 node개수많아지면 인접그래프 사용하기

function solution(e,nums){
  let answer=0;
  let path=[];
  let graph=Array.from(Array(n+1),()=>Array(n+1).fill(0));
  let ch=Array.from({length:n+1},()=>0);
  for(let [a,b] of edges){
    graph[a][b]=1;
  }
  function DFS(v){
    if(v===n){
      answer++;
      console.log(path);
    }
    else{
      for
    }
  }

}
let ch=Array.from({})


/* n+3배열로 
그래프화시키고 1번사람...부터 돌려
for문이 1부터 7까지도는데.....
ch[i]===0이면 cnt++하고
ch[i]===1이면....DFS돌아
*/

function solution(n,edges){
  let graph=Array.from(Array(n+1),()=>Array());
  let ch=Array.from({length:n+1},()=>0);
  let answer=0;
  for(let [a,b] of edges){
    graph[a].push(b);
    graph[b].push(a);
  }
  function DFS(v){
    for(let nv of graph[v]){
      if(ch[nv]===0){
        ch[nv]=1;
        DFS(nv);
      }
    }
  }
  for(let i=1;i<=n;i++){
    if(ch[i]===0){
      answer++;
      ch[i]=1;
      DFS(i);
    }
  }
  return answer;

}
console.log(solution(7, [[1, 2], [2, 3], [1, 4], [1, 5]]));



//1만나면 dfs! 만나면 그 안에 있는 수 0으로 바꾸고! dfs를 몇번 호출했냐가 답?
// 섬나라 아일랜드
function solution(board){
  let answer=0;
  let n=board.length;
  let dx=[-1,-1,0,1,1,1,0,-1];
  let dy=[0,1]
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