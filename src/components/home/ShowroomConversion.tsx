import React from "react";
import { ArrowRight } from "lucide-react";

interface ShowroomConversionProps {
  onCtaClick: () => void;
}

export const ShowroomConversion: React.FC<ShowroomConversionProps> = ({
  onCtaClick,
}) => {
  return (
    <section
      id="conversion"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F3F2EF] border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              06 / CONVERSIÓN
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-6">
            ¿QUÉ COCHE
            <br />
            <span className="text-[#C8102E]">ESTÁS BUSCANDO?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#F3F2EF]/80 font-light leading-relaxed mb-10">
            Cuéntanos qué necesitas y analizaremos si tiene sentido buscarlo en Alemania.
          </p>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-9 py-4 sm:py-4.5 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl shadow-[#C8102E]/25 inline-flex items-center justify-center cursor-pointer group"
            >
              <span>ENCONTRAR MI COCHE</span>
              <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
