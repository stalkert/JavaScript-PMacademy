"use strict";

// Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”

const str = "ECMAScript 2015 (6th Edition, ECMA-262)";

const searchNumber = str.match(/\d+/g);

alert(`Знайдені числові значення: ${searchNumber}`);

// Найти все символы в верхнем регистре ECMAScript 2015 (6th Edition, ECMA-262)”

const searchUppercase = str.match(/[A-Z]/g);

alert(`Знайдені великі літери: ${searchUppercase}`);
