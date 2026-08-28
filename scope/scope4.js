// reusable function

function multiplier(mul) {
  return function (n) {
    return n * mul;
  };
}

const d = multiplier(10);
const e = multiplier(45);
// function factory
console.log(d(45));
console.log(e(45));
