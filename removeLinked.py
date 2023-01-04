# This is an input class. Do not edit.
class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def removeDuplicatesFromLinkedList(linkedList):
    currentNode = linkedList
    while (currentNode is not None):
        nextDistinctNode = currentNode.next
        while nextDistinctNode is not None and currentNode.value == nextDistinctNode.value:
            nextDistinctNode = nextDistinctNode.next
        currentNode.next = nextDistinctNode
        currentNode = nextDistinctNode
    # Write your code here.
    return linkedList


list = LinkedList(2)
list1 = LinkedList(2)
list2 = LinkedList(3)
list.next = list1
list1.next = list2


x = removeDuplicatesFromLinkedList(list)


while (x.value is not None):
    print(x.value)
    x = x.next
