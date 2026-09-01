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


// Write a function that accepts a product object and uses destructuring to calculate its final price from price and discount.


const productA = {
    name: "Mixer",
    price: 5000,
    discount : 10
}
// some extension
const productB = {
    name: "Laptop",
    price: 55000,
    discount: 15
}

// function disc(price, discount) {
//     price = price * ((100 - discount) / 100);
//     return price;
// }
function disc({price, discount}) {
    price = price * ((100 - discount) / 100);
    return price;
}

// let { price:p1, discount:d1 } = productA;
// console.log(disc(p1, d1));
// let { price: p2, discount: d2 } = productB;
// console.log(disc(p2, d2));

console.log(disc(productA));
console.log(disc(productB));

