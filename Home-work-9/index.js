/*
1. Створити класс з методом “callMe()” 
який буде підраховувати скільки разів
він був викликаний усіма екземплярами
класу та методом “callCount()” який 
буде повертати скільки разів
метод “callMe” був викликаний
*/

class Counter {
  total = 0;

  callMe() {
    this.total++;
  }
  callCounter() {
    console.log(this.total);
  }
}

/*
2. Зробіть так щоб класс екземпляри класу Person
не могли мати значення в полі gender
классу Person відмінне від тих значень,
що задані в статичному полі GENDER класу Person. 
Увипадку коли буде спроба встановити значення
поля gender відмінне від тих що встановленні в 
полі GENDER, має бути створена власна помилка PersonGenderError
*/

class Person {
  static GENDER = {
    NOT_DEFINED: 0,
    MAN: 1,
    WOMAN: 2,
  };

  name = "NoName";
  gender = Person.GENDER.NOT_DEFINED;

  constructor(name, gender) {}
}

/*
3. Створіть класс PersonLog який расширить
 клас Person та додасть до нього readonly
поле logs яке буде збирати лог змін властивостей 
екземпляру класу у вигляді строк формату
`${propertyName}: ${oldValue} ${newValue}`
*/
