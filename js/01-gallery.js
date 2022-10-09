import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

let allPictures = "";

galleryItems.forEach((obj) => {
  allPictures += `<div class="gallery__item">
  <a class="gallery__link" href="${obj.original}">
    <img
      class="gallery__image"
      src="${obj.preview}"
      data-source="${obj.original}"
      alt="${obj.description}"
    />
  </a>
</div>`;
});

const galleryRef = document.querySelector(".gallery");

galleryRef.innerHTML = allPictures;
galleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" alt="${event.target.description}">
`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeEsc);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeEsc);
      },
    }
  );

  instance.show();

  function closeEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
