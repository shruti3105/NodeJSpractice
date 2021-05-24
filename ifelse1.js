let size = 5;
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;
let num = 0;
for (let index = 0; index < size; index++) {
  num = Math.floor(Math.random() * 900 + 100);
  if (num > max) max = num;
  if (num < min) min = num;
}
console.log("Minimum number: " + min);
console.log("Maximum number: " + max);
