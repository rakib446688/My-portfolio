import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const target = document.getElementById(id.toLowerCase());
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">MRH.</span>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="text-sm text-zinc-400 hover:text-white transition-colors">{l}</button>
          ))}
          <button onClick={() => scrollTo("contact")} className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-4 py-2 rounded-full transition-colors">Hire Me</button>
        </div>
        <button className="md:hidden text-zinc-400" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
            <span className="block w-4 h-0.5 bg-current"></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d14] border-t border-white/10 px-6 py-4 space-y-4">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} className="block text-sm text-zinc-300 hover:text-white">{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
