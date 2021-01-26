"use strict";

import { users } from "./users.js";
/*
2) Массивы
2.1 Написать функцию которая находила бы первый и последний индекс 
вхождения в массив переданного числа (запросить у пользователя). 
И выводила  в виде [[FIRST_INDEX], [LAST_INDEX]].
Если такого числа нет - выводить вместо индексов -1 [-1,-1].

Например

Массив = [5,7,7,8,8,10], искомое число = 6
На выходе: [-1,-1]


Массив = [5,7,7,8,8,10], искомое число = 8
На выходе: [3,4]
*/

const searchNumber = +prompt("Enter number");

const searchFirstAndLastIndex = (array, searchNumber) => {
  let arrayIndex = [];

  const firstIndex = array.indexOf(searchNumber);
  arrayIndex.push(firstIndex);

  const lastIndex = array.length - 1 - array.reverse().indexOf(searchNumber);
  lastIndex !== array.length ? arrayIndex.push(lastIndex) : arrayIndex.push(-1);
  return arrayIndex;
};
console.log(
  "Task-1:",
  searchFirstAndLastIndex([8, 7, 7, 8, 10, 10, 20], searchNumber)
);

/*
2.2 
Пересечение массивов
Дано два массива, напишиите функцию для вычисления их пересечения.

Например: 
arr1 = [1,2,2,1], arr2 = [2,2]. 
Out =  [2,2].
*/
let arr1 = [5, 1, 2, 2, 1];
let arr2 = [1, 2, 2, 2, 22, 1, 7];
const arrayIntersection = (arr1, arr2) => {
  return arr1.filter((value) => arr2.includes(value));
};
console.log("Task-2:", arrayIntersection(arr1, arr2));

/*
2.3
Написать функцию, которая принимает два массива и индекс. 
(arr1, arr2, index) =>
Возвращает новый массив в котором в первый массив 
по переданному индексу записывается второй массив.

Например: 

 ([1,2,3,4,5],[6,7,8],1) => [1,6,7,8,2,3,4,5]

Порядок после вставки должен сохраняться
Первый и второй массивы не должны изменяться
*/

let newArray;
const arrayAddArrayOnIndex = (arr1, arr2, index) => {
  newArray = [...arr1];
  return newArray.splice(index, 0, ...arr2);
};
arrayAddArrayOnIndex(arr1, arr2, 2);
console.log("Task-3:", newArray);
console.log("arr1", arr1);
console.log("arr2", arr2);

/*
2.4 
Отсортировать массив из первого задания в порядке убывания id
*/

const sortById = (a, b) => b.id - a.id;
console.log("Task-4:", users.sort(sortById));

/*
2.4 *
Отсортировать массив из первого задания в порядке убывания даты регистрации (registrationDate)
*/
const sortByRegistrationDate = (a, b) => {
  if (a.registrationDate > b.registrationDate) return -1;
  if (a.registrationDate < b.registrationDate) return 1;

  return 0;
};
console.log("Task-4*:", users.sort(sortByRegistrationDate));
