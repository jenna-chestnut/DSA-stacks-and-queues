// Write a program to sort a stack such that the smallest items are on the top (in ascending order). 
// You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

const Stack = require('./01-create-stack-class');
const display = require('./02-methods-for-stack');

let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(1);
stack.push(3);
stack.push(100);
stack.push(-1);

const sortStack = (stack) => {
  let holder = new Stack();
  let top = stack.top;
  if (!top) return null;

  const addToHolder = () => {
    
    if (!holder.top) { holder.push(stack.pop()); return; }

    if (top.value > holder.top.value) {
      const larger = stack.pop();
      const smaller = holder.pop();
      holder.push(smaller);
      holder.push(larger);
    }

    else if (top.value < holder.top.value) {
      const larger = holder.pop();
      const smaller = stack.pop();
      holder.push(smaller);
      holder.push(larger);
    }

    else return;
  };

  while(top.next) {
    addToHolder();
    top = top.next;
  }

  addToHolder();
};

sortStack(stack);
display(stack);