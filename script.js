/**
 * ========================================
 * JAYSEL CHIT FUNDS LANDING PAGE - MAIN JAVASCRIPT
 * ========================================
 * 
 * This file contains all interactive functionality for the landing page:
 * - Navigation behavior (scroll effects, mobile menu)
 * - FAQ accordion functionality
 * - Smooth scrolling navigation
 * - Social welfare photo carousel
 * - Language toggle system (English/Tamil)
 * - Modal functionality
 * 
 * All functions are wrapped in DOMContentLoaded to ensure HTML is fully loaded
 * before JavaScript execution begins.
 */

// ========================================
// GLOBAL VARIABLES
// ========================================

// Current language - will be set by overlay or localStorage
let currentLang = 'en';

// ========================================
// DEVICE DETECTION AND TAMIL TEXT OPTIMIZATION
// ========================================

/**
 * Detect Android devices and apply Tamil text optimizations
 */
function detectAndOptimizeForAndroid() {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isTamil = document.documentElement.lang === 'ta';
    
    if (isAndroid && isTamil) {
        console.log('Android device detected with Tamil language - applying optimizations');
        
        // Add Android-specific class for additional CSS targeting
        document.body.classList.add('android-tamil');
        
        // Force reflow to ensure proper text rendering
        setTimeout(() => {
            const elements = document.querySelectorAll('h1, h2, h3, p, .btn');
            elements.forEach(el => {
                el.style.transform = 'translateZ(0)';
            });
        }, 100);
    }
}

// Apply optimizations when language changes
function applyTamilOptimizations() {
    if (currentLang === 'ta') {
        document.documentElement.lang = 'ta';
        detectAndOptimizeForAndroid();
        
        // Additional mobile optimizations
        if (window.innerWidth <= 768) {
            // Adjust viewport for better Tamil text rendering
            const viewport = document.querySelector('meta[name="viewport"]');
            if (viewport) {
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            }
        }
    } else {
        document.documentElement.lang = 'en';
        document.body.classList.remove('android-tamil');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // NAVIGATION AND HEADER FUNCTIONALITY
    // ========================================
    
    /**
     * Header scroll behavior and mobile menu functionality
     * 
     * Elements affected in index.html:
     * - <header> - Gets 'scrolled' class and transform animations
     * - .mobile-menu-btn - Toggles mobile navigation
     * - .nav-links - Shows/hides on mobile, contains navigation links
     */
    const header = document.querySelector('header');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let lastScroll = 0;

    /**
     * SCROLL EVENT HANDLER
     * 
     * Controls header appearance and behavior based on scroll position
     * 
     * Effects on index.html elements:
     * - <header> - Adds 'scrolled' class when scrolled > 50px
     * - <header> - Applies transform: translateY(-100%) to hide on scroll down
     * - <header> - Applies transform: translateY(0) to show on scroll up
     * 
     * CSS classes used:
     * - .scrolled - Defined in styles.css for enhanced header styling
     */
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show navbar based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    /**
     * MOBILE MENU FUNCTIONALITY
     * 
     * Controls mobile navigation menu toggle and behavior
     * 
     * Elements affected in index.html:
     * - .mobile-menu-btn - Gets 'active' class for hamburger animation
     * - .nav-links - Gets 'active' class to show/hide mobile menu
     * - All .nav-links a - Close menu when clicked
     * 
     * CSS classes used:
     * - .active - Defined in styles.css for mobile menu visibility
     */
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // ========================================
    // FAQ ACCORDION FUNCTIONALITY
    // ========================================
    
    /**
     * FAQ ACCORDION SYSTEM
     * 
     * Creates expandable/collapsible FAQ items with smooth animations
     * 
     * Elements affected in index.html:
     * - .faq-item - Gets 'active' class to expand/collapse
     * - .faq-question - Clickable question headers
     * - .faq-answer - Content that expands/collapses
     * 
     * CSS classes used:
     * - .active - Defined in styles.css for FAQ expansion animation
     * - .faq-item - Container for each FAQ item
     * - .faq-question - Clickable question element
     * - .faq-answer - Answer content that shows/hides
     */
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });

    // ========================================
    // SMOOTH SCROLL NAVIGATION
    // ========================================
    
    /**
     * SMOOTH SCROLL NAVIGATION SYSTEM
     * 
     * Provides smooth scrolling to page sections when navigation links are clicked
     * 
     * Elements affected in index.html:
     * - All .nav-links a - Navigation links that trigger smooth scroll
     * - .hero-section - Target for 'home' navigation
     * - All section[id] - Target sections for navigation
     * - .nav-links - Closes mobile menu after navigation
     * 
     * Navigation targets:
     * - #home -> .hero-section
     * - #about -> section#about
     * - #plans -> section#plans
     * - #faq -> section#faq
     */
    const navLinkElements = document.querySelectorAll('.nav-links a');
    
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href').substring(1);
            let targetSection;
            
            // Handle home link
            if (targetId === 'home') {
                targetSection = document.querySelector('.hero-section');
            } else {
                targetSection = document.getElementById(targetId);
            }
            
            if (targetSection) {
                // Calculate the target position with offset for header
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                // Smooth scroll with easing
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileNav = document.querySelector('.nav-links');
                if (mobileNav.classList.contains('active')) {
                    mobileNav.classList.remove('active');
                }
            }
        });
    });
});

