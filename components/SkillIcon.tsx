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

  if (slug === "css") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <path fill="#1572B6" d="M2.25 1.5h19.5l-1.78 19.98L11.98 23.7l-7.95-2.22L2.25 1.5Z" />
        <path fill="#33A9DC" d="m12 21.78 6.45-1.8 1.52-17.04H12v18.84Z" />
        <path fill="#fff" d="M6.22 6.45h11.56l-.2 2.22h-8.9l.2 2.28h8.5l-.64 7.14L12 19.4l-4.73-1.31-.32-3.58h2.32l.16 1.8 2.57.69 2.58-.7.28-3.14H6.84l-.62-6.71Z" />
      </svg>
    );
  }

  if (slug === "amazonaws") {
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
        <path fill="currentColor" d="M6.2 9.9c0 .55.06 1 .17 1.35.12.35.3.74.55 1.18.09.14.13.28.13.41 0 .18-.11.36-.34.54l-.74.49c-.11.07-.21.1-.3.1-.12 0-.24-.06-.36-.17-.5-.53-.87-1.11-1.1-1.74-.23-.63-.35-1.39-.35-2.29 0-1.43.33-2.55.99-3.35.66-.81 1.58-1.21 2.76-1.21.38 0 .78.06 1.2.19.42.12.74.26.96.42.14.1.22.21.22.34 0 .09-.03.19-.08.3l-.43.78c-.1.18-.22.27-.36.27-.07 0-.16-.02-.27-.07-.37-.16-.75-.24-1.13-.24-.66 0-1.16.23-1.5.69-.35.46-.52 1.13-.52 2.01Zm6.92 3.88c-.85 0-1.52-.24-2.03-.72-.5-.48-.76-1.12-.76-1.91 0-.84.3-1.5.89-1.96.6-.47 1.4-.7 2.42-.7.34 0 .69.03 1.06.08.37.06.75.14 1.15.25v-.9c0-.63-.13-1.07-.39-1.32-.26-.25-.71-.38-1.36-.38-.3 0-.6.04-.92.11-.31.07-.62.17-.92.29-.14.06-.25.09-.33.11a.58.58 0 0 1-.15.02c-.2 0-.3-.15-.3-.44v-.57c0-.19.03-.33.1-.42.07-.09.19-.18.38-.27.3-.15.65-.27 1.07-.36.42-.1.86-.15 1.33-.15 1 0 1.74.23 2.2.69.47.46.7 1.15.7 2.09v4.23c0 .16.03.29.08.39.05.1.15.2.29.31.1.07.15.16.15.27 0 .12-.08.24-.23.35l-.75.53c-.13.09-.25.13-.35.13-.13 0-.25-.06-.36-.18-.17-.18-.31-.37-.42-.56-.11-.2-.22-.42-.33-.68-.29.38-.64.67-1.05.86-.42.2-.89.3-1.43.3Zm.42-1.45c.33 0 .68-.06 1.04-.18.36-.12.68-.34.96-.65.17-.19.28-.4.34-.63.06-.23.1-.51.1-.84v-.52c-.29-.07-.58-.12-.89-.16-.31-.04-.61-.06-.9-.06-.66 0-1.14.13-1.46.39-.31.26-.47.64-.47 1.12 0 .45.12.79.35 1.02.24.22.55.33.93.33Z" />
        <path fill="#FF9900" d="M18.95 17.24c-1.86 1.37-4.56 2.1-6.89 2.1-3.26 0-6.2-1.2-8.42-3.21-.17-.16-.02-.38.19-.25 2.4 1.39 5.36 2.23 8.42 2.23 2.07 0 4.35-.43 6.45-1.32.31-.13.58.21.25.45Z" />
        <path fill="#FF9900" d="M19.72 16.36c-.24-.31-1.57-.15-2.17-.08-.18.02-.21-.14-.05-.25 1.06-.74 2.8-.53 3-.28.21.26-.05 2.01-1.04 2.84-.15.13-.3.06-.23-.11.22-.57.72-1.81.49-2.12Z" />
      </svg>
    );
  }

  if (slug === "java") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <path fill="#E76F00" d="M13.15 2.2c1.15 1.2-.3 2.28-1.06 3.1-.76.82-.88 1.56-.18 2.42-1.47-.83-1.74-1.95-.78-3.02.71-.8 1.96-1.48 2.02-2.5Z" />
        <path fill="#5382A1" d="M8.2 15.2c-1.78.26-2.88.84-2.88 1.48 0 .96 2.42 1.74 5.4 1.74s5.4-.78 5.4-1.74c0-.61-.98-1.15-2.48-1.46l.54-.86c2.35.45 3.88 1.34 3.88 2.35 0 1.56-3.29 2.82-7.34 2.82s-7.34-1.26-7.34-2.82c0-1.07 1.57-2 3.98-2.46l.84.95Z" />
        <path fill="#E76F00" d="M15.25 6.2c1.52 1.55-.4 2.95-1.43 4-1.03 1.06-1.2 2.04-.25 3.15-2.02-1.07-2.36-2.52-1.05-3.9.98-1.03 2.62-1.94 2.73-3.25Z" />
        <path fill="#5382A1" d="M8.1 12.35c-1.02.31-1.63.74-1.63 1.2 0 .86 1.9 1.55 4.25 1.55s4.25-.69 4.25-1.55c0-.39-.4-.76-1.07-1.04l-.47.75c.18.09.28.19.28.29 0 .39-1.34.7-2.99.7s-2.99-.31-2.99-.7c0-.14.18-.27.49-.39l-.12-.81Z" />
        <path fill="#5382A1" d="M17.7 19.2c.63.32.98.69.98 1.08 0 1.08-2.85 1.95-6.36 1.95s-6.36-.87-6.36-1.95c0-.36.32-.7.88-1 1.02.62 3.06 1.03 5.48 1.03s4.38-.43 5.38-1.11Z" />
      </svg>
    );
  }

  if (slug === "powerbi") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <rect x="3.5" y="12.2" width="4.1" height="8.3" rx="1.1" fill="#F2C811" />
        <rect x="9.7" y="8.1" width="4.1" height="12.4" rx="1.1" fill="#E6B800" />
        <rect x="15.9" y="3.5" width="4.1" height="17" rx="1.1" fill="#C89B00" />
        <path fill="#F7D857" d="M5.55 12.2h2.05v8.3H5.55zM11.75 8.1h2.05v12.4h-2.05zM17.95 3.5H20v17h-2.05z" opacity=".65" />
      </svg>
    );
  }

  if (slug === "microsoftexcel") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <rect x="7.5" y="3.5" width="13" height="17" rx="1.4" fill="#21A366" />
        <path fill="#107C41" d="M7.5 6.3h13v3.4h-13zM7.5 14.3h13v3.4h-13z" />
        <path fill="#185C37" d="M3.5 6.2 11 4.9v14.2L3.5 17.8z" />
        <path fill="#fff" d="m5.3 9 1.58 2.75L8.56 9h1.46l-2.3 3.75 2.42 4.05H8.6l-1.75-2.97-1.74 2.97H3.65l2.4-3.98L3.8 9h1.5Z" />
      </svg>
    );
  }

  if (slug === "figma") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <circle cx="9" cy="5.5" r="3.2" fill="#F24E1E" />
        <circle cx="15" cy="5.5" r="3.2" fill="#FF7262" />
        <circle cx="9" cy="12" r="3.2" fill="#A259FF" />
        <circle cx="15" cy="12" r="3.2" fill="#1ABCFE" />
        <circle cx="9" cy="18.5" r="3.2" fill="#0ACF83" />
      </svg>
    );
  }

  if (slug === "canva") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <circle cx="12" cy="12" r="10" fill="#00C4CC" />
        <path fill="#8B3DFF" d="M20.5 8.2a10 10 0 0 1-12.9 12.6A12.5 12.5 0 0 0 20.5 8.2Z" opacity=".9" />
        <path fill="#fff" d="M13.05 16.65c-2.86 0-4.93-1.7-4.93-4.46 0-2.85 2.22-4.84 5.16-4.84 1.3 0 2.4.33 3.2.93l-.77 1.68c-.64-.42-1.36-.64-2.2-.64-1.77 0-3.02 1.1-3.02 2.74 0 1.58 1.18 2.55 2.86 2.55.86 0 1.63-.22 2.35-.67l.67 1.66c-.82.67-1.94 1.05-3.32 1.05Z" />
      </svg>
    );
  }

  if (slug === "claude-code") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <rect width="24" height="24" rx="6" fill="#D97757" />
        <path
          fill="#FFF7ED"
          d="M12 4.4 4.8 8.55v6.9L12 19.6l7.2-4.15v-6.9L12 4.4Zm0 2.56 4.98 2.88v4.32L12 17.04l-4.98-2.88V9.84L12 6.96Z"
        />
        <path fill="#FFF7ED" d="m9.9 14.55-2.06-2.06 2.06-2.05 1.02 1.02-1.04 1.03 1.04 1.04-1.02 1.02Zm4.2 0-1.02-1.02 1.04-1.04-1.04-1.03 1.02-1.02 2.06 2.05-2.06 2.06Z" />
      </svg>
    );
  }

  if (slug === "codex") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <rect width="24" height="24" rx="6" fill="#10A37F" />
        <path fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" d="m9.2 8.1-3.6 3.9 3.6 3.9M14.8 8.1l3.6 3.9-3.6 3.9M13 7.6l-2 8.8" />
        <circle cx="12" cy="12" r="1.1" fill="#fff" />
      </svg>
    );
  }

  if (slug === "cursor") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <rect width="24" height="24" rx="6" fill="#111827" />
        <path fill="#fff" d="M5.25 3.9 18.9 10.8l-6.02 1.38-1.38 6.02L5.25 3.9Z" />
        <path fill="#A78BFA" d="m13.05 12.11 3.7 3.7-1.78 1.78-3.7-3.7.42-1.36 1.36-.42Z" />
      </svg>
    );
  }

  if (slug === "antigravity") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <defs>
          <linearGradient id="antigravity-gradient" x1="4" x2="20" y1="20" y2="4" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#antigravity-gradient)" />
        <path fill="#fff" d="M12 4.2 18.6 19h-2.72l-1.13-2.78H9.18L8.08 19H5.4L12 4.2Zm-1.95 9.84h3.82L12 9.38l-1.95 4.66Z" />
        <path fill="none" stroke="#fff" strokeWidth="1.25" strokeLinecap="round" d="M5.2 9.7c3.8-2.38 9.8-2.38 13.6 0M4.8 14.9c4.18 2.55 10.22 2.55 14.4 0" opacity=".72" />
      </svg>
    );
  }

  if (slug === "tableau") {
    return (
      <svg
        role="img"
        aria-label={name}
        viewBox="0 0 128 128"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      >
        <g fill="none" strokeLinecap="square">
          <g stroke="#4E79A7" strokeWidth="8">
            <path d="M64 8v26M51 21h26" />
            <path d="M18 52v24M6 64h24" />
            <path d="M101 31v30M86 46h30" />
          </g>
          <g stroke="#F28E2B" strokeWidth="10">
            <path d="M64 45v38M45 64h38" />
          </g>
          <g stroke="#E15759" strokeWidth="8">
            <path d="M33 79v30M18 94h30" />
          </g>
          <g stroke="#59A14F" strokeWidth="7">
            <path d="M94 83v26M81 96h26" />
          </g>
          <g stroke="#B07AA1" strokeWidth="7">
            <path d="M64 95v24M52 107h24" />
          </g>
          <g stroke="#76B7B2" strokeWidth="6">
            <path d="M107 76v20M97 86h20" />
          </g>
        </g>
      </svg>
    );
  }

  if (slug === "openai") {
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
        <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3.1c1.35 0 2.52.75 3.12 1.86 1.25-.26 2.58.2 3.34 1.28.77 1.08.78 2.49.13 3.58.86.94 1.08 2.33.49 3.51-.6 1.18-1.83 1.86-3.1 1.8-.39 1.22-1.48 2.15-2.8 2.32-1.32.17-2.57-.47-3.22-1.56-1.25.26-2.58-.2-3.34-1.28-.77-1.08-.78-2.49-.13-3.58-.86-.94-1.08-2.33-.49-3.51.6-1.18 1.83-1.86 3.1-1.8.39-1.22 1.48-2.15 2.8-2.32.03 0 .07-.01.1-.01Z" />
          <path d="M9.1 5.72 12 7.4l3.12-2.44" />
          <path d="M18.6 9.82 15.7 11.5l.28 3.63" />
          <path d="M13.18 17.45 12.9 14.1l-3.3-1.52" />
          <path d="M6.49 11.03 9.39 9.35l-.29-3.63" />
          <path d="M15.7 11.5 12 9.35 9.39 9.35" />
          <path d="M12.9 14.1 12 10.65 12 7.4" />
        </g>
      </svg>
    );
  }

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
