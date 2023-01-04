package main

func BinarySearch(array []int, target int) int {
	// Write your code here.
	return helper(array, target, 0, len(array)-1)
}

func helper(array []int, target, left, right int) int {
	if left > right {
		return -1
	}
	middle := (left + right) / 2
	potentialMatch := array[middle]
	if target == potentialMatch {
		return middle
	}
	
	 if target < potentialMatch {
		return helper(array, target, left, middle-1)
	}
	return helper(array, target, middle+1, right)
}
func main() {
	x := []int{1, 2, 3, 4, 5}
	print(BinarySearch(x, 3))
}
