// // 1 task
// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(
//     `'Выбран «${name}», цена за штуку ${price} кредитов`
// );
// price = 2000;

// console.log(
//     `'Выбран «${name}», цена за штуку ${price} кредитов`
// );
// // 2 task
// const total = 100;
// const ordered = 30;

// if (ordered <= total) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");

// } else {
//     console.log("На складе недостаточно твоаров!");
// }

// //3 task

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
// message = prompt('Хотите залогинится?');
// console.log(message);
// if (message == ADMIN_PASSWORD) {
//     console.log("Добро пожаловать!");

// } else if (message == null) {
//     console.log("Отменено пользователем!");
// } else {
//     console.log("'Доступ запрещен, неверный пароль!");
// }

// // 4 task

// let credits = 23580;
// const pricePerDroid = 3000;
// let count;
// count = prompt('Сколько дронов хотите купить?');
// console.log(count);
// if (count == null) {
//     console.log("Отменено пользователем!");
// }

// if (isNaN(count)) {
//     console.log("Нужно ввести число");
// }
// credits = credits - pricePerDroid * count;
// if (credits > 0) {
//     console.log(`Вы купили ${count} дроидов, на счету осталось ${credits} кредитов.`);
// } else {
//     console.log("Недостаточно средств на счету!");
// }




// // 5 task

// let country;
// country = prompt("Введите страну").toLowerCase();
// console.log(country);
// switch (country) {
//     case 'китай':
//         let countryPrice = 100;
//         console.log(`Доставка в ${country} будет стоить ${countryPrice} кредитов.`);
//         break;

//     case 'чили':
//         countryPrice = 250;
//         console.log(`Доставка в ${country} будет стоить ${countryPrice} кредитов.`);
//         break;

//     case 'австралия':
//         countryPrice = 170;
//         console.log(`Доставка в ${country} будет стоить ${countryPrice} кредитов.`);
//         break;

//     case 'индия':
//         countryPrice = 80;
//         console.log(`Доставка в ${country} будет стоить ${countryPrice} кредитов.`);
//         break;

//     case 'ямайка':
//         countryPrice = 120;
//         console.log(`Доставка в ${country} будет стоить ${countryPrice} кредитов.`);
//         break;

//     default:
//         console.log(`В вашей стране доставка не доступна`);

// }

// // 6 task

// let input;

// let totalNumb = 0;

// do {
//     input = prompt("Введите число");
//     let num;
//     if (isNaN(input) == true) {
//         alert("Ошибка ввода, попробуйте еще");
//     } else {
//         num = Number(input);
//         totalNumb = totalNumb + num;
//     }


// }
// while (input !== null)
// console.log(`Общая сумма чисел равна ${totalNumb}`);