// ========================================
// SCROLL SPY NAVIGATION HIGHLIGHTING
// ========================================

/**
 * SCROLL SPY SYSTEM
 * 
 * Highlights the current navigation link based on scroll position
 * 
 * Elements affected in index.html:
 * - .nav-links a - Gets 'active' class for current section
 * - All section[id] - Monitored for scroll position
 * - .hero-section - Treated as 'home' section
 * 
 * CSS classes used:
 * - .active - Defined in styles.css for active navigation styling
 */
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navigationLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    // Handle home section
    if (pageYOffset < 100) {
        current = 'home';
    }
    
    navigationLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}); 

// ========================================
// MODAL FUNCTIONALITY
// ========================================

/**
 * MODAL SYSTEM
 * 
 * Provides modal popup functionality for detailed content display
 * 
 * Elements affected in index.html:
 * - .modal - Modal containers that show/hide
 * - body - Gets overflow: hidden when modal is open
 * - .modal-content - Modal content containers
 * - .close-modal - Close buttons within modals
 * 
 * CSS classes used:
 * - .modal - Defined in styles.css for modal overlay styling
 * - .modal-content - Defined in styles.css for modal content styling
 * - .close-modal - Defined in styles.css for close button styling
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.getElementsByClassName('modal');
        for (let modal of modals) {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    }
});

// Prevent default behavior for modal links
document.addEventListener('DOMContentLoaded', function() {
    const modalLinks = document.querySelectorAll('a[href="#"]');
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('onclick')?.includes('openModal')) {
                e.preventDefault();
            }
        });
    });
});

// ========================================
// SOCIAL WELFARE PHOTO CAROUSEL
// ========================================

/**
 * PHOTO CAROUSEL SYSTEM
 * 
 * Provides interactive photo carousel for social welfare section
 * 
 * Elements affected in index.html:
 * - #social-carousel - Main carousel container
 * - .carousel-slide - Individual photo slides
 * - #social-prev - Previous button
 * - #social-next - Next button
 * - #social-indicators - Dot indicators container
 * - .carousel-indicator - Individual dot indicators
 * 
 * CSS classes used:
 * - .carousel-container - Defined in styles.css for carousel wrapper
 * - .carousel-track - Defined in styles.css for slide container
 * - .carousel-slide - Defined in styles.css for individual slides
 * - .carousel-btn - Defined in styles.css for navigation buttons
 * - .carousel-indicator - Defined in styles.css for dot indicators
 * - .active - Defined in styles.css for active indicator
 */
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('social-carousel');
    const prevBtn = document.getElementById('social-prev');
    const nextBtn = document.getElementById('social-next');
    const indicatorsContainer = document.getElementById('social-indicators');
    
    if (!carousel || !prevBtn || !nextBtn || !indicatorsContainer) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    
    // Create indicators
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }
    
    // Update carousel position
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }
    
    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }
    
    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }
    
    // Start auto-play
    startAutoPlay();
    
    // Pause auto-play on hover
    const carouselContainer = carousel.closest('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoPlay);
        carouselContainer.addEventListener('mouseleave', startAutoPlay);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (carouselContainer && carouselContainer.matches(':hover')) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            }
        }
    });
    
    // Touch/swipe support
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
        stopAutoPlay();
    });
    
    carousel.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        e.preventDefault();
    });
    
    carousel.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        
        isDragging = false;
        startAutoPlay();
    });
    
    // Initialize
    createIndicators();
    updateCarousel();
});

