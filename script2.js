//Домашня робота 2

// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let test = null;

// if (test > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test', "qwerty", true

// let test = "test";

// if (test === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let test = 10;

// if (test < 10) {
//   console.log(test + 5);
// } else {
//   console.log(test - 5);
// }

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let monthNumber = Number(prompt("Введіть число від 1 до 12"));

// switch (monthNumber) {
//   case 1:
//     alert("Січень");
//     break;
//   case 2:
//     alert("Лютий");
//     break;
//   case 3:
//     alert("Березень");
//     break;
//   case 4:
//     alert("Квітень");
//     break;
//   case 5:
//     alert("Травень");
//     break;
//   case 6:
//     alert("Червень");
//     break;
//   case 7:
//     alert("Липень");
//     break;
//   case 8:
//     alert("Серпень");
//     break;
//   case 9:
//     alert("Вересень");
//     break;
//   case 10:
//     alert("Жовтень");
//     break;
//   case 11:
//     alert("Листопад");
//     break;
//   case 12:
//     alert("Грудень");
//     break;
//   default:
//     alert("Невірне число");
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// let numberOne = Number(prompt("Введіть переше тризначне число"));
// let numberTwo = Number(prompt("Введіть друге тризначне число"));
// let sum = 0;

// if (
//   numberOne >= 100 &&
//   numberOne <= 999 &&
//   numberTwo >= 100 &&
//   numberTwo <= 999
// ) {
//   sum = numberOne + numberTwo;
//   alert(`Сума: ${sum}`);
// } else {
//   alert("Введіть коректні тризначні числа");
// }
