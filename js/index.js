const menuBtn = document.querySelector('.menu-btn');
const navUL = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navUL.style.transform === 'translateX(120%)'
    ? (navUL.style.transform = 'translateX(0)')
    : (navUL.style.transform = 'translateX(120%)');
});
