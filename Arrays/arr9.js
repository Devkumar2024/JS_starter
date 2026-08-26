// generate array with elements only in increasing form and double elements

let arr = [10, 1, 11, 23, 21, 24, 201, 90, 789];

let increasing = arr
  .filter((Element, index, array) => {
    return Element > array[index - 1];
  })
  .map((Element) => (Element *= 2));
console.log(increasing);
