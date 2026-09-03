import React from "react";
import { ArrowRight } from "lucide-react";

interface ShowroomIntelligenceProps {
  onNavigateMethod: () => void;
}

export const ShowroomIntelligence: React.FC<ShowroomIntelligenceProps> = ({
  onNavigateMethod,
}) => {
  return (
    <section
      id="inteligencia"
      className="py-24 sm:py-32 bg-[#111111] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          {/* Section Tag */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              04 / INTELIGENCIA
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#F3F2EF]/50">
              EL MÉTODO ANTE TODO
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-8">
            NO BUSCAMOS COCHES.
            <br />
            <span className="text-[#C8102E]">BUSCAMOS OPORTUNIDADES.</span>
          </h2>

          {/* Statement of Criteria and Authority */}
          <div className="border-l-2 border-[#C8102E] pl-6 sm:pl-8 py-2 mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-[#F3F2EF]/90 font-light leading-relaxed">
              Cada unidad propuesta pasa por un análisis técnico, documental y financiero antes de convertirse en una opción para el cliente.
            </p>
          </div>

          {/* CTA to Secondary Page */}
          <div>
            <button
              onClick={onNavigateMethod}
              className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#F3F2EF] hover:text-[#C8102E] transition-colors cursor-pointer"
            >
              <span>DESCUBRIR NUESTRO MÉTODO</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
