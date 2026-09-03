import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Shield, Award, CheckCircle2 } from "lucide-react";

interface HomeValueBriefProps {
  onLearnMore: () => void;
}

export const HomeValueBrief: React.FC<HomeValueBriefProps> = ({ onLearnMore }) => {
  return (
    <section
      id="home-propuesta-valor"
      className="py-16 sm:py-24 bg-[#0D0D0D] text-white border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              PROPUESTA DE VALOR
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.12] text-white mb-6">
            PERSONAL CAR SHOPPER
            <br />
            <span className="text-white/80">INDEPENDIENTE EN ESPAÑA</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed mb-8">
            No somos un concesionario con coches en stock intentando venderte lo que tenemos aparcado. Trabajamos exclusivamente para ti: buscamos, auditamos técnicamente y acompañamos la importación de tu vehículo ideal en Alemania con total transparencia y presupuesto cerrado.
          </p>

          <button
            onClick={onLearnMore}
            className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-white hover:text-[#C8102E] transition-colors cursor-pointer"
          >
            <span>CONOCE EN DETALLE CÓMO TRABAJAMOS</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
