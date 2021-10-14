function solution(num, k) {
  let answer;
  num = num.split("");
  let stack = [];
  let n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && num[i] >= stack[stack.length - 1]) {
      stack[stack.length - 1] = num[i];
      stack.pop();
    }
    stack.push(num[i]);
  }
  if (stack.length === 0) return 0;
  return (answer = stack.join(""));
}
console.log(solution("2322113", 3));
