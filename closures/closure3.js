function myFunction(power){
    return function(number){
        return number ** power;
    }
}

const cube = myFunction(3);
const ans = cube(2);
console.log(ans);


const square = myFunction(2);
const ans1 = square(2);
console.log(ans1);