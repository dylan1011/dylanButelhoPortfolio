export const profile = {
  name: "Dylan Clement Butelho",
  shortName: "Dylan Butelho",
  tagline: "Full-stack, ML, and scalable systems.",
  subtitle:
    "Software Engineer and M.S. Computer Science graduate with hands-on experience designing, building, testing, and deploying scalable software systems across full-stack, backend, AI/ML, and cloud domains.",
  location: "United States (Open to Relocation)",
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

export const academicProjects = [
  {
    title: "OrangeBot — Multi-Agentic AI System",
    description:
      "Architected autonomous AI agents with specialized LangGraph agents for planning, task execution, and evaluation using ReAct reasoning, MCP tool-calling, and multi-hop retrieval for document ingestion, query routing, and response generation. Engineered RAG with ChromaDB via MCP, FastAPI REST APIs, React frontend, SQLite checkpointing, Mem0 long-term memory, and an evaluation pipeline with 500+ test cases that reduced agent error rates by 28%.",
    tags: ["Python", "LangGraph", "LangChain", "FastAPI", "React", "ChromaDB", "MCP", "RAG"],
    icon: "chart",
  },
  {
    title: "H1B JobPilot — AI Career Navigation Platform (In Progress)",
    description:
      "Architected an AI-powered career navigation platform with autonomous agents that ingest USCIS/DOL data and career platform sources for automated job matching, resume tailoring, cover letter generation, and document generation. Built LangChain candidate-job workflows, React UI, PostgreSQL data layer, Cloudflare R2 object storage, FastAPI backend, Docker containerization, GitHub Actions CI/CD, and AWS infrastructure.",
    tags: ["Python", "LangChain", "FastAPI", "React", "Docker", "AWS", "PostgreSQL", "Cloudflare R2"],
    icon: "briefcase",
  },
  {
    title: "LLM Alignment Lab — Multi-Strategy Training Framework",
    description:
      "Engineered 4 LLM training methods from scratch in PyTorch on SmolLM2-135M-Instruct: SFT, PPO, DPO, and GRPO. Built real training loops with gradient computation, loss optimization, reward modeling, preference optimization, group-based advantage estimation, and statistical evaluation, reducing model perplexity by 18% across BLEU, ROUGE, and perplexity benchmarks on 500 evaluation samples.",
    tags: ["Python", "PyTorch", "Hugging Face", "SFT", "PPO", "DPO", "GRPO"],
    icon: "chart",
  },
  {
    title: "ShopGraph — AI-Powered Product Discovery",
    description:
      "Architected a full-stack e-commerce application with a React frontend implementing collaborative filtering and Market Basket Analysis using Pearson Correlation Matrix for data-driven product discovery. Built personalized recommendations, association rule mining for cross-sell and upsell opportunities, Flask REST APIs, Pandas data processing, and SQL-backed storage for recommendation results and user interaction tracking.",
    tags: ["Python", "Flask", "React", "Pandas", "SQL", "Collaborative Filtering"],
    icon: "cart",
  },
  {
    title: "AeroSense — IoT Environmental Monitoring",
    description:
      "Engineered a real-time IoT monitoring system with C++ sensor data collection and a Python ML pipeline applying Random Forest classification at 94% accuracy and K-Means clustering to categorize air quality across 6 levels. Built Linux-based multi-threaded acquisition, Flask dashboards with Matplotlib, AWS EC2/S3 hosting, Prometheus metrics, Grafana monitoring, and preprocessing pipelines for raw sensor data.",
    tags: ["Python", "C++", "Flask", "Scikit-learn", "Matplotlib", "AWS", "Prometheus", "Grafana"],
    icon: "chart",
  },
  {
    title: "LeafScan — Deep Learning Diagnostic Engine",
    description:
      "Architected a CNN model trained on 54,000+ images across 38 plant disease classes achieving 96.5% accuracy with TensorFlow/Keras. Built OpenCV preprocessing for user-uploaded images, Flask real-time diagnostics, treatment guidance with confidence scores, and model evaluation using confusion matrix analysis, precision, and recall by class.",
    tags: ["Python", "TensorFlow", "OpenCV", "Flask", "CNN"],
    icon: "leaf",
  },
  {
    title: "E-Commerce Platform — MERN Full-Stack Application",
    description:
      "Engineered a full-stack MERN e-commerce application with JWT authentication, product catalog search and filtering, shopping cart management with real-time updates, and checkout workflow. Designed MongoDB schemas for products, users, orders, and carts; built Express.js REST APIs with authentication, validation, error handling, and rate limiting; and developed a responsive React frontend.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    icon: "cart",
  },
  {
    title: "Job Portal — MERN Full-Stack Recruitment Platform",
    description:
      "Architected a dual-interface MERN recruitment platform with company and job seeker dashboards, role-based access control, job posting, application review, candidate selection, job filtering, and application tracking. Designed MongoDB models with aggregation pipelines and Express.js APIs with JWT authentication, authorization, and input validation.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    icon: "briefcase",
  },
  {
    title: "Dating App — MERN Real-Time Matching Platform",
    description:
      "Engineered a MERN real-time matching application with filter-based user matching algorithms, WebSocket chat, MongoDB-backed user profiles, secure authentication, Socket.io bi-directional messaging, swipe-style interactions, notifications, and responsive design across devices.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    icon: "heart",
  },
  {
    title: "Student Classroom Management System",
    description:
      "Architected a Django web application for educational institutions managing attendance, academic progress, admissions, quizzes, examinations, lecture material, assignments, and teacher salary administration. Designed SQL schemas with Django ORM, complex reporting queries, and role-based dashboards for administrators, teachers, and students.",
    tags: ["Python", "Django", "HTML", "CSS", "SQL"],
    icon: "chart",
  },
  {
    title: "Blogging Platform — Django Content Management System",
    description:
      "Engineered a Django blogging platform for creating, editing, publishing, and browsing posts with image uploads. Built SQL-backed content management with Django ORM, authentication, CRUD operations, responsive HTML/CSS, SEO-friendly routing, pagination, category/tag filtering, and admin moderation.",
    tags: ["Python", "Django", "HTML", "CSS", "SQL"],
    icon: "briefcase",
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
    title: "AI Agents & LLMs",
    skills: [
      { name: "LangChain", slug: "langchain" },
      { name: "OpenAI API", slug: "openai" },
      { name: "Anthropic API", slug: "anthropic" },
      { name: "Hugging Face", slug: "huggingface" },
      { name: "Claude Code", slug: "claude-code" },
      { name: "Codex", slug: "codex" },
    ],
  },
  {
    title: "ML & Training",
    skills: [
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Scikit-Learn", slug: "scikitlearn" },
      { name: "OpenCV", slug: "opencv" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Matplotlib", slug: "matplotlib" },
    ],
  },
  {
    title: "Languages & APIs",
    skills: [
      { name: "Python", slug: "python" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Java", slug: "java" },
      { name: "Go", slug: "go" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "C#/.NET", slug: "dotnet" },
      { name: "SQL", slug: "sqlite" },
      { name: "Bash", slug: "gnubash" },
      { name: "GraphQL", slug: "graphql" },
      { name: "FastAPI", slug: "fastapi" },
      { name: "Flask", slug: "flask" },
      { name: "Django", slug: "django" },
      { name: "Celery", slug: "celery" },
      { name: "WebSocket", slug: "socketdotio" },
    ],
  },
  {
    title: "Full Stack",
    skills: [
      { name: "React", slug: "react" },
      { name: "React Native", slug: "react" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MySQL", slug: "mysql" },
      { name: "SQL Server", slug: "microsoftsqlserver" },
      { name: "Redis", slug: "redis" },
      { name: "Supabase", slug: "supabase" },
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css" },
      { name: "D3.js", slug: "d3" },
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Cloudflare", slug: "cloudflare" },
      { name: "Terraform", slug: "terraform" },
      { name: "Ansible", slug: "ansible" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Prometheus", slug: "prometheus" },
      { name: "Grafana", slug: "grafana" },
      { name: "Datadog", slug: "datadog" },
      { name: "OpenTelemetry", slug: "opentelemetry" },
      { name: "n8n", slug: "n8n" },
      { name: "Linux/Unix", slug: "linux" },
      { name: "Jira", slug: "jira" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "AutoCAD", slug: "autodesk" },
      { name: "Figma", slug: "figma" },
      { name: "Canva", slug: "canva" },
      { name: "Tableau", slug: "tableau" },
      { name: "Power BI", slug: "powerbi" },
      { name: "Excel", slug: "microsoftexcel" },
      { name: "Cursor AI", slug: "cursor" },
      { name: "Antigravity", slug: "antigravity" },
      { name: "Shopify", slug: "shopify" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Wix", slug: "wix" },
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
