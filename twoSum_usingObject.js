function twoNumberSum(array, targetSum) {

    const nums = {};
    for (const num of array) {
        console.log(nums)
        // console.log(num)

        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {

            nums[num] = true;


        }



    }
    return [];
}

const ans = twoNumberSum([2, 5, 1, 7, 9], 10)
console.log(ans)