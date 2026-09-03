import React from "react";
import { ArrowRight, ArrowRightCircle } from "lucide-react";

interface HomeImportSummaryProps {
  onNavigateImport: () => void;
}

export const HomeImportSummary: React.FC<HomeImportSummaryProps> = ({
  onNavigateImport,
}) => {
  const stages = [
    { name: "ALEMANIA", desc: "Selección oficial & negociación" },
    { name: "VERIFICACIÓN", desc: "Peritaje técnico & diagnosis" },
    { name: "TRANSPORTE", desc: "Portavehículos 100% asegurado" },
    { name: "ESPAÑA", desc: "ITV, impuestos & matriculación" },
  ];

  return (
    <section
      id="home-importacion-resumen"
      className="py-16 sm:py-24 bg-[#111111] text-white border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              IMPORTACIÓN PROFESIONAL
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight uppercase leading-tight text-white mb-4">
            ALEMANIA ➔ ESPAÑA
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
            Coordinamos la logística internacional, el peritaje en origen y todos los trámites aduaneros, de ITV y matriculación con presupuesto cerrado y sin sorpresas.
          </p>
        </div>

        {/* Linear Stage Diagram */}
        <div className="bg-[#171717] border border-white/10 p-6 sm:p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {stages.map((stage, idx) => (
              <div key={stage.name} className="relative">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-mono text-xs text-[#C8102E] font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-sm sm:text-base font-bold tracking-wider uppercase text-white">
                    {stage.name}
                  </h3>
                </div>
                <p className="text-xs text-white/50 font-light">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action link */}
        <button
          onClick={onNavigateImport}
          className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#C8102E] hover:text-white transition-colors cursor-pointer"
        >
          <span>DESCUBRE EL PROCESO DE IMPORTACIÓN</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
