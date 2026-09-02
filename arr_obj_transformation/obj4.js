const students = [
  { id: 1, name: "Aman", marks: [80, 75, 90] },
  { id: 2, name: "Riya", marks: [95, 88, 92] },
  { id: 3, name: "Karan", marks: [60, 70, 65] },
  { id: 4, name: "Neha", marks: [45, 55, 50] },
];

/*
Transform every student into:
{
  id: ...,
  name: ...,
  totalMarks: ...
}
*/

let arr = students.map((e) => {
  let s = e.marks.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return { id: e.id, name: e.name, totalMarks: s };
});

console.log(arr);

let arr1 = students.map((e) => {
  let s =
    e.marks.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / e.marks.length;
  return { name: e.name, averageMarks: s };
});

console.log(arr1);

/*
Add a passed property to every student based on whether their average is at least 55.
*/

let arr2 = students.map((e) => {
  let s =
    e.marks.reduce((acc, curr) => {
      return acc + curr;
    }, 0) / e.marks.length;

  return { ...e, passed: s>=55 }
})
console.log(arr2);

/*
Transform the array into an object where the student's id is the key and their average marks are the values.
*/

let arr3 = students.reduce((acc, curr, index) => {
  let s = curr.marks.reduce((acc, curr) => { return acc + curr }, 0) / curr.marks.length;

  acc[curr.id] = s;
  return acc;
}, {})

console.log(arr3)

/*
Create an object containing the total salary paid by each department.
*/

