// Домашнє завдання

// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentIvan = {
//   name: "Ivan",
//   specialty: "Engineering and technical specialties",
//   averageGrade: 9.7,
//   numberMissed: 2,
//   studentLogInfo: function () {
//     console.group(`${this.name} student info:`);
//     console.log(`Name is : ${this.name}`);
//     console.log(`Specialty is : ${this.specialty}`);
//     console.log(`Average grade is : ${this.averageGrade}`);
//     console.log(`Number of missed classes is : ${this.numberMissed}`);
//     console.groupEnd();
//   },
// };

// const studentArtem = {
//   name: "Artem",
//   specialty: "Pharmacy, Industrial Pharmacy",
//   averageGrade: 10,
//   numberMissed: 1,
// };

// const studentAnn = {
//   name: "Ann",
//   specialty: "Medicine",
//   averageGrade: 11.9,
//   numberMissed: 0,
// };

// studentIvan.studentLogInfo.call(studentIvan);
// studentIvan.studentLogInfo.bind(studentArtem)();
// studentIvan.studentLogInfo.apply(studentAnn);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const infoButton = {
//   showInfo() {
//     console.log("Опис : ", this.info);
//   },
// };

// const htmlInfo = {
//   info: "HTML — це мова розмітки, яка створює основу (каркас) веб-сторінки.",
// };

// const cssInfo = {
//   info: "CSS — це мова стилів, яка відповідає за візуальне оформлення.",
// };

// document
//   .querySelector("#HTML")
//   .addEventListener("click", infoButton.showInfo.bind(htmlInfo));

// document
//   .querySelector("#CSS")
//   .addEventListener("click", infoButton.showInfo.bind(cssInfo));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// function shop(nameProduct, pricePerKg, quantityProduct) {
//   const productInfo = {
//     name: nameProduct,
//     price: pricePerKg * quantityProduct,
//   };
//   return console.log(productInfo);
// }

// shop("banana", 30, 4.5);
// shop("cherry", 58, 1.3);
// shop("jrange", 89, 3.4);
