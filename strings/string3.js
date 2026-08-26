// string has index
const str = "Dev kumar";

console.log("Length of the string str is = ", str.length);
// console.log("Last character of string = ", str[str.length-1])
// Looping through indexes
// for (let i = 0; i < str.length; i++) {
//   console.log(`Index ${i}: ${str[i]}`);
// }
let new_str = ""; // string has undefined bydef, "" nhi kara to undef + str append
for (let ch of str) {
  new_str += ch;
}

console.log(new_str);

// for in takes extra computations, trvesrses full prototype chain, all propety names are converted to string
// index value is also of string type here
for(let index in str){
    console.log("Type : ", index, typeof index + " , " + str[index],  typeof str[index]);
}

console.log();

// general for loop index is number
 for (let i = 0; i < str.length; i++) {
  //  console.log(`Index ${i}: ${str[i]}`);
   console.log("Type : ", i, typeof i + " , " + str[i],  typeof str[i]);
 }

