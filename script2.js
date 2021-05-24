// 1ft = 12 in then 42 in = ? ft

let inches = 42;
let feet = inches * (1 / 12);
console.log("42 inches is " + feet + " feet");

//Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
let len_meter = length * 0.3048;
let bre_meter = breadth * 0.3048;
let area = len_meter * bre_meter;
console.log("Area of 60 feet * 40 feet in meters: " + area);

//Calculate area of 25 such plots in acres
console.log("Area of 25 plots in acres: " + 25 * area * 0.000247105);
