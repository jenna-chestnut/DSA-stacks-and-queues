// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

const Queue = require('./06-single-list-queue');
const DoubleQueue = require('./07-double-list-queue');

const q = new Queue();

q.enqueue('Kirk');
q.enqueue('Spock');
q.enqueue('Uhura');
q.enqueue('Sulu');
q.enqueue('Checkov');

const peek = (q) => {
  let first = q.first;
  if (!first) return null;
  return first.data;
};

// console.log(peek(q));

const isEmpty = (q) => {
  return !q.first
    ? true : false;
};

// console.log(isEmpty(q));  // false

// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();
// q.dequeue();

// console.log(isEmpty(q));  // true

const displayQ = (q) => {
  let node = q.first;
  if (!node) return null;
  while (node.next) {
    console.log(node.data);
    node = node.next;
  }

  console.log('And finally... ' + node.data);
};

// displayQ(q);

const removeAnItem = (q, key) => {
  let node = q.first;
  if (!node) return null;

  while (node.next && node.data !== key) {
    node = node.next;
    q.dequeue();
  }

  if (!node || node.data !== key) { return 'Item not found'; }
  q.dequeue();
};

// removeAnItem(q, 'Spock');
// displayQ(q);


const doubleq = new DoubleQueue();

doubleq.enqueue('Pancakes');
doubleq.enqueue('Waffles');
doubleq.enqueue('Poptarts');
doubleq.enqueue('Eggs');
doubleq.enqueue('French Toast');

// displayQ(doubleq);

module.exports = displayQ;