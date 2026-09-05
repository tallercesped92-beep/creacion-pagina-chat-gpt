import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import audiRs6Image from "../assets/images/audi_rs6_hero_1787228419698.jpg";
import bmwM3Image from "../assets/images/bmw_m3_competition_1787228432881.jpg";
import audiQ5SportbackImage from "../assets/images/audi_q5_sportback_1787232355393.jpg";
import golfGtiImage from "../assets/images/golf_gti_mk8_1787216834169.jpg";
import bmwM340iImage from "../assets/images/bmw_m340i_1787232369357.jpg";
import bmwX1Image from "../assets/images/bmw_x1_1787232383364.jpg";

interface VehicleShowcaseProps {
  onSelectVehicle?: (modelName: string) => void;
}

export const VehicleShowcase: React.FC<VehicleShowcaseProps> = ({
  onSelectVehicle,
}) => {
  const handleSelect = (model: string) => {
    if (onSelectVehicle) {
      onSelectVehicle(model);
    }
  };

  return (
    <section id="showroom-editorial" className="space-y-12 sm:space-y-16">
      {/* ===================================================================
          PIEZA 01: GRAN PROTAGONISTA EDITORIAL (AUDI RS6 AVANT)
         =================================================================== */}
      <motion.article
        id="showroom-pieza-01"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Fotografía Protagonista en Gran Formato */}
          <div className="lg:col-span-7 relative overflow-hidden bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <img
              src={audiRs6Image}
              alt="Audi RS6 Avant en gris Daytona con elementos en negro brillante en entorno arquitectónico"
              className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Badge de Origen y Estatus */}
            <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
              CONCESIONARIOS AUDI PLUS · ALEMANIA
            </div>

            {/* Numeral de Gran Escala */}
            <div className="absolute bottom-4 right-6 font-display text-5xl sm:text-6xl font-bold text-white/30 select-none leading-none">
              01
            </div>

            <div className="absolute bottom-4 left-4 hidden sm:block">
              <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                “El familiar de altas prestaciones por excelencia”
              </span>
            </div>
          </div>

          {/* Ficha Editorial y Técnica */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E5E3DC]">
            <div>
              {/* Encabezado Editorial */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                    01 / PERFORMANCE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                  ESTATE
                </span>
              </div>

              {/* Título de Modelo */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-2 leading-tight">
                AUDI RS6 AVANT
              </h2>

              {/* Especificaciones Clave */}
              <div className="inline-block mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#C8102E] tracking-wide">
                  4.0 V8 TFSI · 600 CV · QUATTRO
                </span>
              </div>

              {/* Rationale Comercial */}
              <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6">
                La referencia indiscutible del familiar de altas prestaciones. El mercado alemán concentra el mayor parque móvil con historiales oficiales completos, escape deportivo RS y configuraciones exclusivas.
              </p>

              {/* Atributos Destacados */}
              <div className="space-y-2.5 pt-4 border-t border-[#E5E3DC] mb-6 text-xs font-mono text-[#111111]/80">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Historial oficial Audi Plus verificado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Configuraciones con frenos carbocerámicos y DRC</span>
                </div>
              </div>
            </div>

            {/* Botón de Acción */}
            <button
              id="btn-buscar-audi-rs6"
              onClick={() => handleSelect("Audi RS6 Avant")}
              className="w-full py-4 px-6 bg-[#111111] hover:bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 shadow-sm group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.article>

      {/* ===================================================================
          PIEZA 02: COMPOSICIÓN INVERTIDA (BMW M3 COMPETITION TOURING)
         =================================================================== */}
      <motion.article
        id="showroom-pieza-02"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Ficha Editorial y Técnica (Izquierda en Desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#E5E3DC]">
            <div>
              {/* Encabezado Editorial */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                    02 / PERFORMANCE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                  TOURING / SALOON
                </span>
              </div>

              {/* Título de Modelo */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-2 leading-tight">
                BMW M3 COMPETITION TOURING
              </h2>

              {/* Especificaciones Clave */}
              <div className="inline-block mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#C8102E] tracking-wide">
                  3.0 TWINPOWER TURBO · 510 CV · M xDRIVE
                </span>
              </div>

              {/* Rationale Comercial */}
              <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6">
                La conjunción definitiva entre precisión de circuito y usabilidad diaria. En Alemania localizamos unidades con paquete M Driver, baquets de fibra de carbono M Carbon y pinturas de catálogo BMW Individual.
              </p>

              {/* Atributos Destacados */}
              <div className="space-y-2.5 pt-4 border-t border-[#E5E3DC] mb-6 text-xs font-mono text-[#111111]/80">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Tracción total M xDrive desconectable a propulsión</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Unidades certificadas en concesiones oficiales BMW</span>
                </div>
              </div>
            </div>

            {/* Botón de Acción */}
            <button
              id="btn-buscar-bmw-m3"
              onClick={() => handleSelect("BMW M3 Competition")}
              className="w-full py-4 px-6 bg-[#111111] hover:bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 shadow-sm group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Fotografía Protagonista (Derecha en Desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative overflow-hidden bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <img
              src={bmwM3Image}
              alt="BMW M3 Competition Touring en color verde oscuro metalizado en carretera alpina europea"
              className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-4 right-4 bg-[#111111]/90 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
              RED CONCESIONARIOS OFICIALES BMW · ALEMANIA
            </div>

            <div className="absolute bottom-4 left-6 font-display text-5xl sm:text-6xl font-bold text-white/30 select-none leading-none">
              02
            </div>

            <div className="absolute bottom-4 right-4 hidden sm:block">
              <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                “Dinamismo M con versatilidad familiar”
              </span>
            </div>
          </div>
        </div>
      </motion.article>

      {/* ===================================================================
          PIEZA 03: ASIMÉTRICA SUV PREMIUM (AUDI Q5 SPORTBACK)
         =================================================================== */}
      <motion.article
        id="showroom-pieza-03"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Fotografía */}
          <div className="lg:col-span-7 relative overflow-hidden bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[440px]">
            <img
              src={audiQ5SportbackImage}
              alt="Audi Q5 Sportback con silueta coupé deportiva y pilotos OLED en plaza moderna"
              className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
              GAMA SUV COUPÉ PREMIUM
            </div>

            <div className="absolute bottom-4 right-6 font-display text-5xl sm:text-6xl font-bold text-white/30 select-none leading-none">
              03
            </div>
          </div>

          {/* Ficha Editorial */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#E5E3DC]">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                    03 / PREMIUM SUV
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                  COUPÉ / ALLROAD
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-2 leading-tight">
                AUDI Q5 SPORTBACK
              </h2>

              <div className="inline-block mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#C8102E] tracking-wide">
                  2.0 TDI / TFSIe · S LINE · QUATTRO
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6">
                Elegancia coupé con versatilidad todocamino. Alemania concentra una rotación constante de unidades con paquete S line completo, suspensión neumática adaptativa, pilotos digitales OLED y kilometraje certificado.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5E3DC] mb-6 text-xs font-mono text-[#111111]/80">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Opciones diésel microhíbridas o híbridas enchufables con etiqueta Cero</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Paquetes de asistentes Tour y faros Matrix LED</span>
                </div>
              </div>
            </div>

            <button
              id="btn-buscar-audi-q5"
              onClick={() => handleSelect("Audi Q5 Sportback")}
              className="w-full py-4 px-6 bg-[#111111] hover:bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 shadow-sm group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.article>

      {/* ===================================================================
          PIEZA 04: COMPACT PERFORMANCE SPOTLIGHT (VOLKSWAGEN GOLF GTI MK8)
         =================================================================== */}
      <motion.article
        id="showroom-pieza-04"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Ficha Editorial (Izquierda en Desktop para alternar ritmo) */}
          <div className="order-2 lg:order-1 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#E5E3DC]">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                  <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                    04 / COMPACT PERFORMANCE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2.5 py-1 border border-[#E5E3DC]">
                  HOT HATCH
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-[#111111] mb-2 leading-tight">
                VOLKSWAGEN GOLF GTI MK8
              </h2>

              <div className="inline-block mb-4">
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#C8102E] tracking-wide">
                  2.0 TSI · 245 CV · TRACCIÓN DELANTERA
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#111111]/75 font-light leading-relaxed mb-6">
                El compacto deportivo por excelencia. Accesible, icónico y con una oferta inagotable en el mercado alemán: unidades con llantas Adelaide de 19", escape Akrapovic, tapicería tartán clásica o asientos en cuero Vienna y paquete Clubsport.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#E5E3DC] mb-6 text-xs font-mono text-[#111111]/80">
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Gran disponibilidad de configuraciones oficiales en Alemania</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-3.5 h-3.5 text-[#C8102E] flex-shrink-0" />
                  <span>Diferencial autoblocante VAQ y suspensión adaptativa DCC</span>
                </div>
              </div>
            </div>

            <button
              id="btn-buscar-golf-gti"
              onClick={() => handleSelect("Volkswagen Golf GTI")}
              className="w-full py-4 px-6 bg-[#111111] hover:bg-[#C8102E] text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-3 shadow-sm group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Fotografía */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative overflow-hidden bg-[#0A0A0A] aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[440px]">
            <img
              src={golfGtiImage}
              alt="Volkswagen Golf GTI Mk8 en rojo metalizado con frontal característico y línea roja horizontal"
              className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            <div className="absolute top-4 right-4 bg-[#111111]/90 backdrop-blur-sm px-3.5 py-1.5 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase shadow-sm">
              ALTA DISPONIBILIDAD · RED ALEMANA
            </div>

            <div className="absolute bottom-4 left-6 font-display text-5xl sm:text-6xl font-bold text-white/30 select-none leading-none">
              04
            </div>

            <div className="absolute bottom-4 right-4 hidden sm:block">
              <span className="text-[11px] font-mono text-white/90 bg-black/50 px-2.5 py-1 backdrop-blur-sm border border-white/10">
                “El mito deportivo en su versión más avanzada”
              </span>
            </div>
          </div>
        </div>
      </motion.article>

      {/* ===================================================================
          PIEZAS 05 & 06: DÍPTICO EDITORIAL COMPLEMENTARIO
         =================================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* PIEZA 05: BMW M340i xDRIVE */}
        <motion.article
          id="showroom-pieza-05"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
        >
          <div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
              <img
                src={bmwM340iImage}
                alt="BMW M340i xDrive Berlina con calandra deportiva M y pinzas de freno azules"
                className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3 py-1 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase">
                BERLINA DEPORTIVA 6 CILINDROS
              </div>

              <div className="absolute bottom-3 right-4 font-display text-4xl font-bold text-white/30 select-none leading-none">
                05
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                  05 / SPORTS SALOON
                </span>
                <span className="text-[10px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E3DC]">
                  6 CILINDROS B58
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111] mb-1.5">
                BMW M340i xDRIVE
              </h2>

              <p className="font-mono text-xs font-semibold text-[#C8102E] mb-3">
                3.0 TWINPOWER TURBO · 374 CV · xDRIVE
              </p>

              <p className="text-xs sm:text-sm text-[#111111]/75 font-light leading-relaxed mb-6">
                El equilibrio definitivo entre prestaciones y discreción. El mítico motor B58 de 6 cilindros en línea, tracción integral y chasis afinado por BMW M para devorar distancias sin fatiga.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-0">
            <button
              id="btn-buscar-bmw-m340i"
              onClick={() => handleSelect("BMW M340i")}
              className="w-full py-3.5 px-5 bg-[#111111] hover:bg-[#C8102E] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.article>

        {/* PIEZA 06: BMW X1 xDRIVE */}
        <motion.article
          id="showroom-pieza-06"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="bg-white border border-[#E5E3DC] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-[#C8102E]/40 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
        >
          <div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
              <img
                src={bmwX1Image}
                alt="BMW X1 xDrive con paquete M Sport y óptica LED moderna en paisaje contemporáneo"
                className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out brightness-[0.98] contrast-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm px-3 py-1 border border-white/20 text-[10px] font-mono font-bold tracking-widest text-white uppercase">
                SUV COMPACTO VERSÁTIL
              </div>

              <div className="absolute bottom-3 right-4 font-display text-4xl font-bold text-white/30 select-none leading-none">
                06
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E3DC]">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C8102E] uppercase">
                  06 / COMPACT SUV
                </span>
                <span className="text-[10px] font-mono text-[#111111]/60 uppercase bg-[#FAF9F6] px-2 py-0.5 border border-[#E5E3DC]">
                  PAQUETE M SPORT
                </span>
              </div>

              <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-[#111111] mb-1.5">
                BMW X1 xDRIVE
              </h2>

              <p className="font-mono text-xs font-semibold text-[#C8102E] mb-3">
                20d / 23i M SPORT · TRACCIÓN TOTAL
              </p>

              <p className="text-xs sm:text-sm text-[#111111]/75 font-light leading-relaxed mb-6">
                El SUV compacto más versátil para el día a día y viajes familiares. En concesionarios oficiales alemanes encontramos configuraciones completas con paquete M Sport, techo panorámico y BMW Live Cockpit.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8 pt-0">
            <button
              id="btn-buscar-bmw-x1"
              onClick={() => handleSelect("BMW X1")}
              className="w-full py-3.5 px-5 bg-[#111111] hover:bg-[#C8102E] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 group/btn"
            >
              <span>BUSCAR ESTE MODELO</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

