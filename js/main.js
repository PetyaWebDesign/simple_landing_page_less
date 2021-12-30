// Main illustration 
gsap.from('.animated-image', {
    scale: 0.5,
    duration: 1.5
});

// E-mail form 
gsap.from('form', {
    x: -200,
    duration: 1.5
});

// Social icons
const icons = [...document.querySelectorAll('.social-icon')];
window.addEventListener('load', revealAnimation);

function revealAnimation() {
    const TLFADE = gsap.timeline();

    TLFADE
        .from(icons[0], { autoAlpha: 0, scale: 0.5 })
        .from(icons[1], { autoAlpha: 0, scale: 0.5 })
        .from(icons[2], { autoAlpha: 0, scale: 0.5 })
        .from(icons[3], { autoAlpha: 0, scale: 0.5 })
        .from(icons[4], { autoAlpha: 0, scale: 0.5 })
        .from(icons[5], { autoAlpha: 0, scale: 0.5 })
        .from(icons[6], { autoAlpha: 0, scale: 0.5 })
}

// Nav menu
let hamburger = document.querySelector('.hamburger');
let box = [...document.querySelectorAll('.box')];
hamburger.addEventListener('click', () => {
    let nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        for (let el of box) {
            el.style.background = 'white';
        }
    } else {
        for (let el of box) {
            el.style.background = '#372865';
        }
    }
});