// header

let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    header.classList.toggle('active');
};

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    header.classList.remove('active');
}


// theme color

let themeColor = document.querySelector('#theme-color');

themeColor.onclick = () => {
    themeColor.classList.toggle('fa-sun');
    themeColor.classList.toggle('fa-moon');
    document.body.classList.toggle('active');
};



