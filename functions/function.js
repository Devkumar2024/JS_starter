// function keyword and function name is used, sum pf items upto n
// callback function :: function passed as an arguement to another function, like jhon doe in console log
function Jhon_doe(num) {
  let sum = 0;
  if (num < 0) {
    console.log(`Inavlid Input`);
    return -1;
  } else {
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
}

const num = 10;

if (Jhon_doe(num) !== -1) {
  console.log(`Sum of first ${num} natural numbers is ${Jhon_doe(num)}`);
}
