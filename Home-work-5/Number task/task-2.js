"use strict";

/* Запросить у пользователя два числа, написать функцию при помощи стрелочного синтаксиса и аналог с function expression которая бы возводила первое число в степень второго
 введенного числа, или в степень 2 по умолчанию
*/

const firstNumber = prompt("Enter the number");
const secondNumber = prompt("Enter the number");

let message;

const fun = (arg1, arg2 = 2) => {
  return Math.pow(arg1, arg2);
};

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  message = "Incorrect number";
} else if (secondNumber) {
  message = fun(firstNumber, secondNumber);
} else {
  message = fun(firstNumber);
}

alert(message);

///// function expression

/*const firstNumber = prompt("Enter the number");
const secondNumber = prompt("Enter the number");

let message;

const fun = function (arg1, arg2 = 2) {
  return Math.pow(arg1, arg2);
};

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  message = "Incorrect number";
} else if (secondNumber) {
  message = fun(firstNumber, secondNumber);
} else {
  message = fun(firstNumber);
}

alert(message);*/
