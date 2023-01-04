def nonRepeating(string):
    characterFreq = {}
    for character in string:

        characterFreq[character] = characterFreq.get(character, 0)+1
        # print(characterFreq[character])

    for idx in range(len(string)):
        character = string[idx]
        if characterFreq[character] == 1:
            return idx

    return -1


print(nonRepeating("abcdefabcdefghijklmnopqrstuvwxy"))
