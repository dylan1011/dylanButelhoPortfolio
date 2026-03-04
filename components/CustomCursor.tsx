"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor from dev-portfolio.html:
 * Blue dot follows pointer; trailing ring with smooth follow (0.12 lerp).
 * Hover: red dot (scale 1.5), red ring (54px) on a, button, .project-item, .skill-card.
 * Only active when pointer is "fine" (mouse) and optionally when custom cursor is enabled in settings.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dot.style.left = `${mx.current}px`;
      dot.style.top = `${my.current}px`;
    };

    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = `${rx.current}px`;
      ring.style.top = `${ry.current}px`;
      rafId.current = requestAnimationFrame(animRing);
    };
    animRing();

    const addHover = () => {
      dot.classList.add("hover");
      ring.classList.add("hover");
    };
    const removeHover = () => {
      dot.classList.remove("hover");
      ring.classList.remove("hover");
    };

    const hoverSelector =
      "a, button, [role='button'], input[type='submit'], .project-item, .skill-card, .cursor-hover, [data-cursor-hover]";

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(hoverSelector)) addHover();
    };
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      if (target.closest(hoverSelector) && !related?.closest(hoverSelector)) {
        removeHover();
      }
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        aria-hidden
      />
    </>
  );
}
