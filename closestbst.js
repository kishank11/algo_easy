class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let node = new Node(9);
node.left = new Node(4);
node.right = new Node(17);

node.left.left = new Node(3);
node.left.right = new Node(6);
node.left.right.left = new Node(5);
node.left.right.right = new Node(7);

node.right.right = new Node(22);
node.right.right.left = new Node(20);
function closestBST(tree, target) {
    return closestBSTHelper(tree, target, tree.data)

}
var x;
function closestBSTHelper(tree, target, closest) {

    let currentNode = tree;

    while (currentNode !== null) {

        if (Math.abs(target - closest) > Math.abs(target - currentNode.data)) {
            closest = currentNode.data;
            console.log(closest);


        }
        if (target < currentNode.data) {

            currentNode = currentNode.left;
        }
        else if (target > currentNode.data) {

            currentNode = currentNode.right;

        } else {
            break;
        }

    }

    return closest;


}

var x = closestBST(node, 21)
console.log(x);