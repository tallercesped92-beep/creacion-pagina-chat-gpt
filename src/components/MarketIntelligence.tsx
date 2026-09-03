import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MagneticCTA } from "./MagneticCTA";

interface MarketIntelligenceProps {
  onCtaClick?: () => void;
}

export const MarketIntelligence: React.FC<MarketIntelligenceProps> = ({
  onCtaClick,
}) => {
  const criteria = [
    {
      num: "01",
      category: "DISPONIBILIDAD & DEMANDA",
      title: "Volumen y Rotación Real",
      desc: "Monitorizamos la oferta activa en los principales canales alemanes frente a la escasez del mercado español, identificando unidades antes de que su cotización varíe.",
    },
    {
      num: "02",
      category: "PRECIO & COSTE TOTAL",
      title: "Presupuesto Cerrado en Origen",
      desc: "Calculamos desde el inicio la cifra total de la operación: vehículo en Alemania, transporte asegurado, ITV, matriculación, impuestos y honorarios.",
    },
    {
      num: "03",
      category: "KILOMETRAJE & HISTORIAL",
      title: "Trazabilidad Documental",
      desc: "Comprobamos el libro de revisiones oficial, lecturas de odómetro en inspecciones previas y ausencia de daños estructurales declarados.",
    },
    {
      num: "04",
      category: "EQUIPAMIENTO & CONFIGURACIÓN",
      title: "Especificación Exacta",
      desc: "Filtramos combinaciones específicas de motorización, acabados de altas prestaciones y paquetes de confort que rara vez aparecen en el mercado nacional.",
    },
    {
      num: "05",
      category: "ESTADO & VERIFICACIÓN TÉCNICA",
      title: "Auditoría Previa",
      desc: "Evaluamos diagnosis electrónica, desgaste de componentes mecánicos y estado estético mediante peritaje antes de autorizar cualquier compra.",
    },
    {
      num: "06",
      category: "CONTEXTO & OPORTUNIDAD",
      title: "Evaluación de Conveniencia",
      desc: "Comparamos la unidad frente al mercado español para asegurarnos de que la importación realmente compensa por calidad, equipamiento o exclusividad.",
    },
  ];

  const analysisTags = [
    "Disponibilidad",
    "Precio en origen",
    "Kilometraje",
    "Equipamiento",
    "Configuración",
    "Historial",
    "Estado",
    "Demanda",
    "Contexto español",
    "Coste total",
  ];

  return (
    <section
      id="inteligencia"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
              04 / INTELIGENCIA DE MERCADO
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-8 bg-white/20 origin-left"
            />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08] text-white mb-6">
            NO BUSCAMOS COCHES.
            <br />
            <span className="text-[#C8102E]">BUSCAMOS OPORTUNIDADES.</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed mb-6 max-w-2xl">
            Analizamos el mercado alemán para identificar qué unidades tienen sentido para ti.
          </p>

          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed max-w-2xl">
            No seleccionamos una unidad simplemente porque esté disponible. La contrastamos rigurosamente con el mercado y evaluamos si realmente constituye una compra sólida y justificada antes de ejecutar cualquier paso.
          </p>
        </div>

        {/* 10 Analysis Criteria Indicator Bar */}
        <div className="mb-14 pb-8 border-b border-white/10">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#C8102E] uppercase font-display mb-4">
            10 DIMENSIONES DE ANÁLISIS EN CADA BÚSQUEDA
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {analysisTags.map((tag, idx) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs font-medium tracking-wider uppercase text-white/80 bg-white/5 px-3 py-1.5 border border-white/10"
              >
                <span className="text-[#C8102E] font-display text-[10px] font-bold mr-2">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 6 Analytical Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {criteria.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, borderColor: "rgba(255, 255, 255, 0.25)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="p-8 bg-white/[0.03] border border-white/10 relative group flex flex-col justify-between"
            >
              {/* Top Corner Red Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C8102E] transition-colors duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                  <span className="text-[10px] font-bold tracking-[0.22em] text-[#C8102E] uppercase font-display">
                    {item.category}
                  </span>
                  <span className="font-display text-sm font-bold text-white/40">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight uppercase text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs text-white/40 font-mono tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8102E] mr-2" />
                <span>Criterio verificado antes de la compra</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Proposition & Secondary Action */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-white mb-1">
              EL MÉTODO ANTE TODO
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
              No vendemos promesas de catálogo. Analizamos datos reales de mercado para que tu compra sea segura, transparente y rentable.
            </p>
          </div>

          {onCtaClick && (
            <MagneticCTA
              id="intelligence-cta-button"
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-[#C8102E] text-[#0A0A0A] hover:text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-lg flex-shrink-0"
            >
              <span>ANALIZAR MI BÚSQUEDA</span>
              <ArrowRight className="w-4 h-4 ml-3" />
            </MagneticCTA>
          )}
        </div>
      </div>
    </section>
  );
};
