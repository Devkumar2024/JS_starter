// functions expression assignment
const a = 100,
  b = 100;
let n= function sum(a, b) {
  return (a + b);
};
// js treats function as first class objects
// console.log("Sum of two numbers is : ", n); THIS CODE PRINTS FUNCION ITSELF
console.log("Sum of two numbers is : ", n(a,b)); 
