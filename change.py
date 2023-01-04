
def change(coins):
    coins.sort();
    currentChange=0;
    for coin in coins:
        if coin > currentChange+1:
            return currentChange+1;
        else:
            currentChange=currentChange+coin;
    return currentChange;
        

x= change([1,3,4,5]);
print(x);