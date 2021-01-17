// Write a Stack class with its core functions (push, pop) from scratch. 

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack. 


class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null; // start with pointing to null at top
  }

  push(value) {
    // if the stack is empty
    if (this.top === null) { 
      this.top = new _Node(value, null); // set top to hold our node w new data
      return this.top; // return
    }
    // if stack has an item
    const node = new _Node(value, this.top); // create our node
    this.top = node; // point to this new node
    return this.top; // return that
  }

  pop() {
    // if stack is empty, return null
    if (this.top === null) {
      return null;
    }
    // if stack has items, grab our top item
    const node = this.top; // place into node variable
    this.top = node.next; // point to node under top
    return node.data; // return data of our node
  }
}

module.exports = Stack;