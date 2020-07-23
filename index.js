// // first minitask

// const myNumb = 15;
// const secondNumb = 20;
// let summ = (myNumb + secondNumb);
// console.log(summ);

// // second minitask
// const p = 3.14;
// const r = 10;
// let result = Math.pow(r, 2) * p;
// console.log(result);

// // third minitask
// const a = "Tofik"
// const b = 22;
// const c = "cars";
// console.log(
//     `Здраствуйте, меня зовут ${a}, мне ${b} и мне нравятся ${c} `
// );


////

// let input;
// input = prompt("Какое оф название js");
// if (input == "ECMAScript") {
//     console.log("Verno")
// } else {
//     console.log("Ne Verno")

// }

// let a = 2;
// let b = 1;
// let result;
// result = a + b < 4 ? "Malo" : "Mnogo";

// let age = 99;
// if (age >= 14 && age <= 90) {
//     console.log("Ok")
// } else {
//     console.log("Not ok");
// }


// const styles = ["Джаз", "Блюз"];
// console.log(styles);
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[Math.round((styles.length - 1) / 2)] = "Классика";
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Рэп");
// styles.unshift("Регги");
// console.log(styles);


// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);

// const max = function(...maxNumber) {
//     maxNumber.sort((a, b) => b - a);
//     console.log(maxNumber[0])
// }
// max(1, 2, 3, 4, 5, 67, 8, 9, 56, 45, 6, 3);


// const ask = function(question, yes, no) {

//     confirm(question) ? yes() : no();
// }

// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// const hello = function(name = "гость") {

//     return "Привет " + name;
// }

// console.log(hello("Василий"));


// const repeat = function(str = "", n = 2) {
//     return str.repeat(n);
// }

// console.log(repeat("qwe wqe qwe qw e qwewe "));

// const checkTicket = function(number) {
//     let sumFirst = 0;
//     let sumSecond = 0;
//     for (let i = 0; i <= 2; i++) {
//         sumFirst += number[i];

//     }
//     for (let i = 3; i <= 5; i++) {
//         sumSecond += number[i];

//     }
//     if (sumFirst === sumSecond) {
//         return "Счастливый";

//     }
//     return "Не счастливый";

// }


// console.log(checkTicket([1, 3, 5, 5, 3, 1]));
// console.log(checkTicket([5, 5, 5, 6, 6, 6]));
// console.log(checkTicket([5, 6, 4, 5, 3, 7]));


// const computeOrizurus = function(total) {
//     let boy;
//     let girl;
//     boy = total / 6;
//     girl = total - boy * 2;
//     return "Мальчики сделали по " + Math.round(boy) + " Катюха замутила " + Math.round(girl);
// }

// console.log(computeOrizurus(6));
// console.log(computeOrizurus(24));
// console.log(computeOrizurus(11));




// const isEmpty = function(obj) {
//     for (const key in obj) {
//         return false;

//     }
//     return true;

// }


// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false


// const salariesSum = function(salary) {
//     let sum = 0;
//     console.log(salary)
//     for (const key in salary) {
//         console.log()
//         sum += salary[key];
//     }

//     return sum;


//     return ("not any")
// }
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// console.log(salariesSum(salaries));


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// const multiplyNumeric = function(obj) {
//     for (const numb in obj) {
//         if (typeof obj[numb] == "number") {
//             let elementSum = obj[numb] * 2;
//             console.log(elementSum);

//         } else {
//             return "not a numb";
//         }
//     }
//     return elementSum;
// }

// console.log(multiplyNumeric(menu))



// const user = {
//     'name': 'Петр',
//     'surname': 'Петров',
//     'age': '20 лет',
// }

// const { name = "Аноном", surname = "Анонимович", age = "? лет" } = user;
// console.log(name


// const fizzBuzz = function(n) {
//     let numb = 0;
//     for (let i = 0; i < n; i++) {
//         numb = ++numb;

//         if (numb % 3 === 0 && numb % 5 === 0) {
//             console.log("fizzBizz");
//         } else if (numb % 3 === 0)
//         {
//             console.log("fizz");
//         } else if (numb % 5 === 0) {
//             console.log("Bizz");

//         } else {
//             console.log(numb);

//         }

//     }
// }
// fizzBuzz(25);