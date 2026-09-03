import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import finalCtaCarImage from "../assets/images/bmw_m3_competition_1787228432881.jpg";
import { MagneticCTA } from "./MagneticCTA";

interface FinalCTAProps {
  onCtaClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onCtaClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", shouldReduceMotion ? "-6%" : "6%"]
  );

  return (
    <section
      ref={sectionRef}
      id="cta-final"
      className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center py-24 bg-[#0A0A0A] text-white overflow-hidden"
    >
      {/* Background Image Container with Parallax and Zoom */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          initial={{ scale: shouldReduceMotion ? 1 : 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full scale-110"
        >
          <img
            src={finalCtaCarImage}
            alt="BMW M de altas prestaciones en entorno europeo exclusivo"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Layered vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80" />
        <div className="absolute inset-0 bg-[#0A0A0A]/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.08] text-white mb-10 max-w-4xl"
        >
          EL COCHE QUE QUIERES
          <br />
          <span className="text-white/90">EMPIEZA CON UNA BÚSQUEDA.</span>
        </motion.h2>

        {/* CTA Button with Magnetic Pull & Diagonal Shine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticCTA
            id="final-cta-button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center px-10 py-5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-2xl shadow-[#C8102E]/40 hover:shadow-[#C8102E]/60 hover:scale-[1.02]"
          >
            <span>ENCONTRAR MI COCHE</span>
            <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1.5 transition-transform" />
          </MagneticCTA>
        </motion.div>
      </div>
    </section>
  );
};
