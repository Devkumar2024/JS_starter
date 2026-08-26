// Fat arrow function and anonymus function
const n = 100;


// we have stored the result in s, s is not function name, therefore this is anonymous function example
let s = () => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log("Sum = ", s());
// s vs s(), while s refernces the function object, s() triggers the body and gets the reurn value of the function.   

