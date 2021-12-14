// 주어진 수열에서 두개의 수를 더해 target number가 되는 것을 찾기 -> 그 두 수의 인덱스를 배열로 출력하기

function solution(nums, target) {
  let answer = [];
  let nH = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nH.has(target - nums[i])) answer = [nH.get(target - nums[i]), i];
    nH.set(nums[i], i);
  }
  return answer;
}
console.log(solution([2, 7, 11, 15], 9));
