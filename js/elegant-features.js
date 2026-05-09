// ============================================
// AITRIX LABS - ELEGANT FEATURES
// Additional beautiful features and interactions
// ============================================

// Elegant cursor glow effect
function initElegantCursor() {
    if (window.innerWidth < 768) return; // Skip on mobile
    
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15; // Slower, more elegant
        cursorY += dy * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hide on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.opacity = '0.5';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '1';
        });
    });
}

// Elegant scroll reveal with slower timing
function initElegantReveal() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.utils.toArray('.elegant-reveal').forEach((element) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 60,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.5, // Slower
                ease: 'power3.out', // Smoother
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
}

// Elegant number counting with slower animation
function initElegantCounters() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    document.querySelectorAll('[data-counter-elegant]').forEach((counter) => {
        const target = parseFloat(counter.dataset.counterElegant);
        const suffix = counter.dataset.suffix || '';
        const duration = parseFloat(counter.dataset.duration) || 4; // Slower default
        
        gsap.to({ value: 0 }, {
            value: target,
            duration: duration,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none',
                once: true
            },
            onUpdate: function() {
                counter.textContent = Math.floor(this.targets()[0].value) + suffix;
            }
        });
    });
}

// Elegant parallax with slower movement
function initElegantParallax() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    gsap.utils.toArray('.parallax-elegant').forEach((element) => {
        const speed = parseFloat(element.dataset.speed) || 0.2; // Slower default
        element.style.willChange = 'transform';
        
        gsap.to(element, {
            y: () => window.innerHeight * speed,
            ease: 'none',
            scrollTrigger: {
                trigger: element.closest('.scroll-section') || document.body,
                start: 'top top',
                end: 'bottom top',
                scrub: 2, // Slower scrub for elegance
                invalidateOnRefresh: true
            },
            onComplete: () => {
                element.style.willChange = 'auto';
            }
        });
    });
}

// Elegant image zoom on hover
function initElegantImageZoom() {
    const images = document.querySelectorAll('.image-zoom-elegant');
    
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(image, {
                    scale: 1.05,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        });
        
        image.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined') {
                gsap.to(image, {
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// Elegant progress bars
function initElegantProgressBars() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    document.querySelectorAll('.progress-bar-elegant').forEach((bar) => {
        const percentage = parseFloat(bar.dataset.percentage) || 0;
        const fill = bar.querySelector('.progress-fill');
        
        if (!fill) return;
        
        gsap.fromTo(fill,
            { width: '0%' },
            {
                width: percentage + '%',
                duration: 2.5, // Slower
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
}

// Elegant section transitions
function initElegantSectionTransitions() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    
    const sections = document.querySelectorAll('.scroll-section');
    
    sections.forEach((section, index) => {
        if (index === 0) return;
        
        gsap.fromTo(section,
            {
                opacity: 0,
                y: 100
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    once: true
                }
            }
        );
    });
}

// Initialize all elegant features
function initElegantFeatures() {
    const init = () => {
        requestAnimationFrame(() => {
            initElegantCursor();
            initElegantReveal();
            initElegantCounters();
            initElegantParallax();
            initElegantImageZoom();
            initElegantProgressBars();
            initElegantSectionTransitions();
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
    setTimeout(initElegantFeatures, 300);
});

// Export
window.initElegantFeatures = initElegantFeatures;

// Initialize
initElegantFeatures();
