"use client";

import { useEffect, useRef } from "react";
import { experience, skillCategories } from "@/data/resume";

export default function ExperienceSection() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    el.classList.remove("drawn");
    void el.offsetWidth;
    const t = setTimeout(() => el.classList.add("drawn"), 250);
    return () => clearTimeout(t);
  }, []);

  const yearsExp = "2+";
  const skillsBand = skillCategories.slice(0, 4);

  return (
    <>
      <div className="exp-hero sr-reveal">
        <div className="text-center lg:text-left">
          <p className="section-label text-[var(--portfolio-mid-gray)]">Work History</p>
          <h2 className="exp-title">
            Building things
            <br />
            <span>that matter.</span>
          </h2>
        </div>
        <div className="exp-hero-meta">
          <div className="exp-years">{yearsExp}</div>
          <div className="exp-years-label">
            Years of
            <br />
            Experience
          </div>
        </div>
      </div>

      <div className="timeline timeline-portfolio">
        <div ref={progressRef} className="timeline-progress" aria-hidden />

        {experience.map((job, idx) => {
          const tags = "stack" in job && Array.isArray(job.stack) ? job.stack : [];
          const isCurrent = job.period.toLowerCase().includes("present");
          return (
            <div
              key={`${job.role}-${job.company}`}
              className="timeline-item sr-reveal"
              data-sr-delay={80 * (idx % 6)}
            >
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-role">
                    {job.role}
                    {isCurrent && <span className="badge-current">Current</span>}
                  </div>
                  <div className="timeline-period timeline-period-desktop">{job.period}</div>
                </div>
                <div className="timeline-company">
                  {job.company}
                  <span className="timeline-period-inline"> — {job.period}</span>
                </div>
                {"location" in job && job.location && (
                  <div className="timeline-location">{job.location}</div>
                )}
                <div className="timeline-achievements">
                  {job.bullets.map((bullet, i) => (
                    <div key={i} className="achievement">
                      {bullet}
                    </div>
                  ))}
                </div>
                {tags.length > 0 && (
                  <div className="timeline-stack">
                    {tags.map((t) => (
                      <span key={t} className="stack-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-band">
        {skillsBand.map((cat, idx) => {
          const title = cat.title === "Web & Backend" ? "Development" : cat.title;
          return (
            <div
              key={cat.title}
              className="skill-block sr-reveal"
              data-sr-delay={60 * (idx + 1)}
            >
              <div className="skill-block-title">{title}</div>
              <div className="skill-block-items">
                {cat.skills.slice(0, 5).map((s) => (
                  <div key={s.slug} className="skill-block-item">
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

