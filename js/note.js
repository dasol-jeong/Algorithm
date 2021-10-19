/*function solution(words){
  let answer = 100;
  let minCnt=0;

  let arr=new Array(words.length);
  for(let i=0; i<words.length;i++){
    arr[i]=words[i].split("");
  }
  for(let i=0; i<words.length-1;i++)
 
}

const words = ["longlong", "longtong", "longbig"];

console.log(solution(words));*/

/* 모든 문자열에서 구분할 수 있는 부분을 찾아내는 거니까
배열중 문자열 하나만 정해서 돌면되는구나
0,1,2
seeasue에 있는 0,1 s만!들가*/

function solution(words) {
  let answer = [];
  let sH = new Map();
  for (let x of words[0]) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  for (let i = 1; i < words.length; i++) {
    let tmp = new Map();
    for (let x of words[i]) {
      if (sH.get(x)) {
        sH.set(x, sH.get(x) - 1);
        tmp.set(x, (tmp.get(x) || 0) + 1);
      }
    }
    sH = tmp;
  }
  let str = "";
  for (let [key, val] of sH) {
    str += key.repeat(val);
  }
  answer = str.split("");
  return answer;
}
console.log(solution(["longlong", "longtong", "longbig"])); //["l", "o", "n", "g", "g"]
console.log(solution(["cool", "rock", "cook"])); //["c", "o"]
console.log(solution(["a", "aaa", "aaaaa"])); //["a"]
console.log(solution(["aabbss", "bbbss", "csc", "asb"])); //["s"]
console.log(solution(["abcde", "edcba", "cdeba", "debac", "acbed"])); //["a", "c", "b", "e", "d"]

// let arr=[1,2,3,4,5];
// let result=0;
// arr.forEach((num) =>{
// 	result+=num;
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((pre, curr) => {
//   return pre + curr;
// }, 0);
// console.log(result);

function solution6(str) {
  let answer = "YES";
  let left = 0,
    right = str.length - 1,
    cnt = 0;
  str = str.split(""); // 문자열(String) -> 배열(Array) 변환
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      if (cnt > 1) {
        answer = "NO";
        break;
      }
      cnt++;
      left++;
      left--;
    }
  }
  return answer;
}
console.log(solution6("abcbdcba"));
//console.log(solution6("abcabbakcba"));
//console.log(solution6("abcacbakcba"));

// 프로그래머스 - 엘리베이터 문제
function solution(money, cost) {
  let answer = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];
    while (sum > money) {
      sum -= cost[left++];
      console.log(sum);
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50]));

function sol(nums, k) {
  let answer = 0;
  (left = 0), (cnt = 0);
  for (let right = 0; right < nums.length; right++) {
    while (cnt > k) {
      if (nums[right] % 2 === 1) {
        cnt++;
      }
      nums[left++];
    }
    console.log(cnt);
  }
  return answer;
}
console.log(sol([1, 2, 1, 1, 2], 2));

/*
function counting
if(arr[right]%2===1) odd++;
while(odd>k){
  if(arr[left]%2===1) odd--;
  left++;
}
sum+=right-left+1;
return counting(k)-counting(k-1);
*/

function solution(n){
  let answer=0,temp=[];

  function DFS(n){
    if(n===0) return;
    else{
      DFS(parseInt(n/2));
      temp.push(n%2);
    }
  }
  DFS(n);
  for(let i=0;i<temp.length;i++){
    answer=answer*10+temp[i];
  }
  return answer;
}
console.log(solution(11));



function solution(n){
  let answer;
  let dy=Array.from(Array(n))
}

console.log(solution([2, 2, 0, 2, 1, 1]));

