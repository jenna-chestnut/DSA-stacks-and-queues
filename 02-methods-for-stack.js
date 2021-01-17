// Using the Stack class from 01, implement the following helper functions outside of the class:
//     peek(): allows you to look at the top of the stack without removing it
//     isEmpty(): allows you to check if the stack is empty or not
//     display(): to display the stack - what is the 1st item in your stack?
//     Remove Strawberry from your stack and display the stack

const Stack = require('./01-create-stack-class');

let stack = new Stack();
stack.push('Banana');
stack.push('Apple');
stack.push('Strawberry');
stack.push('Mango');
stack.push('Orange');

const peek = (stack) => {
  let top = stack.top;
  return top.data;
};

// console.log(peek(stack));

const display = (stack) => {
  let holder = []; // to hold our values

  while (stack.top.next) { // while there is another item to grab
    let item = stack.pop(); // pull item out
    holder.push(item); // push item into our holder
    console.log(item); // console.log (display)
  }

  let item = stack.pop(); // grab our last item
  holder.push(item); // put into our holder
  console.log('The first item in the stack is ' + item); // say 'this is the last item

  for (let i = holder.length - 1; i >= 0; i--) { // return held items
    stack.push(holder[i]);
  }
};

// display(stack);

const removeItem = (value) => {
  let top = stack.top; // label top of our stack (pointer)
  if (!top) return 'Item not found'; // if no pointer, list is empty, return 

  let holder = []; // holder to hold our items to put back;

  while (top.next && top.data !== value) { // check to see if there is another item, and if the data still doesn't match our value
    let item = stack.pop(); // pull out this item
    holder.push(item); // add to our holder
    top = top.next; // re-assign top variable
  }

  if (!top) return 'Item not found'; // if we never found our item, return

  stack.pop(); // remove our sought item without adding to holder

  for (let i = holder.length - 1; i >= 0; i--) { // return all items in the holder
    stack.push(holder[i]);
  }
};

removeItem('Strawberry');
// display(stack);

const isEmpty = (stack) => {
  return !stack.top 
    ? true : false;
};

stack.pop('Banana');
stack.pop('Apple');
stack.pop('Strawberry');

// console.log(isEmpty(stack));

module.exports = display;