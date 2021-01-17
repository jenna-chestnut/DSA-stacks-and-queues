// A palindrome is a word, phrase, or number that is spelled the same forward and backward. 
// For example, “dad” is a palindrome; 
// “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; 
// And 1,001 is a numeric palindrome. 
// We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
// Use the following template as a starting point.

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

const Stack = require('./01-create-stack-class');

let stack = new Stack();

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let toCompare = '';

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    let letter = stack.pop();
    toCompare += letter;
  }

  return s === toCompare;
}

console.log(is_palindrome('dad')); // true
console.log(is_palindrome('A man, a plan, a canal: Panama')); // true
console.log(is_palindrome('1001')); // true
console.log(is_palindrome('Tauhida')); // false