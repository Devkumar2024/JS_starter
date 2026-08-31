// map does operation on every element of array and creates in new array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Map template ::
// let new_Array = old_Array.map((Element, index, array) => {
//     return something;
// });

// operation on value
let double_arr = arr.map((Element) => {
  return Element * 2;
});
console.log(double_arr);

// element and index passed
let index_sum = arr.map((Element, index) => {
  return `${index + 1}. ${Element * 10}`;
});
console.log(index_sum);

// element, index and array passed
let id = arr.map((Element, Index, Array) => {
  return Element + (3 * Array[Index]);
});
console.log(id);
