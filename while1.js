const prompt = require("prompt-sync")();

let n = prompt("Enter the value:- ");

let i = 1;
while (i <= n && Math.pow(2, i) <= 256) {
  console.log(Math.pow(2, i));
  i++;
}
