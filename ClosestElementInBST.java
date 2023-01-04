class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode(int val) {
        this.val = val;
    }
}

class ClosestElementInBST {

    private static int findClosestValue(TreeNode node, int target) {
        TreeNode currentNode = node;
        System.out.println(node.val);
        int closestValue = currentNode.val;
        double minDiff = Double.MAX_VALUE;

        while (currentNode != null) {
            double currentDiff = Math.abs(target - currentNode.val);
            if (currentDiff < minDiff) {
                minDiff = currentDiff;
                closestValue = currentNode.val;
            }
            if (target < currentNode.val) {
                currentNode = currentNode.left;
            } else if (target > currentNode.val) {
                currentNode = currentNode.right;
            } else {
                break;
            }
        }
        return closestValue;
    }

    public static void main(String[] args) {
        TreeNode node = new TreeNode(9);
        node.left = new TreeNode(4);
        node.right = new TreeNode(17);

        node.left.left = new TreeNode(3);
        node.left.right = new TreeNode(6);
        node.left.right.left = new TreeNode(5);
        node.left.right.right = new TreeNode(7);

        node.right.right = new TreeNode(22);
        node.right.right.left = new TreeNode(20);

        System.out.println(findClosestValue(node, 18));
    }
}