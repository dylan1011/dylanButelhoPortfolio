export const profile = {
  name: "Dylan Clement Butelho",
  shortName: "Dylan Butelho",
  tagline: "Building innovative software solutions.",
  subtitle:
    "Full-Stack Developer & M.S. in Computer Science — modern web applications, APIs, ML/AI & scalable systems.",
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
    period: "May 2026",
    logoUrl: "/logos/syracuse-university.png",
    coursework:
      "Design and Analysis of Algorithms, Computer Architecture, Natural Language Processing (NLP), Assured Programming with Formal Methods, Intro to Artificial Intelligence (AI), Operating Systems, Agentic AI, Database Management Systems, Cryptography, Machine Learning.",
    highlights: [
      "Focus on algorithms, AI/ML, and systems. Coursework in NLP, cryptography, and database systems.",
      "Relevant areas: Machine Learning, Agentic AI, Computer Architecture, Operating Systems.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "University of Mumbai, St. Francis Institute of Technology",
    location: "India",
    period: "May 2023",
    logoUrl: "/logos/university-of-mumbai.png",
    coursework: null,
    highlights: [
      "Core focus on software development, databases, and information systems.",
    ],
  },
];

export const experience = [
  {
    role: "App Developer",
    company: "iConsult Collaborative",
    period: "January 2026 – Present",
    logoUrl: "/logos/iconsult-syracuse.png",
    bullets: [
      "Designed, developed, and maintained application features aligned with business and client requirements.",
      "Built responsive and user-friendly interfaces to ensure consistent performance across devices.",
      "Integrated APIs and managed application data flow to support core functionalities.",
      "Collaborated with cross-functional teams to test, debug, and optimize application performance.",
    ],
    stack: ["React", "TypeScript", "APIs", "Cross-platform"],
  },
  {
    role: "Software Developer",
    company: "Vervali Systems",
    location: "India",
    period: "April 2024 – July 2024",
    logoUrl: "/logos/vervali.png",
    bullets: [
      "Integrated payment and shipping solutions using Paystack, PayPal, and DHL APIs to streamline e-commerce transactions.",
      "Converted Shopify data to Omnitron platform using Python with Pandas and Requests for efficient data migration.",
      "Designed and implemented JSON-based data structures to optimize workflows and improve system performance.",
      "Developed responsive user interfaces using HTML and CSS to enhance user experience.",
      "Collaborated with clients to gather requirements, automate processes, and improve operational efficiency.",
      "Contributed to scripting, data management, and process automation for multiple e-commerce projects.",
    ],
    stack: ["Python", "Pandas", "Shopify", "APIs", "HTML/CSS"],
  },
];

export const academicProjects = [
  {
    title: "AI-Driven Plant Pathology Detection",
    description:
      "CNN-based plant disease classification using TensorFlow. Flask web app for uploading leaf images and receiving disease predictions with treatment suggestions. Trained on Kaggle datasets with image preprocessing and augmentation.",
    tags: ["TensorFlow", "Flask", "CNN", "Python", "HTML/CSS"],
    icon: "leaf",
  },
  {
    title: "Environmental Data Analysis & ML-Driven Air Quality Classification",
    description:
      "IoT system for real-time environmental data (humidity, temperature, gas levels). Random Forest for pollutant classification and K-Means clustering for air quality patterns. Data processing and visualization with Python and TensorFlow.",
    tags: ["IoT", "TensorFlow", "Random Forest", "K-Means", "Python"],
    icon: "chart",
  },
  {
    title: "Collaborative Filtering & Market Basket Analysis for Product Recommendations",
    description:
      "E-commerce web application for pet products with personalized recommendations. Collaborative filtering (Pearson Correlation) and Market Basket Analysis for frequently bought-together items. Full-stack Python, Flask, HTML, and CSS.",
    tags: ["Flask", "Python", "Collaborative Filtering", "Market Basket Analysis"],
    icon: "cart",
  },
];

/** Certifications for education page ticker. Add entries as needed. */
export const certifications: Array<{ name: string; issuer: string; year: string }> = [
  { name: "Cisco Python Essentials I", issuer: "Cisco", year: "" },
  { name: "Cisco Python Essentials II", issuer: "Cisco", year: "" },
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
      { name: "Express.js", slug: "express" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "React", slug: "react" },
      { name: "React Native", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Flutter", slug: "flutter" },
      { name: "TypeScript", slug: "typescript" },
    ],
  },
  {
    title: "Data Science & ML",
    skills: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Scikit-Learn", slug: "scikitlearn" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Supabase", slug: "supabase" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Jenkins", slug: "jenkins" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
      { name: "AWS", slug: "amazonaws" },
      { name: "Redis", slug: "redis" },
      { name: "GraphQL", slug: "graphql" },
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
  return skillCategories.flatMap((cat) =>
    cat.skills.filter((s) => {
      if (seen.has(s.name)) return false;
      seen.add(s.name);
      return true;
    })
  ).map((s) => ({ name: s.name, slug: s.slug }));
})();

/**
 * Core Proficiencies % for education page — aligned with My Tech Stack cards.
 * Based on resume: education (M.S. CS, B.E. IT), experience, projects, and skill categories.
 */
export const coreProficiencyPct: Record<string, number> = {
  "Cloud": 72,
  "DevOps": 78,
  "AI/ML": 92,
  "Databases": 88,
  "Tools": 90,
  "Full-Stack": 94,
};
