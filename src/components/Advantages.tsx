import React from "react";
import { motion } from "motion/react";

export const Advantages: React.FC = () => {
  const blocks = [
    {
      number: "01",
      title: "MÁS MERCADO",
      text: "Accedemos a un mercado mucho mayor para encontrar la unidad que realmente encaja contigo. Alemania concentra una oferta mucho más amplia de vehículos, versiones y configuraciones, aumentando las posibilidades de encontrar exactamente el coche que estás buscando.",
      offset: false,
    },
    {
      number: "02",
      title: "MÁS OPCIONES",
      text: "Versiones, motores, colores y equipamiento que pueden ser difíciles de encontrar en España. Al ampliar la búsqueda al mercado alemán podemos acceder a configuraciones concretas que muchas veces no aparecen en el mercado español.",
      offset: true,
    },
    {
      number: "03",
      title: "MÁS CONTROL",
      text: "Analizamos cada unidad antes de tomar una decisión. Revisamos características, historial, kilometraje, equipamiento, estado y condiciones de la operación para descartar unidades que no merezcan la pena antes de avanzar.",
      offset: false,
    },
    {
      number: "04",
      title: "UNA DECISIÓN INFORMADA",
      text: "No compras por impulso. Compras sabiendo qué estás comprando. Nuestro trabajo es analizar las opciones disponibles y poner sobre la mesa toda la información necesaria para que puedas decidir con criterio antes de comprometerte con una unidad.",
      offset: true,
    },
  ];

  return (
    <section
      id="ventajas"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              03 / VENTAJAS
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-8 bg-white/20 origin-left"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-white">
            POR QUÉ ALEMANIA
          </h2>
        </div>

        {/* 4 Explanatory Blocks in Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {blocks.map((block, index) => (
            <motion.div
              key={block.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.5)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`p-8 sm:p-10 bg-[#121212] border border-white/10 hover:border-[#C8102E]/50 transition-all duration-300 relative group flex flex-col justify-between ${
                block.offset ? "md:translate-y-6" : ""
              }`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 group-hover:bg-[#C8102E] transition-colors duration-300" />

              <div>
                {/* Header with Large Number */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#C8102E]">
                    {block.number}
                  </span>
                  <div className="w-2.5 h-2.5 bg-white/20 group-hover:bg-[#C8102E] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white mb-5">
                  {block.title}
                </h3>

                {/* Explanatory Paragraph */}
                <p className="text-base text-white/70 font-normal leading-relaxed">
                  {block.text}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4">
                <div className="h-[2px] w-0 group-hover:w-16 bg-[#C8102E] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
