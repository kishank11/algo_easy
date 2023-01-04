const animals = {
  1: "dog",
  2: "cat",
};
const animals1 = ["dog", "cat"];

console.log(animals);
for (const key in animals) {
  console.log(animals[key].toUpperCase());
}
