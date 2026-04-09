# SS Aircon — React Website

A fully responsive, modern React application rebuilt from [ssaircons.com](https://www.ssaircons.com/).

## Tech Stack

| Tool | Version |
|---|---|
| React | 18 |
| Vite | 5 |
| Tailwind CSS | 3 |
| Framer Motion | 11 |
| React Router | 6 |
| React Helmet Async | 2 |
| React Icons | 5 |

## Project Structure

```
ss-aircon/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # (add local images here)
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar + mobile menu
│   │   ├── Footer.jsx          # Full footer with links & social
│   │   ├── HeroSlider.jsx      # Auto-play hero with 4 slides
│   │   ├── StatsSection.jsx    # Animated counters & highlights
│   │   ├── ProductsSection.jsx # Product cards grid
│   │   ├── ServicesSection.jsx # Services on dark background
│   │   ├── AboutSection.jsx    # Company info + image collage
│   │   ├── WhyUsSection.jsx    # Why choose us cards
│   │   ├── TestimonialsSection.jsx
│   │   ├── ContactSection.jsx  # Office cards + validated form
│   │   ├── SectionTitle.jsx    # Reusable animated section titles
│   │   ├── PageHero.jsx        # Inner page hero with breadcrumbs
│   │   └── ScrollToTop.jsx     # Auto-scroll on route change
│   ├── data/
│   │   └── siteData.js    # All content in one place
│   ├── hooks/
│   │   ├── useInView.js   # IntersectionObserver hook
│   │   └── useScrolled.js # Navbar scroll detection
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+ (`node -v` to check)
- npm 9+ (`npm -v` to check)

### 1. Install dependencies

```bash
npm install
```

> ⚠️ If you get `ENOSPC` (no space left), free up disk space on C:\ first.

### 2. Start development server

```bash
npm run dev
```

Visit: **http://localhost:5173**

### 3. Build for production

```bash
npm run build
```

Output: `dist/` folder ready to deploy.

### 4. Preview production build

```bash
npm run preview
```

## Pages & Routes

| URL | Page |
|---|---|
| `/` | Home (hero, stats, about, products, services, contact) |
| `/about` | Company overview, team, sectors, partners |
| `/products` | All product details with alternating layout |
| `/services` | All service details with alternating layout |
| `/contact` | Contact form + office locations + map |

## Features

- ✅ **Sticky Navbar** — transparent → solid white on scroll, mobile hamburger menu
- ✅ **Hero Slider** — 4 slides with auto-play, pause on hover, dot navigation
- ✅ **Framer Motion** — fade, slide-up, scale animations on scroll
- ✅ **Scroll Animations** — elements animate in via IntersectionObserver
- ✅ **Responsive** — mobile-first, works on all screen sizes
- ✅ **Contact Form** — client-side validation with clear error messages
- ✅ **SEO** — meta tags via react-helmet-async on every page
- ✅ **Smooth Scroll** — scrolls to top on every route change

## Customization

### Update content
All text, addresses, and data are in **`src/data/siteData.js`**. Edit once — updates everywhere.

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors.primary` for blue, `accent` for orange.

### Replace images
Images currently use Unsplash placeholders. Replace the `image` URL in `siteData.js` with your own image paths under `src/assets/`.

### Connect contact form
In `src/components/ContactSection.jsx`, find the `handleSubmit` function and replace the `Promise` simulation with your API call:
```js
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to netlify.com
```

### Configure SPA routing
Add a `public/_redirects` file for Netlify:
```
/*  /index.html  200
```

Or `public/vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
