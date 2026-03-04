"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/experience", label: "Work", icon: BriefcaseIcon },
  { href: "/education", label: "Education", icon: AcademicCapIcon },
  { href: "/skills", label: "Skills", icon: BeakerIcon },
  { href: "/projects", label: "Projects", icon: FolderIcon },
  { href: "/blog", label: "Blog", icon: DocumentTextIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
  { href: "/site-settings", label: "Site Settings", icon: CogIcon },
];

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}
function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function AcademicCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}
function BeakerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517L6.05 15.21a2 2 0 01-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  );
}
function FolderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}
function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
function CogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="navbar-apple-font fixed top-0 left-0 right-0 z-[100] flex items-center justify-between min-h-[var(--navbar-height)] h-[var(--navbar-height)] py-0 px-4 sm:px-6 lg:px-12 border-b border-black/[0.04] dark:border-white/[0.04] bg-white/70 dark:bg-[#05070b]/75 backdrop-blur-[14px] transition-colors">
        <Link
          href="/"
          className="navbar-brand font-extrabold text-[1.05rem] tracking-[0.14em] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] no-underline"
        >
          Dylan Butelho
        </Link>

        <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
          <ul className="flex items-center list-none gap-1">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href || (href === "/" && pathname === "/");
              return (
                <li key={href} className="relative group">
                  <Link
                    href={href}
                    aria-label={label}
                    title={label}
                    className={`nav-link-desktop relative p-2 rounded-md transition-colors inline-flex items-center justify-center ${
                      isActive
                        ? "text-[var(--portfolio-red)] bg-[var(--portfolio-red)]/10"
                        : "text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] hover:text-[var(--portfolio-blue)] dark:hover:text-[var(--portfolio-blue)] hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon className="nav-icon w-5 h-5 shrink-0" aria-hidden />
                    {/* Hover tooltip: webpage title (below icon so it's not cut off) */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded text-xs font-apple font-bold tracking-wider uppercase whitespace-nowrap bg-[var(--portfolio-black)] dark:bg-[var(--portfolio-white)] text-[var(--portfolio-white)] dark:text-[var(--portfolio-black)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-md z-10">
                      {label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
            <ThemeToggle compact />
          </div>
          <Link
            href="/contact"
            className="font-apple text-[0.72rem] font-bold tracking-[0.1em] uppercase text-white bg-[var(--portfolio-blue)] py-2.5 px-[22px] no-underline transition-all hover:bg-[var(--portfolio-black)] dark:hover:bg-[var(--portfolio-white)] dark:hover:text-[var(--portfolio-black)] hover:-translate-y-px"
          >
            Contact Me
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="nav-burger lg:hidden p-3 -m-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 touch-manipulation"
        >
          <svg className="nav-burger-icon w-6 h-6" fill="none" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path
                className="burger-line burger-line-open stroke-[var(--portfolio-black)] dark:stroke-[var(--portfolio-white)]"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <>
                <path
                  className="burger-line burger-line-1 stroke-[var(--portfolio-blue)]"
                  strokeLinecap="round"
                  strokeWidth={2.2}
                  d="M4 6h16"
                />
                <path
                  className="burger-line burger-line-2 stroke-[var(--portfolio-red)]"
                  strokeLinecap="round"
                  strokeWidth={2.2}
                  d="M4 12h16"
                />
                <path
                  className="burger-line burger-line-3 stroke-[var(--portfolio-black)] dark:stroke-[var(--portfolio-white)]"
                  strokeLinecap="round"
                  strokeWidth={2.2}
                  d="M4 18h16"
                />
              </>
            )}
          </svg>
        </button>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed z-[110] top-[var(--navbar-height)] left-0 right-0 bottom-0 overflow-y-auto border-t border-black/10 dark:border-white/10 bg-white/85 dark:bg-[#0a0a0a]/85 backdrop-blur-md shadow-lg"
        >
          <div className="px-4 py-3 flex items-center justify-between border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md">
            <span className="font-apple text-xs font-bold text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]">Theme</span>
            <ThemeToggle compact />
          </div>
          <ul className="px-3 py-3 flex flex-col gap-0.5 list-none">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = pathname === href || (href === "/" && pathname === "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg font-apple text-sm font-bold uppercase ${
                      isActive
                        ? "text-[var(--portfolio-red)] bg-[var(--portfolio-blue)]/10 dark:bg-[var(--portfolio-blue)]/20"
                        : "text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] hover:text-[var(--portfolio-blue)] dark:hover:text-[var(--portfolio-blue)] hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-5 h-5 shrink-0" aria-hidden />
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 px-4 pb-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center font-apple text-[0.72rem] font-bold tracking-wide uppercase text-white bg-[var(--portfolio-blue)] py-3 px-4 rounded-lg w-full"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
