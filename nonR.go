package main

func FirstNonRepeatingCharacter(str string) int {
	// Write your code here.
	characterFrequencies := map[rune]int{}
	for _, char := range str {
		characterFrequencies[char] += 1
	}
	for idx, char := range str {
		if characterFrequencies[char] == 1 {
			return idx
		}
	}
	return -1
}

func main() {

	print(FirstNonRepeatingCharacter("abcdefabcdefghijklmnopqrstuvwxy"))
}
