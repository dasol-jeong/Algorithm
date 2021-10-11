// 2021-10-06
// Array Algorithm

/*
즉,주어진 배열의 길이에서 -1을 하라는 문제?
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
*/

// 문제1 - 수열 축소
function solution1(nums, m) {
  let answer = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      nums[j] = nums[j + 1] - nums[j];
    }
    //console.log(nums);
  }
  answer = nums.slice(0, nums.length - m);
  return answer;
}
console.log(solution1([5, 3, 7, 9, -2], 2));

// 문제2 - 제곱수 정렬(포인터 2개 left, right)
// key point : 오름차순으로 정렬되었다는 것은 O(n)으로 구현하라는 것 for문 한번만?
function solution2(nums) {
  let answer;
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i];
  }
  answer = nums.sort((a, b) => a - b);
  return answer;
}
console.log(solution2([-4, -1, 0, 3, 10]));
console.log(solution2([-7, -3, 2, 3, 11]));

/*
10000번 sorting하면 안된다.
해시...... chraAt
97~122소문자/65~90대문자/
아스키코드를 인덱스...
ch[x.charCodeAt()-97]++ 배열가지고 인덱싱.....
counting, indexing 다.....해야해?
Map에 키에 value값이 배열도 들어갈 수 있어....
배열의 길이는 999까지
js에서 숫자 오름차순 정리 : sort((a,b) => a-b);
*/
// 문제3 -수열의 높이 조정(내가 푼 것)
function solution3(nums, m) {
  let answer;
  for (let i = 0; i < m; i++) {
    nums.sort((a, b) => a - b);
    nums[0]++;
    nums[nums.length - 1]--;
  }
  nums.sort((a, b) => a - b);
  answer = nums[nums.length - 1] - nums[0];
  return answer;
}
console.log(solution3([2, 1, 3, 7, 5], 2));
console.log(solution3([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50));

// 문제3 - 강사님 방법1
function solution3_1(nums, m) {
  let answer = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < m; i++) {
    nums[0]++;
    nums[nums.length - 1]--;
    nums.sort((a, b) => a - b);
    if (nums[0] === nums[nums.length - 1]) break;
  }
  answer = nums[nums.length - 1] - nums[0];
  return answer;
}
console.log(solution3_1([2, 1, 3, 7, 5], 2));

// 문제3- 강사님 방법2
function solution3_2(nums, m) {
  let answer = 0;
  let ch = Array.fill({ length: 1001 }, () => 0); // 배열의 크기를 정함
  let maxH = Number.MIN_SAFE_INTEGER; //Number 객체의 정적 상수
  let minH = Number.MAX_SAFE_INTEGER;
  for (let x of nums) {
    //배열의 길이만큼 돌아
    ch[x] += 1; // nums배열에 있는 숫자를 ch배열에 넣기
    if (x > maxH) maxH = x; //
    if (x < minH) minH = x;
  }
  for (let i = 1; i <= m; i++) {
    //높이조정값까지 돌기
    if (maxH === minH) return 0; //가장큰값과 가장작은 값이 같으면 0을 return
    if (ch[maxH] === 1) {
      //만약 가장큰 값이 1과 같으면
      ch[maxH]--; //가장큰 값의 cnt값 -1
      maxH--; //가장큰 값 -1
      ch[maxH]++; //가장 큰 값의 cnt +1
    } else {
      ch[maxH]--; //
      ch[maxH - 1]++;
    }
    if (ch[minH] === 1) {
      ch[minH]--;
      minH++;
      ch[minH]++;
    } else {
      ch[minH]--;
      ch[minH + 1]++;
    }
  }
  answer = maxH - minH;
  return answer;
}
console.log(solution3_2([2, 1, 3, 7, 5], 2));

function isPrime(nums) {
  let answer = nums.filter(num => {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
}
console.log(isPrime([6, 7, 21, 23, 31]));

// 문제4 - 가장 높은 증가수열(연속된 증가부분의 높이) 높이 : 그 배열의 첫항과 마지막항의 차
function solution4(nums) {
  let answer = 0;
  let height = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      height += nums[i] - nums[i - 1];
    } else {
      answer = Math.max(answer, height);
      height = 0;
    }
  }
  answer = Math.max(answer, height);
  return answer;
}
console.log(solution4([5, 2, 4, 7, 7, 3, 9, 10, 11]));
console.log(solution4([8, 12, 2, 3, 7, 6, 20, 3]));

