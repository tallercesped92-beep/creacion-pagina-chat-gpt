import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import bmw120Image from "../assets/images/bmw_120_m_sport_pro_1787264242590.jpg";

export const Positioning: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth, organic, slow luxury motion
  const springConfig = { damping: 28, stiffness: 100, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax translation & subtle tilt
  const carTranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const carTranslateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const carRotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const carRotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);

  // Dynamic shadow displacement responding inversely to tilt
  const shadowX = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const shadowY = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const shadowScale = useTransform(smoothY, [-0.5, 0.5], [0.96, 1.04]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

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
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Interactive Vehicle Container */}
            <motion.div
              style={{
                x: carTranslateX,
                y: carTranslateY,
                rotateY: carRotateY,
                rotateX: carRotateX,
                transformStyle: "preserve-3d",
              }}
              animate={{
                scale: isHovered ? 1.035 : 1,
              }}
              transition={{
                scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative w-full max-w-[620px] mx-auto py-4 sm:py-6"
            >
              {/* Automotive Floor Shadow */}
              <motion.div
                style={{
                  x: shadowX,
                  y: shadowY,
                  scale: shadowScale,
                }}
                animate={{
                  opacity: isHovered ? 0.35 : 0.22,
                }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-8 sm:h-12 bg-[#111111] blur-xl rounded-[100%] pointer-events-none -z-10"
              />

              {/* Complete, uncropped BMW 120 M Sport Pro */}
              <img
                src={bmw120Image}
                alt="BMW 120 M Sport Pro en gris grafito metálico con pinzas de freno rojas M Sport y llantas deportivas M"
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
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

