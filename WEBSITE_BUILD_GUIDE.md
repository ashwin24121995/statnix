# Social Gaming Platform Website - Complete Build Guide

## Executive Summary

This document provides a complete blueprint for building a premium social gaming platform website similar to STATNIX. Any AI agent can follow these instructions to create an identical website for any company. The website is a React-based single-page application with multiple games, legal pages, and professional branding.

---

## Table of Contents

1. [Business Model](#business-model)
2. [Design Philosophy](#design-philosophy)
3. [Technical Architecture](#technical-architecture)
4. [Project Structure](#project-structure)
5. [Step-by-Step Implementation](#step-by-step-implementation)
6. [Features & Pages](#features--pages)
7. [Deployment Guide](#deployment-guide)
8. [Customization Guide](#customization-guide)

---

## Business Model

### Platform Type
- **Free-to-Play Social Gaming Platform**
- No real money transactions
- Entertainment-focused
- Community-driven

### Revenue Model (Optional)
1. **In-app Cosmetics** - Skins, themes, avatars (future enhancement)
2. **Premium Membership** - Ad-free experience, exclusive games (future)
3. **Sponsorships & Partnerships** - Brand collaborations
4. **Advertising** - Non-intrusive banner ads

### Target Audience
- Age 18+
- Gaming enthusiasts
- Social gamers
- Entertainment seekers
- Risk-free gaming preference

### Core Values
- **Safety First** - No financial risk
- **Fair Play** - Transparent game mechanics
- **Community** - Social engagement
- **Joy** - Entertainment-focused
- **Accessibility** - Easy to use, no downloads

---

## Design Philosophy

### Visual Aesthetic: Premium Casino Theme

#### Color Scheme
- **Primary Background**: Deep Purple (#1a0a2e)
- **Accent Color**: Golden Yellow (#f7a600)
- **Text Primary**: White (#ffffff)
- **Text Secondary**: Light Gray (#a0aec0)
- **Borders**: Dashed golden borders on cards

#### Typography
- **Headings**: Poppins Bold (600-700 weight) - Italic style for elegance
- **Body**: Inter Regular (400-500 weight) - Clean, readable
- **Font Pairing Rationale**: Bold headings create hierarchy, clean body text ensures readability

#### Design Elements
1. **Dashed Border Cards** - Creates premium, structured look
2. **Gradient Overlays** - Adds depth and readability over images
3. **Floating Animations** - Subtle motion for engagement
4. **Shadow Effects** - Depth and layering
5. **Golden Accents** - Luxury and premium feel

#### Layout Approach
- **Asymmetric Design** - Not centered, creates visual interest
- **Hero Section** - Large background image with overlay
- **Feature Cards** - Grid layout with icons and descriptions
- **Game Cards** - Showcase games with call-to-action buttons
- **Whitespace** - Generous spacing for premium feel

---

## Technical Architecture

### Tech Stack
```
Frontend:
- React 19 (UI framework)
- TypeScript (type safety)
- Tailwind CSS 4 (styling)
- Wouter (routing)
- Lucide React (icons)
- Framer Motion (animations)

Build Tools:
- Vite (bundler)
- ESBuild (compiler)
- PostCSS (CSS processing)

Deployment:
- Node.js backend (Express)
- Static file serving
- Railway (hosting)
- GitHub (version control)
```

### Project Structure
```
playbystats/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── statnix-logo.webp
│   │   │   ├── hero-casino-bg.webp
│   │   │   ├── game-slots-icon.webp
│   │   │   ├── game-roulette-icon.webp
│   │   │   ├── game-cards-new.webp
│   │   │   ├── lucky-spin-icon.webp
│   │   │   ├── casino-floating-elements.webp
│   │   │   ├── roulette-game-bg.webp
│   │   │   ├── blackjack-game-bg.webp
│   │   │   ├── slots-game-bg.webp
│   │   │   ├── about-hero-bg.webp
│   │   │   ├── contact-hero-bg.webp
│   │   │   ├── about-team-bg.webp
│   │   │   ├── privacy-security-bg.webp
│   │   │   ├── terms-legal-bg.webp
│   │   │   ├── community-rules-bg.webp
│   │   │   ├── premium-hero-bg.webp
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   ├── favicon.ico
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Play.tsx (Slots game)
│   │   │   ├── Roulette.tsx
│   │   │   ├── Blackjack.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Privacy.tsx
│   │   │   ├── Terms.tsx
│   │   │   ├── Disclaimer.tsx
│   │   │   ├── CommunityRules.tsx
│   │   │   ├── NotFound.tsx
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   ├── hooks/
│   │   │   ├── useSEO.ts
│   │   ├── utils/
│   │   │   ├── structuredData.ts
│   │   ├── contexts/
│   │   │   ├── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
├── server/
│   ├── index.ts
├── package.json
├── RAILWAY_DEPLOYMENT.md
```

---

## Step-by-Step Implementation

### Phase 1: Project Setup

#### 1.1 Initialize Project
```bash
# Create React + TypeScript project with Vite
npm create vite@latest project-name -- --template react-ts

# Install dependencies
cd project-name
npm install
```

#### 1.2 Install Required Packages
```bash
npm install \
  @radix-ui/react-dialog \
  @radix-ui/react-label \
  @radix-ui/react-select \
  @radix-ui/react-tabs \
  @radix-ui/react-tooltip \
  class-variance-authority \
  clsx \
  framer-motion \
  lucide-react \
  sonner \
  tailwind-merge \
  tailwindcss-animate \
  wouter \
  zod \
  react-hook-form
```

#### 1.3 Configure Tailwind CSS
- Install Tailwind CSS 4
- Create tailwind.config.js
- Set up color tokens in index.css using OKLCH format

### Phase 2: Design System Setup

#### 2.1 Create Color Tokens (index.css)
```css
:root {
  --primary: #f7a600;
  --primary-foreground: #1a0a2e;
  --background: #1a0a2e;
  --foreground: #ffffff;
  --card: #2d1b4e;
  --card-foreground: #ffffff;
  --muted: #6b5b95;
  --muted-foreground: #a0aec0;
  --border: #f7a600;
  --radius: 0.65rem;
}
```

#### 2.2 Set Up Typography
- Add Google Fonts: Poppins (600, 700) and Inter (400, 500, 600, 700)
- Create heading styles with italic Poppins
- Create body text styles with Inter

#### 2.3 Create Component Variants
- Button variants: solid (golden), outline (dashed border)
- Card styles: dashed borders, gradient overlays
- Input styles: dark background, golden focus state

### Phase 3: Component Development

#### 3.1 Header Component
```tsx
// Features:
- Logo (left side)
- Navigation menu (center/right)
- Mobile hamburger menu
- Sticky positioning
- Golden underline on active route
```

#### 3.2 Footer Component
```tsx
// Features:
- Logo
- Company information
- Legal links (Privacy, Terms, Disclaimer, Community Rules)
- Contact information
- Copyright notice
- Age disclaimer
- Company details (CIN, GST, PAN)
```

#### 3.3 Reusable Components
- Button (solid and outline variants)
- Card (with dashed border)
- Feature card (icon + title + description)
- Game card (image + name + CTA)

### Phase 4: Page Development

#### 4.1 Home Page (/)
**Sections:**
1. **Hero Section**
   - Full-width background image
   - Gradient overlay
   - Headline: "Experience Gaming Like Never Before"
   - Subheading: Risk-free gaming message
   - CTA buttons: "Play Now" and "Know More"
   - Floating casino elements image

2. **Games Section**
   - 4 game cards (Slots, Roulette, Blackjack, Lucky Spin)
   - Each card has: image, name, "Free Play" label, CTA button

3. **Why Play Section**
   - Background image (luxury casino lounge)
   - 4 feature cards: Secure Gaming, Win Big, Instant Play, Community
   - Each with icon and description

4. **CTA Section**
   - Background image (casino lounge)
   - Call-to-action text
   - "Start Playing Now" button

#### 4.2 Game Pages (Play, Roulette, Blackjack)
**Slots Game (/play):**
- 3 spinning reels with numbers
- Bet amount selector
- Spin button
- Win display
- Sound effects (optional)
- Animation on spin
- Win celebration

**Roulette Game (/roulette):**
- Spinning wheel visualization
- Number betting (1-36 + 0)
- Color betting (Red/Black)
- Spin animation
- Result display

**Blackjack Game (/blackjack):**
- Dealer and player hands
- Hit/Stand buttons
- Bet amount
- Card dealing animation
- Win/Loss display

#### 4.3 Information Pages

**About Page (/about)**
- Hero section with background image
- Company mission and vision
- Team information
- Company history and milestones
- Values section
- Detailed company information

**Contact Page (/contact)**
- Hero section with background image
- Contact form (name, email, message)
- Contact information
- Email and phone
- Business hours
- Location details

#### 4.4 Legal Pages

**Privacy Policy (/privacy)**
- Comprehensive privacy information
- Data collection practices
- User rights
- Cookie policy
- Third-party services
- Data protection measures

**Terms & Conditions (/terms)**
- User agreement
- Account creation rules
- Acceptable use policy
- Liability limitations
- Dispute resolution
- Service modifications

**Disclaimer (/disclaimer)**
- Age restriction (18+)
- No real money involvement
- Responsible gaming message
- Entertainment only
- No financial transactions
- Risk-free gaming guarantee

**Community Rules (/community-rules)**
- Behavioral expectations
- Prohibited activities
- Consequences for violations
- Fair play guidelines
- Reporting mechanisms
- Community standards

### Phase 5: Routing & Navigation

#### 5.1 Set Up Routes (App.tsx)
```tsx
Routes:
- / → Home
- /play → Slots Game
- /roulette → Roulette Game
- /blackjack → Blackjack Game
- /about → About
- /contact → Contact
- /privacy → Privacy Policy
- /terms → Terms & Conditions
- /disclaimer → Disclaimer
- /community-rules → Community Rules
- /404 → Not Found
```

#### 5.2 Add Scroll-to-Top
- Create ScrollToTop component
- Triggers on route change
- Scrolls window to top (0, 0)

#### 5.3 Add SEO Meta Tags
- Use useSEO hook for dynamic meta tags
- Update title, description, OG tags per page
- Add canonical URLs

### Phase 6: Asset Creation

#### 6.1 Generate Images
Use AI image generation for:
1. **Hero backgrounds** - Casino lounge, luxury setting
2. **Game backgrounds** - Themed game environments
3. **Floating elements** - Casino decorative elements
4. **Page backgrounds** - Matching theme for each page
5. **Icons** - Game icons (slots, roulette, cards, dice)

#### 6.2 Create Logo
- Premium design with company name
- Golden and purple colors
- Ornate, luxury aesthetic
- Scalable vector format

#### 6.3 Convert to WebP
- All images converted to WebP format
- Reduces file size by 25-35%
- Improves page load performance
- Update all image references in code

### Phase 7: SEO Optimization

#### 7.1 Add Meta Tags
```html
<meta name="description" content="...">
<meta name="google-site-verification" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta name="twitter:card" content="summary_large_image">
```

#### 7.2 Create Robots.txt
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Crawl-delay: 1
Sitemap: https://domain.com/sitemap.xml
```

#### 7.3 Create Sitemap.xml
- List all pages
- Set priority levels
- Include last modified dates
- Set change frequency

#### 7.4 Add Structured Data
- Organization schema
- Website schema
- Game schema
- Breadcrumb schema

### Phase 8: Build & Optimization

#### 8.1 Build Configuration
- Configure Vite for production
- Set up code splitting
- Enable minification
- Configure asset optimization

#### 8.2 Performance Optimization
- Lazy load images
- Code splitting for routes
- Tree shaking unused code
- Minimize CSS and JavaScript

#### 8.3 Testing
- Test all routes
- Test game functionality
- Test responsive design
- Test form submissions
- Test SEO meta tags

---

## Features & Pages

### Core Features

#### 1. Multiple Games
- **Slots Machine** - Spinning reels, random outcomes
- **Roulette** - Wheel spinning, number/color betting
- **Blackjack** - Card game with dealer AI
- **Lucky Spin** - Fortune wheel game

#### 2. Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop optimization
- Touch-friendly buttons
- Readable text at all sizes

#### 3. User Experience
- Smooth animations
- Instant page loads
- Clear navigation
- Intuitive controls
- Accessible design

#### 4. Legal Compliance
- Age verification message
- Disclaimer about no real money
- Privacy policy
- Terms & conditions
- Community rules
- Responsible gaming info

### Page Breakdown

| Page | Purpose | Key Elements |
|------|---------|--------------|
| Home | Landing page | Hero, games showcase, features, CTA |
| Play | Slots game | Reels, bet controls, win display |
| Roulette | Roulette game | Wheel, betting options, results |
| Blackjack | Card game | Hands, hit/stand, dealer AI |
| About | Company info | Mission, vision, history, team |
| Contact | Contact form | Form fields, contact info, location |
| Privacy | Privacy policy | Data practices, user rights |
| Terms | Terms & conditions | User agreement, rules, liability |
| Disclaimer | Legal disclaimer | Age restriction, no real money |
| Community | Community rules | Behavioral standards, guidelines |

---

## Deployment Guide

### Option 1: Railway Deployment (Recommended)

#### 1.1 Prepare for Deployment
```bash
# Remove Manus dependencies
npm uninstall vite-plugin-manus-runtime

# Remove Manus analytics from index.html
# Remove Manus plugin from vite.config.ts

# Build the project
npm run build
```

#### 1.2 Push to GitHub
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

#### 1.3 Deploy on Railway
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Configure environment variables:
   - NODE_ENV=production
   - PORT=3000
6. Click Deploy

#### 1.4 Connect Custom Domain
1. In Railway dashboard, go to project settings
2. Add custom domain
3. Update DNS records with provided values
4. Wait for SSL certificate (usually 5-10 minutes)

### Option 2: Vercel Deployment

#### 2.1 Deploy on Vercel
```bash
npm install -g vercel
vercel
```

#### 2.2 Configure Vercel
- Select project directory
- Framework: Vite
- Build command: npm run build
- Output directory: dist

### Option 3: Netlify Deployment

#### 3.1 Deploy on Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## Customization Guide

### For New Companies

#### Step 1: Brand Customization
```
1. Replace logo with company logo
2. Update colors in index.css
3. Change company name throughout
4. Update email addresses
5. Update legal information (CIN, GST, PAN)
6. Update company address
```

#### Step 2: Content Customization
```
1. Update hero headline and description
2. Update feature descriptions
3. Update about page content
4. Update contact information
5. Update legal pages with company-specific info
6. Update footer information
```

#### Step 3: Visual Customization
```
1. Generate new background images
2. Create new game icons
3. Update color scheme if needed
4. Adjust spacing and layout
5. Customize animations
```

#### Step 4: Game Customization
```
1. Modify game rules
2. Adjust payout percentages
3. Change game themes
4. Add new games
5. Customize game UI
```

#### Step 5: SEO Customization
```
1. Update meta descriptions
2. Change page titles
3. Update sitemap.xml with new domain
4. Update robots.txt
5. Add Google site verification
6. Update structured data
```

### Configuration Files to Update

#### package.json
```json
{
  "name": "new-project-name",
  "description": "New company description"
}
```

#### index.html
```html
<title>New Company - Premium Gaming Platform</title>
<meta name="description" content="New company description">
<meta name="google-site-verification" content="new-verification-code">
```

#### index.css
```css
:root {
  --primary: #new-accent-color;
  --background: #new-bg-color;
  /* Update all color tokens */
}
```

### Environment Variables
```
NODE_ENV=production
PORT=3000
VITE_APP_TITLE=New Company Name
VITE_APP_LOGO=/images/new-logo.webp
```

---

## Performance Metrics

### Target Performance
- **Page Load Time**: < 2 seconds
- **Lighthouse Score**: > 90
- **Mobile Score**: > 85
- **SEO Score**: > 95

### Optimization Techniques
1. Image optimization (WebP format)
2. Code splitting by route
3. Lazy loading images
4. CSS minification
5. JavaScript minification
6. Gzip compression
7. CDN caching

---

## Maintenance & Updates

### Regular Tasks
- Monitor performance metrics
- Update dependencies monthly
- Check for security vulnerabilities
- Review user feedback
- Update legal pages as needed
- Backup database and files

### Feature Additions
- Add new games
- Implement user accounts
- Add leaderboards
- Create achievement system
- Add social features
- Implement notifications

### Bug Fixes
- Monitor error logs
- Fix reported issues
- Test thoroughly before deployment
- Document all changes
- Maintain version history

---

## Troubleshooting

### Common Issues

#### Issue: Google doesn't see content
**Solution:**
- Add meta tags for each page
- Implement structured data
- Use useSEO hook
- Wait for Google to recrawl
- Submit sitemap to Google Search Console

#### Issue: Images not loading
**Solution:**
- Check image paths (should start with /)
- Verify images are in public/images folder
- Check image format (should be .webp)
- Clear browser cache
- Check file permissions

#### Issue: Styles not applying
**Solution:**
- Verify Tailwind CSS is installed
- Check color tokens in index.css
- Clear Tailwind cache
- Rebuild project
- Check CSS specificity

#### Issue: Routes not working
**Solution:**
- Verify routes in App.tsx
- Check component imports
- Test with browser console
- Clear browser cache
- Verify Wouter is installed

---

## Conclusion

This guide provides a complete blueprint for building a premium social gaming platform website. By following these instructions, any AI agent can create an identical website for any company. The modular structure allows for easy customization and scaling.

For questions or clarifications, refer to the specific sections above or consult the inline code comments in the project files.

---

## Quick Reference Checklist

### Initial Setup
- [ ] Create React + TypeScript project
- [ ] Install all dependencies
- [ ] Configure Tailwind CSS
- [ ] Set up color tokens
- [ ] Add Google Fonts

### Components
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create Button variants
- [ ] Create Card components
- [ ] Create Feature cards

### Pages
- [ ] Build Home page
- [ ] Build game pages (Slots, Roulette, Blackjack)
- [ ] Build About page
- [ ] Build Contact page
- [ ] Build legal pages (Privacy, Terms, Disclaimer, Community)

### Assets
- [ ] Generate/collect images
- [ ] Create logo
- [ ] Convert images to WebP
- [ ] Optimize image sizes
- [ ] Create favicon

### SEO
- [ ] Add meta tags
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add structured data
- [ ] Add Google verification

### Deployment
- [ ] Remove Manus dependencies
- [ ] Build project
- [ ] Push to GitHub
- [ ] Deploy to Railway/Vercel/Netlify
- [ ] Connect custom domain
- [ ] Test all functionality

### Testing
- [ ] Test all routes
- [ ] Test responsive design
- [ ] Test games
- [ ] Test forms
- [ ] Test SEO
- [ ] Test performance
