/*
다익스트라 알고리즘
한 정점에서 다른 모든 정점으로 가는 최단거리 구할때 사용
간선 가중치의 값엔 음수 없어

*/

// 플로이드 와샬
// 문제: 노드 300개 이하이면 써도돼
// 노드 300개 넘어가면 다익스트라 사용해
// 경로가 없으면 초기화 상태인 무한대인 상태
모든정점으로 가는 최소비용을 구해줌

function solution(n, edges) {
  let answer = 0;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(1000));
  for (let i = 1; i <= n; i++) dy[i][i] = 0;
  for (let [a, b, c] of edges) {
    dy[a][b] = c;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dy[i][j] > dy[i][k] + dy[k][j]) {
          dy[i][j] = dy[i][k];
        }
      }
    }
  }
}

// 회장뽑기
function solution(n, edges) {
  let answer = [];
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(100));
  let dist = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) dy[i][i] = 0;
  for (let [a, b, c] of edges) {
    dy[a][b] = 1;
    dy[b][a] = 1;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        dy[i][j] = Math.min(dy[i][j], dy[i][k] + dy[k][j]);
      }
    }
  }
  let score = 100;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      {
        dist[i] = Math.max(dist[i], dy[i][j]);
      }
      score = Math.min(score, dist[i]);
    }
    answer.push(score);
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
      if (dist[i] === score) cnt++;
    }
    answer.push(cnt);
    return answer;
  }
}
console.log(solution(5, [[1, 2], [2, 3], [3, 4], [4, 5], [2, 4], [5, 3]]));


//키순서
function solution(n, edges) {
  let answer = 0;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(1e9));
  let cnt = Array(n + 1).fill(0);
  for (let [a, b] of edges) {
    dy[a][b]=1;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dy[i][j] > dy[i][k] + dy[k][j]) {
          dy[i][j] = dy[i][k]+dy[k][j];
        }
      }
    }
  }
  for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
      if(dy[i][j]!==1e9)
      cnt[i]++;
      cnt[j]++;
    }
  }
  for(let i=1;i<=n;i++){
    if(cnt[i]===n-1) answer++;
  }
  return answer;
}
console.log(solution(6, [[1, 5], [3, 4], [5, 4], [4, 2], [4, 6], [5, 2]]));