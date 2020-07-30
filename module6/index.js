import users from './users.js';

// // 1 task

// const getUserNames = users => {
//     return users.map(user => user.name)
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2 task

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color)
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// 3 task

// const getUsersWithGender = (users, gender) => {
//     return users.filter(user => user.gender === gender)
// };
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // 4 task

// const getInactiveUsers = users => {
//     return users.filter(user => user.isActive === false)
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// // 5 task

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email)
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// // 6 task

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(user => user.age > min && user.age < max)
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // 7 task

// const calculateTotalBalance = users => {
//     let acc = 0;
//     return users.reduce((acc, user) => acc += user.balance, 0)
// };

// console.log(calculateTotalBalance(users)); // 20916

// // 8 task

// const getUsersWithFriend = (users, friendName) => {
//     return users.filter(user => user.friends.includes(friendName))
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// //  9 task

// const getNamesSortedByFriendsCount = users => {
//     users.sort((a, b) => a.friends.length > b.friends.length ? 1 : -1)
//     return users.map(user => user.name)
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// // 10 task

// const getSortedUniqueSkills = users => {
//     const skills = users.reduce((allSkills, user) => {
//         allSkills.push(...user.skills);
//         return allSkills;
//     }, []);
//     return Array.from(new Set(skills)).sort()
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure',
// //    'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]