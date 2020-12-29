"use strict";

// Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”

const str = "ECMAScript 2015 (6th Edition, ECMA-262)";

const searchNumber = +str.replace(/\D+/g, "");

alert(searchNumber);
