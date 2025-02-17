document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // Función para mostrar el slide actual y ocultar los demás
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    // Función para ir al slide anterior
    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
    }

    // Agregar eventos a los botones
    document.querySelector(".carousel-control-next").addEventListener("click", nextSlide);
    document.querySelector(".carousel-control-prev").addEventListener("click", prevSlide);

    // Configurar el autoplay cada 3 segundos
    setInterval(nextSlide, 3000);
});

