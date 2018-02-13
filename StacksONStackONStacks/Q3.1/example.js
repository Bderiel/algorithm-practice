/* Three in one : skipped?  */

class Stack{
    constructor(){
        // super()
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length] = item;
        this.length++
    }
    pop(){
        delete this.data[this.length]
        this.length && this.length--
    }
    peek(){
        return this.data[0];
    }
    isEmpty(){
       return this.length === 0;
    }
}

function Node(val){
    this.val = val
    this.next = null;
}

class Queue {
    constructor(node){
        // super(node)
        this.head = node;
    }
    add(val){
        this.head.next ? this.head.next.add(val) : this.head.next = new Node(val)
    }
    remove(){
       this.head.next ?  this.head = this.head.next : this.head.val = null;
    }
    peek(){
        return this.head
    }
    isEmpty(){
        return !!this.head.val 
    }
}