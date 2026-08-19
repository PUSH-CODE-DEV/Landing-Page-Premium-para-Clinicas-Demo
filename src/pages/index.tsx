import React from 'react';
import CheckoutBanner from '../components/CheckoutBanner';
import Header from '../components/header';
import Hero from '../components/hero';
import WhatsappButton from '../components/whatsappbutton';

interface ServiceCard {
  title: string;
  desc: string;
}

const services: ServiceCard[] = [
  { title: "Harmonização Facial", desc: "Realce sua beleza natural com equilíbrio e sofisticação." },
  { title: "Bioestimuladores", desc: "Tratamentos avançados para firmeza e rejuvenescimento da pele." },
  { title: "Lentes de Resina", desc: "Transformação do sorriso com técnica minimamente invasiva." },
  { title: "Protocolos VIP", desc: "Planos personalizados para cuidados faciais e corporais completos." }
];

const EsteticaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Container Fixo Superior com Banner + Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <CheckoutBanner />
        <Header />
      </header>

      {/* Hero com espaçamento superior interno para compensar o header fixo */}
      <Hero />

      {/* SERVICES GRID */}
      <section id="procedimentos" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="serif text-4xl text-[#2C2318] mb-4 uppercase tracking-wider">Procedimentos</h2>
          <div className="w-12 h-[1px] bg-champagne mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <div key={i} className="group p-8 border border-gray-50 hover:border-champagne-light hover:bg-[#FAF7F2] transition-all duration-500 text-center">
              <div className="w-12 h-12 border border-champagne-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-champagne transition-all">
                <span className="text-champagne-dark group-hover:text-white font-light italic serif">0{i+1}</span>
              </div>
              <h3 className="serif text-xl mb-4 text-[#2C2318]">{s.title}</h3>
              <p className="text-sm text-[#8B7355] leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <WhatsappButton />
    </div>
  );
};

export default EsteticaPage;