// ============================================
// AITRIX LABS - INTERACTIONS
// Interactive features and UI controls
// ============================================

// Navbar scroll behavior with debouncing
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    let ticking = false;

    function updateNavbar() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
}

// Mobile menu toggle with smooth animations
function initMobileMenu() {
    const menuToggle = document.querySelector('.navbar-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Animate menu items
        mobileLinks.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                link.style.transition = 'all 0.3s ease-out';
                link.style.opacity = '1';
                link.style.transform = 'translateY(0)';
            }, index * 50);
        });
    });

    const closeMobileMenu = () => {
        // Animate out
        mobileLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.transition = 'all 0.2s ease-in';
                link.style.opacity = '0';
                link.style.transform = 'translateY(-20px)';
            }, index * 30);
        });
        
        setTimeout(() => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }, 200);
    };

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Form validation and submission
function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.message) {
            showFormMessage('Please fill in all required fields', 'error');
            return;
        }

        if (!isValidEmail(data.email)) {
            showFormMessage('Please enter a valid email address', 'error');
            return;
        }

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
    const messageEl = document.querySelector('.form-message');
    if (!messageEl) {
        const newMessageEl = document.createElement('div');
        newMessageEl.className = `form-message ${type}`;
        newMessageEl.textContent = message;
        document.querySelector('#contact-form').appendChild(newMessageEl);

        setTimeout(() => newMessageEl.remove(), 5000);
    } else {
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
    }
}

// Product card interactions
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        });
    });
}

// Cursor effect (optional premium feature)
function initCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;

        cursorX += dx * 0.1;
        cursorY += dy * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .product-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
}

// Newsletter form
function initNewsletter() {
    const form = document.querySelector('#newsletter-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;

        if (isValidEmail(email)) {
            alert('Thank you for subscribing!');
            form.reset();
        } else {
            alert('Please enter a valid email address');
        }
    });
}

// Initialize all interactions
function initInteractions() {
    initNavbar();
    initMobileMenu();
    initContactForm();
    initProductCards();
    initNewsletter();
    // initCursorEffect(); // Uncomment for custom cursor
}

// Export for global use
window.initInteractions = initInteractions;

// Run on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInteractions);
} else {
    initInteractions();
}

// Export for use in other modules
window.closeMobileMenu = function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
};
