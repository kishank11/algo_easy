def nodeDepths(root,depth=0):
    if root is None:
        return 0
    return depth +nodeDepths(root.Left,depth+1) + nodeDepths(root.Right,depth=+1)


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.Left = None
        self.Right = None


root =BinaryTree(2)
root.Left= BinaryTree(3)
root.Right= BinaryTree(14)


print(nodeDepths(root))