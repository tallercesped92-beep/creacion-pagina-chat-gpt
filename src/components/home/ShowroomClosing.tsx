import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import bmwM3Image from "../../assets/images/bmw_m3_competition_1787228432881.jpg";

interface ShowroomClosingProps { onCtaClick: () => void; }

export const ShowroomClosing: React.FC<ShowroomClosingProps> = ({ onCtaClick }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="cierre" className="relative py-32 sm:py-44 bg-[#0A0A0A] text-[#F3F2EF] overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div initial={{ scale: 1 }} animate={{ scale: shouldReduceMotion ? 1 : 1.035 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="w-full h-full">
          <img src={bmwM3Image} alt="BMW M3 Competition en entorno automovilístico" className="w-full h-full object-cover object-center brightness-[1.04] contrast-[1.04]" loading="lazy" referrerPolicy="no-referrer" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/35 to-[#0A0A0A]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/20 via-transparent to-[#0A0A0A]/15 pointer-events-none" />
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-[#F3F2EF] mb-8 max-w-4xl mx-auto">EL COCHE QUE QUIERES<br /><span className="text-[#C8102E]">EMPIEZA CON UNA BÚSQUEDA.</span></h2>
        <p className="text-xs sm:text-sm text-[#F3F2EF]/70 font-light max-w-2xl mx-auto tracking-wide leading-relaxed mb-10">Investigación, auditoría y acompañamiento profesional para la adquisición e importación de vehículos desde Alemania hacia España. Criterio técnico independiente y presupuesto cerrado.</p>
        <button onClick={onCtaClick} className="group px-9 sm:px-11 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl shadow-[#C8102E]/25 inline-flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
          <span>QUIERO BUSCAR MI COCHE</span><ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};
