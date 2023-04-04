import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector('.gallery');
const markup = createImageCard(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);

function createImageCard(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
  }).join('');
}

function onClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  evt.preventDefault();
  const instance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" >
  `)
  instance.show()
}