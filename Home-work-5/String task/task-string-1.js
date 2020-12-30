"use strict";

// Запросить  у пользователя две строки, найти сколько раз повторяется вторая в первой. Вывести индексы всех вхождений.
// prompt("Enter the string");

const firstString = prompt("Введите строку");
const secondString = prompt("Введите строку");

if (firstString === null || secondString === null) {
  alert("Недостаточно данных");
} else {
  let arrayIndex = [];
  let total = 0;
  let index = 0;

  while (firstString.includes(secondString, index)) {
    total++;
    let indexStartRepeat = firstString.indexOf(secondString, index);
    arrayIndex.push(indexStartRepeat);
    index = indexStartRepeat + secondString.length;
  }
  alert(
    total !== 0
      ? `Количество повторений: ${total}. Идексы входов: ${arrayIndex} `
      : " Нет совпадений"
  );
}
