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

// let sells = [];
// let statistic = {
//     tshirt: 0,
//     jacket: 0,
//     socks: 0,
// }

// const SellSmth = function(color, size, type) {
//     this.color = color;
//     this.size = size;
//     this.type = type;
// }

// const addStatistic = function(statistic, clother) {
//     for (const key in statistic) {
//         if (statistic.hasOwnProperty(key)) {
//             let element = statistic[key];
//             for (const item of clother) {
//                 if (item.type === "tshirt") {
//                     statistic.tshirt += 1;
//                 } else if (item.type === "jacket") {
//                     statistic.jacket += 1;
//                 } else if (item.type === "socks") {
//                     statistic.socks += 1;
//                 }
//             }
//             return (statistic);
//         }
//     }
// }

// const sellsList = function(sells) {
//     for (const item of sells) {
//         console.log(item)
//     }
// }

// const tshirtRed = new SellSmth('red', 's', 'tshirt');
// const tshirtBlue = new SellSmth('blue', 'xl', 'tshirt');
// const tshirtWhite = new SellSmth('white', 'xs', 'tshirt');
// const jackettRed = new SellSmth('red', 's', 'jacket');
// const jackettBlack = new SellSmth('black', 'l', 'jacket');
// const sockstWhite = new SellSmth('White', 'xxl', 'socks');

// sells.push(tshirtRed);
// sells.push(tshirtBlue);
// sells.push(tshirtWhite);
// sells.push(jackettRed);
// sells.push(jackettBlack);
// sells.push(sockstWhite);
// sellsList(sells);
// console.log(addStatistic(statistic, sells))


// const arr = ["a", "b", "c"];
// const arr2 = [1, 2, 3];

// const oneArr = [...arr, ...arr2];
// console.log(oneArr);


// arr.push(1, 2, 3);
// console.log(arr);

// arr2.reverse();
// console.log(arr2);

// const arr3 = [1, 2, 3, 4, 5];
// const arrSlice = arr3.slice(0, 3);
// console.log(arr3)
// console.log(arrSlice);

// const a = [1, 2, 3, 4, 5];
// a.splice(1, 2);
// console.log(a);


// const a = [1, 2, 3, 4, 5];
// console.log(Math.floor(Math.random() *(a.length + 1)));

// const str = prompt("Enter str");
// let arr = str.split('');
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr.join(''));

// let creaturesArr = [];
// class Creature {
//     constructor(type, planet, status, sex) {
//         this.type = type;
//         this.planet = planet;
//         this.status = status;
//         this.sex = sex;
//     }
//     get show() {
//         return (`This ${this.type} is from ${this.planet} and has ${this.status} status`)
//     }
//     set changePlanet(str) {
//         this.planet = str;
//         return this.planet
//     }
//     static intro() {
//         console.log("There is a billions types of creatures all around the world!")
//     }
//     static checkCreatures() {
//         console.log(creaturesArr)
//     }
// }
// class Human extends Creature {
//     constructor(name, type, planet, status, sex, nationality) {
//         super(type, planet, status, sex);
//         this.name = name;
//         this.nationality = nationality;
//     }
//     addToCreaturesList() {
//         creaturesArr.push({ name: this.name, planet: this.planet, nationlity: this.nationality })
//     }
// }


// class Orc extends Creature {
//     constructor(name, type, planet, status, sex, color, weight) {
//         super(type, planet, status, sex);
//         this.name = name;
//         this.color = color;
//         this.weight = weight;

//     }
//     addToCreaturesList() {
//         creaturesArr.push(this)
//     }
// }

// let Adam = new Human('Adam', 'human', 'Mars', 'three-dimensional', 'male', 'Ukrainian');
// Adam.addToCreaturesList();
// let Eva = new Human('Eva', 'human', 'Venus', 'three-dimensional', 'female', 'Ukrainian');
// Eva.addToCreaturesList();

// let Thrall = new Orc('Thrall', 'orc', 'Draenor', 'three-dimensional', 'male', 'green', '120kg');
// Thrall.addToCreaturesList()
// Creature.checkCreatures();



// ________________________TASK#1
// Реализуйте класс Student (Студент), который будет наследовать от класса User.
// Этот класс должен иметь следующие свойства:
//  name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз).
//  Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента. 
// Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// // Вот так должен выглядеть класс User, от которого наследуется наш Student:
// class User {

//     constructor(name, surname) {
//         this._name = name;
//         this._surname = surname;
//     }

//     get name() {
//         return this._name;
//     }

//     get surname() {
//         return this._surname;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     getFullName() {
//         return this.name + " " + this.surname;
//     }
//     getCourse() {
//         const nowYear = 2020;
//         console.log("cтудент на" + (nowYear - this.year) + "курсе");
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this._year = year;
//     }
//     get year() {
//         return this._year;
//     }

// }
// // Вот так должен работать наш класс:
// let student = new Student('Иван', 'Иванов', 2017);
// console.log(student.name); //выведет 'Иван'
// console.log(student.surname); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.year); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// student.getCourse();
// // ----------------------------------------------------------------
// const numbers = [1, 2, 3, 4, 5];
// const multNubmers = numbers.map(numb => numb * 2);
// console.log(multNubmers);

// const arr = ["Есть", "жизнь", "на", "Марсе"];
// const arrlength = arr.map(arr => arr.length);
// console.log(arrlength);

// const tweets = [
//     { id: "000", likes: 5, tags: ['js', "nodejs"] },
//     { id: "001", likes: 2, tags: ["html", "css"] },
//     { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//     { id: "003", likes: 8, tags: ["css", "react"] },
//     { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const allLikes = tweets.reduce((acc, tweet) => acc + tweet.likes, 0);
// console.log(allLikes);



// const findTweet = tweets.filter(tweet => tweet.tags.includes("js"));
// console.log(findTweet);
// -------------------------------------------------------------------



// const numbers = [1, 2, 3, 4, 5, 11];
// const find = numbers.filter(value => value % 2);
// const sum = find.reduce((acc, value) => acc + value, 0);
// console.log(find);
// console.log(sum);


// let items = [
//     { name: "Миша", age: 23 },
//     { name: "Вася", age: 44 },
//     { name: "Саша", age: 2 },
//     { name: "Рома", age: 99 },
//     { name: "Ашот", age: 19 }
// ];

// const itemsSort = items.sort((a, b) => a.age > b.age ? 1 : -1);
// console.log(itemsSort);


// let x = [1, 2, 3, "a", "b", "c"];
// console.log(x);
// const changeX = x.fill(0);
// console.log(changeX);

// const arr = [10, 20, 30, 40];
// const findArr = arr.some(el => el > 30);
// console.log(findArr);

// let items = [
//     { name: "Миша", age: 23, isTheKingOfNeighbourhood: false },
//     { name: "Вася", age: 44, isTheKingOfNeighbourhood: false },
//     { name: "Саша", age: 2, isTheKingOfNeighbourhood: false },
//     { name: "Рома", age: 99, isTheKingOfNeighbourhood: false },
//     { name: "Ашот", age: 19, isTheKingOfNeighbourhood: true }
// ];

// const findKing = items.find(el => el.isTheKingOfNeighbourhood === true);
// console.log(findKing);