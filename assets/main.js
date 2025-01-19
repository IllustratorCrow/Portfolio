let slideIndex = 1;
showSlides(slideIndex);

// Funciones de control de los botones
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Función para controlar los puntos de navegación
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Aseguramos que el índice esté dentro de los límites
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Desactivar los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la imagen actual
  slides[slideIndex-1].style.display = "block";

  // Activar el punto correspondiente
  dots[slideIndex-1].className += " active";
}
