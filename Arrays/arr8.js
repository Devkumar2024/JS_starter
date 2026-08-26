// Filter in Array
// the game is map works on every element and return result in new array and filter works as a sieve, keep only those elements which pass the condition

// let newArray = oldArray.filter((element, index, array) => {
//     return condition;
// });

let arr = [1,342,60,90,7,6,5,10];

let even_arr = arr.filter((a) => {
  return a % 2 == 0;
});
console.log(even_arr);

// Result if map is used 
// [
//   false, true,  false,
//   true,  false, true,
//   false, true,  false
// ]

let a = [10, 20, 30, 40, 50];

let result = a.filter((element, index, array) => {
    return element > array[0] && index % 2 === 0;
});

console.log(result);
