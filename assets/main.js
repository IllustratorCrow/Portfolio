document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function showSlide(index) {
    const newTransformValue = `translateX(-${index * 100}%)`;
    document.querySelector('.slides').style.transform = newTransformValue;
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  // Inicializar mostrando la primera imagen
  showSlide(currentIndex);
});
