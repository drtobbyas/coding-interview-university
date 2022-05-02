function Node(data, left = null, right = null) {
  this.data = data;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;

  this.add = (data) => {
    const node = this.root;

    if (node === null) {
      this.root = new Node(data);
      return;
    }

    const searchTree = function (node) {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        }
        return searchTree(node.left);
      } else if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        }
        return searchTree(node.right);
      }
      return null;
    };
    searchTree(node);
  };

  this.findMin = function () {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  };

  this.findMax = function () {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  };

  this.isPresent = function (data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  };

  this.remove = function (data) {
    const removeNode = function (node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  };

  this.find = function (data) {
    let current = this.root;
    while (data !== current.data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }

      if (current === null) {
        return null;
      }
    }
    return current;
  };

  this.findMinHeight = function (node = this.root) {
    if (node === null) {
      return -1;
    }
    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };

  this.findMaxHeight = function (node = this.root) {
    if (node === null) {
      return -1;
    }
    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  };

  this.isBalanced = function () {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  };

  this.inOrder = function () {
    if (this.root === null) {
      return null;
    }

    const result = [];
    const traverse = function (node) {
      node.left && traverse(node.left);
      result.push(node.data);
      node.right && traverse(node.right);
    };
    traverse(this.root);
    return result;
  };

  this.preOrder = function () {
    if (this.root === null) {
      return null;
    }

    const result = [];
    const traverse = function (node) {
      result.push(node.data);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    traverse(this.root);
    return result;
  };

  this.postOrder = function () {
    if (this.root === null) {
      return null;
    }

    const result = [];
    const traverse = function (node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      result.push(node.data);
    };
    traverse(this.root);
    return result;
  };

  this.levelOrder = function () {
    if (this.root === null) {
      return null;
    }

    const result = [];
    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.data);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  };
}

// const a = new BST();

// a.add(45);
// a.add(34);
// a.add(87);
// a.add(7);
// a.add(13);
// a.add(22);
// a.add(48);
// a.add(29);
// a.add(48);

// console.log("The min is: ", a.findMin());
// console.log("The max is: ", a.findMax());

// a.remove(87);

// console.log("The max is: ", a.findMax());
// console.log("Find the tree ", a.find(13));
// console.log("is 22 Present : ", a.isPresent(22));
// console.log("is tree balanced", a.isBalanced());
// console.log("The min height ", a.findMinHeight());
// console.log("The max height ", a.findMaxHeight());

// console.log("order of tree with inorder ", a.inOrder());
// console.log("order of tree with preorder ", a.preOrder());
// console.log("order of tree with postorder ", a.postOrder());
// console.log("order of tree with levelorder ", a.levelOrder());
