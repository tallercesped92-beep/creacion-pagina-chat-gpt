import React from "react";
import { motion } from "motion/react";
import {
  Search,
  Filter,
  BarChart2,
  ShieldCheck,
  Truck,
  FileCheck2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { CustomerPainPoints } from "../components/CustomerPainPoints";
import { Advantages } from "../components/Advantages";
import { MarketIntelligence } from "../components/MarketIntelligence";
import { FAQ } from "../components/FAQ";

interface ServicePageProps {
  onCtaClick: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ onCtaClick }) => {
  const serviceModules = [
    {
      icon: Search,
      title: "BÚSQUEDA Y PROSPECCIÓN ACTIVA",
      subtitle: "Acceso al mercado mayorista y oficial",
      desc: "Rastreamos a diario la oferta de concesionarios oficiales y vendedores cualificados en Alemania. No nos limitamos a los anuncios públicos habituales; analizamos el stock en rotación real.",
    },
    {
      icon: Filter,
      title: "FILTRADO Y CRITERIO DE EXCLUSIÓN",
      subtitle: "Descarte implacable de unidades de riesgo",
      desc: "La mayoría de coches importados que defraudan a los compradores fallan en el filtrado. Descartamos unidades con historiales fragmentados, cambios de titularidad sospechosos o inconsistencias en kilometraje.",
    },
    {
      icon: BarChart2,
      title: "ANÁLISIS COMPARATIVO Y DE COSTES",
      subtitle: "Números transparentes antes de reservar",
      desc: "Comparamos la unidad con el histórico del mercado. Calculamos con exactitud el coste total puesto en España (vehículo, transporte, homologación, ITV, IEDMT y matriculación). Sin costes ocultos.",
    },
    {
      icon: ShieldCheck,
      title: "VERIFICACIÓN TÉCNICA EN ORIGEN",
      subtitle: "Inspección presencial y diagnosis",
      desc: "Auditamos la documentación oficial y, antes de cerrar la operación, coordinamos la revisión presencial del vehículo en Alemania por perito independiente: espesores de pintura, diagnóstico OBD y mecánica.",
    },
    {
      icon: FileCheck2,
      title: "NEGOCIACIÓN Y SEGURIDAD JURÍDICA",
      subtitle: "Contrato mercantil en regla",
      desc: "Gestionamos la comunicación en alemán técnico y jurídico con el vendedor, asegurando factura con IVA deducible o régimen REBU según corresponda, y reserva formal blindada.",
    },
    {
      icon: Truck,
      title: "LOGÍSTICA Y MATRICULACIÓN INTEGRAL",
      subtitle: "Transporte asegurado y entrega lista para rodar",
      desc: "Coordinamos el transporte en camión portavehículos asegurado a todo riesgo, tramitamos la ficha reducida, pasamos la ITV de importación y liquidamos los impuestos ante la AEAT y la DGT.",
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Breadcrumb & Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              SERVICIO / PERSONAL CAR SHOPPER
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-white mb-6">
            INVESTIGACIÓN Y SELECCIÓN.
            <br />
            <span className="text-[#C8102E]">NO SIMPLE INTERMEDIACIÓN.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/80 font-light leading-relaxed mb-8">
            En Céspedes Automotriz no compras un coche de stock. Contratas un servicio de consultoría automotriz independiente que busca, audita y gestiona el vehículo exacto que necesitas en el mercado alemán.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onCtaClick}
              className="px-7 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-colors shadow-lg flex items-center"
            >
              <span>QUIERO BUSCAR MI COCHE</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {serviceModules.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-8 bg-[#141414] border border-white/10 relative group hover:border-[#C8102E]/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#C8102E] mb-6 group-hover:bg-[#C8102E]/15 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block mb-1">
                  {item.subtitle}
                </span>

                <h2 className="font-display text-lg font-bold uppercase tracking-tight text-white mb-3">
                  {item.title}
                </h2>

                <p className="text-sm text-white/65 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Honest Disclaimer Box */}
        <div className="p-8 sm:p-10 bg-[#161616] border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C8102E]" />
          <h2 className="font-display text-xl font-bold uppercase tracking-tight text-white mb-3">
            NUESTRO COMPROMISO DE INDEPENDENCIA
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed max-w-4xl mb-6">
            No tenemos acuerdos de comisión oculta con concesionarios alemanes ni tenemos necesidad de dar salida a un stock propio. Nuestro único interés es defender tu presupuesto y encontrar la unidad que realmente merece tu inversión. Si una unidad no nos convence, te lo diremos claramente y buscaremos otra.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/80 font-mono tracking-wider">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#C8102E]" />
              <span>Criterio 100% independiente</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#C8102E]" />
              <span>Presupuesto cerrado previo</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#C8102E]" />
              <span>Inspección técnica real</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Customer Doubts & Solutions Module */}
      <CustomerPainPoints onCtaClick={onCtaClick} />

      {/* Deep Market Intelligence (10 Dimensions) */}
      <MarketIntelligence onCtaClick={onCtaClick} />

      {/* Why Germany & Advantages */}
      <Advantages />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Final Conversion Callout */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-20 text-center py-12 border-t border-white/10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
          ¿TIENES UN MODELO EN MENTE?
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-light mb-8 max-w-xl mx-auto">
          Cuéntanos qué vehículo estás buscando y realizamos una prospección de mercado orientada a localizar las unidades que encajan con tus criterios.
        </p>
        <button
          onClick={onCtaClick}
          className="px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-colors cursor-pointer shadow-xl inline-flex items-center"
        >
          <span>QUIERO QUE BUSQUÉIS MI COCHE</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

