const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");
let isPrime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
  }
}
if (isPrime) console.log(n + " is a prime number!");
else console.log(n + " is not a prime number!");
