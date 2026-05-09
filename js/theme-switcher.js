// ============================================
// AITRIX LABS - THEME SWITCHER
// Dynamically apply themes based on route
// ============================================

const themeMap = {
    '/': 'home',
    '/about': 'about',
    '/products': 'products',
    '/products/iroms': 'iroms',
    '/products/lms': 'lms',
    '/products/livechat': 'livechat',
    '/products/cms': 'cms',
    '/contact': 'contact'
};

function switchTheme(route) {
    // Normalize route
    if (route !== '/' && route.endsWith('/')) {
        route = route.slice(0, -1);
    }

    // Get theme name
    const theme = themeMap[route] || 'home';

    // Apply theme to body
    document.body.setAttribute('data-theme', theme);
    document.body.classList.add('theme-transition');

    // Update active navigation link
    updateActiveNavLink(route);

    // Dispatch theme change event
    window.dispatchEvent(new CustomEvent('themeChanged', { 
        detail: { theme, route } 
    }));

    // Remove transition class after animation
    setTimeout(() => {
        document.body.classList.remove('theme-transition');
    }, 500);
}

function updateActiveNavLink(route) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to current route
    const currentLink = document.querySelector(`.navbar-link[href="${route}"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }

    // Handle mobile menu
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === route) {
            link.classList.add('active');
        }
    });
}

// Initialize theme on load
function initTheme() {
    const currentRoute = window.location.pathname;
    switchTheme(currentRoute);
}

// Listen for route changes
window.addEventListener('pageLoaded', (e) => {
    const route = e.detail?.route || window.location.pathname;
    switchTheme(route);
});

// Listen for theme change events
window.addEventListener('themeChanged', (e) => {
    console.log('Theme changed to:', e.detail.theme);
});

// Export for use in router
window.switchTheme = switchTheme;

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
