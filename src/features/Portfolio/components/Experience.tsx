import SectionHeader from "../../../components/SectionHeader"
import { EXPERIENCE } from "../../../utils/portfolioData"

const Experience = () => (
	<section id="experience" className="py-24 px-6">
		<div className="max-w-4xl mx-auto">
			<SectionHeader number="02" title="Experience" />
			<div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
				{EXPERIENCE.map((exp, index) => (
					<div key={index} className="relative">
						{/* Timeline dot */}
						<div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 bg-teal-400 rounded-full border-4 border-slate-900"></div>

						<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
							<h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
							<span className="text-sm text-slate-400">{exp.period}</span>
						</div>

						<h4 className="text-lg text-teal-400 mb-4">{exp.company}</h4>
						<p className="text-slate-400 mb-6 max-w-2xl">{exp.description}</p>

						<div className="space-y-4">
							{exp.details.map((detail, idx) => (
								<div key={idx} className="bg-slate-800/50 p-4 rounded border border-slate-700/50">
									<span className="text-teal-300 font-semibold block mb-1">{detail.team}</span>
									<p className="text-sm text-slate-400">{detail.task}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
)

export default Experience