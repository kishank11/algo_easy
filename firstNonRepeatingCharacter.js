function firstNonRepeatingCharacter(string) {
    const characterFrequencies = {}
    for (const character of string) {

        if (!(character in characterFrequencies)) {
            characterFrequencies[character] = 0;

        }
        characterFrequencies[character]++


    }
    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];
        console.log(characterFrequencies)
        if (characterFrequencies[character] === 1) return idx;
        //     console.log(characterFrequencies)
    }
    return -1;
}
console.log(firstNonRepeatingCharacter("bcdefabcdefghijklmnopqrstuvwxy"))