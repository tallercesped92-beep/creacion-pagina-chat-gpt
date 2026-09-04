import React from "react";
import { ArrowRight } from "lucide-react";
import autoDetailImage from "../../assets/images/auto_detail_macro_1788475203812.jpg";

interface ShowroomIntelligenceProps {
  onNavigateMethod: () => void;
}

export const ShowroomIntelligence: React.FC<ShowroomIntelligenceProps> = ({
  onNavigateMethod,
}) => {
  return (
    <section
      id="inteligencia"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#111111] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <div className="max-w-3xl">
            <div className="w-10 h-[2px] bg-[#C8102E] mb-8" />

            <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#F3F2EF]/50 block mb-4">
              EL MÉTODO ANTE TODO
            </span>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-8">
              NO BUSCAMOS COCHES.
              <br />
              <span className="text-[#C8102E]">BUSCAMOS OPORTUNIDADES.</span>
            </h2>

            <div className="border-l-2 border-[#C8102E] pl-6 sm:pl-8 py-2 mb-10">
              <p className="text-lg sm:text-xl md:text-2xl text-[#F3F2EF]/90 font-light leading-relaxed">
                Cada unidad propuesta pasa por un análisis técnico, documental y financiero antes de convertirse en una opción para el cliente.
              </p>
            </div>

            <button
              onClick={onNavigateMethod}
              className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#F3F2EF] hover:text-[#C8102E] transition-colors cursor-pointer"
            >
              <span>DESCUBRIR NUESTRO MÉTODO</span>
              <ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden">
            <img
              src={autoDetailImage}
              alt="Detalle de un vehículo durante una inspección"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/35 via-transparent to-[#111111]/10" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent">
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.18em] uppercase text-[#F3F2EF]/60">
                INSPECCIÓN · CRITERIO · DECISIÓN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
