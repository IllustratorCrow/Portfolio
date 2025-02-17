let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000);
}

// Controles manuales
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    } else if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
