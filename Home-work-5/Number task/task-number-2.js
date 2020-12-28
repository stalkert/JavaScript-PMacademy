"use strict";

// Запросить у пользователя два числа - вывести случайное целое число в этом диапазоне.

const firstNumber = prompt("Enter the number");
const secondNumber = prompt("Enter the number");

let message;

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  message = "Incorrect number";
} else if (firstNumber && secondNumber) {
  const maxNumber = Math.max(firstNumber, secondNumber);
  const minNumber = Math.min(firstNumber, secondNumber);
  message = getRandomIntInclusive(minNumber, maxNumber);
} else {
  message = "Try again";
}

alert(message);
