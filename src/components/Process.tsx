import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface ProcessProps {
  onCtaClick?: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onCtaClick }) => {
  const steps = [
    {
      number: "01",
      stepIndicator: "PASO 01 / NECESIDAD",
      title: "NOS CUENTAS QUÉ BUSCAS",
      text: "Marca, modelo, presupuesto, año mínimo, kilometraje máximo, tipo de combustible, caja de cambios y equipamiento imprescindible. Cuanto más precisos sean los criterios, más eficiente será la búsqueda.",
    },
    {
      number: "02",
      stepIndicator: "PASO 02 / MERCADO",
      title: "BUSCAMOS",
      text: "Rastreamos el mercado alemán y concesionarios oficiales para localizar las unidades que verdaderamente encajan. No nos limitamos a un único portal: evaluamos la oferta global disponible en tiempo real.",
    },
    {
      number: "03",
      stepIndicator: "PASO 03 / FILTRADO",
      title: "FILTRAMOS",
      text: "Descartamos las opciones con precios inflados, historiales dudosos, lagunas de mantenimiento o condiciones que no justifican la operación. Solo avanzamos con unidades que superan nuestro estándar.",
    },
    {
      number: "04",
      stepIndicator: "PASO 04 / AUDITORÍA",
      title: "ANALIZAMOS",
      text: "Comparamos precio de origen, paquetes de equipamiento de fábrica, historial oficial de mantenimiento y calculamos el coste total aproximado en España (vehículo + transporte + ITV + impuestos + honorarios).",
    },
    {
      number: "05",
      stepIndicator: "PASO 05 / INSPECCIÓN",
      title: "VERIFICAMOS",
      text: "Cuando procede, coordinamos una inspección presencial y diagnosis técnica con perito profesional en Alemania para verificar chasis, pintura, estado mecánico y confirmar que el vehículo coincide con lo anunciado.",
    },
    {
      number: "06",
      stepIndicator: "PASO 06 / LOGÍSTICA & ENTREGA",
      title: "IMPORTAMOS",
      text: "Acompañamos el proceso hasta España: compra segura con factura en regla, transporte en camión portavehículos asegurado a todo riesgo, homologación, ITV y matriculación definitiva.",
    },
  ];

  return (
    <section
      id="proceso"
      className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E3DC]"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              06 / ETAPAS DEL SERVICIO
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-8 bg-[#111111]/20 origin-left"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] text-[#111111]">
            DE LA IDEA A TU GARAJE.
            <br />
            <span className="text-[#C8102E]">EN 6 PASOS TRANSPARENTES.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#4B5563] font-normal leading-relaxed max-w-2xl">
            Un método estructurado que elimina la incertidumbre de comprar en el extranjero, dándote visibilidad total y costes claros antes de tomar cualquier decisión.
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-0 relative border-l border-[#111111]/15 ml-4 sm:ml-6 pl-6 sm:pl-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="py-8 sm:py-10 border-b border-[#111111]/10 last:border-b-0 relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-10 sm:top-12 w-3.5 h-3.5 rounded-full bg-[#111111] group-hover:bg-[#C8102E] border-2 border-[#F3F2EF] transition-colors" />

              <div className="flex items-center space-x-3 mb-2">
                <span className="text-[11px] font-mono tracking-widest text-[#C8102E] font-semibold">
                  {step.stepIndicator}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111]">
                  {step.number} — {step.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#4B5563] font-normal leading-relaxed max-w-3xl">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action button */}
        {onCtaClick && (
          <div className="mt-14 pt-8 border-t border-[#111111]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-[#6B7280] font-light">
              ¿Tienes un modelo en mente? Cuéntanos qué buscas y te preparamos una primera valoración sin compromiso.
            </p>
            <button
              onClick={onCtaClick}
              className="px-7 py-3.5 bg-[#111111] hover:bg-[#C8102E] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center flex-shrink-0"
            >
              <span>QUIERO QUE BUSQUÉIS MI COCHE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
