// ============================================
// AITRIX LABS - ADVANCED ANIMATIONS
// Antigravity-style scroll-driven animations
// ============================================

// Register GSAP plugins
if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    if (typeof ScrollToPlugin !== 'undefined') {
        gsap.registerPlugin(ScrollToPlugin);
    }
}

// Advanced scroll-jacking with smooth section transitions (OPTIMIZED)
function initScrollJacking() {
    const sections = document.querySelectorAll('.scroll-section');
    if (sections.length === 0) return;

    // Disable scroll-jacking by default for better UX - only enable on specific pages if needed
    // This was causing lag, so we'll use smooth native scrolling instead
    return;
}

// Advanced parallax with GSAP (OPTIMIZED)
function initAdvancedParallax() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Parallax for hero elements - optimized with will-change
    gsap.utils.toArray('.parallax-element').forEach((element) => {
        const speed = parseFloat(element.dataset.speed) || 0.3; // Reduced speed for performance
        element.style.willChange = 'transform';
        
        gsap.to(element, {
            y: () => window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element.closest('.scroll-section') || document.body,
                start: 'top top',
                end: 'bottom top',
                scrub: 1, // Smoother scrub
                invalidateOnRefresh: true
            },
            onComplete: () => {
                element.style.willChange = 'auto';
            }
        });
    });

    // 3D rotation on scroll - only for specific elements
    gsap.utils.toArray('.rotate-3d').forEach((element) => {
        element.style.willChange = 'transform';
        gsap.to(element, {
            rotationY: 15, // Reduced rotation for performance
            rotationX: 5,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                invalidateOnRefresh: true
            },
            onComplete: () => {
                element.style.willChange = 'auto';
            }
        });
    });
}

// Magnetic cursor effect (OPTIMIZED)
function initMagneticCursor() {
    if (typeof gsap === 'undefined') return;
    
    const magneticElements = document.querySelectorAll('.magnetic');
    if (magneticElements.length === 0) return;
    
    magneticElements.forEach(element => {
        // Use transform for better performance
        element.style.willChange = 'transform';
        
        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(element, {
                x: x * 0.2, // Reduced movement for subtlety
                y: y * 0.2,
                duration: 0.2, // Faster for responsiveness
                ease: 'power1.out'
            });
        };
        
        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.4,
                ease: 'power2.out',
                onComplete: () => {
                    element.style.willChange = 'auto';
                }
            });
        };
        
        element.addEventListener('mousemove', handleMouseMove, { passive: true });
        element.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Text reveal animations (OPTIMIZED)
function initTextReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.text-reveal').forEach((element) => {
        // Skip if already processed
        if (element.dataset.revealed === 'true') return;
        element.dataset.revealed = 'true';
        
        const text = element.textContent.trim();
        if (!text) return;
        
        element.innerHTML = text.split('').map((char) => 
            char === ' ' ? '<span class="inline-block">&nbsp;</span>' : `<span class="inline-block opacity-0 translate-y-5">${char}</span>`
        ).join('');
        
        const chars = element.querySelectorAll('span');
        
        gsap.to(chars, {
            opacity: 1,
            y: 0,
            duration: 0.8, // Slower, more elegant
            stagger: 0.03, // Slower stagger for elegance
            ease: 'power3.out', // Smoother easing
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}

// Image reveal with clip path (OPTIMIZED)
function initImageReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.image-reveal').forEach((image) => {
        // Skip if already animated
        if (image.dataset.revealed === 'true') return;
        image.dataset.revealed = 'true';
        
        // Set initial state
        gsap.set(image, {
            opacity: 0,
            y: 50,
            scale: 0.95
        });
        
        gsap.to(image, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5, // Slower, more elegant reveal
            ease: 'power3.out', // Smoother easing
            scrollTrigger: {
                trigger: image,
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        });
    });
}

// Number counter with scroll
function initScrollCounter() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    document.querySelectorAll('[data-counter]').forEach((counter) => {
        const target = parseFloat(counter.dataset.counter);
        const suffix = counter.dataset.suffix || '';
        
        gsap.to({ value: 0 }, {
            value: target,
            duration: 3, // Slower, more elegant counting
            ease: 'power2.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                counter.textContent = Math.floor(this.targets()[0].value) + suffix;
            }
        });
    });
}

// Stagger animations for cards (OPTIMIZED)
function initStaggerCards() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.stagger-card').forEach((container) => {
        // Skip if already animated
        if (container.dataset.animated === 'true') return;
        container.dataset.animated = 'true';
        
        const cards = container.querySelectorAll('.card, .bento-card, [class*="card"], .about-feature, .why-choose-item');
        if (cards.length === 0) return;
        
        // Set initial state
        gsap.set(cards, {
            opacity: 0,
            y: 50,
            scale: 0.95
        });
        
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.08, // Faster stagger
            ease: 'power2.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 75%',
                toggleActions: 'play none none none',
                once: true // Only animate once
            }
        });
    });
}

// Blob morphing animation
function initBlobMorph() {
    const blobs = document.querySelectorAll('.blob-morph');
    
    blobs.forEach(blob => {
        const morph = () => {
            const random1 = Math.random() * 50 + 50;
            const random2 = Math.random() * 50 + 50;
            const random3 = Math.random() * 50 + 50;
            const random4 = Math.random() * 50 + 50;
            
            blob.style.borderRadius = `${random1}% ${random2}% ${random3}% ${random4}% / ${random4}% ${random1}% ${random2}% ${random3}%`;
        };
        
        setInterval(morph, 3000);
        morph();
    });
}

// Gradient animation on scroll
function initGradientScroll() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.utils.toArray('.gradient-scroll').forEach((element) => {
        gsap.to(element, {
            backgroundPosition: '200% 200%',
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
}

// Initialize all advanced animations (OPTIMIZED)
function initAdvancedAnimations() {
    // Use requestAnimationFrame for better performance
    const init = () => {
        requestAnimationFrame(() => {
            // Initialize in order of priority
            initStaggerCards(); // Most visible
            initTextReveal();
            initImageReveal();
            initScrollCounter();
            initAdvancedParallax();
            initMagneticCursor();
            initBlobMorph();
            initGradientScroll();
            // Skip scroll-jacking as it causes lag
            // initScrollJacking();
        });
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Reinitialize on page load
window.addEventListener('pageLoaded', () => {
    setTimeout(initAdvancedAnimations, 300);
});

// Export
window.initAdvancedAnimations = initAdvancedAnimations;

// Initialize
initAdvancedAnimations();
