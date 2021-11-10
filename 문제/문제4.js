var rotate = function(nums, k) {
  const n = nums.length;
  let tmp = Array(n);

  for (let i = 0; i < n; i++) {
    tmp[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = tmp[i];
  }

  return nums;
};
