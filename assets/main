document.querySelector('.left-arrow').addEventListener('click', function() {
  let track = document.querySelector('.slider-track');
  let currentTransform = getComputedStyle(track).transform;
  let currentPosition = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
  let newPosition = currentPosition + 100; // Ajusta el valor para el desplazamiento

  track.style.transform = `translateX(${newPosition}px)`;
});

document.querySelector('.right-arrow').addEventListener('click', function() {
  let track = document.querySelector('.slider-track');
  let currentTransform = getComputedStyle(track).transform;
  let currentPosition = currentTransform !== 'none' ? parseFloat(currentTransform.split(',')[4]) : 0;
  let newPosition = currentPosition - 100; // Ajusta el valor para el desplazamiento

  track.style.transform = `translateX(${newPosition}px)`;
});
