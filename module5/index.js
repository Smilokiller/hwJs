// // 1 task

// const Account = function(obj) {
//     this.login = obj.login;
//     this.email = obj.email;
// }

// Account.prototype.getInfo = function() {
//     console.log(`Login: ${this.login}  Email: ${this.email}.`);
// };


// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//     login: 'Mangozedog',
//     email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// // 2 task

// const User = function(user) {
//     this.name = user.name;
//     this.age = user.age;
//     this.followers = user.followers;

//     this.getInfo = function() {
//         console.log(`User ${this.name}  is ${this.age} years old and has ${this.followers} followers`);
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// // 3 task

// const Storage = function(items) {
//     this.items = items;
//     this.getItems = function() {
//         console.log(items)
//     }
//     this.addItem = function(add) {
//         items.push(add);
//     }
//     this.removeItem = function(remove) {
//         items.splice(items.indexOf(remove), 1);
//     }
// }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// // 4 task

// class StringBuilder {
//     constructor(value) {
//         this._value = value;
//     }
//     get value() {
//         return this._value;
//     }
//     set value(str) {
//         this._value = str;
//     }

//     append = function(str) {
//         this._value = this._value + str;

//     }
//     prepend = function(str) {
//         this._value = str + this._value;

//     }
//     pad = function(str) {
//         this._value = str + this._value + str;

//     }

// }
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// // 5 task

// class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
//     static getSpecs(car) {
//             console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car .price}`);
//         }
//         /*
//          * Конструктор получает объект настроек.
//          *
//          * Добавь свойства будущеего экземпляра класса:
//          *  speed - текущая скорость, изначально 0
//          *  price - цена автомобиля
//          *  maxSpeed - максимальная скорость
//          *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//          *  distance - общий киллометраж, изначально 0
//          */
//     constructor(obj) {
//         this.speed = 0;
//         this._price = obj.price;
//         this.maxSpeed = obj.maxSpeed;
//         this.isOn = false;
//         this.distance = 0;
//     }

//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */


//     get price() {
//         return this._price;
//     }

//     set price(value) {
//             this._price = value;
//         }
//         /*
//          * Добавь код для того чтобы завести автомобиль
//          * Записывает в свойство isOn значение true
//          */
//     turnOn() {
//         this.isOn = true;
//     }

//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {
//         this.isOn = false;
//     }

//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {

//         if (this.speed + value < this.maxSpeed) {
//             return this.speed += value;
//         } else { return "wrong speed" }
//     }

//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//         if (this.speed - value > 0) {
//             return this.speed -= value;
//         } else { return "wrong speed" }
//     }


//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//         this.distance += this.speed * hours;
//     }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000