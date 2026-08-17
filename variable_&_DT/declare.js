// // MODE 1: SLOPPY (Default)
// function sloppyFunction() {
//     // Internal: JS checks phonebook for 'car'. Not found.
//     // Internal: JS says "Ok, I'll attach it to window".
//     car = "Tesla";
// }

// sloppyFunction();

// // Internal: Since 'car' is just a property of 'window',
// // the phonebook lookup succeeds!
// console.log(window.car); // Outputs: "Tesla"
// // The program runs perfectly fine. No error ever happens.

let b = 5 + 5 + "10";
// 1. Engine goes left-to-right: 5 + 5 = 10 (Number)
// 2. Now engine sees 10 + "10" (Number + String)
// 3. Output: "1010" (String!)

let a = "10" + 5 + 5;
// 1. Engine goes left-to-right: "10" + 5 = "105" (String)
// 2. Now engine sees "105" + 5 = "1055" (String)
// 3. Output: "1055" (String!)
console.log(a, b);
