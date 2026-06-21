export const updatedEducation = [
  {
    degree: "M.S. Computer Science",
    school: "Syracuse University",
    location: "Syracuse, NY",
    period: "August 2024 - May 2026",
    logoUrl: "/logos/syracuse-university.png",
    coursework:
      "Distributed Systems, Cloud Computing, AI Systems, Machine Learning, Algorithm Design, Computer Networks.",
    highlights: [
      "Graduate focus on high-availability systems, AI systems, cloud infrastructure, and distributed computing.",
      "Coursework emphasizes reliability, machine learning, algorithm design, and networked systems.",
    ],
  },
  {
    degree: "B.E. Information Technology",
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "August 2019 - May 2023",
    logoUrl: "/logos/university-of-mumbai.png",
    coursework:
      "Information technology foundation across software engineering, computer networks, databases, cloud systems, and applied computing.",
    highlights: [
      "Undergraduate foundation in software development, networks, databases, and cloud-oriented systems.",
    ],
  },
];

export const updatedCertifications = [
  { name: "AWS Certified AI Practitioner (AIF-C01)", issuer: "Amazon Web Services", year: "" },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: "In Progress" },
  { name: "Cisco Python Essentials I & II", issuer: "Cisco Networking Academy", year: "" },
  { name: "Cisco Data Science Essentials with Python", issuer: "Cisco Networking Academy", year: "" },
];

export const updatedExperience = [
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
