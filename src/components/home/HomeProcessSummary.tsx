import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HomeProcessSummaryProps {
  onNavigateProcess: () => void;
}

export const HomeProcessSummary: React.FC<HomeProcessSummaryProps> = ({
  onNavigateProcess,
}) => {
  const compactSteps = [
    { num: "01", title: "NOS CUENTAS QUÉ BUSCAS" },
    { num: "02", title: "BUSCAMOS Y FILTRAMOS" },
    { num: "03", title: "AUDITAMOS Y VERIFICAMOS" },
    { num: "04", title: "IMPORTAMOS Y MATRICULAMOS" },
  ];

  return (
    <section
      id="home-proceso-resumen"
      className="py-16 sm:py-24 bg-[#0A0A0A] text-white border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              PASO A PASO
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.12] text-white mb-4">
            TÚ NOS CUENTAS QUÉ BUSCAS.
            <br />
            <span className="text-white/80">NOSOTROS NOS ENCARGAMOS DEL RESTO.</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Eliminamos la barrera idiomática, los riesgos técnicos y el papeleo burocrático de comprar un coche en el extranjero.
          </p>
        </div>

        {/* Compact Process Steps Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {compactSteps.map((step, idx) => (
            <div
              key={step.num}
              className="p-5 sm:p-6 bg-[#141414] border border-white/10 flex items-center justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#C8102E] font-bold block mb-1">
                  PASO {step.num}
                </span>
                <span className="font-display text-xs sm:text-sm font-bold tracking-wide uppercase text-white">
                  {step.title}
                </span>
              </div>
              {idx < compactSteps.length - 1 && (
                <ChevronRight className="hidden lg:block w-4 h-4 text-white/20 flex-shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Action link */}
        <div className="flex items-center">
          <button
            onClick={onNavigateProcess}
            className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#C8102E] hover:text-white transition-colors cursor-pointer"
          >
            <span>VER EL PROCESO COMPLETO (6 PASOS DETALLADOS)</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
