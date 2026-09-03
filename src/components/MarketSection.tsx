import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import golfGtiImage from "../assets/images/golf_gti_mk8_1787216834169.jpg";
import { MagneticCTA } from "./MagneticCTA";

interface MarketSectionProps {
  onCtaClick: () => void;
}

export const MarketSection: React.FC<MarketSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="mercado"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group overflow-hidden bg-[#0A0A0A] border border-white/10"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src={golfGtiImage}
                alt="Volkswagen Golf GTI Mk8 en carretera y entorno europeo"
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Editorial Image Overlay Badge */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/40 to-transparent text-white">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8102E] font-display block mb-1">
                DISPONIBILIDAD & CONFIGURACIÓN
              </span>
              <p className="text-xs font-light text-white/90 tracking-wide">
                Volkswagen Golf GTI Mk8 y gama europea: mayor abanico de especificaciones.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                02 / EL MERCADO
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-8 bg-white/20 origin-left"
              />
            </div>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.12] text-white mb-6">
              EL COCHE QUE BUSCAS
              <br />
              PUEDE ESTAR A CIENTOS
              <br />
              DE KILÓMETROS.
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-8">
              España es solo una parte del mercado. Cuando ampliamos la búsqueda a Alemania y Europa, aparecen más unidades, más configuraciones y más posibilidades de encontrar exactamente lo que buscas.
            </p>

            {/* Key Comparison Points */}
            <div className="space-y-4 mb-10 py-6 border-y border-white/10">
              <div className="flex items-start">
                <span className="font-display font-bold text-xs text-[#C8102E] tracking-widest mt-1 mr-4">
                  01
                </span>
                <p className="text-sm font-medium text-white/90">
                  Mayor volumen y rotación constante de unidades frente a la escasez del mercado local.
                </p>
              </div>
              <div className="flex items-start">
                <span className="font-display font-bold text-xs text-[#C8102E] tracking-widest mt-1 mr-4">
                  02
                </span>
                <p className="text-sm font-medium text-white/90">
                  Historiales de mantenimiento certificados y trazabilidad rigurosa.
                </p>
              </div>
            </div>

            {/* CTA with Magnetic Pull and Diagonal Shine */}
            <div>
              <MagneticCTA
                id="market-cta-button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-md"
              >
                <span>QUIERO ENCONTRAR EL MÍO</span>
                <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </MagneticCTA>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
