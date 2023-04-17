'use strict';

const menu = document.querySelector('.menu'),
    times = document.querySelector('.times'),
    bars = document.querySelector('.bars'),
    body = document.querySelector('body');

bars.addEventListener('click', () => {
    menu.classList.toggle('active')
});

times.addEventListener('click', () => {
    menu.classList.remove('active')
})

// window.oncontextmenu = () => {
//     alert("Siz bu saytni ma'lumotlarini ko'ra olmaysiz!")
//     return false
// }

body.oncopy = () => {
    alert("Siz bu saytni matnlarini ko'chira olmaysiz!");
    return false
}

const loading = document.querySelector('.loading')
const css = document.querySelector('.css')

window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none"
        css.style.display = "flex";
        // css.style. = "flex";
    }, 2000)
})