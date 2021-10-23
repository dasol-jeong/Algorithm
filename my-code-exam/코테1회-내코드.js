// 1.문자열과 해싱
function solution(s) {
  let answer = "";
  let sH = new Map();

  for (let x of s) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }

  sH = [...sH].sort(
    (a, b) =>
      a[1] !== b[1] ? b[1] - a[1] : a[0].charCodeAt(0) - b[0].charCodeAt(0)
  );
  console.log(sH);
  for (let [str, cnt] of sH) {
    answer += str.repeat(Number(cnt));
  }
  return answer;
}
console.log(solution("BDdcCaaaAAAbbbbbb"));

// 2.투포인터
function solution(nums, k) {
  let answer = 0;
  //let sN=String(nums);
  let left = 0;
  let cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) cnt++;
    while (cnt > k) {
      if (nums[left++] === 0) {
        cnt--;
      }
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
console.log(solution([1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0], 4));

// 3.스택
function solution(s) {
  let answer = "";
  let stack = [];
  for (const x of s) {
    if (x !== "]") {
      stack.push(x);
    } else {
      let string = "";
      let temp = stack.pop();
      while (temp !== "[") {
        string = temp + string;
        temp = stack.pop();
      }

      let numtemp = "";
      while (stack.length && !isNaN(Number(stack[stack.length - 1]))) {
        numtemp = stack.pop() + numtemp;
      }
      stack.push(string.repeat(Number(numtemp)));
    }
  }
  while (stack.length) {
    answer = stack.pop() + answer;
  }
  return answer;
}
console.log(solution("3[a]2[bc]"));

// 라이언
function solution(nums, k) {
  let answer = Infinity;
  let left = 0;
  let cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) cnt += nums[right] === 1 ? 1 : 0;
    while (cnt >= k) {
      answer = Math.min(answer, right - left + 1);
      cnt -= nums[left++] === 1 ? 1 : 0;
    }
  }
  answer = answer === Infinity ? -1 : answer;
  return answer;
}
console.log(solution([1, 2, 2, 2, 1, 2, 1, 2, 2, 1], 3));

function solution(nums, k) {
  let answer = 0;
  let left = 0;
  let cnt = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 1) cnt++;
    while (cnt >= k) {
      if (nums[left++] === 1) cnt--;
    }
    answer = Math.min(answer, right - left + 1);
  }
  return answer;
}
console.log(solution([1, 2, 2, 2, 1, 2, 1, 2, 2, 1], 3));

function solution(nums, k) {
  let answer = 0,
    left = 0,
    cnt = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) cnt++;

    while (cnt > k) {
      if (nums[left++] === 0) cnt--;
    }

    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

console.log(solution([1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1], 3));
console.log(solution([1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1], 2));

// BFS
function solution(s) {
  let answer = 0;
  let queue = new Set();
  for (let i = 1; i <= s.length; i++) {
    queue.add(s.substring(0, i));
  }

  console.log(queue);

  // for(let i=0;) 모르겎ㅆㄷ갓다어떻겧푸렁ㅇ.
  // function BFS() {
  //   let queue = new Set();
  //   let q = [];
  //   let ch = Array(40).fill(0);
  //   let n=s.length;
  //   for (let x of s) {
  //     q.push(x);
  //   }
  //   ch[0] = 1;
  //   let l = 0;
  //   while (q.length) {
  //     let len = q.length;
  //     for (let i = 0; i < len; i++) {
  //       let s=q.shift();
  //       for(let j=1;j<=len;j++){
  //         let ns=s+j;
  //         if(ns===n-1)
  //       }
  //     }
  //   }
  // }
  // BFS();
  return answer;
}
console.log(solution("()(()()"));

// 5번(조장님)
function solution(nums) {
  let answer = 0;
  const N = nums.length;
  let dy = Array(N);
  for (let i = 0; i < N; i++) {
    dy[i] = Array(N).fill(1);
  }

  for (let i = 0; i < N; i++) {
    dy[i][i] = 1;
    for (let j = i + 1; j < N; j++) {
      for (let k = i - 1; k >= 0; k--) {
        if (nums[j] - nums[i] === nums[i] - nums[k]) {
          dy[i][j] += dy[k][i];
          answer = Math.max(answer, dy[i][j]);
        }
      }
    }
  }

  return answer + 1;
}

function getCnt(s) {
  let stack = [];
  for (const x of s) {
    if (x === "(") {
      stack.push("(");
    } else {
      if (stack[stack.length - 1] === "(") stack.pop();
      else stack.push(")");
    }
  }
  return stack.length;
}

// 4번(조장님)
function solution(s) {
  let answer = 0;
  const N = s.length;

  let arr = [];
  let set = new Set();
  let m = getCnt(s);
  m = Math.min(m, N - m);

  function dfs(L, start) {
    if (L === m) {
      let ch = Array(N).fill(0);
      for (const x of arr) {
        ch[x] = 1;
      }

      let tmp = "";
      for (let i = 0; i < N; i++) {
        if (ch[i]) continue;
        tmp += s[i];
      }

      if (getCnt(tmp) === 0 && tmp !== "") {
        set.add(tmp);
      }
    } else {
      for (let i = start; i < N; i++) {
        arr.push(i);
        dfs(L + 1, i + 1);
        arr.pop();
      }
    }
  }
  dfs(0, 0);

  answer = set.size;
  return answer;
}

console.log(solution("())(()()"));
