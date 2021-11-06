function solution(a, b) {
  let answer = [];
  let n = a.length;
  for (let i = 0; i < n; i++) {
    a[i] = Math.ceil((100 - a[i]) / b[i]);
  }
}
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
