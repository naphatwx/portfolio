import SectionHeader from "../../../components/SectionHeader"
import { SKILLS } from "../../../utils/portfolioData"

const Skills = () => (
	<section id="skills" className="py-24 px-6 bg-slate-800/30">
		<div className="max-w-6xl mx-auto">
			<SectionHeader number="01" title="Hard Skills" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{(SKILLS).map((skillGroup, index) => {
					const Icon = skillGroup.icon
					return (
						<div key={index} className="bg-slate-800 p-6 rounded-lg hover:-translate-y-1 transition-transform duration-300 border border-slate-700 hover:border-teal-400/30 group">
							<div className="flex items-center gap-3 mb-4 text-teal-400 group-hover:text-teal-300">
								<Icon size={24} />
								<h3 className="font-semibold text-lg text-slate-200">{skillGroup.category}</h3>
							</div>
							<div className="flex flex-wrap gap-2">
								{skillGroup.items.map((item: string, idx: number) => (
									<span key={idx} className="text-sm bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full border border-slate-600/50">
										{item}
									</span>
								))}
							</div>
						</div>
					)
				}
				)}
			</div>
		</div>
	</section>
)

export default Skills