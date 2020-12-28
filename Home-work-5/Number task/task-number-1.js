"use strict";

// Запросить у пользователя два числа с плавающей точкой - умножить на 0.3 и округлить до ближайшего целого числа.

const firstNumber = prompt("Enter the floating point number");
const secondNumber = prompt("Enter the floating point number");

let message;

const funcNumber = (number) => {
  return Math.round(number * (0.3).toFixed(2));
};

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  message = "Incorrect number";
} else {
  message = `First number: ${funcNumber(
    firstNumber
  )}, Second number: ${funcNumber(secondNumber)}`;
}
alert(message);
