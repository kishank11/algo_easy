package main

import "fmt"

func CaesarCipherEncryptor(str string, key int) string {
	// Write your code here.
	shift, offset := rune(key%26), rune(26)
	runes := []rune(str)
	for i, char := range runes {
		if char >= 'a' && char+shift <= 'z' {
			char += shift
		} else {
			char += shift - offset
		}
		runes[i] = char
	}
	return string(runes)
}

func main() {

	fmt.Println(CaesarCipherEncryptor("xyz", 2))
}
