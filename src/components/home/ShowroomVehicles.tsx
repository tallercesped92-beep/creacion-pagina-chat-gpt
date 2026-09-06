import React from "react";
import { ArrowRight } from "lucide-react";
import golfGtiImage from "../../assets/images/golf_gti_mk8_1787216834169.jpg";
import audiA3Image from "../../assets/images/audi_a3_tfsie_1788654058672.jpg";
import audiQ3Image from "../../assets/images/audi_q3_sline_1788654300856.jpg";
import bmw320dImage from "../../assets/images/bmw_320d_touring_1788654314865.jpg";

interface ShowroomVehiclesProps {
  onNavigateVehicles: () => void;
  onSelectVehicle?: (modelQuery: string) => void;
}

export const ShowroomVehicles: React.FC<ShowroomVehiclesProps> = ({
  onNavigateVehicles,
  onSelectVehicle,
}) => {
  const vehicles = [
    {
      id: "card-golf-gti",
      btnId: "btn-select-golf-gti",
      num: "01",
      role: "DIVERSIÓN & CARÁCTER",
      name: "VOLKSWAGEN GOLF GTI",
      line: "GTI · Performance · DSG",
      tech: "2.0 TSI · 245 CV · DSG 7v",
      image: golfGtiImage,
      alt: "Volkswagen Golf GTI Mk8 en rojo metalizado con frontal deportivo y calandra panal de abeja",
      query: "Volkswagen Golf GTI",
      highlights: [
        "Cambio automático DSG con levas deportivas en volante",
        "Digital Cockpit Pro con telemetría exclusiva GTI",
        "Diferencial autoblocante VAQ y suspensión adaptativa DCC",
        "Óptica delantera LED con perfil rojo característico",
      ],
    },
    {
      id: "card-audi-a3-tfsie",
      btnId: "btn-select-audi-a3",
      num: "02",
      role: "EFICIENCIA & TECNOLOGÍA",
      name: "AUDI A3 TFSI e",
      line: "S line · Plug-in Hybrid",
      tech: "TFSI e Híbrido Enchufable · Etiqueta CERO",
      image: audiA3Image,
      alt: "Audi A3 Sportback TFSI e híbrido enchufable en Gris Daytona con acabado S line y faros Matrix LED",
      query: "Audi A3 TFSI e",
      highlights: [
        "Propulsión híbrida enchufable con alta autonomía eléctrica",
        "Paquete deportivo S line exterior e interior con asientos deportivos",
        "Faros Matrix LED con firmas lumínicas dinámicas digitales",
        "Audi Virtual Cockpit Plus y sistema de navegación MMI Touch",
      ],
    },
    {
      id: "card-audi-q3-sline",
      btnId: "btn-select-audi-q3",
      num: "03",
      role: "SUV PREMIUM · ALTA DEMANDA",
      name: "AUDI Q3 S LINE",
      line: "35 TDI S line · S tronic",
      tech: "35 TDI · Cambio Automático S tronic",
      image: audiQ3Image,
      alt: "Audi Q3 SUV 35 TDI S line en Azul Navarra con parrilla Singleframe octogonal, llantas de 19 pulgadas y faros Matrix LED",
      query: "Audi Q3 S line",
      highlights: [
        "Paquete exterior S line con calandra Singleframe titanio y llantas 19\"",
        "Motor 35 TDI equilibrado con transmisión automática S tronic",
        "Faros Matrix LED con intermitentes dinámicos secuenciales",
        "Audi Virtual Cockpit, cámara de marcha atrás y Parking System Plus",
      ],
    },
    {
      id: "card-bmw-320d-touring",
      btnId: "btn-select-bmw-320d",
      num: "04",
      role: "FAMILIAR & PROFESIONAL",
      name: "BMW 320d TOURING M SPORT",
      line: "M Sport · Steptronic",
      tech: "2.0 TwinPower Turbo Diesel · Steptronic",
      image: bmw320dImage,
      alt: "BMW 320d Touring M Sport en Gris Skyscraper con paquete aerodinámico M, riñones en negro brillo y faros LED adaptativos",
      query: "BMW 320d Touring M Sport",
      highlights: [
        "Paquete aerodinámico M Sport y tren de rodaje deportivo M",
        "Transmisión automática Steptronic de 8 relaciones con levas",
        "BMW Live Cockpit Professional con pantalla curva de alta resolución",
        "Parking Assistant con cámara de visión trasera y sensores perimétricos",
      ],
    },
  ];

  return (
    <section
      id="showroom"
      className="py-24 sm:py-32 bg-[#F3F2EF] text-[#111111] border-b border-[#E5E2DA] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-5">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C8102E] uppercase">
              01 / SHOWROOM
            </span>
            <div className="h-[1px] w-8 bg-black/15" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08] text-[#111111] mb-5">
            LOS COCHES QUE PODEMOS
            <br />
            <span className="text-[#111111]">ENCONTRAR PARA TI.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#55524E] font-light leading-relaxed max-w-2xl">
            Una selección de modelos que buscamos habitualmente en el mercado alemán, configurados según lo que realmente buscan nuestros clientes.
          </p>
        </div>

        {/* 4 Vehicles Grid - Editorial Luxury Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 sm:mb-20">
          {vehicles.map((car) => (
            <article
              key={car.id}
              id={car.id}
              className="group bg-white border border-[#E5E2DA] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-[#111111]/30"
            >
              {/* 1. Photography */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE7E0]">
                <img
                  src={car.image}
                  alt={car.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.025] transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Editorial Content Container */}
              <div className="p-7 sm:p-9 lg:p-10 flex flex-col justify-between flex-1">
                <div>
                  {/* Top Bar: 2. Conceptual Category & 7. Subtle Editorial Number */}
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#C8102E] uppercase">
                      {car.role}
                    </span>
                    <span className="font-display text-xs font-medium text-[#8C867E] tracking-widest">
                      {car.num}
                    </span>
                  </div>

                  {/* 3. Vehicle Name */}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#111111] mb-2 leading-tight">
                    {car.name}
                  </h3>

                  {/* 4. Finish / Version */}
                  <p className="text-sm font-medium text-[#4A4640] tracking-wide mb-1">
                    {car.line}
                  </p>

                  {/* 5. Brief Powertrain Specification */}
                  <p className="text-xs text-[#7A756D] font-normal mb-6">
                    {car.tech}
                  </p>

                  {/* 6. Curated Key Features */}
                  <ul className="space-y-2.5 mb-8 pt-5 border-t border-[#EAE7E0] text-xs sm:text-[13px] text-[#4A4640] font-normal">
                    {car.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-1.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 7. Action CTA */}
                {onSelectVehicle && (
                  <button
                    id={car.btnId}
                    type="button"
                    onClick={() => onSelectVehicle(car.query)}
                    className="w-full py-4 px-5 bg-[#111111] hover:bg-[#C8102E] text-white text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-between group/btn shadow-sm"
                  >
                    <span>BUSCAR ESTE MODELO</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Footer Closing: Reference Note & Catalog CTA */}
        <div className="pt-10 sm:pt-12 border-t border-[#E2DFD7] flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8">
          <p className="text-sm sm:text-base text-[#2C2925] font-normal leading-relaxed max-w-md">
            Modelos de referencia que gestionamos habitualmente bajo demanda en concesionarios oficiales alemanes.
          </p>

          <button
            id="btn-showroom-ver-mas"
            type="button"
            onClick={onNavigateVehicles}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 sm:px-9 sm:py-4.5 bg-[#141414] hover:bg-[#C8102E] text-[#F3F2EF] hover:text-white text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(200,16,46,0.2)]"
          >
            <span>VER MÁS EJEMPLOS EN EL CATÁLOGO</span>
            <ArrowRight className="w-4 h-4 text-[#F3F2EF] group-hover:text-white transform group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};
