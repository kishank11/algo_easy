function generateDocument(characters, document) {
    for (const char of document) {
        const docFreq = countChar(char, document)
        console.log(char)
        const charFreq = countChar(char, characters)
        if (docFreq > charFreq) return false
    }
    return true
}

function countChar(character, target) {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++
    }
    return frequency;
}

console.log(generateDocument(
    "helloworldO ",
    "hello wOrld"
))