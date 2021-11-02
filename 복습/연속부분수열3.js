function solution(n, m, nums) {
  let answer = 0;
  let left = 0,
    sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    while (sum > m) {
      sum -= nums[left++];
    }
    answer += right - left + 1;
  }
  return answer;
}
console.log(solution(5, 5, [1, 3, 1, 2, 3]));
console.log(solution(6, 3, [1, 1, 1, 1, 1, 1]));
console.log(solution(9, 5, [1, 1, 2, 2, 1, 2, 1, 3, 2]));
