let arr1 = ["dev", "Kumar", "constextine"];
let arr2 = [1,2,3,4,5,6,8];

// let b = arr1.concat(arr1, arr2); // no changes in original arrays
// console.log(b);
// console.log(arr1);

// concat method is udes less inbstad spread operator(...arr_name) is used
let b = [...arr1, ...arr2];
console.log(b);