// ========================================
// MULTILINGUAL LANGUAGE TOGGLE SYSTEM
// ========================================

/**
 * LANGUAGE TOGGLE SYSTEM
 * 
 * Provides English/Tamil language switching functionality
 * 
 * Elements affected in index.html:
 * - #language-toggle - Main toggle button
 * - .lang-text - Language text elements (EN/தமிழ்)
 * - All elements with translation IDs - Content gets translated
 * - document.documentElement - Gets lang and dir attributes
 * 
 * Translation IDs in index.html:
 * - nav-* - Navigation elements
 * - hero-* - Hero section elements
 * - about-* - About section elements
 * - surabhi-* - Surabhi Group section elements
 * - social-* - Social Welfare section elements
 * - plans-* - Plans section elements
 * - how-* - How It Works section elements
 * - testimonials-* - Testimonials section elements
 * - faq-* - FAQ section elements
 * - footer-* - Footer section elements
 * 
 * CSS classes used:
 * - .language-toggle - Defined in styles.css for toggle button styling
 * - .lang-text - Defined in styles.css for language text styling
 * - .active - Defined in styles.css for active language highlighting
 * - .loading - Defined in styles.css for loading animation
 * 
 * Dependencies:
 * - translations.js - Contains all translation data
 */
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    const langDisplay = document.getElementById('lang-display');
    
    if (!languageToggle || !langDisplay) return;
    
    // Get current language from localStorage or default to English
    // Note: currentLang is now set by the overlay system above
    
    // Initialize language display
    window.updateLanguageDisplay = function updateLanguageDisplay() {
        // Show the language that is NOT currently selected
        if (currentLang === 'en') {
            langDisplay.textContent = 'தமிழ்';
        } else {
            langDisplay.textContent = 'EN';
        }
    }
    
    // Create subtle click sound
    function createClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Toggle language with enhanced UX
    function toggleLanguage() {
        // Add loading state
        languageToggle.classList.add('loading');
        
        // Disable button temporarily
        languageToggle.disabled = true;
        
        // Add haptic feedback (if supported)
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        // Add subtle sound effect (if user hasn't disabled sounds)
        try {
            createClickSound();
        } catch (e) {
            // Ignore audio errors
        }
        
        // Toggle language after a brief delay for smooth animation
        setTimeout(() => {
            currentLang = currentLang === 'en' ? 'ta' : 'en';
            localStorage.setItem('language', currentLang);
            localStorage.setItem('languageSelected', 'true'); // Mark as user has selected language
            updateLanguageDisplay();
            translateContent();
            
            // Update tooltip
            languageToggle.title = currentLang === 'en' ? 'Switch to Tamil' : 'Switch to English';
            
            // Remove loading state
            setTimeout(() => {
                languageToggle.classList.remove('loading');
                languageToggle.disabled = false;
            }, 300);
        }, 150);
    }
    
    // Translate all content based on current language
    window.translateContent = function translateContent() {
        const lang = translations[currentLang];
        if (!lang) return;
        
        // Update Content-Language meta tag
        const contentLanguageMeta = document.getElementById('contentLanguageMeta');
        if (contentLanguageMeta) {
            contentLanguageMeta.content = currentLang;
        }
        
        // Add data-translate="no" to all translatable elements
        document.querySelectorAll('[id^="nav-"], [id^="hero-"], [id^="about-"], [id^="philosophy-"], [id^="surabhi-"], [id^="social-"], [id^="plans-"], [id^="how-it-works-"], [id^="testimonials-"], [id^="faq-"], [id^="footer-"]').forEach(el => {
            el.setAttribute('data-translate', 'no');
        });
        
        // Update navigation
        updateTextContent('nav-home', lang.nav.home);
        updateTextContent('nav-about', lang.nav.about);
        updateTextContent('nav-plans', lang.nav.plans);
        updateTextContent('nav-faq', lang.nav.faq);
        updateTextContent('nav-contact', lang.nav.contactUs);
        
        // Update hero section
        updateTextContent('hero-rating', lang.hero.ratingText);
        updateTextContent('hero-reviews', lang.hero.reviewCount);
        updateTextContent('hero-title', lang.hero.title);
        updateTextContent('hero-subtitle', lang.hero.subtitle);
        updateTextContent('hero-get-started', lang.hero.getStarted);
        updateTextContent('hero-learn-more', lang.hero.learnMore);
        
        // Update trust seals
        updateTextContent('trust-registered', lang.hero.trustSeals.registered);
        updateTextContent('trust-customers', lang.hero.trustSeals.customers);
        updateTextContent('trust-experience', lang.hero.trustSeals.experience);
        
        // Update badges
        updateTextContent('badge-secure', lang.hero.badges.secure);
        updateTextContent('badge-returns', lang.hero.badges.returns);
        updateTextContent('badge-tax', lang.hero.badges.tax);
        
        // Update about section
        updateTextContent('about-subtitle', lang.about.subtitle);
        updateTextContent('about-title', lang.about.title);
        updateTextContent('about-description', lang.about.description);
        
        // Update stats
        updateTextContent('stat-members-label', lang.about.stats.membersLabel);
        updateTextContent('stat-rating-label', lang.about.stats.ratingLabel);
        updateTextContent('stat-years-label', lang.about.stats.yearsLabel);
        
        // Update feature cards
        updateTextContent('feature-regulated-title', lang.about.features.regulated.title);
        updateTextContent('feature-regulated-desc', lang.about.features.regulated.description);
        updateTextContent('feature-secure-title', lang.about.features.secure.title);
        updateTextContent('feature-secure-desc', lang.about.features.secure.description);
        updateTextContent('feature-quick-title', lang.about.features.quick.title);
        updateTextContent('feature-quick-desc', lang.about.features.quick.description);
        updateTextContent('feature-returns-title', lang.about.features.returns.title);
        updateTextContent('feature-returns-desc', lang.about.features.returns.description);
        updateTextContent('feature-doorstep-title', lang.about.features.doorstep.title);
        updateTextContent('feature-doorstep-desc', lang.about.features.doorstep.description);
        updateTextContent('feature-remote-title', lang.about.features.remote.title);
        updateTextContent('feature-remote-desc', lang.about.features.remote.description);
        updateTextContent('feature-loan-title', lang.about.features.loan.title);
        updateTextContent('feature-loan-desc', lang.about.features.loan.description);
        
        // Update experience badge
        updateTextContent('experience-badge-text', lang.about.experienceBadge);
        
        // Update Surabhi Group section
        updateTextContent('surabhi-subtitle', lang.surabhi.subtitle);
        updateTextContent('surabhi-title', lang.surabhi.title);
        updateTextContent('surabhi-description', lang.surabhi.description);
        updateTextContent('surabhi-vision-title', lang.surabhi.vision.title);
        updateTextContent('surabhi-vision-desc', lang.surabhi.vision.description);
        updateTextContent('surabhi-mission-title', lang.surabhi.mission.title);
        updateTextContent('surabhi-mission-desc', lang.surabhi.mission.description);

        // Update Philosophy section
        if (lang.philosophy) {
            updateTextContent('philosophy-subtitle', lang.philosophy.subtitle);
            updateTextContent('philosophy-title', lang.philosophy.title);
            updateTextContent('philosophy-quote', lang.philosophy.quote || '');
            updateTextContent('philosophy-description', lang.philosophy.description);
            if (lang.philosophy.values) {
                updateTextContent('philosophy-value1-title', lang.philosophy.values.value1.title);
                updateTextContent('philosophy-value1-desc', lang.philosophy.values.value1.description);
                updateTextContent('philosophy-value2-title', lang.philosophy.values.value2.title);
                updateTextContent('philosophy-value2-desc', lang.philosophy.values.value2.description);
                updateTextContent('philosophy-value3-title', lang.philosophy.values.value3.title);
                updateTextContent('philosophy-value3-desc', lang.philosophy.values.value3.description);
            }
        }

        // Update achievements
        updateTextContent('surabhi-years-label', lang.surabhi.achievements.yearsLabel);
        updateTextContent('surabhi-customers-label', lang.surabhi.achievements.customersLabel);
        updateTextContent('surabhi-assets-label', lang.surabhi.achievements.assetsLabel);
        
        // Update social welfare section
        updateTextContent('social-subtitle', lang.socialWelfare.subtitle);
        updateTextContent('social-title', lang.socialWelfare.title);
        updateTextContent('social-description', lang.socialWelfare.description);
        
        // Update impact stats
        updateTextContent('social-profits-label', lang.socialWelfare.impact.profitsLabel);
        updateTextContent('social-schools-label', lang.socialWelfare.impact.schoolsLabel);
        updateTextContent('social-students-label', lang.socialWelfare.impact.studentsLabel);
        updateTextContent('social-district-name', lang.socialWelfare.impact.districtName);
        updateTextContent('social-district-label', lang.socialWelfare.impact.districtLabel);
        
        // Update commitment section
        updateTextContent('social-commitment-title', lang.socialWelfare.commitment.title);
        updateTextContent('social-commitment-desc', lang.socialWelfare.commitment.description);
        updateTextContent('social-feature1-title', lang.socialWelfare.commitment.features.feature1.title);
        updateTextContent('social-feature1-desc', lang.socialWelfare.commitment.features.feature1.description);
        updateTextContent('social-feature2-title', lang.socialWelfare.commitment.features.feature2.title);
        updateTextContent('social-feature2-desc', lang.socialWelfare.commitment.features.feature2.description);
        updateTextContent('social-feature3-title', lang.socialWelfare.commitment.features.feature3.title);
        updateTextContent('social-feature3-desc', lang.socialWelfare.commitment.features.feature3.description);
        
        // Update gallery section
        updateTextContent('social-gallery-title', lang.socialWelfare.gallery.title);
        
        // Update ongoing commitment section
        updateTextContent('social-ongoing-title', lang.socialWelfare.ongoing.title);
        updateTextContent('social-ongoing-desc', lang.socialWelfare.ongoing.description);
        updateTextContent('social-highlight1', lang.socialWelfare.ongoing.highlights.highlight1);
        updateTextContent('social-highlight2', lang.socialWelfare.ongoing.highlights.highlight2);
        updateTextContent('social-highlight3', lang.socialWelfare.ongoing.highlights.highlight3);
        
        // Update plans section
        updateTextContent('plans-subtitle', lang.plans.subtitle);
        updateTextContent('plans-title', lang.plans.title);
        updateTextContent('plans-description', lang.plans.description);
        
        // Update starter plans
        updateTextContent('plans-starter-title', lang.plans.starter.title);
        updateTextContent('plans-starter-range', lang.plans.starter.range);
        updateTextContent('plans-starter-desc', lang.plans.starter.description);
        updateTextContent('plans-starter-feature1', lang.plans.starter.features.feature1);
        updateTextContent('plans-starter-feature2', lang.plans.starter.features.feature2);
        updateTextContent('plans-starter-feature3', lang.plans.starter.features.feature3);
        
        // Update growth plans
        updateTextContent('plans-growth-title', lang.plans.growth.title);
        updateTextContent('plans-growth-range', lang.plans.growth.range);
        updateTextContent('plans-growth-desc', lang.plans.growth.description);
        updateTextContent('plans-growth-feature1', lang.plans.growth.features.feature1);
        updateTextContent('plans-growth-feature2', lang.plans.growth.features.feature2);
        updateTextContent('plans-growth-feature3', lang.plans.growth.features.feature3);
        
        // Update premium plans
        updateTextContent('plans-premium-title', lang.plans.premium.title);
        updateTextContent('plans-premium-range', lang.plans.premium.range);
        updateTextContent('plans-premium-desc', lang.plans.premium.description);
        updateTextContent('plans-premium-feature1', lang.plans.premium.features.feature1);
        updateTextContent('plans-premium-feature2', lang.plans.premium.features.feature2);
        updateTextContent('plans-premium-feature3', lang.plans.premium.features.feature3);
        
        // Update plans note
        updateTextContent('plans-note', lang.plans.note);
        
        // Update how it works section
        updateTextContent('how-subtitle', lang.howItWorks.subtitle);
        updateTextContent('how-title', lang.howItWorks.title);
        updateTextContent('how-description', lang.howItWorks.description);
        
        // Update steps
        updateTextContent('how-step1-title', lang.howItWorks.steps.step1.title);
        updateTextContent('how-step1-desc', lang.howItWorks.steps.step1.description);
        updateTextContent('how-step2-title', lang.howItWorks.steps.step2.title);
        updateTextContent('how-step2-desc', lang.howItWorks.steps.step2.description);
        updateTextContent('how-step3-title', lang.howItWorks.steps.step3.title);
        updateTextContent('how-step3-desc', lang.howItWorks.steps.step3.description);
        updateTextContent('how-step4-title', lang.howItWorks.steps.step4.title);
        updateTextContent('how-step4-desc', lang.howItWorks.steps.step4.description);
        
        // Update testimonials section
        updateTextContent('testimonials-subtitle', lang.testimonials.subtitle);
        updateTextContent('testimonials-title', lang.testimonials.title);
        updateTextContent('testimonials-description', lang.testimonials.description);
        
        // Update FAQ section
        updateTextContent('faq-subtitle', lang.faq.subtitle);
        updateTextContent('faq-title', lang.faq.title);
        updateTextContent('faq-description', lang.faq.description);
        
        // Update FAQ questions and answers
        updateTextContent('faq-q1', lang.faq.questions.q1);
        updateTextContent('faq-a1', lang.faq.questions.a1);
        updateTextContent('faq-q2', lang.faq.questions.q2);
        updateTextContent('faq-a2', lang.faq.questions.a2);
        updateTextContent('faq-q3', lang.faq.questions.q3);
        updateTextContent('faq-a3', lang.faq.questions.a3);
        updateTextContent('faq-q4', lang.faq.questions.q4);
        updateTextContent('faq-a4', lang.faq.questions.a4);
        updateTextContent('faq-q5', lang.faq.questions.q5);
        updateTextContent('faq-a5', lang.faq.questions.a5);
        updateTextContent('faq-q6', lang.faq.questions.q6);
        updateTextContent('faq-a6', lang.faq.questions.a6);
        updateTextContent('faq-q7', lang.faq.questions.q7);
        updateTextContent('faq-a7', lang.faq.questions.a7);
        updateTextContent('faq-q8', lang.faq.questions.q8);
        updateTextContent('faq-a8', lang.faq.questions.a8);
        updateTextContent('faq-q9', lang.faq.questions.q9);
        updateTextContent('faq-a9', lang.faq.questions.a9);
        updateTextContent('faq-q10', lang.faq.questions.q10);
        updateTextContent('faq-a10', lang.faq.questions.a10);
        
        // Update feedback section
        updateTextContent('feedback-title', lang.feedback.title);
        updateTextContent('feedback-description', lang.feedback.description);
        updateTextContent('feedback-button-text', lang.feedback.buttonText);
        
        // Update document language and direction
        document.documentElement.lang = currentLang;
        if (currentLang === 'ta') {
            document.documentElement.dir = 'ltr'; // Tamil uses LTR
        } else {
            document.documentElement.dir = 'ltr';
        }
    }
    
    // Helper function to update text content
    window.updateTextContent = function updateTextContent(id, text) {
        const element = document.getElementById(id);
        if (element) {
            // Check if text contains HTML tags
            if (text.includes('<')) {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    }
    
    // Event listener for language toggle
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Initialize on page load
    updateLanguageDisplay();
    translateContent();
    
    // Set initial tooltip
    languageToggle.title = currentLang === 'en' ? 'Switch to Tamil' : 'Switch to English';
});

