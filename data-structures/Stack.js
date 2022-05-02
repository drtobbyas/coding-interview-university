function Stack() {
  const store = [];

  this.push = function (value) {
    store.push(value);
  };

  this.pop = function () {
    return store.pop();
  };

  this.peek = function () {
    return store[store.length - 1];
  };

  this.size = function () {
    return store.length;
  };
}

// const a = new Stack();
// console.log("push item ", a.push("1"));
// console.log("push item ", a.push("2"));
// console.log("push item ", a.push("3"));
// console.log("push item ", a.push("7"));
// console.log("push item ", a.push("9"));

// console.log("size is ", a.size());
// console.log("peek top item is ", a.peek());
// console.log("remove item ", a.pop());
// console.log("peek top item is ", a.peek());
// console.log("size, is ", a.size());
