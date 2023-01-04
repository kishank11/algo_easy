class Node:
    def __init__(self,value):
        self.value= value
        self.left = None
        self.right= None


def BST(tree,target):
    return BSTHelper(tree,target,tree.value)


def BSTHelper(tree,target,closest):
    currentNode= tree
    while currentNode is not None:
        if(abs(target- closest) > abs(target- currentNode.value)):
            closest= currentNode.value
        if(target < currentNode.value):
            currentNode=currentNode.left
        elif(target >currentNode.value):
            currentNode= currentNode.right
        else:
            break
    return closest


root = Node(12)
root.left= Node(6)
root.right= Node(14)
root.left.left= Node(3)

print(BST(root,5))