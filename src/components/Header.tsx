import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onCtaClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { id: "nav-home", route: "/", label: "INICIO" },
    { id: "nav-service", route: "/servicio", label: "SERVICIO" },
    { id: "nav-process", route: "/proceso", label: "CÓMO FUNCIONA" },
    { id: "nav-import", route: "/importacion", label: "IMPORTACIÓN" },
    { id: "nav-vehicles", route: "/vehiculos", label: "VEHÍCULOS" },
    { id: "nav-about", route: "/nosotros", label: "NOSOTROS" },
    { id: "nav-contact", route: "/contacto", label: "CONTACTO" },
  ];

  const handleNavClick = (route: string) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header id="main-header" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md text-white py-3 sm:py-4 border-b border-white/10 shadow-xl" : "bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent text-white py-5 sm:py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <motion.button onClick={() => handleNavClick("/")} id="header-brand-logo" initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="group flex flex-col items-start leading-none select-none text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]" aria-label="Ir al inicio">
          <span className="font-display tracking-[0.22em] text-lg sm:text-xl font-bold uppercase text-[#F3F2EF] group-hover:text-[#FAF9F6] transition-colors">CÉSPEDES</span>
          <span className="font-display tracking-[0.38em] text-[10px] sm:text-[11px] font-medium uppercase text-[#F3F2EF]/60 mt-0.5">AUTOMOTRIZ</span>
        </motion.button>

        <motion.nav id="header-desktop-nav" aria-label="Navegación principal" initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }} className="hidden xl:flex items-center space-x-7 text-xs font-semibold tracking-[0.14em] uppercase">
          {navItems.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button key={item.id} id={item.id} onClick={() => handleNavClick(item.route)} aria-current={isActive ? "page" : undefined} className={`relative transition-colors cursor-pointer py-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${isActive ? "text-[#F3F2EF] font-bold" : "text-[#F3F2EF]/70 hover:text-[#F3F2EF]"}`}>
                <span>{item.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#C8102E] origin-left transition-transform duration-300 ease-out pointer-events-none ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </button>
            );
          })}
        </motion.nav>

        <motion.div initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }} className="hidden xl:flex items-center space-x-3">
          <button id="header-cta-button" onClick={onCtaClick} className="relative overflow-hidden group inline-flex items-center px-5 py-2.5 bg-[#C8102E] hover:bg-[#A50C25] text-[#FAF9F6] text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer shadow-lg shadow-[#C8102E]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]">
            <span className="relative z-10 flex items-center"><span>QUIERO BUSCAR MI COCHE</span><ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-0.5 transition-transform" /></span>
          </button>
        </motion.div>

        <div className="flex xl:hidden items-center space-x-2">
          <button id="mobile-menu-toggle" onClick={() => setMobileMenuOpen((open) => !open)} className="p-2 text-white hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] transition-colors cursor-pointer" aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileMenuOpen} aria-controls="header-mobile-drawer">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="header-mobile-drawer" role="dialog" aria-label="Menú de navegación" className="xl:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-8 animate-fadeIn">
          <div className="flex flex-col space-y-4 text-xs font-semibold tracking-[0.18em] uppercase">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button key={item.id} onClick={() => handleNavClick(item.route)} aria-current={isActive ? "page" : undefined} className={`text-left py-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${isActive ? "text-[#C8102E] font-bold" : "text-white/80 hover:text-white"}`}>{item.label}</button>
              );
            })}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button id="mobile-menu-cta-button" onClick={() => { setMobileMenuOpen(false); onCtaClick(); }} className="w-full flex items-center justify-center px-6 py-3.5 bg-[#C8102E] text-white text-xs font-bold tracking-[0.14em] uppercase shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <span>QUIERO BUSCAR MI COCHE</span><ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
