// 2021-10-12
// Stack, Queue, Deque Data structure

//Queue
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    //데이터 넣기
    this._arr.push(item);
  }
  dequeue() {
    //데이터 추출
    return this._arr.shift();
  }
}
//shift는 값을 return 함

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);

//Stack
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    //데이터 넣기
    this._arr.push(item);
  }
  pop() {
    //데이터 추출
    return this._arr.pop();
  }
  peek() {
    //맨 나중에 넣은 데이터 확인
    return this._arr[this._arr.length - 1];
  }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

//Deque
class Deque {
  constructor() {
    this.datas = new Array();
  }
  push(data) {
    this.datas.push(data);
  }
  pop() {
    return this.datas.pop();
  }
  shift() {
    return this.datas.shift();
  }
  unshift(data) {
    this.datas.unshift(data);
  }
}
const deque = new Deque();

deque.push(1);
deque.push(2);

// 문제1 - 올바른 괄호
function solution1(s) {
  let answer = "YES";
  let stack = []; // 배열생성
  for (let x of s) {
    //s문자열의 요소를 하나씩 x에 넣기
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) answer = "NO"; //처음시작이 '(' 아니라서 push를 못함. stack.length===0일때 answer=NO로 값 변경
      stack.pop(); // ')' 차례 일때 stack에 push 된 상단의 '('를 빼줌
    }
  }
  if (stack.length > 0) answer = "NO"; //stack의 길이가 0보다 크면 괄호의 쌍이 맞지 않음
  return answer;
}
let str = "(()(()))(()";
console.log(solution1(str));

// 문제2 - 괄호문자제거
function solution2(s) {
  let answer;
  let stack = []; //배열생성
  for (let x of s) {
    if (x === ")") {
      // x가 ')'이면
      while (stack.pop() !== "("); //stack에서 추출한 문자가 '('일때까지 반복문 수행
    } else stack.push(x); // x가 ')'가 아니고 다른 문자면 stack에 넣어준다.
  }
  answer = stack.join(""); //제거하고 남은 문자들은 다시 하나의 문자열로 합쳐준다.
  return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution2(str));

// 문제3 - 후위식 연산(postfix)
function solution3(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let right = stack.pop();
      let left = stack.pop();
      if (x === "+") stack.push(left + right);
      else if (x === "-") stack.push(left - right);
      else if (x === "*") stack.push(left * right);
      else if (x === "/") stack.push(left / right);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution3(str));

// 문제4 - 연속된 문자 지우기
// function solution4(s){
//   let answer;
//   let stack=[];
//   for(let x of s){
//     if(x==='')
//   }
// }

// 문제5 - 공주 구하기
// function solution5(nums){
//   let answer;
//   let queue=[];
//   for(let i=1;i<nums.length+1;i++){
//     queue[i]=nums[]
//   }
// }

// 문제7 - 영화관람
function solution6(nums) {
  let n = nums.length;
  let answer = Array(n).fill(0);
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      answer[stack[stack.length - 1]] = i + 1;
      stack.pop();
    }
    stack.push(i);
  }
  return answer;
}

console.log(solution7([50, 57, 52, 53, 51]));
console.log(solution7([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));

// 문제6 - 교육과정 설계
function solution6(a, b) {
  let answer = "YES";
  let queue = [];
  for (let x of a) {
    queue.push(x);
  }
  for (let i = 0; i < b.length; i++) {
    if (queue.includes(b[i])) {
    }
  }
  console.log(queue);
}
console.log(solution6("CBA", "CBDAGE"));

// 문제8 - 좋은단어
function solution8(words, m) {
  let answer;
  let queue = Array(words).fill();
  for (let i = 0; i < words.length; i++) {
    let len = words[i].length;
    while (queue[len].length && i - queue[len][0] > m) {
      queue[len].shift();
    }
    answer += queue[len].length;
    queue[len].push(i);
  }
  return answer;
}
console.log(solution8(["back", "seen", "big", "good", "size"], 2));
console.log(solution8(["back", "seen", "good", "size"], 2));

/*
1-9까지..다 있느지........ 4중 for....
*/
