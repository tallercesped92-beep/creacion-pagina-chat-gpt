import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import bmw120Image from "../../assets/images/bmw_120_m_sport_pro_1787264242590.jpg";

interface ShowroomPositioningProps {
  onNavigateService: () => void;
}

export const ShowroomPositioning: React.FC<ShowroomPositioningProps> = ({
  onNavigateService,
}) => {
  const [isHovered, setIsHovered] = useState(false);

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

          {/* Right Column: Geometrically Stable, High-End BMW 120 M Sport Pro Studio Presentation */}
          <div
            className="lg:col-span-6 relative w-full flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.018 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[580px] mx-auto py-6"
            >
              {/* Grounded Floor Ambient Shadow: Statically stable, realistic depth */}
              <div
                className={`absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-8 bg-black/25 blur-xl rounded-full pointer-events-none -z-10 transition-opacity duration-700 ${
                  isHovered ? "opacity-35" : "opacity-25"
                }`}
              />

              {/* BMW 120 M Sport Pro: completely stable, crisp, original photography */}
              <img
                src={bmw120Image}
                alt="BMW 120 M Sport Pro con pinzas M Sport rojas y llantas deportivas"
                className="w-full h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_16px_20px_rgba(0,0,0,0.18)] transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              <div className="mt-4 text-center">
                <span className="text-[10px] font-mono tracking-widest text-[#0A0A0A]/50 uppercase">
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
