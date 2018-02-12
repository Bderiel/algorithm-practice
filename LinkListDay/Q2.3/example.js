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