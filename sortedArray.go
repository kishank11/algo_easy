package main

import (
	"fmt"
	"sort"
)

func SortedArray(array []int) []int {
	sortedSquares := make([]int, len(array))

	for idx, value := range array {
		sortedSquares[idx] = value * value
	}
	sort.Ints(sortedSquares)
	return sortedSquares
}
func main() {
	var input1 = []int{0, 6, 7, 3}

	var x []int
	x = SortedArray(input1)
	fmt.Println(x)
}
