# Portfolio Design Document

## Overview

This portfolio is a developer-focused, single-page-first Next.js site with supporting detail pages for About, Education, Experience, Projects, Skills, Contact, Blog, and Site Settings. The homepage embeds the full skills, education, projects, experience, about, and contact sections so visitors can browse the full portfolio without leaving the landing page.

The design direction is bold, technical, and high-contrast: large editorial typography, terminal/code UI blocks, sharp section dividers, animated tech logos, and a light/dark color system.

## Technology Stack

- Framework: Next.js 14 App Router
- Language: TypeScript
- UI: React 18
- Styling: Tailwind CSS with global CSS design tokens
- Forms/API: Next.js API route with Resend/Supabase dependencies available
- Main data source: `data/resume.ts`
- Page-specific resume data: `data/resumePageContent.ts`

## Design Tokens

Global tokens live in `app/globals.css`.

Light mode:

- Background: `--portfolio-bg: #ffffff`
- Text: `--portfolio-black: #0a0a0a`
- Blue accent: `--portfolio-blue: #0057FF`
- Red accent: `--portfolio-red: #FF1F1F`
- Green accent: `--portfolio-green: #00C853`
- Surface: `--portfolio-gray: #f2f2f2`

Dark mode:

- Background: `--portfolio-bg: #080C10`
- Text: `--portfolio-white: #E8EDF2`
- Blue accent: `--portfolio-blue: #1A8CFF`
- Red accent: `--portfolio-red: #FF3D3D`
- Green accent: `--portfolio-green: #00E676`
- Surface: `--portfolio-gray: #0d1117`

Typography uses the Apple system font stack for most UI, with large display headings using tight tracking and bold weight.

## Homepage Layout

The homepage is implemented in `app/page.tsx`.

Section order:

1. Hero
2. Skills ticker
3. Stats strip
4. Full Skills section
5. Education section
6. Projects section
7. Experience section
8. About section
9. Contact section

The homepage uses colored border dividers between major sections, alternating blue, red, and green.

## Hero Section

The hero is a two-column layout on desktop and stacked layout on mobile.

Left side:

- “Open to opportunities” label
- Large `Dylan Butelho` heading
- `CODE – BUILD – LEARN` tagline
- Portfolio summary
- CTA buttons: `View Projects` and `Let's Talk`

Right side:

- `HeroCodeBlock`
- Interactive terminal-style UI
- Supports commands like `help`, `list`, `search`, `skills`, `projects`, `status`, and contact-related commands

## Skills System

Main files:

- `components/SkillsSection.tsx`
- `components/SkillIcon.tsx`
- `components/SkillBlockIcon.tsx`
- `data/resume.ts`
- `data/skillCards.ts`
- `data/skillColors.ts`
- `data/skillLogoOverrides.ts`
- `data/simpleIconPaths.ts`

The skills section has two parts:

- `My Tech Stack`: six large category cards
- `All Skills`: full grid of logos and labels

Current skill categories:

- AI Agents & LLMs
- ML & Training
- Languages & APIs
- Full Stack
- Infrastructure
- Tools & Platforms

Logo rendering priority:

1. If a slug exists in `SKILL_LOGO_OVERRIDES`, use the image from `public/logos`.
2. Otherwise, if a slug exists in `SIMPLE_ICON_PATHS`, render inline SVG path data.
3. Otherwise, use a local fallback/custom renderer in `SkillIcon.tsx`.

Important logo behavior:

- AWS uses `/logos/aws.png` and is inverted in dark mode.
- Cursor AI uses `/logos/cursor.png` and is inverted in dark mode.
- OpenAI uses `/logos/openai.png`, inverted to black in light mode and shown white in dark mode.
- Many provided logos have transparent backgrounds after processing.

## Logo Assets

Custom logos live in `public/logos`.

Important custom overrides:

- `amazonaws`: `/logos/aws.png`
- `anthropic`: `/logos/anthropic.png`
- `claude-code`: `/logos/claude-code.png`
- `openai`: `/logos/openai.png`
- `huggingface`: `/logos/huggingface.png`
- `opencv`: `/logos/opencv.png`
- `googlecloud`: `/logos/google-cloud.png`
- `autodesk`: `/logos/autocad.png`
- `cursor`: `/logos/cursor.png`
- `codex`: `/logos/codex.png`
- `antigravity`: `/logos/antigravity.png`
- `powerbi`: `/logos/powerbi.png`
- `scikitlearn`: `/logos/scikit-learn.png`
- `opentelemetry`: `/logos/opentelemetry.png`
- `canva`: `/logos/canva.png`
- `microsoftexcel`: `/logos/excel.png`
- `jira`: `/logos/jira.png`
- `matplotlib`: `/logos/matplotlib.svg`

