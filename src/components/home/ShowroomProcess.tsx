import React from "react";
import { ArrowRight } from "lucide-react";
import bmwM340iImage from "../../assets/images/bmw_m340i_1787232369357.jpg";

interface ShowroomProcessProps { onNavigateProcess: () => void; }

export const ShowroomProcess: React.FC<ShowroomProcessProps> = ({ onNavigateProcess }) => {
  const stages = [
    { num: "01", name: "BÚSQUEDA" }, { num: "02", name: "ANÁLISIS" }, { num: "03", name: "SELECCIÓN" }, { num: "04", name: "VERIFICACIÓN" }, { num: "05", name: "COMPRA & ENTREGA" },
  ];

  return (
    <section id="proceso-resumen" className="py-24 sm:py-32 bg-[#EAE8E2] text-[#0A0A0A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="w-10 h-[2px] bg-[#C8102E] mb-8" />
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#0A0A0A] mb-6">DE LA IDEA<br /><span className="text-[#C8102E]">A TU GARAJE.</span></h2>
          <p className="text-base sm:text-lg text-[#0A0A0A]/70 font-light leading-relaxed">Un método estructurado en 5 etapas para que importar desde Alemania sea un proceso predecible, transparente y sin riesgos.</p>
        </div>
        <div className="relative overflow-hidden mb-12 sm:mb-14 min-h-[170px] sm:min-h-[210px]">
          <img src={bmwM340iImage} alt="BMW M340i en el mercado europeo" className="absolute inset-0 w-full h-full object-cover" loading="lazy" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-[#0A0A0A]/55" /><div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-[#0A0A0A]/25 to-transparent" />
          <div className="relative z-10 min-h-[170px] sm:min-h-[210px] flex items-end p-6 sm:p-8"><div><span className="text-[10px] sm:text-xs font-mono tracking-[0.18em] uppercase text-[#F3F2EF]/60 block mb-2">UN PROCESO. UNA DECISIÓN.</span><p className="font-display text-xl sm:text-2xl md:text-3xl font-bold uppercase text-[#F3F2EF] max-w-xl leading-tight">Del mercado alemán a tu garaje, con cada paso bajo control.</p></div></div>
        </div>
        <div className="mb-14">
          <div className="relative flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-black/15 lg:hidden" />
            {stages.map((stage, index) => (
              <div key={stage.num} className={`${index === 4 ? "lg:col-span-4 lg:border-t-2 lg:border-[#C8102E] lg:pl-4" : "lg:col-span-2 lg:border-t lg:border-black/15"} relative flex items-center gap-5 py-5 lg:py-6 lg:items-end lg:flex-col lg:justify-between group border-b border-black/10 lg:border-b-0`}>
                <span className={`${index === 4 ? "text-[#C8102E]" : "text-black/20 group-hover:text-[#0A0A0A]"} relative z-10 bg-[#EAE8E2] font-display text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight block leading-none px-1 transition-colors`}>{stage.num}</span>
                <h3 className={`${index === 4 ? "text-sm sm:text-base lg:text-lg" : "text-xs sm:text-sm"} font-display font-bold uppercase tracking-wider text-[#0A0A0A]`}>{stage.name}</h3>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onNavigateProcess} className="group inline-flex items-center text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#0A0A0A] hover:text-[#C8102E] transition-colors cursor-pointer"><span>VER CÓMO FUNCIONA</span><ArrowRight className="w-4 h-4 ml-2.5 text-[#C8102E] transform group-hover:translate-x-1.5 transition-transform" /></button>
      </div>
    </section>
  );
};
