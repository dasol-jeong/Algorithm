// two pointers Algorithm
// 10월 7일

/* 먼저 문제를 읽고, 파악하기
   접근방법을 글로 써보자 */

/* 문제1 - 최대 매출
: 주어진 수열 중 연속된 k일동안 최대 합 구하기
매개변수 형식
[12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3
수열 중 연속된 3개의 숫자들을 합한것중 가장 큰 합 구하기

1. [12, 15, 11] = 
2. [15, 11, 20] =
3. [11, 20, 25] =
이렇게 수열 전체를 돌면서,
한 배열의 합이 나올 때마다 새로운 배열에 넣기
그리고 그 배열을 left, right 두개의 pointer를 사용하여 최대 값 찾기

까지 나의 생각 */

function solution1(nums, k) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i]; //window setting
  answer = sum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.log(solution1([1, 2, 3, 5, 6, 7, 1, 3, 9], 5));
//num을 빼고 k를 더하고

/* 문제2 - 매출액의 종류
: 주어진 수열 중 연속된 k일동안의 서로 다른 숫자가 몇개 인지 구하기(공통인건 한번만)
매개변수 형식
[20, 12, 20, 10, 23, 17, 10], 4
수열 중 연속된 4개의 숫자들 중 서로 다른 숫자가 몇개 인지 구하기
(즉, 공통인 숫자는 한번만 세기)

1. [20, 12, 20, 10] = 20,12,10으로 3개
2. [12, 20, 10, 23] = 12,20,10,23으로 4개
비교할때 left, right 두개의 pointer를 사용하여......
이렇게 수열 전체를 돌면서,
한 배열의 숫자 개수를 새로운 배열에 넣기

까지 나의 생각 */
/*
hash에서 size하면 key의 종류가 몇개인지 알려줌
set은 20이 여러개여도 counting 1로 해버려
*/
function solution2(nums, k) {
  let answer = [];
  let nH = new Map();
  let len = nums.length;
  for (let i = 0; i < k - 1; i++) {
    //window를 한개 부족하게 만들기
    nH.set(nums[i], (nH.get(nums[i]) || 0) + 1); //counting 하는법 중요!!!
  }
  let lt = 0;
  for (let rt = k - 1; rt < nums.length; rt++) {
    nH.set(nums[rt], (nH.get(nums[rt]) || 0) + 1);
    answer.push(nH.size); //key의 종류가 들어감. size! 20이 두번있어도 1번만 counting
    nH.set(nums[lt], nH.get(nums[lt]) - 1); //left에서 -1
    if (nH.get(nums[lt]) === 0) nH.delete(nums[lt]); //left는 delete하고, 증가시켜야돼
    lt++;
  }
  return answer;
}
console.log(solution2([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution2([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));

/* 문제3 - 연속 부분수열 1  단골문제입니다!!!!!!!!!!!!!!!
: 주어진 수열 중 연속된 숫자들의 합이 특정숫자 m이 되는 경우의 수 찾기
: 원소값은 1000을 넘지 않는 자연수 
매개변수 형식
[1, 2, 1, 3, 1, 1, 1, 2], 6
수열 중 연속된 숫자들의 합이 6이 되는 경우가 몇 번 있는 지 구하기

인덱스를 가지고 
인덱스 0과 인덱스 1을 더해서 6을 넘지 않으면 인덱스2를 더함,
그 값이 또 6을 넘으면....인덱스 0에서 ++해서 다시 시작..
만약 안넘으면 인덱스 3을 더해서 비교..
만약 6이면 새로운 배열에 처음인덱스부터 마지막인데스까지 넣어줌
그렇게 다 하여 배열안에 있는 수열들이 몇개 인지 셈

까지 나의 생각 */
function solution3(nums, m) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum > m) {
      sum -= nums[lt++];
    }
    if (sum === m) answer++;
  }
  return answer;
}
console.log(solution3([1, 2, 1, 3, 1, 1, 1, 2], 6)); //3

function sol(nums, m) {
  let answer = 0;
  let sum = 0,
    left = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; //
    while (sum > m) {
      sum -= nums[left++]; //후치로 빼고 증가...
    }
    if (sum === m) answer++; //target number와 같으면 더해주고
  }
  return answer;
}
console.log(sol([1, 2, 1, 3, 1, 1, 1, 2], 6));
/* 문제4 - 연속 부분수열2 
: 문제3과 같음
: but, 원소값은 -1000 ~ 1000까지의 정수

*/

/*
hash사용 음수있어서,
undefined는 false임
키워드
연속된 부분수열
원소값 -,+,0
*/

