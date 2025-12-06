import Experience from "../features/Portfolio/components/Experience"
import Footer from "../features/Portfolio/components/Footer"
import Hero from "../features/Portfolio/components/Hero"
import Navbar from "../features/Portfolio/components/NavBar"
import Projects from "../features/Portfolio/components/Projects"
import Skills from "../features/Portfolio/components/Skills"

const PortfolioPage = () => {
	return (
		<div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-teal-300 selection:text-teal-900 font-sans">
			<Navbar />
			<main>
				<Hero />
				<Skills />
				<Experience />
				<Projects />
			</main>
			<Footer />
		</div>
	)
}

export default PortfolioPage