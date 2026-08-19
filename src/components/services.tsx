interface ServiceCard {
  title: string;
  desc: string;
}

const servicesData: ServiceCard[] = [
  { title: "Harmonização Facial", desc: "Realce sua beleza natural com equilíbrio e sofisticação." },
  { title: "Bioestimuladores", desc: "Tratamentos avançados para firmeza e rejuvenescimento da pele." },
  { title: "Lentes de Resina", desc: "Transformação do sorriso com técnica minimamente invasiva." },
  { title: "Protocolos VIP", desc: "Planos personalizados para cuidados faciais e corporais completos." }
];

const Services: React.FC = () => {
  return (
    <section id="procedimentos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="serif text-4xl text-[#2C2318] mb-4 uppercase tracking-wider">Procedimentos</h2>
        <div className="w-12 h-[2px] bg-amber-700 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {servicesData.map((s, i) => (
          <div key={i} className="group p-8 border border-amber-100 hover:border-amber-400 hover:bg-[#FAF7F2] transition-all duration-500 text-center rounded-sm">
            <div className="w-12 h-12 border border-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all">
              <span className="text-amber-800 group-hover:text-white font-light italic serif">0{i+1}</span>
            </div>
            <h3 className="serif text-xl mb-4 text-[#2C2318]">{s.title}</h3>
            <p className="text-sm text-[#8B7355] leading-relaxed font-light">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;