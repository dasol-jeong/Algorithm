// longest substring without repeating characters
// 주어진 문자열에서 반복되지 않은 가장 긴 문자열 도출해 내기

function solution(s) {
  const map = {};
  let left = 0;

  return s.split('').reduce((max,v,i)=>){
    left=map[v] >= left ? map[v]+1:left;
    map[v]=i;
    return Math.max(max,i-left+1);
  },0);
}
console.log(solution("abcabcbb"));
