function solution(grid, clockwise) {
  let answer = [];
  let temp = [];
  let n = grid.length;
  if (clockwise) {
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j <= i * 2; j++) {
        line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
      }
      answer.push(line);
    }
  } else {
    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i * 2; j++) {
          line += grid[n - 1 - parseInt(j / 2)][i * 2 - j];
        }
        answer.push(line);
      }
      grid = answer;
    }
  }
  return (answer = grid.slice(n));
}
// console.log(solution(["1", "234", "56789"], true)); //["5", "762", "98431"]
// console.log(solution(["1", "234", "56789"], false)); //['9', '487', '13265']
console.log(solution(["A", "MAN", "DRINK", "WATER11"], false)); //['1', 'K1R', 'NNIET', 'AAMRDAW']
