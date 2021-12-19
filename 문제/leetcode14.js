// 주어진 문자열들 중에서 접두어 찾기
// 알고리즘 수업때 풀었던 문제!

function solution(str) {
  if (!str.length) return "";
  // 먼저 문자열 배열 중 가장 맨 앞 문자를 기준으로 잡음
  for (let i = 0; i < str[0].length; i++) {
    // 문자열 배열에 있는 문자열들 하나씩 s에 담아 탐색
    for (let s of str) {
      if (s[i] !== str[0][i]) return s.slice(0, i);
    }
  }
  return str[0];
}
console.log(solution(["flower", "flow", "flight"]));
console.log(solution(["dog", "racecar", "car"]));
