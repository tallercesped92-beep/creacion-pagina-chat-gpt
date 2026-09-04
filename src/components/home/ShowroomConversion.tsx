import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import bmwM4Image from "../../assets/images/bmw_m4_darkness_1788475162547.jpg";
import { submitLeadToSupabase } from "../../lib/supabase";

export const ShowroomConversion: React.FC = () => {
  const [formData, setFormData] = useState({
    vehicleModel: "",
    budget: "",
    fullName: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{
    vehicleModel?: string;
    fullName?: string;
    phone?: string;
    submit?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const newErrors: {
      vehicleModel?: string;
      fullName?: string;
      phone?: string;
    } = {};

    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = "Indícanos qué coche o modelo buscas.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Introduce tu nombre.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Introduce tu número de teléfono.";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Introduce un teléfono de contacto válido.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLeadToSupabase({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        vehicleModel: formData.vehicleModel.trim(),
        budget: formData.budget.trim() || undefined,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrors({
          submit: result.error || "No se pudo registrar la solicitud. Inténtalo de nuevo.",
        });
      }
    } catch {
      setErrors({
        submit: "Error al enviar la búsqueda. Por favor, inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="conversion"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#0A0A0A] text-[#F3F2EF] border-b border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={bmwM4Image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-35"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          {isSubmitted ? (
            <div className="py-8 sm:py-12">
              <div className="w-10 h-[2px] bg-[#C8102E] mb-8" />
              <h3 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-4">
                BÚSQUEDA RECIBIDA
              </h3>
              <p className="text-base sm:text-xl text-[#F3F2EF]/80 font-light leading-relaxed">
                Nos ponemos con ella.
              </p>
            </div>
          ) : (
            <>
              <div className="w-10 h-[2px] bg-[#C8102E] mb-8" />

              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.06] text-[#F3F2EF] mb-8 sm:mb-10">
                ¿QUÉ COCHE
                <br />
                <span className="text-[#C8102E]">ESTÁS BUSCANDO?</span>
              </h2>

              <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* 1. COCHE / MODELO */}
                  <div>
                    <label
                      htmlFor="lead-vehicle-model"
                      className="block text-[11px] sm:text-xs font-mono tracking-widest text-[#F3F2EF]/70 uppercase mb-2"
                    >
                      COCHE / MODELO
                    </label>
                    <input
                      id="lead-vehicle-model"
                      type="text"
                      value={formData.vehicleModel}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({ ...prev, vehicleModel: val }));
                        if (errors.vehicleModel) {
                          setErrors((prev) => ({ ...prev, vehicleModel: undefined }));
                        }
                      }}
                      placeholder="Ej. BMW M4, Audi RS3, Golf GTI…"
                      className={`w-full px-4 py-3.5 sm:py-4 bg-[#121212]/90 backdrop-blur-sm border text-[#F3F2EF] placeholder:text-[#F3F2EF]/30 text-base font-sans transition-colors focus:outline-none focus:ring-1 ${
                        errors.vehicleModel
                          ? "border-[#C8102E] focus:border-[#C8102E] focus:ring-[#C8102E]"
                          : "border-white/15 focus:border-[#C8102E] focus:ring-[#C8102E]"
                      }`}
                    />
                    {errors.vehicleModel && (
                      <p className="text-xs text-[#C8102E] font-mono mt-1.5">
                        {errors.vehicleModel}
                      </p>
                    )}
                  </div>

                  {/* 2. PRESUPUESTO */}
                  <div>
                    <label
                      htmlFor="lead-budget"
                      className="block text-[11px] sm:text-xs font-mono tracking-widest text-[#F3F2EF]/70 uppercase mb-2"
                    >
                      PRESUPUESTO
                    </label>
                    <input
                      id="lead-budget"
                      type="text"
                      value={formData.budget}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({ ...prev, budget: val }));
                      }}
                      placeholder="Ej. 30.000 €"
                      className="w-full px-4 py-3.5 sm:py-4 bg-[#121212]/90 backdrop-blur-sm border border-white/15 text-[#F3F2EF] placeholder:text-[#F3F2EF]/30 text-base font-sans transition-colors focus:border-[#C8102E] focus:outline-none focus:ring-1 focus:ring-[#C8102E]"
                    />
                  </div>

                  {/* 3. NOMBRE */}
                  <div>
                    <label
                      htmlFor="lead-fullname"
                      className="block text-[11px] sm:text-xs font-mono tracking-widest text-[#F3F2EF]/70 uppercase mb-2"
                    >
                      NOMBRE
                    </label>
                    <input
                      id="lead-fullname"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({ ...prev, fullName: val }));
                        if (errors.fullName) {
                          setErrors((prev) => ({ ...prev, fullName: undefined }));
                        }
                      }}
                      placeholder="Tu nombre"
                      className={`w-full px-4 py-3.5 sm:py-4 bg-[#121212]/90 backdrop-blur-sm border text-[#F3F2EF] placeholder:text-[#F3F2EF]/30 text-base font-sans transition-colors focus:outline-none focus:ring-1 ${
                        errors.fullName
                          ? "border-[#C8102E] focus:border-[#C8102E] focus:ring-[#C8102E]"
                          : "border-white/15 focus:border-[#C8102E] focus:ring-[#C8102E]"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-[#C8102E] font-mono mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* 4. TELÉFONO */}
                  <div>
                    <label
                      htmlFor="lead-phone"
                      className="block text-[11px] sm:text-xs font-mono tracking-widest text-[#F3F2EF]/70 uppercase mb-2"
                    >
                      TELÉFONO
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData((prev) => ({ ...prev, phone: val }));
                        if (errors.phone) {
                          setErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      placeholder="600 000 000"
                      className={`w-full px-4 py-3.5 sm:py-4 bg-[#121212]/90 backdrop-blur-sm border text-[#F3F2EF] placeholder:text-[#F3F2EF]/30 text-base font-sans transition-colors focus:outline-none focus:ring-1 ${
                        errors.phone
                          ? "border-[#C8102E] focus:border-[#C8102E] focus:ring-[#C8102E]"
                          : "border-white/15 focus:border-[#C8102E] focus:ring-[#C8102E]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#C8102E] font-mono mt-1.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {errors.submit && (
                  <p className="text-xs text-[#C8102E] font-mono">{errors.submit}</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 sm:px-11 py-4 sm:py-4.5 bg-[#C8102E] hover:bg-[#A50C25] disabled:opacity-60 text-[#FAF9F6] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 shadow-xl shadow-[#C8102E]/25 inline-flex items-center justify-center cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <span>{isSubmitting ? "ENVIANDO..." : "ENVIAR MI BÚSQUEDA"}</span>
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
