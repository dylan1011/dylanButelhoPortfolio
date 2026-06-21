"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { profile } from "@/data/resume";

const CODE_LINES = [
  "// ─── Terminal Commands ─────────",
  "",
  "// Quick actions",
  "whoami          // about me",
  "status          // what I'm doing now",
  "projects        // things I've built",
  "contact         // email, github, linkedin",
  "resume          // download resume",
  "",
  "// Discover more",
  "help            // show important commands",
  "list            // list all shell commands",
  "search <term>   // find matching commands",
  "",
  "clear           // clear screen",
  "",
  "// Tab = autocomplete | ↑↓ = history",
];

/** 1-based line: IntelliSense for “list” command */
const INTELLI_LINE_COMMANDS = 10;
/** 1-based: status bar “highlight” for list line */
const STATUS_OK_LINE_COMMANDS = 10;
/** 1-based: IntelliSense on send_to_dylan import */
const INTELLI_LINE_CONTACT = 2;

const COMMAND_CATALOG = [
  { cmd: "whoami", desc: "about me" },
  { cmd: "skills", desc: "tech stack table" },
  { cmd: "status", desc: "what I'm doing now" },
  { cmd: "projects", desc: "things I've built" },
  { cmd: "contact", desc: "email, GitHub, LinkedIn" },
  { cmd: "resume", desc: "download resume" },
  { cmd: "hire", desc: "unlock something special" },
  { cmd: "music", desc: "coding playlist" },
  { cmd: "coffee", desc: "brew ASCII coffee" },
  { cmd: "matrix", desc: "matrix rain animation" },
  { cmd: "dice", desc: "roll a d20" },
  { cmd: "quote", desc: "random dev wisdom" },
  { cmd: "weather", desc: "local conditions" },
  { cmd: "ls", desc: "list portfolio files" },
  { cmd: "cat .secret", desc: "read hidden file" },
  { cmd: "pwd", desc: "current directory" },
  { cmd: "ping", desc: "ping portfolio" },
  { cmd: "echo <text>", desc: "echo anything" },
  { cmd: "sudo", desc: "try root access" },
  { cmd: "sudo rm -rf", desc: "dangerous command, safely blocked" },
  { cmd: "exit", desc: "try to leave" },
  { cmd: "cd", desc: "single-page terminal note" },
  { cmd: "clear", desc: "clear terminal" },
  { cmd: "help", desc: "show important commands" },
  { cmd: "list", desc: "list every command" },
  { cmd: "search <term>", desc: "find matching commands" },
];

const IMPORTANT_COMMANDS = ["whoami", "status", "projects", "contact", "resume", "skills", "list", "search <term>"];

function formatCommandRows(commands: typeof COMMAND_CATALOG) {
  return commands.map(({ cmd, desc }) => `  ${cmd.padEnd(14)} ${desc}`).join("\n");
}

