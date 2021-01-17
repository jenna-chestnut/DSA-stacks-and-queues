// A stack can be used to ensure that an arithmetic expression has balanced parentheses. 
// Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. 
// As a bonus provide a meaningful error message to the user as to what's missing. 
// For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). 
// Finding a close parenthesis without an open parenthesis is an error (report the location of the close); 
// Reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. 
// These must be correctly nested; "([)]" is incorrect, and should report an error at the ), 
// Stating that you were expecting a ] but found a ). 
// If this is starting to look and sound very familiar, 
// Congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: "" and ''. 
// Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

const Stack = require('./01-create-stack-class');

let stack = new Stack();

function parensMatch(exp) {
  let openingP = {'(':1, '[':1, '{':1};
  let closingP = {')':1, ']':1, '}':1};

  for (let i = 0; i < exp.length; i++) {
    if (openingP[exp[i]] 
    || closingP[exp[i]]);
    stack.push(exp[i]);
  }

  let top = stack.top;
  if (!top) return 'no parentheses or brackets';

  let counter = 0;

  const checkVal = (val) => {
    if (openingP[val]) counter--;
    if (closingP[val]) counter++;
    if (counter === -1) return false;
  };

  while (top.next) {
    let toCheck = stack.pop();
    checkVal(toCheck);
    top = top.next;
  }
  
  checkVal(stack.pop());

  return counter === 0;
}

console.log(parensMatch('([)]')); // false
console.log(parensMatch('()()()')); // true
console.log(parensMatch('({]}]')); // false
console.log(parensMatch('(()))(')); // false
console.log(parensMatch('(({})[])')); // true