"use client";

import { SIMPLE_ICON_PATHS } from "@/data/simpleIconPaths";

const FALLBACK_ICON_PATHS: Record<string, string> = {
  matplotlib:
    "M2 21V3h2v16h18v2H2Zm4.2-4.1 3.2-5.1 3.4 3.2 5.5-8.1 2.1 1.4-7 10.3-3.5-3.3-2.6 4.2-1.1-.7Z",
  microsoftsqlserver:
    "M12 2C6.5 2 2 3.6 2 5.6v12.8C2 20.4 6.5 22 12 22s10-1.6 10-3.6V5.6C22 3.6 17.5 2 12 2Zm0 2c4.6 0 7.6 1.1 8 1.6-.4.5-3.4 1.6-8 1.6S4.4 6.1 4 5.6C4.4 5.1 7.4 4 12 4ZM4 8.3c1.8.8 4.7 1.2 8 1.2s6.2-.4 8-1.2v3.4c-.4.5-3.4 1.6-8 1.6s-7.6-1.1-8-1.6V8.3Zm0 6.1c1.8.8 4.7 1.2 8 1.2s6.2-.4 8-1.2v3.9c-.4.5-3.4 1.7-8 1.7s-7.6-1.2-8-1.7v-3.9Z",
};

type Props = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  /** Optional brand hex (e.g. #FF9900). When set, the logo is served in this color. */
  color?: string;
};

export default function SkillIcon({ slug, name, size = 28, className = "", color }: Props) {
  const icon = SIMPLE_ICON_PATHS[slug];
  const fill = color || icon?.hex || "currentColor";

  if (!icon && FALLBACK_ICON_PATHS[slug]) {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
        style={{ color: fill }}
      >
        <path fill="currentColor" d={FALLBACK_ICON_PATHS[slug]} />
      </svg>
    );
  }

  if (!icon) {
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
    <svg
      role="img"
      aria-label={name}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ color: fill }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
