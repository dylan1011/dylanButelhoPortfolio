"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  { line: 1, content: <><span className="cc">// ─── About Me ─────────────────</span></> },
  { line: 2, content: <><span className="ck tok">const</span> <span className="cf tok">dylan</span> <span className="cp">= {'{'}</span></> },
  { line: 3, content: <><span className="ind" /><span className="cp">name:</span> <span className="cs tok">"Dylan Butelho"</span><span className="cp">,</span></> },
  { line: 4, content: <><span className="ind" /><span className="cp">role:</span> <span className="cs tok">"Software Developer"</span><span className="cp">,</span></> },
  { line: 5, content: <><span className="ind" /><span className="cp">focus:</span> <span className="cs tok">"AI / ML + Full-Stack"</span><span className="cp">,</span></> },
  { line: 6, content: <><span className="ind" /><span className="cp">location:</span> <span className="cs tok">"New York, USA 📍"</span><span className="cp">,</span></> },
  { line: 7, content: <><span className="ind" /></> },
  { line: 8, content: <><span className="ind" /><span className="cp">education:</span> <span className="cp">{'{'}</span></> },
  { line: 9, content: <><span className="ind2" /><span className="cp">degree:</span> <span className="cs tok">"M.S. Computer Science"</span><span className="cp">,</span></> },
  { line: 10, content: <><span className="ind2" /><span className="cp">school:</span> <span className="cs tok">"Syracuse University"</span><span className="cp">,</span></> },
  { line: 11, content: <><span className="ind2" /><span className="cp">year:</span> <span className="cn tok">2026</span><span className="cp">,</span></> },
  { line: 12, content: <><span className="ind" /><span className="cp">{'}'}</span><span className="cp">,</span></> },
  { line: 13, content: <><span className="ind" /></> },
  { line: 14, content: <><span className="ind" /><span className="cp">stack:</span> <span className="cp">[</span><span className="cs tok">"Python"</span><span className="cp">, </span><span className="cs">"React"</span><span className="cp">, </span><span className="cs">"Flask"</span><span className="cp">],</span></> },
  { line: 15, content: <><span className="ind" /><span className="cp">ml:</span> <span className="cp">[</span><span className="cs tok">"TensorFlow"</span><span className="cp">, </span><span className="cs">"PyTorch"</span><span className="cp">],</span></> },
  { line: 16, content: <><span className="ind" /><span className="cp">openTo:</span> <span className="ck tok">true</span><span className="cp">,</span></> },
  { line: 17, content: <><span className="ind" /></> },
  { line: 18, content: <><span className="ind" /><span className="cf tok">greet</span><span className="cp">(): </span><span className="ct">string</span> <span className="cp">{'{'}</span></> },
  { line: 19, content: <><span className="ind2" /><span className="ck">return</span> <span className="cs">{"`Let's build something amazing!`"}</span><span className="cp">;</span></> },
  { line: 20, content: <><span className="ind" /><span className="cp">{'}'}</span></> },
  { line: 21, content: <><span className="cp">{'}'}</span><span className="cp">;</span></> },
  { line: 22, content: <><span className="cf tok">dylan</span><span className="cp">.</span><span className="cf">greet</span><span className="cp">();</span> <span className="cc">// ✓ ready</span><span className="type-cursor" /></> },
];

