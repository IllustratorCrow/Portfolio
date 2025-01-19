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

  // Aplicamos la transformación al contenedor de las imágenes para moverlo
  const slidesContainer = document.querySelector('.slides');
  slidesContainer.style.transition = 'transform 0.5s ease'; // Añadimos transición para el movimiento suave
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`; // Movemos el contenedor a la imagen actual
}

// Función para mover el slider a la izquierda
leftArrow.addEventListener('click', () => {
  console.log("Flecha izquierda clickeada"); // Verificación
  showSlide(currentSlide - 1); // Mostramos el slide anterior
});

// Función para mover el slider a la derecha
rightArrow.addEventListener('click', () => {
  console.log("Flecha derecha clickeada"); // Verificación
  showSlide(currentSlide + 1); // Mostramos el siguiente slide
});

// Hacemos que las imágenes se cambien automáticamente cada 5 segundos (opcional)
setInterval(() => {
  showSlide(currentSlide + 1); // Mueve el slider automáticamente a la siguiente imagen
}, 5000); // 5000 milisegundos = 5 segundos

// Inicializamos el slider mostrando la primera imagen
showSlide(currentSlide);
