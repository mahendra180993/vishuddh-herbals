// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

const navbar = document.getElementById('navbar');
if (navbar) {
  const navLinks = navbar.querySelectorAll('a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-green-700', 'shadow-md');
      navbar.classList.remove('bg-transparent');
      navbar.style.top = '0px';
      navLinks.forEach(a => {
        if (!a.classList.contains('olive-green'))
          a.classList.replace('text-white', 'text-gray-200');
      });
    } else {
      navbar.classList.remove('bg-green-700', 'shadow-md');
      navbar.classList.add('bg-transparent');
      navbar.style.top = '32px';
      navLinks.forEach(a => {
        if (!a.classList.contains('olive-green'))
          a.classList.replace('text-gray-200', 'text-white');
      });
    }
  });
}
