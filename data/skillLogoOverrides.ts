/**
 * Custom logo image overrides for skills (used on Skills page and homepage ticker).
 * Keys are skill slugs; values are paths under /public (e.g. /logos/tableau.png).
 */
export const SKILL_LOGO_OVERRIDES: Record<string, string> = {
  java: "/logos/java.png",
  amazonaws: "/logos/aws.png",
  tableau: "/logos/tableau.png",
  powerbi: "/logos/powerbi.png",
  microsoftexcel: "/logos/excel.png",
  figma: "/logos/figma.png",
  canva: "/logos/canva.png",
};

/** Slugs that use a dark-background logo and need mix-blend-lighten to appear transparent. */
export const SKILL_LOGO_BLEND_LIGHTEN_SLUGS = new Set(["tableau"]);
