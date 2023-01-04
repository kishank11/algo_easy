#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> sortedArray(vector<int> array)
{
    vector<int> sortedSquares(array.size(), 0);
    for (int idx = 0; idx < array.size(); idx++)
    {
        int value = array[idx];
        sortedSquares[idx] = value * value;
    }
    sort(sortedSquares.begin(), sortedSquares.end());
    return sortedSquares;
}
int main()
{

    vector<int> vect{10, 40, 30};

    vector<int> ans = sortedArray(vect);
    for (int i : ans)
    {
        cout << i << endl;
    }
    return 0;
}