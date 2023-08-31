let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

ScrollReveal().reveal(".hero-text", {delay: 900, origin:'top'})
ScrollReveal().reveal(".hero-img", {delay: 1200, origin:'right'})