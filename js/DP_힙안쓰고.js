//DP MINHEAP안쓰고
function solution(n, edges, end) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let dist = Array.from({ length: n + 1 }, () => 1000);
  let ch = Array(n + 1).fill(0);
  for (let [a, b, c] of edges) {
    graph[a].push([b, c]);
  }
  dist[1] = 0;
  for (let i = 1; i <= n; i++) {
    let min = 0;
    for (let j = 1; j <= n; j++) {
      if (ch[j] === 0 && dist[j] < dist[min]) min = j;
    }
    //distenct의 인덱스번호:그래프의 노드번호? dist[min] : 1번에서 min이라는 정점을 통해서 next로 가는 최소비용이 있음
    ch[min] = 1;
    for (let [next, cost] of graph[min]) {
      if (dist[min] + cost < dist[next]) {
        dist[next] = dist[min] + cost;
      }
    }
  }
  answer = dist[end];
  return answer;
}
console.log(
  solution(
    6,
    [
      [1, 2, 12],
      [1, 3, 4],
      [2, 1, 2],
      [2, 3, 5],
      [2, 5, 5],
      [3, 4, 5],
      [4, 2, 2],
      [4, 5, 5],
      [6, 4, 5]
    ],
    5
  )
);
