"use strict";

/*Написать несколько регулярных выражений применить в поиске по предложенному тексту, можно скопировать отдельно в любой инструмент на подобии https://regexr.com:*/

////////////1. Найти все значения цветов #HEX в  HTML

const findHEXColor = /#([\da-f]{3}){1,2}\b/gi;
const content = document.documentElement.innerHTML;
console.log([...content.match(findHEXColor)]);

/*2.Найти все вхождения номера телефона в стандартном виде 
+(380) 066 666 66 66
 с операторами 067, 068, 096, 097, 098, 050, 066, 095, 099, 063, 073, 093.*/

const findPhoneNumber = /\+?\(?(38)?0\)?(50|68|96|97|98|67|66|95|99|63|73|93)(-|\s|)?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}\b/g;
console.log([...content.match(findPhoneNumber)]);

/////// 3.Написать логику которая находила бы все теги <h1> и заменила их на <h2/>

const body = document.body.outerHTML;
const findTagH1 = /<h1*?>/g;
const replaceH1toH2 = (document.body.outerHTML = body.replace(
  findTagH1,
  "<h2/>"
));

//////////4.Найти все теги <script></script>

const findTagScript = /(<|%3C)script[\s\S]*?(>|%3E)[\s\S]*?(<|%3C)(\/|%2F)script[\s\S]*?(>|%3E)/g;
console.log([...content.match(findTagScript)]);
