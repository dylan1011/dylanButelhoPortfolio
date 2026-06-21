import { profile } from "@/data/resume";
import Link from "next/link";
import AboutCodeBlock from "@/components/AboutCodeBlock";

export default function AboutPage() {
  return (
    <div className="about-page-wrap min-h-screen">
      <div className="about grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="about-left py-12 lg:py-16 px-6 lg:px-16 border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-center">
          <p className="section-label mb-4" style={{ color: "var(--portfolio-green)" }}>
            The Developer
          </p>
          <h1
            className="about-title font-display font-extrabold text-white mb-8"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            Code is my
            <br />
            <span style={{ color: "var(--portfolio-blue)" }}>craft</span>,
            <br />
            not just my job
          </h1>
          <div
            className="about-body text-base font-light leading-relaxed mb-12 space-y-4"
            style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}
          >
            <p>
              I am a Computer Science graduate with a master&apos;s degree from Syracuse University, bringing experience in full-stack development, machine learning, and scalable systems. I am proficient in Python and JavaScript, with hands-on experience building data-driven applications on AWS. I specialize in designing efficient, well-structured systems with clean architecture and dependable execution across the full software lifecycle, from design through deployment.
            </p>
          </div>
          <div className="about-perks flex flex-col gap-5">
            {[
              { dot: "var(--portfolio-blue)", title: "Curiosity-Driven", text: "I genuinely enjoy understanding how things work at a deeper level and constantly push myself to learn beyond the surface." },
              { dot: "var(--portfolio-red)", title: "Thoughtful Builder", text: "I focus on creating solutions that are structured, efficient, and designed to last — not just quick fixes." },
              { dot: "var(--portfolio-green)", title: "Growth-Oriented", text: "I value discipline, consistency, and continuous improvement, always aiming to become better than I was yesterday." },
            ].map((perk) => (
              <div key={perk.title} className="perk flex gap-4">
                <span
                  className="perk-dot w-2 h-2 rounded-full shrink-0 mt-1.5"
                  style={{ backgroundColor: perk.dot }}
                />
                <p className="perk-text text-[0.9rem] font-light leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                  <strong className="text-white font-semibold font-display">{perk.title}</strong> — {perk.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/experience" className="btn-outline no-underline">
              View experience
            </Link>
            <Link href="/skills" className="btn-outline no-underline">
              See skills
            </Link>
            <Link href="/contact" className="btn-primary no-underline">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="about-right py-16 lg:py-20 px-6 lg:px-12 flex items-center bg-[#0d0d0d]">
          <AboutCodeBlock />
        </div>
      </div>
    </div>
  );
}
