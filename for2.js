const prompt = require("prompt-sync")();

let n = prompt("Enter value of n: ");
let harmonic = 0;

for (let i = 1; i <= n; i++) {
  harmonic += 1 / i;
}
console.log(n + "th harmonic number : " + harmonic);
