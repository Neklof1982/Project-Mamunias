// Botón de la hamburguesa y el menú
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

// Añadir un evento al clic del botón hamburguesa
hamburgerMenu.addEventListener('click', () => {
    // Cambiar la clase 'active' en el nav para mostrar/ocultar el menú
    nav.classList.toggle('active');
});