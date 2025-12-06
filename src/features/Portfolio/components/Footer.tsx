import { Github, Linkedin } from "lucide-react"
import { PERSONAL_INFO } from "../../../utils/portfolioData"

const Footer = () => (
	<footer className="py-8 text-center text-slate-500 text-sm bg-slate-900">
		<div className="flex justify-center gap-6 mb-4">
			<a href={PERSONAL_INFO.links.github} className="hover:text-teal-400 transition-colors"><Github size={18} /></a>
			<a href={PERSONAL_INFO.links.linkedin} className="hover:text-teal-400 transition-colors"><Linkedin size={18} /></a>
		</div>
		<p>Designed & Built by {PERSONAL_INFO.name}</p>
	</footer>
)

export default Footer