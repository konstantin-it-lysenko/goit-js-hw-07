import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({ description, original, preview }) => {
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

galleryEl.insertAdjacentHTML('beforeend', markup);
galleryEl.addEventListener('click', openTargetImgModal);

function openTargetImgModal(e) {
  e.preventDefault();

  const currentImg = e.target;

  if (currentImg === e.currentTarget) return;

  const imgDataset = currentImg.dataset.source;
  const imgDescription = currentImg.alt;

  const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${imgDataset}" alt="${imgDescription}"/>
  </div>
  `, { onClose: () => { document.removeEventListener('keydown', onEscKeydown); } })

  instance.show();

  document.addEventListener('keydown', onEscKeydown);

  function onEscKeydown(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}
