package main

import "fmt"

type Binary struct {
	Value       int
	Left, Right *Binary
}

func NodeDepths(root *Binary) int {
	return nodeDepthsHelper(root, 0)
}

func nodeDepthsHelper(root *Binary, depth int) int {
	if root == nil {
		return 0
	}
	return depth + nodeDepthsHelper(root.Left, depth+1) + nodeDepthsHelper(root.Right, depth+1)
}

func main() {

	newTree := Binary{1, nil, nil}
	newTree.Left = &Binary{2, nil, nil}
	newTree.Right = &Binary{3, nil, nil}
	newTree.Left.Left = &Binary{4, nil, nil}
	newTree.Left.Right = &Binary{5, nil, nil}
	newTree.Right.Left = &Binary{6, nil, nil}
	newTree.Right.Right = &Binary{7, nil, nil}
	fmt.Println(NodeDepths(&newTree))
}
