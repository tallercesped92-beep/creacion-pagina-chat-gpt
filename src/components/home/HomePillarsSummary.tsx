import React from "react";
import { motion } from "motion/react";
import { Search, BarChart3, ShieldCheck, Compass, ArrowRight } from "lucide-react";

interface HomePillarsSummaryProps {
  onNavigateService: () => void;
}

export const HomePillarsSummary: React.FC<HomePillarsSummaryProps> = ({
  onNavigateService,
}) => {
  const pillars = [
    {
      num: "01",
      icon: Search,
      title: "BUSCAMOS",
      headline: "Rastreo sin límites",
      shortDesc: "Localizamos unidades exactas en concesionarios oficiales alemanes.",
    },
    {
      num: "02",
      icon: BarChart3,
      title: "ANALIZAMOS",
      headline: "Auditoría integral",
      shortDesc: "Historial de revisiones, kilometraje oficial y cálculo cerrado de costes.",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "VERIFICAMOS",
      headline: "Peritaje in situ",
      shortDesc: "Inspección técnica presencial y diagnosis electrónica antes de comprar.",
    },
    {
      num: "04",
      icon: Compass,
      title: "ACOMPAÑAMOS",
      headline: "Hasta tu garaje",
      shortDesc: "Transporte asegurado, ITV, liquidación de tasas y matriculación en España.",
    },
  ];

  return (
    <section
      id="home-4-pilares"
      className="py-16 sm:py-24 bg-[#111111] text-white border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                MÉTODO DE TRABAJO
              </span>
              <div className="h-[1px] w-8 bg-white/20" />
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight uppercase leading-tight text-white">
              NUESTROS 4 PILARES
            </h2>
          </div>

          <button
            onClick={onNavigateService}
            className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#C8102E] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>CONOCE NUESTRO SERVICIO</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Summary Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-6 sm:p-7 bg-[#161616] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-white/40 font-semibold tracking-wider">
                      {pillar.num}
                    </span>
                    <div className="p-2.5 bg-white/5 border border-white/10 text-white/90">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold tracking-wider uppercase text-white mb-1.5">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#C8102E] uppercase tracking-wide mb-3">
                    {pillar.headline}
                  </p>

                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {pillar.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile quick link */}
        <div className="mt-8 text-center sm:hidden">
          <button
            onClick={onNavigateService}
            className="inline-flex items-center text-xs font-bold tracking-[0.16em] uppercase text-[#C8102E] hover:underline"
          >
            <span>CONOCE NUESTRO SERVICIO →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
