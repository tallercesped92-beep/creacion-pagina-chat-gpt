import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Info } from "lucide-react";
import golfGtiImage from "../assets/images/golf_gti_mk8_1787216834169.jpg";
import audiQ5SportbackImage from "../assets/images/audi_q5_sportback_1787232355393.jpg";
import bmwM340iImage from "../assets/images/bmw_m340i_1787232369357.jpg";
import bmwX1Image from "../assets/images/bmw_x1_1787232383364.jpg";
import audiRs3Image from "../assets/images/audi_rs3_1787232397541.jpg";
import mercedesAmgImage from "../assets/images/mercedes_amg_c63_1787232409009.jpg";

interface VehicleShowcaseProps {
  onSelectVehicle?: (modelName: string) => void;
}

export const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({
  onSelectVehicle,
}) => {
  const showcaseVehicles = [
    {
      id: "vw-golf-gti-mk8",
      number: "01",
      title: "VOLKSWAGEN GOLF GTI MK8",
      modelQuery: "Volkswagen Golf GTI",
      image: golfGtiImage,
      alt: "Volkswagen Golf GTI Mk8 en rojo metalizado con frontal característico",
    },
    {
      id: "audi-q5-sportback",
      number: "02",
      title: "AUDI Q5 SPORTBACK",
      modelQuery: "Audi Q5 Sportback",
      image: audiQ5SportbackImage,
      alt: "Audi Q5 Sportback con silueta coupé deportiva y pilotos OLED",
    },
    {
      id: "bmw-m340i",
      number: "03",
      title: "BMW M340i xDRIVE",
      modelQuery: "BMW M340i",
      image: bmwM340iImage,
      alt: "BMW M340i xDrive Berlina con calandra M y pinzas de freno azules",
    },
    {
      id: "bmw-x1",
      number: "04",
      title: "BMW X1 xDRIVE",
      modelQuery: "BMW X1",
      image: bmwX1Image,
      alt: "BMW X1 xDrive con paquete M Sport y óptica LED moderna",
    },
    {
      id: "audi-rs3",
      number: "05",
      title: "AUDI RS3 SPORTBACK",
      modelQuery: "Audi RS3",
      image: audiRs3Image,
      alt: "Audi RS3 Sportback con calandra Singleframe RS tipo panal y pasos de rueda ensanchados",
    },
    {
      id: "mercedes-amg",
      number: "06",
      title: "MERCEDES-AMG C43 / C63",
      modelQuery: "Mercedes-AMG C63",
      image: mercedesAmgImage,
      alt: "Mercedes-AMG C-Class con calandra Panamericana de lamas verticales y acabado AMG",
    },
  ];

  return (
    <section
      id="vehiculos-referencia"
      className="py-24 sm:py-32 bg-[#FAF9F6] text-[#111111] border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              05 / REFERENCIAS VISUALES
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-8 bg-[#111111]/20 origin-left"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-[#111111] mb-6">
            EJEMPLOS DE VEHÍCULOS
            <br />
            QUE BUSCAMOS EN ALEMANIA
          </h2>

          <div className="p-4 sm:p-5 bg-white border border-[#E5E3DC] flex items-start space-x-3 text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed">
            <Info className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#111111] font-semibold">
                No dependemos de un catálogo cerrado.
              </strong>{" "}
              Si buscas un modelo específico, cuéntanos qué necesitas y analizamos el mercado para localizar unidades disponibles con historial oficial verificado.
            </p>
          </div>
        </div>

        {/* 6 Visual Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {showcaseVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.25)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group flex flex-col bg-[#0A0A0A] overflow-hidden border border-[#E5E3DC] hover:border-[#C8102E] transition-all duration-300 shadow-sm"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="w-full h-full object-cover object-center brightness-100 contrast-[1.02] group-hover:scale-[1.025] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Label Content */}
              <div className="p-6 bg-[#0A0A0A] text-white flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] font-display">
                      {vehicle.number}
                    </span>
                    <div className="h-[1px] w-5 bg-white/20" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight uppercase text-white group-hover:text-white/95 transition-colors mb-4">
                    {vehicle.title}
                  </h3>
                </div>

                {onSelectVehicle && (
                  <button
                    onClick={() => onSelectVehicle(vehicle.modelQuery)}
                    className="w-full mt-2 py-3 bg-white/5 hover:bg-[#C8102E] text-white border border-white/10 hover:border-transparent text-xs font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>BUSCAR ESTE MODELO</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
