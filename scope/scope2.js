// closures : gives access of inner function to outer function even after outer function has finished execution

// data privacy

function add(){
   let c = 0;
// here the problem is c is returned not function, we have to return a function, so after finishing c is immediately discarded.
// IIFE
//    return (function (){
//     c++;
//     return c;
//    })();

   return function (){
    c++;
    return c;
   };
   // now return returns an inner function , Agar value return karoge, toh wo ek simple number ban ke bahar nikal jaayega aur Function execution khatam hote hi uski memory free (garbage collect) ho jaayegi.
}



const count = add();
console.log(count); // returns function not value
console.log(count());
console.log(count());
console.log(count());
