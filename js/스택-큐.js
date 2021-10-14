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
      // !이니, x가 숫자이면 숫자로 stack에 넣기(문자열을 파라미터로 받아온거임)
      // x가 숫자가 아니면, stack 상단부터 꺼낸다. 처음꺼낸건 right에 담고, 그 다음 꺼낸건 left에 담기
      let right = stack.pop();
      let left = stack.pop();
      if (x === "+") stack.push(left + right);
      else if (x === "-")
        // 만약 x가 + 면 left와 right 더해서 stack에 넣기
        stack.push(left - right);
      else if (x === "*")
        //빼기
        stack.push(left * right);
      else if (x === "/")
        //곱하기
        stack.push(left / right); //나누기
    }
  }
  answer = stack[0]; //stack에 최종적으로 남은것이 연산의 답
  return answer;
}

let str = "352+*9-";
console.log(solution3(str));

// 문제4 - 연속된 문자 지우기
function solution4(s) {
  let answer;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    // stack.length가 0보다 크다는건 stack이 비어있지 않다는것이고, stack[stack.length-1]===s[i]는 stack 인덱스는 0부터시작. 즉 stack상단의 요소가 s[i]가 같다는 의미다
    if (stack.length > 0 && stack[stack.length - 1] === s[i])
      stack.pop(); // 조건이 맞으면 stack 상단의 요소를 뺴줘
    else stack.push(s[i]); //if문이 false이면 여기를 실행. s[i]를 stack에 넣어줘
  }
  return (answer = stack.join("")); // for문을 다 끝낸뒤, stack에 남은 요소들을 join으로 합쳐줘 하나의 문자열로 반환한다
}
let str = "acbbca";
console.log(solution4(str));

// 문제5 - 공주 구하기
function solution5(p, k) {
  let answer;
  let queue = [];
  for (let i = 0; i < p; i++) queue.push(i + 1); // 매개변수로 받은 p를 오름차순으로 queue에 담기
  while (queue.length !== 1) {
    // queue의 길이가 1일때까지
    for (let i = 1; i < k; i++) {
      // k를 외치는 사람을 queue에서 빼줘야하니까 1부터 k전까지만 counting 하게하기
      queue.push(queue.shift()); // 1부터 k전까지 counting한 것들을 queue에서 뺐다가 다시 queue에 넣어주기
    }
    queue.shift(); // k를 외치는 애 queue에서 빼주기
  }
  return (answer = queue[0]); //queue의 길이가 1일때까지 수행하니 queue의 길이는 1임. queue에 마지막 남은 요소가 답
}
console.log(solution5(8, 3));
console.log(solution5(10, 3));

// 문제6 - 교육과정 설계
function solution6(a, b) {
  let answer = "YES";
  let queue = a.split(""); // 문자열 배열로 변경하여 queue에 담기, 배열로 변경하는 이유는 문자열에서는 shift사용 불가능
  for (let x of b) {
    //문자열 b의 문자 하나하나를 x에 넣기
    if (queue.includes(x)) {
      //만약 queue에 x가 있다면
      if (x !== queue.shift()) return "NO"; //queue의 0인덱스에서 꺼낸 요소와 x가 다르면 NO! 순서가 맞지않음
    }
  }
  if (queue.length > 0) return "NO"; // 만약 queue의 길이가 1이상이면 옳지 설계가 옳지 않음
  return answer;
}
console.log(solution6("CBA", "CBDAGE"));
console.log(solution6("CBA", "CBDBAGE"));

// 문제7 - 영화관람
function solution7(nums) {
  let n = nums.length;
  let answer = Array(n).fill(0); //nums배열의 크기와 같은 배열을 새로 생성하여 값들을 0으로 다 초기화 해준다.
  let stack = [];
  for (let i = n - 1; i >= 0; i--) {
    // 수열의 뒤에서부터 확인 내림차순 유지 기억!
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      //stack이 비어있지 않고, stack 상단에 있는 것이 nums[i]보다 작을때! while문 수행
      answer[stack[stack.length - 1]] = i + 1; //stack[stack.length-1]이란 스택 상단을 의미, 즉 answer[스택상단에 있는 값]=i+1;
      stack.pop();
    }
    stack.push(i); //nums배열의 인덱스값을 stack에 넣기
  }
  return answer;
}

console.log(solution7([50, 57, 52, 53, 51]));
console.log(solution7([50, 46, 55, 76, 65, 50, 55, 53, 55, 50]));

// 문제8 - 좋은단어(좋은 단어사이의 조건 두 단어의 길이 같아야하고 둘의 선호도 순위 차이가 m을 넘지 말아야해)
function solution8(words, m) {
  let answer = 0;
  let queue = Array(21);
  for (let i = 1; i < 21; i++) {
    queue[i] = Array(); //각 배열을 2차원 배열로 만들어줌
  }
  for (let i = 0; i < words.length; i++) {
    const len = words[i].length;
    while (queue[len].length && i - queue[len][0] > m) {
      //queue가 비어있음 while문 실행 안함
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
