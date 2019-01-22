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