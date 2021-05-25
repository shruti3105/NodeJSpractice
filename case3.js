const prompt = require("prompt-sync")();

let value = prompt("Enter input: ");

switch (value) {
  case "1":
    console.log("Unit");
    break;
  case "10":
    console.log("Ten");
    break;
  case "100":
    console.log("Hundred");
    break;
  case "1000":
    console.log("Thousand");
    break;
  default:
    console.log("Invalid Input!");
}
