slideImages = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];
const imgContainer = document.querySelector(".items");
console.log(imgContainer);
let imgString = "";
for (let i = 0; i < slideImages.length; i++) {
  const curImage = slideImages[i];
  imgString += `<div class="item"><img src="${curImage}" alt=""></div>`;
}
console.log(imgString);
imgContainer.innerHTML += imgString;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".item");
console.log(slides);
activeImgIndex = 0;
slides[activeImgIndex].classList.add("active");
prev.addEventListener("click", function (event) {
  event.preventDefault();
  if (activeImgIndex > 0) {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex--;
    slides[activeImgIndex].classList.add("active");
  } else {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex = slides.length - 1;
    slides[activeImgIndex].classList.add("active");
  }
});
next.addEventListener("click", function (event) {
  event.preventDefault();
  if (activeImgIndex < slides.length - 1) {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex++;
    slides[activeImgIndex].classList.add("active");
  } else {
    slides[activeImgIndex].classList.remove("active");
    activeImgIndex = 0;
    slides[activeImgIndex].classList.add("active");
  }
});