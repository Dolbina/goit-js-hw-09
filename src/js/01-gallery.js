import { galleryItems } from './gallery-items.js';
// Change code below this line

// Add imports above this line
import SimpleLightbox from 'simplelightbox';

// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

// Виклик функції, яка створює строки з картинками
const cardMarkup = createGalleryMarkup(galleryItems);

// Додавання в HTML строк з картинками
galleryEl.insertAdjacentHTML('beforeend', cardMarkup);

// Колбек-функція, яка створює строки з картинками(данні для картинок з об'єкту galleryItems)
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

// Ініціалізація бібліотеки, додає підпис(з атрибуту alt) під картинками,
// який з'являється через 250 ms після відкриття картинки.

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
