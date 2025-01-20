let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    // Si el índice de la diapositiva supera el número de diapositivas, reiniciamos el índice
    if (slideIndex >= slides.length) { 
        slideIndex = 0;
    }
    // Si el índice es negativo, lo ponemos en la última diapositiva
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostrar la diapositiva actual
    slides[slideIndex].style.display = "block";
}

// Función para cambiar a la diapositiva anterior
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Mostrar la primera diapositiva al cargar
showSlides();

// Configurar las funciones de los botones prev y next
document.querySelector(".prev").addEventListener("click", function() {
    plusSlides(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});
