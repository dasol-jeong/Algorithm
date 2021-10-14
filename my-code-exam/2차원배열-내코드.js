function sol1(arr) {
  let answer = "YES";

  for (let i = 0; i < arr.length; i++) {
    let nH = new Map();
    let nH2 = new Map();
    for (let j = 0; j < arr.length; j++) {
      nH.set(arr[i][j], (nH.get(arr[i][j]) || 0) + 1);
      nH2.set(arr[j][i], (nH2.get(arr[j][i]) || 0) + 1);
    }
    if (nH.size !== 9) answer = "NO";
    if (nH.size !== 9) answer = "NO";
    console.log(nH);
    console.log(nH2);
  }
  return answer;
}
console.log(
  sol1([
    [1, 4, 3, 6, 2, 8, 5, 7, 9],
    [5, 7, 2, 1, 3, 9, 4, 6, 8],
    [9, 8, 6, 7, 5, 4, 2, 3, 1],
    [3, 9, 1, 5, 4, 2, 7, 8, 6],
    [4, 6, 8, 9, 1, 7, 3, 5, 2],
    [7, 2, 5, 8, 6, 3, 9, 1, 4],
    [2, 3, 7, 4, 8, 1, 6, 9, 5],
    [6, 1, 9, 2, 7, 5, 8, 4, 3],
    [8, 5, 4, 3, 9, 6, 1, 2, 7]
  ])
);
