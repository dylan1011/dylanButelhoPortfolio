import Link from "next/link";
import { academicProjects } from "@/data/resume";

export default function ProjectsPage() {
  return (
    <div className="page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)]">
      <section className="projects pb-12 sm:pb-16 lg:pb-[120px] overflow-hidden">
        <div className="projects-header section-header sr-reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-16">
          <div>
            <p className="section-label">Things I&apos;ve Built</p>
            <h1 className="section-title">
              Things I&apos;ve <span className="accent-blue">Built</span>
            </h1>
          </div>
        </div>
        <div className="project-list grid grid-cols-1 sm:grid-cols-2 min-w-0">
          {academicProjects.map((project, idx) => {
            const bar = ["b", "r", "g"][idx % 3] as "b" | "r" | "g";
            return (
            <Link
              key={project.title}
              href="/projects"
              className={`sr-reveal project-item project-item-${bar} block border-b border-r border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8 lg:p-12 sm:even:border-r-0 cursor-hover hover:bg-[var(--portfolio-gray)] dark:hover:bg-white/5 transition-colors min-w-0`}
              data-sr-delay={String(50 * (idx % 8))}
            >
              <p className="proj-num">{String(idx + 1).padStart(2, "0")} / PROJECT</p>
              <h2 className="proj-title">
                {project.title.split(" ")[0]}
                <span> {project.title.split(" ").slice(1).join(" ")}</span>
              </h2>
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
        <p className="mt-12 px-4 sm:px-6 lg:px-12">
          <Link href="/" className="sr-reveal font-mono text-[0.72rem] font-bold tracking-wide text-[var(--portfolio-blue)] hover:underline no-underline" data-sr-delay="100">
            ← Back to home
          </Link>
        </p>
      </section>
    </div>
  );
}
