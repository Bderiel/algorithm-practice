/* Design min method: 
    returns the min value;
    make a min stack
    push in when there is a new min value thats lower than old one
    if poping old min, we also pop from min stack. 

    /// Got the gist. didnt finish --->
*/

class Stack{
    constructor(){
        // super()
        this.length = 0;
        this.data = {};
        this.min = true;
    }
    push(item){
        this.data[this.length] = item;
        this.length++
        if(this.min) {
            this.min = new Stack();
            this.min.min = false;
            this.min.push(item); // this push will go into min stack. Min stack will have no min of its own. so it will make another min stack and push and so on
        }
        else if (this.min > item) this.min.push(item);
    }
    pop(){
        this.min[this.min.length] === this.data[this.length]
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



const stack = new Stack()
stack.push(1)