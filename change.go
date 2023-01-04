package main

import (
	"fmt"
	"sort"
)

func change(coins []int) int {
	sort.Ints(coins)

	var currentChange = 0
	for _, coin := range coins {
		if coin > currentChange+1 {
			return currentChange + 1
		}

		currentChange = currentChange + coin

	}

	return currentChange + 1
}

func main() {
	var input1 = []int{1, 6, 7, 3}

	var x = 0
	x = change(input1)
	fmt.Println(x)
}
