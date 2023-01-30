// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryBoxRef = document.querySelector('.gallery');
const galleryBoxMarkup = createBoxGallery(galleryItems);
galleryBoxRef.insertAdjacentHTML('afterbegin',galleryBoxMarkup);

function createBoxGallery(galleryItems){
    return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`)
  .join('');
}

const galleryBoxModal = new SimpleLightBox('.gallery a',{
    captionsData : 'alt',
    captionsDelay: 300,
})