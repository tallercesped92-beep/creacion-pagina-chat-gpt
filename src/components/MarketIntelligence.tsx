import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { MagneticCTA } from "./MagneticCTA";

import bmwM4Darkness from "../assets/images/bmw_m4_darkness_1788475162547.jpg";
import mercedesAmgGtArch from "../assets/images/mercedes_amg_gt_arch_1788475189996.jpg";
import autoDetailMacro from "../assets/images/auto_detail_macro_1788475203812.jpg";
import porsche911Cinematic from "../assets/images/porsche_911_cinematic_1788475175772.jpg";

interface MarketIntelligenceProps {
  onCtaClick?: () => void;
}

export const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({
  onCtaClick,
}) => {
  const analysisDimensions = [
    { num: "01", name: "Disponibilidad" },
    { num: "02", name: "Precio en origen" },
    { num: "03", name: "Kilometraje" },
    { num: "04", name: "Equipamiento" },
    { num: "05", name: "Configuración" },
    { num: "06", name: "Historial" },
    { num: "07", name: "Estado" },
    { num: "08", name: "Demanda" },
    { num: "09", name: "Contexto español" },
    { num: "10", name: "Coste total" },
  ];

  return (
    <section
      id="inteligencia"
      className="py-24 sm:py-32 lg:py-36 bg-[#0A0A0A] text-[#F3F2EF] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Atmosphere Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#C8102E]/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* ===================================================================
            NIVEL 1 & 2: IMPACTO Y EXPLICACIÓN COMERCIAL
           =================================================================== */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              04 / INTELIGENCIA DE MERCADO
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-12 bg-white/20 origin-left"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-white mb-8">
            NO BUSCAMOS COCHES.
            <br />
            <span className="text-[#C8102E]">BUSCAMOS OPORTUNIDADES.</span>
          </h2>

          <div className="space-y-4 max-w-3xl border-l-2 border-[#C8102E] pl-6 sm:pl-8 py-1">
            <p className="text-lg sm:text-xl md:text-2xl text-[#F3F2EF]/95 font-light leading-relaxed">
              Analizamos el mercado alemán para identificar qué unidades tienen sentido para ti.
            </p>
            <p className="text-sm sm:text-base text-[#F3F2EF]/65 font-light leading-relaxed">
              No seleccionamos una unidad simplemente porque esté disponible. La contrastamos rigurosamente con el mercado y evaluamos si realmente constituye una compra sólida y justificada antes de ejecutar cualquier paso.
            </p>
          </div>
        </div>

        {/* ===================================================================
            NIVEL 3: LAS 10 DIMENSIONES (SISTEMA VISUAL TELEMETRÍA 01 -> 10)
           =================================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <span className="inline-block w-2 h-2 bg-[#C8102E] rounded-full animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-white uppercase">
                10 DIMENSIONES DE ANÁLISIS EN CADA BÚSQUEDA
              </span>
            </div>
            <span className="hidden md:inline-block text-[10px] font-mono tracking-widest text-white/40 uppercase">
              METODOLOGÍA DE AUDITORÍA INTEGRAL
            </span>
          </div>

          {/* Editorial Index Grid: 10 Dimensions */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 border border-white/10 bg-[#111111]/60 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10">
            {analysisDimensions.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="p-3.5 sm:p-4 group hover:bg-white/[0.04] transition-colors relative"
              >
                <div className="h-[2px] w-0 group-hover:w-full bg-[#C8102E] transition-all duration-300 absolute top-0 left-0" />
                <span className="block text-[10px] font-mono text-[#C8102E] font-bold mb-1 tracking-wider">
                  {item.num}
                </span>
                <span className="block text-xs font-display font-medium uppercase tracking-tight text-[#F3F2EF]/90 group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            NIVEL 4: LOS SEIS CRITERIOS (COMPOSICIÓN EDITORIAL CINEMATOGRÁFICA)
            Estructura rítmica: ANALIZAMOS → CONTRASTAMOS → VERIFICAMOS → DECIDIMOS
           =================================================================== */}
        <div className="space-y-8">
          {/* -------------------------------------------------------------
              FILA 1: MERCADO Y CIFRAS (Criterios 01 y 02)
             ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 01 DISPONIBILIDAD & DEMANDA — Hero Fotográfico Asimétrico */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 relative group overflow-hidden bg-[#111111] border border-white/15 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
            >
              {/* Fotografía de Fondo: BMW M4 en Penumbra / Mercado Alemán */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={bmwM4Darkness}
                  alt="BMW M4 en oscuridad representativo de disponibilidad de mercado en Alemania"
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
              </div>

              {/* Contenido Editorial con Legibilidad Garantizada */}
              <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                        01 — DISPONIBILIDAD & DEMANDA
                      </span>
                    </div>
                    <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      01
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-white mb-4">
                    Volumen y Rotación Real
                  </h3>

                  <p className="text-sm sm:text-base text-[#F3F2EF]/80 font-light leading-relaxed max-w-xl">
                    Monitorizamos la oferta activa en los principales canales alemanes frente a la escasez del mercado español, identificando unidades antes de que su cotización varíe.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                    <span>Criterio verificado antes de la compra</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] text-white/40 tracking-widest uppercase">
                    CANAL DIRECTO ALEMANIA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 02 PRECIO & COSTE TOTAL — Panel de Rigor Financiero */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-5 relative group bg-[#111111] border border-white/15 p-7 sm:p-10 flex flex-col justify-between overflow-hidden"
            >
              {/* Acento Rojo Superior */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8102E]/60 group-hover:bg-[#C8102E] transition-colors duration-300" />
              
              {/* Marca de agua tipográfica */}
              <span className="absolute -bottom-6 -right-3 font-display text-8xl font-bold text-white/[0.03] select-none pointer-events-none">
                02
              </span>

              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      02 — PRECIO & COSTE TOTAL
                    </span>
                  </div>
                  <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                    02
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white mb-4">
                  Presupuesto Cerrado en Origen
                </h3>

                <p className="text-sm sm:text-base text-[#F3F2EF]/75 font-light leading-relaxed mb-6">
                  Calculamos desde el inicio la cifra total de la operación: vehículo en Alemania, transporte asegurado, ITV, matriculación, impuestos y honorarios.
                </p>

                {/* Sub-indicador conceptual de desglose transparente */}
                <div className="p-4 bg-black/40 border border-white/10 space-y-2">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E]">
                    TRANSPARENCIA ECONÓMICA TOTAL
                  </div>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    Sin sorpresas arancelarias, tipos de cambio ocultos ni recargos logísticos no previstos en el estudio.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center text-xs text-white/70 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                <span>Criterio verificado antes de la compra</span>
              </div>
            </motion.div>
          </div>

          {/* -------------------------------------------------------------
              FILA 2: HISTORIAL Y ESPECIFICACIÓN (Criterios 03 y 04)
             ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 03 KILOMETRAJE & HISTORIAL — Panel de Trazabilidad */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-5 relative group bg-[#111111] border border-white/15 p-7 sm:p-10 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C8102E] transition-colors duration-300" />
              
              <span className="absolute -bottom-6 -right-3 font-display text-8xl font-bold text-white/[0.03] select-none pointer-events-none">
                03
              </span>

              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                    <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      03 — KILOMETRAJE & HISTORIAL
                    </span>
                  </div>
                  <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                    03
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white mb-4">
                  Trazabilidad Documental
                </h3>

                <p className="text-sm sm:text-base text-[#F3F2EF]/75 font-light leading-relaxed mb-6">
                  Comprobamos el libro de revisiones oficial, lecturas de odómetro en inspecciones previas y ausencia de daños estructurales declarados.
                </p>

                {/* Sub-indicador documental */}
                <div className="p-4 bg-black/40 border border-white/10 flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#C8102E] flex-shrink-0" />
                  <span className="text-xs font-mono text-white/80 uppercase tracking-wider">
                    AUDITORÍA OFICIAL TÜV / DEKRA
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center text-xs text-white/70 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                <span>Criterio verificado antes de la compra</span>
              </div>
            </motion.div>

            {/* 04 EQUIPAMIENTO & CONFIGURACIÓN — Hero Fotográfico Asimétrico */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-7 relative group overflow-hidden bg-[#111111] border border-white/15 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
            >
              {/* Fotografía de Fondo: Mercedes-AMG GT / Arquitectura & Configuración */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={mercedesAmgGtArch}
                  alt="Mercedes-AMG GT arquitectura representativo de equipamiento y configuración de alta gama"
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
              </div>

              <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                        04 — EQUIPAMIENTO & CONFIGURACIÓN
                      </span>
                    </div>
                    <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      04
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-white mb-4">
                    Especificación Exacta
                  </h3>

                  <p className="text-sm sm:text-base text-[#F3F2EF]/80 font-light leading-relaxed max-w-xl">
                    Filtramos combinaciones específicas de motorización, acabados de altas prestaciones y paquetes de confort que rara vez aparecen en el mercado nacional.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                    <span>Criterio verificado antes de la compra</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] text-white/40 tracking-widest uppercase">
                    CONFIGURACIÓN A MEDIDA
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* -------------------------------------------------------------
              FILA 3: AUDITORÍA TÉCNICA Y DECISIÓN (Criterios 05 y 06)
             ------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 05 ESTADO & VERIFICACIÓN TÉCNICA — Macro Peritaje Fotográfico */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 relative group overflow-hidden bg-[#111111] border border-white/15 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
            >
              {/* Fotografía de Fondo: Detalle Macro de Inspección / Frenos / Pintura */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={autoDetailMacro}
                  alt="Detalle técnico en peritaje de componentes mecánicos y carrocería"
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/35" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent" />
              </div>

              <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                        05 — ESTADO & VERIFICACIÓN TÉCNICA
                      </span>
                    </div>
                    <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      05
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-white mb-4">
                    Auditoría Previa
                  </h3>

                  <p className="text-sm sm:text-base text-[#F3F2EF]/80 font-light leading-relaxed max-w-xl">
                    Evaluamos diagnosis electrónica, desgaste de componentes mecánicos y estado estético mediante peritaje antes de autorizar cualquier compra.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-white/70 font-mono">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                    <span>Criterio verificado antes de la compra</span>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] text-white/40 tracking-widest uppercase">
                    INSPECCIÓN IN SITU
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 06 CONTEXTO & OPORTUNIDAD — Fotografía Cinematográfica Porsche 911 */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-5 relative group overflow-hidden bg-[#111111] border border-white/15 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between"
            >
              {/* Fotografía de Fondo: Porsche 911 Cinematográfico */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <img
                  src={porsche911Cinematic}
                  alt="Porsche 911 cinematográfico representativo de oportunidad y valor de mercado"
                  className="w-full h-full object-cover object-center brightness-[0.95] contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent" />
              </div>

              <div className="relative z-10 p-7 sm:p-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                    <div className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#C8102E]" />
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                        06 — CONTEXTO & OPORTUNIDAD
                      </span>
                    </div>
                    <span className="font-display text-2xl font-bold text-white/30 group-hover:text-white/60 transition-colors">
                      06
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase text-white mb-4">
                    Evaluación de Conveniencia
                  </h3>

                  <p className="text-sm sm:text-base text-[#F3F2EF]/80 font-light leading-relaxed">
                    Comparamos la unidad frente al mercado español para asegurarnos de que la importación realmente compensa por calidad, equipamiento o exclusividad.
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15 flex items-center text-xs text-white/70 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#C8102E] mr-2 flex-shrink-0" />
                  <span>Criterio verificado antes de la compra</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===================================================================
            NIVEL 5: CIERRE Y CONVERSIÓN (EL MÉTODO ANTE TODO + CTA)
           =================================================================== */}
        <div className="mt-20 pt-12 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-[2px] bg-[#C8102E]" />
              <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                EL MÉTODO ANTE TODO
              </h4>
            </div>
            <p className="text-sm sm:text-base text-[#F3F2EF]/70 font-light leading-relaxed">
              No vendemos promesas de catálogo. Analizamos datos reales de mercado para que tu compra sea segura, transparente y rentable.
            </p>
          </div>

          {onCtaClick && (
            <MagneticCTA
              id="intelligence-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-xl shadow-[#C8102E]/25 flex-shrink-0"
            >
              <span>ANALIZAR MI BÚSQUEDA</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </MagneticCTA>
          )}
        </div>
      </div>
    </section>
  );
};

