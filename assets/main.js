let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Ocultar todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  // Volver al primer slide si se supera el límite
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Desactivar todas las "dots"
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar el slide actual y activar la "dot" correspondiente
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Cambiar diapositiva cada 5 segundos
  setTimeout(showSlides, 5000);
}

// Controles manuales
function currentSlide(n) {
  slideIndex = n - 1; // Ajustar índice para la función
  showSlides();
}
