import SkillsSection from "@/components/SkillsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Dylan Butelho",
  description: "My tech stack — Cloud, DevOps, AI/ML, databases, tools, full-stack.",
};

export default function SkillsPage() {
  return (
    <div className="page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] overflow-x-hidden">
      <SkillsSection />
    </div>
  );
}
