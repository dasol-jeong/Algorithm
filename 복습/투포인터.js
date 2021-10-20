// 최대매출

// function solution(nums, k) {
//   let answer = 0;
//   let n = nums.length;
//   let dy = Array(n).fill(1);
//   for (let i = 0; i < nums.length; i++) {
//     let right = 1;
//     if (nums[i] < nums[i + right]) {
//       dy[i + right] = dy[i] + dy[i + right];
//       if(dy[i]===k)
//     }

//   }
//   console.log(dy);
//   // for(let i=0;i<nums.length;i++){
//   //   answer=Math.max(answer,dy[i]);
//   // }

//   return answer;
// }
function solution(nums, k) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  answer = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // k연속되는 최대 매출액을 찾기위해. 현재값보다 더 높은 값 찾기위해 배열끝까지 반복
    answer = Math.max(answer, sum);
  }
  return answer;
}
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));

// 매출액의 종류
function solution(nums, k) {
  let answer;
  for (let i = 0; i < k; i++) {
    let nH = new Set();
    for (let j = i; j < i + k; j++) {
      nH.add(nums[j]);
    }
    answer = nH.size;
  }
  return answer;
}
console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
