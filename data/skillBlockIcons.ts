/**
 * Mapping from skill category title to SkillBlockIcon name.
 * Kept in a separate file so Server Components (e.g. app/skills/page.tsx)
 * can import it without pulling in "use client" exports.
 */
export const SKILLS_PAGE_ICON_NAMES: Record<string, string> = {
  "Programming": "Programming",
  "Web & Backend": "Web & Backend",
  "Data Science & ML": "Data Science & ML",
  "Databases": "Databases",
  "Tools & Platforms": "Tools & Platforms",
};
