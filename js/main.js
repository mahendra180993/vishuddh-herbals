// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if(menuToggle){
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Sticky navbar & color change
const navbar = document.getElementById('navbar');
if(navbar){
    const navLinks = navbar.querySelectorAll('a');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.remove('absolute');
            navbar.classList.add('sticky', 'top-0', 'bg-[#549777]', 'shadow-md');
            navLinks.forEach(a => {
                if(!a.classList.contains('olive-green')) a.classList.replace('text-white','text-gray-200');
            });
        } else {
            navbar.classList.add('absolute');
            navbar.classList.remove('sticky','top-0','bg-[#549777]','shadow-md');
            navLinks.forEach(a => {
                if(!a.classList.contains('olive-green')) a.classList.replace('text-gray-200','text-white');
            });
        }
    });
}
