package main

import "fmt"

type BinaryTree struct {
	Value int
	Left  *BinaryTree
	Right *BinaryTree
}

func BranchSums(root *BinaryTree) []int {
	sums := []int{}
	calculateBranchSums(root, 0, &sums)
	return sums
}

func calculateBranchSums(node *BinaryTree, runningSum int, sums *[]int) {
	if node == nil {
		return
	}
	runningSum += node.Value
	if node.Left == nil && node.Right == nil {
		*sums = append(*sums, runningSum)
		return
	}
	calculateBranchSums(node.Left, runningSum, sums)
	calculateBranchSums(node.Right, runningSum, sums)
}
func main() {

	newTree := BinaryTree{1, nil, nil}
	newTree.Left = &BinaryTree{2, nil, nil}
	newTree.Right = &BinaryTree{3, nil, nil}
	newTree.Left.Left = &BinaryTree{4, nil, nil}
	newTree.Left.Right = &BinaryTree{5, nil, nil}
	newTree.Right.Left = &BinaryTree{6, nil, nil}
	newTree.Right.Right = &BinaryTree{7, nil, nil}
	fmt.Println(BranchSums(&newTree))
}
