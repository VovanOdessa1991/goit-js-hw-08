import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

let instance;

const galleryContainer = galleryItems.map(
   (image) => `<div class="gallery__item">
  <a onclick="event.preventDefault()" class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`
).join("");

  

console.log("gallery Container =>", galleryContainer);

galleryEl.insertAdjacentHTML("beforeend", galleryContainer);
galleryEl.addEventListener("click", eventGallery);


function eventGallery(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName === "IMG") {  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}" />`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', test)
          
     },
      onclose: (instance) => {
        window.removeEventListener('keydown', test)
         
      }
    }
  
  )
  instance.show((instance) => console.log('finished show()', instance));
  }
 
  
}

function test(event) {
  console.log(event);
  if (event.code === "Escape") {
    instance.close(window.removeEventListener('keydown', test));
    console.log(event);
    return;
  }
   console.log("Event работает!всмв" + event.value);
}

// function testClisk(event) {
//   console.log("Klick " + event);
//    instance.close(window.removeEventListener('keydown', test));
//   instance.close(window.removeEventListener('click', testClisk));
// }