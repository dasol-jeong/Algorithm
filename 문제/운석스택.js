function solution(nums) {
  let stack = [];

  for (let i = 0; i < nums.length; i++) {
    let top = stack.length - 1;
    let curr = nums[i];

    if (!stack.length || curr > 0 || (curr < 0 && stack[top] < 0))
      stack.push(curr);
    else {
      while (stack.length && top > 0 && Math.abs(stack[top]) < Math.abs(curr)) {
        stack.pop();
        top = stack.length - 1;
      }
      if (stack[top] + curr === 0) stack.pop();
      else if (!stack.length || stack[top] < 0) stack.push(curr);
    }
  }

  return stack;
}
console.log(solution([10, 2, -5]));
console.log(solution([8, -8]));
console.log(solution([5, 10, -5]));
console.log(solution([-2, -1, 1, 2]));

function solution(asteroids) {
  let stack = [];

  for (const x of asteroids) {
    let top = stack[stack.length - 1];
    if (!stack.length || x > 0 || (x < 0 && top < 0)) stack.push(x);
    else {
      while (stack.length && top > 0 && Math.abs(top) < Math.abs(x)) {
        stack.pop();
        top = stack[stack.length - 1];
      }
      if (x + top === 0) stack.pop();
      else if (!stack.length || top < 0) stack.push(x);
    }
  }
  return stack;
}
