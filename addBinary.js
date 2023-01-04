class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);



node.left.left = new Node(4);
node.left.left.left = new Node(8);
node.left.left.right = new Node(9);


node.left.right = new Node(5);
node.left.right.left = new Node(10);


node.right.right = new Node(7);
node.right.left = new Node(6);

function branchSums(root) {
    const sums = [];
    console.log(root)
    calculateBranchSums(root, 0, sums);

    return sums;
    // Write your code here.
}

function calculateBranchSums(node, runningSum, sums) {
    if (!node) return;
    console.log(node.data)
    const newRunningSum = runningSum + node.data;

    if (!node.left && !node.right) {
        sums.push(newRunningSum);
        console.log(newRunningSum)
        return
    }
    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}

console.log(branchSums(node))