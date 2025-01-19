let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Mostrar la imagen en el índice adecuado
const showSlide = (index) => {
  if (index >= totalSlides) {
    currentSlide = 0; // Si el índice es mayor que el total, vuelve al primer slide
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // Si el índice es negativo, va al último slide
  } else {
    currentSlide = index;
  }

  // Cambiar la posición del slider con la animación
  document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;

  // Activar el punto de navegación correspondiente
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentSlide]) {
    dots[currentSlide].classList.add('active');
  }
};

// Botones de navegación
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    showSlide(currentSlide - 1); // Mostrar la imagen anterior
  });

  rightArrow.addEventListener('click', () => {
    showSlide(currentSlide + 1); // Mostrar la imagen siguiente
  });
}

// Agregar interactividad a los puntos de navegación
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index); // Cambiar al slide correspondiente al punto clickeado
  });
});

// Mostrar el primer slide al inicio y asegurarse de que la primera imagen es visible
showSlide(currentSlide);
