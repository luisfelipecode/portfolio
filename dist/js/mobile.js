"use strict";
const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event) {
    'touchstart' === event.type ? event.preventDefault() : null;
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    btnMobile.classList.toggle('active', active);
    nav.addEventListener('click', (event) => {
        event.target.tagName === 'A' ? nav.classList.remove('active') : null;
    });
}
btnMobile.addEventListener('click', toggleMenu),
    btnMobile.addEventListener('touchstart', toggleMenu);
