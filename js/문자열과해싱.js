// 2021-10-09
// 문자열과 해싱

// 문제1 - 문자열 압축 (반복횟수가 1인 경우 생략)
function solution1(str) {
  let answer = "";
  let cnt = 1; // 배열을 탐색할 때, 처음 만나는 문제 counting해줘야하니까, cnt=1로 선언
  let n = str.length;
  str = str + " "; // 문자 counting한것을 그 문자 뒤에 넣기 위해
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) {
        // 문제 조건이 반복횟수가 1인 경우는 생략해야하니, 1보다 클때만이란 조건 걸기
        answer += String(cnt); // counting숫자를 문자열로 넣어라
      }
      cnt = 1; // 다음 문자를 세기 위해 cnt는 다시 1로 만들어주기
    }
  }
  return answer;
}

console.log(solution1("KKHSSSSSSSE"));

// 문제2 - 숫자만 추출 (문자열에서 숫자만 출력하여 자연수 만들기)
function solution2(str) {
  let answer;
  let ch = /[^0-9]/g;
  str = str.replace(ch, "");
  return (answer = Number.parseInt(str));
}

console.log(solution2("g0en2T0s8eSoft"));

// 문제3 - 접미사 정렬 (특정 문자의 모든 접미사 구하기)
function solution3(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    answer.push(str.substring(i));
  }
  return answer.sort();
}

console.log(solution3("kseaedu"));

// 문제4 - 회문 문자열 : 앞에서 읽을 때나 뒤에서 읽을때나 같은 문자열(회문 검사할때 대소문자 구분x)
function solution4(str) {
  let answer = "YES";
  s1 = str.toLowerCase();
  s2 = s1.split("").reverse().join("");
  if (s1 != s2) answer = "NO";
  return answer;
}
console.log(solution4("gooG"));

// 문제5 - 특정 문자 뒤집기(특수문자 그대로, 영어 알파벳만 뒤집기)
function solution5(str) {
  let answer = "";
  let check = /[a-zA-Z]/;
  let left = 0,
    right = str.length - 1;
  str = str.split("");
  while (left < right) {
    if (!check.test(str[left])) left++;
    else if (!check.test(str[right])) right--;
    else {
      let temp = str[left];
      str[left] = str[right];
      str[right] = temp;
      left++;
      right--;
    }
  }
  //console.log(str);
  return (answer = str.join(""));
}
console.log(solution5("a#b!GE*T@S"));

// 문제6 - 회문문자열2
function solution6(str) {
  let answer = "YES";
  let left = 0,
    right = str.length - 1,
    cnt = 0;
  while (left < right) {
    // left>right되는 순간 반복문 종료
    if (str[left] !== str[right]) {
      // 문자열 양쪽 끝부분부터 탐색 -> 같지 않다면
      let s1 = str.substring(left, right); //left부터 right사이 문자열 반환(right는 포함 x)
      let s2 = str.substring(left + 1, right + 1);
      if (
        // s1와 s2 둘 중 하나라도 문자열을 거꾸로 변환한거랑 같으면 문자가 다른건 하나밖에 없는거라 둘다 달라야함
        s1 !== s1.split("").reverse().join("") &&
        s2 !== s2.split("").reverse().join("")
      ) {
        answer = "NO";
      }
      break;
    } else {
      // 양쪽 문자열이 서로 같다면 left는 증가시키고 right는 감소시켜 안쪽으로 계속 좁혀 들어오기
      left++;
      right--;
    }
  }
  return answer;
}
console.log(solution6("abcbdcba"));
console.log(solution6("abcabbakcba"));
console.log(solution6("abcacbakcba"));

// 문제7 - 공통문자가 없는 단어

function solution7(arr) {
  let answer = 0; //배열에있는 모든 문자열이 공통인 수를 가지고 있을 경우를 위해 0으로 초기화
  arr.sort((a, b) => a.length - b.length);
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (isUnique(arr[i], arr[j])) {
        // 조건문에 있는 함수를 실행 한 뒤 반환값이 true이면 안에 코드 실행
        let temp = arr[i].length * arr[j].length;
        answer = Math.max(answer, temp); //Math객체에 있는 max메소드를 사용하여 가장 큰 수 반환
      }
    }
  }
  function isUnique(a, b) {
    //indexOf : 배열의 원소가 존재하는 첫번째 인덱스를 반환/ 없으면 -1을 반환
    //공통문자가 있기만 하면 되는거니까, indexOf메소드 사용
    for (let x of a) {
      //short 문자열에 있는 문자들을 x에 넣고 하나씩 체크
      if (b.indexOf(x) !== -1) {
        // 공통문자가 있으면 값을 false로 반환
        return false;
      }
    }
    return true; //공통인 문자가 아예 없으면 true를 반환하여 곱하는 함수 실행되게
  }
  return answer;
}

console.log(solution7(["skudy", "kstue", "time", "back", "good"]));
console.log(solution7(["kk", "k", "kkk", "kkkkk", "kkkk"]));

// 문제8 - 학급회장
function solution8(str) {
  let answer;
  let sH = new Map();
  let max = 0;
  for (let x of str) {
    if (!sH.has(x)) sH.set(x, 1);
    else sH.set(x, sH.get(x) + 1);
  }
  for (let x of sH) {
    if (x[1] > max) {
      max = x[1];
      answer = x[0];
    }
  }
  return answer;
}
console.log(solution8("BACBACCACCBDEDE"));
console.log(solution8("BACBADEACBFEACA"));

// 문제9 - 아나그램
function solution9(str1, str2) {
  let answer = "YES";
  str1 = str1.split("");
  str2 = str2.split("");
  str1.sort();
  str2.sort();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      answer = "NO";
      break;
    }
  }
  return answer;
}

console.log(solution9("AbaAeCe", "baeeACA"));
console.log(solution9("abaCC", "Caaab"));

// 문제10 - 문자열 구분하기
function solution10(arr) {
  let answer, i;
  for (i = 0; i < arr[0].length; i++) {
    // 첫번째 문자열과 비교하기위해 배열의 첫번째 요소를 기준으로 잡음
    // 비교할 한 문자열의 길이만큼만
    let sH = new Map(); //해시 만들기
    let flag = true; // 구분할 모든 문자열에 공통적이지 않은 부분을 찾기위해
    for (let j = 0; j < arr.length; j++) {
      let x = arr[j].substring(0, i + 1); //인덱스 0부터 i+1전까지 값을 반환
      if (sH.has(x)) {
        //해시에 이미 있다면
        flag = false; //flag값을 flase로 주고 다시 for문 돌기
        break;
      }
      sH.set(x, 1); //해시에 x문자열이 없다면 넣어주기
    }
    if (flag) break; //만약 구분할 접두어를 찾으면 flag가 true 값으로 for문 빠져나옴
  }
  return (answer = i + 1); //지금은 인덱스를 가지고 구했음, 길이를 반환해줘야하니 +1
}

console.log(solution10(["seeasue", "sesseysu", "semeas"]));
console.log(solution10(["ackky", "kabck", "yokkcs"]));
console.log(solution10(["longlong", "longtong", "longbig"]));
