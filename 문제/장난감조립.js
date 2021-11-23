function solution(n, nums) {
  let answer = [];
  let graph = Array.from(Array(n + 1), () => Array());
  let indegress = Array(n + 1).fill(0);

  for (let [a, b, c] of nums) {
    graph[(a, b)].push(c);
    indegress[c]++;
  }
  let queue = [];
  for (let i = 1; i < n + 1; i++) {
    if (indegress[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let curr = queue.shift();
    answer.push(curr);

    for (let next of graph[curr]) {
      indegress[next]--;
      if (indegress[next] === 0) queue.push(next);
    }
  }
  return answer;
}
console.log(
  solution(7, [
    [5, 1, 2],
    [5, 2, 2],
    [7, 5, 2],
    [6, 5, 2],
    [6, 3, 3],
    [6, 4, 4],
    [7, 6, 3],
    [7, 4, 5]
  ])
);
