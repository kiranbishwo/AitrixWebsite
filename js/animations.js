// ============================================
// AITRIX LABS - ANIMATIONS CONTROLLER
// Handles scroll animations and interactions
// ============================================

// Intersection Observer for scroll animations with performance optimization
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Scroll-driven animations fallback for browsers without support
function initScrollDrivenFallback() {
    // Check if scroll-driven animations are supported
    if (CSS.supports('animation-timeline', 'scroll()')) {
        return; // Native support available
    }

    // Fallback: Use Intersection Observer for scroll-driven effects
    const scrollElements = document.querySelectorAll('.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right, .scroll-rotate-in');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

    scrollElements.forEach(el => scrollObserver.observe(el));
}

// Observe all elements with reveal classes
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-scroll, .reveal-stagger-scroll');
    revealElements.forEach(el => observer.observe(el));
    
    // Initialize scroll-driven fallback
    initScrollDrivenFallback();
}

// Parallax effect with performance optimization
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax, .parallax-slow, .parallax-medium, .parallax-fast');
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(el => {
            let speed = 0.5;
            if (el.classList.contains('parallax-slow')) speed = 0.3;
            else if (el.classList.contains('parallax-medium')) speed = 0.5;
            else if (el.classList.contains('parallax-fast')) speed = 0.7;
            else speed = el.dataset.speed || 0.5;
            
            const yPos = -(scrolled * speed);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// Counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const suffix = element.dataset.suffix || '';
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };
    
    updateCounter();
}

// Initialize counters when they come into view
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                entry.target.classList.add('counted');
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll progress indicator with debouncing
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;
    
    let ticking = false;
    
    function updateProgress() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });
}

// Lazy load images with performance optimization
function initLazyLoading() {
    // Lazy load images with data-src
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Add loading class for fade-in effect
                img.classList.add('lazy-loading');
                
                // Load image
                const tempImg = new Image();
                tempImg.onload = () => {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy-loading');
                    img.classList.add('lazy-loaded');
                    img.removeAttribute('data-src');
                };
                tempImg.src = img.dataset.src;
                
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px' // Start loading 50px before image enters viewport
    });
    
    images.forEach(img => {
        // Set placeholder or skeleton
        if (!img.src) {
            img.style.backgroundColor = 'var(--color-neutral-200)';
            img.style.minHeight = '200px';
        }
        imageObserver.observe(img);
    });
    
    // Lazy load background images
    const bgImages = document.querySelectorAll('[data-bg]');
    const bgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.backgroundImage = `url(${el.dataset.bg})`;
                el.removeAttribute('data-bg');
                bgObserver.unobserve(el);
            }
        });
    }, { rootMargin: '50px' });
    
    bgImages.forEach(el => bgObserver.observe(el));
}

// Initialize all animations
function initAnimations() {
    initScrollAnimations();
    initParallax();
    initCounters();
    initSmoothScroll();
    initScrollProgress();
    initLazyLoading();
}

// Export for global use
window.initAnimations = initAnimations;

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
