// function solution(nums) {
//   let answer = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] > 0) break;
//     let left = i + 1,
//       right = nums.length - 1;

//     while (left < right) {
//       if (nums[left] !== nums[right] && nums[left] + nums[right] + nums[i] === 0) {
//         answer.push([nums[i], nums[left], nums[right]]);
//       } else {
//         left++;
//       }
//     }
//   }
//   return answer;
// }
// console.log(solution([-1, 0, 1, 2, -1, -4]));

// 최종 통과 코드
// 만약 if(sum===0 && nums[left]!==nums[right]) 로 해버리면 [0,0,0]인 경우가 통과되지 않음.
function solution(nums) {
  let answer = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    while (nums[i] === nums[i - 1]) i++;
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        left++;
      }
      if (sum > 0) right--;
      if (sum < 0) left++;
    }
  }
  return answer;
}
console.log(solution([-1, 0, 1, 2, -1, -4]));
console.log(solution([]));
console.log(solution([0]));
