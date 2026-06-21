"use client";

import type { ReactNode } from "react";

/**
 * Stats strip icons — bold geometric stroke style, same family as SkillBlockIcon.
 * DESIGN / SOLVE / ENGINEER / BUILD. Use currentColor so parent stat-cell sets color.
 */
const STAT_ICONS: Record<string, ReactNode> = {
  DESIGN: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  SOLVE: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4.5 12.33V15h9v-.67A7 7 0 0 0 12 2z" />
    </svg>
  ),
  ENGINEER: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 4L4 12l4 8" />
      <path d="M16 4l4 8-4 8" />
      <path d="M4 12h16" />
    </svg>
  ),
  BUILD: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="16" width="16" height="4" rx="1" />
      <rect x="6" y="10" width="12" height="5" rx="1" />
      <rect x="8" y="4" width="8" height="5" rx="1" />
    </svg>
  ),
};

type StatKey = keyof typeof STAT_ICONS;

type Props = {
  name: StatKey;
  size?: number;
  className?: string;
};

export default function StatIcon({ name, size = 48, className = "" }: Props) {
  const icon = STAT_ICONS[name];
  if (!icon) return null;
  return (
    <span
      className={`stat-icon inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {icon}
    </span>
  );
}

export const STAT_ICON_NAMES = Object.keys(STAT_ICONS) as StatKey[];
