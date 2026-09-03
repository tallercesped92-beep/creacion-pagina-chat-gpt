import React from "react";
import { ArrowRight, Info } from "lucide-react";
import golfGtiImage from "../../assets/images/golf_gti_mk8_1787216834169.jpg";
import audiQ5SportbackImage from "../../assets/images/audi_q5_sportback_1787232355393.jpg";
import bmwM340iImage from "../../assets/images/bmw_m340i_1787232369357.jpg";

interface HomeVehiclesSummaryProps {
  onNavigateVehicles: () => void;
  onSelectVehicle?: (modelName: string) => void;
}

export const HomeVehiclesSummary: React.FC<HomeVehiclesSummaryProps> = ({
  onNavigateVehicles,
  onSelectVehicle,
}) => {
  const sampleVehicles = [
    {
      id: "vw-golf-gti-mk8",
      title: "VOLKSWAGEN GOLF GTI MK8",
      modelQuery: "Volkswagen Golf GTI",
      image: golfGtiImage,
      alt: "Volkswagen Golf GTI Mk8 rojo en carretera",
      tag: "COMPACTO DEPORTIVO",
    },
    {
      id: "bmw-m340i",
      title: "BMW M340i xDRIVE",
      modelQuery: "BMW M340i",
      image: bmwM340iImage,
      alt: "BMW M340i xDrive Berlina deportiva",
      tag: "BERLINA PERFORMANCE",
    },
    {
      id: "audi-q5-sportback",
      title: "AUDI Q5 SPORTBACK",
      modelQuery: "Audi Q5 Sportback",
      image: audiQ5SportbackImage,
      alt: "Audi Q5 Sportback SUV coupé",
      tag: "SUV PREMIUM",
    },
  ];

  return (
    <section
      id="home-vehiculos-resumen"
      className="py-16 sm:py-24 bg-[#0A0A0A] text-white border-b border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                MERCADO ALEMÁN
              </span>
              <div className="h-[1px] w-8 bg-white/20" />
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight uppercase leading-tight text-white mb-2">
              REFERENCIAS DE MERCADO
            </h2>

            <p className="text-xs sm:text-sm text-white/60 font-light max-w-xl">
              No disponemos de stock cerrado: localizamos la unidad exacta para cada cliente. Estas son algunas de las configuraciones más demandadas.
            </p>
          </div>

          <button
            onClick={onNavigateVehicles}
            className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.16em] uppercase text-[#C8102E] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>VER REFERENCIAS DEL MERCADO</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 3 Vehicles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {sampleVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#141414] border border-white/10 group hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1f1f1f]">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80">
                  {vehicle.tag}
                </div>
              </div>

              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-2">
                    {vehicle.title}
                  </h3>
                  <p className="text-xs text-white/50 font-light mb-4">
                    Disponible para búsqueda personalizada en concesionarios oficiales de Alemania.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (onSelectVehicle) {
                        onSelectVehicle(vehicle.modelQuery);
                      } else {
                        onNavigateVehicles();
                      }
                    }}
                    className="text-xs font-bold tracking-wider uppercase text-white hover:text-[#C8102E] transition-colors inline-flex items-center"
                  >
                    <span>CONSULTAR ESTE MODELO</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market disclaimer note */}
        <div className="flex items-center space-x-2 text-[11px] font-mono text-white/40">
          <Info className="w-3.5 h-3.5 flex-shrink-0" />
          <span>No mantenemos stock propio. Localizamos unidades por encargo en concesionarios oficiales.</span>
        </div>
      </div>
    </section>
  );
};
