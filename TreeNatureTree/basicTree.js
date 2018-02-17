// make node
// make tree
// insert
// max. min
// search types inorder, breath;

function Node(val) {
  this.val = val;
  this.right = null;
  this.left = null;
}

function Tree(node) {
  this.root = node || null;
}

Tree.prototype.insert = function (val) {
  let current = this.root;

  while (current) {
    if (val >= current.val) {
      if (!current.right) {
        const te = new Node(val);
        current.right = te;
        break;
      }
      current = current.right;
    }
    if (val < current.val) {
      if (!current.left) {
        const te = new Node(val);
        current.left = te;
        break;
      }
      current = current.left;
    }
  }
};

Tree.prototype.max = function (current) {
  current = current || this.root;
  if (!current.right) {
    console.log(current.val);
    return current.val;
  }
  return this.max(current.right);
};

// function inOrder(node) {
//   if (node) {
//     inOrder(node.left);
//     console.log(node.val);
//     inOrder(node.right);
//   }
// }

Tree.prototype.inOrder = function (node) {
  // node = node || this.root;
  node ? node = node : node = this.root
  if (node) {
    this.inOrder(node.left);
    console.log(node.val);
    this.inOrder(node.right);
  }
};

const test = new Node(100);
const T = new Tree(test);
T.insert(10);
T.insert(20);
T.insert(30);
T.insert(40);
T.insert(200);
T.insert(201);
T.insert(140);

T.inOrder();

// console.log(T.max(), 'max');
// console.dir(T, { depth: null });
