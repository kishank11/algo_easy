// Sum of ten natural nos
var arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 5, 9, 0];
var sum = 0;

for (var i = 1; i <= 10; i++) {
  if (arr[i] % 2 === 0) {
    arr.splice(i, 1);
    i--;
  }
}
console.log(arr);
