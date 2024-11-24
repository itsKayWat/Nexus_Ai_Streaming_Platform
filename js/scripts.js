// Toggle Mobile Navigation Menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Open AI Chat Interface
document.getElementById('aiAssistant').addEventListener('click', function() {
    document.getElementById('aiChat').classList.add('open');
    document.getElementById('aiChat').setAttribute('aria-hidden', 'false');
});

// Close AI Chat Interface
document.querySelector('.close-chat').addEventListener('click', function() {
    document.getElementById('aiChat').classList.remove('open');
    document.getElementById('aiChat').setAttribute('aria-hidden', 'true');
});

// Open Modal Example
document.getElementById('exampleModal').style.display = 'none'; // Ensure modal is hidden initially

// Function to open modal (you can trigger this as needed)
function openModal() {
    document.getElementById('exampleModal').style.display = 'block';
    document.getElementById('exampleModal').setAttribute('aria-hidden', 'false');
}

// Function to close modal
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('exampleModal').style.display = 'none';
    document.getElementById('exampleModal').setAttribute('aria-hidden', 'true');
});

// Toggle Smart Notifications
// Assuming you have a button to toggle notifications
/*
document.getElementById('notificationsToggle').addEventListener('click', function() {
    document.querySelector('.smart-notifications').classList.toggle('active');
});
*/

// Add additional JavaScript functionality as needed

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update phase badge based on current progress
document.addEventListener('DOMContentLoaded', function() {
    const phaseBadge = document.querySelector('.phase-badge');
    if (phaseBadge) {
        const currentDate = new Date();
        const phase1End = new Date('2024-12-31');
        const phase2End = new Date('2025-09-30');
        const phase3End = new Date('2026-03-31');
        
        if (currentDate > phase3End) {
            phaseBadge.textContent = 'Launch Phase';
        } else if (currentDate > phase2End) {
            phaseBadge.textContent = 'Phase 3';
        } else if (currentDate > phase1End) {
            phaseBadge.textContent = 'Phase 2';
        } else {
            phaseBadge.textContent = 'Phase 1';
        }
    }
});

// Side Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideNav = document.querySelector('.side-nav');
    const closeNav = document.querySelector('.close-nav');
    const overlay = document.querySelector('.side-nav-overlay');

    function toggleNav() {
        sideNav?.classList.toggle('active');
        overlay?.classList.toggle('active');
        document.body.style.overflow = sideNav?.classList.contains('active') ? 'hidden' : '';
    }

    // Event Listeners
    hamburgerMenu?.addEventListener('click', toggleNav);
    overlay?.addEventListener('click', toggleNav);

    // Close navigation on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sideNav?.classList.contains('active')) {
            toggleNav();
        }
    });

    // Debug logging
    console.log('Hamburger menu:', hamburgerMenu);
    console.log('Side nav:', sideNav);
    console.log('Close button:', closeNav);
    console.log('Overlay:', overlay);
});
