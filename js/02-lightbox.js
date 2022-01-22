import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')
const createItems=(item)=>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
}
const markUp = galleryItems.map(createItems).join("")
galleryRef.insertAdjacentHTML("beforeend",markUp)
var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt',captionDelay:250,captionPosition:"bottom" });