// function keyword and function name is used, sum pf items upto n
function sumton(n) {
  if (n < 0) {
    console.log("Invalid input");
    return -1;
  }

  return (n * (n + 1)) / 2;
}

const ip_Num = 10;
const result = sumton(ip_Num);

if(result !== -1){
    console.log("The sum upto ", ip_Num , " is : ", result);
}
