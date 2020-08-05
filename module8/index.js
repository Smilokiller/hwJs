import images from "./gallery-items.js";
const list = document.querySelector('.js-gallery');
const addImg = images.reduce((acc, el) =>
    acc + `<li class="gallery__item">
    <a class ="gallery-link" src = ${el.original}>
    <img class ="gallery__image" src = ${el.preview} data-source="${el.original}" alt = ${el.description} >
    </a>
    </li> `,
    "");
list.insertAdjacentHTML('beforeend', addImg);

const modal = document.querySelector('.js-lightbox');
const close = modal.querySelector('[data-action="close-lightbox"]');
const modalImg = modal.querySelector('.lightbox__image');
const openModal = function(event) {
    modal.classList.add('is-open');
    const target = event.target;
    modalImg.setAttribute('src', `${target.dataset.source}`);
    modalImg.setAttribute('alt', `${target.alt}`);

}
const closeModal = function() {
    modal.classList.remove('is-open');
    console.log("close")
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
})

list.addEventListener('click', openModal);
close.addEventListener('click', closeModal);