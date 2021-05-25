let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);
console.log("A: " + a);
console.log("b: " + b);
console.log("C: " + c);
let op1 = a + b * c;
console.log("A+B*C: " + op1);
let op2 = (a % b) + c;
console.log("(A%B)+C: " + op2);
let op3 = c + a / b;
console.log("C+A/B: " + op3);
let op4 = a * b + c;
console.log("A*B+C: " + op4);

let max = op1;
if (op2 > max) max = op2;
if (op3 > max) max = op3;
if (op4 > max) max = op4;
console.log("Max: " + max);

let min = op1;
if (op2 < min) min = op2;
if (op3 < min) min = op3;
if (op4 < min) min = op4;
console.log("Min: " + min);
