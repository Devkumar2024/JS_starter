// 1. Sum all numbers
const numbers1 = [10, 20, 30, 40];
const totalSum = numbers1.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum); // Output: 100

// 2. Find product of all numbers
const numbers2 = [2, 3, 4, 5];
const totalProduct = numbers2.reduce((acc, curr) => acc * curr, 1);
console.log(totalProduct); // Output: 120

// 3. Find maximum using reduce
const numbers3 = [15, 88, 42, 99, 23];
const maxNum = numbers3.reduce(
  (max, curr) => (curr > max ? curr : max),
  numbers3[0],
);
console.log(maxNum); // Output: 99

// 4. Find minimum using reduce
const numbers4 = [15, 88, 42, 99, 23];
const minNum = numbers4.reduce(
  (min, curr) => (curr < min ? curr : min),
  numbers4[0],
);
console.log(minNum); // Output: 15

// 5. Calculate total cart price
const cart = [
  { item: "Laptop", price: 50000, quantity: 1 },
  { item: "Mouse", price: 500, quantity: 2 },
  { item: "Keyboard", price: 1500, quantity: 1 },
];
const totalCartPrice = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);
console.log(totalCartPrice); // Output: 52500

// 6. Calculate average
const scores = [80, 90, 70, 100];
const average = scores.reduce((acc, curr, index, arr) => {
  acc += curr;
  if (index === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
}, 0);
console.log(average); // Output: 85
