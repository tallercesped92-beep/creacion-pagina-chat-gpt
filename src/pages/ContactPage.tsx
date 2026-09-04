import React from "react";
import { LeadForm } from "../components/LeadForm";

interface ContactPageProps {
  onCtaClick?: () => void;
  prefilledVehicle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledVehicle }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#0A0A0A] text-[#F3F2EF] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Cabecera sencilla */}
        <div className="mb-10 sm:mb-12">
          <div className="w-10 h-[2px] bg-[#C8102E] mb-6" />

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-4">
            ¿QUÉ COCHE
            <br />
            <span className="text-[#C8102E]">ESTÁS BUSCANDO?</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F3F2EF]/80 font-light leading-relaxed">
            Cuéntanos qué coche buscas y nos encargamos de localizarlo en Alemania.
          </p>
        </div>

        {/* LeadForm existente */}
        <div>
          <LeadForm prefilledVehicle={prefilledVehicle} />
        </div>
      </div>
    </div>
  );
};

