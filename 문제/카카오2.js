function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  return true;
}

function solution2(n, k) {
  let answer = 0,
    left = 0;

  // 자바스크립트 진수 변환 toStirng(진수) 넣으면 된다

  let hex = String(n.toString(k)).split("0").map(Number);

  for (let i = 0; i < hex.length; i++) {
    if (isPrime(hex[i])) answer++;
  }

  return answer;
}

//console.log(solution2(437674,3));
//console.log(solution2(170110780190,10));
console.log(solution2(100000210002300021, 10));
//console.log(solution2(110011,10));
