import images from "./gallery-items.js";
const list = document.querySelector('.js-gallery');
let i = 0;
const addImg = images.reduce((acc, el) =>
    acc + `<li class="gallery__item">
    <a class ="gallery-link" src = ${el.original}>
    <img class ="gallery__image" src = ${el.preview} data-source="${el.original}" data-element ="${i+=1}" alt = ${el.description} >
    </a>
    </li> `,
    "");

list.insertAdjacentHTML('beforeend', addImg);

const modal = document.querySelector('.js-lightbox');
const close = modal.querySelector('[data-action="close-lightbox"]');
const modalImg = modal.querySelector('.lightbox__image');
const modalContent = document.querySelector('.lightbox__image');
const openModal = function(event) {
    modal.classList.add('is-open');
    const target = event.target;
    modalImg.setAttribute('src', `${target.dataset.source}`);
    modalImg.setAttribute('alt', `${target.alt}`);
    modalImg.setAttribute('data-element', `${target.dataset.element}`);
}
const closeModal = function() {
    modal.classList.remove('is-open');
}

const imgNotColse = function() {
    event.stopPropagation()
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
})

document.addEventListener('keydown', function(event) {
    let sour = Number(modalImg.dataset.element);
    const arr = [];
    arr.push(...list.querySelectorAll('img'));

    if (event.key === "ArrowRight") {
        sour += 1;
        const right = arr.find(el => {
            if (el.dataset.element == sour) {
                modalImg.setAttribute('src', `${el.dataset.source}`);
                modalImg.setAttribute('alt', `${el.alt}`);
                modalImg.setAttribute('data-element', `${el.dataset.element}`);
            }
        })
    }
    if (event.key === "ArrowLeft") {
        sour -= 1;
        const right = arr.find(el => {
            if (el.dataset.element == sour) {

                modalImg.setAttribute('src', `${el.dataset.source}`);
                modalImg.setAttribute('alt', `${el.alt}`);
                modalImg.setAttribute('data-element', `${el.dataset.element}`);
            }
        })
    }
});

list.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);
modalContent.addEventListener('click', imgNotColse);