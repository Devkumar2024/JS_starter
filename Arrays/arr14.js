// sort function in JS
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ascending sort
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);

// Descending sort
arr.sort((a, b) => {
  return b - a;
});
console.log(arr);

let str = ["Dev", "arvind", "Aman", "Prabhjot", "sagar"];
// case incensitive
str.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

// for reverse alphabetical order reverse the a,b order inside sort function
console.log(str);

// Object sort
let students = [
  { name: "Dev", marks: 76 },
  { name: "Aman", marks: 78 },
  { name: "Aditi", marks: 67 },
  { name: "Himanshu", marks: 100 },
  { name: "Jasmeet", marks: 16 },
  { name: "Sagar", marks: 59 },
];

students.sort((a, b) => {
  return b.marks - a.marks;
});

console.log(students);
