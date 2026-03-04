## Dylan Butelho – Portfolio

This is the source code for my personal portfolio website, built with **Next.js 14**, **React 18**, and **Tailwind CSS**. It showcases my education, experience, skills, and projects, with custom UI sections like:

- **Education** page and home section with accordion, proficiency rings, and certificate ticker
- **Experience** timeline and skills band
- **My Tech Stack** cards and matrix background block

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI**: React 18, Tailwind CSS
- **Linting**: ESLint with `next lint`
- **Other**: Supabase client (for future integrations), Resend (for email)

### Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/dylan1011/dylanButelhoPortfolio.git
cd dylanButelhoPortfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Scripts

- **`npm run dev`** – Start the development server
- **`npm run build`** – Create an optimized production build
- **`npm run start`** – Run the production build
- **`npm run lint`** – Run ESLint checks

### Deployment

This app is optimized for deployment on platforms like **Vercel** or any Node.js host that supports Next.js:

1. Build the app:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start
   ```

On Vercel, you can connect this GitHub repository and use the default Next.js build settings:

- **Build command**: `npm run build`
- **Output**: `.next`

### Project Structure (High Level)

- `app/` – Next.js App Router pages and layouts (home, education, experience, skills, blog, projects, contact, etc.)
- `components/` – Reusable UI components like `EducationSection`, `ExperienceSection`, `MatrixBackground`, navbar, and skill blocks
- `data/` – Static data for resume, skills, and projects
- `public/` – Static assets (images, icons, etc.)

### Notes

- Some pages intentionally use plain `<img>` tags instead of `next/image`; ESLint rules are disabled in those files where needed.
- The UI is tuned for both desktop and mobile, with special handling for the education accordion, skill icons, and matrix block on smaller screens.

