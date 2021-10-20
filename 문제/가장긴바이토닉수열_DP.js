function solution(nums) {
  let answer = 0;

  let n = nums.length;
  let dy1 = Array(n).fill(1);
  let dy2 = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dy1[i] = Math.max(dy1[i], dy1[j] + 1);
      }
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        dy2[i] = Math.max(dy2[i], dy2[j] + 1);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, dy1[i] + dy2[i]);
  }
  return answer - 1;
}
console.log(solution([1, 5, 2, 1, 4, 3, 4, 5, 2, 1]));

function solution(nums) {
  let answer = 0;
  let n = nums.length;
  let dy1 = Array(n).fill(1); // 자기자신
  let dy2 = Array(n).fill(1);

  // nums배열에서 증가 하는 수열찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dy1[i] = Math.max(dy1[i], dy1[j] + 1);
      }
    }
  }
  // 뒤에서부터 nums배열에서 감소하는 수열찾기
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        dy2[i] = Math.max(dy2[i], dy2[j] + 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, dy1[i] + dy2[i]);
  }
  return answer - 1; // 가운데 값이 중복되니 -1해줌
}
console.log(solution([1, 5, 2, 1, 4, 3, 4, 5, 2, 1]));
