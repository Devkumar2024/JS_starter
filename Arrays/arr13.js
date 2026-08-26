// Find method in JS
// let newArray = oldArray.find((element, index, array) => {
//     return condition;
// });

let a = [1, 2, 3, 4, 5];

let result = a.filter((element, index, array) => {
  return element % 2 === 0;
});

console.log(result);

// returns one element only
let r = a.find((element, index, array) => {
  return element % 2 === 0;
});
let check_even = a.some((element, index, array) => {
  return element % 2 === 0;
});

console.log(r);
console.log(check_even);
// some :: At least ek condition to satisfy kare, one that base it returns true or false

// let newArray = oldArray.some((element, index, array) => {
//     return condition;
// });

// every :: Kya array ka HAR EK ELEMENT satisfies the condition
// let newArray = oldArray.every((element, index, array) => {
//     return condition;
// });

let check_ev = a.every((element, index, array) => {
  return element % 1 === 0;
});

console.log(check_ev);
