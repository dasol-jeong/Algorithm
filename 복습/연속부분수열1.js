function solution(n, m, nums) {
  let answer = 0;
  let left = 0,
    sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    while (sum > m) {
      sum -= nums[left++];
    }
    if (sum === m) answer++;
  }
  return answer;
}
console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
console.log(solution(6, 3, [1, 1, 1, 1, 1, 1]));
console.log(solution(7, 3, [1, 2, 1, 2, 1, 2, 1]));
