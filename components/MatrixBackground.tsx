"use client";

import { useRef, useEffect } from "react";

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF<>{}[]|";
const COLUMN_COUNT = 28;
const FONT_SIZE = 14;
const DROP_SPEED = 1.2;

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: { y: number; speed: number; color: "blue" | "red" }[] = [];
    const isDarkRef = { current: document.documentElement.classList.contains("dark") };
    const colorsRef = { current: { blue: "#0057FF", red: "#FF1F1F" } };
    let ro: ResizeObserver | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w <= 0 || h <= 0) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      columns = Array.from({ length: Math.floor(w / FONT_SIZE) || COLUMN_COUNT }, () => ({
        y: Math.random() * -h,
        speed: 0.5 + Math.random() * DROP_SPEED,
        color: Math.random() > 0.5 ? "blue" : "red",
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (w <= 0 || h <= 0) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      const isDark = isDarkRef.current;
      ctx.fillStyle = isDark ? "rgba(10, 10, 10, 0.10)" : "rgba(255, 255, 255, 0.22)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${FONT_SIZE}px "IBM Plex Mono", "JetBrains Mono", monospace`;
      const columnWidth = w / columns.length;

      columns.forEach((col, i) => {
        const x = i * columnWidth + columnWidth / 2;
        const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        ctx.save();
        ctx.textAlign = "center";
        ctx.globalAlpha = isDark ? 0.85 : 0.55;
        ctx.fillStyle = col.color === "blue" ? colorsRef.current.blue : colorsRef.current.red;
        ctx.fillText(char, x, col.y);
        ctx.restore();
        col.y += col.speed;
        if (col.y > h + FONT_SIZE) col.y = -FONT_SIZE * 2;
      });

      animationId = requestAnimationFrame(draw);
    };

    // Keep the canvas synced to layout changes (mobile grids, font loading, etc.)
    ro = new ResizeObserver(() => resize());
    ro.observe(canvas);
    window.addEventListener("resize", resize);

    const mo = new MutationObserver(() => {
      isDarkRef.current = document.documentElement.classList.contains("dark");
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Pull from CSS vars if available (keeps colors in sync with theme tokens).
    const rootStyles = getComputedStyle(document.documentElement);
    const blue = rootStyles.getPropertyValue("--portfolio-blue")?.trim();
    const red = rootStyles.getPropertyValue("--portfolio-red")?.trim();
    if (blue) colorsRef.current.blue = blue;
    if (red) colorsRef.current.red = red;

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      ro?.disconnect();
      mo.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-canvas absolute inset-0 w-full h-full block"
      aria-hidden
    />
  );
}
