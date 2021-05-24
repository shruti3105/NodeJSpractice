var day = prompt("Enter the day: ");
var month = prompt("Enter the month: ");
var startDate = new Date("2021-03-20");
var endDate = new Date("2021-06-20");

if (
  day > getDate(startDate) &&
  day < getDate(endDate) &&
  month > getMonth(startDate) &&
  getMonth(endDate)
)
  console.log(true);
else console.log(false);
