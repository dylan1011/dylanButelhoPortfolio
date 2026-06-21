export const profile = {
  name: "Dylan Clement Butelho",
  shortName: "Dylan Butelho",
  tagline: "Full-stack, ML, and scalable systems.",
  subtitle:
    "Computer Science graduate with a master's degree from Syracuse University, experienced in full-stack development, machine learning, scalable systems, Python, JavaScript, and data-driven applications on AWS.",
  location: "New York, USA",
  phone: "+1 (315) 491-1371",
  email: "dylanbutelho@gmail.com",
  linkedin: "https://linkedin.com/in/dylanbutelho",
  linkedinHandle: "dylanbutelho",
  github: "https://github.com/dylanbutelho",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Syracuse University",
    location: "Syracuse, NY",
    period: "August 2024 – May 2026 (Expected)",
    logoUrl: "/logos/syracuse-university.png",
    coursework:
      "Data Structures & Algorithms (DSA), Natural Language Processing (NLP), Computer Architecture, Operating Systems, Artificial Intelligence (AI), Machine Learning (ML), Database Management Systems (DBMS), Cryptography & Network Security, Automata & Formal Methods, Agentic AI.",
    highlights: [
      "Graduate focus on algorithms, AI/ML, systems, and secure software.",
      "Coursework spans NLP, ML, DBMS, cryptography, and agentic AI.",
    ],
  },
  {
    degree: "B.E. Information Technology",
    school: "University of Mumbai, St. Francis Institute of Technology",
    location: "Mumbai, India",
    period: "August 2019 – May 2023",
    logoUrl: "/logos/university-of-mumbai.png",
    coursework:
      "Computer Networks (CN), Network Security, DevOps, Data Mining & Business Intelligence (BI), Big Data Analytics, Cloud Computing, Blockchain, Internet of Things (IoT), Robotics.",
    highlights: [
      "Undergraduate foundation in networks, security, cloud, data, and IoT.",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "iConsult Collaborative",
    location: "Syracuse, NY",
    period: "Jan 2026 – Present",
    logoUrl: "/logos/iconsult-syracuse.png",
    bullets: [
      "Built and maintained high-availability backend services in Python and Go that integrate internal tools with broader platform ecosystems; used Terraform to manage serverless infrastructure on AWS and keep reliability tooling as resilient as the services it monitors.",
      "Built AI agents using LangChain and LangGraph that ingest system telemetry and surface real-time summaries and root-cause hypotheses for on-call engineers, cutting average time to identify incident cause from around 25 minutes to under 10 minutes across 3 client environments.",
      "Used Claude Code and GitHub Copilot daily to accelerate code reviews, generate test coverage for new reliability services, and replace roughly 4 hours per week of repetitive manual tasks with automated or AI-assisted workflows; verified all AI-generated code against security and quality standards before merging.",
      "Implemented prompt engineering workflows to assist in debugging complex system failures, generating structured runbooks, and producing technical documentation that the wider team actually reads and uses.",
    ],
    stack: ["Python", "AWS", "Terraform", "LangChain", "LangGraph"],
  },
  {
    role: "Software Engineer",
    company: "Vervali Systems",
    location: "Mumbai, India",
    period: "Jan 2024 – Jul 2024",
    logoUrl: "/logos/vervali.png",
    bullets: [
      "Wrote production Python and Go services for a distributed SaaS platform with 10,000 active users on AWS; used Terraform for infrastructure as code across serverless and containerized workloads and kept deployments reliable through automated testing and CI/CD pipelines that cut release cycle time from about 2 hours to under 20 minutes.",
      "Built monitoring and alerting systems that caught around 35 production issues before users reported them over 6 months, and worked with senior engineers to implement automated root-cause analysis that reduced mean time to resolution by about 30%.",
      "Applied LLM-based tooling to automate log analysis and incident triage, which freed the on-call team from manually scanning logs during incidents and made post-mortems faster to write; used Git throughout with consistent branching practices and code reviews on every merge.",
    ],
    stack: ["Python", "AWS", "Terraform", "CI/CD", "Monitoring"],
  },
];

