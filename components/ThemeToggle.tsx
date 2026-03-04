"use client";

import { useTheme } from "@/components/ThemeProvider";

const HANDLE_SIZE = 36;
const HANDLE_OFFSET = 4;
const COMPACT_SCALE = 0.6; // smaller in navbar

type ThemeToggleProps = { compact?: boolean };

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  const scale = compact ? COMPACT_SCALE : 1;
  const w = 100 * scale;
  const h = 44 * scale;
  const handleSize = HANDLE_SIZE * scale;
  const handleOffset = HANDLE_OFFSET * scale;

  // Light mode = sun on LEFT; dark mode = moon on RIGHT (per design)
  const handleLeft = isDark ? undefined : handleOffset;
  const handleRight = isDark ? handleOffset : undefined;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle-pill relative rounded-full overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-blue)] focus-visible:ring-offset-2 flex-shrink-0 transition-[background,box-shadow] duration-500 ease-out shadow-sm"
      style={{
        width: w,
        height: h,
        border: "1px solid rgba(255,255,255,0.35)",
        boxSizing: "border-box",
      }}
    >
      {/* Track: light blue (day) or dark blue/grey (night) */}
      <span
        className="absolute inset-0 transition-[background] duration-500 ease-out"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)"
            : "linear-gradient(135deg, #93c5fd 0%, #bfdbfe 50%, #dbeafe 100%)",
        }}
      />

      {/* Dark mode: four-pointed stars scattered on track */}
      <span
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: isDark ? 1 : 0 }}
        aria-hidden
      >
        {/* Star dots */}
        <span className="absolute w-1 h-1 rounded-full bg-white top-2 left-6" style={{ boxShadow: "0 0 4px #fff" }} />
        <span className="absolute w-0.5 h-0.5 rounded-full bg-white top-5 left-12" />
        <span className="absolute w-1 h-1 rounded-full bg-white top-3 left-20" style={{ boxShadow: "0 0 3px #fff" }} />
        <span className="absolute w-0.5 h-0.5 rounded-full bg-white top-6 left-28" />
        <span className="absolute w-1 h-1 rounded-full bg-white top-2 left-38" />
        <span className="absolute w-0.5 h-0.5 rounded-full bg-white top-4 left-48" />
        <span className="absolute w-0.5 h-0.5 rounded-full bg-white top-5 left-58" />
        <span className="absolute w-1 h-1 rounded-full bg-white top-3 left-70" style={{ boxShadow: "0 0 3px #fff" }} />
        <span className="absolute w-0.5 h-0.5 rounded-full bg-white top-6 left-82" />
        <span className="absolute w-1 h-1 rounded-full bg-white top-2 left-92" />
      </span>

      {/* Light mode: white clouds on track */}
      <span
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: isDark ? 0 : 1 }}
        aria-hidden
      >
        <span className="absolute w-8 h-3.5 rounded-full bg-white/95 top-4 left-4 blur-[0.5px]" />
        <span className="absolute w-6 h-2.5 rounded-full bg-white/90 top-6 left-14 blur-[0.5px]" />
        <span className="absolute w-9 h-3 rounded-full bg-white/95 top-3 left-28 blur-[0.5px]" />
        <span className="absolute w-7 h-2.5 rounded-full bg-white/85 top-5 right-20 blur-[0.5px]" />
        <span className="absolute w-5 h-2 rounded-full bg-white/90 top-6 right-8 blur-[0.5px]" />
      </span>

      {/* Sliding handle: sun on left (light) / moon on right (dark) */}
      <span
        className="theme-toggle-handle absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full ease-out will-change-transform"
        style={{
          left: handleLeft !== undefined ? `${handleLeft}px` : undefined,
          right: handleRight !== undefined ? `${handleRight}px` : undefined,
          width: handleSize,
          height: handleSize,
          transition: "left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), right 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.2s ease",
        }}
      >
        {isDark ? (
          /* Moon: light grey with three crater circles */
          <span
            className="relative w-full h-full rounded-full block overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #e5e7eb 0%, #d1d5db 40%, #9ca3af 100%)",
              boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.2), inset 2px 2px 5px rgba(255,255,255,0.35), 0 2px 8px rgba(0,0,0,0.25)",
            }}
          >
            <span className="absolute rounded-full bg-slate-500/50" style={{ width: "28%", height: "28%", top: "22%", left: "30%" }} aria-hidden />
            <span className="absolute rounded-full bg-slate-500/45" style={{ width: "20%", height: "20%", top: "48%", left: "55%" }} aria-hidden />
            <span className="absolute rounded-full bg-slate-500/40" style={{ width: "15%", height: "15%", top: "62%", left: "25%" }} aria-hidden />
          </span>
        ) : (
          /* Sun: bright yellow with 3D shadow */
          <span
            className="w-full h-full rounded-full block"
            style={{
              background: "linear-gradient(145deg, #fef9c3 0%, #fde047 35%, #facc15 70%, #eab308 100%)",
              boxShadow: "inset -2px -2px 6px rgba(0,0,0,0.1), inset 2px 2px 6px rgba(255,255,255,0.6), 0 2px 10px rgba(0,0,0,0.2)",
            }}
          />
        )}
      </span>
    </button>
  );
}
