def runLengthEncoding(string):
    encodedCharacters = []
    currentlen = 1
    for i in range(1, len(string)):
        currentChar = string[i]
        prevChar = string[i-1]
        if currentChar != prevChar or currentlen == 9:
            encodedCharacters.append(str(currentlen))
            encodedCharacters.append(prevChar)
            currentlen = 0
        currentlen += 1
    encodedCharacters.append(str(currentlen))
    encodedCharacters.append(string[len(string)-1])
    return "".join(encodedCharacters)


print(runLengthEncoding("ahjsdndidijidddddd"))
