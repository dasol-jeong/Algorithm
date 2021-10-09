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
  let temp;
  let n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] === "s") {
      temp = str.substring(i + 1);
    }
  }
  console.log(temp);

  //sort();

  return answer;
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
