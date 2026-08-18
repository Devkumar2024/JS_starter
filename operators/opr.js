let price = 1000;
let qty = 3;

let totalcost = price * qty;
let discount = totalcost * 0.1;
let final_price = totalcost - discount;

console.log("Final price : ", final_price);

let a = 5;
console.log(a);
a = a + 5;
console.log(a);
a += 5; // a = a + 5;
console.log(a);

a -= 3;
console.log(a);

a *= 2; // a = a * 2;
console.log(a);

a /= 3; // a = a / 3;
console.log(a);

a %= 3; // a= a % 2;
console.log(a);

a **= 3; // a = a ** 3;
console.log(a);
