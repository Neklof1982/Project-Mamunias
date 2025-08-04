// Botón de la hamburguesa y el menú
const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

if (hamburgerMenu && nav) {
    // Eevento clic del botón hamburguesa
    hamburgerMenu.addEventListener('click', () => {
        // Cambiar la clase para mostrar/ocultar 
        nav.classList.toggle('active');
    });
}