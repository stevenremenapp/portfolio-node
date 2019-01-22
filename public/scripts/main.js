// NAME ANIMATION

// document.getElementById('hero-left').addEventListener('mouseover', function(event) {
//     console.log(event.target);
// });

let animationLetter = document.getElementsByClassName('animation-letter');

for (let i = 0; i < animationLetter.length; i++) {
    animationLetter[i].addEventListener('mouseover', function() {
        animationLetter[i].classList.add('animatedLetter');
    });
    animationLetter[i].addEventListener('animationend', function() {
        animationLetter[i].classList.remove('animatedLetter');
    });
}

// MENU

let menuBtn = document.querySelector('.menu-icon');
let menuCloseBtn = document.querySelector('.menu-closed-icon');
let menu = document.querySelector('.menu');
let overlay = document.querySelector('.menu-overlay');

function openNav() {
    menuBtn.style.display = "none";
    menuCloseBtn.style.display = "block";
    menu.style.display = "flex";
    overlay.style.display = "block";
}

function closeNav() {
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
    menu.style.display = "none";
    overlay.style.display = "none";
}

menuBtn.addEventListener('click', function() {
    openNav();
});

menuBtn.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        openNav();
    }
});

menuCloseBtn.addEventListener('click', function() {
    closeNav();
});

menuCloseBtn.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        closeNav();
    }
});

overlay.addEventListener('click', function() {
    closeNav();
});

// MENU BUTTON ANIMATIONS

menuBtn.addEventListener('mouseover', function() {
    TweenMax.to("#menu-top", 0.75, {attr:{width:18}, repeat:-1, yoyo:true});
    TweenMax.to("#menu-middle", 0.75, {attr:{width:12}, repeat:-1, yoyo:true});
    TweenMax.to("#menu-bottom", 0.75, {attr:{width:4}, repeat:-1, yoyo:true});
});

menuBtn.addEventListener('mouseout', function() {
    TweenMax.to("#menu-top", 0.25, {attr:{width:30}});
    TweenMax.to("#menu-middle", 0.25, {attr:{width:30}});
    TweenMax.to("#menu-bottom", 0.25, {attr:{width:30}});
});

menuCloseBtn.addEventListener('mouseover', function() {
    TweenMax.to('.menu-closed-x', 0.75, {attr:{width:4}, repeat:-1, yoyo:true, ease: Power2.easeInOut});
});

menuCloseBtn.addEventListener('mouseout', function() {
    TweenMax.to('.menu-closed-x', 0.25, {attr:{width:12}});
});

// CONTACT WIDGET

let contactWidget = document.querySelector('.contact-widget');

contactWidget.addEventListener('click', function(event) {
    if (event.target.classList.contains('home') || event.target.classList.contains('fas') || event.target.classList.contains('contact-widget')) {
        contactWidget.classList.toggle('active');
    }
    if (contactWidget.classList.contains('active')) {
        for (let i = 0; i < contactWidget.children.length; i++) {
            contactWidget.children[i].classList.add('active');
        }
    }
    if (!contactWidget.classList.contains('active') && event.target.classList.contains('fa-times')) {
        for (let i = 0; i < contactWidget.children.length; i++) {
            contactWidget.children[i].classList.remove('active');
        }
    }
});