"use client";

import { useEffect, useRef, useState } from "react";

const MAX_TILT_DEG = 14;
const LERP = 0.09;
const PARALLAX_STRENGTH = 16;
const FLOAT_STRENGTH = 8;

/**
 * Hero right visual: person juggling a soccer ball (right leg → left leg)
 * wearing white + blue/red (site colors), holding a laptop.
 * Ball and leg animations run in a loop.
 */
export default function HeroSoccerDevIllustration() {
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
              <pattern id="hero-soccer-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,87,255,0.08)" strokeWidth="1" className="dark:stroke-[rgba(26,140,255,0.06)]" />
              </pattern>
              {/* Soft shadow for figure */}
              <filter id="figure-soft-shadow" x="-20%" y="-10%" width="140%" height="120%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="2" dy="4" result="offsetblur" />
                <feComponentTransfer><feFuncA type="linear" slope="0.25" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              {/* Ball glow */}
              <filter id="ball-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              {/* Screen glow for laptop */}
              <filter id="screen-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <rect width="380" height="480" fill="url(#hero-soccer-grid)" />

            {/* Ground & grass */}
            <g className="animate-grass" style={{ transformOrigin: "190px 440px" }}>
              <ellipse cx="190" cy="438" rx="75" ry="14" fill="#0d1a0d" opacity="0.25" className="dark:fill-[#0d1117]" />
              <path d="M 120 438 Q 125 428 130 438 Q 135 426 142 438" fill="none" stroke="#0d3d0d" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="dark:stroke-[#0d2d1a]" />
              <path d="M 250 438 Q 255 432 262 438 Q 268 430 275 438" fill="none" stroke="#0d3d0d" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" className="dark:stroke-[#0d2d1a]" />
              <path d="M 175 435 L 178 425 M 205 436 L 208 428 M 232 435 L 235 426" fill="none" stroke="#0d4d0d" strokeWidth="1.2" opacity="0.6" className="dark:stroke-[#0d3d20]" />
            </g>

            {/* Person: sway + bounce, softer shapes */}
            <g className="animate-hero-bounce animate-hero-sway" style={{ transformBox: "fill-box", transformOrigin: "190px 400px" }} filter="url(#figure-soft-shadow)">
              <ellipse cx="190" cy="432" rx="52" ry="20" fill="#0d1a0d" opacity="0.22" className="dark:fill-[#0d1117]" />

              {/* Legs — curved, more organic */}
              <g className="animate-soccer-leg-right">
                <path
                  d="M 166 368 Q 165 395 170 418 Q 172 426 178 431 L 186 431 Q 190 429 190 424 L 190 368 Q 178 368 166 368 Z"
                  fill="var(--portfolio-white)"
                  stroke="var(--portfolio-blue)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="dark:fill-[var(--portfolio-bg2)] dark:stroke-[var(--portfolio-blue)]"
                />
              </g>
              <g className="animate-soccer-leg-left">
                <path
                  d="M 214 368 Q 215 395 210 418 Q 208 426 202 431 L 194 431 Q 190 429 190 424 L 190 368 Q 202 368 214 368 Z"
                  fill="var(--portfolio-white)"
                  stroke="var(--portfolio-red)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  className="dark:fill-[var(--portfolio-bg2)] dark:stroke-[var(--portfolio-red)]"
                />
              </g>

              {/* Torso — rounded, jersey-like */}
              <path
                d="M 142 262 Q 138 268 140 278 L 136 362 Q 135 368 140 368 L 240 368 Q 245 368 244 362 L 240 278 Q 242 268 238 262 Q 220 258 190 258 Q 160 258 142 262 Z"
                fill="var(--portfolio-white)"
                stroke="var(--portfolio-black)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                className="dark:stroke-[var(--portfolio-white)] dark:fill-[var(--portfolio-bg2)]"
              />
              <path d="M 190 258 L 190 368 L 140 368 L 142 262 Q 160 258 190 258 Z" fill="var(--portfolio-blue)" opacity="0.88" className="dark:fill-[var(--portfolio-blue)]" />
              <path d="M 190 258 L 238 262 L 244 368 L 190 368 Z" fill="var(--portfolio-red)" opacity="0.88" className="dark:fill-[var(--portfolio-red)]" />

              {/* Arms — curved, subtle movement */}
              <g className="animate-hero-arm-left">
                <path
                  d="M 138 278 Q 118 298 120 312 Q 122 318 132 298 Q 140 282 138 278 Z"
                  fill="var(--portfolio-white)"
                  stroke="var(--portfolio-blue)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="dark:fill-[var(--portfolio-bg3)] dark:stroke-[var(--portfolio-blue)]"
                />
              </g>
              <g className="animate-hero-arm-right">
                <path
                  d="M 242 278 Q 262 298 260 312 Q 258 318 248 298 Q 240 282 242 278 Z"
                  fill="var(--portfolio-white)"
                  stroke="var(--portfolio-red)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  className="dark:fill-[var(--portfolio-bg3)] dark:stroke-[var(--portfolio-red)]"
                />
              </g>

              {/* Laptop — tilt + glow + cursor blink */}
              <g className="animate-laptop-tilt" transform="translate(152, 268)">
                <rect x="0" y="0" width="76" height="52" rx="4" fill="#1a1a2e" stroke="var(--portfolio-blue)" strokeWidth="1.2" className="dark:fill-[#0d1117] dark:stroke-[var(--portfolio-blue)]" />
                <g className="animate-laptop-glow" filter="url(#screen-glow)">
                  <rect x="4" y="4" width="68" height="38" rx="2" fill="#0d0d1a" className="dark:fill-[#04080e]" />
                  <rect x="8" y="8" width="28" height="3" rx="1" fill="var(--portfolio-blue)" opacity="0.95" />
                  <rect x="8" y="14" width="42" height="2" rx="1" fill="var(--portfolio-green)" opacity="0.85" />
                  <rect x="8" y="18" width="35" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
                  <rect x="8" y="22" width="22" height="2" rx="1" fill="var(--portfolio-red)" opacity="0.85" />
                  <rect x="8" y="28" width="18" height="2" rx="1" fill="var(--portfolio-blue)" opacity="0.7" />
                  <rect x="42" y="8" width="28" height="28" rx="2" fill="#1a1a2e" className="dark:fill-[#1a2333]" />
                  {/* Blinking cursor */}
                  <rect x="48" y="12" width="3" height="14" rx="1" fill="var(--portfolio-blue)" className="animate-cursor-blink" />
                </g>
                <rect x="46" y="42" width="60" height="6" rx="2" fill="#2a2a3e" className="dark:fill-[#1a2333]" />
                <rect x="52" y="46" width="8" height="2" rx="1" fill="var(--portfolio-blue)" opacity="0.6" />
                <rect x="64" y="46" width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
                <rect x="76" y="46" width="8" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
              </g>

              {/* Head — follows ball, softer face */}
              <g className="animate-hero-head">
                <circle cx="190" cy="228" r="38" fill="#FDBCB4" className="dark:fill-[#d4a88a]" stroke="var(--portfolio-white)" strokeWidth="2.5" />
                <path d="M 166 218 Q 168 198 190 198 Q 212 198 214 218 Q 200 214 190 214 Q 180 214 166 218 Z" fill="#1a1a2e" className="dark:fill-[#0d1117]" />
                <circle cx="178" cy="228" r="5.5" fill="#1a1a2e" className="dark:fill-[#0d1117]" />
                <circle cx="202" cy="228" r="5.5" fill="#1a1a2e" className="dark:fill-[#0d1117]" />
                <circle cx="180" cy="226" r="1.8" fill="white" />
                <circle cx="204" cy="226" r="1.8" fill="white" />
                <path d="M 180 240 Q 190 246 200 240" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" className="dark:stroke-[#0d1117]" />
                {/* Hair / cap hint */}
                <path d="M 152 222 Q 158 208 190 206 Q 222 208 228 222" fill="none" stroke="#2a2520" strokeWidth="3" strokeLinecap="round" opacity="0.4" className="dark:stroke-[#1a1816]" />
              </g>
            </g>

            {/* Soccer ball — glow, spin seam, pulse */}
            <g className="animate-ball-pulse">
              <animateMotion dur="1.6s" repeatCount="indefinite" path="M 202 398 Q 180 318 158 398 Q 180 318 202 398" />
              <g filter="url(#ball-glow)">
                <circle
                  r="17"
                  fill="var(--portfolio-white)"
                  stroke="var(--portfolio-black)"
                  strokeWidth="2"
                  className="dark:fill-[var(--portfolio-white)] dark:stroke-[var(--portfolio-white)]"
                />
                <g className="animate-ball-spin" style={{ transformOrigin: "0px 0px" }}>
                  <path d="M 0 -10 Q 8 0 0 10 Q -8 0 0 -10" fill="none" stroke="var(--portfolio-black)" strokeWidth="2" strokeLinecap="round" className="dark:stroke-[var(--portfolio-white)]" opacity="0.6" />
                  <path d="M -6 -6 L 6 6 M -6 6 L 6 -6" stroke="var(--portfolio-black)" strokeWidth="1.5" className="dark:stroke-[var(--portfolio-white)]" opacity="0.4" />
                </g>
              </g>
            </g>

            {/* Floating code / sparkles */}
            <text x="28" y="198" fontFamily="monospace" fontSize="14" fill="rgba(0,87,255,0.35)" className="dark:fill-[rgba(26,140,255,0.35)] animate-float">
              {"</>"}
            </text>
            <text x="328" y="168" fontFamily="monospace" fontSize="12" fill="rgba(0,200,83,0.4)" className="dark:fill-[rgba(0,230,118,0.35)] animate-float" style={{ animationDelay: "0.5s" }}>
              {"{}"}
            </text>
            <circle cx="340" cy="380" r="3" fill="var(--portfolio-blue)" opacity="0.2" className="animate-float" style={{ animationDelay: "1s" }} />
            <circle cx="42" cy="340" r="2" fill="var(--portfolio-red)" opacity="0.2" className="animate-float" style={{ animationDelay: "0.3s" }} />
          </svg>
        </div>
      </div>

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
