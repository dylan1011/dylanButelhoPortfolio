/**
 * Custom logo image overrides for skills (used on Skills page and homepage ticker).
 * Keys are skill slugs; values are paths under /public (e.g. /logos/tableau.png).
 */
export const SKILL_LOGO_OVERRIDES: Record<string, string> = {
  amazonaws: "/logos/aws.png",
  anthropic: "/logos/anthropic.png",
  "claude-code": "/logos/claude-code.png",
  openai: "/logos/openai.png",
  huggingface: "/logos/huggingface.png",
  opencv: "/logos/opencv.png",
  googlecloud: "/logos/google-cloud.png",
  autodesk: "/logos/autocad.png",
  cursor: "/logos/cursor.png",
  codex: "/logos/codex.png",
  antigravity: "/logos/antigravity.png",
  powerbi: "/logos/powerbi.png",
  scikitlearn: "/logos/scikit-learn.png",
  opentelemetry: "/logos/opentelemetry.png",
  canva: "/logos/canva.png",
  microsoftexcel: "/logos/excel.png",
  jira: "/logos/jira.png",
  matplotlib: "/logos/matplotlib.svg",
};

/** Slugs that use a dark-background logo and need mix-blend-lighten to appear transparent. */
export const SKILL_LOGO_BLEND_LIGHTEN_SLUGS = new Set<string>();
