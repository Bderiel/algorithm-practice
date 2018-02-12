//Return kth to last linked list //



function Node(val){
    this.val = val
    this.next = null;
}

function LL(node){
    this.head = node || null
}
LL.prototype.add = function(node, start){
    if (!start) {this.head.next ? this.add(node, this.head.next) : this.head.next = node
    } 
    else{ start.next ? this.add(node, start.next) : start.next = node }
}

LL.prototype.returnK = function(val){
    const track = [];
    let current = this.head;
    while(current ){
        track.push(current);
        console.log(current.val)
        current = current.next;
    }
    return track[track.length - val];
}

const LinkedList = new LL(new Node(1))
LinkedList.add(new Node (2))
LinkedList.add(new Node (2))
LinkedList.add(new Node (4))
LinkedList.add(new Node (2))
LinkedList.add(new Node (3))
LinkedList.add(new Node (2))

console.log(LinkedList.returnK(3))
