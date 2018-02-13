/* Partition linked list  */

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

LL.prototype.partition = function(piv){
    // let current = this.head;
    // let newHead; 
    // let index = 0;
    // while(current.next){
    //     if(current.val<=piv && !newHead){
    //         newHead = new Node (current.val);
    //         current.val = current.next.val;
    //         current.next = current.next.next; 
    //         break;
    //     }
    // else {current = current.next;}
    // }
    // current = this.head;
    // while(current.next){
    //     if(current.val<piv){
    //         let newNode
    //     }
    // }
    let newLL = new LL(piv);
    let current = this.head;
    while(current.next){
        if(current.val < piv){
            // add to head --- don't have the method but if we did we would 
        }
        else {
            newLL.add(current)
        }
        current = current.next;
    }
}
/* Plan:
    first go through it. Find length at which pivot
    then do again and put things that are lower than it before it 
    then increment length of pivot by 1 for each
    if it's equal to the pivot, put it in front of it. 
*/

const LinkedList = new LL(new Node(1))
LinkedList.add(new Node (2))
LinkedList.add(new Node (2))
LinkedList.add(new Node (4))
LinkedList.add(new Node (2))
LinkedList.add(new Node (3))
LinkedList.add(new Node (2))

console.dir(LinkedList, {depth: null})

LinkedList.partition(4)

console.dir(LinkedList, {depth: null})





//Jose Logic?????SA?DSA?D?WEASD?AWE
// while(current.next){
//     if(current.val < piv && index>lenOfPivot){
//         let nextNode = this.head.next;    //[1,2,3,4,5,1,2,3] ----> [2,3,4,5,1,2,3]
//         this.head.next.val = current.val  // current.val = the 1 right after 5  ---> this.head.next.val =1
//         this.head.next.next = nextNode   // this.head.next.next = nextNode ---> [1,1,2,3,4,5,2,2,3]
//         current.val = current.next.val; // 1 ---> 1 = 2
//         current.next = current.next.next; // this nodes next = [3] ---> [1,1,2,3,4,5,2,3]
//         current = current.next
//     }
//     else{ current = current.next}
//     index++
// }