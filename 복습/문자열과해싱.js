// 공통문자찾기
function solution(str) {
  let answer = [];
  let s = "";
  let sH = new Map();
  for (let x of str[0]) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  for (let i = 1; i < str.length; i++) {
    let sH1 = new Map();
    for (let x of str[i]) {
      if (sH.has(x)) sH.set(x, sH.get(x) - 1);
    }
  }
  console.log(sH);
  return answer;
}
console.log(solution(["steasue", "sasseysu", "kseseas"]));
