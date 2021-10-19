function solution(nums, h) {
  let start = 1;
  let end = 10e9 + 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let result = 0;
    for (const p of nums) {
      result += Math.ceil(p / mid);
    }

    if (result <= h) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
console.log(solution([29, 12, 24, 5, 19], 6));
