function solution(arry, n) {
  let answer = [];
  for (let i = 0; i < n.length; i++) {
    for (let [l, j, k] of n[i]) {
      let temp = arry.slice(l, j);
      console.log(temp);
    }
  }

  return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