const COMMANDS: Record<string, string> = {
  help:
    `Important commands:\n${formatCommandRows(COMMAND_CATALOG.filter(({ cmd }) => IMPORTANT_COMMANDS.includes(cmd)))}\n\nType "list" to show every command.\nType "search <term>" to find a command.`,
  list: `Available shell commands:\n${formatCommandRows(COMMAND_CATALOG)}`,
  search: 'Usage: search <term>\nExample: search resume',
  whoami: `Dylan Butelho\nM.S. CS @ Syracuse (2026) · Full-stack & ML\nPython & JavaScript · AWS · Data-driven apps\n${profile.location}`,
  skills:
    "+----------------------+------------------------------------------+\n| Area                 | Technologies                             |\n+----------------------+------------------------------------------+\n| Languages            | Python, Java, C/C++, JS, SQL             |\n| Web & API            | Next.js, React, FastAPI, Flask, Django   |\n| ML & Data            | TensorFlow, PyTorch, LangChain, Pandas   |\n| Cloud & DevOps       | AWS, Docker, K8s, Jenkins, Cloudflare  |\n| Databases            | PostgreSQL, MongoDB, MySQL, Redis, SQL |\n+----------------------+------------------------------------------+",
  status:
    "  [ACTIVE] Software Engineer @ iConsult Collaborative (Syracuse, NY)\n  [ACTIVE] M.S. Computer Science @ Syracuse University (May 2026)\n  [BUILD]  H1B JobPilot — Python · Go · Terraform · AWS\n  [OPEN]   Full-time SWE roles (May 2026)",
  projects:
    "  01  Orange Bot\n      AI agent for telemetry, incident context, and root-cause hypotheses\n      Python · Go · LangGraph · LangChain · AWS · Terraform\n\n  02  H1B JobPilot (in progress)\n      High-availability AI services on AWS Lambda, SQS, and CloudWatch\n      Python · Go · Terraform · Docker · Claude Code\n\n  03  Environmental IoT Reliability Pipeline\n      Real-time sensor telemetry, anomaly detection, and Grafana dashboards\n      Python · Go · AWS · Prometheus · Grafana · Linux",
  contact: `  Email:    ${profile.email}\n  LinkedIn: ${profile.linkedin.replace(/^https?:\/\//, "")}\n  GitHub:   ${profile.github.replace(/^https?:\/\//, "")}\n  Phone:    ${profile.phone}`,
  hire: `Excellent decision.\n\nEmail: ${profile.email}\nAvailable: May 2026\nStack: Full-stack + ML\n\n...let's build something.`,
  music:
    "Now playing:\n  > lo-fi beats to code to\n  > Daft Punk - Around the World\n  > Hans Zimmer - Time\n  > Nujabes - Feather",
  coffee:
    "Brewing...\n\n    ( (\n     ) )\n  ..........\n  |        |]\n  |  JAVA  |\n   \\      /\n    `----'\n\nCoffee.exe loaded. Productivity += 100;",
  matrix: "__MATRIX__",
  dice: "__DICE__",
  quote: "__QUOTE__",
  weather:
    "  New York, USA\n  Temperature: 68°F / 20°C\n  Condition:   Partly cloudy\n  Humidity:    52%\n  Wind:        8 mph NW\n  Perfect coding weather.",
  "sudo rm -rf": "Permission denied. This portfolio has backups.",
  sudo: "No root access. But type 'hire' for something special.",
  ls: "about/  projects/  experience/  skills/  education/  contact/  resume.pdf  .secret",
  "cat .secret":
    "You found it!\nI once debugged a production issue at 3am\nwith nothing but console.log and determination.\nHire me and I'll do it for your team.",
  cd: "This is a single-page terminal.",
  pwd: "/home/dylan/portfolio",
  "echo hello": "hello\n...hello from the other side?",
  ping:
    "PING dylanbutelho.com (127.0.0.1)\n64 bytes: seq=0 ttl=64 time=0.042ms\n64 bytes: seq=1 ttl=64 time=0.038ms\n0% packet loss",
  exit:
    "You can check out any time you like,\nbut you can never leave.\n\n- Hotel California (and this terminal)",
};

const QUOTES = [
  '"Talk is cheap. Show me the code." - Linus Torvalds',
  '"Make it work, make it right, make it fast." - Kent Beck',
  "\"Code is like humor. When you have to explain it, it's bad.\" - Cory House",
  '"Simplicity is the soul of efficiency." - Austin Freeman',
  '"First, solve the problem. Then, write the code." - John Johnson',
];

type HistLine = { tp: "sys" | "in" | "out"; tx: string };

function highlightShellLine(line: string): ReactNode {
  if (!line) return "\u00A0";
  const idx = line.indexOf("//");
  if (idx === -1) return line;
  if (idx === 0) return <span className="cc">{line}</span>;
  const cmd = line.slice(0, idx).replace(/\s+$/, "");
  const comment = line.slice(idx);
  return (
    <>
      <span className="cf tok">{cmd}</span>
      <span className="cc"> {comment}</span>
    </>
  );
}

