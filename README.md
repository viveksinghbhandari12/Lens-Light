# Lens & Light Studio — Photography Portfolio Website
**Package:** Heptley GROW Plan (₹7,999 + GST)  
**Location:** Bhopal, Madhya Pradesh, India  
**Stack:** Next.js (App Router), React 19, JavaScript (JSX), Vanilla CSS & CSS Modules  

---

## 1. Project Overview

Lens & Light Studio is an authentic, luxury editorial portfolio website for a dedicated two-photographer team based in Bhopal, MP. Designed around the **EVORA DESIGN** aesthetic (high-contrast display serif typography, framed magazine canvas, hairline borders, and atmospheric negative space), the website highlights genuine photography with zero distraction.

### Key Highlights:
- **100% Genuine Studio Photography**: Strictly zero AI images and zero generic stock photos.
- **Optimized Performance**: All images optimized under the 250 KB target ($<150\text{ KB}$ each) with native WebP delivery and zero CLS.
- **7 Static Pages (Heptley GROW Maximum)**:
  1. `/` (Home) — Editorial framed hero, studio masthead, 4-column capabilities strip, featured stories, and direct WhatsApp primary route.
  2. `/weddings` — Curated wedding ceremonies, sacred temple vows, and heritage bridal couture.
  3. `/pre-wedding` — Cinematic pre-wedding sessions in historic palaces and heritage forts across MP.
  4. `/baby-family` — Gentle newborn portraits in Kasavu attire and heirloom family milestones.
  5. `/portfolio` — Full interactive gallery with client-side category filters (`All`, `Weddings`, `Pre-Wedding`, `Baby & Family`) and an **accessible zero-dependency Lightbox** with keyboard and touch swipe navigation.
  6. `/about` — The two-photographer team story, philosophy of quiet luxury, and Bhopal roots (zero fabricated claims).
  7. `/contact` — Direct WhatsApp date inquiry generator, studio contact details, and Bhopal service-area coverage.

---

## 2. Technology Stack & Boundaries

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: Standard CSS & CSS Modules (No Tailwind, No Bootstrap)
- **Icons**: Lightweight SVG icons
- **State Management**: Native React hooks (`useState`, `useRef`, `useCallback`)
- **Backend / Database**: None (Pure static architecture, no DB or server dependencies)
- **SEO**: Complete JSON-LD `PhotographyBusiness` schema for Bhopal, meta tags, and OpenGraph cards.

---

## 3. Development & Build Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle (Static prerender)
npm run build

# Start production server
npm run start
```

---

## 4. Configuration & Client Input Registry

| Item | Current Status | Action Needed |
| :--- | :--- | :--- |
| **WhatsApp Number** | Configured as `+919876543210` in `data/portfolioData.js` | Update with client's live WhatsApp number |
| **Phone Number** | Configured as `+91 98765 43210` in `data/portfolioData.js` | Update with client's official calling number |
| **Email Address** | Configured as `hello@lensandlightstudio.com` | Update with client's official business inbox |
| **Google Business Profile (GBP)** | NAP details aligned with Bhopal location | Submit/verify profile with owner OTP/postcard |
