document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.querySelector('.side-nav');
    
    function toggleNav() {
        if (!sideNav) return;
        const isOpen = sideNav.classList.contains('active');
        
        if (isOpen) {
            sideNav.classList.remove('active');
            sideNav.style.left = '-300px';
        } else {
            sideNav.classList.add('active');
            sideNav.style.left = '0';
        }
    }

    hamburgerMenu?.addEventListener('click', toggleNav);
});
