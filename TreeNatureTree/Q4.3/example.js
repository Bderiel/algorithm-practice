/*
    List of Depths : Given a binary tree, design an algorithm which
    Creates a linked list of all the nodes at each depth
    so have an object with counter props. increment counter each time you .add
    the object has key value pairing to these levels
*/

function Node(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

function Tree(node) {
  this.root = node;
}

Tree.prototype.add = function (val, current) {
  current ? current = current : current = this.root;
  if (val < current.val) {
    current.left ? this.add(val, current.left) : current.left = new Node(val);
  } else {
    current.right ? this.add(val, current.right) : current.right = new Node(val);
  }
};

function inOrderPrint(node) {
  if (node) {
    inOrderPrint(node.left);
    console.log(node.val);
    inOrderPrint(node.right);
  }
}

function breadthFirst(tree) {
  const queue = [tree.root];
  while (queue.length) {
    const check = queue.shift();
    check.left ? queue.push(check.left) : null;
    check.right ? queue.push(check.right) : null;
    console.log(check.val);
  }
}


function depthList(current, counter = 0) {
  current ? current = current : current = this.root;

  if (current.left) {
    counter++;
    if (obj[counter]) obj[counter].push(current);
    else {
      obj[counter] = [current];
    }
    depthList(current.left, counter);
  }
  if (current.right) {
    counter++;
    if (obj[counter]) obj[counter].push(current);
    else {
      obj[counter] = [current];
    }
    depthList(current.right, counter);
  }
}

const BST = new Tree(new Node(50));
BST.add(30);
BST.add(60);
BST.add(35);
BST.add(70);
let obj = { 0: BST.root };
depthList(BST.root);
console.log(obj);
