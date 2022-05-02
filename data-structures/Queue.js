function Queue() {
  const collection = [];

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
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

// const a = new Queue();
// a.enqueue("a");
// a.enqueue("b");
// a.enqueue("c");
// a.enqueue("d");

// console.log("Queue size is ", a.size());
// a.dequeue();
// console.log("Queue size is ", a.size());
// console.log("Front is ", a.front());
// console.log("is Queue empty ", a.isEmpty());
