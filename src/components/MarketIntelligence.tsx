import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { MagneticCTA } from "./MagneticCTA";

import bmwM4Darkness from "../assets/images/bmw_m4_darkness_1788475162547.jpg";
import audiRs6Hero from "../assets/images/audi_rs6_hero_1787228419698.jpg";
import audiRs3 from "../assets/images/audi_rs3_1787232397541.jpg";
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

  const auditCriteria = [
    {
      num: "01",
      category: "DISPONIBILIDAD & DEMANDA",
      title: "Volumen y Rotación Real",
      desc: "Monitorizamos la oferta activa en los principales canales alemanes frente a la escasez del mercado español, identificando unidades antes de que su cotización varíe.",
      image: bmwM4Darkness,
      imageAlt: "BMW M4 representativo de disponibilidad y rotación en el mercado alemán",
    },
    {
      num: "02",
      category: "PRECIO & COSTE TOTAL",
      title: "Presupuesto Cerrado en Origen",
      desc: "Calculamos desde el inicio la cifra total de la operación: vehículo en Alemania, transporte asegurado, ITV, matriculación, impuestos y honorarios.",
      image: audiRs6Hero,
      imageAlt: "Audi RS6 representativo de presupuesto cerrado y coste total de adquisición",
    },
    {
      num: "03",
      category: "KILOMETRAJE & HISTORIAL",
      title: "Trazabilidad Documental",
      desc: "Comprobamos el libro de revisiones oficial, lecturas de odómetro en inspecciones previas y ausencia de daños estructurales declarados.",
      image: audiRs3,
      imageAlt: "Audi RS3 representativo de kilometraje verificado y trazabilidad documental",
    },
    {
      num: "04",
      category: "EQUIPAMIENTO & CONFIGURACIÓN",
      title: "Especificación Exacta",
      desc: "Filtramos combinaciones específicas de motorización, acabados de altas prestaciones y paquetes de confort que rara vez aparecen en el mercado nacional.",
      image: mercedesAmgGtArch,
      imageAlt: "Mercedes-AMG GT representativo de especificación y configuración a medida",
    },
    {
      num: "05",
      category: "ESTADO & VERIFICACIÓN TÉCNICA",
      title: "Auditoría Previa",
      desc: "Evaluamos diagnosis electrónica, desgaste de componentes mecánicos y estado estético mediante peritaje antes de autorizar cualquier compra.",
      image: autoDetailMacro,
      imageAlt: "Detalle macro de inspección técnica previa y diagnosis mecánica",
    },
    {
      num: "06",
      category: "CONTEXTO & OPORTUNIDAD",
      title: "Evaluación de Conveniencia",
      desc: "Comparamos la unidad frente al mercado español para asegurarnos de que la importación realmente compensa por calidad, equipamiento o exclusividad.",
      image: porsche911Cinematic,
      imageAlt: "Porsche 911 representativo de evaluación de conveniencia y valor de mercado",
    },
  ];

  return (
    <section
      id="inteligencia"
      className="py-20 sm:py-28 lg:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E3DC] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* ===================================================================
            JERARQUÍA 1 & 2: IMPACTO Y EXPLICACIÓN COMERCIAL
           =================================================================== */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              04 / INTELIGENCIA DE MERCADO
            </span>
            <div className="h-[1px] w-12 bg-[#111111]/20" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#111111] mb-6">
            NO BUSCAMOS COCHES.
            <br />
            <span className="text-[#C8102E]">BUSCAMOS OPORTUNIDADES.</span>
          </h2>

          <div className="border-l-2 border-[#C8102E] pl-6 sm:pl-8 py-1 space-y-3">
            <p className="text-lg sm:text-xl md:text-2xl text-[#111111] font-light leading-relaxed">
              Analizamos el mercado alemán para identificar qué unidades tienen sentido para ti.
            </p>
            <p className="text-sm sm:text-base text-[#111111]/70 font-light leading-relaxed max-w-2xl">
              No seleccionamos una unidad simplemente porque esté disponible. La contrastamos rigurosamente con el mercado y evaluamos si realmente constituye una compra sólida y justificada antes de ejecutar cualquier paso.
            </p>
          </div>
        </div>

        {/* ===================================================================
            JERARQUÍA 3: ÍNDICE DE AUDITORÍA (10 DIMENSIONES DE ANÁLISIS)
           =================================================================== */}
        <div className="mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC] gap-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#111111] uppercase">
                ÍNDICE DE AUDITORÍA · 10 DIMENSIONES DE ANÁLISIS
              </span>
            </div>
            <span className="text-[11px] font-mono tracking-wider text-[#111111]/50 uppercase">
              PROTOCOLO DE REVISIÓN EN CADA BÚSQUEDA
            </span>
          </div>

          {/* Banda Editorial: 10 Dimensiones de Inspección */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 bg-white border border-[#E5E3DC] divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-[#E5E3DC] shadow-sm">
            {analysisDimensions.map((item) => (
              <div
                key={item.num}
                className="p-3 sm:p-3.5 group hover:bg-[#FAF9F6] transition-colors"
              >
                <span className="block text-[10px] font-mono text-[#C8102E] font-bold mb-1 tracking-wider">
                  {item.num}
                </span>
                <span className="block text-xs font-display font-semibold uppercase tracking-tight text-[#111111] leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            JERARQUÍA 4: SECUENCIA DE AUDITORÍA AUTOMOTRIZ (01 -> 06)
            Estructura idéntica, alturas iguales, legibilidad garantizada.
           =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {auditCriteria.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white border border-[#E5E3DC] shadow-[0_3px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-[#C8102E]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
            >
              {/* Fotografía de Apoyo Visual (Proporción y Altura Idéntica) */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#161616] border-b border-[#E5E3DC] flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20 pointer-events-none" />

                {/* Badge Editorial: PASO 01 / 06 */}
                <div className="absolute top-3.5 left-3.5 bg-[#111111]/90 backdrop-blur-sm px-2.5 py-1 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
                  PASO {item.num}
                </div>

                {/* Numeral de Esquina en Fotografía */}
                <div className="absolute bottom-2.5 right-4 font-display text-2xl font-bold text-white/50 group-hover:text-white/80 transition-colors select-none">
                  {item.num}
                </div>
              </div>

              {/* Contenido Editorial con Jerarquía Tipográfica Clara */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Categoría: Pequeña, Técnica, Uppercase con Tracking Amplio */}
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display mb-2.5">
                    {item.num} — {item.category}
                  </div>

                  {/* Título: Elemento Tipográfico Principal */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Descripción: Anchura Controlada y Lectura Fácil */}
                  <p className="text-sm text-[#111111]/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Indicador Final de Auditoría */}
                <div className="mt-6 pt-4 border-t border-[#E5E3DC] flex items-center justify-between">
                  <div className="flex items-center text-xs font-mono font-bold tracking-wider text-[#111111]/90">
                    <span className="text-[#C8102E] font-bold mr-2 text-sm leading-none">✓</span>
                    <span>CRITERIO VERIFICADO</span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#111111]/40 uppercase">
                    AUDITORÍA PREVIA
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===================================================================
            JERARQUÍA 5: EL MÉTODO ANTE TODO + CTA
           =================================================================== */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-[#E5E3DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-[2px] bg-[#C8102E]" />
              <h4 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#111111]">
                EL MÉTODO ANTE TODO
              </h4>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/70 font-light leading-relaxed">
              No vendemos promesas de catálogo. Analizamos datos reales de mercado para que tu compra sea segura, transparente y rentable.
            </p>
          </div>

          {onCtaClick && (
            <MagneticCTA
              id="intelligence-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-lg shadow-[#C8102E]/20 flex-shrink-0"
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

