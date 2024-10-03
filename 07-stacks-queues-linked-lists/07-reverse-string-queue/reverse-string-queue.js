const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  let queue = new Queue();

  for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
  }

  let reversedString = "";

  while (!queue.isEmpty()) {
    reversedString += queue.dequeue();
  }

  return reversedString;
};

module.exports = reverseStringWithQueue;
