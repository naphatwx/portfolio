export interface Personal {
	name: string
	role: string
	links: {
		linkedin: string
		github: string
	}
}

export interface SkillCategory {
	category: string
	icon: React.ElementType
	items: string[]
}

export interface Experience {
	role: string
	period: string
	duration: string
	company: string
	description: string
	details: ExperienceDetail[]
}

export interface ExperienceDetail {
	team: string
	task: string
}

export interface Project {
	title: string
	role: string
	year: string
	type: string
	tech: string[]
	description: string
}