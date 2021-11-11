function solution(mat, r, c) {
  let answer = new Array(r).fill(0).map(() => new Array(c).fill(0));
  let row = 0,
    col = 0;

  if (mat.length === 0 || r * c != mat.length * mat[0].length) {
    return mat;
  }

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      answer[row][col] = mat[i][j];
      col++;
      if (col === c) {
        row++;
        col = 0;
      }
    }
  }
  return answer;
}
console.log(solution([[1, 2], [3, 4]], 1, 4));
console.log(solution([[1, 2], [3, 4]], 2, 4));
