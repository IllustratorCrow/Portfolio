document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Iniciar el primer slide
    showSlide(slideIndex);

    // Autoplay cada 3 segundos
    setInterval(nextSlide, 3000);
});
