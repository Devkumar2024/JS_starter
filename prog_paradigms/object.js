// pp
let arr = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("\n\n");

// functional method, depend on imternal implementation which we do not know how stuff works
arr.map((Element) => {
  console.log(Element);
});
