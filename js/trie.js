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
