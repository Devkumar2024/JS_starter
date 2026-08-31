// (spread : open & unpack) and (rest : collect and put in var) operator
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ...arr spreads the elements of arr into a new array literal. This creates a brand new array that contains the same values
let bc =[ ...arr];
// cd = arr does not create a new array. It simply makes cd point to the same array object in memory that arr points to.
let cd = arr;
console.log(typeof bc);
console.log(typeof cd);

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
