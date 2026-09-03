import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Compass, Scale, ArrowRight, MessageSquare, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "../lib/whatsapp";

interface AboutPageProps {
  onCtaClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onCtaClick }) => {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              FILOSOFÍA / QUIÉNES SOMOS
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            NO VENDEMOS COCHES.
            <br />
            <span className="text-[#C8102E]">ENCONTRAMOS EL COCHE CORRECTO.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-8">
            Céspedes Automotriz nació para dar una respuesta profesional e independiente a quienes buscan importar un vehículo en Alemania con total seguridad técnica, claridad de costes y sin intermediaciones opacas.
          </p>
        </div>

        {/* Central Manifesto Quote */}
        <div className="p-8 sm:p-12 bg-[#141414] border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C8102E]" />
          <blockquote className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-white leading-snug mb-4">
            "Creemos que comprar un coche no debería ser una experiencia llena de incertidumbre. Nuestro trabajo es investigar, analizar y acompañar al cliente para que tome la mejor decisión posible."
          </blockquote>
          <cite className="text-xs font-mono text-[#C8102E] uppercase tracking-widest block not-italic">
            — CÉSPEDES AUTOMOTRIZ · FILOSOFÍA FUNDACIONAL
          </cite>
        </div>

        {/* 3 Pilares Fundamentales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 bg-[#141414] border border-white/10"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] mb-6">
              <Scale className="w-6 h-6" />
            </div>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
              CRITERIO INDEPENDIENTE
            </h2>
            <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
              No representamos a concesionarios ni recibimos incentivos por vender un vehículo en particular. Nuestro cliente eres tú, y nuestro único compromiso es defender tus intereses y tu presupuesto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 bg-[#141414] border border-white/10"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
              RIGOR TÉCNICO Y LEGAL
            </h2>
            <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
              Exigimos trazabilidad documental completa, inspecciones presenciales profesionales y auditoría de mantenimiento oficial antes de comprometer cualquier compraventa en el extranjero.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-8 bg-[#141414] border border-white/10"
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
              ACOMPAÑAMIENTO REAL
            </h2>
            <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
              Desde la primera consulta hasta la entrega con placas definitivas, cuentas con un interlocutor único y directo que resuelve cada duda, gestión aduanera, ITV y matriculación.
            </p>
          </motion.div>
        </div>

        {/* Resumen de Compromiso */}
        <div className="p-8 sm:p-10 bg-[#161616] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-bold uppercase text-white mb-2">
              ¿Hablamos sobre tu próximo coche?
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Si valoras el rigor, la honestidad y una gestión impecable, cuéntanos qué buscas y te explicaremos qué opciones reales existen en Alemania hoy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <button
              onClick={onCtaClick}
              className="px-7 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-lg cursor-pointer"
            >
              QUIERO BUSCAR MI COCHE
            </button>

            <a
              href={getWhatsAppUrl("Hola Céspedes Automotriz, me gustaría conversar sobre vuestro servicio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-[0.14em] uppercase transition-colors flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-white/70" />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
