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

// current is the current item's value, not its index.
let count = items.reduce(
  (Acc, current) => {
    if (Acc[current]) {
      Acc[current] = Acc[current] + 1;
    } else {
      // create ppt named current and set its value 1.
      Acc[current] = 1;
    }

    return Acc;
  },
  {} /* Empty object */,
);

console.log(count);
