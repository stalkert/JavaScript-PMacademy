/*
1. Створити класс з методом “callMe()” 
який буде підраховувати скільки разів
він був викликаний усіма екземплярами
класу та методом “callCount()” який 
буде повертати скільки разів
метод “callMe” був викликаний
*/

class Counter {
  static total = 0;

  callMe() {
    Counter.total++;
  }
  callCounter() {
    console.log(Counter.total);
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

  #genderPrivate = Person.GENDER.NOT_DEFINED;

  get gender() {
    return this.#genderPrivate;
  }

  set gender(value) {
    if (Object.values(Person.GENDER).indexOf(value) !== -1) {
      this.#genderPrivate = value;
    } else {
      throw new Error("PersonGenderError");
    }
  }
}
/*
3. Створіть класс PersonLog який расширить
 клас Person та додасть до нього readonly
поле logs яке буде збирати лог змін властивостей 
екземпляру класу у вигляді строк формату
`${propertyName}: ${oldValue} ${newValue}`
*/
class PersonLog extends Person {
  constructor() {
    super();

    return new Proxy(this, {
      set(target, propertyName, value) {
        if (!target.logs) {
          Object.defineProperty(target, "logs", { value: [], writable: false });
        }
        target.logs.push(
          `${propertyName}: oldValue: ${target[propertyName]}; newValue: ${value}`
        );
        target[propertyName] = value;
        return true;
      },
    });
  }
}
