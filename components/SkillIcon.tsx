"use client";

import { useState } from "react";

const JSDELIVR_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@v16/icons";
// When color is provided, use Simple Icons CDN to serve the logo in that hex color
const SIMPLEICONS_COLOR_BASE = "https://cdn.simpleicons.org";

type Props = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  /** Optional brand hex (e.g. #FF9900). When set, the logo is served in this color. */
  color?: string;
};

export default function SkillIcon({ slug, name, size = 28, className = "", color }: Props) {
  const [error, setError] = useState(false);
  const hex = color ? color.replace("#", "") : null;
  const src = hex
    ? `${SIMPLEICONS_COLOR_BASE}/${slug}/${hex}`
    : `${JSDELIVR_BASE}/${slug}.svg`;

  if (error) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md bg-[var(--portfolio-gray)] dark:bg-white/10 text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] font-mono font-bold ${className}`}
        style={{ width: size, height: size, fontSize: Math.max(10, size * 0.45) }}
        title={name}
      >
        {name ? name.charAt(0).toUpperCase() : "?"}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- external CDN (simpleicons) with dynamic slug
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
