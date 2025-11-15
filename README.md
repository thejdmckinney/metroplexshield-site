# MetroPlex Shield Website

A professional website for MetroPlex Shield, a home maintenance service company serving the Dallas-Fort Worth metroplex area.

## Overview

MetroPlex Shield offers comprehensive home maintenance plans for busy homeowners, taking care of essential home systems so customers can focus on what matters most. The website showcases three tiers of service plans and provides an easy way for potential customers to get started.

## Website Structure

### Pages

- **Homepage (`index.html`)** - Main landing page explaining the service and showcasing all plans
- **Essential Plan (`essential-plan.html`)** - Details for the $89/month basic maintenance plan
- **Guardian Plan (`guardian-plan.html`)** - Details for the $149/month comprehensive plan (most popular)
- **Premier Plan (`premier-plan.html`)** - Details for the $249/month ultimate concierge plan

### Service Plans

#### Essential Plan - $89/month
*"Never forget the basics again"*
- Quarterly visits (4x/year)
- HVAC filter changes
- Smoke/CO detector testing & batteries
- Seasonal home readiness checks
- Priority emergency call-back
- 10% discount on additional services
- Annual home maintenance report

#### Guardian Plan - $149/month
*"Catch problems before they're expensive"*
- Everything in Essential Plan
- Monthly preventive inspections
- Water heater flush & inspection (annual)
- Plumbing leak detection & fixture checks
- Electrical panel inspection & outlet testing
- Smart home device maintenance
- 20% discount on additional services
- Free service calls (waived dispatch fees)

#### Premier Plan - $249/month
*"Complete home protection & concierge"*
- Everything in Guardian Plan
- Bi-weekly preventive visits
- Quarterly HVAC professional tune-ups
- Annual deep systems check (electrical, plumbing, structural)
- Two emergency service calls per year (up to 2 hours each)
- 25% discount on all additional work
- Dedicated technician who knows your home
- Complete concierge service - we track everything
- Smart home optimization & seasonal programming

## Technical Features

### Design & User Experience
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern Styling** - Clean, professional design using Inter font family
- **Smooth Animations** - Intersection Observer API for scroll-triggered animations
- **Interactive Elements** - Hover effects, form validation, and smooth scrolling navigation

### Performance Optimizations
- **Lightweight CSS** - Minimal, efficient stylesheets
- **Optimized JavaScript** - Debounced scroll events and lazy loading ready
- **Mobile-First** - Responsive grid system and touch-friendly interfaces
- **Fast Loading** - Optimized asset loading and minimal external dependencies

### Accessibility Features
- **Semantic HTML** - Proper heading hierarchy and document structure
- **Keyboard Navigation** - Full keyboard accessibility for all interactive elements
- **Focus Management** - Clear focus states and logical tab order
- **Screen Reader Friendly** - Proper alt texts and ARIA labels where needed

## File Structure

```
metroplex-shield-site/
├── index.html                  # Homepage
├── essential-plan.html         # Essential plan details
├── guardian-plan.html          # Guardian plan details  
├── premier-plan.html           # Premier plan details
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   └── js/
│       └── main.js            # JavaScript functionality
├── .github/
│   └── copilot-instructions.md # Development guidelines
└── README.md                   # This file
```

## Setup & Development

### Quick Start
1. Clone or download the repository
2. Open `index.html` in a web browser
3. For development, serve files through a local web server

### Local Development Server
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Browser Support
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+

## Customization

### Updating Content
- **Service Areas**: Update location references in all HTML files
- **Contact Information**: Update phone numbers and email addresses
- **Pricing**: Update plan prices and features in all relevant pages
- **Scheduling**: Modify maintenance schedules in plan detail pages

### Styling Changes
- **Colors**: Update CSS custom properties in `style.css`
- **Fonts**: Change font imports in HTML head sections
- **Layout**: Modify grid and flexbox properties in CSS
- **Animations**: Adjust transition and animation properties

### Adding Features
- **Contact Forms**: Integrate with form processing service (Netlify Forms, Formspree, etc.)
- **Analytics**: Add Google Analytics or similar tracking
- **Chat Widget**: Integrate customer support chat
- **Booking System**: Add online scheduling integration

## SEO Optimization

The website includes:
- **Meta Descriptions** - Unique descriptions for each page
- **Structured Content** - Proper heading hierarchy (H1, H2, H3)
- **Local SEO** - DFW area location targeting
- **Performance** - Fast loading times and mobile optimization
- **Schema Markup Ready** - Prepared for structured data implementation

## Business Integration

### Recommended Integrations
- **CRM System** - Connect contact forms to customer management
- **Scheduling Software** - Online booking for consultations
- **Payment Processing** - Subscription billing for monthly plans
- **Customer Portal** - Account management and service history
- **Analytics** - Track website performance and conversions

### Marketing Features
- **Lead Generation** - Multiple contact forms and clear CTAs
- **Plan Comparison** - Easy-to-understand feature comparisons
- **Value Propositions** - Clear benefits and ROI explanations
- **Trust Signals** - Professional design and comprehensive service descriptions

## Contact Information

**MetroPlex Shield**
- Phone: (682) 466-2130
- Email: hello@metroplexshield.com
- Service Area: Dallas, Fort Worth, Plano, Irving, Arlington, and surrounding DFW areas

## License

This website template is created specifically for MetroPlex Shield home maintenance services. All content and design elements are proprietary to MetroPlex Shield.

---

*Built with modern web technologies for optimal performance and user experience across all devices.*