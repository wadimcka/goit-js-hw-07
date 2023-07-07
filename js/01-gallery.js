// import { galleryItems } from "./gallery-items.js";
// // Change code below this line

// // console.log(galleryItems);

// const listUlElem = document.querySelector(".gallery");
// const cardMarkup = createImageCardMarkup(galleryItems);

// listUlElem.insertAdjacentHTML("beforeend", cardMarkup);

// function createImageCardMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//       <li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </li>
//     `;
//     })
//     .join("");
// }

// listUlElem.addEventListener("click", onImgClick);

// function onImgClick(event) {
//   const { target } = event;
//   event.preventDefault();
//   if (!target.dataset.source) {
//     return;
//   } else {
//     const instance = basicLightbox.create(
//       `
//     <img
//             class="gallery__image"
//             src="${target.dataset.source}"
//             data-source="${target.dataset.source}"

//           />

// `,
//       { onShow: (instance) => {}, onClose: (instance) => {} }
//     );
//     instance.show();

//     document.addEventListener("keydown", onBtnClick);

//     function onBtnClick(event) {
//       if (event.code === "Escape" && instance.visible()) {
//         instance.close();
//         document.removeEventListener("keydown", onBtnClick);
//       }
//     }
//   }
// }

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const listUlElem = document.querySelector(".gallery");
const cardMarkup = createImageCardMarkup(galleryItems);

listUlElem.insertAdjacentHTML("beforeend", cardMarkup);

function createImageCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

listUlElem.addEventListener("click", onImgClick);

function onImgClick(event) {
  const { target } = event;
  event.preventDefault();
  if (!target.dataset.source) {
    return;
  } else {
    const instance = basicLightbox.create(
      `
    <img
            class="gallery__image"
            src="${target.dataset.source}"
            data-source="${target.dataset.source}"
            alt="${target.alt}"            
          />
    
`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onBtnClick);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onBtnClick);
        },
      }
    );
    instance.show();

    function onBtnClick(event) {
      if (event.code === "Escape" && instance.visible()) {
        instance.close();
      }
    }
  }
}
