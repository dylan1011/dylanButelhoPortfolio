"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type CookieCategory = "essential" | "functional" | "analytics" | "marketing";

export type CookiePreferences = Record<CookieCategory, boolean>;

const COOKIE_PREFS_COOKIE = "portfolio-cookie-prefs";

const defaultPrefs: CookiePreferences = {
  essential: true,
  functional: true,
  analytics: true,
  marketing: false,
};

function parsePrefs(str: string | undefined): CookiePreferences {
  if (!str) return defaultPrefs;
  try {
    const parsed = JSON.parse(str) as Partial<CookiePreferences>;
    return { ...defaultPrefs, ...parsed };
  } catch {
    return defaultPrefs;
  }
}

function getPrefsFromCookie(): CookiePreferences {
  if (typeof document === "undefined") return defaultPrefs;
  const match = document.cookie.match(
    new RegExp(`(^| )${COOKIE_PREFS_COOKIE}=([^;]+)`)
  );
  const value = match?.[2];
  if (!value) return defaultPrefs;
  return parsePrefs(decodeURIComponent(value));
}

function setPrefsCookie(prefs: CookiePreferences) {
  const value = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${COOKIE_PREFS_COOKIE}=${value};path=/;max-age=31536000;SameSite=Lax`;
}

type CookieContextValue = {
  preferences: CookiePreferences;
  setPreference: (category: CookieCategory, enabled: boolean) => void;
  setAll: (prefs: CookiePreferences) => void;
  acceptAll: () => void;
  rejectNonEssential: () => void;
};

const CookieContext = createContext<CookieContextValue | null>(null);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPrefs);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setPreferences(getPrefsFromCookie());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    setPrefsCookie(preferences);
  }, [preferences, mounted]);

  const setPreference = useCallback((category: CookieCategory, enabled: boolean) => {
    setPreferences((p) => ({ ...p, [category]: enabled }));
  }, []);

  const setAll = useCallback((prefs: CookiePreferences) => {
    setPreferences(prefs);
  }, []);

  const acceptAll = useCallback(() => {
    setPreferences({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
  }, []);

  const rejectNonEssential = useCallback(() => {
    setPreferences({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    });
  }, []);

  return (
    <CookieContext.Provider
      value={{
        preferences,
        setPreference,
        setAll,
        acceptAll,
        rejectNonEssential,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieSettings() {
  const ctx = useContext(CookieContext);
  if (!ctx) throw new Error("useCookieSettings must be used within CookieProvider");
  return ctx;
}
