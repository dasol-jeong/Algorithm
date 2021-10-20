/* 
  다이나믹
  직관적으로 답이 나올 수 있는 단위까지 쪼개가는것
  그 답은 다음회에 사용하고..나온거를 다음거에 사용하고..
  dy[i] : i번째까지 도달하는 방법의 수
  다이나믹은 꼭 정의를 내려야함
*/

function solution(n) {
  let answer;
  let dy = Array(n + 1).fill(0); // 배열은  index[0]부터 시작하는데 index[1]부터 사용하기위해, n+1 길이의 배열 생성
  // dy[i]는 i번째까지 도달하는 방법의 수
  // 직관적으로 답이 나올 수 있는 단위에 값을 정의
  dy[1] = 1; // 1번 계단으로 가는 방법 : 0번 계단에서 계단 한개 오르는 방법 하나
  dy[2] = 2; // 2번 계단으로 가는 방법 : 0번 계단에서 한번에 계단 두개 오르거나, 1번 계단에서 계단 한개 오르는 방법 두개
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // i번째 계단까지 도달하는 방법은 index[i-1]에서 계단 한개를 오르는거 + index[i-2]에서 한번에 계단 두개 오르는거
  }
  answer = dy[n];
  return answer;
}
console.log(solution(7));

function solution(n) {
  let answer;
  let dy = Array(n + 2).fill(0); // 돌다리는 index[1] ~ index[n]까지임. index[0]은 출발지점, index[n+1]은 도착지점
  dy[1] = 1; //출발지점에서 돌다리1로 가는 방법
  dy[2] = 2; //출발지점에서 돌다리2로 가는 방법
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]; // i번째까지 도달하는 방법은 index[i-1]에서 돌다리 한 칸 건너는거 + index[i-2]에서 한번에 돌다리 두칸 건너는거
  }
  answer = dy[n + 1];
  return answer;
}
console.log(solution(7));

// dy[i]: i번째 항이 마지막항인 부분증가수열의 최대 길이
// 앞에를 탐색하면서 i의 앞에항을 찾는것
// 다이나믹 값이 구해질때마다 answer를 갱신

function solution(nums) {
  let answer = 0;
  let n = nums.length;
  let dy = Array(n).fill(0);
  dy[0] = 1;
  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dy[j] > max) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));

function solution(times, r) {
  let answer = 0;
  let m = times.length;
  let dy = Array(m).fill(0);
  times.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < m; i++) {
    dy[i] = times[i][2];
    for (let j = i - 1; j >= 0; j--) {
      if (times[j][1] + r <= times[i][0] && dy[j] + times[i][2] > dy[i]) {
        dy[i] = dy[j] + times[i][2];
      }
    }
    answer = Math.max(answer, dy[i]);
  }
  return answer;
}
console.log(
  solution([[3, 5, 20], [4, 7, 16], [1, 2, 5], [11, 13, 7], [9, 10, 6]], 2)
);

//앞뒤로 하는 최대부분 증가수열...

function solution(nums, n) {
  let answer;
  function count(len) {
    let time;
    for (let x of nums) {
      time += Math.ceil(x / len);
    }
    return time;
  }
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid) <= n) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6));

function solution(nums, n) {
  let answer;
  function count(len) {
    let time = 0;
    for (let x of nums) {
      time += Math.ceil(x / len);
    }
    return time <= n;
  }
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid) <= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6));

function solution(n) {
  let answer;
  let dy = Array(n + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  return (answer = dy[n]);
}
console.log(solution(7));

// 가방문제-냅색 알고리즘
// dy[i] : 가방에 ikg을 담았을때 최대가치 --> dy[n]에 최대가치가 있음
// 점화식 앞이나 뒤?
function solution(nums, m) {
  let answer;
  let dy = Array(n + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums[i][0]; j <= m; j++) {}
  }
  return answer;
}
console.log(solution([[5, 12], [3, 8], [6, 14], [4, 7]], 11));

// 동전교환
// dy[i] : i원을 거슬러주기 위한 최소 동전 수
function solution(nums, m) {
  let answer;
  let dy = Array(m + 1).fill(1e9);
  dy[0] = 0;
  // 1을 할때는....max?
  for (let i = 1; i < nums.length; i++) {
    for (let j = nums[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j] - dy[i]);
    }
  }
  return (answer = dy[m]);
}
console.log([1, 2, 5], 15);

// 최대점수
// dy[i] : i분이 주어졌을때, 얻을 수 있는 최대 점수
// 중복적용이 되어서는 안돼 그래서 뒤쪽부터
// 뒤쪽부터 적용된다??
// 문제에서 한개만 써야한다고 할때는 dy배열 뒤쪽부터 채워넣기
function solution(nums, m) {
  let answer;
  let dy = Array(m + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let ps = nums[i][0];
    let pt = nums[i][1];
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  return (answer = dy[m]);
}
console.log(solution([[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]], 20));

// 최대공통부분문자열
// dy[i][j] : a문자열 i번째 까지와 b문자열의 j번째까지의 최대공통부분문자열 길이
function solution(s1, s2) {
  let answer = 0;
  let len1 = s1.length;
  let len2 = s2.length;
  let dy = Array.from(Array(1001), () => Array(1001).fill(0));
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dy[i][j] = dy[i - 1][j - 1] + 1;
      } else {
        dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
      }
    }
  }
  answer = dy[len1][len2];
}

// 최소편집
// dy[i][j] : A문자열의 i번째까지를 B문자열 j번째 까지를 바꾸는데 필요한 최소 편집 횟수
// 대체 : 대각선,위쪽,왼쪽 값중 작은거에+1
function solution(s1, s2) {
  let answer = 0;
  let len1 = s1.length;
  let len2 = s2.length;
  let dy = Array.from(Array(1001), () => Array(1001).fill(0));
  for (let i = 1; i <= len1; i++) dy[i][0] = i;
  for (let i = 1; i <= len2; i++) dy[0][i] = i;
}

// 동전교환1
// d[i] : i원을 만드는 경우의 수
function solution(coin, m) {
  let answer;
  let dy = Array(coin.length + 1).fill(0);
  dy[0] = 1;
  for (let x of coin) {
    for (let i = 0; i <= m; i++) {
      dy[i] += dy[i - x];
      console.log(dy[i]);
    }
  }

  return (answer = dy[m]);
}
console.log(solution([2, 3, 5], 10));
