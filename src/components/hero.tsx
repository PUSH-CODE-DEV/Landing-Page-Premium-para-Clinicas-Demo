const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80" 
          alt="Fundo" 
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl py-12">
        <span className="uppercase tracking-[0.3em] text-amber-800 text-sm mb-4 block font-semibold">
          Bem-vindo à excelência
        </span>
        <h1 className="serif text-5xl md:text-7xl text-[#2C2318] mb-8 font-light italic leading-tight">
          Sua beleza merece ser <br />
          <span className="not-italic font-normal uppercase tracking-tighter">Única e Atemporal</span>
        </h1>
        <p className="text-[#5C4A32] max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Especialistas em procedimentos avançados que respeitam sua identidade e realçam o que você tem de melhor.
        </p>
        <a 
          href="#procedimentos" 
          className="inline-block border-2 border-amber-800 text-[#2C2318] font-medium px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-amber-800 hover:text-white transition-all shadow-sm"
        >
          Conheça nossos serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;