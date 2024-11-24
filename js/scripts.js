document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.side-nav-overlay');

    function toggleNav() {
        sideNav?.classList.toggle('active');
        overlay?.classList.toggle('active');
        document.body.style.overflow = sideNav?.classList.contains('active') ? 'hidden' : '';
    }

    hamburgerMenu?.addEventListener('click', toggleNav);
    overlay?.addEventListener('click', toggleNav);

    // Close navigation on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNav?.classList.contains('active')) {
            toggleNav();
        }
    });
});
