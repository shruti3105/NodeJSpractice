var year = prompt("Enter a year: ");
var flag;
if (year % 400 == 0) flag = true;
if (year % 100 == 0) flag = false;
if (year % 4 == 0) flag = true;
else flag = false;

if (flag) console.log(year + " is a leap year.");
else console.log(year + " is not a leap year.");
