"use strict";

// Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.

const n = +prompt("Enter the number");
const m = +prompt("Enter the number");
let message;

if (isNaN(n) || isNaN(m)) {
  message = "Incorrect number";
} else if (n === m || n + 1 === m || n === m + 1) {
  message = "There is no number in the range between your numbers";
} else {
  const min = Math.min(n, m);
  const array = [];
  for (let index = min + 1; index < Math.max(n, m); index++) {
    array.push(index);
  }
  message = array;
}
alert(message);
