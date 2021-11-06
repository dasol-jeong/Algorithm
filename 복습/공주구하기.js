function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      if (queue.length === 1) break;
      queue.push(queue.shift());
    }
  }
  console.log(queue);
  return answer;
}
console.log(solution(8, 3));
