import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import marketImage from "../../assets/images/germany_dealers_market_1788656111684.jpg";
import optionsImage from "../../assets/images/options_custom_cockpit_1788656124530.jpg";
import controlImage from "../../assets/images/control_doc_inspection_1788656139833.jpg";
import decisionImage from "../../assets/images/informed_decision_analysis_1788656152627.jpg";

interface ShowroomWhyGermanyProps {
  onNavigateAdvantages: () => void;
}

export const ShowroomWhyGermany: React.FC<ShowroomWhyGermanyProps> = ({
  onNavigateAdvantages,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="por-que-alemania"
      className="py-24 sm:py-32 bg-[#EAE8E2] text-[#111111] border-b border-[#DCD9D0] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 sm:mb-20"
        >
          <div className="flex items-center space-x-3 mb-5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C8102E] uppercase">
              03 / POR QUÉ ALEMANIA
            </span>
            <div className="h-[1px] w-8 bg-black/15" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08] text-[#111111] mb-5">
            MÁS QUE BUSCAR UN COCHE.
            <br />
            <span className="text-[#111111]">BUSCAMOS LA MEJOR OPCIÓN.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#55524E] font-light leading-relaxed max-w-2xl">
            España es solo una parte del mercado. Al ampliar la búsqueda a Alemania y Europa, multiplicamos el volumen de opciones y aplicamos un control riguroso sobre cada unidad antes de decidir.
          </p>
        </motion.div>

        {/* 4 Benefits Composition */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-8 sm:space-y-10 mb-16 sm:mb-20"
        >
          {/* Top Row: 3 Editorial Pillar Cards (01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
            {/* 01 MÁS MERCADO */}
            <motion.article
              id="benefit-card-01"
              variants={itemVariants}
              className="group bg-white border border-[#DDD9CE] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] hover:border-[#111111]/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D8D4CA]">
                <img
                  src={marketImage}
                  alt="Concesionarios oficiales en Alemania con amplia oferta de vehículos de ocasión y seminuevos"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8102E] uppercase">
                      DISPONIBILIDAD
                    </span>
                    <span className="font-display text-sm font-semibold text-[#8C867E] group-hover:text-[#C8102E] transition-colors tracking-wider">
                      01
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-tight">
                    MÁS MERCADO
                  </h3>

                  <p className="text-sm font-medium text-[#2C2925] tracking-wide mb-3">
                    Mayor volumen de oferta.
                  </p>

                  <p className="text-xs text-[#66625C] font-normal leading-relaxed pt-3 border-t border-[#EAE7E0]">
                    Acceso a la mayor red de concesionarios oficiales de Europa para no depender de la oferta local limitada.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* 02 MÁS OPCIONES */}
            <motion.article
              id="benefit-card-02"
              variants={itemVariants}
              className="group bg-white border border-[#DDD9CE] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] hover:border-[#111111]/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D8D4CA]">
                <img
                  src={optionsImage}
                  alt="Detalle de configuración de equipamiento interior, volante deportivo y cuadro digital"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8102E] uppercase">
                      CONFIGURACIÓN
                    </span>
                    <span className="font-display text-sm font-semibold text-[#8C867E] group-hover:text-[#C8102E] transition-colors tracking-wider">
                      02
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-tight">
                    MÁS OPCIONES
                  </h3>

                  <p className="text-sm font-medium text-[#2C2925] tracking-wide mb-3">
                    Más configuraciones y equipamiento.
                  </p>

                  <p className="text-xs text-[#66625C] font-normal leading-relaxed pt-3 border-t border-[#EAE7E0]">
                    Combinaciones precisas de motor, color, paquetes deportivos y extras específicos que se ajustan a lo que buscas.
                  </p>
                </div>
              </div>
            </motion.article>

            {/* 03 MÁS CONTROL */}
            <motion.article
              id="benefit-card-03"
              variants={itemVariants}
              className="group bg-white border border-[#DDD9CE] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.07)] hover:border-[#111111]/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#D8D4CA]">
                <img
                  src={controlImage}
                  alt="Verificación técnica, medidor de pintura y documentación oficial de inspección"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8102E] uppercase">
                      TRAZABILIDAD
                    </span>
                    <span className="font-display text-sm font-semibold text-[#8C867E] group-hover:text-[#C8102E] transition-colors tracking-wider">
                      03
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-tight">
                    MÁS CONTROL
                  </h3>

                  <p className="text-sm font-medium text-[#2C2925] tracking-wide mb-3">
                    Historiales y documentación.
                  </p>

                  <p className="text-xs text-[#66625C] font-normal leading-relaxed pt-3 border-t border-[#EAE7E0]">
                    Inspección previa exhaustiva, kilometraje certificado en origen y comprobación rigurosa de cada libro de mantenimiento.
                  </p>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Bottom Feature: 04 DECISIÓN INFORMADA (Flagship Visual Prominence) */}
          <motion.article
            id="benefit-card-04"
            variants={itemVariants}
            className="group bg-white border border-[#DDD9CE] overflow-hidden transition-all duration-300 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-[#111111]/30"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual Hero for 04 */}
              <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden bg-[#D8D4CA]">
                <img
                  src={decisionImage}
                  alt="Análisis técnico y económico especializado antes de reservar el vehículo"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Panel for 04 */}
              <div className="lg:col-span-5 p-7 sm:p-9 lg:p-11 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-[#C8102E] uppercase">
                      CRITERIO ANALÍTICO
                    </span>
                    <span className="font-display text-base font-bold text-[#8C867E] group-hover:text-[#C8102E] transition-colors tracking-wider">
                      04
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-3 leading-tight">
                    DECISIÓN INFORMADA
                  </h3>

                  <p className="text-base sm:text-lg font-medium text-[#2C2925] tracking-wide mb-4">
                    Análisis técnico y económico antes de reservar.
                  </p>

                  <p className="text-xs sm:text-sm text-[#66625C] font-normal leading-relaxed pt-4 border-t border-[#EAE7E0]">
                    No tomamos decisiones por impulso. Antes de autorizar cualquier reserva, elaboramos un informe completo con estado mecánico, peritaje documental y presupuesto cerrado hasta la matriculación en España.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#EAE7E0] flex items-center space-x-3 text-xs text-[#2C2925] font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#C8102E]" />
                  <span>Certeza antes de cualquier compromiso financiero</span>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Editorial Closing & Action CTA */}
        <div className="pt-10 sm:pt-12 border-t border-[#DCD9D0] flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          <p className="text-sm sm:text-base text-[#2C2925] font-normal leading-relaxed max-w-md">
            Conoce en detalle cómo gestionamos cada paso del proceso de importación y verificación técnica en origen.
          </p>

          <button
            id="btn-why-germany-import"
            type="button"
            onClick={onNavigateAdvantages}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 sm:px-9 sm:py-4.5 bg-[#141414] hover:bg-[#C8102E] text-[#F3F2EF] hover:text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(200,16,46,0.2)]"
          >
            <span>POR QUÉ IMPORTAR DESDE ALEMANIA</span>
            <ArrowRight
              className="w-4 h-4 text-[#F3F2EF] group-hover:text-white transform group-hover:translate-x-1.5 transition-transform duration-200"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

