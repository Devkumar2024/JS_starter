// (spread : open & unpack) and (rest :: collect and put in var) operator
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...arr);

// combining with some modification using spread
let a = [10, 20, 30];
let b = [30, 40, 50];
let c = [100, ...a, 890, ...b];
console.log(c);

// spread with objects
let student = { name: "Dev", age: 23, marks: 76 };
let new_data = { ...student, marks: 100 };
console.log(new_data);

// REST OPERATOR :: collection purposes
// for destructiom
let [A, B, ...remainig] = c;
console.log(A);
console.log(B);
console.log(remainig);

// Rest in function parameters
function add(...nums) {
  console.log(nums);
}
add(1, 2, 3, 4, 5, 6, 7);
