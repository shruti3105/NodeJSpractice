const prompt = require("prompt-sync")();

var value = prompt("Enter the number:- ");

if (value == 1) console.log("Unit");
else if (value == 10) console.log("Ten");
else if (value == 100) console.log("Hundred");
else if (value == 1000) console.log("Thousand");
else console.log("Invalid input!");
