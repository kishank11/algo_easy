package main

import "fmt"

func IsValidSubsequence(array []int, sequence []int) bool {

	seqIdx := 0
	for _, value := range array {
		if seqIdx == len(sequence) {
			break
		}
		if value == sequence[seqIdx] {
			seqIdx += 1
		}

	}
	return seqIdx == len(sequence)
}

func main() {
	var input1 = []int{0, 6, 7, 3}
	var input2 = []int{6, 7, 3}
	var x bool
	x = IsValidSubsequence(input1, input2)
	fmt.Println(x)
}
