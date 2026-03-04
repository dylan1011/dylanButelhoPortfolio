/**
 * Official brand colors (hex) for tools and software — used in stats strip and All skills list.
 * Slugs match Simple Icons / resume skill slugs.
 */
export const SKILL_BRAND_COLORS: Record<string, string> = {
  amazonaws: "#FF9900",
  docker: "#2496ED",
  nextdotjs: "#000000",
  mongodb: "#47A248",
  python: "#3776AB",
  openjdk: "#437291",
  c: "#A8B9CC",
  cplusplus: "#00599C",
  javascript: "#F7DF1E",
  sqlite: "#003B57",
  flask: "#000000",
  fastapi: "#009688",
  express: "#000000",
  nodedotjs: "#339933",
  react: "#61DAFB",
  typescript: "#3178C6",
  pandas: "#150458",
  numpy: "#013243",
  scikitlearn: "#F89939",
  pytorch: "#EE4C2C",
  tensorflow: "#FF6F00",
  mysql: "#4479A1",
  postgresql: "#4169E1",
  supabase: "#3ECF8E",
  git: "#F05032",
  github: "#181717",
  jenkins: "#D24939",
  kubernetes: "#326CE5",
  redis: "#DC382D",
  graphql: "#E10098",
  shopify: "#7AB55C",
  wordpress: "#21759B",
  wix: "#0C6EFC",
  tableau: "#E97627",
  powerbi: "#F2C811",
  microsoftexcel: "#217346",
  flutter: "#02569B",
  figma: "#F24E1E",
  canva: "#00C4CC",
  java: "#007396",
};

/** Brand color for a skill slug, or a neutral grey if unknown. */
export function getSkillColor(slug: string, darkMode = false): string {
  const color = SKILL_BRAND_COLORS[slug];
  if (color) return color;
  return darkMode ? "#94A3B8" : "#64748B";
}
