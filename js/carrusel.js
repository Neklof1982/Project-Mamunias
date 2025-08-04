document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Swiper con las opciones necesarias
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,         // Número de productos visibles
        spaceBetween: 20,         
        loop: true,               // Bucle infinito
        breakpoints: {            // Responsivo
        320: {
            slidesPerView: 1,     
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        }
    },
        autoplay: {               // Auto deslizamiento
            delay: 3000,          // Retardo entre cada desplazamiento
            disableOnInteraction: false,
        },
    });
});
