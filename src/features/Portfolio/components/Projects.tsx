import { FolderGit2 } from "lucide-react"
import { PROJECTS_DATA } from "../../../utils/portfolioData"
import SectionHeader from "../../../components/SectionHeader"

const Projects = () => (
	<section id="projects" className="py-24 px-6 bg-slate-800/30">
		<div className="max-w-6xl mx-auto">
			<SectionHeader number="03" title="Projects" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{PROJECTS_DATA.map((project, index) => (
					<div key={index} className="bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-teal-900/10 transition-all duration-300 group flex flex-col h-full border border-slate-800">
						<div className="p-8 flex flex-col grow">
							<div className="flex justify-between items-start mb-6">
								<FolderGit2 size={40} className="text-teal-400" />
								<div className="flex gap-3">
									<span className="text-slate-500 text-sm">{project.year}</span>
								</div>
							</div>

							<h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition-colors">
								{project.title}
							</h3>
							<p className="text-sm font-semibold text-slate-400 mb-4">{project.role} • {project.type}</p>

							<p className="text-slate-400 text-sm mb-6 grow leading-relaxed">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-slate-800">
								{project.tech.map((t, i) => (
									<span key={i} className="text-sm text-teal-400/80">
										{t}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default Projects