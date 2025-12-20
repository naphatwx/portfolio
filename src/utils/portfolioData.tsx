import { Box, Briefcase, Code, Cpu, Database, FolderGit2, GitBranch, Layout, Server, Terminal } from "lucide-react";
import type { Experience, Personal, Project, SkillCategory } from "./types";

const PERSONAL_INFO: Personal = {
    name: "NAPHAT WATTANARATTNAKUL",
    role: "Software Engineer",
    links: {
        linkedin: "https://www.linkedin.com/in/naphat-wattanarattanakul-6334b6295/",
        github: "https://github.com/naphatwx"
    }
};

const SKILLS_DATA: SkillCategory[] = [
    { category: "Languages", icon: Code , items: ["Java", "JavaScript", "TypeScript", "HTML", "SQL"] },
    { category: "Backend", icon: Server, items: ["Spring Boot", "Node.js", "AdonisJS"] },
    { category: "Frontend", icon: Layout, items: ["Vue.js", "React"] },
    { category: "CSS & UI Frameworks", icon: Box, items: ["Tailwind", "daisyUI", "Bootstrap"] },
    { category: "Database", icon: Database, items: ["MySQL", "MSSQL", "MongoDB"] },
    { category: "Low-code Platform", icon: Terminal, items: ["OutSystems"] },
    { category: "DevOps", icon: Cpu, items: ["Docker", "Nginx"] },
    { category: "Testing", icon: Briefcase, items: ["Unit testing", "Postman"] },
    { category: "Project Management", icon: FolderGit2, items: ["Jira", "Notion"] },
    { category: "Version Control", icon: GitBranch, items: ["GitHub"] },
    { category: "Development Tools", icon: Terminal, items: ["Apidog"] },
    { category: "Cloud Platforms", icon: Box, items: ["AWS"] },
];

const EXPERIENCE_DATA: Experience[] = [
    {
        role: "Internship Developer",
        period: "Jan 2024 - Jun 2024",
        duration: "6 months",
        company: "OutSystems Platform (SCG & AIS Teams)",
        description: "During my internship, I worked as a developer using a low-code tool called OutSystems Platform to build web applications.",
        details: [
            {
                team: "SCG Team",
                task: "Improve the design and layout (UX/UI) of the application."
            },
            {
                team: "AIS Team",
                task: "Helped build a system to manage internet packages. Created a feature matching internet packages to locations and other packages. Built a back-office to manage access."
            }
        ]
    }
];

const PROJECTS_DATA: Project[] = [
    {
        title: "Taxi Ads CMS",
        role: "Backend Developer & DevOps",
        year: "2024-2025",
        type: "Capstone Project",
        tech: ["AdonisJS", "DevOps"],
        description: "Handled the backend development of a Taxi Ads CMS using AdonisJS framework, managing advertisements, user settings, and data visualization features."
    },
    {
        title: "Pantoop Project",
        role: "Full-stack Developer",
        year: "2024",
        type: "Web Application",
        tech: ["Vue.js", "AdonisJS", "Full-stack"],
        description: "Developed a full-stack web application where users can create posts, comment, and engage in a Q&A communication system. Handled frontend, backend, and deployment."
    },
    {
        title: "Announcement Website",
        role: "Backend Developer",
        year: "2023",
        type: "Integrated Project",
        tech: ["Java Spring Boot", "SQL"],
        description: "Developed the backend using Java Spring Boot, implementing user accounts, authentication, and authorization features, and applying backend development and database management skills."
    },
    {
        title: "Slot Game Project",
        role: "Frontend Developer",
        year: "2022",
        type: "Interactive Game",
        tech: ["JavaScript", "Vue.js"],
        description: "Developed an interactive slot game using JavaScript and Vue.js, enhancing my skills in dynamic content creation and responsive frontend development."
    }
];

export { PERSONAL_INFO, SKILLS_DATA, EXPERIENCE_DATA, PROJECTS_DATA };