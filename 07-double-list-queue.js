// Use the items listed in 06 and enqueue them to your queue.

// Check to see who is first one on the Queue?

class _Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    const node = new _Node(value, null, null);

    if (!this.first) {
      this.first = node; 
    }
    
    
    if (this.last) this.last.next = node;
    node.prev = this.last;
    this.last = node;
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

module.exports = DoubleQueue;