/**
 * ========================================
 * SUMMARY OF JAVASCRIPT FUNCTIONALITY
 * ========================================
 * 
 * This script provides comprehensive interactive functionality for the
 * Jaysel Chit Funds landing page:
 * 
 * 1. NAVIGATION SYSTEM:
 *    - Smooth scrolling to page sections
 *    - Scroll spy highlighting current section
 *    - Mobile menu toggle with hamburger animation
 *    - Header hide/show on scroll direction
 * 
 * 2. FAQ ACCORDION:
 *    - Expandable/collapsible FAQ items
 *    - Only one item open at a time
 *    - Smooth height transitions
 *    - Arrow rotation animations
 * 
 * 3. PHOTO CAROUSEL:
 *    - Touch/swipe support for mobile
 *    - Keyboard navigation (arrow keys)
 *    - Auto-play with pause on hover
 *    - Dot indicators for navigation
 *    - Smooth slide transitions
 * 
 * 4. LANGUAGE TOGGLE:
 *    - English/Tamil language switching
 *    - Sliding animation with globe icon
 *    - Loading states and haptic feedback
 *    - Sound effects and tooltips
 *    - Persistent language preference
 * 
 * 5. MODAL SYSTEM:
 *    - Popup modals for detailed content
 *    - Click outside to close
 *    - Escape key to close
 *    - Body scroll prevention
 * 
 * 6. RESPONSIVE BEHAVIOR:
 *    - Mobile-first design approach
 *    - Touch-friendly interactions
 *    - Adaptive layouts for all screen sizes
 *    - Performance optimizations
 * 
 * All functionality is designed to work seamlessly across
 * modern browsers and mobile devices, with graceful degradation
 * for older browsers where necessary.
 */ 