const CONTACT_EDITOR_LINES: { line: number; content: ReactNode }[] = [
  {
    line: 1,
    content: (
      <>
        <span className="ck tok">import</span> <span className="cf tok">smtplib</span>
      </>
    ),
  },
  {
    line: 2,
    content: (
      <>
        <span className="ck tok">from</span> <span className="cf tok">portfolio</span>{" "}
        <span className="ck tok">import</span> <span className="cf tok">send_to_dylan</span>
      </>
    ),
  },
  { line: 3, content: <span className="cc">&nbsp;</span> },
  { line: 4, content: <span className="cc"># Fill in the fields below and click Send</span> },
  { line: 5, content: <span className="cc"># This goes straight to {profile.email}</span> },
  {
    line: 6,
    content: (
      <>
        <span className="cf tok">name</span>
        <span className="cp"> = </span>
        <span className="cp">&quot;</span>
        <span className="cs tok">your_name</span>
        <span className="cp">&quot;</span>
        <span className="cc"> # use form below</span>
      </>
    ),
  },
  {
    line: 7,
    content: (
      <>
        <span className="cf tok">email</span>
        <span className="cp"> = </span>
        <span className="cp">&quot;</span>
        <span className="cs tok">you@email.com</span>
        <span className="cp">&quot;</span>
      </>
    ),
  },
  {
    line: 8,
    content: (
      <>
        <span className="cf tok">message</span>
        <span className="cp"> = </span>
        <span className="cp">&quot;&quot;&quot;</span>
        <span className="cs">…</span>
        <span className="cp">&quot;&quot;&quot;</span>
      </>
    ),
  },
];

function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const cols = Math.floor(c.width / 14);
    const drops: number[] = [];
    for (let i = 0; i < cols; i++) drops[i] = Math.floor(Math.random() * -20);
    const id = setInterval(() => {
      ctx.fillStyle = "rgba(6,10,14,0.15)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.font = "12px monospace";
      for (let j = 0; j < drops.length; j++) {
        const blue = getComputedStyle(document.documentElement).getPropertyValue("--portfolio-blue").trim() || "#1a8cff";
        ctx.fillStyle = Math.random() > 0.95 ? "#fff" : Math.random() > 0.5 ? blue : "#0f0";
        ctx.fillText(Math.random() > 0.5 ? "1" : "0", j * 14, drops[j] * 14);
        if (drops[j] * 14 > c.height && Math.random() > 0.975) drops[j] = 0;
        drops[j]++;
      }
    }, 50);
    return () => clearInterval(id);
  }, []);
  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 z-10"
      aria-hidden
    />
  );
}

