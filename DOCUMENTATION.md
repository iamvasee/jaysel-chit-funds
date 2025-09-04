# Jaysel Chit Funds Landing Page - Technical Documentation

## Overview
This document provides comprehensive technical documentation for the Jaysel Chit Funds landing page, explaining how JavaScript (`script.js`) and CSS (`styles.css`) interact with the HTML (`index.html`) to create a fully functional, multilingual website.

## File Structure
```
Landing/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
├── translations.js     # Multilingual content data
└── DOCUMENTATION.md    # This documentation file
```

## JavaScript (script.js) Documentation

### 1. Navigation System

#### Header Scroll Behavior
- **Elements Affected**: `<header>`, `.mobile-menu-btn`, `.nav-links`
- **CSS Classes Used**: `.scrolled`, `.active`
- **Functionality**:
  - Adds `.scrolled` class when scrolled > 50px
  - Hides header on scroll down, shows on scroll up
  - Smooth transform animations

#### Mobile Menu Toggle
- **Elements Affected**: `.mobile-menu-btn`, `.nav-links`
- **CSS Classes Used**: `.active`
- **Functionality**:
  - Toggles mobile navigation visibility
  - Closes menu when clicking outside or on links
  - Hamburger animation via CSS

#### Smooth Scroll Navigation
- **Elements Affected**: All `.nav-links a`
- **Targets**: `.hero-section`, `#about`, `#plans`, `#faq`
- **Functionality**:
  - Prevents default link behavior
  - Calculates target position with header offset
  - Smooth scroll with `behavior: 'smooth'`

#### Scroll Spy
- **Elements Affected**: `.nav-links a`
- **CSS Classes Used**: `.active`
- **Functionality**:
  - Highlights current section in navigation
  - Monitors scroll position for all sections
  - Updates active state dynamically

### 2. FAQ Accordion System

#### Elements Affected
- `.faq-item` - Gets `.active` class
- `.faq-question` - Clickable headers
- `.faq-answer` - Expandable content

#### CSS Classes Used
- `.active` - Controls expansion animation
- `.faq-item` - Container styling
- `.faq-question` - Question header styling
- `.faq-answer` - Answer content styling

#### Functionality
- Only one FAQ item open at a time
- Smooth height transitions
- Arrow rotation on active items
- Click handlers on question elements

### 3. Social Welfare Photo Carousel

#### Elements Affected
- `#social-carousel` - Main carousel container
- `.carousel-slide` - Individual photo slides
- `#social-prev`, `#social-next` - Navigation buttons
- `#social-indicators` - Dot indicators container
- `.carousel-indicator` - Individual dot indicators

#### CSS Classes Used
- `.carousel-container` - Carousel wrapper styling
- `.carousel-track` - Slide container styling
- `.carousel-slide` - Individual slide styling
- `.carousel-btn` - Navigation button styling
- `.carousel-indicator` - Dot indicator styling
- `.active` - Active indicator highlighting

#### Functionality
- Touch/swipe support for mobile
- Keyboard navigation (arrow keys)
- Auto-play with pause on hover
- Smooth slide transitions
- Indicator click handlers

### 4. Language Toggle System

#### Elements Affected
- `#language-toggle` - Main toggle button
- `.lang-text` - Language text elements (EN/தமிழ்)
- All elements with translation IDs
- `document.documentElement` - Gets lang and dir attributes

#### CSS Classes Used
- `.language-toggle` - Toggle button styling
- `.lang-text` - Language text styling
- `.active` - Active language highlighting
- `.loading` - Loading animation state

#### Translation IDs in HTML
- `nav-*` - Navigation elements
- `hero-*` - Hero section elements
- `about-*` - About section elements
- `surabhi-*` - Surabhi Group section elements
- `social-*` - Social Welfare section elements
- `plans-*` - Plans section elements
- `how-*` - How It Works section elements
- `testimonials-*` - Testimonials section elements
- `faq-*` - FAQ section elements
- `footer-*` - Footer section elements

