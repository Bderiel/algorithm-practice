/*
 Minimal Tree: ?
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

var fd = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function minTree(arr){
    //sorted arr give
    let node = new Node(arr[Math.floor(arr.length/2)])    
    let tree =  new Tree (node)
    minTreeHelper(arr,tree)
    return tree
}

function minTreeHelper(arr,tree){
    if(!arr.length) return 
    if(arr.length===1) return
    let left = arr.slice(0, Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))

    tree.add(left[Math.floor(left.length/2)])
    tree.add(right[Math.floor(right.length/2)])

    left.splice(Math.floor(left.length/2))
    right.splice(Math.floor(right.length/2))

    minTreeHelper(left,tree)
    minTreeHelper(right,tree)
}
// inOrderPrint(minTree(fd).root
// )
// ---> the indecies are always minued/plussed by powers of two? ? ? ? ? ? ? ? ? ? ? ? ? ? ?
//      8
//   4      12
// 2   6  10    14
//1  3 5 7 9 11 13 15
// console.dir(minTree(fd), {depth:null})
console.log(height(minTree(fd).root))
function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }