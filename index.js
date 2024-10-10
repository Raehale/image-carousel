import { carouselImgsArr } from "./data.js";

(function displayImages() {
    carouselImgsArr.forEach((img) => {
        document.getElementById("slideshowContainer").innerHTML += `
                <div class="mySlides fade">
                    <img src="/media/${img.img}" />
                    <div class="caption">${img.desc}</div>
                </div>
            `;
    });
    
    document.getElementById("slideshowContainer").innerHTML += `
                <a class="prev" id="prev">&lt;</a>
                <a class="next" id="next">&gt;</a>
            `;
})();

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = slides.length;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].computedStyleMap.display = "none";
    }

    slides[slideIndex-1].computedStyleMap.display = "block";
}