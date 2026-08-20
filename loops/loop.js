const prompt = require('prompt-sync')();

const secretNumber = 7;
let guess;

while (Number(guess) !== secretNumber) {
    guess = prompt("Guess the number (1-10): ");
    if (Number(guess) < secretNumber) {
        console.log("Too low!");
    } else if (Number(guess) > secretNumber) {
        console.log("Too high!");
    }
}
console.log("You got it! 🎉");