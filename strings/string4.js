// String ppts and methods in Js
let abc = "Dev Kumar";
let def = " B.tech IT";
let ghi = " B.tech CSE";


console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
// remove weekly space of only start and end
console.log(abc.trim());
console.log(abc.concat(def));
console.log(abc.indexOf('a'));  // 7
console.log(abc.charAt(5));
console.log(def.replaceAll("IT", "CSE")); // " B.tech CSE"
console.log(def); // B.tech IT coz def is immutable 

// check Dev is a part of abc
if(abc.includes("Dev")){
    console.log("String consists substring");
}

console.log(abc.slice(2,7));

let str = "Lorem ipsum dolor sit amet consectetur .";
console.log(str.split(" ")); // split on the basis of space