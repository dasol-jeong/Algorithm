class maxHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.upHeap(this.heap.length - 1);
  }
  upHeap(pos) {
    let tmp = this.heap[pos];
    while (tmp > this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downHeap(1, this.heap.length - 1);
    return res;
  }
  downHeap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] < this.heap[child + 1]) child++;
      if (tmp >= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
}

function solution(task) {
  let answer;
  task.sort((a, b) => a[0] - b[0]);
  let start = task[0][0];
  let end = task[0][1];
  let maxH=new maxHeap();
  for (let i = 1; i < task.length; i++) {
    if (task[i][0] <=start&& task[i][1]>end){
      end=task[i][1];
    }
    maxH.insert(task[i][0],task[i][1]);

    if (maxH.size() > 0) {
      answer += maxH.get();
    }
  }
  return answer;
}
console.log(solution([[3, 11], [5, 10], [3, 10], [2, 10], [4, 12]]));
