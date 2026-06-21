"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/resume";

const ABOUT_LINES = [
  { line: 1, content: <><span className="ck tok">const</span> <span className="cf tok">developer</span> <span className="cp">= {'{'}</span></> },
  { line: 2, content: <><span className="ind" /><span className="cp">name:</span> <span className="cs tok">"{profile.name}"</span><span className="cp">,</span></> },
  { line: 3, content: <><span className="ind" /><span className="cp">role:</span> <span className="cs tok">"Full-Stack Developer"</span><span className="cp">,</span></> },
  { line: 4, content: <><span className="ind" /><span className="cp">location:</span> <span className="cs tok">"{profile.location}"</span><span className="cp">,</span></> },
  { line: 5, content: <><span className="ind" /><span className="cp">stack:</span> <span className="cp">[</span><span className="cs tok">"React"</span><span className="cp">,</span> <span className="cs">"Node"</span><span className="cp">,</span> <span className="cs">"Python"</span><span className="cp">],</span></> },
  { line: 6, content: <><span className="ind" /><span className="cp">focus:</span> <span className="cp">[</span><span className="cs tok">"Algorithms"</span><span className="cp">,</span> <span className="cs tok">"Distributed Systems"</span><span className="cp">,</span> <span className="cs tok">"Databases"</span><span className="cp">,</span> <span className="cs tok">"Cloud"</span><span className="cp">],</span></> },
  { line: 7, content: <><span className="ind" /><span className="cp">principles:</span> <span className="cp">{'{'}</span></> },
  { line: 8, content: <><span className="ind2" /><span className="cp">performance:</span> <span className="cn tok">true</span><span className="cp">,</span> <span className="cp">reliability:</span> <span className="cn tok">true</span><span className="cp">,</span></> },
  { line: 9, content: <><span className="ind2" /><span className="cp">maintainability:</span> <span className="cn tok">true</span><span className="cp">,</span> <span className="cp">clarity:</span> <span className="cn tok">true</span><span className="cp">,</span></> },
  { line: 10, content: <><span className="ind" /><span className="cp">{'}'}</span><span className="cp">,</span></> },
  { line: 11, content: <><span className="ind" /><span className="cp">sports:</span> <span className="cp">{'{'}</span> <span className="cp">football:</span> <span className="cn tok">true</span><span className="cp">,</span> <span className="cp">officiating:</span> <span className="cn tok">true</span> <span className="cp">{'}'}</span><span className="cp">,</span></> },
  { line: 12, content: <><span className="ind" /></> },
  { line: 13, content: <><span className="ind" /><span className="cf tok">greet</span><span className="cp">(): </span><span className="ct">string</span> <span className="cp">{'{'}</span></> },
  { line: 14, content: <><span className="ind2" /><span className="ck tok">return</span> <span className="cs">{"`Let's build something amazing together!`"}</span><span className="cp">;</span></> },
  { line: 15, content: <><span className="ind" /><span className="cp">{'}'}</span><span className="cp">,</span></> },
  { line: 16, content: <><span className="ind" /><span className="cf tok">now</span><span className="cp">(): </span><span className="ct">object</span> <span className="cp">{'{'}</span></> },
  { line: 17, content: <><span className="ind2" /><span className="ck tok">return</span> <span className="cp">{'{'}</span> <span className="cp">learning:</span> <span className="cp">[</span><span className="cs tok">"System design"</span><span className="cp">,</span> <span className="cs tok">"Intelligent systems"</span><span className="cp">,</span> <span className="cs tok">"Infrastructure"</span><span className="cp">]</span> <span className="cp">{'}'}</span><span className="cp">;</span></> },
  { line: 18, content: <><span className="ind" /><span className="cp">{'}'}</span><span className="cp">,</span></> },
  { line: 19, content: <><span className="cp">{'}'}</span><span className="cp">;</span></> },
  { line: 20, content: <><span className="ind" /></> },
  { line: 21, content: <><span className="cc">// Always iterating, always learning</span></> },
  { line: 22, content: <><span className="cf tok">developer</span><span className="cp">.</span><span className="cf tok">now</span><span className="cp">();</span></> },
  { line: 23, content: <><span className="cf tok">developer</span><span className="cp">.</span><span className="cf tok">greet</span><span className="cp">();</span> <span className="cc">// Let&apos;s go!</span><span className="type-cursor" /></> },
];

export default function AboutCodeBlock() {
  const [statusLn, setStatusLn] = useState("Ln 1, Col 1");
  const wrapRef = useRef<HTMLDivElement>(null);
  const winRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const win = winRef.current;
    if (!wrap || !win) return;

    const linesEl = wrap.querySelectorAll(".about-code-cl");
    const lineNums = wrap.querySelectorAll(".about-ln");

    const handleLineLeave = () => {
      linesEl.forEach((l) => l.classList.remove("hovered"));
      lineNums.forEach((l) => l.classList.remove("active-ln"));
    };

    const handlers: Array<() => void> = [];
    linesEl.forEach((lineEl, i) => {
      const handleEnter = () => {
        linesEl.forEach((l) => l.classList.remove("hovered"));
        lineEl.classList.add("hovered");
        lineNums.forEach((l) => l.classList.remove("active-ln"));
        const lnEl = lineNums[i];
        if (lnEl) lnEl.classList.add("active-ln");
        const ln = (lineEl as HTMLElement).dataset.line || String(i + 1);
        setStatusLn(`Ln ${ln}, Col 1`);
      };
      handlers.push(handleEnter);
      lineEl.addEventListener("mouseenter", handleEnter);
      lineEl.addEventListener("mouseleave", handleLineLeave);
    });

    return () => {
      linesEl.forEach((lineEl, i) => {
        lineEl.removeEventListener("mouseenter", handlers[i]);
        lineEl.removeEventListener("mouseleave", handleLineLeave);
      });
    };
  }, []);

  return (
    <div ref={wrapRef} className="about-code-wrap w-full max-w-full">
      <div ref={winRef} className="hero-code-window about-code-window">
        <div className="hcw-header">
          <div className="hcw-dots">
            <span className="hcw-dot hcw-dot-r" />
            <span className="hcw-dot hcw-dot-y" />
            <span className="hcw-dot hcw-dot-g" />
          </div>
          <span className="code-filename text-[0.62rem] ml-3 tracking-wide opacity-60">dylan-butelho.ts</span>
        </div>
        <div className="hcw-body">
          <div className="hcw-linenos">
            {ABOUT_LINES.map(({ line }) => (
              <span key={line} className="about-ln ln" data-ln={line}>{line}</span>
            ))}
          </div>
          <div className="hcw-code">
            {ABOUT_LINES.map(({ line, content }) => (
              <div key={line} className="about-code-cl hero-cl cl" data-line={line}>
                {content}
              </div>
            ))}
          </div>
        </div>
        <div className="hcw-statusbar">
          <div className="hcw-status-l">
            <span className="st-item">⎇ main</span>
            <span className="st-item">✓ TypeScript</span>
            <span className="st-item">0 errors, 0 warnings</span>
          </div>
          <div className="hcw-status-r">
            <span className="st-item">{statusLn}</span>
            <span className="st-item">UTF-8</span>
            <span className="st-item">Spaces: 2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
