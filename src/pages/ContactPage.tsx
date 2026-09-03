import React from "react";
import { MessageSquare, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppDisplayNumber } from "../lib/whatsapp";
import { LeadForm } from "../components/LeadForm";

interface ContactPageProps {
  onCtaClick?: () => void;
  prefilledVehicle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledVehicle }) => {
  const whatsAppNumber = getWhatsAppDisplayNumber();

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              CONTACTO / ATENCIÓN PERSONALIZADA
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            HABLEMOS DE TU PROYECTO.
            <br />
            <span className="text-[#C8102E]">RESPUESTA ÁGIL Y DIRECTA.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed">
            Puedes completar el formulario de búsqueda de vehículo para recibir una primera valoración completa, o contactar directamente por WhatsApp si prefieres una consulta preliminar rápida.
          </p>
        </div>

        {/* Contact options cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* WhatsApp Direct */}
          <div className="p-8 bg-[#141414] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
                WHATSAPP DIRECTO
              </h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                Canal prioritario para resolver dudas rápidas, enviar enlaces de anuncios que te interesen o solicitar asesoramiento.
              </p>
              {whatsAppNumber && (
                <p className="text-xs font-mono text-[#C8102E] mb-6 font-semibold">
                  {whatsAppNumber}
                </p>
              )}
            </div>

            <a
              href={getWhatsAppUrl("Hola Céspedes Automotriz, me gustaría consultar la búsqueda de un vehículo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors text-center block shadow-lg cursor-pointer"
            >
              ABRIR CHAT DE WHATSAPP
            </a>
          </div>

          {/* Horario & Atención */}
          <div className="p-8 bg-[#141414] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
                HORARIO DE ATENCIÓN
              </h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                Atendemos consultas de lunes a viernes en horario continuo:
              </p>
              <div className="space-y-1 text-xs font-mono text-white/80">
                <p>Lunes - Viernes: 09:00 - 19:30 h</p>
                <p>Sábados: 10:00 - 14:00 h (Previa cita)</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-white/40 font-light">
              Respuestas telemáticas en un plazo inferior a 24 horas laborables.
            </div>
          </div>

          {/* Seguridad y Privacidad */}
          <div className="p-8 bg-[#141414] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-display text-lg font-bold uppercase text-white mb-2">
                CONFIDENCIALIDAD
              </h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-4">
                Tratamos tus datos y presupuesto bajo estricto secreto profesional. No compartimos tu información con terceros ni la utilizamos para spam.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-white/60 font-mono">
              RGPD / LOPD-GDD Conforme
            </div>
          </div>
        </div>

        {/* Lead Form embed */}
        <div className="border-t border-white/10 pt-12">
          <LeadForm prefilledVehicle={prefilledVehicle} />
        </div>
      </div>
    </div>
  );
};
