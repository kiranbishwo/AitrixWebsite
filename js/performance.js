// ============================================
// AITRIX LABS - PERFORMANCE OPTIMIZATIONS
// Performance monitoring and optimizations
// ============================================

// Debounce utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle utility
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Optimize images on load
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading="lazy" if not present
        if (!img.hasAttribute('loading')) {
            img.loading = 'lazy';
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
            img.decoding = 'async';
        }
    });
}

// Preload critical resources
function preloadCriticalResources() {
    // Preload next likely page
    const currentRoute = window.location.pathname;
    const preloadRoutes = {
        '/': '/about',
        '/about': '/products',
        '/products': '/contact'
    };
    
    const nextRoute = preloadRoutes[currentRoute];
    if (nextRoute) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = `pages${nextRoute === '/' ? '/home' : nextRoute}.html`;
        document.head.appendChild(link);
    }
}

// Monitor performance
function initPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        // Monitor long tasks
        try {
            const longTaskObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 50) {
                        console.warn('Long task detected:', entry.duration, 'ms');
                    }
                }
            });
            longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
            // Long task observer not supported
        }
        
        // Monitor layout shifts
        try {
            const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput && entry.value > 0.1) {
                        console.warn('Layout shift detected:', entry.value);
                    }
                }
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            // Layout shift observer not supported
        }
    }
}

// Optimize scroll handlers
function optimizeScrollHandlers() {
    // Use passive event listeners where possible
    const scrollHandlers = [];
    
    // Store original addEventListener
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    
    // Override for scroll events
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'scroll' || type === 'touchmove' || type === 'wheel') {
            options = options || {};
            if (typeof options === 'boolean') {
                options = { passive: true, capture: options };
            } else {
                options.passive = options.passive !== false;
            }
        }
        return originalAddEventListener.call(this, type, listener, options);
    };
}

// Initialize performance optimizations
function initPerformance() {
    optimizeImages();
    preloadCriticalResources();
    initPerformanceMonitoring();
    optimizeScrollHandlers();
}

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPerformance);
} else {
    initPerformance();
}

// Export utilities
window.debounce = debounce;
window.throttle = throttle;
