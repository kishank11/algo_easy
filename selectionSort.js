
function selectionSort(array) {
    // Write your code here.
    let i = 0
    while (i < array.length - 1) {
        let j = i;
        for (let k = i + 1; k < array.length; k++) {

            console.log(k)
            if (array[j] > array[k]) { j = k }

        }
        swap(i, j, array)

        i++;

    }
    return array;
}
function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp
}
const y = selectionSort([1, 4, 2, 3])
console.log(y)


