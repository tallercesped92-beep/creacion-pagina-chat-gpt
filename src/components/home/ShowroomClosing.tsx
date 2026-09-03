import React from "react";
import bmwM3Image from "../../assets/images/bmw_m3_competition_1787228432881.jpg";

interface ShowroomClosingProps {
  onCtaClick?: () => void;
}

export const ShowroomClosing: React.FC<ShowroomClosingProps> = () => {
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

        {/* Subtle Brand Signature */}
        <p className="text-xs sm:text-sm text-[#F3F2EF]/60 font-light max-w-2xl mx-auto tracking-wide leading-relaxed">
          Investigación, auditoría y acompañamiento profesional para la adquisición e importación de vehículos desde Alemania hacia España. Criterio técnico independiente y presupuesto cerrado.
        </p>
      </div>
    </section>
  );
};
