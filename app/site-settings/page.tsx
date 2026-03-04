"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useCookieSettings, type CookieCategory } from "@/components/CookieProvider";
import ThemeToggle from "@/components/ThemeToggle";

const cookieLabels: Record<CookieCategory, string> = {
  essential: "Essential",
  functional: "Functional",
  analytics: "Analytics",
  marketing: "Marketing",
};

const cookieDescriptions: Record<CookieCategory, string> = {
  essential:
    "Required for the site to work (e.g. theme, cookie preferences). Cannot be disabled.",
  functional: "Enable enhanced features and personalization.",
  analytics: "Help us understand how visitors use the site.",
  marketing: "Used to deliver relevant ads and measure campaigns.",
};

export default function SiteSettingsPage() {
  const { theme, setTheme } = useTheme();
  const { preferences, setPreference, acceptAll, rejectNonEssential } =
    useCookieSettings();

  return (
    <div className="page-wrap site-settings-apple-font bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)]">
      <div className="max-w-2xl mx-auto section-padding pt-4 lg:pt-6 pb-16 lg:pb-[120px] px-6 lg:px-12">
        <div className="section-header flex flex-wrap gap-8">
          <div>
            <p className="section-label">Preferences</p>
            <h1 className="section-title">
              <span className="accent-blue">Settings</span>
            </h1>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="skill-name mb-2">Appearance</h2>
          <p className="section-sub max-w-none mb-6">
            Choose light theme or night mode (dark theme) for the site.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <ThemeToggle />
            <span className="font-apple text-[0.72rem] font-bold text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]">
              {theme === "dark" ? "Night mode" : "Light mode"}
            </span>
          </div>
        </section>

        <section>
          <h2 className="skill-name mb-2">Cookie settings</h2>
          <p className="section-sub max-w-none mb-8">
            Manage which cookies we use. Essential cookies are always on.
          </p>

          <div className="space-y-4 mb-8">
            {(Object.keys(cookieLabels) as CookieCategory[]).map((category) => (
              <div
                key={category}
                className="flex items-start justify-between gap-4 p-6 rounded-lg bg-[var(--portfolio-white)] dark:bg-[var(--portfolio-black)] border border-black/[0.08] dark:border-white/10"
              >
                <div>
                  <p className="font-apple skill-name text-base">{cookieLabels[category]}</p>
                  <p className="section-sub max-w-none mt-1">{cookieDescriptions[category]}</p>
                </div>
                <label className="flex items-center gap-2 shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences[category]}
                    disabled={category === "essential"}
                    onChange={(e) => setPreference(category, e.target.checked)}
                    className="rounded border-[var(--portfolio-mid-gray)] text-[var(--portfolio-blue)] focus:ring-[var(--portfolio-blue)]"
                  />
                  <span className="font-apple text-[0.72rem] font-bold text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]">
                    {category === "essential" ? "Always on" : "Enabled"}
                  </span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={acceptAll} className="font-apple btn-submit">
              Accept all
            </button>
            <button
              type="button"
              onClick={rejectNonEssential}
              className="font-apple text-[0.72rem] font-bold tracking-[0.12em] uppercase border-2 border-[var(--portfolio-red)] text-[var(--portfolio-red)] py-2.5 px-5 hover:bg-[var(--portfolio-red)] hover:text-white transition-colors"
            >
              Essential only
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
