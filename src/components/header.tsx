import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
      scrolled 
        ? "bg-white/95 shadow-md py-3 border-b border-amber-900/10 backdrop-blur-md" 
        : "bg-[#FAF7F2]/90 backdrop-blur-sm border-b border-amber-900/5"
    }`}>
      <div className="serif text-2xl font-semibold tracking-widest text-amber-800">
        LUMINA <span className="text-[#2C2318] font-light">ESTÉTICA</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-[#2C2318]">
        <a href="#inicio" className="hover:text-amber-700 transition-colors">Início</a>
        <a href="#procedimentos" className="hover:text-amber-700 transition-colors">Procedimentos</a>
        <a href="#sobre" className="hover:text-amber-700 transition-colors">A Clínica</a>
        <a href="#contato" className="hover:text-amber-700 transition-colors">Contato</a>
      </div>
      <button className="bg-amber-700 text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-amber-800 transition-all shadow-sm font-medium">
        Agendar
      </button>
    </nav>
  );
};

export default Header;