slideImages = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];
const imgContainer = document.querySelector(".items")
let imgString = "";
for (let i = 0; i < slideImages.length; i++) {
    const curImage = slideImages[i];
    imgString += `<img src="${curImage}" class="item" alt="">`
}
imgContainer.innerHTML += imgString
const slides = document.querySelectorAll("item")
console.log(slides);
const firstImg = document.querySelector(".item")
firstImg.classList.add("active")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
activeImgIndex = 0
prev.addEventListener("click", function(event) {
    event.preventDefault()
    if (activeImgIndex > 0) {
        slides[activeImgIndex].classList.remove("active")
        activeImgIndex--;
        slides[activeImgIndex].classList.add("active")
    }
})
next.addEventListener("click", function(event) {
    event.preventDefault();
    if (activeImgIndex < slides.length) {
        slides[activeImgIndex].classList.remove("active")
        activeImgIndex++;
        slides[activeImgIndex].classList.add("active")
    }
})