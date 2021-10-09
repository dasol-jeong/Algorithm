/*function solution(words){
  let answer = 100;
  let minCnt=0;

  let arr=new Array(words.length);
  for(let i=0; i<words.length;i++){
    arr[i]=words[i].split("");
  }
  for(let i=0; i<words.length-1;i++)
 
}

const words = ["longlong", "longtong", "longbig"];

console.log(solution(words));*/

/* 모든 문자열에서 구분할 수 있는 부분을 찾아내는 거니까
배열중 문자열 하나만 정해서 돌면되는구나
0,1,2
seeasue에 있는 0,1 s만!들가*/

function solution(words) {
  let answer = [];
  let sH = new Map();
  for (let x of words[0]) {
    sH.set(x, (sH.get(x) || 0) + 1);
  }
  for (let i = 1; i < words.length; i++) {
    let tmp = new Map();
    for (let x of words[i]) {
      if (sH.get(x)) {
        sH.set(x, sH.get(x) - 1);
        tmp.set(x, (tmp.get(x) || 0) + 1);
      }
    }
    sH = tmp;
  }
  let str = "";
  for (let [key, val] of sH) {
    str += key.repeat(val);
  }
  answer = str.split("");
  return answer;
}
console.log(solution(["longlong", "longtong", "longbig"])); //["l", "o", "n", "g", "g"]
console.log(solution(["cool", "rock", "cook"])); //["c", "o"]
console.log(solution(["a", "aaa", "aaaaa"])); //["a"]
console.log(solution(["aabbss", "bbbss", "csc", "asb"])); //["s"]
console.log(solution(["abcde", "edcba", "cdeba", "debac", "acbed"])); //["a", "c", "b", "e", "d"]

// let arr=[1,2,3,4,5];
// let result=0;
// arr.forEach((num) =>{
// 	result+=num;
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((pre, curr) => {
//   return pre + curr;
// }, 0);
// console.log(result);

function solution6(str) {
  let answer = "YES";
  let left = 0,
    right = str.length - 1,
    cnt = 0;
  str = str.split(""); // 문자열(String) -> 배열(Array) 변환
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      if (cnt > 1) {
        answer = "NO";
        break;
      }
      cnt++;
      left++;
      left--;
    }
  }
  return answer;
}
console.log(solution6("abcbdcba"));
//console.log(solution6("abcabbakcba"));
//console.log(solution6("abcacbakcba"));
