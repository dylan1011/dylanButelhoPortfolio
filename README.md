# Software Developer Portfolio

A responsive Next.js portfolio with a dark theme and teal accent. Includes Home, About, Experience, Education, Skills, and Contact.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Hero image

A generated hero image is in `public/hero-visual.png`. If it’s missing, the home page shows a gradient fallback. Replace `public/hero-visual.png` with your own image if you like.

## Customize

- **Content**: Edit the copy in `app/page.tsx`, `app/about`, `app/experience`, `app/education`, `app/skills`, and `app/contact` pages.
- **Contact**: Update email and social links in `app/contact/page.tsx`.
- **Styles**: Colors and fonts are in `tailwind.config.ts` and `app/globals.css`.

## Project structure

- `app/` — Next.js App Router (layout, pages)
- `components/` — shared components (Navbar, HeroVisual)
- `public/` — static assets (e.g. hero image)
