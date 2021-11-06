function solution(num) {
  let answer = [];
  function rec(n) {
    if (n === 0) {
      return answer;
    } else {
      answer.push(n % 2);
      rec(parseInt(n / 2));
    }
  }
  rec(num);
  return (answer = answer.reverse().join(""));
}
console.log(solution(11));
