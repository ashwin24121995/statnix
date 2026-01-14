# STATNIX PHP Website - Complete Build Prompt

## Overview
Build a complete PHP-based social gaming platform website identical to the React version of STATNIX. This is a free-to-play casino entertainment platform with no real money involved.

---

## Company Information

**Brand Name:** STATNIX
**Domain:** statnix.com
**Legal Company:** CC INNOVATIONS (OPC) PRIVATE LIMITED
**CIN:** U78100JH2023OPC021360
**PAN:** AALCC3673P
**GST:** 20AALCC3673P1ZB
**Email:** contact@statnix.com

**Legal Addresses:**
- Address 1: C/O N K SHARMA SEC 9 TYPE, BT QR NO 463, HEC, Dhurwa, Ranchi, Ranchi-834004, Jharkhand
- Address 2: SEC 9 TYPE, BT QR NO 463, C/O NK SHARMA, HEC, Dhurwa, Panchayat Bhawan, Sithiyo, Ranchi, Ranchi, Jharkhand, 834004

---

## Design System

### Color Palette
- **Primary Background:** Deep Purple (#1a0a2e)
- **Primary Accent:** Golden Yellow (#f7a600)
- **Secondary Accent:** Dark Purple (#16213e)
- **Text Primary:** White (#ffffff)
- **Text Secondary:** Light Gray (#e0e0e0)
- **Success:** Green (#4caf50)
- **Error:** Red (#ff5252)
- **Borders:** Golden Yellow with dashed style (#f7a600 dashed)

### Typography
- **Display Font:** Poppins Bold (italic for headings)
- **Body Font:** Inter Regular
- **Font Sizes:**
  - H1: 48px (bold, italic)
  - H2: 36px (bold, italic)
  - H3: 28px (bold)
  - Body: 16px
  - Small: 14px

### Design Elements
- Rounded corners: 8-12px
- Shadows: Subtle drop shadows on cards
- Borders: Golden dashed borders on premium elements
- Gradients: Purple to darker purple gradients
- Icons: Lucide-style icons (use Font Awesome or similar)

---

## Website Structure

### Pages Required

1. **Home Page** (`/index.php`)
   - Hero section with tagline: "Experience Gaming Like Never Before"
   - Description: "We create vibrant, handcrafted social games designed purely for joy and entertainment. No real money. No financial transactions. Just a completely risk-free space filled with good vibes and play. Jump in, explore at your pace, and share the joy of social gaming."
   - Featured games section with 4 game cards
   - "Why Play Our Casino" section with background image
   - Call-to-action section with background image
   - Footer with company information

2. **Games Hub** (`/games.php`)
   - Display all 4 available games
   - Game cards with descriptions
   - Links to individual game pages

3. **Slots Game** (`/games/slots.php`)
   - Full-screen layout (no scrolling needed)
   - 3 spinning reels with symbols
   - Bet controls
   - Spin button
   - Win display
   - Credit tracking
   - Sound effects (mute/unmute)

4. **Roulette Game** (`/games/roulette.php`)
   - Full-screen layout
   - 3D rotating wheel (continuous idle rotation)
   - Betting grid (numbers 0-36, Red, Black, Even, Odd)
   - Spin button
   - Win detection
   - Sound effects
   - Credit tracking

5. **Blackjack Game** (`/games/blackjack.php`)
   - Full-screen layout
   - Dealer and player hands
   - Hit/Stand/Double Down buttons
   - Bet controls
   - Win/Loss/Push detection
   - Card dealing animations
   - Sound effects

6. **Lucky Spin Game** (`/games/lucky-spin.php`)
   - Full-screen layout
   - Spinning fortune wheel
   - Prize segments
   - Spin button
   - Win display
   - Sound effects

7. **About Page** (`/about.php`)
   - Company mission and vision
   - Team information
   - Company history
   - Background image
   - Detailed content sections

8. **Contact Page** (`/contact.php`)
   - Contact form (name, email, message)
   - Company contact information
   - Legal addresses
   - Background image
   - Email validation

9. **Privacy Policy** (`/privacy.php`)
   - Comprehensive privacy policy
   - Data collection practices
   - User rights
   - Background image
   - Detailed sections

10. **Terms & Conditions** (`/terms.php`)
    - Complete terms and conditions
    - Account rules
    - Fair play guidelines
    - Dispute resolution
    - Background image

11. **Disclaimer** (`/disclaimer.php`)
    - Age verification (18+)
    - No real money disclaimer
    - Responsible gaming statement
    - Entertainment-only notice
    - Background image

12. **Community Rules** (`/community-rules.php`)
    - Behavioral guidelines
    - Account conduct rules
    - Prohibited activities
    - Enforcement policies
    - Background image

13. **404 Page** (`/404.php`)
    - Custom 404 error page
    - Link back to home

---

## Key Features

### Game Features
1. **Credit System**
   - Starting credits: 1000
   - Session-based (no database required initially)
   - Display current credits
   - Update after each game

2. **Sound Effects**
   - Spin sounds
   - Win celebration sounds
   - Mute/Unmute button
   - Background music option

3. **Animations**
   - Smooth reel/wheel rotations
   - Card dealing animations
   - Win celebration effects
   - Particle effects on wins

4. **Responsive Design**
   - Mobile-friendly layout
   - Tablet support
   - Desktop optimization
   - Touch-friendly buttons

### Technical Features
1. **SEO Optimization**
   - Meta tags for each page
   - Open Graph tags
   - Robots.txt
   - Sitemap.xml
   - Google site verification meta tag

2. **Performance**
   - All images in WebP format
   - Minified CSS and JavaScript
   - Lazy loading for images
   - Caching headers

3. **Security**
   - Input validation
   - CSRF protection
   - XSS prevention
   - Secure headers

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast compliance
   - Screen reader support

---

## Assets Required

### Images (All in WebP format)
1. **Logo:** statnix-logo.webp
2. **Hero Background:** hero-casino-bg.webp
3. **Game Backgrounds:**
   - slots-game-bg.webp
   - roulette-game-bg.webp
   - blackjack-game-bg.webp
   - lucky-spin-bg.webp

4. **Page Backgrounds:**
   - about-hero-bg.webp
   - contact-hero-bg.webp
   - privacy-security-bg.webp
   - terms-legal-bg.webp
   - community-rules-bg.webp

5. **Game Icons:**
   - game-slots-icon.webp
   - game-roulette-icon.webp
   - game-cards-new.webp
   - lucky-spin-icon.webp
   - dice-game-icon.webp
   - casino-floating-elements.webp

6. **Decorative:**
   - casino-hero-elements.webp
   - premium-hero-bg.webp

---

## Game Specifications

### Slots Game
- **Reels:** 3 reels with 6 symbols each
- **Symbols:** 7, Bar, Cherry, Diamond, Gold, Jackpot
- **Payouts:**
  - 3x Jackpot: 1000x bet
  - 3x Gold: 500x bet
  - 3x Diamond: 100x bet
  - 3x Bar: 50x bet
  - 3x Cherry: 25x bet
  - 3x 7: 200x bet
- **Bet Range:** 1-100 credits
- **Spin Duration:** 3 seconds per reel
- **Animation:** Smooth CSS transitions

### Roulette Game
- **Wheel:** 37 numbers (0-36)
- **Colors:** Red (1-36 odd numbers), Black (2-36 even numbers), Green (0)
- **Betting Options:**
  - Single number: 35:1 payout
  - Red/Black: 1:1 payout
  - Even/Odd: 1:1 payout
  - 1-18/19-36: 1:1 payout
- **Bet Range:** 1-500 credits
- **Spin Duration:** 5 seconds
- **Idle Animation:** Continuous slow rotation (0.5° every 50ms)

### Blackjack Game
- **Deck:** Standard 52-card deck
- **Dealer Rules:** Hits on 16, stands on 17+
- **Player Options:** Hit, Stand, Double Down
- **Payouts:**
  - Blackjack (21 on first 2 cards): 2.5x bet
  - Regular win: 2x bet
  - Push (tie): 1x bet
- **Bet Range:** 1-500 credits
- **Card Animation:** Smooth dealing animation

### Lucky Spin Game
- **Wheel:** 8 prize segments
- **Prizes:** 2x, 5x, 10x, 25x, 50x, 100x, 250x, 500x
- **Bet Range:** 1-100 credits
- **Spin Duration:** 4 seconds
- **Animation:** Smooth rotation with easing

---

## Footer Content

**Copyright Line:**
© 2026 STATNIX. All rights reserved. | Operated by CC INNOVATIONS (OPC) PRIVATE LIMITED | CIN: U78100JH2023OPC021360 | GST: 20AALCC3673P1ZB

**Tagline:**
Free social gaming platform providing engaging entertainment experiences with a focus on user safety and fair play.

**Age & Responsible Gaming Disclaimer:**
The content on this site is intended for users who are 18 years of age or older. It operates as a social gaming platform featuring free-to-play experiences available for entertainment and fun. This is a safe environment with no real money involved. No real currency can be used or gained during gameplay. We promote responsible gaming and fair play. All achievements are for entertainment purposes only and do not translate into any real-world financial activities. Enjoy risk-free gaming in our community.

---

## Navigation Menu

**Header Navigation:**
- HOME
- GAMES
- ABOUT
- CONTACT
- PLAY NOW (CTA Button)

**Footer Links:**
- Privacy Policy
- Terms & Conditions
- Disclaimer
- Community Rules
- Contact

---

## Technical Stack (PHP)

### Backend
- PHP 8.0+
- Apache/Nginx server
- Session management for credits
- Form validation and sanitization

### Frontend
- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript (no frameworks)
- Canvas API for game graphics
- Web Audio API for sound effects

### Libraries/Tools
- Font Awesome for icons
- Google Fonts (Poppins, Inter)
- Animate.css for animations
- SweetAlert2 for notifications

### File Structure
```
/statnix-php/
├── index.php
├── games.php
├── about.php
├── contact.php
├── privacy.php
├── terms.php
├── disclaimer.php
├── community-rules.php
├── 404.php
├── /games/
│   ├── slots.php
│   ├── roulette.php
│   ├── blackjack.php
│   └── lucky-spin.php
├── /assets/
│   ├── /css/
│   │   ├── style.css
│   │   ├── games.css
│   │   └── responsive.css
│   ├── /js/
│   │   ├── main.js
│   │   ├── slots.js
│   │   ├── roulette.js
│   │   ├── blackjack.js
│   │   ├── lucky-spin.js
│   │   └── audio.js
│   ├── /images/
│   │   └── (all WebP images)
│   └── /sounds/
│       ├── spin.mp3
│       ├── win.mp3
│       └── background.mp3
├── /includes/
│   ├── header.php
│   ├── footer.php
│   ├── config.php
│   └── functions.php
├── robots.txt
├── sitemap.xml
└── .htaccess
```

---

## Implementation Notes

1. **Session Management:** Use PHP sessions to store player credits during gameplay
2. **Form Handling:** Use POST method with CSRF tokens for contact form
3. **Responsive Design:** Mobile-first approach with media queries
4. **Performance:** Minify CSS/JS, optimize images, use caching
5. **Security:** Sanitize all inputs, validate forms, use secure headers
6. **SEO:** Add proper meta tags, structured data, and sitemaps
7. **Accessibility:** Use semantic HTML, ARIA labels, keyboard navigation

---

## Deployment Instructions

### Local Development
1. Install PHP 8.0+
2. Install Apache or Nginx
3. Clone repository
4. Configure virtual host
5. Run local server

### Production Deployment
1. Upload files to web server
2. Configure domain DNS
3. Set up SSL certificate
4. Configure server security headers
5. Set up error logging
6. Configure caching headers
7. Test all functionality

### Railway Deployment
1. Create Railway account
2. Connect GitHub repository
3. Set environment variables
4. Deploy application
5. Configure custom domain
6. Set up SSL

---

## Testing Checklist

- [ ] All pages load without errors
- [ ] Games display full-screen without scrolling
- [ ] Sound effects work (with mute option)
- [ ] Animations are smooth
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Forms validate correctly
- [ ] SEO meta tags are present
- [ ] Images load correctly
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Accessibility standards met
- [ ] Security headers configured

---

## Additional Features (Optional)

1. **User Accounts** - Login/registration with database
2. **Leaderboard** - Top players by wins
3. **Achievements** - Unlock badges and rewards
4. **Daily Bonus** - Free credits daily login
5. **Referral System** - Invite friends for rewards
6. **Statistics** - Track player stats and history
7. **Live Chat** - Real-time customer support
8. **Email Notifications** - Game updates and promotions

---

## Support & Contact

For questions or issues during development, refer to the original React version documentation or contact the development team.

---

**End of PHP Website Build Prompt**
