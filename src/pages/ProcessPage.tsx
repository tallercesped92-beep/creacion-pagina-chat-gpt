import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { FAQ } from "../components/FAQ";

interface ProcessPageProps {
  onCtaClick: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onCtaClick }) => {
  const processSteps = [
    {
      num: "01",
      phase: "BÚSQUEDA",
      title: "BÚSQUEDA Y PROSPECCIÓN ACTIVA",
      desc: "Definimos tus criterios exactos y rastreamos concesionarios oficiales (Audi Gebrauchtwagen :plus, BMW Premium Selection, Mercedes-Benz Certified, Porsche Approved) y especialistas cualificados en Alemania.",
      deliverable: "Ficha de criterios de búsqueda y prospección de mercado.",
      duration: "Días 1 - 3",
    },
    {
      num: "02",
      phase: "ANÁLISIS",
      title: "FILTRADO Y CÁLCULO DE COSTES",
      desc: "Descartamos coches de riesgo, comprobamos el historial y desglosamos el coste real puesto en España: precio origen + transporte asegurado + tasas ITV + impuesto IEDMT (Modelo 576) + matriculación. Presupuesto cerrado.",
      deliverable: "Informe de descarte y desglose financiero cerrado.",
      duration: "Días 3 - 5",
    },
    {
      num: "03",
      phase: "SELECCIÓN",
      title: "SELECCIÓN Y PROPUESTA FORMAL",
      desc: "Presentamos la comparativa técnica de las mejores unidades viables. Analizamos contigo configuración, equipamiento, kilometraje y relación calidad/precio para elegir la unidad definitiva.",
      deliverable: "Propuesta formal de adjudicación seleccionada con el cliente.",
      duration: "Días 5 - 6",
    },
    {
      num: "04",
      phase: "VERIFICACIÓN",
      title: "VERIFICACIÓN TÉCNICA EN ORIGEN",
      desc: "Auditamos la documentación original (Fahrzeugbrief y Fahrzeugschein) y coordinamos la inspección presencial y diagnosis electrónica por perito en Alemania antes de transferir fondos.",
      deliverable: "Dossier pericial con más de 80 puntos de control técnico.",
      duration: "Días 6 - 9",
    },
    {
      num: "05",
      phase: "COMPRA & ENTREGA",
      title: "COMPRA, TRANSPORTE Y MATRICULACIÓN",
      desc: "Adquisición oficial en origen, transporte asegurado a todo riesgo, homologación, ITV y matriculación definitiva con entrega lista para rodar.",
      deliverable: "Vehículo con placas españolas definitivas en tu garaje.",
      duration: "Días 10 - 20",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              METODOLOGÍA / 5 ETAPAS
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            DE LA IDEA A TU GARAJE.
            <br />
            <span className="text-[#C8102E]">EL PROCESO EN 5 ETAPAS.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-8">
            Diseñamos un método estructurado en 5 etapas para que importar desde Alemania sea un proceso predecible, transparente y sin riesgos.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-7 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-colors shadow-lg flex items-center"
            >
              <span>INICIAR MI BÚSQUEDA</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Timeline Badge */}
        <div className="mb-12 p-5 bg-[#141414] border border-white/10 flex items-start space-x-4 max-w-2xl">
          <Clock className="w-6 h-6 text-[#C8102E] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-white/80 font-light space-y-1">
            <p>
              <span className="font-semibold text-white">Plazo medio estimado:</span>{" "}
              Entre 15 y 25 días hábiles desde la aprobación de la unidad hasta la entrega con placas españolas definitivas.
            </p>
            <p className="text-[11px] sm:text-xs text-white/50">
              Los tiempos de cada etapa son orientativos. El plazo total puede variar según transporte, documentación, ITV y matriculación.
            </p>
          </div>
        </div>

        {/* Steps Detailed Cards */}
        <div className="space-y-6 mb-20">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="p-8 bg-[#141414] border border-white/10 relative group hover:border-[#C8102E]/40 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center font-display text-base font-bold text-[#C8102E] flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block mb-1">
                      {step.phase} · {step.duration}
                    </span>
                    <h2 className="font-display text-xl font-bold uppercase text-white mb-2">
                      {step.title}
                    </h2>
                    <p className="text-sm text-white/70 font-light leading-relaxed max-w-3xl">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 flex-shrink-0">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-1">
                    ENTREGABLE / GARANTÍA
                  </span>
                  <div className="inline-flex items-center text-xs text-white/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] mr-1.5" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety Box */}
        <div className="p-8 sm:p-10 bg-[#161616] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C8102E] uppercase tracking-widest mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>SEGURIDAD ANTE TODO</span>
            </div>
            <h2 className="font-display text-xl font-bold uppercase text-white mb-2">
              Tú siempre tienes la última palabra
            </h2>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              No se realiza ningún desembolso al vendedor en Alemania hasta que la unidad esté completamente verificada, los costes aprobados por escrito y tú des el visto bueno definitivo.
            </p>
          </div>

          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-lg flex-shrink-0 cursor-pointer"
          >
            QUIERO BUSCAR MI COCHE
          </button>
        </div>
      </div>

      {/* Frequently Asked Questions on Process */}
      <FAQ />
    </div>
  );
};
