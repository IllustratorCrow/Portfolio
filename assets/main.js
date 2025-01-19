// Seleccionamos los elementos del slider
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 0;  // Para controlar la imagen actual

// Función para mostrar la imagen en el índice actual
function showSlide(index) {
  // Evitar que el índice se desborde
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  }

  // Desplazamos el contenedor de las imágenes
  const slidesContainer = document.querySelector('.slides');
  const offset = -currentIndex * 100;  // Desplazamiento en porcentaje
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Evento para la flecha izquierda
leftArrow.addEventListener('click', () => {
  currentIndex--;
  showSlide(currentIndex);
});

// Evento para la flecha derecha
rightArrow.addEventListener('click', () => {
  currentIndex++;
  showSlide(currentIndex);
});

// Inicializamos el slider mostrando la primera imagen
showSlide(currentIndex);
