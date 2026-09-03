import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroPosterImage from "../assets/images/bmw_m4_darkness_1788475162547.jpg";
import heroAudiFallback from "../assets/images/audi_rs6_hero_1787228419698.jpg";
import { MagneticCTA } from "./MagneticCTA";

interface HeroProps {
  onCtaClick: () => void;
  onProcessClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onProcessClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, [shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", shouldReduceMotion ? "0%" : "6%"]
  );

  const scrollToNext = () => {
    const el = document.getElementById("showroom") || document.getElementById("vehiculos");
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleProcessClick = () => {
    if (onProcessClick) {
      onProcessClick();
      return;
    }
    const el = document.getElementById("proceso");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const line1Words = ["EL", "MERCADO", "ALEMÁN."];
  const line2Words = ["EN", "TU", "GARAJE."];

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-screen w-full flex items-end pb-16 sm:pb-24 pt-28 sm:pt-32 overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Background video: keep the image visible and let the content provide the contrast. */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          initial={{ scale: shouldReduceMotion ? 1 : 1.03, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full h-full"
        >
          <img
            src={heroPosterImage || heroAudiFallback}
            alt="Vehículos de alta gama importados de Alemania - Céspedes Automotriz"
            className={`absolute inset-0 w-full h-full object-cover object-[center_42%] sm:object-center brightness-[0.92] contrast-[1.05] transition-opacity duration-700 ${
              isVideoLoaded && !shouldReduceMotion ? "opacity-0" : "opacity-100"
            }`}
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {!shouldReduceMotion && !videoError && (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={heroPosterImage}
              onCanPlay={() => setIsVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`absolute inset-0 w-full h-full object-cover object-[center_42%] sm:object-center brightness-[0.92] contrast-[1.05] transition-opacity duration-700 ${
                isVideoLoaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/videos/hero_cinematic_automotive.mp4" type="video/mp4" />
              <source src="/videos/hero_cinematic_automotive.webm" type="video/webm" />
            </video>
          )}
        </motion.div>

        {/* One restrained readability layer instead of multiple dark overlays. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/72 via-[#0A0A0A]/28 to-transparent sm:from-[#0A0A0A]/62 sm:via-[#0A0A0A]/18" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A]/65 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="max-w-3xl">
          <h1
            id="hero-main-title"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tight uppercase leading-[1.04] text-[#F3F2EF] mb-8 drop-shadow-md"
          >
            <span className="block overflow-hidden pb-1">
              {line1Words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-[0.25em] align-top">
                  <motion.span
                    initial={{ y: shouldReduceMotion ? 0 : "110%", opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-[#F3F2EF]"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>

            <span className="block overflow-hidden pb-1">
              {line2Words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden mr-[0.25em] align-top">
                  <motion.span
                    initial={{ y: shouldReduceMotion ? 0 : "110%", opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.45 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-[#F3F2EF]"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#F3F2EF]/85 font-light leading-relaxed max-w-2xl mb-10"
          >
            Accedemos al mercado alemán para localizar, analizar y verificar el vehículo que buscas, gestionando toda la operación hasta España.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            <MagneticCTA
              id="hero-cta-button"
              onClick={onCtaClick}
              className="px-6 sm:px-9 py-4 sm:py-4.5 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-xl shadow-[#C8102E]/25 text-center flex items-center justify-center group whitespace-nowrap"
            >
              <span className="whitespace-nowrap">ENCONTRAR MI COCHE</span>
              <ArrowRight className="w-4 h-4 ml-2.5 sm:ml-3 flex-shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </MagneticCTA>

            <button
              id="hero-secondary-cta"
              onClick={handleProcessClick}
              className="px-5 py-3.5 text-[#F3F2EF]/80 hover:text-[#F3F2EF] text-xs font-semibold tracking-[0.16em] uppercase transition-colors cursor-pointer text-center sm:text-left inline-flex items-center justify-center sm:justify-start group"
            >
              <span>CÓMO FUNCIONA</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        id="hero-scroll-indicator"
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white/40 hover:text-white transition-colors cursor-pointer flex flex-col items-center"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};
