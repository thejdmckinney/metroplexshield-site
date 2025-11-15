// MetroPlex Shield Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav__toggle');
    const navMenu = document.querySelector('.nav__menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--active');
            navToggle.classList.toggle('nav__toggle--active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav__link, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('nav__menu--active')) {
                        navMenu.classList.remove('nav__menu--active');
                        navToggle.classList.remove('nav__toggle--active');
                    }
                }
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.benefit, .plan, .hero__content, .feature, .schedule-item, .prevention-item, .calculator-summary');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Pricing Toggle Functionality - works for all pages
    function setupPricingToggle(toggleId) {
        const yearlyToggle = document.getElementById(toggleId);
        
        if (!yearlyToggle) return;
        
        const container = yearlyToggle.closest('.plan-hero, .plans');
        const toggleLabels = container.querySelectorAll('.toggle-label');
        const planAmounts = container.querySelectorAll('.plan__amount, .plan-hero__amount');
        const yearlyNotes = container.querySelectorAll('.plan__yearly-note');
        const subscribeButtons = container.querySelectorAll('.subscribe-btn');
        
        yearlyToggle.addEventListener('change', function() {
            const isYearly = this.checked;
            
            // Update toggle labels
            toggleLabels.forEach((label, index) => {
                if (index === 0 || index % 2 === 0) { // Monthly labels
                    label.classList.toggle('active', !isYearly);
                } else { // Yearly labels
                    label.classList.toggle('active', isYearly);
                }
            });
            
            // Update prices with animation
            planAmounts.forEach(amount => {
                const monthlyPrice = amount.dataset.monthly;
                const yearlyPrice = amount.dataset.yearly;
                
                if (monthlyPrice && yearlyPrice) {
                    // Add animation class
                    amount.style.transform = 'scale(0.8)';
                    amount.style.opacity = '0.5';
                    
                    setTimeout(() => {
                        amount.textContent = isYearly ? yearlyPrice : monthlyPrice;
                        amount.style.transform = 'scale(1)';
                        amount.style.opacity = '1';
                    }, 150);
                }
            });
            
            // Show/hide yearly savings notes
            yearlyNotes.forEach(note => {
                note.style.display = isYearly ? 'block' : 'none';
            });
            
            // Update subscribe button URLs
            subscribeButtons.forEach(button => {
                const monthlyUrl = button.dataset.monthlyUrl;
                const yearlyUrl = button.dataset.yearlyUrl;
                
                if (monthlyUrl && yearlyUrl) {
                    button.href = isYearly ? yearlyUrl : monthlyUrl;
                    
                    // Update button text with animation
                    button.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        button.textContent = isYearly ? 'Subscribe Yearly' : 'Subscribe Now';
                        button.style.transform = 'scale(1)';
                    }, 150);
                }
            });
        });
        
        // Initialize with monthly pricing
        if (toggleLabels.length > 0) {
            toggleLabels[0].classList.add('active');
        }
    }
    
    // Setup toggles for different pages
    setupPricingToggle('yearlyToggle'); // Homepage
    setupPricingToggle('essentialYearlyToggle'); // Essential plan page
    setupPricingToggle('guardianYearlyToggle'); // Guardian plan page  
    setupPricingToggle('premierYearlyToggle'); // Premier plan page

    // Mobile Navigation
    const mobileNavToggle = document.querySelector('.nav__toggle');
    const mobileNavMenu = document.querySelector('.nav__menu');
    
    if (mobileNavToggle && mobileNavMenu) {
        mobileNavToggle.addEventListener('click', function() {
            const isOpen = mobileNavMenu.classList.contains('nav__menu--open');
            
            if (isOpen) {
                mobileNavMenu.classList.remove('nav__menu--open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            } else {
                mobileNavMenu.classList.add('nav__menu--open');
                mobileNavToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            }
        });
        
        // Close menu when clicking on a link
        const mobileNavLinks = mobileNavMenu.querySelectorAll('.nav__link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavMenu.classList.remove('nav__menu--open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNavToggle.contains(e.target) && !mobileNavMenu.contains(e.target)) {
                mobileNavMenu.classList.remove('nav__menu--open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavMenu.classList.contains('nav__menu--open')) {
                mobileNavMenu.classList.remove('nav__menu--open');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = 'auto';
                mobileNavToggle.focus();
            }
        });
    }

    // Performance Optimizations
    
    // Lazy loading for images (fallback for older browsers)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Preload critical resources
    function preloadCriticalResources() {
        const criticalImages = [
            'assets/images/metroplex-shield-logo.svg'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
        document.documentElement.style.setProperty('--transition-duration', '0s');
    }

    // Performance timing (for debugging)
    if (window.performance) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        });
    }

    // Prevention Calculator Interactive Effects
    const preventionItems = document.querySelectorAll('.prevention-item');
    
    preventionItems.forEach((item, index) => {
        // Staggered animation entrance
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);

        // Hover effect for cost highlighting
        item.addEventListener('mouseenter', function() {
            const cost = this.querySelector('.prevention-cost');
            if (cost) {
                cost.style.transform = 'scale(1.1)';
                cost.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const cost = this.querySelector('.prevention-cost');
            if (cost) {
                cost.style.transform = 'scale(1)';
            }
        });
    });

    // Plan card hover effects
    const planCards = document.querySelectorAll('.plan');
    
    planCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('plan--popular')) {
                this.style.transform = 'translateY(0)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = this.querySelector('input[name="name"]');
            const email = this.querySelector('input[name="email"]');
            const phone = this.querySelector('input[name="phone"]');
            
            if (!name.value || !email.value || !phone.value) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
            if (!phoneRegex.test(phone.value.replace(/\D/g, ''))) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Collect form data
            const formData = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                plan: this.querySelector('select[name="plan"]')?.value || '',
                message: this.querySelector('textarea[name="message"]')?.value || '',
                timestamp: new Date().toISOString(),
                page: window.location.pathname
            };
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Submit to Formspree
            fetch('https://formspree.io/f/xblqogvn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your interest! We will contact you within 24 hours to schedule your consultation.');
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again or call us directly at (682) 466-2130.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }

    // Add loading states for buttons
    const ctaButtons = document.querySelectorAll('.btn[href^="http"], .btn[href$=".html"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 1000);
        });
    });

    // Animated Counter for Prevention Costs (when visible)
    function animateCounter(element, targetText, duration = 2000) {
        if (!targetText.includes('$') || targetText.includes('Priceless')) return;
        
        const numbers = targetText.match(/\d+/g);
        if (!numbers) return;
        
        const startNum = 0;
        const endNum = parseInt(numbers[0]);
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startNum + (endNum - startNum) * easeOutQuart);
            
            element.textContent = targetText.replace(endNum.toString(), current.toString());
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = targetText; // Ensure final value is exact
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Trigger counter animation when prevention calculator comes into view
    const calculatorObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const costElements = entry.target.querySelectorAll('.prevention-cost');
                costElements.forEach((cost, index) => {
                    setTimeout(() => {
                        animateCounter(cost, cost.textContent);
                    }, index * 200);
                });
                calculatorObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const preventionCalculator = document.querySelector('.prevention-calculator');
    if (preventionCalculator) {
        calculatorObserver.observe(preventionCalculator);
    }

    // Add CSS for animations and mobile menu
    const style = document.createElement('style');
    style.textContent = `
        .header--scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 768px) {
            .nav__menu--active {
                display: flex !important;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: white;
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                border-top: 1px solid #e2e8f0;
            }
            
            .nav__menu--active .nav__link {
                padding: 1rem 0;
                border-bottom: 1px solid #f7fafc;
            }
        }
        
        .nav__toggle--active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .nav__toggle--active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav__toggle--active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .benefit, .plan, .hero__content, .feature, .schedule-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .benefit.animate-in, .plan.animate-in, .hero__content.animate-in, 
        .feature.animate-in, .schedule-item.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Loading spinner for buttons */
        .btn.loading {
            position: relative;
            color: transparent !important;
        }
        
        .btn.loading::after {
            content: "";
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 50%;
            margin-left: -8px;
            margin-top: -8px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }
        
        /* Form enhancements */
        .form-group.error input,
        .form-group.error textarea {
            border-color: #e53e3e;
            box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
        }
        
        .form-group.success input,
        .form-group.success textarea {
            border-color: #38a169;
            box-shadow: 0 0 0 3px rgba(56, 161, 105, 0.1);
        }
        
        /* Smooth transitions for all interactive elements */
        .btn, .plan, .benefit, .feature {
            transition: all 0.3s ease;
        }
        
        /* Focus states for accessibility */
        .btn:focus,
        input:focus,
        textarea:focus {
            outline: 2px solid #3182ce;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
});

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
}

function showFieldError(field, message) {
    field.parentElement.classList.add('error');
    field.parentElement.classList.remove('success');
}

function showFieldSuccess(field) {
    field.parentElement.classList.add('success');
    field.parentElement.classList.remove('error');
}

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perf = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', Math.round(perf.loadEventEnd - perf.loadEventStart), 'ms');
        }, 0);
    });
}

// Service worker registration for offline capability (future enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registration successful');
        // }).catch(function(err) {
        //     console.log('ServiceWorker registration failed');
        // });
    });
}