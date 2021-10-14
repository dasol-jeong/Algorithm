function solution(nums) {
  let answer;
  let len = nums.length;
  let i = 0;
  while (i + 1 < len && nums[i] < nums[i + 1]) i++;
  if (i === 0 || i === len - 1) return 0;
  while (i + 1 < len && nums[i] > nums[i - 1]) i--;
  if (i !== len - 1) return 0;
  //가장 긴....? Math.max()

  return answer;
}
console.log(solution([3, 2, 5, 6, 4, 3, 7]));
console.log(solution([3, 3, 3]));
console.log(solution([1, 2, 3, 4, 5]));
