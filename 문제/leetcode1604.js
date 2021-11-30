var alertNames = function(keyName, keyTime) {
  const n = keyName.length;
  let answer = [];
  for (let i = 0; i < n; i++) {
    let tmp = keyTime[i].split(":");
    keyTime[i] = parseInt(tmp[0]) * 60 + parseInt(tmp[1]);
  }

  const hash = new Map();
  for (let i = 0; i < n; i++) {
    if (hash.has(keyName[i])) {
      let tmp = hash.get(keyName[i]);
      tmp.push(keyTime[i]);
      hash.set(keyName[i], tmp);
    } else {
      hash.set(keyName[i], [keyTime[i]]);
    }
  }

  console.log(hash);

  for (const [key, value] of hash) {
    if (value.legnth < 3) continue;
    value.sort((a, b) => a - b);

    for (let i = 2; i < value.length; i++) {
      let time = value[i] - value[i - 2];
      if (0 < time && time <= 60) {
        answer.push(key);
        break;
      }
    }
  }
  answer.sort();
  return answer;
};

const nthUglyNumber = n => {
  let dp = new Array(n).fill(0);
  let i2 = (i3 = i5 = 0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let next2 = dp[i2] * 2;
    let next3 = dp[i3] * 3;
    let next5 = dp[i5] * 5;
    let min = Math.min(next2, next3, next5);
    dp[i] = min;
    if (min == next2) i2++;
    if (min == next3) i3++;
    if (min == next5) i5++;
  }
  return dp[n - 1];
};
