const prompt = require("prompt-sync")();

let number = prompt("Enter a number: ");
let fact = 1;
if (number == 0 || number == 1) {
  console.log(number + "! = " + 1);
} else {
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(number + "! = " + fact);
}
