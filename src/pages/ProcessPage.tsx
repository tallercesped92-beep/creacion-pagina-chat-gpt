import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Check } from "lucide-react";
import { FAQ } from "../components/FAQ";

import dealershipSearchGermany from "../assets/images/dealership_search_germany_1788601114281.jpg";
import cockpitSpecAnalysis from "../assets/images/cockpit_spec_analysis_1788601134670.jpg";
import selectionCuratedUnit from "../assets/images/selection_curated_unit_1788601150412.jpg";
import inspectionGaugeMeter from "../assets/images/inspection_gauge_meter_1788601166207.jpg";
import deliveryPrivateGarage from "../assets/images/delivery_private_garage_1788601182187.jpg";

interface ProcessPageProps {
  onCtaClick: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onCtaClick }) => {
  const processSteps = [
    {
      num: "01",
      phase: "BÚSQUEDA",
      duration: "Días 1 - 3",
      title: "BÚSQUEDA Y PROSPECCIÓN ACTIVA",
      desc: "Definimos tus criterios exactos y rastreamos concesionarios oficiales (Audi Gebrauchtwagen :plus, BMW Premium Selection, Mercedes-Benz Certified, Porsche Approved) y especialistas cualificados en Alemania.",
      deliverable: "Ficha de criterios de búsqueda y prospección de mercado.",
      image: dealershipSearchGermany,
      imageAlt: "BMW M3 Touring en concesionario oficial alemán representativo de búsqueda activa",
      badge: "STOCK OFICIAL ALEMANIA",
      sensation: "Existe. Está allí. Podemos encontrarlo.",
    },
    {
      num: "02",
      phase: "ANÁLISIS",
      duration: "Días 3 - 5",
      title: "FILTRADO Y CÁLCULO DE COSTES",
      desc: "Descartamos coches de riesgo, comprobamos el historial y desglosamos el coste real puesto en España: precio origen + transporte asegurado + tasas ITV + impuesto IEDMT (Modelo 576) + matriculación. Presupuesto cerrado.",
      deliverable: "Informe de descarte y desglose financiero cerrado.",
      image: cockpitSpecAnalysis,
      imageAlt: "Cockpit y consola de Porsche 911 representativo de análisis de especificación y configuración",
      badge: "AUDITORÍA DE CONFIGURACIÓN",
      sensation: "Estamos comprobando exactamente qué estamos comprando.",
    },
    {
      num: "03",
      phase: "SELECCIÓN",
      duration: "Días 5 - 6",
      title: "SELECCIÓN Y PROPUESTA FORMAL",
      desc: "Presentamos la comparativa técnica de las mejores unidades viables. Analizamos contigo configuración, equipamiento, kilometraje y relación calidad/precio para elegir la unidad definitiva.",
      deliverable: "Propuesta formal de adjudicación seleccionada con el cliente.",
      image: selectionCuratedUnit,
      imageAlt: "Mercedes-AMG C63 en showroom de diseño representativo de selección y propuesta definitiva",
      badge: "SELECCIÓN RIGUROSA",
      sensation: "Estamos comparando y eligiendo la unidad correcta.",
    },
    {
      num: "04",
      phase: "VERIFICACIÓN",
      duration: "Días 6 - 9",
      title: "VERIFICACIÓN TÉCNICA EN ORIGEN",
      desc: "Auditamos la documentación original (Fahrzeugbrief y Fahrzeugschein) y coordinamos la inspección presencial y diagnosis electrónica por perito en Alemania antes de transferir fondos.",
      deliverable: "Dossier pericial con más de 80 puntos de control técnico.",
      image: inspectionGaugeMeter,
      imageAlt: "Medición micrométrica con medidor de espesor de pintura en peritaje técnico en taller alemán",
      badge: "PERITAJE IN SITU TÜV/DEKRA",
      sensation: "Antes de pagar, alguien lo comprueba.",
    },
    {
      num: "05",
      phase: "COMPRA & ENTREGA",
      duration: "Días 10 - 20",
      title: "COMPRA, TRANSPORTE Y MATRICULACIÓN",
      desc: "Adquisición oficial en origen, transporte asegurado a todo riesgo, homologación, ITV y matriculación definitiva con entrega lista para rodar.",
      deliverable: "Vehículo con placas españolas definitivas en tu garaje.",
      image: deliveryPrivateGarage,
      imageAlt: "Porsche 911 GT3 Touring en garaje privado contemporáneo listo para rodar con matrícula definitiva",
      badge: "ENTREGA EN TU GARAJE",
      sensation: "Este puede terminar en mi garaje.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F3F2EF] text-[#111111] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* ===================================================================
            HEADER EDITORIAL: DOSSIER DE METODOLOGÍA
           =================================================================== */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              02 / METODOLOGÍA · 5 ETAPAS
            </span>
            <div className="h-[1px] w-12 bg-[#111111]/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-[#111111] mb-6">
            DE LA IDEA A TU GARAJE.
            <br />
            <span className="text-[#C8102E]">EL PROCESO EN 5 ETAPAS.</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#111111]/80 font-light leading-relaxed mb-8 max-w-3xl">
            Diseñamos un método estructurado en 5 etapas para que importar desde Alemania sea un proceso predecible, transparente y sin riesgos.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-lg shadow-[#C8102E]/20 flex items-center cursor-pointer"
            >
              <span>INICIAR MI BÚSQUEDA</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </button>
          </div>
        </div>

        {/* ===================================================================
            PANEL DE PLAZO MEDIO Y LÍNEA TEMPORAL DE PROGRESIÓN
           =================================================================== */}
        <div className="mb-14 sm:mb-16 bg-white border border-[#E5E3DC] shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E3DC]">
            <div className="flex items-start space-x-4 max-w-3xl">
              <div className="w-10 h-10 rounded-full bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-[#C8102E]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base text-[#111111] font-medium leading-snug">
                  <span className="font-bold text-[#111111]">Plazo medio estimado:</span>{" "}
                  Entre 15 y 25 días hábiles desde la aprobación de la unidad hasta la entrega con placas españolas definitivas.
                </p>
                <p className="text-xs sm:text-sm text-[#111111]/60 font-light">
                  Los tiempos de cada etapa son orientativos. El plazo total puede variar según transporte, documentación, ITV y matriculación.
                </p>
              </div>
            </div>
            <div className="text-right flex-shrink-0 hidden lg:block">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block font-bold">
                PROTOCOLO CONTROLADO
              </span>
              <span className="text-xs font-display font-semibold uppercase text-[#111111]/60">
                Alemania → España
              </span>
            </div>
          </div>

          {/* Stepper Visual de las 5 Fases */}
          <div className="grid grid-cols-5 pt-6 gap-2 sm:gap-4 text-center">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border border-[#E5E3DC] bg-[#FAF9F6] text-[11px] font-mono font-bold text-[#111111] mb-2">
                  {step.num}
                </div>
                <span className="text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider text-[#111111] truncate w-full">
                  {step.phase}
                </span>
                <span className="hidden sm:block text-[10px] font-mono text-[#111111]/50 mt-0.5">
                  {step.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================
            SECUENCIA DE LAS 5 ETAPAS (DOSSIER EDITORIAL AUTOMOTRIZ)
            Cada etapa: Numeral + Fotografía + Título + Explicación + Entregable
           =================================================================== */}
        <div className="space-y-10 sm:space-y-12 mb-20">
          {processSteps.map((step, idx) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-white border border-[#E5E3DC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/30 transition-all duration-300 overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* -----------------------------------------------------------
                    BLOQUE FOTOGRÁFICO NARRATIVO (Mobile: primero / Desktop: 5 cols)
                   ----------------------------------------------------------- */}
                <div className="lg:col-span-5 relative overflow-hidden bg-[#161616] min-h-[240px] sm:min-h-[290px] lg:min-h-full flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[#E5E3DC]">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                  {/* Badge de Etapa y Procedencia */}
                  <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
                    {step.badge}
                  </div>

                  {/* Numeral de Etapa en Esquina */}
                  <div className="absolute bottom-4 right-5 font-display text-4xl sm:text-5xl font-bold text-white/40 group-hover:text-white/70 transition-colors select-none leading-none">
                    {step.num}
                  </div>

                  {/* Sensación Emocional Guía */}
                  <div className="absolute bottom-4 left-4 right-20 hidden sm:block">
                    <span className="text-[11px] font-mono text-white/80 italic bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                      “{step.sensation}”
                    </span>
                  </div>
                </div>

                {/* -----------------------------------------------------------
                    BLOQUE EDITORIAL Y TÉCNICO (Mobile: después / Desktop: 7 cols)
                   ----------------------------------------------------------- */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Encabezado Técnico de Fase */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                        <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                          ETAPA {step.num} · {step.phase}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-semibold tracking-wider text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                        {step.duration}
                      </span>
                    </div>

                    {/* Título Principal */}
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-4 leading-tight">
                      {step.title}
                    </h2>

                    {/* Explicación Operativa */}
                    <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6 max-w-2xl">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bloque Entregable / Garantía Riguroso */}
                  <div className="mt-4 pt-5 border-t border-[#E5E3DC] bg-[#FAF9F6] -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 lg:-mx-10 lg:-mb-10 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-7 h-7 rounded-full bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#C8102E]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-[#111111]/50 block font-bold mb-0.5">
                          ENTREGABLE / GARANTÍA
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#111111] leading-snug block">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-[11px] font-mono text-[#C8102E] font-bold uppercase tracking-wider flex-shrink-0 pl-10 sm:pl-0">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      <span>FASE VALIDADA</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================================================================
            BLOQUE FINAL: SEGURIDAD ANTE TODO (CIERRE EMOCIONAL DE METODOLOGÍA)
           =================================================================== */}
        <div className="mb-20 bg-white border-2 border-[#E5E3DC] shadow-[0_6px_30px_rgba(0,0,0,0.04)] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C8102E]" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>SEGURIDAD ANTE TODO</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-[#111111]">
                Tú siempre tienes la última palabra
              </h2>

              <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed">
                No se realiza ningún desembolso al vendedor en Alemania hasta que la unidad esté completamente verificada, los costes aprobados por escrito y tú des el visto bueno definitivo.
              </p>

              {/* Tres compromisos fundamentales */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#111111]/80">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Sin desembolso previo</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#111111]/80">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Factura directa a tu nombre</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#111111]/80">
                  <span className="text-[#C8102E] font-bold">✓</span>
                  <span>Transporte asegurado al 100%</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#E5E3DC]">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-9 py-5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl shadow-[#C8102E]/25 flex items-center justify-center cursor-pointer group"
              >
                <span>QUIERO BUSCAR MI COCHE</span>
                <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions on Process */}
      <FAQ />
    </div>
  );
};

