// trie : 문자열을 탐색할떄 유용한 자료구조 / 각 노드에서 자식들에 대한 포인터들을 배열로 저장함

class Node {
  constructor() {
    this.end = false;
    this.child = {};
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let cur = tihs.root;
    for (let x of word) {
      if (cur.child[x] === undefined) {
        cur.child[x] = new Node();
      }
      cur = cur.child[x]; //문자 있으면 cur위치만 옮겨주면돼
    }
    cur.end = true; //이 node가 이 단어의 끝이다라는 의미
  }
  search(word) {
    let cur = this.root;
    for (let x of word) {
      if (cur.child[x] === undefined) return false;
      cur = cur.child[x];
    }
    return cur.end;
  }
  prefixS(str) {
    let cur = this.root;
    for (let x of str) {
      if (cur.child[x] === undefined) return false;
      cur = cur.child[x];
    }
    return true;
  }
}
const mT = new Trie();
mT.insert("hello");
mT.insert("student");
console.log(mT.search("st"));

//인덱스 트리
function solution(nums, order) {
  let answer = [];
  const N = nums.length;
  let arr = Array(100).fill(0);
  let s = 1;
  while (s < N) {
    s *= 2;
  }

  for (let i = s - 1; i > 0; i--) {
    arr[i] = arr[i * 2] + arr[i * 2 + 1];
  }
  function update(idx, val) {
    while (idx > 0) {
      arr[idx] += val;
      idx = Math.floor(idx / 2);
    }
  }
  function get(s, e) {
    let result = 0;
    while (s <= e) {
      if (s % 2 === 1) result += arr[s];
      if (e % 2 === 0) result += arr[e];
      s = Math.floor((s + 1) / 2);
      e = Math.floor((e - 1) / 2);
    }
    return result;
  }
  for (const [a, b, c] of order) {
    if (a === 1) {
      update(b + s - 1, c - arr[b + s - 1]);
    } else {
      answer.push(get(b + s - 1, c + s - 1));
    }
  }
  return answer;
}
console.log(
  solution([1, 2, 3, 4, 5], [[1, 3, 6], [2, 2, 5], [1, 5, 2], [2, 3, 5]])
);

//DP MINHEAP안쓰고
function solution(n, edges, end) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let dist = Array.from({ length: n + 1 }, () => 1000);
  let ch = Array(n + 1).fill(0);
  for (let [a, b, c] of edges) {
    graph[a].push([b, c]);
  }
  dist[1] = 0;
  for (let i = 1; i <= n; i++) {
    let min = 0;
    for (let j = 1; j <= n; j++) {
      if (ch[j] === 0 && dist[j] < dist[min]) min = j;
    }
    //distenct의 인덱스번호:그래프의 노드번호? dist[min] : 1번에서 min이라는 정점을 통해서 next로 가는 최소비용이 있음
    ch[min] = 1;
    for (let [next, cost] of graph[min]) {
      if (dist[min] + cost < dist[next]) {
        dist[next] = dist[min] + cost;
      }
    }
  }
  answer = dist[end];
  return answer;
}
console.log(
  solution(
    6,
    [
      [1, 2, 12],
      [1, 3, 4],
      [2, 1, 2],
      [2, 3, 5],
      [2, 5, 5],
      [3, 4, 5],
      [4, 2, 2],
      [4, 5, 5],
      [6, 4, 5]
    ],
    5
  )
);