export const academicProjects = [
  {
    title: "Orange Bot — AI Agent for Real-Time Telemetry and Incident Context",
    description:
      "Built a multi-agent system in Python and Go that ingests telemetry data and provides on-call engineers with real-time summaries, historical context, and automated root-cause hypotheses; uses LangGraph for agent orchestration, Terraform for serverless infrastructure on AWS, and Claude Code throughout development to accelerate code quality and test coverage. Applied prompt engineering to help the agent generate structured incident summaries and triage recommendations from raw log data; validated all AI-generated outputs against accuracy and reliability standards before the system was put into use in a live environment.",
    tags: ["Python", "Go", "LangGraph", "LangChain", "AWS", "Terraform", "Docker", "Prometheus", "Claude Code"],
    icon: "chart",
  },
  {
    title: "H1B JobPilot — High-Availability AI Services Platform (In Progress)",
    description:
      "Building a set of high-availability AI services in Python and Go managed entirely through Terraform on AWS, with Lambda functions, SQS queues, and CloudWatch monitoring to keep the system resilient; uses Claude Code and GitHub Copilot for pair programming and automated test generation, and validates all AI-generated infrastructure outputs before deployment.",
    tags: ["Python", "Go", "Terraform", "AWS Lambda", "SQS", "CloudWatch", "Docker", "Claude Code", "GitHub Copilot"],
    icon: "briefcase",
  },
  {
    title: "Environmental IoT Reliability Pipeline",
    description:
      "Built a real-time reliability monitoring pipeline in Python and Go on Linux that collects sensor telemetry, detects anomalies automatically, and surfaces alerts before they become incidents; managed all infrastructure with Terraform on AWS and built Grafana dashboards that give the team instant visibility into system health without digging through raw logs.",
    tags: ["Python", "Go", "AWS", "Terraform", "Prometheus", "Grafana", "Docker", "Linux", "Git"],
    icon: "chart",
  },
];

/** Certifications for education page ticker. */
export const certifications: Array<{ name: string; issuer: string; year: string }> = [
  { name: "AWS Certified AI Practitioner (AIF-C01)", issuer: "Amazon Web Services", year: "" },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "In Progress" },
  { name: "Cisco Python Essentials I & II", issuer: "Cisco Networking Academy", year: "" },
  { name: "Cisco Data Science Essentials with Python", issuer: "Cisco Networking Academy", year: "" },
];

// Skill slug = simpleicons.org slug for logo (cdn.simpleicons.org/slug)
export const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "java" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "JavaScript", slug: "javascript" },
      { name: "SQL", slug: "sqlite" },
    ],
  },
  {
    title: "Web & Backend",
    skills: [
      { name: "Flask", slug: "flask" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Django", slug: "django" },
      { name: "Express.js", slug: "express" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "React", slug: "react" },
      { name: "React Native", slug: "react" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Celery", slug: "celery" },
      { name: "GraphQL", slug: "graphql" },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Scikit-Learn", slug: "scikitlearn" },
      { name: "Matplotlib", slug: "matplotlib" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "LangChain", slug: "langchain" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "SQL Server", slug: "microsoftsqlserver" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Supabase", slug: "supabase" },
      { name: "Redis", slug: "redis" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", slug: "amazonaws" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "n8n", slug: "n8n" },
      { name: "Shopify", slug: "shopify" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Wix", slug: "wix" },
      { name: "Tableau", slug: "tableau" },
      { name: "Power BI", slug: "powerbi" },
      { name: "Excel", slug: "microsoftexcel" },
      { name: "Figma", slug: "figma" },
      { name: "Canva", slug: "canva" },
    ],
  },
];

// For home page ticker strip — all skills with logos (from skillCategories, order preserved)
export const homeSkillHighlights = (() => {
  const seen = new Set<string>();
  return skillCategories
    .flatMap((cat) =>
      cat.skills.filter((s) => {
        if (seen.has(s.name)) return false;
        seen.add(s.name);
        return true;
      })
    )
    .map((s) => ({ name: s.name, slug: s.slug }));
})();

/**
 * Core Proficiencies % for education page — aligned with My Tech Stack cards.
 */
export const coreProficiencyPct: Record<string, number> = {
  "Cloud": 76,
  "DevOps": 80,
  "AI/ML": 94,
  "Databases": 90,
  "Tools": 88,
  "Full-Stack": 95,
};
