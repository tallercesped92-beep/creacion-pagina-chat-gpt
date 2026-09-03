import React from "react";
import { motion } from "motion/react";
import {
  Truck,
  FileText,
  ShieldCheck,
  Scale,
  Car,
  AlertTriangle,
  ArrowRight,
  MessageSquare,
  BadgePercent,
  CheckCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "../lib/whatsapp";
import { MarketSection } from "../components/MarketSection";

interface ImportPageProps {
  onCtaClick: () => void;
}

export const ImportPage: React.FC<ImportPageProps> = ({ onCtaClick }) => {
  const importFlow = [
    {
      step: "01",
      title: "ORIGEN: ALEMANIA",
      icon: Car,
      desc: "Localización, negociación del contrato mercantil en alemán y compraventa con factura europea en regla.",
    },
    {
      step: "02",
      title: "INSPECCIÓN PREVIA",
      icon: ShieldCheck,
      desc: "Verificación documental completa (Fahrzeugbrief y TÜV) y peritaje presencial técnico del vehículo.",
    },
    {
      step: "03",
      title: "TRANSPORTE ASEGURADO",
      icon: Truck,
      desc: "Carga en camión portavehículos internacional con seguro a todo riesgo con cobertura de valor real.",
    },
    {
      step: "04",
      title: "DOCUMENTACIÓN Y COC",
      icon: FileText,
      desc: "Tramitación del Certificado de Conformidad Europeo (COC) o ficha reducida emitida por ingeniero colegiado.",
    },
    {
      step: "05",
      title: "ITV DE IMPORTACIÓN",
      icon: Scale,
      desc: "Inspección técnica extraordinaria en estación de ITV autorizada en España para emisión de ficha técnica.",
    },
    {
      step: "06",
      title: "IMPUESTOS Y TASAS",
      icon: BadgePercent,
      desc: "Liquidación telemática del Modelo 576 (IEDMT / Impuesto de Matriculación) e Impuesto de Circulación (IVTM).",
    },
    {
      step: "07",
      title: "MATRICULACIÓN Y ENTREGA",
      icon: CheckCircle,
      desc: "Expedición del permiso de circulación por la DGT, troquelado de placas españolas y entrega en mano.",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              GUÍA / IMPORTACIÓN ALEMANIA - ESPAÑA
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            IMPORTAR DE ALEMANIA.
            <br />
            <span className="text-[#C8102E]">SIN INCERTIDUMBRE NI RIESGOS.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-8">
            Alemania es el mayor mercado automotriz de Europa, con más rotación, mejor equipamiento y mantenimiento riguroso. Te explicamos exactamente cómo gestionamos la importación de principio a fin.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-7 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-colors shadow-lg flex items-center"
            >
              <span>SOLICITAR ESTUDIO DE IMPORTACIÓN</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <a
              href={getWhatsAppUrl("Hola, quiero consultar el coste aproximado de importar un vehículo concreto desde Alemania.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase transition-colors flex items-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-white/70" />
              <span>CONSULTAR POR WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Visual Flow Representation */}
        <div className="mb-20">
          <div className="border-b border-white/10 pb-4 mb-8 flex items-center justify-between">
            <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
              EL RECORRIDO DE LA OPERACIÓN
            </h2>
            <span className="text-xs font-mono text-[#C8102E] uppercase tracking-wider">
              ALEMANIA ➔ ESPAÑA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importFlow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="p-6 bg-[#141414] border border-white/10 relative flex flex-col justify-between group hover:border-[#C8102E]/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-white/30 font-bold">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold uppercase text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/65 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mandatory Official Disclaimer Callout */}
        <div className="p-8 bg-[#181818] border border-amber-500/30 relative overflow-hidden mb-16">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 flex-shrink-0 mt-1">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold uppercase text-white mb-2 tracking-wide">
                AVISO IMPORTANTE SOBRE COSTES Y ESTIMACIONES
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-3">
                <strong>Los costes finales dependen del vehículo, impuestos, transporte y circunstancias concretas de cada operación. Las cifras mostradas son estimaciones.</strong>
              </p>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                El impuesto de matriculación (IEDMT) en España se liquida según los tramos de emisiones de CO2 homologados (WLTP) y las tablas oficiales de valoración de la Agencia Tributaria. Antes de comprometer cualquier compra, recibirás un presupuesto cerrado con el cálculo exacto de cada partida para tu caso particular.
              </p>
            </div>
          </div>
        </div>

        {/* Desglose Transparente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#141414] border border-white/10">
            <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
              ¿QUÉ INCLUYE EL PRESUPUESTO CERRADO?
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70 font-light">
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Precio del vehículo con factura comercial y régimen fiscal (IVA / REBU).</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Transporte en camión portavehículos con seguro CMR internacional.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Ficha reducida de homologación emitida por ingeniero técnico colegiado.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Tasas oficiales de estación ITV previa a la matriculación.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Impuesto IEDMT (Modelo 576 AEAT) y tasa de tráfico DGT.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-[#C8102E] font-bold">✓</span>
                <span>Honorarios de gestión, asesoría jurídica y coordinación integral.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-[#141414] border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-white mb-4">
                CALCULA TU CASO PARTICULAR
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                Cada motorización, año y nivel de emisiones genera un cálculo fiscal distinto. Nuestro equipo analiza la viabilidad y los números exactos de la unidad que te interesa de forma totalmente gratuita.
              </p>
            </div>

            <button
              onClick={onCtaClick}
              className="w-full py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors shadow-lg text-center cursor-pointer"
            >
              QUIERO QUE CALCULÉIS MI OPERACIÓN
            </button>
          </div>
        </div>
      </div>

      {/* Deep Market Reality Section */}
      <MarketSection onCtaClick={onCtaClick} />
    </div>
  );
};
