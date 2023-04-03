import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<li class = "gallery__item">
      <img  class="gallery__image" 
      src="${preview}" 
      alt="${description} 
       data-source=${original}">
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('.gallery__item')) {
    return;
  }
const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"`)

instance.show()
  
}



