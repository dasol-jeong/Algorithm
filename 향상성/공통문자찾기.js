function solution(str) {
  let answer = [];
  let sH = new Map(); // 문자열의 요소를 넣어줄 map생성
  for (let x of str[0]) {
    //배열의 첫번째 문자열을 기준으로 하여 map에 값들을 넣어준다.
    sH.set(x, (sH.get(x) || 0) + 1); // key에는 str[0]에 들어있는 문자열의 문자 하나하나를 val에는 그 문자를 counting한 값을 넣는다.
  }
  for (let i = 1; i < str.length; i++) {
    //배열에 있는 나머지 문자열들을 확인, //0번째 인덱스 문자열은 넣었으니 1부터 시작
    let tmp = new Map(); //문자열들의 공통 문자 넣어줄 map 생성
    for (let x of str[i]) {
      if (sH.get(x)) {
        // sH key에 있는 요소들이 str[i]에 있다면
        sH.set(x, sH.get(x) - 1); //그 요소의 count를 하나 빼준다.
        tmp.set(x, (tmp.get(x) || 0) + 1); //그리고 비교되는 두 문자열에 공통으로 들어있는 요소들을 tmp map에 넣는다.
      }
    }
    sH = tmp; //
  }
  let s = "";
  for (let [key, val] of sH) {
    s += key.repeat(val);
  }
  answer = s.split("");
  return answer;
}
console.log(solution(["steasue", "sasseysu", "kseseas"]));
console.log(solution(["ackky", "kabck", "yokkcs"]));
console.log(solution(["longlong", "longtong", "longbig"]));
