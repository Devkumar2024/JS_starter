// faltten a 2d array

let arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

let flat = arr.reduce((Acc, curr) => {
  return [...Acc, ...curr];
  // return Acc.concat(curr);
}, []);

console.log(flat);
