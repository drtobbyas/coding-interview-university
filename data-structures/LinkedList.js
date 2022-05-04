function Node(element) {
  this.element = element;
  this.next = null;
}

function LinkedList() {
  let length = 0;
  let head = null;

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    const node = new Node(element);

    if (!head) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    length += 1;
  };

  this.remove = function (element) {
    let currentNode = head;
    let previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length -= 1;
  };

  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;

    while (currentNode) {
      index += 1;
      if (currentNode.element === element) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;

    while (count < index) {
      count += 1;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  };

  this.addAt = function (element, index) {
    const node = new Node(element);

    let currentNode = head;
    let previousNode;
    let currentNodeIndex = 0;

    if (index < 0 || index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentNodeIndex < index) {
        currentNodeIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }
    length += 1;

    return true;
  };
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentNodeIndex = 0;

    if (index < 0 || index >= length) {
      return null;
    }

    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentNodeIndex < index) {
        currentNodeIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length -= 1;

    return currentNode.element;
  };

  this.isEmpty = function () {
    return length === 0;
  };
}

const a = new LinkedList();
a.add("stand");
a.add("crawl");
a.add("walk");
a.add("run");
a.add("fly");
a.add("teleport");

console.log("The size of the linked list is ", a.size());
console.log("remove item at 1 ", a.removeAt(1));
console.log("element at 2 is ", a.elementAt(2));

a.addAt("jump", 3);

console.log("index of jump ", a.indexOf("jump"));
a.remove("teleport");
console.log("The size of the linked list is ", a.size());
console.log("is the linked list empty ", a.isEmpty());
