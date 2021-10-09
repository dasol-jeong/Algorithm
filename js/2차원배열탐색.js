// 문제1 - 격자판 최대합
function solution1(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; //행 계산
      sum2 += arr[j][i]; //열 계산
      //console.log(sum2);
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19]
];

console.log(solution1(arr));

// 문제2 - 봉우리

function solution2(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0]; //행 접근
  let dy = [0, 1, 0, -1]; //열 접근
  for (let i = 0; i < n; i++) {
    // i,j지점이 기준이되서
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        //4방향을 보는 for문
        let nx = i + dx[k];
        let ny = j + dy[k];
        console.log(nx, ny);
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          //경계선 넣어주는거야
          flag = 0; //봉우리가 아니다
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
];
console.log(solution2(arr));

function solution(money, cost) {
  let answer = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < cost.length; right++) {
    sum += cost[right];
    while (sum > money) {
      sum -= cost[left++];
      console.log(sum);
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50]));

//인덱스로 찾기
// 문제4 - 빙고
function solution4(board, nums) {
  let answer = 0,
    sum = 0,
    num,
    s1,
    s2,
    s3,
    s4;
  let pos = Array.from(Array(2), () => Array(30).fill(0));
  let ch = Array.from(Array(5), () => Array(5).fill(0));
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      num = board[i][j];
      pos[0][num] = i;
      pos[1][num] = j;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    let x = nums[j];
    ch[pos[0][x]][pos[1][x]] = 1;
    s1 = s2 = s3 = s4 = 1; //행열 다 체크해야하니까 1로 놓고
    if (pos[0][x] === pos[1][x]) {
      for (let i = 0; i < 5; i++) {
        if (ch[i][i] === 0) s1 = 0;
        break;
      }
    } else s1 = 0; //대각선이 아니면
    if (pos[0][x] + pos[1][x] === 4) {
      // "/"이 대각선
      for (let i = 0; i < 5; i++) {
        if (ch[i][4 - i] === 0) s2 = 0; //5*5라서
      }
    } else s2 = 0;
    for (let i = 0; i < 5; i++) {
      if (ch[pos[0][x]][i] === 0) s3 = 0; //행
      if (ch[i][pos[1][x]] === 0) s4 = 0; //열
    }
    sum += s1 + s2 + s3 + s4;
    if (sum >= 3) {
      //sum===3은 될떄도 있고 안될때도 있어 동시에 빙고되어버리면...제대로 파악 xx   초딩새끼들...
      answer = j + 1;
      break;
    }
  }
  return answer;
}
console.log(
  solution4(
    [
      [11, 12, 2, 24, 10],
      [16, 1, 13, 3, 25],
      [6, 20, 5, 21, 17],
      [19, 4, 8, 14, 9],
      [22, 15, 7, 23, 18]
    ],
    [
      5,
      10,
      7,
      16,
      2,
      4,
      22,
      8,
      17,
      13,
      3,
      18,
      1,
      6,
      25,
      12,
      19,
      23,
      14,
      21,
      11,
      24,
      9,
      20,
      15
    ]
  )
); //15

//오늘 보려는 3주끝나는 마지막날....

// 문제5 - 오목
function solution5(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 1];
  let dy = [1, 1, 1, 0];
  let pan = Array.from(Array(21), () => Array(21).fill(0));
  for (let i = 1; i <= 19; i++) {
    for (let j = 1; j <= 19; j++) {
      pan[i][j] = board[i - 1][j - 1];
    }
  }
  //console.log(pan);
  for (let i = 1; i <= 19; i++) {
    for (let j = 1; j <= 19; j++) {
      if (pan[i][j] !== 0) {
        for (let k = 0; k < 4; k++) {
          let x = i;
          let y = j;
          let cnt = 1;
          if (pan[i - dx[k]][j - dy[k]] !== pan[i][j]) {
            while (true) {
              x = x + dx[k];
              y = y + dy[k];
              if (pan[x][y] === pan[i][j]) cnt++;
              else break;
            }
          }
          if (cnt === 5) {
            answer = pan[i][j];
            return answer;
          }
        }
      }
    }
  }
  return answer;
}
console.log(
  solution5([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 0, 0, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])
);
