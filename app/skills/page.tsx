/* eslint-disable @next/next/no-img-element */
import { skillCategories } from "@/data/resume";
import { SKILL_CARDS, SKILL_CARD_ICON_COLORS } from "@/data/skillCards";
import { SKILL_BRAND_COLORS } from "@/data/skillColors";
import { SKILL_LOGO_OVERRIDES, SKILL_LOGO_BLEND_LIGHTEN_SLUGS } from "@/data/skillLogoOverrides";
import SkillIcon from "@/components/SkillIcon";
import SkillBlockIcon from "@/components/SkillBlockIcon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Dylan Butelho",
  description: "My tech stack — Cloud, DevOps, AI/ML, databases, tools, full-stack.",
};

// Flatten all skills for the "All skills" list (one entry per skill name, order preserved)
const allSkillsList = (() => {
  const seen = new Set<string>();
  return skillCategories.flatMap((cat) =>
    cat.skills.filter((s) => {
      if (seen.has(s.name)) return false;
      seen.add(s.name);
      return true;
    })
  );
})();

export default function SkillsPage() {
  return (
    <div className="page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] overflow-x-hidden">
      <section className="skills pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-[120px] px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="w-full">
          <div className="section-header sr-reveal flex flex-col lg:flex-row gap-8 flex-wrap items-start lg:items-end lg:justify-between">
            <div>
              <p className="section-label">What I Do</p>
              <h1 className="exp-title">
                My <span>Tech Stack</span>
              </h1>
            </div>
          </div>

          <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px] rounded overflow-hidden bg-black/10 dark:bg-white/5 min-w-0">
            {SKILL_CARDS.map((card, idx) => (
              <div
                key={card.title}
                className={`sr-reveal skill-card cursor-hover relative group skill-card-${card.bar}`}
                data-sr-delay={String(60 * (idx % 6))}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0 group-hover:h-[3px] transition-all duration-400 origin-left"
                  style={{
                    backgroundColor:
                      card.bar === "b"
                        ? "var(--portfolio-blue)"
                        : card.bar === "r"
                          ? "var(--portfolio-red)"
                          : "var(--portfolio-green)",
                  }}
                />
                <SkillBlockIcon
                  name={card.title}
                  size={32}
                  className="block mb-4"
                  color={SKILL_CARD_ICON_COLORS[card.bar]}
                />
                <h2 className="skill-name">{card.title}</h2>
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

          {/* All skills with logos */}
          <div className="sr-reveal mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-black/[0.08] dark:border-white/[0.08]" data-sr-delay="80">
            <p className="section-label mb-2">Full list</p>
            <h2 className="section-title text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-10">
              All <span className="accent-blue">Skills</span>
            </h2>
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-7 list-none p-0 m-0">
              {allSkillsList.map((skill) => {
                const brandColor = SKILL_BRAND_COLORS[skill.slug];
                const lower = brandColor?.toLowerCase();
                const isBlackLogo =
                  lower === "#000000" || lower === "#000" || lower === "#181717";
                const isWhiteLogo = lower === "#ffffff" || lower === "#fff";
                const lightColor = isBlackLogo || isWhiteLogo ? "#000000" : brandColor;
                const darkColor = isBlackLogo || isWhiteLogo ? "#ffffff" : brandColor;
                const overrideSrc = SKILL_LOGO_OVERRIDES[skill.slug];
                const isTableauLogo = SKILL_LOGO_BLEND_LIGHTEN_SLUGS.has(skill.slug);

                return (
                  <li
                    key={skill.name}
                    className="sr-reveal group flex flex-col items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 min-w-0"
                  >
                    <div className="flex items-center justify-center">
                      {overrideSrc ? (
                        <>
                          <img
                            src={overrideSrc}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className={`relative z-10 origin-bottom will-change-transform transition-transform duration-200 group-hover:scale-[1.85] group-hover:-translate-y-1 dark:hidden object-contain ${isTableauLogo ? "mix-blend-lighten" : ""}`}
                          />
                          <img
                            src={overrideSrc}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className={`relative z-10 origin-bottom will-change-transform transition-transform duration-200 group-hover:scale-[1.85] group-hover:-translate-y-1 hidden dark:block object-contain ${isTableauLogo ? "mix-blend-lighten" : ""}`}
                          />
                        </>
                      ) : (
                        <>
                          {/* Render theme-specific colors so black/white logos flip correctly */}
                          <SkillIcon
                            slug={skill.slug}
                            name={skill.name}
                            size={40}
                            color={lightColor}
                            className="relative z-10 origin-bottom will-change-transform transition-transform duration-200 group-hover:scale-[1.85] group-hover:-translate-y-1 dark:hidden"
                          />
                          <SkillIcon
                            slug={skill.slug}
                            name={skill.name}
                            size={40}
                            color={darkColor}
                            className="relative z-10 origin-bottom will-change-transform transition-transform duration-200 group-hover:scale-[1.85] group-hover:-translate-y-1 hidden dark:block"
                          />
                        </>
                      )}
                    </div>
                    <span className="apple-font text-[0.7rem] sm:text-xs font-bold text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] text-center">
                      {skill.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
