# Dental Demo Website — Clove-Inspired Design

A modern, warm, professional dental clinic demo website inspired by India's top dental chain design patterns. Built with React + Vite + Tailwind CSS + Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Customize for a New Clinic

Edit **one file**: `src/data/clinicData.js`

## Section Order

1. Sticky Navbar (orange + brown CTAs)
2. Hero (promo box + years of trust badge)
3. Stats Ticker (auto-scrolling bar)
4. 3 Info Cards (reviews, location, doctor)
5. Intent Selector (8 tiles — "How can we help you?")
6. Why Trust Us (photo placeholder + 4 feature boxes)
7. Inline Booking Form (single-row)
8. Treatments Grid (12 cards)
9. Patient Testimonials (with treatment tags)
10. FAQ Accordion (2-column)
11. Footer (dark brown + orange accents)
12. Floating WhatsApp + Phone buttons

## Adding Real Photos Later

Drop images into `public/images/` and update components:
- Hero: add background image to the hero section
- Doctor: replace DoctorAvatar in WhyTrustUs.jsx with an `<img>` tag
- Testimonials: add patient photos to review cards

## Build for Production

```bash
npm run build
```

Output: `dist/` folder. Deploy anywhere (Netlify, Vercel, Hostinger).

## Tech Stack

- React 18 + Vite
- Tailwind CSS 4 (via @tailwindcss/vite)
- Framer Motion (animations)
- Lucide React (icons)
- Google Fonts (Figtree)
