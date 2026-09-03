import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/whatsapp";

interface HomeFinalCTAProps {
  onCtaClick: () => void;
}

export const HomeFinalCTA: React.FC<HomeFinalCTAProps> = ({ onCtaClick }) => {
  return (
    <section
      id="home-cta-final"
      className="py-20 sm:py-28 bg-[#0D0D0D] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 mb-6 text-[11px] font-mono tracking-[0.2em] text-[#C8102E] uppercase">
          ASESORAMIENTO INDEPENDIENTE
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08] text-white mb-6">
          ¿BUSCAS UN COCHE CONCRETO?
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Cuéntanos qué modelo, motorización y equipamiento buscas. Realizamos una primera valoración de mercado sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-xl shadow-[#C8102E]/25 flex items-center justify-center"
          >
            <span>QUIERO BUSCAR MI COCHE</span>
            <ArrowRight className="w-4 h-4 ml-2.5" />
          </button>

          <a
            href={getWhatsAppUrl("Hola, me gustaría buscar un coche concreto con Céspedes Automotriz.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-white/70" />
            <span>CONSULTAR POR WHATSAPP</span>
          </a>
        </div>
      </div>
    </section>
  );
};
