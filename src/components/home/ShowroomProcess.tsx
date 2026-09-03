import React from "react";
import { ArrowRight } from "lucide-react";

interface ShowroomProcessProps {
  onNavigateProcess: () => void;
}

export const ShowroomProcess: React.FC<ShowroomProcessProps> = ({
  onNavigateProcess,
}) => {
  const stages = [
    { num: "01", name: "BÚSQUEDA" },
    { num: "02", name: "ANÁLISIS" },
    { num: "03", name: "SELECCIÓN" },
    { num: "04", name: "VERIFICACIÓN" },
    { num: "05", name: "COMPRA & ENTREGA" },
  ];

  return (
    <section
      id="proceso-resumen"
      className="py-24 sm:py-32 bg-[#0D0D0D] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              05 / EL PROCESO
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-6">
            DE LA IDEA
            <br />
            <span className="text-[#C8102E]">A TU GARAJE.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F3F2EF]/80 font-light leading-relaxed">
            Un método estructurado en 5 etapas para que importar desde Alemania sea un proceso predecible, transparente y sin riesgos.
          </p>
        </div>

        {/* Editorial Milestone Sequence - Asymmetric and Typographic */}
        <div className="mb-14 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-10">
            {/* 01 BÚSQUEDA */}
            <div className="lg:col-span-2 group pt-6 border-t border-white/15 hover:border-[#C8102E] transition-colors flex flex-col justify-between">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/20 group-hover:text-[#F3F2EF] transition-colors block leading-none mb-5">
                01
              </span>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/40 block mb-1">
                  FASE 01
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F3F2EF]">
                  BÚSQUEDA
                </h3>
              </div>
            </div>

            {/* 02 ANÁLISIS */}
            <div className="lg:col-span-2 group pt-6 border-t border-white/15 hover:border-[#C8102E] transition-colors flex flex-col justify-between">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/20 group-hover:text-[#F3F2EF] transition-colors block leading-none mb-5">
                02
              </span>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/40 block mb-1">
                  FASE 02
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F3F2EF]">
                  ANÁLISIS
                </h3>
              </div>
            </div>

            {/* 03 SELECCIÓN */}
            <div className="lg:col-span-2 group pt-6 border-t border-white/15 hover:border-[#C8102E] transition-colors flex flex-col justify-between">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/20 group-hover:text-[#F3F2EF] transition-colors block leading-none mb-5">
                03
              </span>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/40 block mb-1">
                  FASE 03
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F3F2EF]">
                  SELECCIÓN
                </h3>
              </div>
            </div>

            {/* 04 VERIFICACIÓN */}
            <div className="lg:col-span-2 group pt-6 border-t border-white/15 hover:border-[#C8102E] transition-colors flex flex-col justify-between">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/20 group-hover:text-[#F3F2EF] transition-colors block leading-none mb-5">
                04
              </span>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/40 block mb-1">
                  FASE 04
                </span>
                <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F3F2EF]">
                  VERIFICACIÓN
                </h3>
              </div>
            </div>

            {/* 05 COMPRA & ENTREGA - Culminación con presencia ampliada */}
            <div className="col-span-2 md:col-span-3 lg:col-span-4 group pt-6 border-t-2 border-[#C8102E] flex flex-col justify-between lg:pl-4">
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#C8102E] block leading-none">
                  05
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E]">
                  CULMINACIÓN
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/40 block mb-1">
                  ENTREGA EN ESPAÑA
                </span>
                <h3 className="font-display text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider text-[#F3F2EF]">
                  COMPRA & ENTREGA
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Process Page */}
        <div>
          <button
            onClick={onNavigateProcess}
            className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#F3F2EF] hover:text-[#C8102E] transition-colors cursor-pointer"
          >
            <span>VER CÓMO FUNCIONA</span>
            <ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
