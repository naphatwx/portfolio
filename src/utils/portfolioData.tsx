import { Box, Briefcase, Code, Cpu, Database, FolderGit2, GitBranch, Layout, Server, Terminal } from "lucide-react"
import type { Experience, Personal, Project, SkillCategory } from "./types"

export const PERSONAL_INFO: Personal = {
	name: "NAPHAT WATTANARATTNAKUL",
	role: "Software Engineer",
	links: {
		linkedin: "https://www.linkedin.com/in/naphat-wattanarattanakul-6334b6295/",
		github: "https://github.com/naphatwx"
	}
}

export const SKILLS: SkillCategory[] = [
	{ category: "Languages", icon: Code, items: ["Java", "JavaScript", "TypeScript", "HTML", "SQL"] },
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
]

export const EXPERIENCE: Experience[] = [
	{
		role: "OutSystems Developer Intern",
		period: "Jan 2024 - Jun 2024",
		duration: "6 months",
		company: "iPassion Company Limited",
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
	},
	{
		role: "Infrastructure Software Engineer",
		period: "July 2025 - Present",
		duration: "Present",
		company: "Ngernturbo Public Company Limited (TURBO)",
		description: "As an Infrastructure Software Engineer at Ngernturbo, I am responsible for developing and maintaining software solutions that support the company's infrastructure needs. My role involves collaborating with cross-functional teams to design, implement, and optimize systems that enhance operational efficiency and reliability.",
		details: [
			{
				team: "Avergers Team",
				task: "Build web application for internal use to deploy web applications."
			}
		]
	}
]

export const PROJECTS: Project[] = [
	{
		title: "Thanos Project",
		role: "Software Engineer",
		year: "2025-Present",
		type: "Web Application",
		tech: ["Next.js", "GoLang", "Docker", "Ghostfreak"],
		description: "Develop a Thanos system to manage and deploy web applications efficiently using Next.js for the frontend and GoLang for the backend, containerized with Docker."
	},
	{
		title: "Taxi Ads CMS",
		role: "Backend Developer & DevOps",
		year: "2024-2025",
		type: "Web Application",
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
		type: "Web Application",
		tech: ["Java Spring Boot", "SQL"],
		description: "Developed the backend using Java Spring Boot, implementing user accounts, authentication, and authorization features, and applying backend development and database management skills."
	},
	{
		title: "Slot Game Project",
		role: "Frontend Developer",
		year: "2022",
		type: "Web Application",
		tech: ["JavaScript", "Vue.js"],
		description: "Developed an interactive slot game using JavaScript and Vue.js, enhancing my skills in dynamic content creation and responsive frontend development."
	}
]
