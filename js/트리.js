function solution(n, nums, s1, s2) {
  let answer = "YES";
  let unf = Array.from;
  function Find(v) {
    if (v === unf[v]) return v;
    else return (unf[v] = Find(unf[v]));
  }
  function Union(a, b) {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) unf[fa] = fb;
  }
  for (let [a, b] of nums) {
    Union(a, b);
  }
  if (Find(s1) !== Find(s2)) return "NO";
  return answer;
}
console.log(
  solution(9, [[1, 2], [2, 3], [3, 4], [1, 5], [6, 7], [7, 8], [8, 9]], 3, 8)
);

//그래프에서 트리로가는
// 그리디
// 원더랜드
//n-1개까지 작은것부터 선택
//union화할때 싸이클 만들면 안돼 같은집합이면 지나가!
function solution(n, edges) {
  let answer = 0;
  let unf = Array.from({ length: n + 1 }, (v, i) => i);
  function Find(v) {
    if (v === unf[v]) return v;
    else return (unf[v] = Find(unf[v]));
  }
  function Union(a, b) {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) unf[fa] = fb;
  }
  edges.sort((a, b) => a[2] - b[2]); //간선의 값들을 정렬해줌
  for (let [a, b, c] of edges) {
    let fa = Find(a);
    let fb = Find(b);
    if (fa !== fb) {
      answer += c;
      unf[fa] = fb;
    }
  }
  return answer;
}
console.log(
  solution(9, [
    [1, 2, 12],
    [1, 9, 25],
    [2, 3, 10],
    [2, 8, 17],
    [2, 9, 8],
    [3, 4, 18],
    [3, 7, 55],
    [4, 5, 44],
    [5, 6, 60],
    [5, 7, 38],
    [7, 8, 35],
    [8, 9, 15]
  ])
);
