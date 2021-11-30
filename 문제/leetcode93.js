// function solution(nums) {
//   let answer = [];
//   let start = 0;

//   if (nums.length > 12 || nums.length < 3) return answer;

//   function DFS(l) {
//     if (l === 4) {
//       answer.push();
//     } else {
//       for (let i = 0; i < 4; i++) {}
//     }
//   }
//   DFS(1);

//   return answer;
// }
// console.log(solution("010010"));
function helper(s, r, temp, start) {
  if (start === s.length && temp.length === 4) {
    r.push(temp.slice().join("."));
    return;
  }

  if (temp.length === 4 || start > s.length) {
    return;
  }

  for (let i = 1; i < 4; i++) {
    const sub = s.substring(start, start + i);
    if (sub.length > 1 && sub[0] === "0") {
      continue;
    }
    const int = parseInt(sub);
    if (int < 256 && int >= 0) {
      temp.push(sub);
      helper(s, r, temp, start + i);
      temp.pop();
    }
  }
}

var restoreIpAddresses = function(s) {
  // backtracking
  const r = [];
  helper(s, r, [], 0);
  return r;
};
