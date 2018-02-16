// ES 5
function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList(node) {
  this.head = node || null;
}

LinkedList.prototype.add = function (node, current) {
  current ? current = current : current = this.head;
  if (!current.next) {
    current.next = node;
  } else {
    this.add(node, current.next);
  }
};

LinkedList.prototype.remove = function (val) {
  let current = this.head;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
};

const node = new Node(1);
const LL = new LinkedList(node);
LL.add(new Node(2));
LL.add(new Node(3));
LL.add(new Node(4));
LL.add(new Node(5));
LL.remove(3);
console.dir(LL, { depth: null });

