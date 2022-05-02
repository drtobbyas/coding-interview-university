function PriorityQueue() {
  const collection = [];

  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
      return;
    }
    let added = false;
    for (let i = 0; i < collection.length; i++) {
      if (element[1] < collection[i][1]) {
        collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      collection.push(element);
    }
  };

  this.dequeue = function () {
    const element = collection.shift();
    return element[0];
  };

  this.front = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

// const a = new PriorityQueue();
// a.enqueue(["eat", 1]);
// a.enqueue(["code", 2]);
// a.enqueue(["sleep", 4]);
// a.enqueue(["play", 3]);

// console.log("Queue size is ", a.size());
// a.dequeue();
// console.log("Queue size is ", a.size());
// console.log("Front is ", a.front());
// console.log("is Queue empty ", a.isEmpty());
