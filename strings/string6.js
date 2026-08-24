// character repeat
let name = prompt("Enter the full name :: ");
let key = prompt("Enter the string you want to search :: ");

let count = 0;
// for (let ch of name) {
//     // Fixed: toLowercase() -> toLowerCase()
//     if (ch.toLowerCase() === key.toLowerCase()) {
//         count++;
//     }
// }

for(let i in name){ // easier to work with indexes
    // name[i] = to access values at ith index.
    if(name[i].toLowerCase() === key.toLowerCase()){
        console.log("@ Index : ", i);
        count++;
    }
}
console.log("Number of occurrence of " + key + " is : ", count);