import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  CheckCircle2,
} from "lucide-react";
import { MarketSection } from "../components/MarketSection";

import importOriginGermany from "../assets/images/import_origin_germany_1788601972392.jpg";
import importInspectionPrevia from "../assets/images/import_inspection_previa_1788601986337.jpg";
import importTransporteSeguro from "../assets/images/import_transporte_seguro_1788602013636.jpg";
import importDocCoc from "../assets/images/import_doc_coc_1788602027636.jpg";
import importItvEspana from "../assets/images/import_itv_espana_1788602039169.jpg";
import importImpuestosTasas from "../assets/images/import_impuestos_tasas_1788602062740.jpg";
import importEntregaEspana from "../assets/images/import_entrega_espana_1788602075683.jpg";

interface ImportPageProps {
  onCtaClick: () => void;
}

export const ImportPage: React.FC<ImportPageProps> = ({ onCtaClick }) => {
  const importFlow = [
    {
      step: "01",
      phase: "ORIGEN",
      country: "ALEMANIA",
      title: "ORIGEN: ALEMANIA",
      desc: "Localización, negociación del contrato mercantil en alemán y compraventa con factura europea en regla.",
      included: "Búsqueda, contacto en alemán y factura mercantil oficial.",
      image: importOriginGermany,
      imageAlt: "Audi RS6 Avant frente a pabellón de diseño en Múnich Alemania",
      badge: "CONCESIÓN OFICIAL ALEMANA",
      sensation: "El coche está allí.",
    },
    {
      step: "02",
      phase: "VERIFICACIÓN",
      country: "ALEMANIA",
      title: "INSPECCIÓN PREVIA",
      desc: "Verificación documental completa (Fahrzeugbrief y TÜV) y peritaje presencial técnico del vehículo.",
      included: "Auditoría documental previa y peritaje mecánico in situ.",
      image: importInspectionPrevia,
      imageAlt: "Técnico especialista realizando diagnosis e inspección previa en taller alemán",
      badge: "DIAGNOSIS Y PERITAJE IN SITU",
      sensation: "Antes de comprar, comprobamos.",
    },
    {
      step: "03",
      phase: "LOGÍSTICA",
      country: "TRANS-EUROPA",
      title: "TRANSPORTE ASEGURADO",
      desc: "Carga en camión portavehículos internacional con seguro a todo riesgo con cobertura de valor real.",
      included: "Camión internacional con póliza CMR de valor venal 100%.",
      image: importTransporteSeguro,
      imageAlt: "Camión portavehículos europeo cerrado con cinchas de máxima seguridad",
      badge: "SEGURO CMR COBERTURA TOTAL",
      sensation: "El coche viaja protegido.",
    },
    {
      step: "04",
      phase: "INGENIERÍA",
      country: "HOMOLOGACIÓN",
      title: "DOCUMENTACIÓN Y COC",
      desc: "Tramitación del Certificado de Conformidad Europeo (COC) o ficha reducida emitida por ingeniero colegiado.",
      included: "Emisión oficial de COC o ficha técnica reducida visada.",
      image: importDocCoc,
      imageAlt: "Mesa de despacho con certificado de conformidad COC, llaves y especificaciones técnicas",
      badge: "VALIDACIÓN TÉCNICA EUROPEA",
      sensation: "La documentación también se verifica.",
    },
    {
      step: "05",
      phase: "HOMOLOGACIÓN",
      country: "ESPAÑA",
      title: "ITV DE IMPORTACIÓN",
      desc: "Inspección técnica extraordinaria en estación de ITV autorizada en España para emisión de ficha técnica.",
      included: "Cita previa oficial, pago de tasas y paso de línea ITV.",
      image: importItvEspana,
      imageAlt: "Vehículo en estación ITV española para homologación y comprobación de emisiones",
      badge: "ESTACIÓN ITV OFICIAL ESPAÑA",
      sensation: "El coche se adapta y se valida para circular en España.",
    },
    {
      step: "06",
      phase: "FISCALIDAD",
      country: "AEAT / HACIENDA",
      title: "IMPUESTOS Y TASAS",
      desc: "Liquidación telemática del Modelo 576 (IEDMT / Impuesto de Matriculación) e Impuesto de Circulación (IVTM).",
      included: "Liquidación telemática del Modelo 576 y tasa municipal IVTM.",
      image: importImpuestosTasas,
      imageAlt: "Mesa de consultoría fiscal con cálculo de costes, tasas y desglose cerrado",
      badge: "MODELO 576 Y TASA MUNICIPAL",
      sensation: "Sabemos exactamente cuánto cuesta.",
    },
    {
      step: "07",
      phase: "CULMINACIÓN",
      country: "ESPAÑA",
      title: "MATRICULACIÓN Y ENTREGA",
      desc: "Expedición del permiso de circulación por la DGT, troquelado de placas españolas y entrega en mano.",
      included: "Expedición del permiso DGT, placas físicas definitivas y entrega.",
      image: importEntregaEspana,
      imageAlt: "Porsche Panamera Sport Turismo con placas españolas definitivas en residencia contemporánea",
      badge: "PLACAS DEFINITIVAS Y ENTREGA",
      sensation: "Ese podría ser mi coche.",
    },
  ];

  const breakdownItems = [
    {
      num: "01",
      title: "PRECIO DEL VEHÍCULO",
      desc: "Precio pactado en origen con factura comercial y régimen fiscal correspondiente (IVA deducible o REBU).",
    },
    {
      num: "02",
      title: "TRANSPORTE INTERNACIONAL",
      desc: "Transporte en camión portavehículos especializado con seguro CMR a todo riesgo con cobertura de valor total.",
    },
    {
      num: "03",
      title: "HOMOLOGACIÓN TÉCNICA",
      desc: "Ficha reducida de homologación emitida y visada por ingeniero técnico industrial colegiado.",
    },
    {
      num: "04",
      title: "INSPECCIÓN EN ESTACIÓN ITV",
      desc: "Gestión íntegra de cita oficial y liquidación de tasas de inspección técnica previa a la matriculación.",
    },
    {
      num: "05",
      title: "IMPUESTOS Y TASAS DGT",
      desc: "Liquidación del IEDMT (Modelo 576 AEAT), tasa de matriculación de Tráfico e impuesto municipal IVTM.",
    },
    {
      num: "06",
      title: "GESTIÓN INTEGRAL",
      desc: "Honorarios de mediación mercantil, peritaje, asesoría jurídica en origen y coordinación hasta tu garaje.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F3F2EF] text-[#111111] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ===================================================================
            HEADER EDITORIAL: GUÍA DE IMPORTACIÓN
           =================================================================== */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              03 / GUÍA DE IMPORTACIÓN · ALEMANIA ➔ ESPAÑA
            </span>
            <div className="h-[1px] w-12 bg-[#111111]/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-[#111111] mb-6">
            IMPORTAR DE ALEMANIA.
            <br />
            <span className="text-[#C8102E]">SIN INCERTIDUMBRE NI RIESGOS.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/80 font-light leading-relaxed mb-8 max-w-3xl">
            Alemania es el mayor mercado automotriz de Europa, con más rotación, mejor equipamiento y mantenimiento riguroso. Te explicamos exactamente cómo gestionamos la importación de principio a fin.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-lg shadow-[#C8102E]/20 flex items-center cursor-pointer"
            >
              <span>SOLICITAR ESTUDIO DE IMPORTACIÓN</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </button>
          </div>
        </div>

        {/* ===================================================================
            LÍNEA NARRATIVA VISUAL PROTAGONISTA: EL RECORRIDO DE LA OPERACIÓN
           =================================================================== */}
        <div className="mb-14 sm:mb-16 bg-white border border-[#E5E3DC] shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E5E3DC] gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block font-bold mb-1">
                LÍNEA TEMPORAL DE GESTIÓN
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#111111]">
                EL RECORRIDO DE LA OPERACIÓN
              </h2>
            </div>
            <div className="flex items-center space-x-2 bg-[#FAF9F6] border border-[#E5E3DC] px-4 py-2 self-start sm:self-auto">
              <span className="text-xs font-mono font-bold text-[#111111]">ALEMANIA</span>
              <span className="text-xs text-[#C8102E] font-bold">➔</span>
              <span className="text-xs font-mono font-bold text-[#111111]">ESPAÑA</span>
            </div>
          </div>

          {/* 7-Step Horizontal Progression Indicator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 pt-6 gap-3 sm:gap-2 text-center">
            {importFlow.map((step) => (
              <div key={step.step} className="flex flex-col items-center p-2 rounded hover:bg-[#FAF9F6] transition-colors">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E3DC] bg-[#FAF9F6] text-[11px] font-mono font-bold text-[#111111] mb-2">
                  {step.step}
                </div>
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#111111] truncate w-full">
                  {step.phase}
                </span>
                <span className="text-[10px] font-mono text-[#111111]/50 mt-0.5 truncate w-full">
                  {step.country}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            SECUENCIA CINEMATOGRÁFICA DE LAS 7 ETAPAS (MISMO SISTEMA VISUAL)
           =================================================================== */}
        <div className="space-y-10 sm:space-y-12 mb-20">
          {importFlow.map((item, idx) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
              className="bg-white border border-[#E5E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Bloque Fotográfico Narrativo */}
                <div className="lg:col-span-5 relative overflow-hidden bg-[#161616] min-h-[240px] sm:min-h-[290px] lg:min-h-full flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#E5E3DC]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                  {/* Badge de Fase y Entorno */}
                  <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
                    {item.badge}
                  </div>

                  {/* Numeral de Etapa en Esquina */}
                  <div className="absolute bottom-4 right-5 font-display text-4xl sm:text-5xl font-bold text-white/40 group-hover:text-white/70 transition-colors select-none leading-none">
                    {item.step}
                  </div>

                  {/* Sensación Narrativa */}
                  <div className="absolute bottom-4 left-4 right-20 hidden sm:block">
                    <span className="text-[11px] font-mono text-white/80 italic bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                      “{item.sensation}”
                    </span>
                  </div>
                </div>

                {/* Bloque Editorial y Técnico */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Encabezado Técnico de Fase */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                          PASO {item.step} · {item.phase}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                        {item.country}
                      </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-4 leading-tight">
                      {item.title}
                    </h2>

                    {/* Explicación Operativa */}
                    <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6 max-w-2xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bloque Gestión Incluida */}
                  <div className="mt-4 pt-5 border-t border-[#E5E3DC] bg-[#FAF9F6] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-full bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#C8102E]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#111111]/50 block font-bold mb-0.5">
                          GESTIÓN INCLUIDA
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#111111] leading-snug block">
                          {item.included}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-[11px] font-mono text-[#C8102E] font-bold uppercase tracking-wider flex-shrink-0 pl-10 sm:pl-0">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      <span>COORDINACIÓN INTEGRAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================================================================
            BLOQUE DE COSTES: NOTA EDITORIAL DE TRANSPARENCIA
           =================================================================== */}
        <div className="p-8 sm:p-10 bg-white border border-[#E5E3DC] border-l-4 border-l-[#C8102E] shadow-[0_4px_24px_rgba(0,0,0,0.03)] relative overflow-hidden mb-16">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldCheck className="w-5 h-5 text-[#C8102E]" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#C8102E] block mb-1">
                TRANSPARENCIA FISCAL & CRITERIO OPERATIVO
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#111111] mb-3 tracking-wide">
                AVISO IMPORTANTE SOBRE COSTES Y ESTIMACIONES
              </h3>
              <p className="text-sm sm:text-base text-[#111111] font-medium leading-relaxed mb-3">
                Los costes finales dependen del vehículo, impuestos, transporte y circunstancias concretas de cada operación. Las cifras mostradas son estimaciones.
              </p>
              <p className="text-xs sm:text-sm text-[#111111]/70 font-light leading-relaxed">
                El impuesto de matriculación (IEDMT) en España se liquida según los tramos de emisiones de CO2 homologados (WLTP) y las tablas oficiales de valoración de la Agencia Tributaria. Antes de comprometer cualquier compra, recibirás un presupuesto cerrado con el cálculo exacto de cada partida para tu caso particular.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================================
            DESGLOSE DE OPERACIÓN (6 ELEMENTOS ESCANEABLES) + CALCULA TU CASO
           =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Columna Izquierda: Desglose de Operación en 6 Elementos */}
          <div className="lg:col-span-7 p-8 bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#C8102E]">
                  CLARIDAD TOTAL
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#111111] mb-6">
                ¿QUÉ INCLUYE EL PRESUPUESTO CERRADO?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {breakdownItems.map((item) => (
                  <div key={item.num} className="p-4 bg-[#FAF9F6] border border-[#E5E3DC] flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#C8102E] block mb-1">
                        {item.num}
                      </span>
                      <h4 className="font-display text-xs font-bold uppercase text-[#111111] mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#111111]/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E3DC] flex items-center justify-between text-xs font-mono text-[#111111]/60">
              <span>PRESUPUESTO VINCULANTE POR ESCRITO</span>
              <span className="text-[#C8102E] font-bold">SIN SORPRESAS</span>
            </div>
          </div>

          {/* Columna Derecha: Transición a Acción (Calcula tu caso particular) */}
          <div className="lg:col-span-5 p-8 bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#C8102E]">
                  ESTUDIO PERSONALIZADO
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#111111] mb-4">
                CALCULA TU CASO PARTICULAR
              </h3>

              <p className="text-sm text-[#111111]/80 font-light leading-relaxed mb-6">
                Cada motorización, año y nivel de emisiones genera un cálculo fiscal distinto. Nuestro equipo analiza la viabilidad y los números exactos de la unidad que te interesa antes de avanzar con la operación.
              </p>

              <div className="space-y-3 mb-8 p-4 bg-[#FAF9F6] border border-[#E5E3DC] text-xs font-mono text-[#111111]/80">
                <div className="flex items-center space-x-2">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Estudio fiscal gratuito del modelo elegido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Búsqueda y preselección de unidades viables</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Respuesta rápida y asesoría experta</span>
                </div>
              </div>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full py-4.5 px-6 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 shadow-lg shadow-[#C8102E]/25 text-center cursor-pointer flex items-center justify-center group"
            >
              <span>QUIERO QUE CALCULÉIS MI OPERACIÓN</span>
              <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Deep Market Reality Section */}
      <MarketSection onCtaClick={onCtaClick} />
    </div>
  );
};

