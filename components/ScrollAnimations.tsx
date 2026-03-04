"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function applyDelayFromDataset(el: HTMLElement) {
  const delay = el.dataset.srDelay;
  if (!delay) return;
  const n = Number(delay);
  if (!Number.isFinite(n) || n < 0) return;
  el.style.setProperty("--sr-delay", `${n}ms`);
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".sr-reveal"));
    elements.forEach(applyDelayFromDataset);

    if (elements.length === 0) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (reduceMotion) {
      elements.forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("sr-visible");
          observer.unobserve(el);
        }
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

