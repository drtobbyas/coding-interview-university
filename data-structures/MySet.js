function MySet(initialElements = []) {
  const collection = initialElements;

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.delete = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);

      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach((element) => {
      unionSet.add(element);
    });
    secondSet.forEach((element) => {
      unionSet.add(element);
    });

    return unionSet;
  };

  this.intersection = function (otherset) {
    const intersectionSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((element) => {
      if (otherset.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  this.difference = function (otherSet) {
    const differenceSet = new MySet();
    const firstSet = this.values();

    firstSet.forEach((element) => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  };

  this.subSet = function (otherSet) {
    const subSet = new MySet();
    const firstSet = this.values();

    return firstSet.every((element) => {
      return otherSet.has(element);
    });
  };
}

// const setA = new MySet(["a", "b", "c"]);
// const setB = new MySet();

// setA.add("d");
// setB.add("j");
// setB.add("c");
// setB.add("q");
// setB.add("k");

// console.log("size of setA is ", setA.size());
// console.log("size of setB is ", setB.size());
// console.log("is element b present in setA ", setA.has("b"));
// console.log("delete element q from setB ", setB.delete("q"));

// console.log("union of setA and setB is ", setA.union(setB).values());
// console.log(
//   "intersection of setA and setB is ",
//   setA.intersection(setB).values()
// );
// console.log("difference of setA from setB is ", setA.difference(setB).values());
// console.log("is SetA subSet of setB: ", setA.subSet(setB));