function solution(num){
  let anwer=0;
  let n=num.length;
  function BFS(){
    let ch=Array.from({length:n},()=>0);
    let queue=[];
    queue.push(0);
    ch[0]=1;
    let l=0;
    while(queue.length){
      let len=queue.length;
      for(let i=0;i<len;i++){
        let x=queue.shift();
        for(let j=1;j<=num[x];j++){
          let nx=x+j;
          if(nx===n-1) return l+1;
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
console.log(solution([2,2,0,2,1,1]))


function solution(board){
  let answer;
  let n=board.length;
  let dis=Araay.from(Array(7),()=>Array(7).fill(0));
  let dx=[-1,0,1,0];
  let dy=[0,1,0,-1];
  function BFS(x,y){
    let queue=[];
    queue.push([x,y]);
    board[x][y]=1;
    while(queue.length){
      let curr=queue.shift();
      for(let j=0;j<4;j++){
        let nx=curr[0]
      }
    }
  }

}
console.log(solution());



function solution2(nums, m) {
  let answer = 0;
  let left = 0,
    right = nums.length - 1; // left는 왼쪽에서부터 right는 오른쪽에서부터 배열을 안쪽으로 좁혀오기 위해 탐색
  nums.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
  while (left <= right) {
    // left > right되는 순간은 배열을 다 탐색한거니, while문 종료
    if (nums[left] + nums[right] <= m) {
      // sort되어있으니까 가장 몸무게 많이 나가는 사람과 가장 적게 나가는 사람의 합이 m값 이하이면 counting!
      answer++;
      left++; // 다음 경우를 찾기 위해 left는 +1
      right--; // right는 -1
    } else {
      //조건이 2명이하 이니까 nums[left], 즉 여기선 nums[0] 값으로만 원하는 값을 찾을 수 있음
      answer++; // 한개 counting!
      left++;
    }
  }
  return answer;
}
console.log(solution2([90, 50, 70, 100, 60], 140));

function solution(nums, m) {
  let answer = 0;
  let left = 0,
    right = nums.length - 1; // left는 왼쪽에서부터 right는 오른쪽에서부터 배열을 안쪽으로 좁혀오기 위해 탐색
  nums.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
  console.log(nums);
  while (left <= right) {
    // left > right되는 순간은 배열을 다 탐색한거니, while문 종료
    if (nums[left] + nums[right] <= m) {
      // sort되어있으니까 가장 몸무게 많이 나가는 사람과 가장 적게 나가는 사람의 합이 m값 이하이면 counting!
      answer++;
      left++; // 다음 경우를 찾기 위해 left는 +1
      right--; // right는 -1
    } else {
      //조건이 2명이하 이니까 nums[left], 즉 여기선 nums[0] 값으로만 원하는 값을 찾을 수 있음
      answer++; // 한개 counting!
      left++;  
    }
  }
  return answer;
}
console.log(solution([90, 50, 70, 70, 100, 50], 140));
function solution(n,m){
  let answer;
  let temp=Array.from({Array(n)});
  let ch=Array.from({length:n},()=>0);

  function DFS(l,)
  return answer;
}
console.log(solution(3,2));



// 문자열
function solution(s){
  let answer=0;
  let temp=[];
 
  for(let i=0;i<s.length-2;i++){
    temp.push(s.substring(i,i+3));
  }
  for(let i=0;i<temp.length;i++){
    let sH=new Map();
    for(let x of temp[i]){
      sH.set(x,(sH.get(x)||0)+1);
    }
    if(sH.size===3) answer++;
  }
  console.log(temp);
  return answer;
}
console.log(solution("xyzzaz"));



function solution(m,nums){
  let answer;
  let left=0,right=Math.max(...nums);

  function count(len){
    let sum=0;
    for(let x of nums){
      if(x>len){
        sum+=x-len;
      }
    }
    return sum;
  }

  while(left<=right){
    let mid=parseInt((left+right)/2);
    if(count(mid)>=m){
      answer=mid;
      left=mid+1;
    }
    else right=mid-1;

  }
  return answer;
}
console.log(solution(7,[20, 15, 10, 17]));
console.log(solution(20,[4,42,40,26,46]));