//Max heap
class maxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(1e9); //10억
  }
  //여기까지 1차원 배열 생성
  insert(val) {
    this.heap.push(val); //하나 push하고 끝노드 생성됨
    this.upHeap(this.heap.length - 1);
  }
  upHeap(pos) {
    //pos :마지막 노드 index
    let tmp = this.heap[pos]; //insert했던 값
    while (tmp > this.heap[parseInt(pos / 2)]) {
      this.heap[parseInt(pos / 2)] = this.heap[pos]; //tmp에 저장해놨으니 이렇게 해줘 괜찬아
      pos = parseInt(pos / 2); //pos는 최종적으로 tmp가 들어갈 위치를 찾는거임
    }
    this.heap[pos] = tmp; //wilhe false이면 pos값에다가 tmp값을 넣어주기
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1]; //root index=1이니까
    this.heap[1] = this.heap.pop(); //맨 끝노드 하나가 pop으로 나와서 heap[1]로 감
    this.downHeap(1, this.heap.length - 1); //마지막노드 인덱스
    //pos는 마지막 부모까지만 내려가야돼!!! 더 내려가면 index out of range됨
    //마지막 부모노드 찾는법 : 마지막 노드 /2=몫이 마지막 부모노드
    return res;
  }
  downHeap(pos, len) {
    //len:마지막노드의 인덱스
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2; //왼쪽자식
      //child<len 조건은 마지막노드가 왼쪽에만 있을 수 있으니까!! 왼쪽에만 있으면 오른쪽은 체크할 필요없잖아!
      if (child < len && this.heap[child] < this.heap[child + 1]) child++;
      if (tmp >= this.heap[child]) break; //tmp가 자식보다 크거나 같으면 while문 멈춰
      this.heap[pos] = this.heap[child]; //자식이 부모위치로 들어가는것
      pos = child; //그리고 pos의 값은 자식값이 됨. 즉 자식값과 부모값이 서로 바뀌는것
      //pos는 지금 down하고있는것임
    }
    this.heap[pos] = tmp;
  }
  //siez : heap에 있는 개수
  size() {
    return this.heap.length - 1; //heap이 비어있냐 안비어있냐도 이걸로 판단 가능
    //size가 0보다 클때만 get을 한다.....이렇게 사용
  }
}

let maxH = new maxHeap();
maxH.insert(7);
maxH.insert(8);
maxH.insert(5);
maxH.insert(4);
maxH.insert(9);
// console.log(maxH.get());
// console.log(maxH.get());
// cle.log(maxH.get());
// console.log(maxH.get());
console.log(maxH);

function solution(nums, k) {
  let answer = [];
  let nH = new Map();
  for (let x of nums) {
    nH.set(x, (nH.get(x) || 0) + 1);
  }
  let tmp = [...nH].sort((a, b) => b[1] - a[1]); //해시 정렬
  console.log(tmp);
  for (let i = 0; i < k; i++) {
    answer.push(tmp[i][0]);
  }
  onsole.log(maxH.get());
  // conso
  return -1;
}
console.log(solution([1, 1, 1, 2, 2, 3], 2));
console.log(solution([3, 3, 3, 5, 1, 1, 1, 7, 2, 2], 3));
