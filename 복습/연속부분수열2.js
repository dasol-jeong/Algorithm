function solution(n, m, nums) {
  let answer = 0;
  let left = 0,
    sum = 0;
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    console.log(sum);
    while (sum > m) {
      sum -= nums[left++];
    }
    if (sum === m) answer++;
  }
  return answer;
}
console.log(solution(6, 3, [1, 2, 3, -3, 1, 2]));
console.log(solution(3, 0, [-1, 0, 1]));
console.log(solution(4, 0, [-1, -1, -1, 1]));
