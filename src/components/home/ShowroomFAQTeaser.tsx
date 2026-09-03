import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";

interface ShowroomFAQTeaserProps {
  onNavigateFAQ: () => void;
}

export const ShowroomFAQTeaser: React.FC<ShowroomFAQTeaserProps> = ({
  onNavigateFAQ,
}) => {
  return (
    <section
      id="faq-teaser"
      className="py-16 sm:py-20 bg-[#0D0D0D] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 bg-[#121212] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#C8102E] uppercase mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>RESPUESTAS CLARAS</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
              ¿TIENES DUDAS SOBRE EL PROCESO?
            </h3>
            <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
              Costes desglosados, garantías oficiales europeas, plazos de transporte y matriculación explicados al detalle.
            </p>
          </div>

          <button
            onClick={onNavigateFAQ}
            className="group px-6 py-3.5 bg-white/5 hover:bg-[#C8102E] text-white border border-white/15 hover:border-transparent text-xs font-bold tracking-[0.16em] uppercase transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
          >
            <span>VER PREGUNTAS FRECUENTES</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
