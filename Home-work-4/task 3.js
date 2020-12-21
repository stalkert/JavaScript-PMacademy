"use strict";

/*3. Запросить у пользователя номер месяца через prompt. 
Проверить тип, если пользователь ввел строку, то принимать значения “January, February etc.” 
Выводить  alert с номер этого месяца (January = 1); 
Если же введено было число - кидать в alert наименование месяца (введено 1 - вывести January); 
По желанию  - сделать задачу с минимальным использованием switch/case.
*/

const month = prompt("Enter the month");

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
if (typeof month === number && month >= 1 && month <= 12) {
  alert(months[month - 1]);
} else if (typeof month === string) {
} else {
  alert("You have entered wrong data, please try again");
}
