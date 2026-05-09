// ============================================
// AITRIX LABS - SPA ROUTER
// Client-side routing with History API
// ============================================

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.contentContainer = document.getElementById('app-content');
        this.init();
    }

    init() {
        // Define all routes
        this.routes = {
            '/': 'pages/home.html',
            '/about': 'pages/about.html',
            '/products': 'pages/products.html',
            '/products/iroms': 'pages/product-iroms.html',
            '/products/lms': 'pages/product-lms.html',
            '/products/livechat': 'pages/product-livechat.html',
            '/products/cms': 'pages/product-cms.html',
            '/contact': 'pages/contact.html'
        };

        // Handle initial load
        this.handleRoute(window.location.pathname);

        // Listen for popstate (back/forward buttons)
        window.addEventListener('popstate', (e) => {
            this.handleRoute(window.location.pathname, false);
        });

        // Intercept all anchor clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="/"]');
            if (link && !link.hasAttribute('data-external')) {
                e.preventDefault();
                this.navigate(link.getAttribute('href'));
            }
        });
    }

    async navigate(path, addToHistory = true) {
        // Normalize path
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        // Add to history
        if (addToHistory) {
            window.history.pushState({ path }, '', path);
        }

        // Handle route
        await this.handleRoute(path);
    }

    async handleRoute(path, animate = true) {
        // Normalize path
        if (path !== '/' && path.endsWith('/')) {
            path = path.slice(0, -1);
        }

        // Get route file
        const routeFile = this.routes[path] || this.routes['/'];

        // Show loading state
        const loader = document.getElementById('page-loader');
        if (loader && this.currentRoute !== null) {
            loader.classList.remove('hidden');
        }

        // Start page transition (skip on initial load)
        if (animate && this.contentContainer && this.currentRoute !== null) {
            this.contentContainer.classList.add('page-transition-out');
        }

        try {
            // Load page content
            const response = await fetch(routeFile);
            if (!response.ok) {
                throw new Error(`Failed to load ${routeFile}`);
            }
            const html = await response.text();

            // Wait for transition out (skip on initial load)
            if (animate && this.currentRoute !== null) {
                await this.waitForTransition();
            }

            // Update content
            if (this.contentContainer) {
                this.contentContainer.innerHTML = html;
            } else {
                // Fallback: replace entire body content
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                const newContent = tempDiv.querySelector('body') || tempDiv;
                document.body.innerHTML = newContent.innerHTML;
            }

            // Trigger theme change
            if (window.switchTheme) {
                window.switchTheme(path);
            }

            // Reinitialize animations and interactions
            this.reinitializePage();

            // Hide loader
            if (loader) {
                loader.classList.add('hidden');
            }

            // Transition in (skip on initial load)
            if (animate && this.contentContainer && this.currentRoute !== null) {
                requestAnimationFrame(() => {
                    this.contentContainer.classList.remove('page-transition-out');
                    this.contentContainer.classList.add('page-transition-in');
                    setTimeout(() => {
                        this.contentContainer.classList.remove('page-transition-in');
                        this.contentContainer.style.willChange = 'auto';
                    }, 300);
                });
            } else if (this.contentContainer) {
                // Initial load - just add fade in
                this.contentContainer.classList.add('page-transition-in');
                setTimeout(() => {
                    this.contentContainer.classList.remove('page-transition-in');
                    this.contentContainer.style.willChange = 'auto';
                }, 300);
            }

            this.currentRoute = path;

            // Scroll to top with smooth animation
            if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
                gsap.to(window, { duration: 0.5, scrollTo: 0, ease: 'power2.out' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

        } catch (error) {
            console.error('Route error:', error);
            // Hide loader on error
            const loader = document.getElementById('page-loader');
            if (loader) {
                loader.classList.add('hidden');
            }
            // Fallback to home
            if (path !== '/') {
                this.navigate('/', false);
            }
        }
    }

    waitForTransition() {
        return new Promise(resolve => {
            setTimeout(resolve, 300);
        });
    }

    reinitializePage() {
        // Wait for DOM to be ready
        requestAnimationFrame(() => {
            // Refresh ScrollTrigger if available
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }

            // Reinitialize scroll animations
            if (window.initAnimations) {
                window.initAnimations();
            }

            // Reinitialize interactions
            if (window.initInteractions) {
                window.initInteractions();
            }

            // Reinitialize particles if needed
            if (window.initParticles) {
                setTimeout(() => window.initParticles(), 100);
            }

            // Reinitialize advanced animations
            if (window.initAdvancedAnimations) {
                setTimeout(() => {
                    window.initAdvancedAnimations();
                    // Refresh ScrollTrigger again after animations init
                    if (typeof ScrollTrigger !== 'undefined') {
                        setTimeout(() => ScrollTrigger.refresh(), 100);
                    }
                }, 200);
            }

            // Reinitialize elegant features
            if (window.initElegantFeatures) {
                setTimeout(() => window.initElegantFeatures(), 300);
            }

            // Dispatch custom event for page load
            window.dispatchEvent(new CustomEvent('pageLoaded', { detail: { route: this.currentRoute } }));
        });
    }

    getCurrentRoute() {
        return this.currentRoute || window.location.pathname;
    }
}

// Initialize router when DOM is ready
let router;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        router = new Router();
        window.router = router;
    });
} else {
    router = new Router();
    window.router = router;
}
