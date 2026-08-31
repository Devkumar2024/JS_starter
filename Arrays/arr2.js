// fill function
let a = [10];
// constructor method of initialization
let arr = new Array(20).fill(10);

console.log(arr.length + "\n");
console.log(typeof arr);
console.log(typeof a);
let b = [];

for (let element of arr) {
  b.push(arr[element]);
}
console.log(b);

// iterates full array 20 times
