"use strict";

const month = prompt("Enter the month");
const dataNumber = Number(month);
let data;
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

if (typeof dataNumber === "number" && dataNumber >= 1 && dataNumber <= 12) {
  data = months[month - 1];
} else {
  const dataStringIndex = months.findIndex(
    (element) => element === month.toLowerCase()
  );
  data = dataStringIndex + 1;
}
alert(data !== 0 ? data : "You have entered wrong data, please try again");
