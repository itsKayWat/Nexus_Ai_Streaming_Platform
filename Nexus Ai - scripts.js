document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.querySelector('.side-nav');
    const mainContent = document.querySelector('.adaptive-layout');
    const overlay = document.querySelector('.side-nav-overlay');
    const closeNavButton = document.querySelector('.close-nav');

    // Check if elements exist
    if (!hamburgerMenu || !sideNav || !mainContent) {
        console.error('Required elements not found');
        return;
    }

    function toggleNav() {
        if (!sideNav || !mainContent) return;
        
        sideNav.classList.toggle('closed');
        mainContent.classList.toggle('expanded');
        
        // Handle overlay on mobile
        if (window.innerWidth <= 768) {
            if (sideNav.classList.contains('closed')) {
                overlay?.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                overlay?.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    }

    // Event Listeners
    hamburgerMenu.addEventListener('click', toggleNav);

    if (closeNavButton) {
        closeNavButton.addEventListener('click', toggleNav);
    }

    if (overlay) {
        overlay.addEventListener('click', toggleNav);
    }

    // Close navigation on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !sideNav.classList.contains('closed')) {
            toggleNav();
        }
    });

    // Handle initial state and resize
    function handleResize() {
        if (!sideNav || !mainContent) return;
        
        if (window.innerWidth <= 768) {
            sideNav.classList.add('closed');
            mainContent.classList.add('expanded');
        } else {
            sideNav.classList.remove('closed');
            mainContent.classList.remove('expanded');
        }
    }

    // Initial setup
    handleResize();
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
}); 