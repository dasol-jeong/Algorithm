function solution(board) {
  let answer = 0;
  let n = board.length;
  let m = board[0].length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let dist = Array.from(Array(n), () => Array(m).fill(0));
  let queue = [];
  function BFS() {
    while (queue.length) {
      let curr = queue.shift();
      for (let j = 0; j < 4; j++) {
        //4방향을 본다
        let nx = curr[0] + dx[j]; //
        let ny = curr[1] + dy[j];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          dist[nx][ny] = dist[curr[0]][curr[1]] + 1;
          answer = dist[nx][ny];
          queue.push([nx, ny]);
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }
  BFS();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        return -1;
      }
    }
  }
  return answer;
}

console.log(solution([[0, 1, 0], [0, 0, -1], [0, 0, 0]]));
