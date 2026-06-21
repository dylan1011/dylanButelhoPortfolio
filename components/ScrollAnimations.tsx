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

function markVisibleIfInView(el: HTMLElement, vh: number) {
  const rect = el.getBoundingClientRect();
  if (rect.width <= 0 && rect.height <= 0) return false;
  const overlaps = rect.bottom > 0 && rect.top < vh;
  if (overlaps) {
    el.classList.add("sr-visible");
    return true;
  }
  return false;
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

    let observer: IntersectionObserver | null = null;
    let fallbackId: number | null = null;

    const start = () => {
      const vh = window.innerHeight;
      const pending: HTMLElement[] = [];
      elements.forEach((el) => {
        if (!markVisibleIfInView(el, vh)) pending.push(el);
      });

      if (pending.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            el.classList.add("sr-visible");
            observer?.unobserve(el);
          }
        },
        { root: null, threshold: 0.05, rootMargin: "0px" }
      );

      pending.forEach((el) => observer!.observe(el));

      fallbackId = window.setTimeout(() => {
        pending.forEach((el) => {
          if (!el.classList.contains("sr-visible")) el.classList.add("sr-visible");
        });
      }, 2800);
    };

    const t = window.setTimeout(start, 0);

    return () => {
      window.clearTimeout(t);
      if (fallbackId !== null) window.clearTimeout(fallbackId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
