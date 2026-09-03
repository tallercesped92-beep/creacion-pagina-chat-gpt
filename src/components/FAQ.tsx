import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQItem } from "../types";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FAQItem[] = [
    {
      id: "faq-1",
      question: "¿Cuánto cuesta el servicio y cómo se estructuran los costes?",
      answer:
        "La consulta y valoración inicial son 100% gratuitas y sin compromiso. Antes de iniciar cualquier gestión o compra, recibirás un presupuesto cerrado con el desglose exacto: precio del vehículo en Alemania + transporte asegurado + tasas de ITV + matriculación + impuestos (IEDMT) + honorarios de gestión profesional. Conocerás el coste total de la operación antes de avanzar, sin costes ocultos.",
    },
    {
      id: "faq-2",
      question: "¿Qué ocurre después de enviar el formulario?",
      answer:
        "Revisamos los criterios de tu búsqueda y analizamos las unidades reales disponibles en Alemania. Nos pondremos en contacto contigo por WhatsApp o teléfono con una primera valoración y posibles opciones que encajen con tu presupuesto, para que decidas libremente si deseas avanzar.",
    },
    {
      id: "faq-3",
      question: "¿Cómo y a quién se realiza el pago del vehículo?",
      answer:
        "El pago del vehículo se realiza mediante transferencia bancaria directa al vendedor o concesionario oficial alemán una vez verificado e inspeccionado el vehículo con contrato y factura a tu nombre. Todos los importes quedan documentados con total seguridad jurídica y fiscal.",
    },
    {
      id: "faq-4",
      question: "¿Tengo que desplazarme o viajar a Alemania?",
      answer:
        "No es necesario. Gestionamos íntegramente la negociación en alemán, la auditoría documental e inspección técnica previa, el transporte en camión portavehículos asegurado y todos los trámites de ITV y matriculación en España.",
    },
    {
      id: "faq-5",
      question: "¿Cómo se verifica el estado real y kilometraje del coche?",
      answer:
        "Realizamos una doble auditoría: comprobación documental completa de historial de mantenimiento oficial, revisiones y ausencia de siniestros, junto a una inspección presencial y diagnosis del estado mecánico, electrónico y de chasis antes de dar la conformidad.",
    },
    {
      id: "faq-6",
      question: "¿Existe opción de financiar la operación?",
      answer:
        "Sí. Disponemos de opciones de financiación mediante empresa colaboradora especializada. Te ayudamos a gestionar el estudio de viabilidad a través de nuestro colaborador para facilitarte la compra en condiciones a tu medida.",
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E3DC]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              08 / PREGUNTAS FRECUENTES
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
            DUDAS FRECUENTES
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="divide-y divide-[#111111]/15 border-y border-[#111111]/15">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors">
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="font-display text-lg sm:text-xl font-bold tracking-tight uppercase text-[#111111] group-hover:text-[#C8102E] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] group-hover:border-[#C8102E] group-hover:text-[#C8102E] transition-colors relative overflow-hidden">
                    <AnimatePresence initial={false} mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="minus"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center justify-center"
                        >
                          <Minus className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="plus"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="flex items-center justify-center"
                        >
                          <Plus className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm sm:text-base text-[#6B7280] font-normal leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
