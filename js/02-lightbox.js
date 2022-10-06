import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

let allPictures = "";

galleryItems.forEach((obj) => {
  allPictures += `<div class="gallery__item">
 <a class="gallery__item" href=""${obj.original}"">
  <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
</a>
</div>`;
});