function solution4(nums, m) {
  let answer = 0,
    sum = 0;
  let nH = new Map();
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]; //sum은 처음부터 그냥 계속 누적
    //console.log(sum);
    if (sum === m) answer++; //음수가 있어서 m이 나올수있음 그걸 확인
    //console.log("i=", i, answer);
    if (nH.has(sum - m)) {
      answer += nH.get(sum - m);
      console.log(sum - m);
    }

    nH.set(sum, (nH.get(sum) || 0) + 1);
    console.log(nH);
  }
  return answer;
}
//console.log(solution4([1, 2, 3, -3, 1,  2], 3));
//onsole.log(solution4([3, 1, 1, 1, 3], 3));
//console.log(solution([1], 0));
//console.log(solution4([-1, 0, 1], 0));
console.log(solution4([-1, -1, -1, 1], 0));

/* 문제5 - 연속 부분수열3
: 주어진 수열 중 연속된 숫자들의 합이 특정숫자 m이하가 되는 경우의 수 찾기
: 원소값은 1000을 넘지 않는 자연수
매개변수 형식
[1, 3, 1, 2, 3], 5
연속된 숫자들의 합이 5이하가 되는 경우가 몇번인지 구하기(5이하는 5도 포함)
숫자들의 합이 'sum === 5' || 'sum < 5' 경우를 구함

까지 나의 생각 */

function solution5(nums, m) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    // 배열의 길이만큼
    sum += nums[rt]; //sum에 더해
    while (sum > m) {
      // 찾아야할 숫자보다 sum이 같거나 작을때까지
      sum -= nums[lt++]; //배열의 left값을 빼
    }
    answer += rt - lt + 1; // 최대나온
  }
  return answer;
}
console.log(solution5([1, 3, 1, 2, 3], 5));

/* 문제6 - 연속된 자연수의 합
: n이 입력되면 2개 이상의 연속된 자연수의 합이 n이 되는 경우의 수 찾기
: n(7 <= n < 100,000)이다
매개변수 형식
15
1. 7+8
2. 4+5+6
3. 1+2+3+4+5
로 총 3가지 경우

어떻게 풀어야할지 감도 안잡힘..
15를 뭘로해.....

*/
//나눠떨어질때까지...
function solution6(n) {
  let answer = 0,
    sum = 0;
  let m = parseInt(n / 2) + 1; //시간을 줄이기 위해....하는거라
  let nums = new Array(n).fill(0).map((v, i) => i + 1);
  let lt = 0;
  for (let rt = 0; rt < m; rt++) {
    sum += nums[rt];
    while (sum > n) {
      sum -= nums[lt++];
    }
    if (sum === n) answer++;
  }
  return answer;
}
console.log(solution6(15));

function solution6_2(n) {
  let answer = 0;
  cnt = 1;
  n--;
  while (n > 0) {
    cnt++;
    n -= cnt;
    if (n % cnt == 0) answer++;
  }
  return answer;
}
console.log(solution6_2(98765));

/* 문제7 - 모든 아나그램찾기(해쉬, 투포인터, 슬라이딩 윈도우)
: s문자열과 t문자열이 있다.
: s문자열에서 연속된 문자열들이 t문자열과 아나그램되는 경우의 수 
조건 1. s문자열의 길이는 10000을 넘지 않음
     2. t문자열의 길이는 s문자열과 같거나 작음
     3. 아나그램 판별시 대소문자 구분함
매개변수 형식
bacacbcba, abc
s = bacacbcba , t= abc
s문자열에서 연속된 문자열로 t문자열이 아나그램되는 경우는
{bac}, {acb}, {cba}로 총 3가지이다.

1. t문자열을 아나그램할 수 있는 경우의 수 구하기
2. t문자열을 인덱스로 한자씩 새로운 배열에 넣기
3. 새로운 배열에 있는 요소들을 다 사용하여 새로운 문자열 생성하여 또
   다른 새로운 배열에 넣고, 기존 t문자열도 넣기
4. s문자열과 그 새로운 문자열들을 비교하며....같은 경우 counting

여기까지 내 생각
*/
/* O(n)으로 끝내야돼
t에다가 -counting해줘
이렇게 쭉 밀어버려...
*/

function solution7(s, t) {
  let answer = 0;
  let sH = new Map();
  for (let x of t) {
    console.log(x);
    sH.set(x, (sH.get(x) || 0) - 1); //counting 하는거 -1 :
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    sH.set(s[i], (sH.get(s[i]) || 0) + 1);
    if (sH.get(s[i]) === 0) sH.delete(s[i]); //셋팅도 delect해라
  }
  let lt = 0; //0발생?.....
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
    if (sH.get(s[rt]) === 0) sH.delete(s[rt]);
    if (sH.size === 0) answer++;
    sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}
console.log(solution7("bacacbcba", "abc"));

// 사이즈가 0이면 왜 아나그램이 되는것인가...
// 아나그램이 아닌지 맞는지... right증가

// 두 문자열의 해시가 똑같냐!!!!!!!!!!!
