// function solution(s, t) {
//   let answer = 0;
//   let left = 0;
//   let sH = new Map();
//   for (let x of t) {
//     sH.set(x, (sH.get(x) || 0) + 1);
//   }
//   for (let right = 0; right < s.length - t.length; right++) {
//     for (let i = 0; i < t.length; i++) {
//       if (sH.has(s[right])) {
//         sH.set();
//       }
//     }
//   }
//   return answer;
// }
// console.log(solution("bacacbcba", "abc"));

// function solution(s, c) {
//   let answer;
//   let n = s.length;
//   let left = 0;
//   let ch = Array(n).fill(1);
//   let d = 0;

//   for (let right = 0; right < n; right++) {
//     if (s[right] === c) {
//       ch[right] = 0;
//       d = right;
//       while (d > 0) {
//         ch[left++] = d--;
//       }
//     }
//   }
//   console.log(ch);
//   return answer;
// }
// console.log(solution("loveleetcode", "e"));
