// 2021-10-13
// 그리디 알고리즘 : 현재 상태에서 가장 좋은 것을 선택

// up heap, down heap
// insert - up heap
// root

// 문제1 - 동전교환 (주어진 수열에서 최소의 개수로 m만들기)
/* 배수관계일때 그리디 사용하고.... 아닌것은 랩셋..?*/
function solution1(nums, m) {
  let answer = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    //배열이 오름차순으로 주어졌으니, 배열 맨 뒤부터 탐색. 이 문제에서는 가장 큰 수부터 탐색하는게 좋음
    answer += parseInt(m / nums[i]); // 나는 몫을 정수로 answer에 더해준다.
    m = m % nums[i]; // 나눈 나머지가 남은 금액! 다시 m에 넣어주기
  }
  return answer;
}
console.log(solution1([1, 5, 10], 25));

// 문제2 - 침몰하는 타이타닉
/* 정렬한뒤, left right 해서 제일 가벼운 사람과 제일 무거운 사람 */

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

// 문제3 - 선긋기(잘 알아두기!!!!!!!!!논리 이해하기)
/* check 하면 안돼 */

function solution3(nums) {
  let answer;
  nums.sort((a, b) => a[0] - b[0]); //배열안에 있는 배열들을 오름차순으로 정렬
  //이것이 시작 선인가?
  let s = nums[0][0]; //처음 시작점
  let e = nums[0][1]; //처음 끝점
  for (let i = 1; i < nums.length; i++) {
    //선들이 겹칠때
    if (nums[i][0] <= e && nums[i][1] > e) {
      e = nums[i][1]; //겹치면 e를 더 큰 값으로
    } else if (nums[i][0] > e) {
      //선들이 겹치지 않으면
      answer += e - s; //앞에 있는 선을 answer값에 합쳐주고
      s = nums[i][0]; // 선의 시작점과 끝점을 바꿔준다
      e = nums[i][1];
    }
  }
  answer += e - s;
  return answer;
}
console.log(solution3([[1, 3], [2, 5], [7, 10]]));
console.log(solution3([[5, 6], [1, 3], [7, 8], [9, 10]]));

// 문제4 - 회의실 배정
function solution4(nums) {}

class maxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(1e9);
  }

  insert(val) {
    this.heap.push(val);
    this.upHeap(this.heap.length - 1);
  }
  upHeap(pos) {
    let tmp = this.heap[pos];
    while (tmp > this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downHeap(1, this.heap.length - 1);
    return res;
  }
  downHeap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] < this.heap[child + 1]) child++;
      if (tmp >= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
}
// 문제6 - 최대 수입 스케쥴
function solution6(nums) {
  let answer = 0;
  let maxH = new maxHeap();
  nums.sort((a, b) => b[1] - a[1]); //이거 기억하기!!!!!
  //console.log(nums);
  let maxN = nums[0][1]; //가장 큰 날짜
  //console.log(maxN);
  let i = 0;
  for (let day = maxN; day >= 1; day--) {
    for (; i < nums.length; i++) {
      if (nums[i][1] < day) break;
      maxH.insert(nums[i][0]);
    }
    if (maxH.size() > 0) {
      answer += maxH.get();
    }
  }
  return answer;
}
console.log(solution6([[50, 2], [20, 1], [40, 2], [60, 3], [30, 3], [30, 1]]));
console.log(solution6([[50, 2], [40, 2], [20, 1], [10, 1]]));

// 문제5 - 마지막 남은 수
function solution5(nums) {
  let answer = 0;
  let maxH = new maxHeap();
  for (let x of nums) {
    maxH.insert(x);
  }
  while (maxH.size() > 1) {
    let a = maxH.get();
    let b = maxH.get();
    if (a != b) {
      maxH.insert(a - b);
    }
  }
  if (maxH.size() === 0) answer = 0;
  else answer = maxH.get();
  return answer;
}
console.log(solution5([5, 2, 4, 3, 1]));
console.log(solution5([7, 6, 3, 2, 4, 5, 1]));
// maxH.insert(7);
// maxH.insert(8);
// maxH.insert(5);
// maxH.insert(4);
// maxH.insert(9);
// console.log(maxH);
