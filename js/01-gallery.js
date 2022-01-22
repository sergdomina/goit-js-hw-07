import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery')
const createItems=(item)=>{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
}
const markUp = galleryItems.map(createItems).join("")
galleryRef.insertAdjacentHTML("beforeend",markUp)
const  options= {onShow:()=>{console.log('open');
window.addEventListener('keydown',onEscapePress)
},onClose:()=>{console.log('close');
window.removeEventListener('keydown',onEscapePress)}}
const instance = basicLightbox.create(`
    <img src="#" width="800" height="600">
`,options)

galleryRef.addEventListener('click',(event)=>{
    event.preventDefault()
    
    if(event.target.nodeName !== "IMG")return
    console.log(event.target.dataset.source);
    instance.element().querySelector('img').src=event.target.dataset.source
    instance.show()
})
function onEscapePress(event){
    if(event.key!=='Escape')return
    console.log(event.key);
    instance.close()
}
