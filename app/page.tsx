/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  profile,
  homeSkillHighlights,
  academicProjects,
} from "@/data/resume";
import { SKILL_CARDS } from "@/data/skillCards";
import { SKILL_BRAND_COLORS } from "@/data/skillColors";
import { SKILL_LOGO_OVERRIDES, SKILL_LOGO_BLEND_LIGHTEN_SLUGS } from "@/data/skillLogoOverrides";
import SkillIcon from "@/components/SkillIcon";
import SkillBlockIcon from "@/components/SkillBlockIcon";
import HeroCodeBlock from "@/components/HeroCodeBlock";
import AboutCodeBlock from "@/components/AboutCodeBlock";
import ContactForm from "@/components/ContactForm";
import MatrixBackground from "@/components/MatrixBackground";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";

/** Stats strip: 4 software logos (Redis, AWS, Docker, Supabase) with official brand colors */
const STATS_SOFTWARE = [
  { slug: "redis", label: "Redis", color: SKILL_BRAND_COLORS.redis },
  { slug: "amazonaws", label: "AWS", color: SKILL_BRAND_COLORS.amazonaws },
  { slug: "docker", label: "Docker", color: SKILL_BRAND_COLORS.docker },
  { slug: "supabase", label: "Supabase", color: SKILL_BRAND_COLORS.supabase },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--portfolio-bg)] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] transition-colors overflow-x-hidden">
      {/* Hero — exact HTML: min-height 100vh, padding 80px 48px, font sizes from HTML */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="hero-left flex flex-col justify-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 order-1 lg:order-1 min-w-0">
          <div className="max-w-[440px] w-full animate-slide-up">
            <p className="hero-tag flex items-center gap-2.5">
              <span className="w-[30px] h-0.5 bg-[var(--portfolio-green)]" />
              Open to opportunities
            </p>
            <h1 className="hero-name mb-2">
              <span className="font-extrabold">Dylan</span>
              <br />
              <span className="font-extrabold">Butelho</span>
            </h1>
            <p className="hero-tagline">
              <span className="text-[var(--portfolio-blue)]">CODE</span>
              <span className="text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]"> – </span>
              <span className="text-[var(--portfolio-red)]">BUILD</span>
              <span className="text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]"> – </span>
              <span className="text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)]">LEARN</span>
            </p>
            <p className="hero-desc">
              I am a Computer Science graduate student with a strong foundation in algorithms, system design, and performance-oriented engineering. I focus on building efficient, scalable, and well-structured systems with clean architecture and reliable execution. I approach problems analytically, think in systems rather than isolated components, and strive to create solutions that are technically robust and practically impactful.
            </p>
            <div className="hero-actions flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary no-underline">
                View Projects
              </Link>
              <Link href="/contact" className="btn-outline no-underline">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-right relative flex items-center justify-center min-h-[40vh] sm:min-h-[50vh] lg:min-h-0 order-2 lg:order-2 bg-[var(--portfolio-gray)] dark:bg-[var(--portfolio-bg2)] overflow-hidden min-w-0">
          <HeroCodeBlock />
        </div>
      </section>

      {/* Ticker — tools with official logos in brand colors (same custom logos as Skills page) */}
      <div className="ticker-strip">
        <div className="flex w-max animate-ticker items-center">
          {[...homeSkillHighlights, ...homeSkillHighlights].map((s, i) => {
            const overrideSrc = SKILL_LOGO_OVERRIDES[s.slug];
            const useBlendLighten = SKILL_LOGO_BLEND_LIGHTEN_SLUGS.has(s.slug);
            return (
              <span key={`${s.slug}-${i}`} className="ticker-item whitespace-nowrap flex items-center gap-2">
                {overrideSrc ? (
                  <img
                    src={overrideSrc}
                    alt={s.name}
                    width={22}
                    height={22}
                    className={`object-contain ${useBlendLighten ? "mix-blend-lighten" : ""}`}
                  />
                ) : (
                  <SkillIcon
                    slug={s.slug}
                    name={s.name}
                    size={22}
                    color={SKILL_BRAND_COLORS[s.slug]}
                  />
                )}
                <span>{s.name}</span>
                <span className="opacity-45 ml-4">◆</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Stats — matrix background + single transparent card with Redis, AWS, Docker, Supabase */}
      <div className="stats-strip-wrap relative overflow-visible border-t-4 border-[var(--portfolio-blue)]">
        <MatrixBackground />
        <div className="stats-strip-card">
          {STATS_SOFTWARE.map((stat) => {
            const overrideSrc = SKILL_LOGO_OVERRIDES[stat.slug];
            const useBlendLighten = SKILL_LOGO_BLEND_LIGHTEN_SLUGS.has(stat.slug);
            const isAws = stat.slug === "amazonaws";
            return (
              <div key={stat.slug} className="stats-strip-card-item">
                <div className="stat-icon-wrap">
                  {overrideSrc ? (
                    isAws ? (
                      <>
                        <img
                          src={overrideSrc}
                          alt={stat.label}
                          width={64}
                          height={64}
                          className={`relative z-10 object-contain dark:hidden ${useBlendLighten ? "mix-blend-lighten" : ""}`}
                        />
                        <img
                          src={overrideSrc}
                          alt={stat.label}
                          width={64}
                          height={64}
                          style={{ filter: "invert(1) brightness(1.6)" }}
                          className={`relative z-10 object-contain hidden dark:block ${useBlendLighten ? "mix-blend-lighten" : ""}`}
                        />
                      </>
                    ) : (
                      <img
                        src={overrideSrc}
                        alt={stat.label}
                        width={64}
                        height={64}
                        className={`relative z-10 object-contain ${useBlendLighten ? "mix-blend-lighten" : ""}`}
                      />
                    )
                  ) : isAws ? (
                    <>
                      <SkillIcon
                        slug={stat.slug}
                        name={stat.label}
                        size={64}
                        color="#000000"
                        className="relative z-10 dark:hidden"
                      />
                      <SkillIcon
                        slug={stat.slug}
                        name={stat.label}
                        size={64}
                        color="#ffffff"
                        className="relative z-10 hidden dark:block"
                      />
                    </>
                  ) : (
                    <SkillIcon
                      slug={stat.slug}
                      name={stat.label}
                      size={64}
                      color={stat.color}
                      className="relative z-10"
                    />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t-4 border-[var(--portfolio-blue)]" aria-hidden />

      {/* Skills — exact HTML: padding 120px 48px, section-header margin 64px, skill-card 40px 36px */}
      <section className="skills py-12 sm:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-12 bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] overflow-hidden">
        <div className="w-full">
          <div className="section-header sr-reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 flex-wrap">
            <div>
              <p className="section-label">What I Do</p>
              <h2 className="exp-title">
                My <span>Tech Stack</span>
              </h2>
            </div>
          </div>
          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded overflow-hidden bg-black/10 dark:bg-white/5">
            {SKILL_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className={`sr-reveal skill-card cursor-hover relative group skill-card-${card.bar}`}
                data-sr-delay={String(60 * (idx % 6))}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] transition-all duration-400 origin-left"
                  style={{
                    backgroundColor: card.bar === "b" ? "var(--portfolio-blue)" : card.bar === "r" ? "var(--portfolio-red)" : "var(--portfolio-green)",
                  }}
                />
                <SkillBlockIcon
                  name={card.title}
                  size={32}
                  className="block mb-4"
                  color={
                    card.bar === "b"
                      ? "var(--portfolio-blue)"
                      : card.bar === "r"
                        ? "var(--portfolio-red)"
                        : "var(--portfolio-green)"
                  }
                />
                <h3 className="skill-name">{card.title}</h3>
                <p className="skill-desc">{card.description}</p>
                <div className="skill-tags flex flex-wrap gap-1.5 mt-4">
                  {card.tags.map((tag) => (
                    <span key={tag} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 sm:mt-12">
            <Link href="/skills" className="sr-reveal btn-outline no-underline" data-sr-delay="120">
              More
            </Link>
          </div>
        </div>
      </section>

      <div className="border-t-4 border-[var(--portfolio-red)]" aria-hidden />

      {/* Education — full design (banner, accordion, rings, cert ticker) */}
      <section className="education-home-section bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] overflow-hidden">
        <EducationSection />
      </section>

      <div className="border-t-4 border-[var(--portfolio-blue)]" aria-hidden />

      {/* Projects — exact HTML: padding 60px 48px, proj-title 1.8rem, proj-desc 0.9rem max-w 380px */}
      <section className="projects bg-[var(--portfolio-white)] dark:bg-[var(--portfolio-black)] pb-12 sm:pb-16 lg:pb-[96px] overflow-hidden">
        <div className="projects-header section-header sr-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-16">
          <div>
            <p className="section-label">Things I&apos;ve Built</p>
            <h2 className="section-title">
              Things I&apos;ve <span className="accent-blue">Built</span>
            </h2>
          </div>
        </div>
        <div className="project-list grid grid-cols-1 sm:grid-cols-2">
          {academicProjects.slice(0, 2).map((project, idx) => {
            const bar = ["b", "r", "g"][idx % 3] as "b" | "r" | "g";
            return (
            <Link
              key={project.title}
              href="/projects"
              className={`sr-reveal project-item project-item-${bar} block border-b border-r border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 lg:p-12 sm:even:border-r-0 cursor-hover hover:bg-[var(--portfolio-gray)] dark:hover:bg-white/5 transition-colors min-w-0`}
              data-sr-delay={String(50 * (idx % 8))}
            >
              <p className="proj-num">{String(idx + 1).padStart(2, "0")} / PROJECT</p>
              <h3 className="proj-title">
                {project.title.split(" ")[0]}
                <span> {project.title.split(" ").slice(1).join(" ")}</span>
              </h3>
              <p className="proj-desc">{project.description}</p>
              <div className="proj-tech flex flex-wrap gap-2 mb-7">
                {project.tags.slice(0, 4).map((tag, i) => {
                  const isDark = i % 4 === 2;
                  return (
                    <span
                      key={tag}
                      className={`proj-badge ${isDark ? "proj-badge-dark" : ""}`}
                      style={isDark ? undefined : {
                        backgroundColor: i % 4 === 0 ? "var(--portfolio-blue)" : i % 4 === 1 ? "var(--portfolio-green)" : "var(--portfolio-red)",
                      }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <span className="proj-arrow">↗</span>
              <span className="proj-number-bg">{String(idx + 1).padStart(2, "0")}</span>
            </Link>
          );
          })}
        </div>

        <div className="flex justify-center mt-10 sm:mt-12">
          <Link href="/projects" className="sr-reveal btn-outline no-underline" data-sr-delay="120">
            More
          </Link>
        </div>
      </section>

      <div className="border-t-4 border-[var(--portfolio-red)]" aria-hidden />

      {/* Experience — reused section from experience page */}
      <section className="experience-home-section bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] pb-12 sm:pb-16 lg:pb-[120px] overflow-hidden">
        <ExperienceSection />
      </section>

      <div className="border-t-4 border-[var(--portfolio-green)]" aria-hidden />

      {/* About — exact HTML: padding 100px 64px / 80px 48px, about-title clamp(2rem 4vw 3.5rem) */}
      <section className="about grid grid-cols-1 lg:grid-cols-2 min-h-0 lg:min-h-[80vh] bg-[var(--portfolio-black)] overflow-hidden">
        <div className="about-left py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.07] min-w-0">
          <p className="section-label mb-4" style={{ color: "var(--portfolio-green)" }}>The Developer</p>
          <h2 className="about-title font-display font-extrabold text-white mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}>
            Code is my
            <br />
            <span style={{ color: "var(--portfolio-blue)" }}>craft</span>,
            <br />
            not just my job
          </h2>
          <div className="about-body text-base font-light leading-relaxed mb-12 space-y-4" style={{ color: "rgba(255,255,255,0.55)" }}>
            <p>
              My name is <strong className="text-white font-extrabold">{profile.shortName}</strong>. I am currently pursuing a Master’s degree in Computer Science, where I am deepening my understanding of algorithms, data structures, distributed systems, databases, cloud computing, computer architecture, and intelligent systems. My approach to technology is rooted in strong fundamentals and a desire to understand how systems behave at both a micro and macro level.
            </p>
            <p>
              I enjoy working on complex problems that require structured reasoning, optimization, and careful architectural thinking. Rather than focusing only on surface-level functionality, I am interested in how systems scale, how they maintain reliability under load, and how design decisions influence long-term maintainability. Performance awareness, clarity in implementation, and clean abstractions are principles that guide my work.
            </p>
            <p>
              Curiosity drives my learning process. I regularly explore concepts related to system efficiency, intelligent computing, data modeling, and infrastructure design to better understand how different layers of technology integrate and operate cohesively. I believe that impactful engineering comes from combining theoretical depth with practical execution.
            </p>
            <p>
              Beyond academics, sports have played a significant role in shaping my mindset. Competitive football and officiating have strengthened my discipline, composure under pressure, and decision-making ability — qualities that naturally translate into collaborative and high-responsibility environments.
            </p>
            <p>
              At my core, I am committed to continuous growth and technical excellence. I aim to build systems that are thoughtfully engineered, efficient by design, and capable of operating at a high standard of reliability and performance.
            </p>
          </div>
          <div className="about-perks flex flex-col gap-5">
            {[
              { dot: "var(--portfolio-blue)", title: "Curiosity-Driven", text: "I genuinely enjoy understanding how things work at a deeper level and constantly push myself to learn beyond the surface." },
              { dot: "var(--portfolio-red)", title: "Thoughtful Builder", text: "I focus on creating solutions that are structured, efficient, and designed to last — not just quick fixes." },
              { dot: "var(--portfolio-green)", title: "Growth-Oriented", text: "I value discipline, consistency, and continuous improvement, always aiming to become better than I was yesterday." },
            ].map((perk) => (
              <div key={perk.title} className="perk flex gap-4">
                <span className="perk-dot w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: perk.dot }} />
                <p className="perk-text text-sm font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  <strong className="text-white font-semibold font-display">{perk.title}</strong> — {perk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-right py-10 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-12 flex items-center bg-[#0d0d0d] min-w-0">
          <AboutCodeBlock />
        </div>
      </section>

      <div className="border-t-4 border-[var(--portfolio-blue)]" aria-hidden />

      {/* Contact — exact HTML: padding 120px 48px, gap 80px, contact-title clamp(3rem 6vw 5.5rem) */}
      <section className="contact border-t-4 border-[var(--portfolio-blue)] py-12 sm:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] overflow-hidden">
        <div className="sr-reveal">
          <p className="section-label text-[var(--portfolio-mid-gray)] mb-3">Get In Touch</p>
          <h2 className="contact-title">
            LET&apos;S
            <br />
            <span className="line-blue">BUILD</span>
            <br />
            <span className="line-red">TOGETHER</span>
          </h2>
          <div className="contact-links flex flex-col gap-4">
            <a href={`mailto:${profile.email}`} className="contact-link no-underline">
              <span className="cl-icon cl-icon-img">
                <img src="/logos/icloud.png" alt="" aria-hidden width={24} height={24} className="object-contain" />
              </span>
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link no-underline">
              <span className="cl-icon">in</span>
              linkedin.com/in/{profile.linkedinHandle}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link no-underline">
              <span className="cl-icon">gh</span>
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline no-underline"
            >
              View Resume
            </a>
          </div>
        </div>
        <div className="sr-reveal" data-sr-delay="120">
          <ContactForm
          nameId="home-contact-name"
          emailId="home-contact-email"
          messageId="home-contact-message"
          />
        </div>
      </section>
    </div>
  );
}
