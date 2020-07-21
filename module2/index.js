// // 1 task

// const logItems = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(i + 1 + " " + array[i]);

//     }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// // 2 task

// const calculateEngravingPrice = function(message, pricePerWord) {
//     console.log(message);
//     pricePerWord = pricePerWord * message.split(' ').length;
//     return pricePerWord;
// };

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// ); // 160

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// // 3 task

// const findLongestWord = function(string) {
//     console.log(string);
//     let word = string.split(' ');
//     let longestWord = word[0];
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > longestWord.length) {
//             longestWord = word[i];
//         }

//     }

//     return longestWord;

// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// 4 task

// const formatString = function(string) {
//     if (string.length > 40) {
//         let newStr = string.slice(0, 40).split(' ');
//         newStr.push('...');
//         return newStr.join(' ');
//     }
//     return string;
// };


// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );

// // 5 task
// const checkForSpam = function(message) {
//     console.log(message);

//     let newMessage = message.toLowerCase();
//     if (newMessage.includes('spam') || newMessage.includes('sale')) {
//         return true;
//     }
//     return false;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// // 6 task

// let input;
// const numbers = [];
// let total = 0;

// do {
//     input = prompt("Введите число");
//     let num;
//     if (isNaN(input) == true) {
//         alert("Ошибка ввода, попробуйте еще");
//     }
//     num = Number(input);
//     numbers.push(num);

// }
// while (input !== null)
// for (let i = 0; i < numbers.length; i++) {
//     total = total + numbers[i];

// }
// console.log(total);



// // 7 task

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function(login) {
//     if (login.length > 3 && login.length <= 17) {
//         return true;
//     }
//     return false;

// };

// const isLoginUnique = function(allLogins, login) {
//     if (allLogins.includes(login)) {
//         return false;

//     }
//     return true;

// };

// const addLogin = function(allLogins, login) {
//     console.log(login);

//     if (isLoginValid(login) === false) {
//         console.log("Ошибка! Логин должен быть от 4 до 16 символов")
//         return;
//     }
//     if (isLoginUnique(allLogins, login) === false) {
//         console.log("Такой логин уже используется!")
//         return;
//     }

//     allLogins.push(login);
//     console.log(allLogins);

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'