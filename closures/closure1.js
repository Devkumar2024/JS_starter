// function outerfunction(){
//     function innerfunction(){
//         console.log("Inner function via closure");
//     }

//     return innerfunction;
// }

// const a = outerfunction();
// // Return function
// console.log(a);
// console.log(a());

function printfullname(Fname, Lname){
    function printName(){
        console.log(Fname, Lname);
    }

    return printName;
}

const a = printfullname("Dev", "Kumar");
// Return function
console.log(a);
console.log(a());