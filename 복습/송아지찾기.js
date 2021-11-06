function solution(s, e) {
  let answer = 0;
  let check = Array.from({ length: 10001 }, () => 0);
  let dist = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  check[s] = 1;
  queue.push(s);
  dist[s] = 0;
  while (queue.length) {
    let x = queue.shift();
    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dist[x] + 1;
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        queue.push(nx);
        dist[nx] = dist[x] + 1;
      }
    }
  }
  return answer;
}
console.log(solution(5, 14));
