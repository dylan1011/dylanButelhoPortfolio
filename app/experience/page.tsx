import ExperienceSection from "@/components/ExperienceSection";
import { updatedExperience } from "@/data/resumePageContent";

export default function ExperiencePage() {
  return (
    <div className="page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] min-h-screen pt-4 lg:pt-6">
      <ExperienceSection experienceItems={updatedExperience} />
    </div>
  );
}
