// triangle pattern

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// inverted
let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = n; j >= i; j--) {
    str += "*";
  }
  console.log(str);
}
