document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        navbar.classList.toggle('active');
    };

    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2500,
        delay: 400
    });

    ScrollReveal().reveal('.heading, .ride-container .box', { delay: 500, origin: 'top' });
    ScrollReveal().reveal('.text, .form-container', { delay: 600, origin: 'left' });
});
