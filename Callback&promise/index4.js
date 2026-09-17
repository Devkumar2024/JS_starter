let num1 = 9;
let num2 = 9;

// functions are 1st class citizens, means we can pass function as an argument in other functions
function sum() {
  console.log(`Sum = ${num1 + num2} `);
}

// Callback : A function passed in another function as an arguement
function invoke(sum) {
  if (typeof sum === "function") {
    console.log("type of arguement : " + typeof sum);
  }
  sum();
}

invoke(sum);

// anonymous function is a callback function
setTimeout(function(){
    sum()
}, 3000);

// another way, passing function reference
setTimeout(sum, 3000);
