// how many times item places in cart
let items = [
  "Apple",
  "vanilla",
  "Apple",
  "vanilla",
  "Apple",
  "Apple",
  "banana",
  "Orange",
  "Orange",
];

let count = items.reduce(
  (Acc, current) => {
    if (Acc[current]) {
      Acc[current] = Acc[current]+ 1;
    } else {
      Acc[current] = 1;
    }

    return Acc;
  },
  {} /* Empty object */,
);

console.log(count);