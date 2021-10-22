class minHeap {
  constructor() {
    this.heap = []; //heap 생성
    this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
  }
  insert([a, b]) {
    this.heap.push([a, b]);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos]; //insert한 값을 tmp에 저장
    while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
      //방금 들어온 값이 그 부모보다 작으면
      // 부모랑 들어온값이랑 위치 바꿈! 더 작은 수가 위로 올라가게
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2); //pos는 최종적으로 tmp가 들어갈 위치를 찾는것
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let res;
    res = this.heap[1]; // root index는 1이니까
    this.heap[1] = this.heap.pop(); // 맨 끝노드 하나가 heap에서 나와서 root로 감
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp, child; //pos : 현재위치 인덱스, 마지막 노드의 인덱스
    tmp = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      child = pos * 2; //왼쪽 자식
      if (child < len && this.heap[child][1] > this.heap[child + 1][1]) child++;
      if (tmp[1] <= this.heap[child][1]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}
function solution(n, edges, end) {
  let answer = 0;
  let minH = new minHeap();
  let graph = Array.from(Array(n + 1), () => Array()); //인접리스트
  let dist = Array.from({ length: n + 1 }, () => 1000); //max값으로 초기화
  for (let [a, b, c] of edges) {
    graph[a].push([b, c]); //a에서 b로가는 비용은 c이다
  }
  dist[1] = 0;
  minH.insert([1, 0]); // 노드1과 1에서 자기자신한테 가는 비용은 0이니까 값을 넣어줘
  while (minH.size() > 0) {
    // heap에 아무것도 없을때까지 while문 실행
    let tmp = minH.get();
    let now = tmp[0]; // tmp[0]을 현재위치로 저장. 초기값 설정
    let nowCost = tmp[1]; // 현재위치의 비용
    if (nowCost > dist[now]) continue; // 최소비용을 찾는거라 현재비용이 저장해놓은 값보다 더 크면 continue로 그냥 넘어가(값 변경 x)
    for (let [next, cost] of graph[now]) {
      //다음으로 가는 좌표와 현재위치에서 거기까지 가는 비용
      if (nowCost + cost < dist[next]) {
        // 현 비용이 이전에 방법으로 오는 방법보다 싸니, 값을 교체해줌
        dist[next] = nowCost + cost;
        minH.insert([next, dist[next]]); // 그리고 다시 그 값을 넣어줌
      }
    }
  }
  //dist의 값이  초기값 그대로이면 그 노드로 갈 수 있는 경우가 없는것 -1 return
  if (dist[end] === 1000) answer = -1;
  else answer = dist[end];
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

//min-heap: 부모노드의 값이 자식 노드의 값보다 작다.
