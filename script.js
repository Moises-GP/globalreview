//Script-Toggle-Menu

const toggleMenu = document.getElementById('toggleMenu');
const navbar = document.querySelector('.navbar');
const buttonGroupDesktop = document.querySelector('.button-group-desktop');

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const expanded = navbar.classList.contains('active');
    toggleMenu.setAttribute('aria-expanded', expanded);
    toggleMenu.classList.toggle('active');
});

// Script-Index

document.querySelectorAll('.card-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
});