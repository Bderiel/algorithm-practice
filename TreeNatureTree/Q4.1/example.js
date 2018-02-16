/*
    Route between Nodes? //Skip until maybe day 10?
*/

function Node(val){
    this.val = val;
    this.right = null;
    this.left = null;
}

function Tree(node){
    this.root = node;
}

Tree.prototype.add = function(val, current){
    current ?  current = current : current = this.root 
    if(val < current.val){
        current.left ? this.add(val, current.left) : current.left = new Node(val);
    }
    else {
        current.right ? this.add(val, current.right) : current.right = new Node(val);
}
}

function inOrderPrint(node){
if(node)
    {   
    inOrderPrint(node.left)    
    console.log(node.val)
    inOrderPrint(node.right)    
    }
}

function breadthFirst(tree){
    let queue = [tree.root]
    while(queue.length){
        let check = queue.shift()
        check.left ? queue.push(check.left) : null
        check.right ? queue.push(check.right): null
        console.log(check.val)
    }
}

let BST = new Tree(new Node(50))
BST.add(30)
BST.add(60)
BST.add(35)
BST.add(70)

// inOrderPrint(BST.root)
breadthFirst(BST)

