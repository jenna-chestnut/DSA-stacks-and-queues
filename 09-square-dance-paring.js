// As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. 
// If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. 
// Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

const Queue = require('./06-single-list-queue');
const displayQ = require('./06a-single-list-queue');


//     F Jane

//     M Frank

//     M John

//     M Sherlock

//     F Madonna

//     M David

//     M Christopher

//     F Beyonce
//         Female dancer is Jane, and the male dancer is Frank
//         Female dancer is Madonna, and the male dancer is John
//         Female dancer is Beyonce, and the male dancer is Sherlock
//         There are 2 male dancers waiting to dance

const q = new Queue();

q.enqueue(['F', 'Jane']);
q.enqueue(['M', 'Frank']);
q.enqueue(['M', 'John']);
q.enqueue(['M', 'Sherlock']);
q.enqueue(['F', 'Madonna']);
q.enqueue(['M', 'David']);
q.enqueue(['M', 'Christopher']);
q.enqueue(['F', 'Beyonce']);

const squareDance = (q) => {
  let waitingLine = new Queue();
  let person = q.first;
  let couple = { 'M': null, 'F': null };

  if (!person) { return null; }

  const wait = person => waitingLine.enqueue(person);

  const checkP = (next) => { // check the first in line
    let key = next[0]; //grab M or F
    if (!couple[key]) couple[key] = next[1]; // if there is no M/F, set value in our obj
    else wait(next); // otherwise, put into waiting line
    coupleUp(); // check if we have a couple
  };

  const count = waiting => {
    // count amount of people in our waiting line
    let count = 0;
    if (!waiting) return count;
    while (waiting.next) {
      count++;
      waiting = waiting.next;
    }
    return `${count += 1} ${waiting.data[0]}`;
  };

  const coupleUp = () => {
    // if we have a full couple, send couple to the stage and reset couple obj
    if (couple['M'] && couple['F']) { 
      console.log(`Female dancer is ${couple['F']}
      and the male dancer is ${couple['M']}`);
      couple = { 'M': null, 'F': null };
    }
  };

  // function to go through our lines
  while (person.next || waitingLine) {

    // check if anyone is waiting, try to finish couple
    if (waitingLine.first) {
      checkP(waitingLine.dequeue());
    }

    // check next in OG line
    if (person) checkP(person.data);

    // set person to next in line if there are more
    if (person.next) person = person.next; 
    // otherwise, finish up by checking the last in line, and counting who is left
    else {
      checkP(person.data);
      console.log(`There are ${count(waitingLine.first)} waiting to dance :'-(`);
      return;
    }
  }

};

squareDance(q);