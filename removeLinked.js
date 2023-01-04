// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {

    // Write your code here.
    let currentNode = linkedList;

    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {

            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;

    }

    return linkedList;
}
let node1 = new LinkedList(2)
let node2 = new LinkedList(5)
let node3 = new LinkedList(2)
node1.next = node2
node2.next = node3
console.log(node1)


console.log(removeDuplicatesFromLinkedList(node1))