// 2021-10-11
// two pointers Algorithm

/* 먼저 문제를 읽고, 파악하기
   접근방법을 글로 써보자 */

// 문제1 - 최대 매출
function solution1(nums, k) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  answer = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]; // 수열의 0,1,2 index의 값을 sum에 넣었으니, 그 값에서 0인덱스 값을빼고 3인덱스값을 합한뒤 더 큰 값을 골라야한다.
    answer = Math.max(answer, sum); // Math객체의 max메소드를 사용하여 더 큰 값 구함
  }
  return answer;
}
console.log(solution1([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
console.log(solution1([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
console.log(solution1([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));

//num을 빼고 k를 더하고

/*
문제2 - 매출액의 종류
hash에서 size하면 key의 종류가 몇개인지 알려줌
set은 20이 여러개여도 counting 1로 해버려
*/
/*for (let i = 0; i < nums.length - k; i++) {
    let nH = new Map();
    for (let j = 0; j < k; j++) {
      nH.set(nums[j], (nH.get(nums[j]) || 0) + 1);
    }
    console.log(nH);
  }*/
function solution2(nums, k) {
  let answer = [];
  let nH = new Map(); // 해시생성
  let n = nums.length;
  let left = 0; //left,right 사용
  for (let i = 0; i < k - 1; i++) {
    //배열 인덱스 0~2까지의 값들을 먼저 counting (사이즈를 하나 적게 생성)
    nH.set(nums[i], (nH.get(nums[i]) || 0) + 1);
    console.log(nH);
  }
  for (let right = k - 1; right < n; right++) {
    nH.set(nums[right], (nH.get(nums[right]) || 0) + 1);
    console.log(nH);
    answer.push(nH.size); //key의 종류가 들어감. 20이 두번 있어도 1번만 counting
    console.log(answer);
    nH.set(nums[left], nH.get(nums[left]) - 1);
    if (nH.get(nums[left]) === 0) nH.delete(nums[left]);
    left++;
  }
  return answer;
}
console.log(solution2([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution2([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));

// 문제3 - 연속 부분수열 1  단골문제입니다!!!!!!!!!!!!!!!
function solution3(nums, m) {
  let answer,
    left = 0,
    sum = 0,
    cnt = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    console.log(sum);
    while (sum > m) {
      //조건식이 true이면 계속 반복
      sum = sum - nums[left++]; //처음 더한값 빼기
    }
    if (sum === m) cnt++;
  }
  return (answer = cnt);
}
console.log(solution3([1, 2, 1, 3, 1, 1, 1, 2], 6)); //3
console.log(solution3([1, 1, 1, 1, 1, 1], 3));
console.log(solution3([1, 2, 1, 2, 1, 2, 1], 3));

/* 
문제4 - 연속 부분수열2 
hash사용 음수있어서,
undefined는 false임
키워드
연속된 부분수열
원소값 -,+,0
*/
function solution4(nums, m) {
  let answer = 0,
    sum = 0,
    cnt = 0;
  let nH = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === m) cnt++;
    if (nH.has(sum - m)) {
      cnt += nH.get(sum - m);
    }
    nH.set(sum, (nH.get(sum) || 0) + 1);
  }
  return (answer = cnt);
}
console.log(solution4([1, 2, 3, -3, 1, 2], 3));
console.log(solution4([1, 1, 3, 1, 3], 4));
console.log(solution4([3, 1, 1, 1, 3], 3));
console.log(solution4([1], 0));
console.log(solution4([-1, 0, 1], 0));
console.log(solution4([-1, -1, -1, 1], 0));

// 문제5 - 연속 부분수열3
function solution5(nums, m) {
  let answer = 0,
    sum = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum > m) {
      //조건식이 true이면 계속 반복
      sum -= nums[left++]; //sum이 m보다 커지면 초반에 더한 값 빼기
    }
    answer += right - left + 1; //sum<=m인상태
  }
  return answer;
}
console.log(solution5([1, 3, 1, 2, 3], 5));
console.log(solution5([1, 1, 1, 1, 1, 1], 3));
console.log(solution5([1, 1, 2, 2, 1, 2, 1, 3, 2], 5));

// 문제6 - 연속된 자연수의 합 (나눠떨어질때까지...)
function solution6(num) {
  let answer = 0,
    sum = 0,
    left = 0;
  let m = parseInt(num / 2) + 1;
  let nums = Array(num).fill(0).map((v, i) => i + 1);
  for (let right = 0; right < m; right++) {
    sum += nums[right];
    while (sum > num) {
      sum -= nums[left++];
    }
    if (sum === num) answer++;
  }
  return answer;
}
console.log(solution6(98765));
console.log(solution6(15));
console.log(solution6(45678));

/*
문제7 - 모든 아나그램찾기(해쉬, 투포인터, 슬라이딩 윈도우)
O(n)으로 끝내야돼
t에다가 -counting해줘
이렇게 쭉 밀어버려...
*/
function solution7(s, t) {
  let answer = 0;
  let sH = new Map();
  for (let x of t) {
    sH.set(x, (sH.get(x) || 0) - 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]);
  }
  let left = 0;
  for (let right = len; right < s.length; right++) {
    sH.set(s[right], (sH.get(s[right]) || 0) + 1);
    if (sH.get(s[right]) === 0) sH.delete(s[right]);
    if (sH.size === 0) answer++;
    sH.set(s[left], (sH.get(s[left]) || 0) - 1);
    if (sH.get(s[left]) === 0) sH.delete(s[left]);
    left++;
  }
  return answer;
}
console.log(solution7("bacacbcba", "abc"));
console.log(solution7("bacaAacba", "ab"));
/*
사이즈가 0이면 왜 아나그램이 되는것인가...
아나그램이 아닌지 맞는지... right증가
두 문자열의 해시가 똑같냐!!!!!!!!!!!
*/
