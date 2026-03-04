"use client";

import type { ReactNode } from "react";

/**
 * Themed block icons for My Tech Stack — geometric outline style
 * matching portfolio (blue/red/green). Use currentColor so parent
 * can set color via .skill-card bar (e.g. accent bar).
 */
const ICONS: Record<string, ReactNode> = {
  Cloud: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  DevOps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M21 21v-5h-5" />
    </svg>
  ),
  "AI/ML": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 4-4" />
      <path d="M7 10l2-2" />
      <circle cx="18" cy="6" r="2" strokeWidth="1.75" />
    </svg>
  ),
  Frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 13h3" />
      <path d="M14 13h3" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="4" y="11" width="16" height="5" rx="1" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      <path d="M9 7v1" />
      <path d="M9 14v1" />
      <path d="M9 20v.5" />
    </svg>
  ),
  "Data & ML": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 4-4" />
      <path d="M7 10l2-2" />
      <circle cx="18" cy="6" r="2" strokeWidth="1.75" />
    </svg>
  ),
  Databases: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),
  Tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "Full-Stack": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="5" y="12" width="14" height="5" rx="1" />
      <rect x="6" y="20" width="12" height="3" rx="0.5" />
    </svg>
  ),
  // Skills page categories (map to same or similar icons)
  Programming: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  ),
  "Web & Backend": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="4" width="16" height="5" rx="1" />
      <rect x="4" y="11" width="16" height="5" rx="1" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      <path d="M9 7v1" />
      <path d="M9 14v1" />
    </svg>
  ),
  "Data Science & ML": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 4-4" />
      <path d="M7 10l2-2" />
      <circle cx="18" cy="6" r="2" strokeWidth="1.75" />
    </svg>
  ),
  "Tools & Platforms": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

type Props = {
  name: string;
  size?: number;
  className?: string;
  color?: string;
};

export default function SkillBlockIcon({ name, size = 28, className = "", color }: Props) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <span
      className={`skill-block-icon inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        color: color ?? "currentColor",
      }}
      aria-hidden
    >
      {icon}
    </span>
  );
}

/** Icon name for home SKILL_CARDS (title) */
export const HOME_SKILL_ICON_NAMES = [
  "Cloud",
  "DevOps",
  "AI/ML",
  "Databases",
  "Tools",
  "Full-Stack",
] as const;
