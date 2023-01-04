function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    if (!fastest) reverseArrayInPlace(redShirtSpeeds);
    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const rider1 = redShirtSpeeds[idx];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
        totalSpeed += Math.max(rider1, rider2);

    }
    return totalSpeed;
}

function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;
    while (start < end) {
        const temp = array[start];
        array[start] = array[end];

        array[end] = temp;
        start++;
        end--;
    }
}


console.log(tandemBicycle([2, 3, 4], [7, 9, 1], true))