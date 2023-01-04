def sortedSquares(array):
    sortedSquaresArray = [0 for _ in array]
    for idx in range(len(array)):
        value = array[idx]
        sortedSquaresArray[idx] = value*value
    sortedSquaresArray.sort()
    return sortedSquaresArray


print("Enter/Paste your content. Ctrl-D or Ctrl-Z ( windows ) to save it.")
my_list = []
n = int(input('Enter size of the list:\n'))

for i in range(n):
    temp = int(input('Enter number to add to my list:\n'))
    my_list.append(temp)

ans = sortedSquares(contents)
print(ans)
