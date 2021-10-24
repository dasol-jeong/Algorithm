class Node {
  constructor() {
    this.end = false;
    this.cnt = 0;
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let cur = this.root;
    for (let x of word) {
      if (cur.child[x] === undefined) {
        cur.child[x] = new Node();
      }
      cur = cur.child[x];
      cur.cnt++;
    }
    cur.end = true;
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
  getCount(word) {
    let cur = this.root;
    let Count = 0;
    for (let x of word) {
      Count++;
      cur = cur.child[x];
      if (cur.cnt === 1) return Count;
    }
    return Count;
  }
}
function solution(words) {
  let answer = 0;
  let mT = new Trie();
  for (let word of words) {
    mT.insert(word);
  }
  for (let word of words) {
    answer += mT.getCount(word);
  }
  return answer;
}

console.log(solution(["go", "gone", "guild"]));
