// array methods
let arr = [1, 2, 3, 4, 5, "dev", 54, 543];
// arr.push("Kumar"); // pushes in original array
// console.log(arr);
// let a = arr.pop(); // a stores popped item
// console.log(a);
// //pop changes the original element and pops from last position
// console.log(arr);

// push,pop from back and shift,unshift from front
let b = arr.shift(); // pops from font
console.log(arr);
console.log(b); // shift returns forward popped element

let c = arr.unshift("Constextine"); // pushes from front
console.log(arr);
console.log(c); // unshift returns the no of elements after the forward push