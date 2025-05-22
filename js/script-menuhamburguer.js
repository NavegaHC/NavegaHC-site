const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuOffScreen = document.querySelector('.menu-off-screen');


menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('active');
    menuOffScreen.classList.toggle('active');
});