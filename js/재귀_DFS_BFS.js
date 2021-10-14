// 2021-10-14
// 재귀함수, DFS, BFS

// 문제1 - 재귀함수를 이용한 이진수 출력
function solution1(n) {
  let answer = 0,
    temp = [];
  function DFS(n) {
    if (n === 0) return;
    else {
      //n이 0이라는건 더 이상 나눌 수 없음
      DFS(parseInt(n / 2)); // 호출
      temp.push(n % 2); // 나머지 값 배열에 넣기
      console.log(temp);
    }
  }
  DFS(n);
  for (let i = 0; i < temp.length; i++) {
    answer = answer * 10 + temp[i];
  }
  return answer;
}
console.log(solution1(11));

// 재귀함수가 control하는 건 지역변수임! 전역변수로 선언하지마
function solution(n) {
  let answer;
  function DFS(n) {
    if (n === 0) {
      return;
    } else {
      console.log(n);
      DFS(n - 1); //재귀함수는 stack임 stack을 사용하기때문에...먼저들어간게 먼저나옴
    }
  }
  DFS(3);
  return answer;
}
console.log(solution(3));

function solution(n) {
  let answer = [];
  function DFS(n) {
    if (n == 0) return;
    else {
      DFS(n / 2);
      //stack을 사용하기때문에 거꾸로 출력함.
    }
  }
  DFS(n);
}
console.log(solution(11));

// 문제2 - 이진트리 순회
function solution(n) {
  let answer = "";
  function DFS(v) {
    // 재귀함수
    if (v > 7) return;
    else {
      //만약 7보다 커지면 stack에 쌓은 값 반환, v는 부모
      answer += v + " "; //
      DFS(v * 2); //왼쪽자식
      DFS(v * 2 + 1); //오른쪽자식
    }
  }
  DFS(n); // 함수호출
  return answer;
}
console.log(solution(1)); // 1 2 4 5 3 6

// 문제3
function solution(n) {
  let answer = [];
  let temp = [];
  function DFS(v) {
    if (v === n + 1) {
      if (temp.length != 0) {
        answer.push(temp.slice());
      }
    } else {
      temp.push(v);
      DFS(v + 1);
      temp.pop();
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}
console.log(solution(3));

// 문제4
// i 인덱스에 있는 것을 사용하겠다 안하겠다는 level로....
function solution(nums) {
  let answer = "YES";
  let total = nums.reduce((a, b) => a + b, 0); // 배열의 전체 합
  let n = nums.length;
  let flag = 0;
  function DFS(l, sum) {
    if (flag) return;
    if (l === n) {
      if (total - sum === sum) {
        return answer;
      }
      answer = "NO";
      flag = -1;
    } else {
      DFS(l + 1, sum + nums[l]);
      DFS(l + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution([3, 9, 11, 13]));

// 문제5
function solution(nums, m) {
  let answer = 0;
  let n = nums.length;
  function DFS(l, sum) {
    if (sum > m) return; // sum이 m(조건값)보다 크면 전(?) 재귀함수 실행하던곳으로 돌아간다
    if (l === n) {
      // 배열을 다 돌면
      answer = Math.max(answer, sum); // m(조건값)에 가까운 값을 answer변수에 넣기
    } else {
      DFS(l + 1, sum + nums[l]); // 배열의 요소를 더함(=그 무게를 사용)
      DFS(l + 1, sum); // 배열의 요소를 사용하지 않음
    }
  }
  DFS(0, 0); // 매개변서 0,0으로 넘기기
  return answer;
}
console.log(solution([34, 56, 55, 67, 33, 76, 63, 43], 379));

// 문제5
function solution(n, m) {
  let answer = [];
  let temp = [];
  function DFS(l) {
    if (l === n) {
      answer.push(temp.splice()); //깊은복사요?얕은복사요?...
    } else {
      for (let i = 1; i <= n; i++) {
        //여기서 호출 n번 일어나는거임
        temp.push(i);
        DFS(l + 1); //함수끝나면 일로 다시 넘어와
        temp.pop(); // 이거하고 i++되는거임
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3, 2));

// 문제6
function solution(nums, m) {
  let answer = [];
  let temp = [];
  let n = nums.length;
  let ch = Array(n).fill(0);

  function DFS(l) {
    if (l === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          temp.push(nums[i]);
          DFS(l + 1);
          ch[i] = 0;
          temp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([3, 6, 9], 2));

// 문제8
function solution(n, m) {
  let answer = [];
  let arr = Array.from(Array(35), () => Array(35).fill(0));
  function DFS(n, r) {
    if (arr[n][r] > 0) return arr[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1));
  }
  return answer;
}
console.log(solution(5, 3));

// 문제10 조합구하기는 그냥 코드외우세요...
function solution(n, m) {
  let answer = [];
  let temp = [];
  function DFS(l, s) {
    if (l === m) {
      answer.push(temp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        temp.push(i);
        DFS(l + 1, i + 1); //s로 넘겨주는 값 i+1인거 기억하기!!!!
        temp.pop();
      }
    }
  }
  DFS(0, 1);
  return answer;
}
console.log(solution(4, 2));

// 문제11 - 이진트리 레벨탐색
function solution() {
  let answer = "";
  function BFS() {
    let queue = [];
    queue.push(1);
    while (queue.length) {
      let v = queue.shift();
      answer += v + " ";
      for (let nv of [v * 2, v * 2 + 1]) {
        if (nv > 7) continue;
        queue.push(nv);
      }
    }
  }
  BFS();
  return answer;
}

// 문제11 - 이진트리 레벨탐색
console.log(solution());
function solution() {
  let answer = "";
  function BFS() {
    let queue = [];
    queue.push(1);
    while (queue.length) {
      let v = queue.shift();
      answer += v + " ";
      for (let nv of [v * 2, v * 2 + 1]) {
        if (nv > 7) continue;
        queue.push(nv);
      }
    }
  }
  BFS();
  return answer;
}
console.log(solution());

// 바둑이
function solution(nums, c) {
  let answer;
  let sum = 0;

  function DFS(l, c) {
    if (sum > c) return;
    if (l === n) answer += sum;
    else {
      DFS(l + 1, sum + nums[l]);
      DFS(l + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
console.log(solution([81, 58, 42, 33, 61], 259));
