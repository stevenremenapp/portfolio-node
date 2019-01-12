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

menuBtn.addEventListener('click', function() {
    menuBtn.style.display = "none";
    menuCloseBtn.style.display = "block";
    menu.style.display = "flex";
    overlay.style.display = "block";
});

menuCloseBtn.addEventListener('click', function() {
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
    menu.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener('click', function() {
    menuBtn.style.display = "block";
    menuCloseBtn.style.display = "none";
    menu.style.display = "none";
    overlay.style.display = "none";
});

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

// PROJECT PAGE DISPLAY OPTION

let libraryProjectsSelector = document.getElementById('projects-library');
let nonLibraryProjectsSelector = document.getElementById('projects-non-library');
let libraryProjectsDisplay = document.getElementById('library-projects');
let nonLibraryProjectsDisplay = document.getElementById('non-library-projects');

libraryProjectsSelector.addEventListener('click', function() {
    if (libraryProjectsDisplay.classList.contains('showProjects') || libraryProjectsDisplay.classList.contains('hideProjects')) {
        libraryProjectsDisplay.classList.remove('hideProjects');
        libraryProjectsDisplay.classList.add('showProjects');
        nonLibraryProjectsDisplay.classList.remove('showProjects');
        nonLibraryProjectsDisplay.classList.add('hideProjects');
    }
});

nonLibraryProjectsSelector.addEventListener('click', function() {
    libraryProjectsDisplay.classList.add('hideProjects');
    libraryProjectsDisplay.classList.remove('showProjects');
    nonLibraryProjectsDisplay.classList.add('showProjects');
    nonLibraryProjectsDisplay.classList.remove('hideProjects');
});

libraryProjectsSelector.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        if (libraryProjectsDisplay.classList.contains('showProjects') || libraryProjectsDisplay.classList.contains('hideProjects')) {
            libraryProjectsDisplay.classList.remove('hideProjects');
            libraryProjectsDisplay.classList.add('showProjects');
            nonLibraryProjectsDisplay.classList.remove('showProjects');
            nonLibraryProjectsDisplay.classList.add('hideProjects');
        }
    }
});

nonLibraryProjectsSelector.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        libraryProjectsDisplay.classList.add('hideProjects');
        libraryProjectsDisplay.classList.remove('showProjects');
        nonLibraryProjectsDisplay.classList.add('showProjects');
        nonLibraryProjectsDisplay.classList.remove('hideProjects');
    }
});