const PYTHON_LINES = [
  { line: 1, content: <><span className="cc"># ─── skills.py ──────────────────</span></> },
  { line: 2, content: <><span className="ck">import</span> <span className="cf tok">tensorflow</span> <span className="ck">as</span> <span className="cf">tf</span></> },
  { line: 3, content: <><span className="ck">import</span> <span className="cf tok">torch</span><span className="cp">,</span> <span className="cf">sklearn</span></> },
  { line: 4, content: <><span className="ind" /></> },
  { line: 5, content: <><span className="cf tok">skills</span> <span className="cp">=</span> <span className="cp">{'{'}</span></> },
  { line: 6, content: <><span className="ind" /><span className="cs">"languages"</span><span className="cp">:</span> <span className="cp">[</span><span className="cs">"Python"</span><span className="cp">,</span> <span className="cs">"Java"</span><span className="cp">,</span> <span className="cs">"JS"</span><span className="cp">],</span></> },
  { line: 7, content: <><span className="ind" /><span className="cs">"ml"</span><span className="cp">:</span> <span className="cp">[</span><span className="cs">"TensorFlow"</span><span className="cp">,</span> <span className="cs">"PyTorch"</span><span className="cp">],</span></> },
  { line: 8, content: <><span className="ind" /><span className="cs">"data"</span><span className="cp">:</span> <span className="cp">[</span><span className="cs">"Pandas"</span><span className="cp">,</span> <span className="cs">"NumPy"</span><span className="cp">],</span></> },
  { line: 9, content: <><span className="ind" /><span className="cs">"databases"</span><span className="cp">:</span> <span className="cp">[</span><span className="cs">"PostgreSQL"</span><span className="cp">,</span> <span className="cs">"MongoDB"</span><span className="cp">],</span></> },
  { line: 10, content: <><span className="ind" /><span className="cs">"viz"</span><span className="cp">:</span> <span className="cp">[</span><span className="cs">"Tableau"</span><span className="cp">,</span> <span className="cs">"Power BI"</span><span className="cp">],</span></> },
  { line: 11, content: <><span className="cp">{'}'}</span></> },
  { line: 12, content: <><span className="ind" /></> },
  { line: 13, content: <><span className="ck">def</span> <span className="cf tok">hire_me</span><span className="cp">(</span><span className="ct">role</span><span className="cp">:</span> <span className="ct">str</span><span className="cp">)</span> <span className="cp">{"->"}</span> <span className="ct">str</span><span className="cp">:</span></> },
  { line: 14, content: <><span className="ind" /><span className="cs">{"\"\"\"Returns contact info for Dylan\"\"\""}</span></> },
  { line: 15, content: <><span className="ind" /><span className="ck">return</span> <span className="cs">{"f\"dylanbutelho@gmail.com | {role}\""}</span></> },
  { line: 16, content: <><span className="ind" /></> },
  { line: 17, content: <><span className="cc"># Call to get started 🚀</span></> },
  { line: 18, content: <><span className="cf tok">hire_me</span><span className="cp">(</span><span className="cs">"ML Engineer"</span><span className="cp">)</span> <span className="cc"># → ready!</span><span className="type-cursor" /></> },
];

export default function HeroCodeBlock() {
  const [activeTab, setActiveTab] = useState<"ts" | "py">("ts");
  const [statusLn, setStatusLn] = useState("Ln 1, Col 1");
  const [statusOk, setStatusOk] = useState(false);
  const [intellisenseVisible, setIntellisenseVisible] = useState(false);
  const [autoActiveLine, setAutoActiveLine] = useState<number | null>(null);
  const codeWrapRef = useRef<HTMLDivElement>(null);
  const codeWinRef = useRef<HTMLDivElement>(null);
  const autoRunningRef = useRef(true);

  const lines = activeTab === "ts" ? LINES : PYTHON_LINES;
  const lineCount = lines.length;

  useEffect(() => {
    const wrap = codeWrapRef.current;
    const win = codeWinRef.current;
    if (!wrap || !win) return;

    const linesEl = wrap.querySelectorAll(".hero-cl");
    const lineNums = wrap.querySelectorAll(".hero-ln");

    const handleLineLeave = () => {
      linesEl.forEach((l) => l.classList.remove("hovered"));
      lineNums.forEach((l) => l.classList.remove("active-ln"));
      setIntellisenseVisible(false);
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
        const lnNum = Number(ln);
        setStatusLn(`Ln ${ln}, Col 1`);
        setStatusOk(activeTab === "ts" && lnNum === 16);
        setIntellisenseVisible(activeTab === "ts" ? lnNum === 18 : lnNum === 13);
      };
      handlers.push(handleEnter);
      lineEl.addEventListener("mouseenter", handleEnter);
      lineEl.addEventListener("mouseleave", handleLineLeave);
    });

    const onWinEnter = () => { autoRunningRef.current = false; setAutoActiveLine(null); };
    const onWinLeave = () => { autoRunningRef.current = true; };
    win.addEventListener("mouseenter", onWinEnter);
    win.addEventListener("mouseleave", onWinLeave);

    return () => {
      linesEl.forEach((lineEl, i) => {
        lineEl.removeEventListener("mouseenter", handlers[i]);
        lineEl.removeEventListener("mouseleave", handleLineLeave);
      });
      win.removeEventListener("mouseenter", onWinEnter);
      win.removeEventListener("mouseleave", onWinLeave);
    };
  }, [activeTab]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!autoRunningRef.current) return;
      setAutoActiveLine((prev) => (prev === null ? 0 : (prev + 1) % lineCount));
    }, 650);
    return () => clearInterval(id);
  }, [lineCount]);

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[360px] lg:min-h-0 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div ref={codeWrapRef} className="hero-code-wrap w-full max-w-[min(520px,90%)]">
        <div ref={codeWinRef} className="hero-code-window">
          <div className="hcw-header">
            <div className="hcw-dots">
              <span className="hcw-dot hcw-dot-r" />
              <span className="hcw-dot hcw-dot-y" />
              <span className="hcw-dot hcw-dot-g" />
            </div>
            <div className="hcw-tabs">
              <button type="button" className={`hcw-tab ${activeTab === "ts" ? "active" : ""}`} onClick={() => setActiveTab("ts")}>profile.ts</button>
              <button type="button" className={`hcw-tab ${activeTab === "py" ? "active" : ""}`} onClick={() => setActiveTab("py")}>skills.py</button>
            </div>
            <div className="hcw-breadcrumb">
              <span>dylan</span><span className="sep">›</span>
              {activeTab === "ts" ? (
                <><span className="hi">DylanButelho</span><span className="sep">›</span><span className="hi">greet</span></>
              ) : (
                <><span className="hi">skills</span><span className="sep">›</span><span className="hi">hire_me</span></>
              )}
            </div>
          </div>

          <div className="hcw-body">
            <div className="hcw-linenos">
              {lines.map(({ line }) => (
                <span key={`${activeTab}-${line}`} className={`hero-ln ln ${autoActiveLine === line - 1 ? "active-ln" : ""}`} data-ln={line}>{line}</span>
              ))}
            </div>
            <div className="hcw-code">
              {intellisenseVisible && activeTab === "ts" && (
                <div className="intellisense visible">
                  <div className="is-header">SUGGESTIONS</div>
                  <div className="is-item selected"><div className="is-icon fn">ƒ</div><span className="is-name">greet</span><span className="is-type">(): string</span></div>
                  <div className="is-item"><div className="is-icon kw">k</div><span className="is-name">const</span><span className="is-type">keyword</span></div>
                  <div className="is-item"><div className="is-icon st">s</div><span className="is-name">"Dylan Butelho"</span><span className="is-type">string</span></div>
                  <div className="is-item"><div className="is-icon ty">T</div><span className="is-name">string</span><span className="is-type">type</span></div>
                </div>
              )}
              {intellisenseVisible && activeTab === "py" && (
                <div className="intellisense visible">
                  <div className="is-header">SUGGESTIONS</div>
                  <div className="is-item selected"><div className="is-icon fn">ƒ</div><span className="is-name">hire_me</span><span className="is-type">(role: str) -&gt; str</span></div>
                  <div className="is-item"><div className="is-icon kw">k</div><span className="is-name">def</span><span className="is-type">keyword</span></div>
                  <div className="is-item"><div className="is-icon st">s</div><span className="is-name">skills</span><span className="is-type">dict</span></div>
                  <div className="is-item"><div className="is-icon ty">T</div><span className="is-name">str</span><span className="is-type">type</span></div>
                </div>
              )}
              {lines.map(({ line, content }) => (
                <div
                  key={`${activeTab}-${line}`}
                  className={`hero-cl cl ${autoActiveLine === line - 1 ? "auto-active" : ""}`}
                  data-line={line}
                >
                  {content}
                </div>
              ))}
            </div>
          </div>

          <div className={`hcw-statusbar ${statusOk ? "ok" : ""}`}>
            <div className="hcw-status-l">
              <span className="st-item">⎇ main</span>
              <span className="st-item">{activeTab === "ts" ? "✓ TypeScript" : "✓ Python"}</span>
              <span className="st-item">{statusOk ? "openTo: true ✅" : "0 errors, 0 warnings"}</span>
            </div>
            <div className="hcw-status-r">
              <span className="st-item">{statusLn}</span>
              <span className="st-item">UTF-8</span>
              <span className="st-item">Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[12%] left-[-24px] z-[3] font-mono text-[0.6rem] font-bold px-3 py-2 bg-[var(--portfolio-blue)] text-white dark:text-[var(--portfolio-black)] animate-float hidden md:block shadow-[0_0_18px_var(--portfolio-blue-glow)]">
        React + TypeScript
      </div>
      <div className="absolute bottom-[18%] right-[-16px] z-[3] font-mono text-[0.6rem] font-bold px-3 py-2 bg-[var(--portfolio-red)] text-white animate-float-delay-1 hidden md:block shadow-[0_0_18px_var(--portfolio-red-glow)]">
        Node.js + Python
      </div>
      <div className="absolute top-[38%] right-[-32px] z-[3] font-mono text-[0.56rem] font-bold px-3 py-2 bg-[var(--portfolio-green)] text-white dark:text-[var(--portfolio-black)] animate-float-delay-2 hidden md:block shadow-[0_0_18px_var(--portfolio-green-glow)]">
        M.S. Computer Science
      </div>
    </div>
  );
}
