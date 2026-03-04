"use client";

import "@/app/education/education.css";
import { useState, useEffect, useRef } from "react";
import { education, certifications, coreProficiencyPct } from "@/data/resume";
import { SKILL_CARDS } from "@/data/skillCards";

const MOBILE_BREAKPOINT = 900;

/* Core Proficiencies use same headings as My Tech Stack; % from resume; ordered by % descending; bar = skill card color (b/r/g) */
const RINGS = SKILL_CARDS.map((card) => {
  const pct = coreProficiencyPct[card.title] ?? 85;
  return {
    label: card.title,
    pct: String(pct),
    offset: 220 * (1 - pct / 100),
    bar: card.bar,
  };
}).sort((a, b) => Number(b.pct) - Number(a.pct));

export default function EducationSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const ringsRef = useRef<HTMLDivElement>(null);
  const ringsScrollRef = useRef<HTMLDivElement>(null);
  const [ringsVisible, setRingsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const set = () => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      if (mobile) setRingsVisible(true);
    };
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  useEffect(() => {
    if (!ringsRef.current) return;
    if (isMobile) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setRingsVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(ringsRef.current);
    return () => obs.disconnect();
  }, [isMobile]);

  useEffect(() => {
    const el = ringsScrollRef.current;
    if (!el) return;

    const update = () => {
      const maxLeft = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(maxLeft > 4 && el.scrollLeft < maxLeft - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const degreesCount = education.length;
  const yearsBuilding = new Date().getFullYear() - 2019;

  return (
    <>
      <div className={`edu-banner ${isMobile ? "" : "sr-reveal"}`}>
        <div className="edu-banner-left">
          <div className="edu-banner-label">Academic Background</div>
          <h1 className="edu-banner-h1">
            Foundations
            <br />
            of <em>craft.</em>
          </h1>
          <p className="edu-banner-sub">
            {degreesCount} degree{degreesCount !== 1 ? "s" : ""}. {certifications.length} certification{certifications.length !== 1 ? "s" : ""}. Continuous learning that never really stopped.
          </p>
        </div>
        <div className="edu-banner-right">
          <div className="edu-stat-block">
            <div className="edu-stat-n">{degreesCount}</div>
            <div className="edu-stat-l">Degrees</div>
          </div>
          <div className="edu-stat-block">
            <div className="edu-stat-n">{certifications.length}</div>
            <div className="edu-stat-l">Certifications</div>
          </div>
          <div className="edu-stat-block">
            <div className="edu-stat-n">{yearsBuilding}+</div>
            <div className="edu-stat-l">Years Building</div>
          </div>
          <div className="edu-stat-block">
            <div className="edu-stat-n">∞</div>
            <div className="edu-stat-l">Learning</div>
          </div>
        </div>
      </div>

      <div className={`edu-accordion ${isMobile ? "edu-mobile-constant" : ""}`}>
        {education.map((item, idx) => {
          const isOpen = isMobile ? true : openIdx === idx;
          const tags = item.coursework
            ? item.coursework.split(",").slice(0, 5).map((s) => s.trim())
            : ["Software", "Systems", "Development"];
          const highlights = "highlights" in item && Array.isArray(item.highlights) ? item.highlights : [];
          return (
            <div
              key={item.degree}
              className={`edu-acc-item ${isMobile ? "" : "sr-reveal"} ${isOpen ? "open" : ""}`}
              data-sr-delay={isMobile ? undefined : idx * 60}
            >
              <button
                type="button"
                className="edu-acc-trigger"
                onClick={() => !isMobile && setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                tabIndex={isMobile ? -1 : 0}
                aria-hidden={isMobile}
              >
                <span className="edu-acc-idx">{String(idx + 1).padStart(2, "0")}</span>
                <span>
                  <div className="edu-acc-title">{item.degree}</div>
                  <div className="edu-acc-school-sm">{item.school}</div>
                </span>
                <span className="edu-acc-year">{item.period}{item.location ? ` · ${item.location}` : ""}</span>
                <span className="edu-acc-arrow">+</span>
              </button>
              <div
                className="edu-acc-body"
                style={
                  isOpen
                    ? {
                        maxHeight: "1200px",
                        overflow: "visible",
                        transition: isMobile ? "none" : "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }
                    : {
                        maxHeight: "0",
                        overflow: "hidden",
                        transition: isMobile ? "none" : "max-height 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                      }
                }
              >
                <div className="edu-acc-inner">
                  <div className="edu-acc-content">
                    <div className="edu-acc-left">
                      <div className="edu-acc-desc">
                        {item.coursework || "Focused on software development, systems, and practical engineering."}
                      </div>
                      <div className="edu-acc-tags">
                        {tags.map((tag) => (
                          <span key={tag} className="edu-acc-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="edu-acc-right">
                      <div className="edu-acc-highlights">
                        {highlights.map((hl, i) => (
                          <div key={i} className="edu-acc-hl">
                            <span className="edu-acc-hl-icon">▸</span>
                            {hl}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`edu-rings-wrap ${isMobile ? "" : "sr-reveal"}`} ref={ringsRef} data-sr-delay={isMobile ? undefined : "80"}>
        <div className="edu-rings-head">
          <div className="edu-rings-title">// Core Proficiencies</div>
        </div>
        <div className={`edu-rings-scroller ${isMobile ? "edu-mobile-constant" : ""}`}>
          <div className="edu-rings" ref={ringsScrollRef}>
          {RINGS.map((r) => (
            <div
              key={r.label}
              className={`ring-item ${ringsVisible ? "go" : ""} ${isMobile ? "ring-no-anim" : ""}`}
              style={{ ["--offset" as string]: `${r.offset}` }}
            >
              <svg className="ring-svg" viewBox="0 0 80 80" aria-hidden>
                <circle className="ring-bg" cx="40" cy="40" r="35" />
                <circle className="ring-fg" cx="40" cy="40" r="35" />
              </svg>
              <div className="ring-pct">{r.pct}%</div>
              <div className="ring-label" style={{ whiteSpace: "pre-line" }}>
                {r.label}
              </div>
            </div>
          ))}
          </div>
          <button
            type="button"
            className="edu-rings-edge-btn edu-rings-edge-btn-left"
            aria-label="Scroll core proficiencies left"
            disabled={!canScrollLeft}
            onClick={() => {
              const el = ringsScrollRef.current;
              if (!el) return;
              el.scrollBy({ left: -Math.min(el.clientWidth * 0.85, 320), behavior: "smooth" });
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="edu-rings-edge-btn edu-rings-edge-btn-right"
            aria-label="Scroll core proficiencies right"
            disabled={!canScrollRight}
            onClick={() => {
              const el = ringsScrollRef.current;
              if (!el) return;
              el.scrollBy({ left: Math.min(el.clientWidth * 0.85, 320), behavior: "smooth" });
            }}
          >
            ›
          </button>
        </div>
      </div>

      <div className={`cert-ticker-wrap ${isMobile ? "edu-mobile-constant" : ""}`} style={{ marginTop: "5rem", paddingBottom: "8rem" }}>
        <div className="cert-ticker-label">
          // Certifications &amp; Credentials — hover to pause
        </div>
        {certifications.length > 0 ? (
          <div className="cert-ticker">
            {[...certifications, ...certifications, ...certifications, ...certifications].map((c, i) => (
              <div key={`${c.name}-${i}`} className="cert-tick-item">
                <div className="cert-tick-dot" />
                <span className="cert-tick-name">{c.name}</span>
                <span className="cert-tick-org">{c.issuer}</span>
                <span className="cert-tick-yr">{c.year}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="cert-ticker">
            {(() => {
              const placeholders = [
                { name: "Add certifications in data/resume.ts", org: "certifications array", yr: "—" },
                { name: "Add certifications in data/resume.ts", org: "certifications array", yr: "—" },
              ];
              return Array.from({ length: 4 }, (_, copy) =>
                placeholders.map((p, j) => (
                  <div key={`ph-${copy}-${j}`} className="cert-tick-item">
                    <div className="cert-tick-dot" />
                    <span className="cert-tick-name">{p.name}</span>
                    <span className="cert-tick-org">{p.org}</span>
                    <span className="cert-tick-yr">{p.yr}</span>
                  </div>
                ))
              ).flat();
            })()}
          </div>
        )}
      </div>
    </>
  );
}
