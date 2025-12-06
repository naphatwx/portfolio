import useScroll from "../../../store/useScroll"

type NavLinkProps = {
  href: string
  label: string
}

const NavLink = ({ href, label }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
  >
    {label}
  </a>
)

const Navbar = () => {
  const scrolled = useScroll(50)

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-teal-400 tracking-tight">NAPHAT'S PORTFOLIO</div>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#projects" label="Projects" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar