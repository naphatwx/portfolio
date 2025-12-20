import { Github, Linkedin } from "lucide-react"
import { PERSONAL_INFO } from "../../../utils/portfolioData"

const Hero = () => (
	<section id="about" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
		{/* Background blobs */}
		<div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
		<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

		<div className="max-w-6xl mx-auto w-full pt-20">
			<p className="text-teal-400 mb-4">Hello, my name is</p>
			<h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
				{PERSONAL_INFO.name.split(' ')[0]} <span className="text-slate-400">{PERSONAL_INFO.name.split(' ')[1]}.</span>
			</h1>
			<p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-12">
				I'm a {PERSONAL_INFO.role} specialized in building exceptional digital experiences.
				Currently tailored with skills ranging from Low-code platforms to Full-stack development
				using modern technologies like React, Vue.js, Spring Boot, and AdonisJS.
			</p>

			<div className="flex gap-4">
				<a
					href={PERSONAL_INFO.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400/10 transition-all duration-300"
				>
					<Github size={20} />
					<span>GitHub</span>
				</a>
				<a
					href={PERSONAL_INFO.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 rounded hover:border-slate-400 hover:text-white transition-all duration-300"
				>
					<Linkedin size={20} />
					<span>LinkedIn</span>
				</a>
			</div>
		</div>
	</section>
)

export default Hero