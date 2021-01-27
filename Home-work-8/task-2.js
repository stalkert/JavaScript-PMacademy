"use strict";

/*
2)  Реализовать функцию flatWhite, которая будет принимать двумерный массив и
делать из него одномерный.

 Подразумевается использование rest
*/

const assert = require("assert");

function flatWhite(myArray) {
  return [...myArray.flat()];

  // myArray.join().split(','); - для багатомірного масиву
}

assert.deepStrictEqual(flatWhite(["doppio", ["hot"], "milk"]), [
  "doppio",
  "hot",
  "milk",
]);

assert.deepStrictEqual(flatWhite([["espresso", "hot"], "milk"]), [
  "espresso",
  "hot",
  "milk",
]);

console.log("Looks good");
