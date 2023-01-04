function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a, b) => a - b);
    let currentChange = 0;
    for (const coin of coins) {
        console.log(coin)
        console.log(coins)
        if (coin > currentChange + 1) return currentChange + 1;
        currentChange += coin;
    }
    // for (let i = 0; i < coins.length; i++) {
    //     const coin = coins[i]
    //     console.log(coin)
    //     console.log(currentChange)
    //     console.log(coins)
    //     if (coin > currentChange + 1) return currentChange + 1;
    //     currentChange += coin;
    // }
    return currentChange + 1;
}


var x = nonConstructibleChange([5, 3, 2, 6])
console.log(x)