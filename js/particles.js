// ============================================
// AITRIX LABS - PARTICLE SYSTEM
// CSS and Canvas-based particle effects
// ============================================

// Initialize particles.js if available
function initParticlesJS() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#3b82f6'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.3,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Create CSS-based floating particles
function createCSSParticles() {
    const particleContainer = document.querySelector('.particle-container');
    if (!particleContainer) return;

    // Create random floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 15;

        particle.className = `particle particle-${Math.random() > 0.5 ? 'small' : 'medium'}`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        particleContainer.appendChild(particle);
    }
}

// Update particle colors based on theme
function updateParticleColors() {
    const theme = document.body.getAttribute('data-theme');
    if (!theme) return;

    const themeColors = {
        home: '#3b82f6',
        about: '#ef4444',
        products: '#10b981',
        iroms: '#3b82f6',
        lms: '#8b5cf6',
        livechat: '#06b6d4',
        cms: '#6366f1',
        contact: '#3b82f6'
    };

    const color = themeColors[theme] || '#3b82f6';
    
    // Update CSS particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
        particle.style.background = color;
    });

    // Update particles.js if available
    if (typeof pJSDom !== 'undefined' && pJSDom[0] && pJSDom[0].pJS) {
        pJSDom[0].pJS.particles.color.value = color;
        pJSDom[0].pJS.particles.line_linked.color = color;
        pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Initialize particle system
function initParticles() {
    // Wait for particles.js to load if using CDN
    if (document.querySelector('script[src*="particles"]')) {
        const checkParticles = setInterval(() => {
            if (typeof particlesJS !== 'undefined') {
                initParticlesJS();
                clearInterval(checkParticles);
            }
        }, 100);
    } else {
        // Use CSS particles only
        createCSSParticles();
    }

    // Always create CSS particles as fallback
    createCSSParticles();

    // Update colors on theme change
    window.addEventListener('themeChanged', updateParticleColors);
    
    // Initial color update
    setTimeout(updateParticleColors, 100);
}

// Reinitialize on page load
window.addEventListener('pageLoaded', () => {
    setTimeout(initParticles, 300);
});

// Export for global use
window.initParticles = initParticles;

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticles);
} else {
    initParticles();
}
