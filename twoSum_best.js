function twoNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);
    console.log(array)
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right]
        if (currentSum === targetSum) {
            return [array[left], array[right]];

        } else if (currentSum < targetSum) {
            left++;
        }
        else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}



const ans = twoNumberSum([2, 5, 1, 7, 9], 10)
console.log(ans)