export default function HeroCodeBlock() {
  const [activeTab, setActiveTab] = useState<"commands" | "contact">("commands");
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [msgVal, setMsgVal] = useState("");
  const [sent, setSent] = useState(false);
  const [histLines, setHistLines] = useState<HistLine[]>([
    { tp: "sys", tx: 'Welcome! Type "help" for essentials, "list" for all commands, or "search <term>".' },
  ]);
  const [input, setInput] = useState("");
  const [cmdHist, setCmdHist] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [matrixOn, setMatrixOn] = useState(false);
  const [termCollapsed, setTermCollapsed] = useState(false);
  const [statusLn, setStatusLn] = useState("Ln 1, Col 1");
  const [statusOk, setStatusOk] = useState(false);
  const [intellisenseVisible, setIntellisenseVisible] = useState(false);
  const [autoActiveLine, setAutoActiveLine] = useState<number | null>(null);

  const codeWrapRef = useRef<HTMLDivElement>(null);
  const codeWinRef = useRef<HTMLDivElement>(null);
  const autoRunningRef = useRef(true);
  const terminalScrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const lineCount =
    activeTab === "commands" ? CODE_LINES.length : CONTACT_EDITOR_LINES.length;

  useEffect(() => {
    setIntellisenseVisible(false);
    setStatusOk(false);
    setStatusLn("Ln 1, Col 1");
  }, [activeTab]);

  useEffect(() => {
    if (termCollapsed) return;
    const el = terminalScrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  }, [histLines, termCollapsed]);

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
        if (activeTab === "commands") {
          setStatusOk(lnNum === STATUS_OK_LINE_COMMANDS);
          setIntellisenseVisible(lnNum === INTELLI_LINE_COMMANDS);
        } else {
          setStatusOk(lnNum === 8);
          setIntellisenseVisible(lnNum === INTELLI_LINE_CONTACT);
        }
      };
      handlers.push(handleEnter);
      lineEl.addEventListener("mouseenter", handleEnter);
      lineEl.addEventListener("mouseleave", handleLineLeave);
    });

    const onWinEnter = () => {
      autoRunningRef.current = false;
      setAutoActiveLine(null);
    };
    const onWinLeave = () => {
      autoRunningRef.current = true;
    };
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

  const addLines = useCallback((lines: HistLine[]) => {
    setHistLines((p) => p.concat(lines));
  }, []);

  const run = useCallback(() => {
    const raw = input.trim();
    const cmd = raw.toLowerCase();
    if (!cmd) return;
    setCmdHist((p) => [cmd, ...p]);
    setHistIdx(-1);

    if (cmd === "clear") {
      setHistLines([]);
      setInput("");
      return;
    }
    if (cmd === "matrix") {
      addLines([
        { tp: "in", tx: cmd },
        { tp: "out", tx: "Entering the Matrix..." },
      ]);
      setMatrixOn(true);
      setTimeout(() => {
        setMatrixOn(false);
        addLines([{ tp: "out", tx: "Welcome back." }]);
      }, 4000);
      setInput("");
      return;
    }
    if (cmd === "dice") {
      const r = Math.floor(Math.random() * 20) + 1;
      let m = `Rolling d20... ${r}!`;
      if (r === 20) m += " CRITICAL HIT! Hire me immediately.";
      if (r === 1) m += " Critical fail. Roll again?";
      addLines([{ tp: "in", tx: cmd }, { tp: "out", tx: m }]);
      setInput("");
      return;
    }
    if (cmd === "quote") {
      addLines([
        { tp: "in", tx: cmd },
        { tp: "out", tx: QUOTES[Math.floor(Math.random() * QUOTES.length)] },
      ]);
      setInput("");
      return;
    }
    if (cmd === "resume") {
      addLines([
        { tp: "in", tx: cmd },
        { tp: "out", tx: "[========================================] 100%\nOpening resume..." },
      ]);
      window.open(profile.resumeUrl, "_blank", "noopener,noreferrer");
      setInput("");
      return;
    }
    if (cmd.startsWith("echo ") && cmd !== "echo hello") {
      addLines([{ tp: "in", tx: cmd }, { tp: "out", tx: raw.slice(5) }]);
      setInput("");
      return;
    }
    if (cmd.startsWith("search ")) {
      const term = cmd.slice(7).trim();
      const matches = COMMAND_CATALOG.filter(({ cmd: name, desc }) =>
        `${name} ${desc}`.toLowerCase().includes(term)
      );
      const resp = term
        ? matches.length
          ? `Matches for "${term}":\n${formatCommandRows(matches)}`
          : `No commands found for "${term}". Type "list" to browse all commands.`
        : 'Usage: search <term>\nExample: search resume';
      addLines([{ tp: "in", tx: raw }, { tp: "out", tx: resp }]);
      setInput("");
      return;
    }

    let resp = COMMANDS[cmd];
    if (!resp) resp = `Command not found: "${cmd}". Type "help".`;
    addLines([{ tp: "in", tx: cmd }, { tp: "out", tx: resp }]);
    setInput("");
  }, [addLines, input]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const p = input.toLowerCase();
      if (!p) return;
      const searchableCommands = COMMAND_CATALOG.map(({ cmd }) => cmd.replace(" <term>", ""));
      const match = searchableCommands.find((k) => k.startsWith(p) && k !== p);
      if (match) setInput(match);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHist.length) {
        const ni = Math.min(histIdx + 1, cmdHist.length - 1);
        setHistIdx(ni);
        setInput(cmdHist[ni]);
      }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) {
        const ni = histIdx - 1;
        setHistIdx(ni);
        setInput(cmdHist[ni]);
      } else {
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  const sendMailto = () => {
    if (!nameVal || !emailVal || !msgVal) return;
    const subject = `Portfolio Contact from ${encodeURIComponent(nameVal)}`;
    const body = encodeURIComponent(`From: ${nameVal} (${emailVal})\n\n${msgVal}`);
    window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, "_self");
    setSent(true);
  };

  return (
    <div className="relative flex h-full min-h-[280px] w-full items-center justify-center px-4 py-8 sm:min-h-[360px] sm:px-6 sm:py-10 lg:min-h-0 lg:px-8 lg:py-12">
      <div ref={codeWrapRef} className="hero-code-wrap w-full max-w-[min(680px,90%)]">
        <div ref={codeWinRef} className="hero-code-window relative flex min-h-0 flex-col overflow-hidden">
          {matrixOn && <MatrixRain />}

          <div className="hcw-header flex-wrap">
            <div className="hcw-dots">
              <span className="hcw-dot hcw-dot-r" />
              <span className="hcw-dot hcw-dot-y" />
              <span className="hcw-dot hcw-dot-g" />
            </div>
            <div className="hcw-tabs">
              <button
                type="button"
                className={`hcw-tab ${activeTab === "commands" ? "active" : ""}`}
                onClick={() => setActiveTab("commands")}
              >
                commands.sh
              </button>
              <button
                type="button"
                className={`hcw-tab hcw-tab--accent-red ${activeTab === "contact" ? "active" : ""}`}
                onClick={() => setActiveTab("contact")}
              >
                contact.py
              </button>
            </div>
            <div className="hcw-breadcrumb w-full justify-end sm:w-auto sm:ml-auto">
              <span>dylan</span>
              <span className="sep">›</span>
              <span className="hi">DylanButelho</span>
              <span className="sep">›</span>
              <span className="hi">{activeTab === "commands" ? "commands" : "send_email"}</span>
            </div>
          </div>

          <div className="hcw-body hero-hcw-editor max-h-[min(280px,50vh)] min-h-[140px] sm:max-h-[min(320px,55vh)]">
            {activeTab === "commands" && (
              <>
                <div className="hcw-linenos">
                  {CODE_LINES.map((_, i) => (
                    <span
                      key={`c-${i}`}
                      className={`hero-ln ln ${autoActiveLine === i ? "active-ln" : ""}`}
                      data-ln={i + 1}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>
                <div className="hcw-code relative">
                  {intellisenseVisible && activeTab === "commands" && (
                    <div className="intellisense visible">
                      <div className="is-header">SUGGESTIONS</div>
                      <div className="is-item selected">
                        <div className="is-icon fn">ƒ</div>
                        <span className="is-name">list</span>
                        <span className="is-type">all commands</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon kw">k</div>
                        <span className="is-name">help</span>
                        <span className="is-type">essentials</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon st">s</div>
                        <span className="is-name">search resume</span>
                        <span className="is-type">find</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon ty">T</div>
                        <span className="is-name">skills</span>
                        <span className="is-type">table</span>
                      </div>
                    </div>
                  )}
                  {CODE_LINES.map((line, i) => (
                    <div
                      key={`cl-${i}`}
                      className={`hero-cl cl ${autoActiveLine === i ? "auto-active" : ""}`}
                      data-line={i + 1}
                    >
                      {highlightShellLine(line)}
                    </div>
                  ))}
                </div>
              </>
            )}

            {activeTab === "contact" && (
              <>
                <div className="hcw-linenos">
                  {CONTACT_EDITOR_LINES.map(({ line }) => (
                    <span
                      key={line}
                      className={`hero-ln ln ${autoActiveLine === line - 1 ? "active-ln" : ""}`}
                      data-ln={line}
                    >
                      {line}
                    </span>
                  ))}
                </div>
                <div className="hcw-code relative">
                  {intellisenseVisible && activeTab === "contact" && (
                    <div className="intellisense visible">
                      <div className="is-header">SUGGESTIONS</div>
                      <div className="is-item selected">
                        <div className="is-icon fn">ƒ</div>
                        <span className="is-name">send_to_dylan</span>
                        <span className="is-type">(msg) -&gt; None</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon kw">k</div>
                        <span className="is-name">import</span>
                        <span className="is-type">keyword</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon st">s</div>
                        <span className="is-name">portfolio</span>
                        <span className="is-type">module</span>
                      </div>
                      <div className="is-item">
                        <div className="is-icon ty">T</div>
                        <span className="is-name">str</span>
                        <span className="is-type">type</span>
                      </div>
                    </div>
                  )}
                  {CONTACT_EDITOR_LINES.map(({ line, content }) => (
                    <div
                      key={line}
                      className={`hero-cl cl ${autoActiveLine === line - 1 ? "auto-active" : ""}`}
                      data-line={line}
                    >
                      {content}
                    </div>
                  ))}
                  <div className="border-l-2 border-transparent px-[18px] pb-2 pt-2 font-mono text-[0.7rem]">
                    <div className="flex flex-wrap items-center gap-2 text-[0.65rem]">
                      <span className="cc">#</span>
                      <input
                        value={nameVal}
                        onChange={(e) => {
                          setNameVal(e.target.value);
                          setSent(false);
                        }}
                        placeholder="Your name"
                        className="min-w-[100px] flex-1 border-0 border-b border-[var(--portfolio-border)] bg-transparent py-0.5 font-mono text-[0.65rem] outline-none"
                        style={{ color: "var(--portfolio-blue)" }}
                        aria-label="Your name"
                      />
                      <input
                        value={emailVal}
                        type="email"
                        onChange={(e) => {
                          setEmailVal(e.target.value);
                          setSent(false);
                        }}
                        placeholder="you@email.com"
                        className="min-w-[120px] flex-1 border-0 border-b border-[var(--portfolio-border)] bg-transparent py-0.5 font-mono text-[0.65rem] outline-none"
                        style={{ color: "var(--portfolio-green)" }}
                        aria-label="Your email"
                      />
                    </div>
                    <textarea
                      value={msgVal}
                      onChange={(e) => {
                        setMsgVal(e.target.value);
                        setSent(false);
                      }}
                      placeholder="Message…"
                      rows={2}
                      className="mt-2 w-full resize-none border-0 border-b border-[var(--portfolio-border)] bg-transparent py-0.5 font-mono text-[0.65rem] outline-none"
                      style={{ color: "rgba(232,237,242,0.85)" }}
                      aria-label="Message"
                    />
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={sendMailto}
                        className="cursor-pointer rounded border-0 px-3 py-1 font-mono text-[0.58rem] font-bold transition-opacity hover:opacity-90"
                        style={{
                          background: sent ? "#28CA41" : "var(--portfolio-red)",
                          color: "#fff",
                        }}
                      >
                        {sent ? "✓ send_to_dylan() called!" : "▶ send_to_dylan()"}
                      </button>
                      {!nameVal && !emailVal && !msgVal && (
                        <span className="cc text-[0.58rem]">fill in all fields first</span>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="relative h-px bg-[var(--portfolio-border)]">
            <div className="absolute left-1/2 top-[-4px] h-1 w-9 -translate-x-1/2 rounded-sm bg-[var(--portfolio-border2)]" />
          </div>

          <div className="hero-terminal-tabbar">
            <div className="flex gap-4 text-[0.55rem] tracking-wide text-[var(--portfolio-mid-gray)]">
              <span className="opacity-60">PROBLEMS</span>
              <span className="opacity-60">OUTPUT</span>
              <span className="border-b-2 border-[var(--portfolio-blue)] pb-1 font-semibold text-[var(--portfolio-white)]">
                TERMINAL
              </span>
              <span className="opacity-60">DEBUG CONSOLE</span>
            </div>
            <div className="flex items-center gap-2 text-[0.55rem] text-[var(--portfolio-mid-gray)]">
              <span className="text-[9px] uppercase tracking-wider">bash</span>
              <button
                type="button"
                onClick={() => setTermCollapsed((c) => !c)}
                className="cursor-pointer select-none px-1 leading-none opacity-70 hover:opacity-100"
                aria-expanded={!termCollapsed}
                aria-label={termCollapsed ? "Expand terminal" : "Collapse terminal"}
              >
                {termCollapsed ? "▲" : "▼"}
              </button>
              <span className="cursor-default opacity-50" aria-hidden>
                ×
              </span>
            </div>
          </div>

          {!termCollapsed && (
            <div
              ref={terminalScrollRef}
              className="hero-terminal-body"
              onClick={(e) => {
                if (e.target === e.currentTarget) inputRef.current?.focus();
              }}
              role="presentation"
            >
              <div className="mb-1.5 font-mono text-[0.58rem] text-[var(--portfolio-mid-gray)]">
                dylan@portfolio{" "}
                <span className="text-[var(--portfolio-blue)]">~/portfolio</span>{" "}
                <span className="opacity-70">(main)</span>
              </div>
              {histLines.map((line, i) => {
                if (line.tp === "sys")
                  return (
                    <div key={i} className="mb-0.5 font-mono text-[0.58rem] text-[var(--portfolio-blue)]">
                      {line.tx}
                    </div>
                  );
                if (line.tp === "in")
                  return (
                    <div key={i} className="mt-1 font-mono text-[0.62rem]">
                      <span className="text-[#28CA41]">$ </span>
                      <span className="text-[rgba(232,237,242,0.9)]">{line.tx}</span>
                    </div>
                  );
                return (
                  <div
                    key={i}
                    className="mb-0.5 whitespace-pre-wrap pl-3 font-mono text-[0.6rem] leading-snug text-[var(--portfolio-mid-gray)]"
                  >
                    {line.tx}
                  </div>
                );
              })}
              <div className="mt-1 flex items-center font-mono text-[0.62rem]">
                <span className="text-[#28CA41]">$ </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="ml-1 flex-1 border-0 bg-transparent p-0 text-[rgba(232,237,242,0.95)] outline-none"
                  placeholder="whoami, skills, coffee, matrix, dice..."
                  aria-label="Terminal input"
                />
              </div>
            </div>
          )}

          <div className={`hcw-statusbar ${statusOk ? "ok" : ""}`}>
            <div className="hcw-status-l">
              <span className="st-item">⎇ main</span>
              <span className="st-item">
                ✓ {activeTab === "commands" ? "Shell Script" : "Python"}
              </span>
              <span className="st-item">
                {statusOk
                  ? activeTab === "commands"
                    ? "hire: unlocked ✨"
                    : "message buffer ready"
                  : "0 errors, 0 warnings"}
              </span>
            </div>
            <div className="hcw-status-r">
              <span className="st-item">{statusLn}</span>
              <span className="st-item">UTF-8</span>
              <span className="st-item">Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-[12%] left-[-24px] z-[3] hidden animate-float rounded-md border-0 px-3 py-2 font-mono text-[0.6rem] font-bold shadow-[0_0_18px_var(--portfolio-blue-glow)] md:block bg-[var(--portfolio-blue)] text-white dark:text-[var(--portfolio-black)]">
        React + TypeScript
      </div>
      <div className="absolute bottom-[18%] right-[-16px] z-[3] hidden animate-float-delay-1 rounded-md px-3 py-2 font-mono text-[0.6rem] font-bold shadow-[0_0_18px_var(--portfolio-red-glow)] md:block bg-[var(--portfolio-red)] text-white">
        Node.js + Python
      </div>
      <div className="absolute top-[38%] right-[-32px] z-[3] hidden animate-float-delay-2 rounded-md px-3 py-2 font-mono text-[0.56rem] font-bold shadow-[0_0_18px_var(--portfolio-green-glow)] md:block bg-[var(--portfolio-green)] text-white dark:text-[var(--portfolio-black)]">
        M.S. Computer Science
      </div>
    </div>
  );
}
