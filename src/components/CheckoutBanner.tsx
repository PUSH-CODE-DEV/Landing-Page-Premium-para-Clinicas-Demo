import { useState, useEffect } from 'react';
import CheckoutBanner from './CheckoutBanner';

interface ServiceCard {
  title: string;
  desc: string;
}

const EsteticaPage: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: ServiceCard[] = [
    { title: "Harmonização Facial", desc: "Realce sua beleza natural com equilíbrio e sofisticação." },
    { title: "Bioestimuladores", desc: "Tratamentos avançados para firmeza e rejuvenescimento da pele." },
    { title: "Lentes de Resina", desc: "Transformação do sorriso com técnica minimamente invasiva." },
    { title: "Protocolos VIP", desc: "Planos personalizados para cuidados faciais e corporais completos." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* 1. BARRA DE CHECKOUT DA DEMO (COM DESTAQUE DOURADO/AMARELO) */}
      <div className="relative z-50">
        <CheckoutBanner />
      </div>

      {/* 2. HEADER DA PÁGINA (BACKGROUND BRANCO/SÓLIDO QUANDO ROLA) */}
      <nav className={`sticky top-0 w-full z-40 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
        scrolled 
          ? "bg-white shadow-md py-3 border-b border-amber-100" 
          : "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-amber-900/10"
      }`}>
        <div className="serif text-2xl font-semibold tracking-widest text-[#C5A059]">
          LUMINA <span className="text-[#2C2318] font-light">ESTÉTICA</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-[#2C2318]">
          <a href="#inicio" className="hover:text-[#C5A059] transition-colors">Início</a>
          <a href="#procedimentos" className="hover:text-[#C5A059] transition-colors">Procedimentos</a>
          <a href="#sobre" className="hover:text-[#C5A059] transition-colors">A Clínica</a>
          <a href="#contato" className="hover:text-[#C5A059] transition-colors">Contato</a>
        </div>
        <button className="bg-[#C5A059] text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#b08d49] transition-all font-semibold shadow-sm">
          Agendar
        </button>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80" 
            alt="Fundo" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl py-12">
          <span className="uppercase tracking-[0.3em] text-[#C5A059] text-sm mb-4 block font-semibold">Bem-vindo à excelência</span>
          <h1 className="serif text-5xl md:text-7xl text-[#2C2318] mb-8 font-light italic leading-tight">
            Sua beleza merece ser <br />
            <span className="not-italic font-normal uppercase tracking-tighter">Única e Atemporal</span>
          </h1>
          <p className="text-[#5C4A32] max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Especialistas em procedimentos avançados que respeitam sua identidade e realçam o que você tem de melhor.
          </p>
          <a href="#procedimentos" className="inline-block border-2 border-[#C5A059] text-[#2C2318] font-medium px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-[#C5A059] hover:text-white transition-all">
            Conheça nossos serviços
          </a>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="procedimentos" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="serif text-4xl text-[#2C2318] mb-4 uppercase tracking-wider">Procedimentos</h2>
          <div className="w-12 h-[2px] bg-[#C5A059] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="group p-8 border border-amber-100 hover:border-[#C5A059] hover:bg-[#FAF7F2] transition-all duration-500 text-center">
              <div className="w-12 h-12 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C5A059] transition-all">
                <span className="text-[#C5A059] group-hover:text-white font-light italic serif">0{i+1}</span>
              </div>
              <h3 className="serif text-xl mb-4 text-[#2C2318]">{s.title}</h3>
              <p className="text-sm text-[#8B7355] leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.023-.539-.074-.168-.67-1.616-.917-2.208-.241-.58-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default EsteticaPage;