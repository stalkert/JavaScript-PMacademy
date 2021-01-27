"use strict";

/* 
3) Реализовать функцию extendWith, которая будет принимать аргументом два
объекта {} и объединять их в один, где первый

* объект имеет больше приоритет с точки зрения одинаковых полей чем второй
(смотрите примеры assert).
*/

const assert = require("assert");

function extendWith(firstObj, secondObj) {
  return { ...secondObj, ...firstObj };
}

assert.deepStrictEqual(
  extendWith(
    { flatWhite: ["doppio", "hot", "milk"], isValid: true },

    { isValid: false, additionalProp: { thisIsGoodProp: 123 } }
  ),

  {
    flatWhite: ["doppio", "hot", "milk"],
    isValid: true,
    additionalProp: { thisIsGoodProp: 123 },
  }
);

assert.deepStrictEqual(
  extendWith(
    { isValid: false, myMax: 9990 },

    { isValidos: false, myMin: 8999 }
  ),

  { isValid: false, myMax: 9990, isValidos: false, myMin: 8999 }
);

console.log("Looks good");
