import React from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Info, Sparkles } from "lucide-react";
import audiImage from "../assets/images/audi_rs6_hero_1787228419698.jpg";
import bmwImage from "../assets/images/bmw_m3_competition_1787228432881.jpg";
import mercedesImage from "../assets/images/mercedes_amg_c63_1787232409009.jpg";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { VehicleShowcase } from "../components/VehicleShowcase";

interface VehiclesPageProps {
  onSelectVehicle: (modelName: string) => void;
}

export const VehiclesPage: React.FC<VehiclesPageProps> = ({
  onSelectVehicle,
}) => {
  const exampleVehicles = [
    {
      id: "audi-rs6",
      name: "AUDI RS6 AVANT",
      segment: "HIGH PERFORMANCE ESTATE",
      specs: "4.0 V8 TFSI · 600 CV · Quattro",
      advantage: "Excelente disponibilidad de unidades con historial oficial en Alemania",
      image: audiImage,
    },
    {
      id: "bmw-m3",
      name: "BMW M3 COMPETITION / TOURING",
      segment: "PERFORMANCE SALOON / ESTATE",
      specs: "3.0 TwinPower Turbo · 510 CV · M xDrive",
      advantage: "Configuraciones con equipamiento exclusivo e historial certificado",
      image: bmwImage,
    },
    {
      id: "mercedes-amg",
      name: "MERCEDES-AMG C63 S / E PERFORMANCE",
      segment: "SPORTS SALOON / ESTATE",
      specs: "V8 Biturbo / Hybrid AMG · Rendimiento y confort",
      advantage: "Unidades verificadas en concesionarios Mercedes-Benz Certified en Alemania",
      image: mercedesImage,
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              EJEMPLOS / MERCADO ALEMÁN
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            EJEMPLOS DE MODELOS.
            <br />
            <span className="text-[#C8102E]">NO UN CATÁLOGO CERRADO.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-6">
            No somos un concesionario con coches parados en una nave. Trabajamos como tu personal shopper automotriz, localizando en Alemania exactamente la unidad, color y equipamiento que deseas.
          </p>
        </div>

        {/* Mandatory Explanatory Banner */}
        <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 relative overflow-hidden mb-16">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[#C8102E]/10 text-[#C8102E] border border-[#C8102E]/20 flex-shrink-0 mt-1">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-base font-bold uppercase text-white mb-1.5 tracking-wide">
                BUSCAMOS CUALQUIER MODELO Y CONFIGURACIÓN
              </h2>
              <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
                <strong>
                  No dependemos de un catálogo cerrado. Si buscas un modelo específico, cuéntanos qué necesitas y analizamos el mercado para localizar unidades disponibles.
                </strong>
              </p>
              <p className="text-xs text-white/55 font-light leading-relaxed mt-2">
                Los vehículos mostrados a continuación son solo referencias ilustrativas de los segmentos más habituales que nuestros clientes nos solicitan buscar e importar desde Alemania.
              </p>
            </div>
          </div>
        </div>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {exampleVehicles.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#141414] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#C8102E]/50 transition-colors"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] font-mono tracking-widest uppercase bg-black/70 px-2.5 py-1 text-white/90 backdrop-blur-sm border border-white/10">
                  {car.segment}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase text-white mb-2 tracking-tight">
                    {car.name}
                  </h3>
                  <p className="text-xs font-mono text-[#C8102E] mb-3">{car.specs}</p>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {car.advantage}
                  </p>
                </div>

                <button
                  onClick={() => onSelectVehicle(car.name)}
                  className="w-full py-3.5 bg-white/5 hover:bg-[#C8102E] text-white hover:text-white border border-white/15 hover:border-transparent text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>BUSCAR UN {car.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Vehicle Showcase Gallery */}
      <VehicleShowcase onSelectVehicle={onSelectVehicle} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-20">
        {/* Custom Vehicle CTA Box */}
        <div className="p-8 sm:p-12 bg-[#141414] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C8102E] block mb-2 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              ¿BUSCAS OTRO MODELO O MARCA?
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-3">
              MERCEDES-BENZ, VOLKSWAGEN, CUPRA, LAND ROVER...
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              No importa si buscas un SUV familiar diésel, un deportivo de fin de semana o un compacto híbrido: indícanos tus requisitos y abrimos una búsqueda a tu medida.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <button
              onClick={() => onSelectVehicle("")}
              className="px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-lg text-center cursor-pointer"
            >
              SOLICITAR BÚSQUEDA A MEDIDA
            </button>

            <a
              href={getWhatsAppUrl("Hola, busco un modelo concreto y me gustaría consultar disponibilidad en Alemania.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-[0.14em] uppercase transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-white/70" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
