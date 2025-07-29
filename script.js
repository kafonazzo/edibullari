AOS.init();

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

// Navbar scroll transparency effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('transparent');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
    }
});

// Toggle menu mobile with animation
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});