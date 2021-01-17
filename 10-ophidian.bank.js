// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. 
// Write a representation of this queue; 
// 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.

const Queue = require('./06-single-list-queue');

// create queue
const BankLine = new Queue();

// create line of people (enqueue)
BankLine.enqueue('Billie');
BankLine.enqueue('Ody');
BankLine.enqueue('Jenna');
BankLine.enqueue('Salem');
BankLine.enqueue('Tuesday');
BankLine.enqueue('August');
BankLine.enqueue('Bloo');
BankLine.enqueue('Juniper');
BankLine.enqueue('Leif');
BankLine.enqueue('Barbie');
BankLine.enqueue('Babby');

const bankLine = (line) => {
  let first = line.first;
  if (!first) return null;

  const checkPaperwork = () => {
    let correct = Math.floor(Math.random() * 4); // pick random number between 1 - 4
    correct = correct > 0; // correct 75% of the time ( 1-3 out of 4)

    // 75% chance of being true, but if not - dequeue and enqueue with person
    if (!correct) {
      console.log(line.first.data + ' has to fix their paperwork :-(');
      let toFixPaperwork = line.dequeue();
      line.enqueue(toFixPaperwork);
    }
    // otherwise, console.log and dequeue
    else {
      console.log(line.first.data + ' is checking out. Have a great day!');
      line.dequeue();
    }
  };

  // continue until line is empty
  while (first) {
    checkPaperwork();
    if (first.next) first = first.next;
    else return;
  }
};

bankLine(BankLine);