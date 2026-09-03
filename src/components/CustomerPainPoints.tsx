import React from "react";
import { motion } from "motion/react";
import { HelpCircle, CheckCircle, ShieldAlert, ArrowRight } from "lucide-react";

interface CustomerPainPointsProps {
  onCtaClick?: () => void;
}

export const CustomerPainPoints: React.FC<CustomerPainPointsProps> = ({
  onCtaClick,
}) => {
  const painPoints = [
    {
      doubt: "¿El precio realmente merece la pena?",
      answer:
        "Analizamos el mercado y calculamos todos los costes reales de importación para certificar si la unidad compensa frente a las alternativas en España.",
    },
    {
      doubt: "¿El coche tiene un historial correcto?",
      answer:
        "Exigimos y auditamos el libro de mantenimiento oficial en Alemania, revisiones periódicas y registros documentales de origen.",
    },
    {
      doubt: "¿Los kilómetros son fiables?",
      answer:
        "Cruzamos las lecturas de ITV previas (TÜV/DEKRA), registros de talleres autorizados y diagnosis de centralitas para confirmar el kilometraje.",
    },
    {
      doubt: "¿Qué equipamiento tiene realmente?",
      answer:
        "Desglosamos la lista de códigos de fábrica (VIN) para verificar qué paquetes y extras equipa de origen, evitando sorpresas en el anuncio.",
    },
    {
      doubt: "¿Cuánto costará traerlo a España?",
      answer:
        "Te entregamos un presupuesto cerrado con el transporte portavehículos asegurado a todo riesgo, sin recargos imprevistos.",
    },
    {
      doubt: "¿Qué impuestos tendré que pagar?",
      answer:
        "Calculamos con exactitud las tablas de Hacienda y la cuota de IEDMT (Impuesto de Matriculación / Modelo 576) según emisiones CO2 y valor venal.",
    },
    {
      doubt: "¿Hay problemas con la documentación?",
      answer:
        "Gestionamos la ficha reducida, COC (Certificado de Conformidad Europeo) y toda la documentación necesaria para la ITV y DGT sin demoras.",
    },
    {
      doubt: "¿Estoy comprando una buena unidad?",
      answer:
        "Filtramos y descartamos cualquier unidad con señales dudosas, rotación forzada o defectos ocultos antes de recomendarla.",
    },
    {
      doubt: "¿Y si el coche no es como aparece en las fotos?",
      answer:
        "Coordinamos un peritaje técnico in situ con perito cualificado en Alemania que revisa chasis, pintura, electrónica y prueba dinámica.",
    },
  ];

  return (
    <section
      id="dudas-comprador"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              03 / EL PROBLEMA DEL CLIENTE
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-[1.08] text-white mb-6">
            COMPRAR EN ALEMANIA
            <br />
            PARECE SENCILLO.
            <br />
            <span className="text-white/90">HASTA QUE APARECEN LAS DUDAS.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Buscar en portales alemanes está al alcance de cualquiera. Saber distinguir una unidad excelente de un problema camuflado exige investigación técnica, experiencia de mercado y rigor documental.
          </p>
        </div>

        {/* 9 Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="p-7 bg-[#141414] border border-white/10 rounded-none relative group hover:border-white/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-1.5 bg-red-500/10 border border-red-500/20 text-[#C8102E] flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight leading-snug">
                    {item.doubt}
                  </h3>
                </div>

                <div className="pl-8 text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                  {item.answer}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 pl-8 flex items-center text-[11px] font-mono text-white/60 tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 mr-2 flex-shrink-0 text-[#C8102E]" />
                <span>Resuelto por Céspedes Automotriz</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#141414] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#C8102E] uppercase tracking-widest mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>SEGURIDAD EN CADA PASO</span>
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
              No dejes una inversión importante en manos de la intuición
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              Analizamos cada detalle antes de que comprometas un solo euro. Te decimos con honestidad si una unidad merece la pena o si es preferible descartarla.
            </p>
          </div>

          {onCtaClick && (
            <button
              onClick={onCtaClick}
              className="px-7 py-3.5 bg-white hover:bg-[#C8102E] text-[#0A0A0A] hover:text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-lg flex-shrink-0 flex items-center"
            >
              <span>QUIERO BUSCAR MI COCHE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
