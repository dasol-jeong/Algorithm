function sol(nums, k) {
  let answer = 0,
    cnt = 0,
    left = 0,
    sum = 0;
  let n = nums.length;
  let sH = new Map();
  for (let right = 0; right < n; right++) {
    sum += nums[right];
    if (sum % 3 === 0 || sum === 1) {
      sH.set(sum, 1);
    }
  }

  return sH;
}

console.log(sol([1, 2, 1, 1, 2], 2));

/* 홀수가 두개라는건 합이 짝수 
합이 홀수 일때 배제? */