When adding a new image logo:

1. Add the image to `public/logos`.
2. Add the slug-to-path entry in `data/skillLogoOverrides.ts`.
3. Add a color in `data/skillColors.ts` if needed.
4. Check dark mode visibility.
5. Run `npm run build`.

## Projects Section

Project data is stored in `academicProjects` inside `data/resume.ts`.

The project layout:

- Responsive grid
- Numbered project cards
- Large project title
- Project description
- Colored tech badges
- Decorative project number background

Homepage and `/projects` both render all projects.

Current project content is based on the updated master resume and includes:

- OrangeBot
- H1B JobPilot
- LLM Alignment Lab
- ShopGraph
- AeroSense
- LeafScan
- E-Commerce Platform
- Job Portal
- Dating App
- Student Classroom Management System
- Blogging Platform

## Experience Section

Experience data exists in two places:

- Global site data: `data/resume.ts`
- Page-specific data: `data/resumePageContent.ts`

The current experience entries are:

- Software Engineer, iConsult Collaborative, Jan 2026 - Present
- Software Engineer, Vervali Systems, Jan 2024 - Jul 2024

The homepage uses `ExperienceSection`, and the dedicated experience page can pass updated experience data from `resumePageContent.ts`.

## Education Section

Education is static, not accordion/dropdown-based. The section is designed to show education content directly without requiring the user to click degree titles.

Education data exists in:

- `data/resume.ts`
- `data/resumePageContent.ts`

Certifications are rendered from resume data and include AWS and Cisco certifications.

## About Section

The About copy is consistent across the homepage and the dedicated About page:

> I am a Computer Science graduate with a master's degree from Syracuse University, bringing experience in full-stack development, machine learning, and scalable systems. I am proficient in Python and JavaScript, with hands-on experience building data-driven applications on AWS. I specialize in designing efficient, well-structured systems with clean architecture and dependable execution across the full software lifecycle, from design through deployment.

The homepage About section uses:

- Dark background
- Large editorial heading
- Green/blue/red accent dots
- `AboutCodeBlock` on the right side

## Contact Section

The contact section uses:

- Large `LET'S BUILD TOGETHER` heading
- Contact links
- Contact form component
- Blue border divider

The contact page and homepage contact section share visual language.

## Theme Behavior

The site supports light and dark mode using CSS variables and `.dark` class tokens.

Important theme-sensitive logos:

- AWS: dark mode inversion
- Cursor AI: dark mode inversion
- OpenAI: black in light mode, white in dark mode

When adding dark logos, avoid hardcoded black assets unless they are inverted or replaced in dark mode.

## Motion And Interaction

Motion principles:

- Lightweight hover scaling for skills logos
- Smooth scroll
- Terminal-like hero interaction
- Animated ticker for skill highlights
- Reveal classes are default-visible so content does not depend on JavaScript

Accessibility notes:

- Images include `alt` text from skill names.
- Decorative section dividers use `aria-hidden`.
- Reduced-motion media query disables major animations.

## Responsive Behavior

Primary breakpoints use Tailwind defaults:

- Mobile: stacked, single-column layouts
- Small screens: tighter spacing and smaller headings
- Desktop: two-column hero/about/contact, multi-column skills/projects

Important responsive behaviors:

- Hero stacks vertically on mobile.
- Skills grid becomes 1, 2, then 3 columns.
- All skills list becomes 3, 4, 5, then 6 columns.
- Project cards move from one column to two columns.

## Data Ownership

Use `data/resume.ts` for globally visible content:

- Profile
- Education
- Experience
- Projects
- Certifications
- Skill categories
- Skill ticker highlights

Use `data/resumePageContent.ts` for page-specific overrides where the dedicated pages need resume-specific content.

## Build And Verification

Use these commands:

```bash
npm run dev
npm run build
```

Before pushing:

```bash
git status
npm run build
```

## Git Workflow

To push to `master`:

```bash
git add .
git commit -m "Update portfolio design and content"
git push origin master
```

To merge `master` into `main`:

```bash
git checkout main
git pull origin main
git merge master
git push origin main
```

## Maintenance Checklist

When updating resume content:

- Update `data/resume.ts`
- Update `data/resumePageContent.ts` if dedicated pages need exact resume alignment
- Update `public/resume.pdf`
- Verify hero terminal output if projects/skills changed

When updating skills:

- Add/remove skill entries in `skillCategories`
- Add brand color in `data/skillColors.ts`
- Add logo override or SVG path
- Verify light and dark mode
- Run `npm run build`

When updating logos:

- Prefer transparent PNG/SVG assets
- Store custom images in `public/logos`
- Map slugs in `data/skillLogoOverrides.ts`
- Avoid broken image paths
- Check hover scaling in the skills grid
- Check the homepage ticker

