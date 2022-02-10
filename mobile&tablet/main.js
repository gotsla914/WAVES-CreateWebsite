const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navMenu = document.querySelector('.navbar_menu');
const navIcons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navIcons.classList.toggle('active');
});