function solution(nums) {
  let answer = 0;
  let flag = 0;
  let n = nums.length;
  let r = parseInt(n / 2);
  let queue = [];
  let w = 0;

  let ch = Array.from(Array(16), () => Array(10).fill(0));
  function DFS(l, s) {
    if (flag) return;
    if (l === n) {
      answer = Math.min(answer, parseInt(s - w));
      flag = 1;
    } else {
      for (let i = 0; i <= n; i++) {
        if (ch[i][i] === 0) {
          ch[i][i] = 1;
          queue.push(nums[i][i]);
          console.log(queue);
          DFS(l + 1, (s += nums[i][i]));
          DFS(l + 1, (w += nums[i][i]));
          ch[i][i] = 0;
          queue.pop();
        }
      }
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(
  solution([[87, 84], [66, 78], [94, 94], [93, 87], [72, 92], [78, 63]])
);
