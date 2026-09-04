import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import bmwM4Image from "../assets/images/bmw_m4_darkness_1788475162547.jpg";
import audiRs6Image from "../assets/images/audi_rs6_hero_1787228419698.jpg";
import amgGtImage from "../assets/images/mercedes_amg_gt_arch_1788475189996.jpg";
import porsche911Image from "../assets/images/porsche_911_cinematic_1788475175772.jpg";
import macroCaliperImage from "../assets/images/auto_detail_macro_1788475203812.jpg";
import bmwM3Image from "../assets/images/bmw_m3_competition_1787228432881.jpg";
import { MagneticCTA } from "./MagneticCTA";

interface HeroProps {
  onCtaClick: () => void;
  onProcessClick?: () => void;
}

interface HeroScene {
  id: string;
  image: string;
  alt: string;
  from: { scale: number; x: number; y: number };
  to: { scale: number; x: number; y: number };
}

const SCENE_DURATION_MS = 4800;
const DURATION_SEC = 4.8;
const FADE_SEC = 0.5;

const HERO_SCENES: HeroScene[] = [
  // IMAGEN 1 — BMW M4: slow cinematic push-in, ligero desplazamiento lateral, scale 1.00 -> 1.05, lateral ~20px
  {
    id: "bmw-m4",
    image: bmwM4Image,
    alt: "BMW M4 Competition importado de Alemania - Céspedes Automotriz",
    from: { scale: 1.0, x: -10, y: 0 },
    to: { scale: 1.05, x: 10, y: 0 },
  },
  // IMAGEN 2 — AUDI RS6: travelling lateral suave, parallax continuo, scale 1.02 -> 1.05, desplazamiento horizontal ~26px
  {
    id: "audi-rs6",
    image: audiRs6Image,
    alt: "Audi RS6 Avant - Importación y verificación en Alemania",
    from: { scale: 1.02, x: -13, y: 0 },
    to: { scale: 1.05, x: 13, y: 0 },
  },
  // IMAGEN 3 — MERCEDES-AMG GT: lateral cinematográfico, suave movimiento vertical, scale 1.00 -> 1.04
  {
    id: "mercedes-amg-gt",
    image: amgGtImage,
    alt: "Mercedes-AMG GT Coupé de reestreno importado de Alemania",
    from: { scale: 1.0, x: 13, y: -6 },
    to: { scale: 1.04, x: -13, y: 6 },
  },
  // IMAGEN 4 — PORSCHE 911: push-in perceptible, micro desplazamiento lateral, vertical mínimo
  {
    id: "porsche-911",
    image: porsche911Image,
    alt: "Porsche 911 GT3 - Gestión integral de importación desde Alemania",
    from: { scale: 1.0, x: -7, y: 4 },
    to: { scale: 1.06, x: 7, y: -4 },
  },
  // IMAGEN 5 — DETALLE / PINZA DE FRENO PORSCHE (REFERENCIA): macro limpio, micro lateral, push-in continuo sin vibración
  {
    id: "porsche-caliper-macro",
    image: macroCaliperImage,
    alt: "Inspección técnica de componentes y frenos - Céspedes Automotriz",
    from: { scale: 1.0, x: -8, y: 0 },
    to: { scale: 1.04, x: 8, y: 0 },
  },
  // IMAGEN 6 — BMW M3 COMPETITION: slow push-in, travelling lateral, scale 1.00 -> 1.05, cierre premium
  {
    id: "bmw-m3-competition",
    image: bmwM3Image,
    alt: "BMW M3 Competition entregado y matriculado en España",
    from: { scale: 1.0, x: 10, y: 0 },
    to: { scale: 1.05, x: -10, y: 0 },
  },
];

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onProcessClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // Preload all 6 images into browser cache immediately for instant texture availability
  useEffect(() => {
    HERO_SCENES.forEach((scene) => {
      const img = new Image();
      img.src = scene.image;
    });
  }, []);

  // Continuous camera slideshow loop with visibility detection
  useEffect(() => {
    if (shouldReduceMotion) return;

    let intervalId: NodeJS.Timeout;

    const startTimer = () => {
      intervalId = setInterval(() => {
        setCurrentSceneIndex((prev) => (prev + 1) % HERO_SCENES.length);
      }, SCENE_DURATION_MS);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(intervalId);
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
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

  const activeScene = HERO_SCENES[currentSceneIndex];

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-screen w-full flex items-end pb-16 sm:pb-24 pt-28 sm:pt-32 overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Background cinematic camera scenes with 60fps GPU acceleration */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="w-full h-full relative"
        >
          {shouldReduceMotion ? (
            <div className="absolute inset-0 w-full h-full">
              <img
                src={HERO_SCENES[0].image}
                alt={HERO_SCENES[0].alt}
                className="w-full h-full object-cover object-[center_42%] sm:object-center brightness-[0.92] contrast-[1.05]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <AnimatePresence initial={false}>
              <motion.div
                key={activeScene.id}
                initial={{
                  opacity: 0,
                  scale: activeScene.from.scale,
                  x: activeScene.from.x,
                  y: activeScene.from.y,
                }}
                animate={{
                  opacity: 1,
                  scale: activeScene.to.scale,
                  x: activeScene.to.x,
                  y: activeScene.to.y,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    opacity: { duration: FADE_SEC, ease: [0.25, 0.1, 0.25, 1] },
                  },
                }}
                transition={{
                  opacity: { duration: FADE_SEC, ease: [0.25, 0.1, 0.25, 1] },
                  scale: { duration: DURATION_SEC, ease: "linear" },
                  x: { duration: DURATION_SEC, ease: "linear" },
                  y: { duration: DURATION_SEC, ease: "linear" },
                }}
                className="absolute inset-0 w-full h-full"
                style={{
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img
                  src={activeScene.image}
                  alt={activeScene.alt}
                  className="w-full h-full object-cover object-[center_42%] sm:object-center brightness-[0.92] contrast-[1.05]"
                  loading={currentSceneIndex === 0 ? "eager" : "lazy"}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>

        {/* One restrained readability layer instead of multiple dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/72 via-[#0A0A0A]/28 to-transparent sm:from-[#0A0A0A]/62 sm:via-[#0A0A0A]/18 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0A]/65 to-transparent pointer-events-none" />
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
