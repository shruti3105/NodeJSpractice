const prompt = require("prompt-sync")();

let n = prompt("Enter power of 2: ");
let power = Math.pow(2, n);

for (let i = 0; i <= n; i++) {
  console.log(Math.pow(2, i));
}
