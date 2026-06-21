import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Dev portfolio palette */
        portWhite: "var(--portfolio-white)",
        portBlack: "var(--portfolio-black)",
        portBlue: "var(--portfolio-blue)",
        portRed: "var(--portfolio-red)",
        portGreen: "var(--portfolio-green)",
        portGray: "var(--portfolio-gray)",
        portMidGray: "var(--portfolio-mid-gray)",
        portBg: "var(--portfolio-bg)",
        portSurface: "var(--portfolio-surface)",
        /* Legacy / compatibility */
        primary: "#0057FF",
        primaryDark: "#0041cc",
        accentGreen: "#00C853",
        accentRed: "#FF1F1F",
        surface: "#f2f2f2",
        surfaceDark: "#0a0a0a",
        surfaceElevated: "#ffffff",
        surfaceElevatedDark: "#141414",
        text: "#0a0a0a",
        textDark: "#e5e5e5",
        textMuted: "#8a8a8a",
        textMutedDark: "#9ca3af",
        blockSkills: "#f8fafc",
        blockProjects: "#f2f2f2",
        blockFooter: "#f2f2f2",
        blockExperience: "#f8fafc",
        blockEducation: "#f0f9ff",
        blockContact: "#fafafa",
        blockAbout: "#f5f5f5",
        blockSkillsDark: "#141414",
        blockProjectsDark: "#0f0f0f",
        blockFooterDark: "#0a0a0a",
        blockExperienceDark: "#111",
        blockEducationDark: "#0d1117",
        blockContactDark: "#111",
        blockAboutDark: "#0f0f0f",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.8s ease forwards",
        float: "float 4s ease-in-out infinite",
        "float-delay-1": "float 4s ease-in-out 0.4s infinite",
        "float-delay-2": "float 4s ease-in-out 0.8s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "25%": { transform: "translateY(-20px) scale(1.02)" },
          "50%": { transform: "translateY(8px) scale(0.98)" },
          "75%": { transform: "translateY(-14px) scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
