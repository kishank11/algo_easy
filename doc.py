def generateDocument(characters, document):

    for character in characters:
        docFreq = countChar(character, document)
        charFreq = countChar(character, characters)
        if docFreq > charFreq:
            return False
    return True


def countChar(character, target):
    frequency = 0
    for char in target:
        if char == character:
            frequency += 1
    return frequency


print(generateDocument("helloworld ", "hello wOrld"))
