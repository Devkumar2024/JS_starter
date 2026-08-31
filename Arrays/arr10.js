// reduce method :: processes full array to generate a result.
// let final_result = array.reduce((Accumulator, CurrentValue, Index, Array) => {
//     // Accumulator mein pehle ka result pada hota hai
//     // CurrentValue array ka current element hai
//     return updated_Accumulator; // Naya value wapas accumulator mein daalo
// }, initial_Value); // <--- Yeh bahut IMPORTANT hai!

// Total sum
let arr = [10, 100, 1011, 12, 34, 432];

let sum = arr.reduce((Accumulator, current) => {
  return Accumulator + current;
}, 0 ); /* Initial value when arr starts */

console.log("Sum of elements : " + sum);
// console.log(typeof sum);

// Max element
let max = arr.reduce((Accumulator, current) => {
  return Accumulator > current ? Accumulator : current;
}, arr[0]); /* initial value as we have to comapre elements */

console.log(max);