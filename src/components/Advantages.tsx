import React from "react";
import { motion } from "motion/react";

export const Advantages: React.FC = () => {
  const blocks = [
    { number: "01", title: "MÁS MERCADO", text: "Accedemos a un mercado mucho mayor para encontrar la unidad que realmente encaja contigo. Alemania concentra una oferta mucho más amplia de vehículos, versiones y configuraciones, aumentando las posibilidades de encontrar exactamente el coche que estás buscando.", offset: false },
    { number: "02", title: "MÁS OPCIONES", text: "Versiones, motores, colores y equipamiento que pueden ser difíciles de encontrar en España. Al ampliar la búsqueda al mercado alemán podemos acceder a configuraciones concretas que muchas veces no aparecen en el mercado español.", offset: true },
    { number: "03", title: "MÁS CONTROL", text: "Analizamos cada unidad antes de tomar una decisión. Revisamos características, historial, kilometraje, equipamiento, estado y condiciones de la operación para descartar unidades que no merezcan la pena antes de avanzar.", offset: false },
    { number: "04", title: "UNA DECISIÓN INFORMADA", text: "No compras por impulso. Compras sabiendo qué estás comprando. Nuestro trabajo es analizar las opciones disponibles y poner sobre la mesa toda la información necesaria para que puedas decidir con criterio antes de comprometerte con una unidad.", offset: true },
  ];

  return (
    <section id="ventajas" className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">03 / VENTAJAS</span>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="h-[1px] w-8 bg-[#111111]/20 origin-left" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-[#111111]">POR QUÉ ALEMANIA</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 border-y border-[#111111]/15">
          {blocks.map((block, index) => (
            <motion.article
              key={block.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`py-9 sm:py-11 border-b border-[#111111]/10 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0 ${block.offset ? "md:translate-y-6" : ""}`}
            >
              <div className="flex gap-5 sm:gap-7">
                <span className="font-display text-4xl sm:text-5xl font-bold text-[#C8102E]/80 leading-none">{block.number}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111] mb-4">{block.title}</h3>
                  <p className="text-base text-[#5B6068] font-normal leading-relaxed">{block.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
