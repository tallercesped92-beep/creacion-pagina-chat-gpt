import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Globe, ShieldCheck } from "lucide-react";
import importMercadoHorizonte from "../assets/images/import_mercado_horizonte_1788602089413.jpg";
import { MagneticCTA } from "./MagneticCTA";

interface MarketSectionProps {
  onCtaClick: () => void;
}

export const MarketSection: React.FC<MarketSectionProps> = ({ onCtaClick }) => {
  return (
    <section
      id="mercado"
      className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-t border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Large Editorial Image */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative group overflow-hidden bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
          >
            <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
              <img
                src={importMercadoHorizonte}
                alt="Vehículo de altas prestaciones en autopista alpina europea y horizonte abierto en Alemania"
                className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Editorial Image Overlay Badge */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C8102E] font-display block mb-1">
                DISPONIBILIDAD & CONFIGURACIÓN
              </span>
              <p className="text-xs font-light text-white/90 tracking-wide">
                Mercado alemán y red europea: acceso directo a las mejores especificaciones del continente.
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
              <div className="h-[1px] w-12 bg-[#111111]/20" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.08] text-[#111111] mb-6">
              EL COCHE QUE BUSCAS
              <br />
              PUEDE ESTAR A CIENTOS
              <br />
              DE KILÓMETROS.
            </h2>

            {/* Copy */}
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed mb-8 max-w-xl">
              España es solo una parte del mercado. Cuando ampliamos la búsqueda a Alemania y Europa, aparecen más unidades, más configuraciones y más posibilidades de encontrar exactamente lo que buscas.
            </p>

            {/* Key Comparison Points - Grandes Argumentos Editoriales */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 bg-white border border-[#E5E3DC] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#C8102E] uppercase">
                    01 / MERCADO
                  </span>
                  <Globe className="w-4 h-4 text-[#111111]/40" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase text-[#111111] mb-1.5">
                  MAYOR VOLUMEN
                </h3>
                <p className="text-xs text-[#111111]/70 font-light leading-relaxed">
                  Mayor volumen y rotación constante de unidades frente a la escasez del mercado local.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#E5E3DC] shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#C8102E] uppercase">
                    02 / TRAZABILIDAD
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#111111]/40" />
                </div>
                <h3 className="font-display text-sm font-bold uppercase text-[#111111] mb-1.5">
                  MAYOR CONTROL
                </h3>
                <p className="text-xs text-[#111111]/70 font-light leading-relaxed">
                  Historiales de mantenimiento certificados y trazabilidad rigurosa.
                </p>
              </div>
            </div>

            {/* CTA with Magnetic Pull */}
            <div>
              <MagneticCTA
                id="market-cta-button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-lg shadow-[#C8102E]/20"
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

