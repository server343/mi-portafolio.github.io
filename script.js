document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const homeLink = document.getElementById('homeLink');
    const projectsLink = document.getElementById('projectsLink');
    const aboutLink = document.getElementById('aboutLink');
    const homeSection = document.getElementById('homeSection');
    const projectsSection = document.getElementById('projectsSection');
    const aboutSection = document.getElementById('aboutSection');

    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
    });

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'block';
        projectsSection.style.display = 'none';
        aboutSection.style.display = 'none';
        document.querySelector('.image-container').style.display = 'block';
    });

    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        projectsSection.style.display = 'flex';
        aboutSection.style.display = 'none';
        document.querySelector('.image-container').style.display = 'none';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        projectsSection.style.display = 'none';
        aboutSection.style.display = 'flex';
        document.querySelector('.image-container').style.display = 'none';
    });
});
