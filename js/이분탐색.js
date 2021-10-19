// 선택정렬
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return answer;
}
console.log(solution([13, 5, 11, 7, 23, 15]));

//얕은복사 : 원본도 변경됨
//깊은복사 : 원본은 변경되지 않음

// 이분검색 전제조건 : 배열이 정렬되어있어야한다.
// 한번의 비교로 탐색할 것이 절반으로 줄어든다. 그래서 logn
// 이분검색 시간 복잡도 : O(logn) 
// 순차탐색 시간 복잡도 : O(n)
// 문제1 - 이분검색
function solution(nums, m) {
  let answer = nums; //얕은복사 한것
  nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1;
  //console.log(nums);

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] === m) return mid + 1;
    else if (nums[mid] > m) right = mid - 1;
    else left = mid + 1;
  }
  return answer;
}
console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
console.log(solution([1, 100, 1000, 5, 3, 9, 20], 20));

// 문제2 - 자연수 찾기(이분검색)
// 정렬된 배열에서 k의 위치 찾기
function solution(nums, k) {
  let answer = 0;
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (nums[mid] - mid - 1 < k) left = mid + 1;
    else right = mid - 1;
  }
  answer = left + k;
  return answer;
}
console.log(solution([2, 5, 7, 9, 12], 6));


// 결정알고리즘
// 문제3 - 랜선자르기(결정알고리즘) 아주중요해요오오오오오오오오오오오오오오
// 답이 유효한지 안한지 확인하는 함수를 생성해야해
// 답이 1부터 만사이까지 있는게 확실하다 싶으면 ...5000...2500..좁혀나가면서 나중에 발견되는 답이 가장 좋은 답이야!!!!!
// 어떤 값을 답으로 정해놓고, 이 값이 정답으로 가능하냐 안가능하냐 판단?
// 최대로 길게 만들 수 있게해야해
// 이런 문제에서 min값으로 right를 잡으면 반례 생길 수 있음. 가장 max값으로 right를 잡아주기



function solution(nums,k){
  let answer;
  let left=1, right=Math.max(...nums);
  while(left<=right){
    let mid=parseInt((left+right)/2);
    if((count(mid))>=k){

    }
  }
  console.log(right);
  return answer;
}
console.log(solution([802, 743, 457, 539], 11));


function solution(nums,m){
  let answer;
  let left=1;
  let sum=0;
  for(let i=0;i<nums.length;i++){
    sum+=nums[i];
  }
  let right=sum;
  function count(m){
    let cnt=0;


  }
  while(left<=right){
    let mid=parseInt((left+right)/2);
    if((count(mid))<=m) return 1; //인출횟수가 작거나 같으면!-> 답으로 정하기 그리고 최소값을 구하는 거니까 right변경 mid-1;
  }

}

// 문제5 - 뮤직비디오
function solution(nums, m) {
  let answer;
  let sum = 0;
  let left=Math.max(...nums), right=nums.reduce((a,b)=>a+b,0);//nums배열에 있는 원소들 다 더하기
  for (let i = 0; i < nums.length; i++) {
    right += nums[i];
  }
  function count(mid){
    let cnt=1;
    let sum=0;
    for(let x of nums){
      if(sum+x>mid)
    }

  }
  while(left<=right){
    let mid=parseInt((left+right)/2);
    if(count(nums,mid)<m){
      answer=mid;
      right=mid-1;
    }
    left=mid+1;
  } 
  return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(solution([6, 5, 8, 5, 6, 8, 7, 6, 6, 7], 3));


//left =1,

// 문제6 - 마구간 정하기(가장 가까운 두 말을 최대한 멀리 두기)
// 매개변수 정렬부터 먼저해야해!
function solution(arr,c){
  arr.sort((a,b)=>a-b);
  let left=1;//간격의 최소는 1... 배열의 첫번째 좌표로해버리면 앞에있는걸 못찾을 수 있어
  let right=arr[arr.length-1];

  let answer;
  function count(arr,dist){
    let cnt=1,ep=arr[0];
    for(let i=1;i<arr.length;i++){
      if(arr[i]-ep>=dist){
        cnt++;
        ep=arr[i];
      }
    }
    return cnt;
  }
  while(left<=right){
      let mid=parseInt(left+right)/2; // mid는 가장 가까운 두 말의 최소 거리
      if(count(arr,mid)>=c) {
        answer=mid;
        left=mid+1;
      }
  }

}
console.log(solution([1, 2, 8, 4, 9], 3));


// 데이터센터 (기다리는 분을 mid로)
function solution(arr){
  let answer=0;
  let n=arr.length;
  let left=1,right=0,sum=0;
  arr.forEach(e => {
    
  });
  function count(){

  }
  return answer;
}
console.log(solution([[2, 3, 1, 5, 6], [3, 0, 7, 4, 3], [8, 5, 7, 5, 6], [9, 6, 1, 5, 5], [5, 5, 8, 5, 1]]));


// 제품 이동(제품의 최대 무게)
// S에서 E로 가는데 간선의 최소값?
// mid 트럭에 싣은 무게 (다리의 무게제한이 트럭의 무게보단 커야돼)
// mid를 answer로 놓고 더 큰 mid값 찾으러 가야해
// c는 가중치
function solution(n,edges,s,e){
  let answer=0,left=1,right=0;
  let graph=Array.from(Array(n+1),()=>Array());

  for(let [a,b,c] of edges){ //인접그래프
    graph[a].push([b,c]);
    graph[b].push([a,c]);
    right=Math.max(right,c);
  }
  function BFS(w){
    let ch=Array(n+1).fill(0);
    let queue=[];
    ch[s]=1;
    queue.push(s);
    while(queue.length){
      let a=queue.shift();
      for(let [b,c] of graph[a]){
        if(c>=w && ch[b]===0){
          ch[b]=1;
          queue.push(b);
        }
      }
    }
    return ch[e];
  }

  while(left<=right){
    let mid=parseInt((left+right)/2);
    if(BFS(mid)){
      answer=mid;
      left=mid+1;
    }
    else{
      right=mid-1;
    }
  }
  return answer;
}
console.log(solution(5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5));


/* 
  다이나믹
  직관적으로 답이 나올 수 있는 단위까지 쪼개가는것
  그 답은 다음회에 사용하고..나온거를 다음거에 사용하고..
  dy[i] : i번째까지 도달하는 방법의 수
  다이나믹은 꼭 정의를 내려야함
*/

function solution(n){
  let answer;
  let dy=Array(n+1).fill(0);
  dy[1]=1;
  dy[2]=2;
  for(let i=3;i<=n;i++){
    dy[i]=dy[i-2]+dy[i-1];
  }
  answer=dy[n];
  return answer;
}
console.log(solution(7));

function solution(n){
  let answer;
  let dy=Array(n+1).fill(0);
  dy[1]=1;
  dy[2]=2;
  for(let i=3;i<=n;i++){
    dy[i]=dy[i-2]+dy[i-1];
  }
  answer=dy[n];
  return answer;
}
console.log(solution(7));

// 1.문자열해싱
// 2.투포인터
// 3.스택
// 4.BFS (최소횟수)
// 5.플로이드 와(백준에 있는 문제.....) -> 미정
// 배웠던 코드는 참고 가능 구글링은 불가능
