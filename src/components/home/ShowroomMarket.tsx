import React from "react";
import { ArrowRight } from "lucide-react";
import golfGtiImage from "../../assets/images/golf_gti_mk8_1787216834169.jpg";

interface ShowroomMarketProps {
  onNavigateImport: () => void;
}

export const ShowroomMarket: React.FC<ShowroomMarketProps> = ({
  onNavigateImport,
}) => {
  return (
    <section
      id="mercado"
      className="py-24 sm:py-32 bg-[#0D0D0D] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Hero Photograph of Golf GTI Mk8 */}
          <div className="lg:col-span-7 relative group overflow-hidden bg-black border border-white/10">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={golfGtiImage}
                alt="Volkswagen Golf GTI Mk8 importado de Alemania"
                className="w-full h-full object-cover object-center brightness-100 contrast-[1.02] group-hover:scale-[1.025] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block mb-1">
                REFERENCIA VISUAL · MERCADO EUROPEO
              </span>
              <p className="text-xs font-light text-white/90">
                Volkswagen Golf GTI Mk8: unidades con configuración y mantenimiento oficial en origen.
              </p>
            </div>
          </div>

          {/* Right Column: Text & Concepts */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                02 / EL MERCADO
              </span>
              <div className="h-[1px] w-8 bg-white/20" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-white mb-6">
              EL COCHE QUE BUSCAS
              <br />
              PUEDE ESTAR A CIENTOS
              <br />
              DE KILÓMETROS.
            </h2>

            {/* Text */}
            <p className="text-sm sm:text-base text-white/75 font-light leading-relaxed mb-8">
              España es solo una parte del mercado. Cuando ampliamos la búsqueda a Alemania y Europa aparecen más unidades, más configuraciones y más posibilidades de encontrar exactamente lo que buscas.
            </p>

            {/* 4 Compact Concepts */}
            <div className="grid grid-cols-2 gap-3 mb-8 pt-6 border-t border-white/10">
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-white/90">
                <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                <span className="font-display font-semibold uppercase">MÁS MERCADO</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-white/90">
                <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                <span className="font-display font-semibold uppercase">MÁS OPCIONES</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-white/90">
                <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                <span className="font-display font-semibold uppercase">MÁS CONFIGURACIONES</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-white/90">
                <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                <span className="font-display font-semibold uppercase">MÁS POSIBILIDADES</span>
              </div>
            </div>

            {/* CTA to Secondary Page */}
            <div>
              <button
                onClick={onNavigateImport}
                className="group inline-flex items-center text-xs font-bold tracking-[0.16em] uppercase text-white hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>DESCUBRIR EL MERCADO</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
