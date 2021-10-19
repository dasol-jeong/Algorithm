// dy[i]: i번째 항이 마지막항인 부분증가수열의 최대 길이
// 앞에를 탐색하면서 i의 앞에항을 찾는것
// 다이나믹 값이 구해질때마다 answer를 갱신

function solution(n) {
  let answer;
  let dy = Array(n + 1).fill(0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}
console.log(solution(7));

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
    return time<=n;
  }
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid) <= n) {
      answer = mid;
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6));