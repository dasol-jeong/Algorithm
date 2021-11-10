function solution(times, k) {
  let answer = 0;
  let temp = times % k;

  for (let i = 0; i < times.length; i++) {
    times[i] = times[i] - 1;
  }
  for (let i = 0; i < times.length; i++) {
    if (times[i] === 0) continue;
    if (temp === 0) break;
    times[i] = times[i] - 1;
    temp--;
  }
  for (let i = 0; i < times.length; i++) {
    if (times[i] !== 0) return i + 1;
  }
  return answer;
}
console.log(solution([1, 2, 3], 5));