#### Functionality
- English/Tamil language switching
- Sliding animation with globe icon
- Loading states and haptic feedback
- Sound effects and tooltips
- Persistent language preference in localStorage

### 5. Modal System

#### Elements Affected
- `.modal` - Modal containers
- `body` - Gets `overflow: hidden`
- `.modal-content` - Modal content containers
- `.close-modal` - Close buttons

#### CSS Classes Used
- `.modal` - Modal overlay styling
- `.modal-content` - Modal content styling
- `.close-modal` - Close button styling

#### Functionality
- Popup modals for detailed content
- Click outside to close
- Escape key to close
- Body scroll prevention

## CSS (styles.css) Documentation

### 1. Design System

#### CSS Custom Properties
```css
:root {
    /* Primary Brand Colors */
    --primary-color: #4F46E5;
    --secondary-color: #7C3AED;
    --accent-color: #EC4899;
    
    /* Text Colors */
    --text-color: #1F2937;
    --text-light: #6B7280;
    --text-dark: #111827;
    --text-gray: #4B5563;
    
    /* Brand Specific Colors */
    --primary-red: #FF4E59;
    --primary-blue: #4014C6;
    --light-red: #FFF1F2;
    --light-blue: #F1F0FF;
    
    /* Typography */
    --font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

### 2. Layout Sections

#### Header and Navigation
- **Elements**: `<header>`, `.logo`, `.nav-links`, `.nav-cta`, `.language-toggle`, `.mobile-menu-btn`
- **Features**:
  - Glass-morphism effect with backdrop blur
  - Floating design with rounded corners
  - Responsive mobile menu
  - Language toggle with sliding animation
  - WhatsApp contact button with responsive design

#### Hero Section
- **Elements**: `.hero-section`, `.hero-container`, `.hero-content`, `.hero-image`, `.floating-badges`, `.trust-indicators`, `.cta-group`
- **Features**:
  - Full viewport height with gradient background
  - Two-column layout (content + image)
  - Floating badges with animations
  - Trust indicators and rating display
  - Call-to-action buttons with hover effects

#### About Section
- **Elements**: `.about-section`, `.about-grid`, `.about-stats`, `.feature-card`, `.about-image`
- **Features**:
  - Grid layout with statistics and features
  - Hover animations on cards
  - Experience badge overlay
  - Responsive design for all screen sizes

#### Surabhi Group Section
- **Elements**: `.surabhi-section`, `.vision-mission-grid`, `.company-cards`, `.achievements`
- **Features**:
  - Company showcase with vision/mission
  - Company logo grid
  - Achievement statistics
  - Hover effects on cards

#### Social Welfare Section
- **Elements**: `.social-welfare-section`, `.photo-gallery`, `.carousel-container`, `.social-commitment`
- **Features**:
  - Photo carousel with touch/swipe support
  - Impact statistics with hover animations
  - Two-column content layout
  - Commitment highlights with gradient background

#### Plans Section
- **Elements**: `.plans-section`, `.plans-grid`, `.plan-card`, `.plan-features`
- **Features**:
  - Three-column pricing grid
  - Feature lists with checkmarks
  - Hover animations on cards
  - Responsive single-column on mobile

#### How It Works Section
- **Elements**: `.how-it-works-section`, `.steps-grid`, `.step-card`
- **Features**:
  - Four-step process display
  - Numbered step indicators
  - Hover animations
  - Responsive grid layout

#### Testimonials Section
- **Elements**: `.testimonials-section`, `.testimonials-grid`, `.testimonial-card`
- **Features**:
  - Customer review cards
  - Star ratings display
  - Author information with avatars
  - Hover animations

#### FAQ Section
- **Elements**: `.faq-section`, `.faq-grid`, `.faq-item`, `.faq-question`, `.faq-answer`
- **Features**:
  - Two-column accordion layout
  - Smooth expand/collapse animations
  - Arrow rotation on active items
  - Responsive single-column on mobile

#### Footer
- **Elements**: `footer`, `.footer-content`, `.footer-main`, `.footer-cta`
- **Features**:
  - Three-column layout with contact info
  - WhatsApp contact button
  - Social media links
  - Legal links and copyright

### 3. Interactive Components

#### Language Toggle
- **Elements**: `.language-toggle`, `.toggle-icon`, `.globe-icon`, `.toggle-slider`, `.slider-thumb`, `.lang-text`
- **Features**:
  - Globe icon with hover animations
  - Smooth sliding thumb between languages
  - Glass-morphism background effect
  - Loading states and haptic feedback
  - Responsive design for mobile devices

#### FAQ Accordion
- **Elements**: `.faq-item`, `.faq-question`, `.faq-answer`
- **Features**:
  - Smooth expand/collapse animations
  - Arrow rotation on active items
  - Hover effects and visual feedback
  - Only one item open at a time

#### Photo Carousel
- **Elements**: `.carousel-container`, `.carousel-track`, `.carousel-slide`, `.carousel-btn`, `.carousel-indicators`
- **Features**:
  - Touch/swipe support for mobile
  - Navigation buttons with hover effects
  - Dot indicators for navigation
  - Smooth slide transitions
  - Auto-play with pause on hover

#### Modal System
- **Elements**: `.modal`, `.modal-content`, `.modal-header`, `.modal-body`, `.close-modal`
- **Features**:
  - Overlay with backdrop blur
  - Slide-in animation
  - Click outside to close
  - Responsive design

### 4. Responsive Design

#### Breakpoints
- **480px**: Mobile phones
- **768px**: Tablets
- **1024px**: Small desktops
- **1200px**: Large desktops

#### Mobile-First Approach
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly button sizes
- Optimized layouts for each breakpoint

### 5. Animations & Transitions

#### CSS Animations
- `@keyframes navbarPopup` - Header entrance animation
- `@keyframes float` - Floating badge animation
- `@keyframes pulse` - Loading animation
- `@keyframes spin` - Globe rotation animation
- `@keyframes modalSlideIn` - Modal entrance animation

#### Transitions
- Smooth hover effects on all interactive elements
- Transform animations for performance
- Opacity transitions for fade effects
- Height transitions for accordion expansion

## HTML Structure Overview

### Main Sections
1. **Header** - Navigation with logo, menu, language toggle, and contact button
2. **Hero** - Main landing area with headline, CTA, and image
3. **About** - Company information with statistics and features
4. **Surabhi Group** - Company showcase with vision, mission, and achievements
5. **Social Welfare** - Impact showcase with photo carousel
6. **Plans** - Pricing plans with features
7. **How It Works** - Step-by-step process
8. **Testimonials** - Customer reviews
9. **FAQ** - Frequently asked questions
10. **Footer** - Contact information and links

### Translation System
All translatable content has unique IDs that correspond to the translation data in `translations.js`. The JavaScript dynamically updates these elements based on the selected language.

### Accessibility Features
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly markup
- High contrast ratios for text readability

## Performance Optimizations

### JavaScript
- Event delegation for efficient event handling
- Debounced scroll events
- Lazy loading for images
- Efficient DOM queries with caching

### CSS
- Hardware-accelerated animations using transforms
- Efficient selectors with minimal specificity
- CSS Grid and Flexbox for complex layouts
- Optimized media queries

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers
- Progressive enhancement approach

## Maintenance Notes
- All interactive elements include proper error handling
- CSS is organized with clear section headers
- JavaScript functions are well-documented
- Translation system is easily extensible
- Responsive design is tested across all breakpoints

This documentation provides a comprehensive guide for understanding and maintaining the Jaysel Chit Funds landing page codebase.
