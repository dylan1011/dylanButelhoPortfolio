/**
 * My Tech Stack cards — shared between home page and skills page.
 * Same titles, descriptions, tags, and bar colors.
 */

/** Explicit hex for icon color so icons stay visible on mobile/responsive (no CSS variable resolution issues). */
export const SKILL_CARD_ICON_COLORS: Record<"b" | "r" | "g", string> = {
  b: "#0057FF",
  r: "#FF1F1F",
  g: "#00C853",
} as const;

export const SKILL_CARDS = [
  {
    title: "Cloud",
    description:
      "Scalable infrastructure, serverless, and managed services. From AWS to GCP — design for reliability and cost.",
    tags: ["AWS", "GCP", "Serverless", "Containers"],
    bar: "b",
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipelines, infrastructure as code, and zero-downtime deployments. Automate everything.",
    tags: ["GitHub Actions", "Terraform", "Kubernetes", "Docker"],
    bar: "r",
  },
  {
    title: "AI/ML",
    description:
      "TensorFlow, PyTorch, data pipelines and models. From training to deployment.",
    tags: ["TensorFlow", "PyTorch", "Pandas"],
    bar: "g",
  },
  {
    title: "Databases",
    description:
      "Efficient schemas, query optimization, and the right database for each use case — relational to NoSQL.",
    tags: ["PostgreSQL", "MongoDB", "MySQL"],
    bar: "r",
  },
  {
    title: "Tools",
    description:
      "Git, CI/CD, cloud and local dev tooling. Zero-downtime production environments.",
    tags: ["Git", "GitHub", "Docker"],
    bar: "b",
  },
  {
    title: "Full-Stack",
    description:
      "End-to-end web apps from design to deploy. Clean architecture and user experience.",
    tags: ["Flask", "Express", "REST"],
    bar: "g",
  },
] as const;
