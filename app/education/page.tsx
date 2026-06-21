"use client";

import EducationSection from "@/components/EducationSection";
import { updatedCertifications, updatedEducation } from "@/data/resumePageContent";

export default function EducationPage() {
  return (
    <div className="education-page page-wrap bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)] min-h-screen pt-4 lg:pt-6">
      <EducationSection
        constantOnMobile
        educationItems={updatedEducation}
        certificationItems={updatedCertifications}
      />
    </div>
  );
}
