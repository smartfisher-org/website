# SmartFISHER Website

## Project Overview
SmartFISHER is an AI-powered underwater fish analysis platform that identifies marine species and measures biomass from underwater camera feeds. The website showcases real-time fish detection capabilities and analytics dashboard features.

## Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS 4 with dark theme
- **UI Components**: Radix UI + shadcn/ui components
- **Deployment**: Vercel (live)

## Key Features
- **Hero Section**: Gradient-themed landing with rotating underwater images
- **Live Demo**: Interactive livestream preview with AI detection overlays
- **Use Cases Carousel**: Marine research, conservation, aquaculture, offshore energy, reef restoration, coastal health
- **Dashboard Preview**: Analytics charts, map views, and data visualizations
- **FAQ Section**: Expandable accordion with technical details
- **Responsive Design**: Mobile-first approach with dark ocean theme

## Key Components
- `app/page.tsx` - Main landing page layout
- `components/hero.tsx` - Primary hero section with CTA buttons
- `components/livestream-section.tsx` - Demo video preview with modal
- `components/dashboard-section.tsx` - Dashboard imagery showcase
- `components/use-cases-carousel.tsx` - Industry applications carousel
- `components/faq-section.tsx` - FAQ accordion

## Build Commands
- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm lint` - ESLint check

## Color Scheme
Underwater-themed gradients using cyan/teal/emerald accents on slate-900/950 backgrounds.