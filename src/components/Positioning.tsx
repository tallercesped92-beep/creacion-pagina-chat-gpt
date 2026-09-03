import React, { useState } from "react";
import { motion } from "motion/react";
import bmw120Image from "../assets/images/bmw_120_m_sport_pro_1787264242590.jpg";

export const Positioning: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="posicionamiento"
      className="relative py-28 sm:py-36 bg-[#F3F2EF] text-[#111111] overflow-hidden border-b border-[#E5E3DC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left Column (6 Cols) */}
          <div className="lg:col-span-6">
            {/* Section Number & Category */}
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                01 / POSICIONAMIENTO
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-12 bg-[#111111]/20 origin-left"
              />
            </div>

            {/* Statement Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.1] text-[#111111] mb-8"
            >
              EL MERCADO ALEMÁN.
              <br />
              <span className="text-[#6B7280]">EN TU GARAJE.</span>
            </motion.h2>

            {/* Manifesto Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg sm:text-2xl md:text-3xl font-light leading-relaxed text-[#111111]/90 max-w-2xl"
            >
              No buscamos cualquier coche. Buscamos el coche correcto para ti. Accedemos al mercado alemán para identificar, analizar y verificar las unidades que realmente tienen sentido antes de ejecutar cualquier compra.
            </motion.p>

            {/* Precision Footnote */}
            <div className="mt-12 sm:mt-14 pt-8 border-t border-[#111111]/10 flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-semibold tracking-[0.18em] uppercase text-[#6B7280]">
              <div>BÚSQUEDA PERSONALIZADA</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <div>ANÁLISIS DE MERCADO</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <div>VERIFICACIÓN TÉCNICA</div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <div>GESTIÓN INTEGRAL</div>
            </div>
          </div>

          {/* BMW 120 M Sport Pro Image - Right Column (6 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Interactive Vehicle Container - Grounded & Geometrically Stable */}
            <motion.div
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative w-full max-w-[620px] mx-auto py-4 sm:py-6"
            >
              {/* Automotive Floor Shadow */}
              <div
                className={`absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-8 sm:h-12 bg-[#111111] blur-xl rounded-[100%] pointer-events-none -z-10 transition-opacity duration-700 ${
                  isHovered ? "opacity-35" : "opacity-22"
                }`}
              />

              {/* Complete, uncropped BMW 120 M Sport Pro */}
              <img
                src={bmw120Image}
                alt="BMW 120 M Sport Pro en gris grafito metálico con pinzas de freno rojas M Sport y llantas deportivas M"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_16px_20px_rgba(0,0,0,0.12)] transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

