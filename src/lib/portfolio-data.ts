import resumePdf from "@/assets/Swanand-Dumbre-Resume.pdf";
import tataCertPdf from "@/assets/Tata data analytics.pdf";
import deloitteCertPdf from "@/assets/Delloite Data Analytics.pdf";

export const profileImage = "/ProfilePhoto.jpeg";
export const resumeUrl = resumePdf;

export const contact = {
  name: "Swanand Dumbre",
  title: "Data Science Enthusiast",
  headline: "Data Analyst | Data Scientist | M.Sc. Computer Science Student",
  email: "swananddumbre10@gmail.com",
  phone: "8668398669",
  phoneHref: "tel:+918668398669",
  whatsapp: "https://wa.me/918668398669",
  github: "https://github.com/swananddumbre",
};

export type Project = {
  title: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  { title: "Project Coming Soon", description: "Project details will be added soon." },
  { title: "Project Coming Soon", description: "Project details will be added soon." },
  { title: "Project Coming Soon", description: "Project details will be added soon." },
];

export const skillGroups: { category: string; items: string[] }[] = [
  { category: "Languages & Query", items: ["SQL", "Python", "HTML", "CSS"] },
  { category: "Data Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"] },
  { category: "BI & Reporting", items: ["Power BI", "Tableau"] },
  {
    category: "Core Practices",
    items: ["Data Cleaning", "Data Visualisation", "Statistical Analysis"],
  },
];

export const certifications: {
  title: string;
  issuer?: string;
  date?: string;
  highlights?: string[];
  url?: string;
}[] = [
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata via Forage",
    date: "May 2026",
    highlights: [
      "Exploratory data analysis and risk profiling",
      "Predicting delinquency with AI",
      "Business reporting and data storytelling",
      "Implementing an AI-driven collections strategy",
    ],
    url: tataCertPdf,
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte via Forage",
    date: "June 2026",
    highlights: ["Data analysis", "Forensic technology"],
    url: deloitteCertPdf,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];