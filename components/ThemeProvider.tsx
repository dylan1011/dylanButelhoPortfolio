"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_COOKIE = "portfolio-theme";

function getThemeFromCookie(): Theme {
  if (typeof document === "undefined") return "light";
  const match = document.cookie.match(new RegExp(`(^| )${THEME_COOKIE}=([^;]+)`));
  const value = match?.[2];
  if (value === "dark" || value === "light") return value;
  return "light";
}

function setThemeCookie(theme: Theme) {
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;SameSite=Lax`;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayTheme, setOverlayTheme] = useState<Theme>("light");

  useEffect(() => {
    setThemeState(getThemeFromCookie());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    setThemeCookie(theme);
  }, [theme, mounted]);

  const setTheme = useCallback((next: Theme) => {
    setOverlayTheme(theme);
    setThemeState(next);
    setOverlayVisible(true);
    setTimeout(() => setOverlayVisible(false), 50);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      {/* Theme transition overlay: shows old theme, fades out to reveal new theme */}
      <div
        aria-hidden
        className="fixed inset-0 z-[99999] pointer-events-none transition-opacity duration-[400ms] ease-out"
        style={{
          opacity: overlayVisible ? 1 : 0,
          background: overlayTheme === "dark" ? "#080C10" : "#ffffff",
        }}
      />
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
