import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import bmw120Image from "../../assets/images/bmw_120_m_sport_pro_1787264242590.jpg";

interface ShowroomPositioningProps {
  onNavigateService: () => void;
}

export const ShowroomPositioning: React.FC<ShowroomPositioningProps> = ({
  onNavigateService,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 100, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const carTranslateX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const carTranslateY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const carRotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);
  const carRotateX = useTransform(smoothY, [-0.5, 0.5], [3, -3]);

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

  return (
    <section
      id="posicionamiento"
      className="relative py-24 sm:py-32 bg-[#F3F2EF] text-[#0A0A0A] overflow-hidden border-y border-black/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Editorial Manifesto */}
          <div className="lg:col-span-6">
            {/* Section Tag */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
                02 / QUÉ SOMOS
              </span>
              <div className="h-[1px] w-8 bg-black/15" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#0A0A0A] mb-6">
              NO SOMOS UN CONCESIONARIO.
              <br />
              <span className="text-[#C8102E]">SOMOS TU PERSONAL CAR SHOPPER.</span>
            </h2>

            {/* Main Manifesto */}
            <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]/80 font-light leading-relaxed mb-10 max-w-xl">
              Tú defines lo que buscas. Nosotros investigamos el mercado, analizamos las unidades, verificamos su estado y gestionamos la operación hasta España.
            </p>

            {/* Link to Secondary Page */}
            <div>
              <button
                onClick={onNavigateService}
                className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#0A0A0A] hover:text-[#C8102E] transition-colors cursor-pointer"
              >
                <span>DESCUBRIR NUESTRO SERVICIO</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive BMW 120 M Sport Pro Visual */}
          <div
            className="lg:col-span-6 relative w-full flex items-center justify-center cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              mouseX.set(0);
              mouseY.set(0);
            }}
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{
                x: carTranslateX,
                y: carTranslateY,
                rotateY: carRotateY,
                rotateX: carRotateX,
                transformStyle: "preserve-3d",
              }}
              animate={{
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{
                scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              }}
              className="relative w-full max-w-[580px] mx-auto py-6"
            >
              {/* Floor Ambient Shadow */}
              <motion.div
                style={{
                  x: shadowX,
                  y: shadowY,
                  scale: shadowScale,
                }}
                animate={{
                  opacity: isHovered ? 0.45 : 0.25,
                }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/30 blur-2xl rounded-full pointer-events-none -z-10"
              />

              {/* BMW 120 M Sport Pro */}
              <img
                src={bmw120Image}
                alt="BMW 120 M Sport Pro con pinzas M Sport rojas y llantas deportivas"
                className="w-full h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.22)]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono tracking-widest text-[#0A0A0A]/45 uppercase">
                  BMW 120 M SPORT PRO · REFERENCIA DE CONFIGURACIÓN
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
