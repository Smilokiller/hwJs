// // 1 task

// const list = document.querySelectorAll(`.item`);
// console.log(`В списке ${list.length} категории.`);

// list.forEach(el => {
//     console.log(el.firstElementChild.textContent)
//     console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
// })

// // 2 task

// const list = document.querySelector('#ingredients');
// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];
// const addIngr = ingredients.forEach(el => {
//     const listItem = document.createElement('li')
//     listItem.textContent = el;
//     list.appendChild(listItem);
// })

// // 3 task

// const list = document.querySelector('#gallery');
// const images = [{
//         url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'White and Black Long Fur Cat',
//     },
//     {
//         url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//         url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Group of Horses Running',
//     },
// ];

// const addImg = images.forEach(el => {
//     const add = list.insertAdjacentHTML('beforeend', `<img src = ${el.url} alt = ${el.alt} class = img> `);
// })

// // 4 task (not done)

// const counter = document.querySelector('#counter');
// const decbtn = document.querySelector('[data-action="decrement"]');
// const incbtn = document.querySelector('[data-action="increment"]');
// const span = document.querySelector('#value')

// let spanValue = 0;
// decbtn.addEventListener('click', (e) => {
//     spanValue -= 1;
//     span.textContent = spanValue;
// });
// incbtn.addEventListener('click', (e) => {
//     spanValue += 1;
//     span.textContent = spanValue;

// });


// // 5 task

// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');

// console.log(input);
// console.log(span);
// input.addEventListener('input', (e) => {
//     if (e.target.value == false) {
//         span.textContent = 'Незнакомец';
//     } else {
//         span.textContent = (e.target.value)
//     }
// });


// // 6 task

// const input = document.querySelector('#validation-input');

// input.addEventListener('input', (e) => {
//     if (e.target.value.length < e.target.getAttribute('data-length')) {
//         input.setAttribute('class', 'invalid')
//     } else {
//         input.setAttribute('class', 'valid')
//     }
// });

// // 7 task

// const input = document.querySelector('#font-size-control');
// const spanText = document.querySelector('#text');
// input.addEventListener('input', (e) => {
//     spanText.style.fontSize = `${input.value}px`
// });

// // 8 task

// const counter = document.querySelector('#controls')
// const inputNumber = document.querySelector('input');
// const createBtn = document.querySelector('[data-action="render"]');
// const clearBtn = document.querySelector('[data-action="destroy"]');
// const boxes = document.querySelector('#boxes');

// createBtn.addEventListener('click', (e) => {
//     createBoxes(inputNumber.value);
// })

// const createBoxes = function(amount) {
//     for (let i = 0; i < amount; i++) {
//         const square = document.createElement('div');
//         square.setAttribute('class', 'squares');
//         square.style.width = `${30 +i * 10}px`;
//         square.style.height = `${30 +i * 10}px`;

//         setInterval(() => {
//             square.style.backgroundColor = `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`;
//         }, 500);
//         boxes.appendChild(square);
//     }
// }

// clearBtn.addEventListener('click', (e) => {
//     destroyBoxes()
// })
// const destroyBoxes = function() {
//     while (boxes.firstChild) {
//         boxes.removeChild(boxes.firstChild);
//     }
// }