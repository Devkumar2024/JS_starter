// Array slice and splice {imp}
let arr = [1, 2, 3, 4, 5, 6, 67, 78, 89, 1100];
// let New_arr = arr_name.slice(start_index, end_index);
// let a = arr.slice(1, 4);
// console.log(arr); // No changes in original array
// console.log(a); // slice stores result : 1 to 4-1 :: 3rd index  into a

// arr_name.splice(index_value, #elements to splice);
// First format, REMOVAL MODE
arr.splice(3, 2); // chnges in orginal array, 3rd index pe jao 2 elements ko hata do
console.log(arr);

// 2ND MODE :: addition mode
arr.splice(3, 2, 100, 100, 100, 100);  //3 pe jao 2 splice karo and baaki ke element push maardo uss jagah se start krke
console.log(arr);

arr.splice(5, 0, 1, 1, 1);  //Go to 5th index, element splice aand add 3 1s.
console.log(arr);