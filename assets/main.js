let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

const showSlide = (index) => {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  // Ocultamos todas las imágenes y mostramos solo la imagen actual
  slides.forEach(slide => slide.style.display = 'none');
  slides[currentSlide].style.display = 'block';

  // Activar el punto correspondiente
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
};

// Botones de navegación
document.querySelector('.left-arrow').addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

// Agregar interactividad a los puntos de navegación
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Mostrar el primer slide al inicio
document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);
});