// 문제5 - 가장 긴 수열(연속으로 증가 or 연속으로 감소)
function solution5(nums) {
  let answer = 0;
  let up = 1,
    down = 1,
    maxup = 0,
    maxdown = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      //증가수열
      up++;
    } else {
      maxup = Math.max(maxup, up);
      up = 1; // 다시 셋팅, 연속부분이 끝났으니
    }
    if (nums[i] < nums[i - 1]) {
      //감소수열
      down++;
    } else {
      maxdown = Math.max(maxdown, down);
      down = 1; //다시 셋팅, 연속부분이 끝났으니
    }
  }
  maxup = Math.max(maxup, up);
  maxdown = Math.max(maxdown, down);
  return (answer = Math.max(maxup, maxdown));
}
console.log(solution5([1, 2, 3, 3, 4, 5, 6, 7, 7]));
console.log(solution5([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
/*
 바이토닉수열 : 증가했다가 감소하는 수열!!!
 증가하는 부분 while문 돌아.....(증가수열 증가)
 증가가 멈추는 지점에서 while문 멈추고 break;
 감소하는 부분부터 다시 while돌아(감소수열 증가)
 i===0이면 증가도 안하거 i===n-1이면 증가만 한것
 i!==n-1이면 끝까지 못갔다.
 */

// 문제6 - 바이토닉 수열
function solution6(nums) {
  let answer = "YES";
  let n = nums.length;
  let i = 0;
  while (i + 1 < n && nums[i] < nums[i + 1]) {
    //배열을 아직 다 돌지 않았고 증가하는 부분 있음
    i++;
  }
  if (i === 0 || i === n - 1) answer = "NO"; //증가가 없거나 증가만 있음
  while (i + 1 < n && nums[i] > nums[i + 1]) {
    //배열을 아직 다 돌지 않았고 감소하는 부분 있음
    i++;
  }
  if (i !== n - 1) answer = "NO"; // 감소하다가 증가하는 부분을 찾는
  return answer;
}
console.log(solution6([1, 2, 3, 4, 5, 3, 1]));
console.log(solution6([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution6([1, 2, 3, 4, 5]));

/*
 거리두기
 앞에서부터 뒤로 밀고가 한번 , 뒤에서 앞으로 처리 한번....
 앞에서부터 뒤로 밀고가는건 빈좌석이 왼쪽사람으로부터 얼마나 떨어져있는지...
 1을 만나면 0으로 바꿔
 0이 0을 만나면 ++해

 다시 뒤에서 앞으로... d=1000으로
 가까운 거리의 최대 기존값과 d비교해서 기존값을 더 작은값으로 교체
 그렇게 해서 최대값 찾기

 d가 1000인 이유는 맨 끝이 0일수도 있으니까???
 */

// 문제7 - 거리두기
function solution7(nums) {
  let answer = 0;
  let n = nums.length;
  let dist = Array(n).fill(0); //nums배열의 길이로 새로운 배열 생성하여 초기값 0으로 줌
  let d = 1000; // ??
  for (let i = 0; i < n; i++) {
    // 앞에서부터 뒤로 밀고가기
    if (nums[i] === 1) {
      d = 0;
      dist[i] = d;
    } else {
      d++;
      dist[i] = d;
    }
  }
  d = 1000;
  for (let i = n - 1; i >= 0; i--) {
    //뒤에서부터 앞으로 밀고오기
    if (nums[i] === 1) d = 0;
    else {
      d++;
      dist[i] = Math.min(dist[i], d);
    }
  }
  answer = Math.max(...dist); // 배열 dist값중 가장 큰 것 찾기
  return answer;
}
console.log(solution7([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]));

const myArray = [1, 2, 3, 4, 5];
const mySet = new Set(myArray);

/* 
Map을 사용하여 문자열을 문자를 key:value 값으로 넣어야하나??
 words라는 배열안에 모든 문자열들을 돈다.
 그 문자열들의 문자를 다 돈다.
 문자를 돌면서 같은 단어 count하기
 */

// 문제8 - 빈도수 구하기
function solution8(nums, m) {
  let answer = [];
  let sH = new Map(); //해시 생성
  for (let x of nums) {
    //
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  let temp = [...sH].sort((a, b) => b[1] - a[1]); //숫자 내림차순으로 정렬하기
  for (let i = 0; i < m; i++) {
    answer.push(temp[i][0]);
  }
  return answer;
}
console.log(solution8([1, 1, 1, 2, 2, 3], 2));
console.log(solution8([3, 3, 3, 5, 1, 1, 1, 7, 2, 2], 3));
