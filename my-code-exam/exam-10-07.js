function sol(nums) {
  let answer = 0;
  let n = nums.length;
  let dist = Array(n).fill(0);
  let d = 1000;
  for (let i = 0; i < n; i++) {
    if (nums[i] < nums[i + 1]) {
      dist[i] = nums[i];
    } else {
      dist[i] = 0;
    }
  }
  console.log(dist);
  d = 1000;
  for (let i = n - 1; i >= 0; i--) {
    if (dist[i] >= dist[i - 1]) break;
  }
  return answer;
}
console.log(sol([3, 2, 5, 6, 4, 3, 7]));
