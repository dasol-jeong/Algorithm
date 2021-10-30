// 회의실 배정
class minHeap {
  constructor() {
    this.heap = []; //heap 생성
    this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
  }
  insert([a, b]) {
    this.heap.push([a, b]);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos]; //insert한 값을 tmp에 저장
    while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
      //방금 들어온 값이 그 부모보다 작으면
      // 부모랑 들어온값이랑 위치 바꿈! 더 작은 수가 위로 올라가게
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2); //pos는 최종적으로 tmp가 들어갈 위치를 찾는것
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let res;
    res = this.heap[1]; // root index는 1이니까
    this.heap[1] = this.heap.pop(); // 맨 끝노드 하나가 heap에서 나와서 root로 감
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp, child; //pos : 현재위치 인덱스, 마지막 노드의 인덱스
    tmp = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      child = pos * 2; //왼쪽 자식
      if (child < len && this.heap[child][1] > this.heap[child + 1][1]) child++;
      if (tmp[1] <= this.heap[child][1]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}

// 최소 회의실
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0].trim());
let meetingTime = [];
for (let i = 1; i < input.length; i++) {
  meetingTime.push(input[i].trim().split(" ").map(Number));
}
function solution(n, meetingTime) {
  let answer = 0;
  let arr = Array(n).fill(0); //회의실의 최대 개수는 회의의 개수이니, 그 수만큼 배열하나 생성하고 0으로 초기화
  meetingTime.sort((a, b) => a[0] - b[0]); //회의 시작시간으로 정렬해준다
  for (let x of meetingTime) {
    for (let i = 0; i < n; i++) {
      if (x[0] >= arr[i]) {
        //회의 시작시간이 배열에 들어있는 값보다 크거나 같으면
        arr[i] = x[1]; //회의 종료시간을 배열에 넣어준다.
        break; //그리고 다음 배열들은 값이 0이니 break로 내부 for문 빠져나와준다.
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) break; //배열의 값이 0이면 for문 종료하고 빠져나와준다.
    answer++; //0이 아니면 회의실 개수를 세준다.
  }
  return answer;
}
console.log(solution(n, meetingTime));

// 랜선자르기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0].trim());
let arr = [];
for (let i = 1; i < input.length; i++) {
  meetingTime.push(input[i].trim().split(" ").map(Number));
}

// 주몽
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0].trim());
let m = Number(input[1].trim());
let tmp = input[2].split(" ").map(Number);
let nums = Array(n);
for (let i = 0; i < n; i++) {
  nums[i] = parseInt(tmp[i]);
}
function solution(n, m, nums) {
  let answer = 0;
  let sum = 0,
    left = 0,
    right = n - 1;
  nums.sort((a, b) => a - b);
  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum === m) {
      answer++;
      left++;
      right--;
    } else if (sum > m) right--;
    else left++;
  }
  return answer;
}
console.log(solution(n, m, nums));