// ========================================
// LANGUAGE SELECTION OVERLAY FUNCTIONALITY
// ========================================

/**
 * LANGUAGE OVERLAY SYSTEM
 * 
 * Shows language selection overlay on first visit or when no language preference exists
 * 
 * Elements affected in index.html:
 * - #language-overlay - Main overlay container
 * - .language-option - Language selection buttons
 * 
 * CSS classes used:
 * - .language-overlay - Overlay styling
 * - .hidden - Hide overlay after selection
 * 
 * Functions:
 * - selectLanguage(lang) - Handle language selection
 * - showLanguageOverlay() - Show overlay if needed
 * - hideLanguageOverlay() - Hide overlay with animation
 */

// Make function globally accessible
window.selectLanguage = function selectLanguage(lang) {
    console.log('Language selected:', lang); // Debug log
    
    // Store language preference
    localStorage.setItem('language', lang);
    localStorage.setItem('languageSelected', 'true');
    
    // Set current language
    currentLang = lang;
    
    // Hide overlay with animation first
    hideLanguageOverlay();
    
    // Wait a moment then update content
    setTimeout(() => {
        // Update language display in header (if functions exist)
        if (typeof updateLanguageDisplay === 'function') {
            updateLanguageDisplay();
        } else {
            console.log('updateLanguageDisplay function not found');
        }
        
        // Translate content (if function exists)
        if (typeof translateContent === 'function') {
            translateContent();
        } else {
            console.log('translateContent function not found');
        }
        
        // Update document language and apply optimizations
        document.documentElement.lang = lang;
        applyTamilOptimizations();
        
        console.log('Language setup complete for:', lang);
    }, 100);
    
    // Add subtle success feedback
    if (navigator.vibrate) {
        navigator.vibrate(100);
    }
}

