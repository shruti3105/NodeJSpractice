const prompt = require("prompt-sync")();
var input = prompt("Enter input: ");
var value = prompt(
  "Press 1 for feet to inch conversion. Press 2 for inch to feet conversion. Press 3 for feet to meter conversion. Press 4 for meter to feet conversion."
);

switch (input) {
  case "1":
    value = input * 12;
    console.log("Feet to inch:" + value);
  case "2":
    value = input / 12;
    console.log("Inch to feet: " + value);
  case "3":
    value = input * 0.3048;
    console.log("Feet to meter: " + value);
  case "4":
    value = input / 0.3048;
    console.log("Meter to feet: " + value);
}
