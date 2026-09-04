import React from "react";
import { ArrowRight } from "lucide-react";
import bmwM4Image from "../../assets/images/bmw_m4_darkness_1788475162547.jpg";

interface ShowroomConversionProps {
  onCtaClick: () => void;
}

export const ShowroomConversion: React.FC<ShowroomConversionProps> = ({
  onCtaClick,
}) => {
  return (
    <section
      id="conversion"
      className="relative overflow-hidden py-28 sm:py-36 bg-[#0A0A0A] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={bmwM4Image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-45"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/35" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="w-10 h-[2px] bg-[#C8102E] mb-8" />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-6">
            ¿QUÉ COCHE
            <br />
            <span className="text-[#C8102E]">ESTÁS BUSCANDO?</span>
          </h2>

          <p className="text-base sm:text-xl text-[#F3F2EF]/85 font-light leading-relaxed mb-10 max-w-2xl">
            Cuéntanos qué necesitas y analizaremos si tiene sentido buscarlo en Alemania.
          </p>

          <button
            onClick={onCtaClick}
            className="px-9 py-4 sm:py-4.5 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl shadow-[#C8102E]/25 inline-flex items-center justify-center cursor-pointer group"
          >
            <span>ENCONTRAR MI COCHE</span>
            <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
