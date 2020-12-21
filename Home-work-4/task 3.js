"use strict";

/*3. Запросить у пользователя номер месяца через prompt. 
Проверить тип, если пользователь ввел строку, то принимать значения “January, February etc.” 
Выводить  alert с номер этого месяца (January = 1); 
Если же введено было число - кидать в alert наименование месяца (введено 1 - вывести January); 
По желанию  - сделать задачу с минимальным использованием switch/case.
*/

const month = prompt("Enter the month");
const data = Number(month);

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

if (typeof data === "number" && data >= 1 && data <= 12) {
  alert(months[month - 1]);
} else {
  switch (month) {
    case "january":
      alert("1");
      break;

    case "february":
      alert("2");
      break;

    case "march":
      alert("3");
      break;

    case "april":
      alert("4");
      break;

    case "may":
      alert("5");
      break;

    case "june":
      alert("6");
      break;

    case "july":
      alert("7");
      break;

    case "august":
      alert("8");
      break;

    case "september":
      alert("9");
      break;

    case "october":
      alert("10");
      break;

    case "november":
      alert("11");
      break;

    case "december":
      alert("12");
      break;

    default:
      alert("You have entered wrong data, please try again");
  }
}
