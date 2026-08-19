export const CheckoutBanner: React.FC = () => {
  const checkoutUrl = 'https://pay.kiwify.com.br/jfpLDqp';

  return (
    <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-ink-950 font-medium py-2.5 px-4 shadow-md border-b border-gold-400/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="bg-ink-950 text-gold-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full tracking-wider">
            DEMO
          </span>
          <p className="text-ink-950 font-semibold">
            Gostou desta Landing Page? <span className="font-normal opacity-90 hidden md:inline">Adquira o código-fonte completo e edite em minutos.</span>
          </p>
        </div>

        <a
          href={checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink-950 hover:bg-ink-900 text-gold-400 hover:text-gold-300 font-bold px-4 py-1.5 rounded-lg transition-all transform hover:scale-105 shadow-sm flex items-center gap-1.5 shrink-0"
        >
          <span>Comprar Template</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CheckoutBanner;