window.showLanguageOverlay = function showLanguageOverlay() {
    console.log('Showing language overlay'); // Debug log
    const overlay = document.getElementById('language-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        overlay.style.display = 'flex'; // Ensure it's visible
        document.body.style.overflow = 'hidden';
        console.log('Overlay should now be visible');
    } else {
        console.log('Overlay element not found');
    }
}

window.hideLanguageOverlay = function hideLanguageOverlay() {
    console.log('Hiding language overlay'); // Debug log
    const overlay = document.getElementById('language-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Remove overlay from DOM after animation completes
        setTimeout(() => {
            if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
                console.log('Overlay removed from DOM');
            }
        }, 500);
    }
}

function checkLanguagePreference() {
    const hasLanguagePreference = localStorage.getItem('languageSelected');
    const savedLanguage = localStorage.getItem('language');
    
    console.log('Checking language preference:', { hasLanguagePreference, savedLanguage });
    
    if (!hasLanguagePreference) {
        // First visit - show language overlay
        console.log('No language preference found, showing overlay');
        showLanguageOverlay();
        return null;
    } else {
        // Returning visitor - use saved language
        console.log('Language preference found, using saved language:', savedLanguage);
        hideLanguageOverlay();
        return savedLanguage || 'en';
    }
}

// Function to reset language preference (for testing)
window.resetLanguagePreference = function() {
    localStorage.removeItem('language');
    localStorage.removeItem('languageSelected');
    console.log('Language preference reset. Refresh the page to see the overlay.');
}

// Initialize language system on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing language system'); // Debug log
    
    // Add event listeners to language buttons as backup
    const languageButtons = document.querySelectorAll('.language-option');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Button clicked, language:', lang);
            selectLanguage(lang);
        });
    });
    
    // Check if user has language preference
    const preferredLanguage = checkLanguagePreference();
    
    if (preferredLanguage) {
        // User has preference - load in preferred language
        currentLang = preferredLanguage;
        
        // Wait a bit for other functions to be defined
        setTimeout(() => {
            if (typeof updateLanguageDisplay === 'function') {
                updateLanguageDisplay();
            }
            if (typeof translateContent === 'function') {
                translateContent();
            }
            document.documentElement.lang = preferredLanguage;
        }, 100);
    }
    // If no preference, overlay will be shown and user will select
});