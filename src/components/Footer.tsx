import React, { useState } from "react";
import { LegalModal } from "./LegalModal";

interface FooterProps {
  onNavigate?: (route: string) => void;
  onOpenLeadForm?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLeadForm,
}) => {
  const [modalType, setModalType] = useState<"legal" | "privacy" | "cookies" | null>(null);

  const openLegal = (type: "legal" | "privacy" | "cookies") => {
    if (onNavigate) {
      onNavigate(`/${type === "legal" ? "aviso-legal" : type}`);
    } else {
      setModalType(type);
    }
  };

  const handleNav = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <>
      <footer
        id="main-footer"
        className="py-16 bg-[#070707] text-[#F3F2EF]/70 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
            {/* Col 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col items-start leading-none select-none">
                <span className="font-display tracking-[0.24em] text-lg font-bold uppercase text-[#F3F2EF]">
                  CÉSPEDES <span className="text-[#F3F2EF]/60">AUTOMOTRIZ</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#F3F2EF]/40 uppercase mt-1">
                  PERSONAL CAR SHOPPER · IMPORTACIÓN ALEMANIA
                </span>
              </div>

              <p className="text-xs text-[#F3F2EF]/60 font-light leading-relaxed max-w-sm">
                Investigación, auditoría y acompañamiento profesional para la adquisición e importación de vehículos desde Alemania hacia España. Criterio técnico independiente y presupuesto cerrado.
              </p>
            </div>

            {/* Col 3: Servicios & Proceso */}
            <div className="space-y-3">
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#F3F2EF]">
                SERVICIOS
              </p>
              <ul className="space-y-2 text-xs text-[#F3F2EF]/60 font-light">
                <li>
                  <button
                    onClick={() => handleNav("/servicio")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Personal Car Shopper
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("/proceso")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Cómo funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("/importacion")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Guía de Importación
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("/vehiculos")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Ejemplos de Vehículos
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Empresa & Ayuda */}
            <div className="space-y-3">
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#F3F2EF]">
                CÉSPEDES
              </p>
              <ul className="space-y-2 text-xs text-[#F3F2EF]/60 font-light">
                <li>
                  <button
                    onClick={() => handleNav("/nosotros")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Sobre Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNav("/contacto")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Contacto y Horarios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (onOpenLeadForm) {
                        onOpenLeadForm();
                      } else {
                        handleNav("/");
                      }
                    }}
                    className="hover:text-[#C8102E] transition-colors cursor-pointer text-left font-medium"
                  >
                    Quiero Buscar Mi Coche
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 5: Legal */}
            <div className="space-y-3">
              <p className="font-display text-xs font-bold tracking-[0.2em] uppercase text-[#F3F2EF]">
                LEGAL
              </p>
              <ul className="space-y-2 text-xs text-[#F3F2EF]/60 font-light">
                <li>
                  <button
                    onClick={() => openLegal("legal")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Aviso Legal
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openLegal("privacy")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Política de Privacidad
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openLegal("cookies")}
                    className="hover:text-[#F3F2EF] transition-colors cursor-pointer text-left"
                  >
                    Política de Cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Mandatory Disclaimer Note */}
          <div className="pt-6 border-t border-white/10 text-[11px] text-[#F3F2EF]/40 font-light leading-relaxed mb-6">
            <p>
              * Aviso legal de servicio: Los costes finales dependen del vehículo, impuestos, transporte y circunstancias concretas de cada operación. Las cifras mostradas en la web o comunicaciones previas son estimaciones y el presupuesto vinculante se emite tras el análisis técnico y documental específico de cada unidad.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3F2EF]/40 font-light">
            <p>© {new Date().getFullYear()} CÉSPEDES AUTOMOTRIZ. Todos los derechos reservados.</p>
            <p className="font-mono text-[10px] tracking-wider text-[#F3F2EF]/30">
              ALEMANIA ➔ ESPAÑA · PERSONAL CAR SHOPPER
            </p>
          </div>
        </div>
      </footer>

      {/* Modal fallback */}
      <LegalModal
        isOpen={modalType !== null}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </>
  );
};
