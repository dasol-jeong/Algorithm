// Array Algorithm

//즉,주어진 배열의 길이에서 -1을 하라는 문제?
function solution(nums, m) {
  let i = 0;
  let arry1 = nums.slice(0, nums.length - 1);
  let arry2 = nums.slice(1, nums.length);

  let answer = arry1.map(function(arry1_i, arry2_i) {
    return arry1_i[i] - arry2_i[i];
  });
}
console.log(solution1([5, 3, 7, 9, -2], 1));
//3-5 9-7 -2-9를 하여라.....

//10/6 문제1
function solution1(nums, m) {
  let answer;
  let n = nums.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      nums[j] = nums[j + 1] - nums[j];
    }
  }
  answer = nums;
  console.log(answer);
  answer = nums.slice(0, n - m);
  console.log(answer);
  return answer;
}
console.log(solution1([5, 3, 7, 9, -2], 2));

//문제2
//포인터 2개 left, right
function solution2(nums) {
  let n = nums.length;
  let answer = new Array(n).fill(0);
  let left = 0,
    right = n - 1,
    tmp;
  for (let i = n - 1; i > 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      tmp = nums[left];
      left++;
    } else {
      tmp = nums[right];
      right--;
    }
    answer[i] = tmp * tmp;
  }
  return answer;
}
console.log(solution2([-4, -1, 0, 3, 10]));

//문제3
//10000번 sorting하면 안된다.
//해시...... chraAt
//97~122소문자/65~90대문자/
//아스키코드를 인덱스...
//ch[x.charCodeAt()-97]++ 배열가지고 인덱싱.....
//counting, indexing 다.....해야해?
//Map에 키에 value값이 배열도 들어갈 수 있어....
//오늘이 더 뭔 소린지 모르겠구나 ㅎㅎ헤헤헤헿헤ㅔㅎ
//배열의 길이는 999까지
function solution3(nums, m) {
  let arry = Array.from();
  let answer;
}
console.log(solution3([2, 1, 3, 7, 5], 2));

if (maxN - 1 === 1) {
  maxN;
}

//js에서 숫자 오름차순 정리
//sort((a,b) => a-b);

const num1 = 5;
const num2 = Math.pow(num1, 2);
console.log("num**num : ", num2);

function solution3(str) {
  let answer = "";
  let cnt = 1;
  str = str + " ";
  for (let i = 0; i < str.lenght - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) {
      } else {
      }
    }
  }
  return answer;
}
console.log(solution("KKHSSSSSSSE"));
console.log(str);

function isPrime(nums) {
  let answer = nums.filter(num => {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}
console.log(isPrime([6, 7, 21, 23, 31]));

//문제 4
function solution4(nums) {
  let answer;
  let pre = 0,
    next = pre + 1;
  let tmp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[pre] - nums[next] < 0) {
      pre = pre + 1;
      next = pre + 1;
    }
  }
}

//문제 5
function solution5(nums) {
  let answer = 0;
  let up = 1,
    down = 1,
    maxup = 0,
    maxdown = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      증가수열찾기;
      up++;
    } else {
      maxup = Math.max(maxup, up); //다시셋팅 - 연속이 끝나서
      up = 1;
    }
    if (nums[i - 1] > nums[i]) {
      //감소수열찾기
      down++;
    } else {
      maxdown = Math.max(maxdown, down); //다시셋팅 - 연속이 끝나서
      down = 1;
    }
  }
  maxup = Math.max(maxup, up);
  maxdown = Math.max(maxdown, down);
  answer = Math.max(maxup, maxdown);
  return answer;
}
console.log(solution5([1, 2, 3, 3, 4, 5, 6, 7, 7]));

//  바이토닉수열 : 증가했다가 감소하는 수열!!!
//  증가하는 부분 while문 돌아.....(증가수열 증가)
//  증가가 멈추는 지점에서 while문 멈추고 break;
//  감소하는 부분부터 다시 while돌아(감소수열 증가)
//  i===0이면 증가도 안하거 i===n-1이면 증가만 한것
//  i!==n-1이면 끝까지 못갔다.

function solution6(nums) {
  let answer = "YES";
  let n = nums.length;
  let i = 0;
  while (i + 1 < n && nums[i] < nums[i + 1]) i++;
  if (i === 0 || i === n - 1) answer = "NO";
  while (i + 1 < n && nums[i] > nums[i + 1]) i++;
  if (i !== n - 1) answer = "NO";
  return answer;
}
console.log(solution6([1, 2, 3, 3]));

//  거리두기
//  앞에서부터 뒤로 밀고가 한번 , 뒤에서 앞으로 처리 한번....
//  앞에서부터 뒤로 밀고가는건 빈좌석이 왼쪽사람으로부터 얼마나 떨어져있는지...
//  1을 만나면 0으로 바꿔
//  0이 0을 만나면 ++해

//  다시 뒤에서 앞으로... d=1000으로
//  가까운 거리의 최대 기존값과 d비교해서 기존값을 더 작은값으로 교체
//  그렇게 해서 최대값 찾기

//  d가 1000인 이유는 맨 끝이 0일수도 있으니까???
function solution7(nums) {
  let answer = 0;
  let n = nums.length;
  let dist = Array(n).fill(0);
  let d = 1000;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      d = 0;
      dist[1] = d;
    } else {
      d++;
      dist[i] = d;
    }
  }
  d = 1000;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] === 1) d = 0;
    else {
      d++;
      dist[i] = Math.min(dist[i], d);
    }
  }
  answer = Math.max(...dist);
  return answer;
}
console.log(solution7([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));

const myArray = [1, 2, 3, 4, 5];
const mySet = new Set(myArray);

//  Map을 사용하여 문자열을 문자를 key:value 값으로 넣어야하나??
//  words라는 배열안에 모든 문자열들을 돈다.
//  그 문자열들의 문자를 다 돈다.
//  문자를 돌면서 같은 단어 count하기
