"use strict";

/* 
4) Реализовать функцию extendWithEndless, которая будет принимать сколько угодно
аргументов, но последний будет выступать главным и переписывать все предыдущие с точки зрения одинаковых параметров (смотрите примеры assert).
*/

const assert = require("assert");

function extendWithEndless() {
  const arr = [...arguments];
  return arr.reduce((prev, value) => ({ ...prev, ...value }), {});
}

assert.deepStrictEqual(
  extendWithEndless(
    { flatWhite: ["doppio", "hot", "milk"], isValid: true },

    { isValid: false, additionalProp: { thisIsGoodProp: 123 } },

    { prop3: true },

    { prop4: true },

    { isValid: [false, false] }
  ),

  {
    flatWhite: ["doppio", "hot", "milk"],

    isValid: [false, false],

    additionalProp: { thisIsGoodProp: 123 },

    prop3: true,

    prop4: true,
  }
);

console.log("Looks good");
