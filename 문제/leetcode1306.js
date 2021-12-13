// BFS-완전탐색
// 배열에서 주어진 start 인덱스에서 0에 도달하는 방법이 하나라도 있으면 true 없으면 false?

// 방문한 배열 false로 초기화
// queue에 시작 위치 삽입
// queue에 원소 존재할 동안 bfs반복

function solution(arr, start) {
  const visited = [];
  arr.map(() => {
    visited.push(false);
  });
  const q = [start];
  visited[start] = true;

  while (q.length) {
    const idx = q.pop();
    const val = arr[idx];
    if (val === 0) return true;
    if (idx - val >= 0 && !visited[idx - val]) {
      q.push(idx - val);
      visited[idx - val] = true;
    }
    if (idx + val < arr.length && !visited[idx + val]) {
      q.push(idx + val);
      visited[idx + val] = true;
    }
  }
  return false;
}
console.log(solution([4, 2, 3, 0, 3, 1, 2], 5));
