function solution(s, c) {
  let answer = [];
  let m = Infinity;
  let x = 0;

  while (x < s.length) {
    answer[x] = Math.abs(m - x);
    if (s[x] === c) {
      m = x;
      answer[x] = 0;
      for (let j = x - 1; j >= 0 && Math.abs(j - x) < answer[j]; j--) {
        answer[j] = Math.abs(j - x);
      }
    }
    x++;
  }
  return answer;
}
console.log(solution("loveleetcode", "e"));
console.log(solution("aaab", "b"));
