import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { VehicleShowcase } from "../components/VehicleShowcase";

interface VehiclesPageProps {
  onSelectVehicle: (modelName: string) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({
  onSelectVehicle,
}) => {
  return (
    <div className="pt-28 pb-24 sm:pb-32 bg-[#F3F2EF] text-[#111111] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ===================================================================
            BLOQUE 1: INTRODUCCIÓN EDITORIAL
           =================================================================== */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          {/* Indicador Editorial */}
          <div className="flex items-center space-x-3 mb-5">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8102E] uppercase">
              05 / VEHÍCULOS
            </span>
            <div className="h-[1px] w-12 bg-[#111111]/20" />
          </div>

          {/* Título Principal */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-[#111111] mb-6">
            COCHES QUE PODEMOS
            <br />
            ENCONTRAR PARA TI.
          </h1>

          {/* Subtítulo Conciso */}
          <p className="text-base sm:text-xl text-[#111111]/80 font-light leading-relaxed mb-6 max-w-2xl">
            No trabajamos con un catálogo cerrado. Buscamos en Alemania la unidad que encaje con tus requisitos, presupuesto y configuración.
          </p>

          {/* Etiqueta Editorial Discreta (REFERENCIAS · NO STOCK) */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-2 bg-white border border-[#E5E3DC] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
            <span className="text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#111111]">
              REFERENCIAS · NO STOCK
            </span>
            <span className="hidden sm:inline text-xs font-mono text-[#111111]/30">|</span>
            <span className="text-xs font-mono text-[#111111]/60">
              Unidades localizables bajo demanda en concesionarios oficiales en Alemania
            </span>
          </div>
        </div>

        {/* ===================================================================
            BLOQUE 2: SHOWROOM EDITORIAL CON RITMO
           =================================================================== */}
        <VehicleShowcase onSelectVehicle={onSelectVehicle} />

        {/* ===================================================================
            BLOQUE 3: CIERRE EDITORIAL Y CTA POTENTE
           =================================================================== */}
        <div id="showroom-cta-final" className="mt-20 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#E5E3DC] p-8 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden"
          >
            {/* Acento vertical distintivo */}
            <div className="absolute top-0 left-0 w-2 h-full bg-[#C8102E]" />

            <div className="max-w-4xl">
              <div className="flex items-center space-x-2.5 mb-3">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#C8102E] uppercase">
                  ¿NO ESTÁ AQUÍ EL TUYO?
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#111111] leading-none mb-6">
                MEJOR.
              </h2>

              <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed mb-8 max-w-3xl">
                Estas son solo referencias. Dinos qué coche buscas, tu presupuesto, kilometraje, motor y equipamiento. Nosotros buscamos la unidad adecuada en Alemania.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="btn-cta-quiero-buscar-mi-coche"
                  onClick={() => onSelectVehicle("")}
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 shadow-md group"
                >
                  <span>QUIERO BUSCAR MI COCHE</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>

                <div className="flex items-center space-x-2 text-xs font-mono text-[#111111]/60 px-2 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                  <span>Búsqueda personalizada bajo demanda · Trato directo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

