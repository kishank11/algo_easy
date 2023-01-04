def selectionSort(array):
    i = 0
    while i < len(array) - 1:
        j = i
        for k in range(i+1, len(array)):
            if (array[j] > array[k]):
                j = k
        swap(i, j, array)
        i += 1
    return array


def swap(i, j, array):
    array[i], array[j] = array[j], array[i]


y = selectionSort([1, 4, 2, 3])
print(y)
