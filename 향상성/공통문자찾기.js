function solution(str) {
  let answer, i;

  for (i = 0; i < str.length; i++) {
    let sH = new Map();
    for (j = 0; j < str[i].length; j++) {
      if (sH.has(str[i][j])) sH.set(str[i][j], (sH.get(str[i][j]) || 0) + 1);
      else sH.set(str[i][j], 1);
    }
    console.log(sH);
  }
  return answer;
}
console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));
console.log(solution(["longlong", "longtong", "longbig"]));
