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
      "Architected and iterated on autonomous AI agents using LangGraph and LangChain capable of navigating complex, multi-step environments for document retrieval, query routing, and intelligent response generation across 4 client projects, shipping 6 production features with an 88% first-pass code review acceptance rate.",
      "Engineered and optimized prompt engineering pipelines and multi-agent coordination systems that power core application features, integrating LLM APIs (OpenAI, Anthropic) with a focus on response quality and reliability, improving AI output quality by 22% across 3 evaluation cycles.",
      "Spearheaded RAG system development for contextual document retrieval, partnering with product and engineering to turn user requirements into robust AI-driven features deployed with FastAPI and React, maintaining 99.8% service uptime and reducing average API latency by 35% through query optimization and Redis caching.",
      "Maintained strong software engineering fundamentals through RESTful API development, async programming with Python, Git-based workflows, automated testing with pytest achieving 78% coverage, Docker and Kubernetes deployments on AWS with Terraform IaC, and CI/CD pipelines with Jenkins and GitHub Actions on 2-week agile cycles, reducing deployment cycle time from 90 minutes to under 20 minutes.",
    ],
    stack: ["Python", "LangGraph", "LangChain", "FastAPI", "React", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Vervali Systems",
    location: "Mumbai, India",
    period: "Jan 2024 – Jul 2024",
    logoUrl: "/logos/vervali.png",
    bullets: [
      "Engineered AI-integrated full-stack applications and automated data pipelines using Python, JavaScript, and TypeScript for a platform with 10,000 active users, processing 50,000+ records daily through Docker-containerized services that reduced deployment cycles by 40%.",
      "Partnered with product and engineering teams to turn user requirements into delivered features, improving system performance by 35%, maintaining 99.9% data integrity across production systems, and configuring Prometheus and Grafana observability through 6 agile sprint cycles with Jenkins CI/CD.",
    ],
    stack: ["Python", "JavaScript", "TypeScript", "Docker", "Jenkins", "Grafana"],
  },
];
