package main

type SpecialArray []interface{}

// Tip: Each element of `array` can either be cast
// to `SpecialArray` or `int`.
func ProductSum(array []interface{}) int {
	// Write your code here.

	return helper(array, 1)
}
func helper(array SpecialArray, multiplier int) int {
	sum := 0
	for _, el := range array {
		if cast, ok := el.(SpecialArray); ok {
			sum += helper(cast, multiplier+1)

		} else if cast, ok := el.(int); ok {
			sum += cast
		}
	}
	return sum * multiplier
}

func main() {

	x := []interface{}{10, 20, 30, 40, 8}
	x = append(x, 4)
	print(ProductSum(x))
}
