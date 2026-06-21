"use client";

import { useEffect, useRef, useState } from "react";

const MAX_TILT_DEG = 14;
const LERP = 0.09;
const PARALLAX_STRENGTH = 16;
const FLOAT_STRENGTH = 8; // px the card drifts toward cursor from center

/**
 * Hero right visual: developer illustration that moves with cursor position
 * on screen — 3D tilt, subtle float, and parallax on tags. Reacts to cursor
 * anywhere in the viewport for a more interactive feel.
 */
export default function HeroDevIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const tiltX = useRef(0);
  const tiltY = useRef(0);
  const rafId = useRef<number>(0);

  const [transform, setTransform] = useState({
    card: "",
    tag1: "",
    tag2: "",
    tag3: "",
  });

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReducedMotion || !hasFinePointer) return;

    const animate = () => {
      const rect = container.getBoundingClientRect();
      const inBounds =
        mouseX.current >= rect.left &&
        mouseX.current <= rect.right &&
        mouseY.current >= rect.top &&
        mouseY.current <= rect.bottom;

      const viewportCenterX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
      const viewportCenterY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
      const widthHalf = Math.max((typeof window !== "undefined" ? window.innerWidth : 800) / 2, 1);
      const heightHalf = Math.max((typeof window !== "undefined" ? window.innerHeight : 600) / 2, 1);

      const dxViewport = (mouseX.current - viewportCenterX) / widthHalf;
      const dyViewport = (mouseY.current - viewportCenterY) / heightHalf;

      const targetTiltX = dyViewport * MAX_TILT_DEG;
      const targetTiltY = dxViewport * MAX_TILT_DEG;

      tiltX.current += (targetTiltX - tiltX.current) * LERP;
      tiltY.current += (targetTiltY - tiltY.current) * LERP;

      const tx = tiltX.current;
      const ty = tiltY.current;
      const floatX = dxViewport * FLOAT_STRENGTH;
      const floatY = dyViewport * FLOAT_STRENGTH;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rectWidthHalf = Math.max(rect.width / 2, 1);
      const rectHeightHalf = Math.max(rect.height / 2, 1);
      const dx = (mouseX.current - centerX) / rectWidthHalf;
      const dy = (mouseY.current - centerY) / rectHeightHalf;
      const px = inBounds ? dx * PARALLAX_STRENGTH : 0;
      const py = inBounds ? dy * PARALLAX_STRENGTH : 0;

      setTransform({
        card: `perspective(900px) translate(${floatX}px, ${floatY}px) rotateX(${tx}deg) rotateY(${ty}deg)`,
        tag1: `translate(${px * 0.5}px, ${py * 0.5}px)`,
        tag2: `translate(${-px * 0.4}px, ${-py * 0.4}px)`,
        tag3: `translate(${px * 0.3}px, ${-py * 0.3}px)`,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    if (typeof window !== "undefined") {
      mouseX.current = window.innerWidth / 2;
      mouseY.current = window.innerHeight / 2;
    }

    document.addEventListener("mousemove", handleMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] max-w-full px-4 sm:px-6 lg:px-0"
    >
      {/* Card: 3D tilt follows cursor when pointer is fine */}
      <div
        ref={cardRef}
        className="hero-dev-card hero-dev-card-interactive relative z-[2] w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[380/480] overflow-hidden opacity-0 animate-[fadeIn_1s_0.5s_ease_forwards] bg-white dark:bg-[#111820] border border-transparent dark:border-[rgba(255,255,255,0.12)]"
        style={{ transform: transform.card }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-end overflow-hidden bg-[linear-gradient(160deg,#e8f0ff_0%,#f0f8f0_50%,#fff5f5_100%)] dark:bg-[linear-gradient(160deg,#0d1a2e_0%,#0d1a14_50%,#1a0d0d_100%)]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 380 480"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern
                id="hero-grid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(0,87,255,0.08)"
                  strokeWidth="1"
                  className="dark:stroke-[rgba(26,140,255,0.06)]"
                />
              </pattern>
            </defs>
            <rect width="380" height="480" fill="url(#hero-grid)" />

            {/* Monitor — dark: blue glow */}
            <rect
              x="90"
              y="120"
              width="200"
              height="130"
              rx="4"
              fill="rgba(26,140,255,0.08)"
              stroke="#0057FF"
              strokeWidth="2"
              className="dark:fill-[rgba(26,140,255,0.08)] dark:stroke-[var(--portfolio-blue)]"
            />
            <rect x="95" y="125" width="190" height="120" rx="2" fill="#0d0d1a" className="dark:fill-[#04080e]" />
            <rect x="95" y="125" width="190" height="120" rx="2" fill="rgba(0,87,255,0.05)" className="dark:fill-[rgba(26,140,255,0.04)]" />
            <rect x="108" y="140" width="60" height="5" rx="2" fill="#0057FF" opacity="0.9" className="dark:fill-[var(--portfolio-blue)]" />
            <rect x="118" y="152" width="90" height="4" rx="2" fill="#00C853" opacity="0.8" className="dark:fill-[var(--portfolio-green)]" />
            <rect x="118" y="162" width="70" height="4" rx="2" fill="rgba(255,255,255,0.2)" className="dark:fill-[rgba(255,255,255,0.15)]" />
            <rect x="108" y="174" width="40" height="4" rx="2" fill="#FF1F1F" opacity="0.8" className="dark:fill-[var(--portfolio-red)]" />
            <rect x="118" y="184" width="100" height="4" rx="2" fill="#0057FF" opacity="0.6" className="dark:fill-[var(--portfolio-blue)]" />
            <rect x="118" y="194" width="55" height="4" rx="2" fill="#00C853" opacity="0.6" className="dark:fill-[var(--portfolio-green)]" />
            <rect x="108" y="206" width="80" height="4" rx="2" fill="rgba(255,255,255,0.15)" className="dark:fill-[rgba(255,255,255,0.1)]" />
            <rect x="118" y="218" width="65" height="4" rx="2" fill="rgba(255,255,255,0.15)" className="dark:fill-[rgba(255,255,255,0.1)]" />
            <rect x="195" y="218" width="6" height="10" rx="1" fill="#0057FF" opacity="0.9" className="dark:fill-[var(--portfolio-blue)]">
              <animate attributeName="opacity" values="0.9;0;0.9" dur="1s" repeatCount="indefinite" />
            </rect>
            <rect x="177" y="250" width="26" height="30" rx="2" fill="#2a2a3e" className="dark:fill-[#1a2333]" />
            <rect x="150" y="278" width="80" height="8" rx="4" fill="#2a2a3e" className="dark:fill-[#1a2333]" />

            {/* Keyboard */}
            <rect
              x="105"
              y="295"
              width="170"
              height="50"
              rx="4"
              fill="#1a1a2e"
              stroke="rgba(0,87,255,0.3)"
              strokeWidth="1"
              className="dark:fill-[#0d1117] dark:stroke-[rgba(26,140,255,0.2)]"
            />
            <g fill="rgba(255,255,255,0.12)" className="dark:fill-[rgba(255,255,255,0.08)]">
              <rect x="115" y="303" width="14" height="8" rx="1" />
              <rect x="133" y="303" width="14" height="8" rx="1" />
              <rect x="151" y="303" width="14" height="8" rx="1" />
              <rect x="169" y="303" width="14" height="8" rx="1" />
              <rect x="187" y="303" width="14" height="8" rx="1" />
              <rect x="205" y="303" width="14" height="8" rx="1" />
              <rect x="223" y="303" width="22" height="8" rx="1" />
              <rect x="118" y="317" width="10" height="8" rx="1" />
              <rect x="133" y="317" width="10" height="8" rx="1" />
              <rect x="148" y="317" width="10" height="8" rx="1" />
              <rect x="163" y="317" width="10" height="8" rx="1" />
              <rect x="178" y="317" width="10" height="8" rx="1" />
              <rect x="193" y="317" width="10" height="8" rx="1" />
              <rect x="208" y="317" width="35" height="8" rx="1" />
              <rect x="120" y="331" width="80" height="8" rx="1" />
            </g>
            <rect x="223" y="317" width="22" height="8" rx="1" fill="rgba(0,87,255,0.5)" className="dark:fill-[rgba(26,140,255,0.6)]" />

            {/* Coffee mug */}
            <rect
              x="300"
              y="280"
              width="35"
              height="40"
              rx="4"
              fill="#2a2a3e"
              stroke="rgba(0,87,255,0.3)"
              strokeWidth="1"
              className="dark:fill-[#111820] dark:stroke-[rgba(26,140,255,0.25)]"
            />
            <path
              d="M335 293 Q350 293 350 305 Q350 317 335 317"
              fill="none"
              stroke="rgba(0,87,255,0.4)"
              strokeWidth="2"
              className="dark:stroke-[rgba(26,140,255,0.35)]"
            />
            <path
              d="M308 278 Q312 268 308 258"
              fill="none"
              stroke="rgba(0,200,83,0.4)"
              strokeWidth="1.5"
              className="dark:stroke-[rgba(0,230,118,0.5)]"
            >
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite" />
            </path>
            <path
              d="M318 276 Q322 264 318 254"
              fill="none"
              stroke="rgba(0,200,83,0.4)"
              strokeWidth="1.5"
              className="dark:stroke-[rgba(0,230,118,0.5)]"
            >
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
            </path>

            {/* Developer character — animated: bounce + wave arms */}
            <g className="animate-hero-bounce" style={{ transformBox: "fill-box", transformOrigin: "190px 400px" }}>
              <ellipse cx="190" cy="430" rx="55" ry="22" fill="#0d1a0d" opacity="0.2" className="dark:fill-[#0d1117]" />
              <rect x="155" y="390" width="70" height="6" rx="3" fill="#1a1a2e" className="dark:fill-[#1a2333]" />
              <rect x="162" y="396" width="8" height="40" rx="3" fill="#1a1a2e" className="dark:fill-[#1a2333]" />
              <rect x="210" y="396" width="8" height="40" rx="3" fill="#1a1a2e" className="dark:fill-[#1a2333]" />
              <rect x="162" y="340" width="56" height="55" rx="8" fill="#0057FF" className="dark:fill-[var(--portfolio-blue)]" />

              <g style={{ transformBox: "fill-box", transformOrigin: "162px 365px" }} className="animate-hero-wave-left">
                <path
                  d="M162 365 Q130 370 145 290"
                  fill="none"
                  stroke="#0057FF"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="dark:stroke-[var(--portfolio-blue)]"
                />
                <circle cx="146" cy="292" r="8" fill="#FDBCB4" className="dark:fill-[#d4a88a]" />
              </g>
              <g style={{ transformBox: "fill-box", transformOrigin: "218px 365px" }} className="animate-hero-wave-right">
                <path
                  d="M218 365 Q250 370 235 290"
                  fill="none"
                  stroke="#0057FF"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="dark:stroke-[var(--portfolio-blue)]"
                />
                <circle cx="234" cy="292" r="8" fill="#FDBCB4" className="dark:fill-[#d4a88a]" />
              </g>

              <circle cx="190" cy="320" r="32" fill="#FDBCB4" className="dark:fill-[#d4a88a]" />
              <path
                d="M158 310 Q160 285 190 285 Q220 285 222 310 Q210 305 190 306 Q170 305 158 310Z"
                fill="#1a1a2e"
                className="dark:fill-[#0d1117]"
              />
              <circle cx="180" cy="322" r="4" fill="#1a1a2e" className="dark:fill-[#0d1117]" />
              <circle cx="200" cy="322" r="4" fill="#1a1a2e" className="dark:fill-[#0d1117]" />
              <circle cx="182" cy="320" r="1.5" fill="white" />
              <circle cx="202" cy="320" r="1.5" fill="white" />
              <path
                d="M183 332 Q190 338 197 332"
                fill="none"
                stroke="#1a1a2e"
                strokeWidth="2"
                strokeLinecap="round"
                className="dark:stroke-[#0d1117]"
              />
              <rect x="174" y="318" width="12" height="9" rx="3" fill="none" stroke="#0057FF" strokeWidth="1.5" className="dark:stroke-[var(--portfolio-blue)]" />
              <rect x="194" y="318" width="12" height="9" rx="3" fill="none" stroke="#0057FF" strokeWidth="1.5" className="dark:stroke-[var(--portfolio-blue)]" />
              <path d="M186 323 L194 323" stroke="#0057FF" strokeWidth="1.5" className="dark:stroke-[var(--portfolio-blue)]" />
            </g>

            {/* Floating code symbols */}
            <text x="30" y="200" fontFamily="monospace" fontSize="14" fill="rgba(0,87,255,0.3)" className="dark:fill-[rgba(26,140,255,0.3)]">
              {"</>"}
            </text>
            <text x="330" y="170" fontFamily="monospace" fontSize="12" fill="rgba(0,200,83,0.35)" className="dark:fill-[rgba(0,230,118,0.3)]">
              {"{}"}
            </text>
            <text x="35" y="350" fontFamily="monospace" fontSize="11" fill="rgba(255,31,31,0.3)" className="dark:fill-[rgba(255,61,61,0.3)]">
              fn()
            </text>
            <text x="325" y="380" fontFamily="monospace" fontSize="10" fill="rgba(0,87,255,0.25)" className="dark:fill-[rgba(26,140,255,0.25)]">
              npm
            </text>
          </svg>
        </div>
      </div>

      {/* Floating tags — parallax follows cursor */}
      <div
        className="absolute top-[15%] left-[-30px] z-[3] font-mono text-[0.65rem] font-bold px-3 py-2 bg-[var(--portfolio-blue)] text-white dark:text-[var(--portfolio-black)] animate-float hidden md:block shadow-[0_0_18px_var(--portfolio-blue-glow)] transition-transform duration-150 will-change-transform"
        style={{ transform: transform.tag1 }}
      >
        React + TypeScript
      </div>
      <div
        className="absolute bottom-[20%] right-[-20px] z-[3] font-mono text-[0.65rem] font-bold px-3 py-2 bg-[var(--portfolio-red)] text-white animate-float hidden md:block shadow-[0_0_18px_var(--portfolio-red-glow)] transition-transform duration-150 will-change-transform"
        style={{ transform: transform.tag2 }}
      >
        Node.js + Python
      </div>
      <div
        className="absolute top-[40%] right-[-40px] z-[3] font-mono text-[0.6rem] font-bold px-3 py-2 bg-[var(--portfolio-green)] text-white dark:text-[var(--portfolio-black)] animate-float hidden md:block shadow-[0_0_18px_var(--portfolio-green-glow)] transition-transform duration-150 will-change-transform"
        style={{ transform: transform.tag3 }}
      >
        M.S. Computer Science
      </div>
    </div>
  );
}
