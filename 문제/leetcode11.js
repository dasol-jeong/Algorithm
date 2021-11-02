function solution(height) {
  let answer = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    let x = right - left;
    let y = Math.min(height[left], height[right]);
    console.log(x, y);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    answer = Math.max(answer, x * y);
  }
  return answer;
}
console.log(solution([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(solution([1, 1]));
console.log(solution([1, 2, 1]));
console.log(solution([4, 3, 2, 1, 4]));
