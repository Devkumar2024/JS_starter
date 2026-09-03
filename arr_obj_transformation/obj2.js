/*
const scores = {
  Rahul: 85,
  Priya: 92,
  Amit: 78
};
[
  { name: "Rahul", score: 85 },
  { name: "Priya", score: 92 },
  { name: "Amit", score: 78 }
]
 */

const scores = {
  Rahul: 85,
  Priya: 92,
  Amit: 78,
};

let p = (Object.values(scores));
let s = Object.keys(scores);
let arr = s.reduce((acc, curr_val, index) => {
  acc[index] = {name: curr_val, score: p[index]};
  return acc;
}, []);

// let arr = Object.keys(scores).map((ele) => ({
//   name: ele,
//   score: scores[ele],
// }));

console.log(arr);
