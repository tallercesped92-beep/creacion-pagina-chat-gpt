import React from "react";
import { ArrowRight } from "lucide-react";
import bmwM3Image from "../../assets/images/bmw_m3_competition_1787228432881.jpg";

interface ShowroomClosingProps {
  onCtaClick: () => void;
}

export const ShowroomClosing: React.FC<ShowroomClosingProps> = ({
  onCtaClick,
}) => {
  return (
    <section
      id="cierre"
      className="relative py-32 sm:py-44 bg-[#0A0A0A] text-[#F3F2EF] overflow-hidden"
    >
      {/* Background Photography with Deep Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={bmwM3Image}
          alt="BMW M3 Competition en entorno automovilístico"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-[#F3F2EF] mb-8 max-w-4xl mx-auto">
          EL COCHE QUE QUIERES
          <br />
          <span className="text-[#C8102E]">EMPIEZA CON UNA BÚSQUEDA.</span>
        </h2>

        <div>
          <button
            onClick={onCtaClick}
            className="px-9 py-4 sm:py-5 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-2xl shadow-[#C8102E]/30 inline-flex items-center space-x-3 cursor-pointer group"
          >
            <span>ENCONTRAR MI COCHE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Subtle Brand Signature */}
        <p className="text-xs text-[#F3F2EF]/50 font-light max-w-xl mx-auto tracking-wide leading-relaxed mt-10">
          Investigación, auditoría y acompañamiento profesional para la adquisición e importación de vehículos desde Alemania hacia España. Criterio técnico independiente y presupuesto cerrado.
        </p>
      </div>
    </section>
  );
};
