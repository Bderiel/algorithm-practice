/* Remove Dupes*/

const util = require('util');

function Node(val) {
  this.val = val;
  this.next = null;
}

function LL(node) {
  this.head = node || null;
}
LL.prototype.add = function (node, start) {
  if (!start) {
 this.head.next ? this.add(node, this.head.next) : this.head.next = node;
  }
  else { start.next ? this.add(node, start.next) : start.next = node; }
};

LL.prototype.deleteDub = function () {
  const track = {};
  let current = this.head;
  while (current.next) {
    if (track[current.val]) {
      current.val = current.next.val; // it wouold make the current node equal to the current.next ? if 2 was already called then we make the
      // the current node that has a val of 2 equal to the next node
      current.next = current.next.next; // The current node equals the next node
      // if we had this [1,2,2,3,4,5,2] tracker[]
      // tracker gets [1,2] ---- > the tracker gets the first 2
      // tracker(Node(3).val) ---> Node(3).val = Node(3).next.val  node(3).next = node(3).next.next

      // The problem with this is that if the last node is a dup it wont check correctly. Add a case for it
    } else {
      track[current.val] = true;
      current = current.next;
    }
  }
};

const LinkedList = new LL(new Node(1));
LinkedList.add(new Node(2));
LinkedList.add(new Node(2));
LinkedList.add(new Node(4));
LinkedList.add(new Node(2));
LinkedList.add(new Node(3));
LinkedList.add(new Node(2));


console.log(util.inspect(LinkedList, false, null));

// console.log(LinkedList)
// LinkedList.deleteDub()
// console.log(JSON.stringify(LinkedList))
console.dir(LinkedList, { depth: null }); // This is good :) !
// console.log(util.inspect(LinkedList, false, null))

