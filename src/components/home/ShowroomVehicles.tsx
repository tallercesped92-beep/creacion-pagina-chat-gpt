import React from "react";
import { ArrowRight } from "lucide-react";
import golfGtiImage from "../../assets/images/golf_gti_mk8_1787216834169.jpg";
import bmwM340iImage from "../../assets/images/bmw_m340i_1787232369357.jpg";
import audiRs3Image from "../../assets/images/audi_rs3_1787232397541.jpg";
import mercedesAmgImage from "../../assets/images/mercedes_amg_c63_1787232409009.jpg";

interface ShowroomVehiclesProps {
  onNavigateVehicles: () => void;
  onSelectVehicle?: (modelQuery: string) => void;
}

export const ShowroomVehicles: React.FC<ShowroomVehiclesProps> = ({
  onNavigateVehicles,
  onSelectVehicle,
}) => {
  const references = [
    {
      num: "01",
      name: "VOLKSWAGEN GOLF GTI MK8",
      segment: "HOT HATCHBACK · COMPACTO DEPORTIVO",
      specs: "2.0 TSI · 245 CV · DSG 7v",
      image: golfGtiImage,
      query: "Volkswagen Golf GTI Mk8",
    },
    {
      num: "02",
      name: "BMW M340i xDRIVE",
      segment: "TOURING / BERLINA · ALTO RENDIMIENTO",
      specs: "3.0 B58 TwinPower Turbo · 374 CV · xDrive",
      image: bmwM340iImage,
      query: "BMW M340i xDrive",
    },
    {
      num: "03",
      name: "AUDI RS3 SPORTBACK",
      segment: "SUPER-HATCHBACK · QUATTRO",
      specs: "2.5 TFSI 5 Cilindros · 400 CV · RS Torque Splitter",
      image: audiRs3Image,
      query: "Audi RS3 Sportback",
    },
    {
      num: "04",
      name: "MERCEDES-AMG C63 S",
      segment: "SPORTS SEDAN / COUPE · AMG PERFORMANCE",
      specs: "V8 Biturbo / Hybrid AMG · Confort & Prestaciones",
      image: mercedesAmgImage,
      query: "Mercedes-AMG C63",
    },
  ];

  return (
    <section
      id="showroom"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              01 / SHOWROOM
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF]">
            LOS COCHES QUE PODEMOS
            <br />
            <span className="text-[#F3F2EF]">ENCONTRAR PARA TI.</span>
          </h2>
        </div>

        {/* 4 Large Visual References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
          {references.map((car) => (
            <div
              key={car.num}
              className="group bg-[#121212] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#C8102E]/60 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/85 backdrop-blur-sm border border-white/10 text-[10px] font-mono tracking-widest text-[#C8102E] uppercase">
                  REFERENCIA {car.num}
                </div>
              </div>

              {/* Data & Actions */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F3F2EF]/50 block mb-1.5">
                    {car.segment}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F3F2EF] mb-2">
                    {car.name}
                  </h3>
                  <p className="text-xs font-mono text-[#F3F2EF]/60 mb-6">
                    {car.specs}
                  </p>
                </div>

                {onSelectVehicle && (
                  <button
                    onClick={() => onSelectVehicle(car.query)}
                    className="w-full py-3.5 bg-white/5 hover:bg-[#C8102E] text-[#F3F2EF] hover:text-white border border-white/10 hover:border-transparent text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>BUSCAR ESTE MODELO</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA - Visual & Prominent */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-start">
          <button
            onClick={onNavigateVehicles}
            className="w-full sm:w-auto px-8 py-4 bg-[#141414] hover:bg-[#1A1A1A] border border-white/20 hover:border-[#C8102E]/60 text-[#F3F2EF] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-between sm:justify-center space-x-4 group shadow-lg"
          >
            <span>VER MÁS EJEMPLOS EN EL CATÁLOGO</span>
            <ArrowRight className="w-4 h-4 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
