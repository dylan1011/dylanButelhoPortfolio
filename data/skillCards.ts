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
      "Cloud infrastructure for scalable AI and full-stack systems across AWS, GCP, Cloudflare, and containerized deployments.",
    tags: ["AWS", "GCP", "Cloudflare", "Docker"],
    bar: "b",
  },
  {
    title: "DevOps",
    description:
      "Infrastructure as code, CI/CD, observability, and production deployment workflows built around reliability.",
    tags: ["Terraform", "Kubernetes", "GitHub Actions", "Jenkins"],
    bar: "r",
  },
  {
    title: "AI/ML",
    description:
      "Agentic AI, RAG, model training, evaluation, and ML pipelines using modern LLM and deep learning tooling.",
    tags: ["LangGraph", "LangChain", "PyTorch", "TensorFlow"],
    bar: "g",
  },
  {
    title: "Databases",
    description:
      "Relational, NoSQL, cache, and vector-style storage for production apps, retrieval systems, and analytics.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"],
    bar: "r",
  },
  {
    title: "Tools",
    description:
      "Developer, analytics, design, and automation tools used across engineering, data, and product workflows.",
    tags: ["Cursor AI", "Codex", "Git", "Jira"],
    bar: "b",
  },
  {
    title: "Full-Stack",
    description:
      "End-to-end applications with React, MERN, Django, Flask, FastAPI, REST APIs, and async backend services.",
    tags: ["React", "Node.js", "FastAPI", "Django"],
    bar: "g",
  },
] as const;
