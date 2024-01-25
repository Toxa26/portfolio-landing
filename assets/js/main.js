// ---------------------------- Preloader ----------------------------

const preloader = document.querySelector('.preloader');
const typedTextSpan = document.querySelector('.typed-name');
const cursorSpan = document.querySelector('.typed-cursor');
const textArray = ['Anton'];
const typingDelay = 150;
const newTextDelay = 700;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
   if(charIndex < textArray[textArrayIndex].length) {
       if(!cursorSpan.classList.contains('typing')) {
           cursorSpan.classList.add('typing');
       }
       typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
       charIndex++;
       setTimeout(type, typingDelay);
   }
   else {
       cursorSpan.classList.remove('typing');
   }
}

document.addEventListener('DOMContentLoaded', () => {
   if(textArray.length) {
       setTimeout(type, newTextDelay);
   }
});

cursorSpan.addEventListener('animationend', () => {
   preloader.classList.add('hide-loader');
});

// ---------------------------- Preloader ----------------------------


// ---------------------------- Scroll ----------------------------

const navbar = document.querySelector('#navbar');
const scrollTop = document.querySelector('.scroll-top');

document.addEventListener('scroll', () => {
    window.scrollY > 1 ? navbar.classList.add('scroll') : navbar.classList.remove('scroll');
    window.scrollY > 500 ? scrollTop.classList.remove('d-none') : scrollTop.classList.add('d-none');
});

// ---------------------------- Scroll ----------------------------

// ---------------------------- Mobile navbar ----------------------------

const mobileNavbar = document.querySelector('#navbar-mobile');
const navbarOpenButton = document.querySelector('#navbar-open');
const navbarCloseButton = document.querySelector('#navbar-close');
const mobileNavbarItem = Array.from(document.querySelectorAll('#navbar-mobile li'));

navbarOpenButton.addEventListener('click', openMobileNavbar);
navbarCloseButton.addEventListener('click', closeMobileNavbar);

mobileNavbarItem.forEach(item => {
    item.addEventListener('click', closeMobileNavbar);
});

function openMobileNavbar() {
    mobileNavbar.classList.add('active');
}
function closeMobileNavbar() {
    mobileNavbar.classList.remove('active');
}

// ---------------------------- Mobile navbar ----------------------------
