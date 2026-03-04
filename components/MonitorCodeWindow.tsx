"use client";

type MonitorCodeWindowProps = {
  accent?: "blue" | "red" | "green";
};

export default function MonitorCodeWindow({ accent = "blue" }: MonitorCodeWindowProps) {
  return (
    <div className={`monitor-wrap monitor-${accent}`}>
      <div className="monitor-stand" />
      <div className="monitor-screen">
        <div className="monitor-header">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="monitor-title">exp.ts</span>
        </div>
        <div className="monitor-body">
          <div className="monitor-gutter">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="monitor-code">
            <div className="line">
              <span className="tok kw">const</span>{" "}
              <span className="tok fn">experience</span>{" "}
              <span className="tok op">=</span>{" "}
              <span className="tok op">&#123;</span>
            </div>
            <div className="line ind">
              <span className="tok prop">role</span>
              <span className="tok op">:</span>{" "}
              <span className="tok str">"Engineer"</span>
              <span className="tok op">,</span>
            </div>
            <div className="line ind">
              <span className="tok prop">focus</span>
              <span className="tok op">:</span>{" "}
              <span className="tok str">"Systems &amp; platforms"</span>
              <span className="tok op">,</span>
            </div>
            <div className="line ind">
              <span className="tok prop">stack</span>
              <span className="tok op">:</span>{" "}
              <span className="tok op">[</span>
              <span className="tok str">"TypeScript"</span>
              <span className="tok op">,</span>{" "}
              <span className="tok str">"React"</span>
              <span className="tok op">,</span>{" "}
              <span className="tok str">"Cloud"</span>
              <span className="tok op">]</span>
              <span className="tok op">,</span>
            </div>
            <div className="line">
              <span className="tok op">&#125;</span>
              <span className="tok op">;</span>
            </div>
            <div className="line comment">
              <span className="tok cm">// Always shipping &amp; learning</span>
              <span className="cursor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

