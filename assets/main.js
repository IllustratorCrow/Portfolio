// Inicialización del slider
const slides = document.querySelectorAll('.slide'); // Selecciona todas las imágenes del slider
const dots = document.querySelectorAll('.dot'); // Selecciona todos los puntos de navegación
let currentIndex = 0; // Índice de la imagen actual

// Función para cambiar la imagen activa
function changeSlide(index) {
  // Oculta todas las imágenes
  slides.forEach(slide => slide.classList.remove('active'));
  // Elimina la clase 'active' de todos los puntos
  dots.forEach(dot => dot.classList.remove('active'));

  // Muestra la imagen del índice actual
  slides[index].classList.add('active');
  // Marca el punto de navegación correspondiente
  dots[index].classList.add('active');
}

// Función para mover el slider hacia la izquierda
function prevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  changeSlide(currentIndex);
}

// Función para mover el slider hacia la derecha
function nextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  changeSlide(currentIndex);
}

// Función para manejar clics en los puntos de navegación
function goToSlide(index) {
  currentIndex = index;
  changeSlide(currentIndex);
}

// Configurar las flechas para cambiar las imágenes
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Configurar los puntos de navegación
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => goToSlide(index));
});

// Iniciar el slider mostrando la primera imagen
changeSlide(currentIndex);

// Establecer un intervalo para cambiar las imágenes automáticamente
setInterval(nextSlide, 5000); // Cambiar cada 5 segundos
