"use strict";

import { users } from "./users.js";

/* 1) Создать хэш таблицу
 Где ключ = user id, а значение - объект user
 Из данного массива users
*/

const myUsersMap = new Map();
users.map((user) => {
  myUsersMap.set(user.id, user);
});
console.log("Task-1:", myUsersMap);

/* 2) Запросить у пользователя id - вывести 
данные по пользователю
*/

const usersId = +prompt("Enter the id");

if (isNaN(usersId)) {
  console.log("Incorrect number");
} else if (usersId === null) {
  console.log(" Try again");
}

const valueUsers = myUsersMap.get(usersId);

if (valueUsers) {
  console.log("Task-2:", valueUsers);
} else {
  console.log(` User with id:${usersId} not found`);
}

/* 3) Запросить у пользователя id,
 есть такой есть - запросить 
 дополнительное поле - адрес. Вывести адрес.*/

const usersIdAddress = +prompt("Enter the id");

if (isNaN(usersIdAddress)) {
  console.log("Incorrect number");
} else if (usersIdAddress === null) {
  console.log(" Try again");
}

const valueUsersAddress = myUsersMap.get(usersIdAddress);

if (valueUsersAddress) {
  let userAddress = prompt("Enter the address");
  userAddress
    ? (valueUsersAddress.address = userAddress)
    : valueUsersAddress.address;
  console.log("Task-3:", valueUsersAddress.address);
} else {
  console.log("Task-3:", ` User with id:${usersIdAddress} not found`);
}

/* 4) Запросить у пользователя ввести название компании 
  - найти пользователя с такой компанией 
  - вернуть объект пользователя.*/

const companyName = prompt("Enter company name");
let workingUser = false;
try {
  myUsersMap.forEach((value) => {
    if (value.company.name.toLowerCase() === companyName.toLowerCase()) {
      workingUser = true;
      console.log("Task-4:", JSON.stringify(value));
    }
  });
  if (!workingUser) {
    console.log("Task-4:", ` User with company name ${companyName} not found`);
  }
} catch (error) {
  console.log("Task-4:", error);
}

/* 5) Сделать каждый property id пользователя 
неудаляемым и запретить его мутацию/изменение.
*/

myUsersMap.forEach((value) => {
  Object.defineProperty(value, "id", { writable: false, configurable: false });
});

const secondUser = myUsersMap.get(2);

try {
  secondUser.id = 5;
} catch (error) {
  console.log("Task-5:", error);
}
console.log("Task-5:", secondUser.id);

try {
  delete secondUser.id;
} catch (error) {
  console.log("Task-5:", error);
}
console.log("Task-5:", secondUser.id);

// /*
// 6) Написать сеттер - чтобы при изменении phone - проверялась
//  валидность номера телефона при помощи регулярного
//  выражения для (ххх) ххх-хх-хх - все х - числа.
//  */

const phoneRegExp = /^\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g;

myUsersMap.forEach((value) => {
  value._phone = value.phone;
  delete value.phone;

  Object.defineProperty(value, "phone", {
    set(phoneNumber) {
      if (phoneNumber.match(phoneRegExp) === null) {
        console.log("Task-6:", `Phone ${phoneNumber} is not correct`);
        return;
      }
      this._phone = phoneNumber;
    },
    get() {
      return this._phone;
    },
  });
});

const firstUser = myUsersMap.get(1);

firstUser.phone = "(066)2372335";

console.log("Task-6: Phone", firstUser.phone);
