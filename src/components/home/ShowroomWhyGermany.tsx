import React from "react";
import { ArrowRight } from "lucide-react";
import audiQ5Image from "../../assets/images/audi_q5_sportback_1787232355393.jpg";

interface ShowroomWhyGermanyProps {
  onNavigateAdvantages: () => void;
}

export const ShowroomWhyGermany: React.FC<ShowroomWhyGermanyProps> = ({ onNavigateAdvantages }) => {
  const advantages = [
    { num: "01", title: "MÁS MERCADO", desc: "Mayor volumen de oferta." },
    { num: "02", title: "MÁS OPCIONES", desc: "Más configuraciones y equipamiento." },
    { num: "03", title: "MÁS CONTROL", desc: "Historiales y documentación." },
    { num: "04", title: "DECISIÓN INFORMADA", desc: "Análisis técnico y económico antes de reservar." },
  ];

  return (
    <section id="por-que-alemania" className="py-24 sm:py-32 bg-[#EAE8E2] text-[#0A0A0A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">03 / POR QUÉ ALEMANIA</span>
              <div className="h-[1px] w-8 bg-black/20" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#0A0A0A] mb-6">
              MÁS MERCADO.<br />MÁS OPCIONES.<br /><span>MÁS CONTROL.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/75 font-light leading-relaxed mb-8 max-w-xl">
              España es solo una parte del mercado. Al ampliar la búsqueda a Alemania y Europa aparecen más unidades, más configuraciones y más posibilidades de encontrar exactamente lo que buscas.
            </p>
            <div className="space-y-5 mb-10 pt-6 border-t border-black/10">
              {advantages.map((item, index) => (
                <div key={item.num} className={`pb-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 ${index < advantages.length - 1 ? "border-b border-black/10" : ""}`}>
                  <div className="flex items-center space-x-3 sm:w-48 flex-shrink-0">
                    <span className="text-xs font-mono tracking-widest text-[#C8102E]">{item.num}</span>
                    <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">{item.title}</span>
                  </div>
                  <p className="text-xs text-[#0A0A0A]/60 font-light leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <button onClick={onNavigateAdvantages} className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#0A0A0A] hover:text-[#C8102E] transition-colors cursor-pointer">
                <span>POR QUÉ IMPORTAR DESDE ALEMANIA</span>
                <ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 relative group overflow-hidden bg-black border border-black/10">
            <div className="aspect-[16/11] sm:aspect-[16/10] overflow-hidden">
              <img src={audiQ5Image} alt="Audi Q5 Sportback importado de Alemania" className="w-full h-full object-cover object-center brightness-100 contrast-[1.02] group-hover:scale-[1.025] transition-transform duration-1000 ease-[0.16,1,0.3,1]" loading="lazy" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8102E] block mb-1">REFERENCIA VISUAL · MERCADO EUROPEO</span>
              <p className="text-xs font-light text-[#F3F2EF]/90">Audi Q5 Sportback: unidades con configuración y mantenimiento oficial en origen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
