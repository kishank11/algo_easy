package main

import "fmt"

func TwoSumArray(array []int, target int) []int {

	for i := 0; i < len(array); i++ {
		firstNum := array[i]
		for j := i + 1; j < len(array); j++ {
			secondNum := array[j]
			if firstNum+secondNum == target {
				return []int{firstNum, secondNum}
			}
		}
	}

	return []int{}

}

func main() {
	var input1 = []int{0, 6, 7, 3}
	target := 3
	var x = []int{}
	x = TwoSumArray(input1, target)
	fmt.Println(x[0], x[1])
}
