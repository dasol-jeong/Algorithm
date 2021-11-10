function solution(id_list, report, k) {
  let hash = new Map();
  let n = id_list.length;
  for (let i = 0; i < id_list.length; i++) {
    hash.set(id_list[i], i);
  }
  let ch = Array.from(Array(n), () => Array(n).fill(0));

  for (let x of report) {
    x = x.split(" ");
    let y = hash.get(x[0]);
    let z = hash.get(x[1]);
    ch[y][z] = 1;
  }

  let stop = [];
  for (let i = 0; i < ch.length; i++) {
    let count = 0;
    for (let j = 0; j < ch.length; j++) {
      if (ch[j][i] === 1) {
        count++;
      }
      if (count >= k) {
        stop[i] = 1;
      }
    }
  }
  let answer = [];
  for (let i = 0; i < ch.length; i++) {
    let count = 0;
    for (let j = 0; j < ch.length; j++) {
      if (ch[i][j] === 1 && stop[j] === 1) {
        count++;
      }
    }
    answer.push(count);
  }
  return answer;
}
console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
