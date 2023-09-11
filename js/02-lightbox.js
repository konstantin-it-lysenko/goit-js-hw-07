import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ description, original, preview }) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
}).join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

console.log(gallery);
