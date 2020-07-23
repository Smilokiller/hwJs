// // 1 task

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;


// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(key, user[key]);
// }


// // 2 task

// const countProps = function(obj) {

//     return "Количество свойств: " + Object.keys(obj).length;

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// // 3 task

// const findBestEmployee = function(employees) {
//     let max;
//     let maxIndex;
//     const employeVal = Object.values(employees);
//     max = Math.max.apply(max, employeVal);
//     maxIndex = employeVal.indexOf(max);
//     const keys = Object.keys(employees);
//     return keys[maxIndex] + " " + employees[keys[maxIndex]];

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux


// // 4 task

// const countTotalSalary = function(employees) {
//     let max = 0;
//     for (const key in employees) {
//         if (employees.hasOwnProperty(key)) {
//             const element = employees[key];
//             max += element;
//         }
//     }
//     return max;

// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// 5 task

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//     let newArr = [];
//     for (const key in arr) {
//         const element = arr[key];
//         const keys = Object.keys(element);
//         if (keys.includes(prop)) {
//             newArr.push(element[keys[keys.indexOf(prop)]]);
//         }
//     }
//     return newArr;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// // 6 task

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProdcuts, productName) {
//     for (const key in allProdcuts) {
//         if (allProdcuts.hasOwnProperty(key)) {
//             const element = allProdcuts[key];
//             const keys = Object.values(element);
//             if (keys.includes(productName)) {
//                 let max;
//                 max = keys[1] * keys[2];
//                 return ("Сумма купленных " + productName + " : " + max);

//             }
//         }

//     }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800


// // 7 task

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };


// const account = {

//     balance: 0,
//     transactions: [],


//     createTransaction(amount, type, id) {
//         const transaction = {
//             id: id,
//             type: type,
//             summ: amount
//         }
//         this.transaction = transaction;
//         if (type === 'deposit') {
//             this.deposit();

//         } else if (type === 'withdraw') {
//             this.withdraw();
//         }
//         return transaction;
//     },


//     deposit(amount) {
//         amount = this.transaction;
//         this.transactions.push(amount);
//         for (const key in amount) {
//             if (key == 'summ') {

//                 if (amount.hasOwnProperty(key)) {
//                     const element = amount[key];
//                     this.balance += element;
//                 }
//             }
//         }
//         console.log(this.getBalance());
//     },


//     withdraw(amount) {
//         amount = this.transaction;
//         this.transactions.push(amount);
//         for (const key in amount) {
//             if (amount.hasOwnProperty(key)) {
//                 const element = amount[key];
//                 if (key == 'summ') {
//                     if (this.balance > element) {
//                         this.balance -= element;

//                     } else
//                         (console.log("снятие такой суммы не возможно, недостаточно средств."));
//                 }


//             }
//         }
//         console.log(this.getBalance());

//     },


//     getBalance() {

//         return (this.balance);
//     },

//     getTransactionDetails(id) {


//         for (const obj of this.transactions) {
//             for (const key in obj) {
//                 if (obj.hasOwnProperty(key)) {
//                     const element = obj[key];
//                     if (key === 'id' && element === id) {
//                         return (obj);
//                     }
//                 }
//             }
//         }


//     },


//     getTransactionTotal(type) {
//         let numb = 0;
//         for (const iterator of this.transactions) {
//             for (const key in iterator) {
//                 if (iterator.hasOwnProperty(key)) {
//                     const element = iterator[key];
//                     if (element === type) {
//                         numb++;
//                     }
//                 }
//             }
//         }
//         return "Количество транзакицй типа " + type + " " + numb;
//     },
// };
// console.log(account.createTransaction(500, Transaction.DEPOSIT, 1));
// console.log(account.createTransaction(3434, Transaction.DEPOSIT, 2));
// console.log(account.createTransaction(43, Transaction.WITHDRAW, 3));


// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(3));