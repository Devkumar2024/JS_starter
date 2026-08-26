// Array destructing
let details = ["Dev K", 23, "Punjab", "India"];
let [name, age, state, country] = details;
console.log(country);

// def value, if null is written after 3 then null will be assigned no def value
let arr = [1, 2, 3];
let [a, b, c, d = 20] = arr;
console.log(d);

// returning multiple stuff from the function also to unpack array returned from a function
// return (["Dev", 23]);
// let [name, age] = getaUser();

// usage with map
let students = [
  ["Dev", 76],
  ["Aman", 78],
  ["Aditi", 67],
  ["Himanshu", 100],
  ["Jasmeet", 16],
  ["Sagar", 59],
];

students.map(([name, marks]) => {
  console.log(name, marks);
});

// nested decinstruction
let data = ["Dev K", 23, ["Punjab", "India"]];
let[Name, Age, Loc] = data;
console.log(Loc);