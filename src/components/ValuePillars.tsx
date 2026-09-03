import React from "react";
import { motion } from "motion/react";
import { Search, BarChart3, ShieldCheck, Compass, ArrowRight } from "lucide-react";

interface ValuePillarsProps {
  onCtaClick?: () => void;
}

export const ValuePillars: React.FC<ValuePillarsProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      num: "01",
      icon: Search,
      title: "BUSCAMOS",
      headline: "Rastreo sin restricciones",
      desc: "Localizamos unidades que realmente encajan con los requisitos y configuración del cliente en los principales canales y concesionarios oficiales de Alemania.",
      highlight: "Filtro activo de mercado",
    },
    {
      num: "02",
      icon: BarChart3,
      title: "ANALIZAMOS",
      headline: "Auditoría integral de valor",
      desc: "Comparamos precio de mercado, kilometraje certificado, paquetes de equipamiento, historial oficial de mantenimiento y documentación en origen.",
      highlight: "Presupuesto cerrado previo",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "VERIFICAMOS",
      headline: "Inspección técnica presencial",
      desc: "Cuando corresponde, coordinamos la revisión in situ por perito especializado: diagnosis electrónica, comprobación de pintura, chasis y mecánica.",
      highlight: "Peritaje y diagnosis real",
    },
    {
      num: "04",
      icon: Compass,
      title: "ACOMPAÑAMOS",
      headline: "Gestión hasta tu garaje",
      desc: "El cliente no tiene que enfrentarse solo al proceso de compra, negociación en alemán, transporte asegurado, trámite de ITV y matriculación en España.",
      highlight: "Tranquilidad y rigor legal",
    },
  ];

  return (
    <section
      id="pilares"
      className="py-20 sm:py-28 bg-[#111111] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              02 / NUESTRA PROPUESTA DE VALOR
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-white mb-6">
            POR QUÉ ELEGIR
            <br />
            <span className="text-white/90">CÉSPEDES AUTOMOTRIZ</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            No somos intermediarios pasivos. Actuamos como tu consultor y personal shopper automotriz independiente para que tomes la mejor decisión de compra en Europa con total seguridad técnica y jurídica.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 bg-[#181818] border border-white/10 relative group flex flex-col justify-between"
              >
                {/* Top Red Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C8102E] transition-colors duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E]/10 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-white/30">
                      {pillar.num}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display block mb-1">
                    {pillar.title}
                  </span>

                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
                    {pillar.headline}
                  </h3>

                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-mono text-white/40 tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mr-2" />
                  <span>{pillar.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom micro-conversion link */}
        {onCtaClick && (
          <div className="mt-12 text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/80 hover:text-[#C8102E] transition-colors cursor-pointer py-2 group"
            >
              <span>QUIERO QUE BUSQUÉIS MI COCHE</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform text-[#C8102E]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
