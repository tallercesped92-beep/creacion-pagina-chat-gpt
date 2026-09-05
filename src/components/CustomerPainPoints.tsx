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
    { doubt: "¿El precio realmente merece la pena?", answer: "Analizamos el mercado y calculamos todos los costes reales de importación para certificar si la unidad compensa frente a las alternativas en España." },
    { doubt: "¿El coche tiene un historial correcto?", answer: "Exigimos y auditamos el libro de mantenimiento oficial en Alemania, revisiones periódicas y registros documentales de origen." },
    { doubt: "¿Los kilómetros son fiables?", answer: "Cruzamos las lecturas de ITV previas (TÜV/DEKRA), registros de talleres autorizados y diagnosis de centralitas para confirmar el kilometraje." },
    { doubt: "¿Qué equipamiento tiene realmente?", answer: "Desglosamos la lista de códigos de fábrica (VIN) para verificar qué paquetes y extras equipa de origen, evitando sorpresas en el anuncio." },
    { doubt: "¿Cuánto costará traerlo a España?", answer: "Te entregamos un presupuesto cerrado con el transporte portavehículos asegurado a todo riesgo, sin recargos imprevistos." },
    { doubt: "¿Qué impuestos tendré que pagar?", answer: "Calculamos con exactitud las tablas de Hacienda y la cuota de IEDMT (Impuesto de Matriculación / Modelo 576) según emisiones CO2 y valor venal." },
    { doubt: "¿Hay problemas con la documentación?", answer: "Gestionamos la ficha reducida, COC (Certificado de Conformidad Europeo) y toda la documentación necesaria para la ITV y DGT sin demoras." },
    { doubt: "¿Estoy comprando una buena unidad?", answer: "Filtramos y descartamos cualquier unidad con señales dudosas, rotación forzada o defectos ocultos antes de recomendarla." },
    { doubt: "¿Y si el coche no es como aparece en las fotos?", answer: "Coordinamos un peritaje técnico in situ con perito cualificado en Alemania que revisa chasis, pintura, electrónica y prueba dinámica." },
  ];

  return (
    <section id="dudas-comprador" className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E3DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">03 / EL PROBLEMA DEL CLIENTE</span>
            <div className="h-[1px] w-8 bg-[#111111]/20" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-[1.08] text-[#111111] mb-6">
            COMPRAR EN ALEMANIA
            <br />PARECE SENCILLO.
            <br /><span className="text-[#C8102E]">HASTA QUE APARECEN LAS DUDAS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B6068] font-light leading-relaxed">
            Buscar en portales alemanes está al alcance de cualquiera. Saber distinguir una unidad excelente de un problema camuflado exige investigación técnica, experiencia de mercado y rigor documental.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 border-y border-[#111111]/15">
          {painPoints.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="py-7 sm:py-8 border-b border-[#111111]/10 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <div className="flex items-start gap-4">
                <span className="font-display text-xl font-bold text-[#C8102E]/70 leading-none pt-1">{(index + 1).toString().padStart(2, "0")}</span>
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-3">
                    <HelpCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#111111] tracking-tight leading-snug">{item.doubt}</h3>
                  </div>
                  <p className="text-sm text-[#5B6068] font-light leading-relaxed pl-6">{item.answer}</p>
                  <div className="mt-4 pl-6 flex items-center text-[10px] font-mono text-[#6B7280] uppercase tracking-wider">
                    <CheckCircle className="w-3.5 h-3.5 mr-2 text-[#C8102E]" />
                    <span>Resuelto por Céspedes Automotriz</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 bg-[#111111] text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C8102E]" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#C8102E] uppercase tracking-widest mb-2">
                <ShieldAlert className="w-4 h-4" /><span>SEGURIDAD EN CADA PASO</span>
              </div>
              <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">No dejes una inversión importante en manos de la intuición</h4>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">Analizamos cada detalle antes de que comprometas un solo euro. Te decimos con honestidad si una unidad merece la pena o si es preferible descartarla.</p>
            </div>
            {onCtaClick && (
              <button onClick={onCtaClick} className="px-7 py-3.5 bg-white hover:bg-[#C8102E] text-[#0A0A0A] hover:text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-lg flex-shrink-0 flex items-center">
                <span>QUIERO BUSCAR MI COCHE</span><ArrowRight className="w-4 h-4 ml-2" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
