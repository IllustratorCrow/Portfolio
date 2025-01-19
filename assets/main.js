// Seleccionamos los elementos del slider y las flechas
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Inicializamos el índice de la imagen actual
let currentSlide = 0;

// Función para mostrar el slide actual
function showSlide(index) {
  // Nos aseguramos de que el índice esté dentro del rango
  if (index < 0) {
    currentSlide = slides.length - 1; // Si el índice es menor que 0, vamos al último slide
  } else if (index >= slides.length) {
    currentSlide = 0; // Si el índice es mayor o igual al número de slides, vamos al primero
  } else {
    currentSlide = index; // De lo contrario, usamos el índice proporcionado
  }

  // Movemos las imágenes usando el índice
  const offset = -currentSlide * 100;  // Calculamos el desplazamiento en porcentaje
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Aplicamos el desplazamiento
}

// Función para mover el slider a la izquierda
leftArrow.addEventListener('click', () => {
  showSlide(currentSlide - 1); // Mostramos el slide anterior
});

// Función para mover el slider a la derecha
rightArrow.addEventListener('click', () => {
  showSlide(currentSlide + 1); // Mostramos el siguiente slide
});

// Inicializamos el slider mostrando la primera imagen
showSlide(currentSlide);
