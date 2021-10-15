function solution(num) {
  let answer = [];
  let numbers = [];
  let t;
  while (num > 0) {
    t = num % 10;
    numbers.push(t);
    num = parseInt(num / 10);
  }
  numbers.sort((a, b) => a - b);
  console.log(numbers);

  return answer;
}
console.log(solution(123));
console.log(solution(321));
console.log(solution(20573));
