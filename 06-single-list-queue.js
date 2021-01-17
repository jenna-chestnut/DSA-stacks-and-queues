// Write a Queue class with its core functions (enqueue(), dequeue()) from scratch.


class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const newNode = new _Node(value);

    if (!this.first) this.first = newNode;
    
    if (this.last) this.last.next = newNode;

    this.last = newNode;
  }
  dequeue() {
    if(!this.first) {
      return null;
    }

    const node = this.first;
    this.first = node.next; 

    return node.data;
  }
}

module.exports = Queue;