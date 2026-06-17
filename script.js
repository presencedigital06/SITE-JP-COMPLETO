const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});