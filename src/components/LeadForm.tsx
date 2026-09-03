import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { LeadFormData, FormErrors } from "../types";
import { submitLeadToSupabase } from "../lib/supabase";
import { LegalModal } from "./LegalModal";
import { MagneticCTA } from "./MagneticCTA";
import { getWhatsAppUrl } from "../lib/whatsapp";

interface LeadFormProps {
  prefilledVehicle?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ prefilledVehicle }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    vehicleModel: prefilledVehicle || "",
    budget: "",
    minYear: "",
    maxKm: "",
    fuel: "Indiferente",
    transmission: "Automático",
    preferences: "",
    comments: "",
  });

  React.useEffect(() => {
    if (prefilledVehicle) {
      setFormData((prev) => ({
        ...prev,
        vehicleModel: prefilledVehicle,
      }));
    }
  }, [prefilledVehicle]);

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const carDescription =
      formData.brand.trim() || formData.model.trim() || formData.vehicleModel.trim();

    if (!carDescription) {
      newErrors.vehicleModel = "Por favor, indícanos qué coche o modelo buscas.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Por favor, introduce tu nombre.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Introduce un número de WhatsApp o teléfono.";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Introduce un número de contacto válido.";
    }

    if (!privacyAccepted) {
      newErrors.privacyAccepted =
        "Debes aceptar la Política de Privacidad para tramitar tu solicitud.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const consolidatedVehicle =
      formData.brand.trim() && formData.model.trim()
        ? `${formData.brand.trim()} ${formData.model.trim()}`
        : formData.vehicleModel.trim() || `${formData.brand.trim()} ${formData.model.trim()}`.trim();

    const payload: LeadFormData = {
      ...formData,
      vehicleModel: consolidatedVehicle,
    };

    try {
      const response = await submitLeadToSupabase(payload);
      if (response.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(
          response.error || "No se pudo registrar la solicitud en Supabase."
        );
      }
    } catch (error: any) {
      console.error("Error al registrar la solicitud:", error);
      setSubmitError(
        error?.message || "Error inesperado al conectar con el servidor."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const next = { ...prev, [name]: value };
      if (name === "brand" || name === "model") {
        next.vehicleModel = `${next.brand} ${next.model}`.trim();
      }
      return next;
    });

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errors.vehicleModel && (name === "brand" || name === "model" || name === "vehicleModel")) {
      setErrors((prev) => ({ ...prev, vehicleModel: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      brand: "",
      model: "",
      vehicleModel: "",
      budget: "",
      minYear: "",
      maxKm: "",
      fuel: "Indiferente",
      transmission: "Automático",
      preferences: "",
      comments: "",
    });
    setPrivacyAccepted(false);
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  const trustPoints = [
    "Búsqueda personalizada y análisis previo sin coste",
    "Verificación técnica presencial y diagnosis en origen",
    "Presupuesto cerrado sin costes ocultos",
    "Financiación disponible mediante empresa colaboradora",
  ];

  return (
    <section
      id="formulario"
      className="py-24 sm:py-32 bg-[#0A0A0A] text-white relative border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Tag */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-xs font-bold tracking-[0.25em] text-[#C8102E] uppercase font-display">
            07 / SOLICITUD DE BÚSQUEDA
          </span>
          <div className="h-[1px] w-8 bg-white/20" />
        </div>

        {/* Section Titles */}
        <div className="mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase leading-[1.08] text-white mb-4">
            ¿QUÉ COCHE ESTÁS BUSCANDO?
          </h2>
          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
            Cuéntanos qué necesitas. Analizamos el mercado alemán y te orientamos sobre disponibilidad real, unidades destacadas y presupuesto total antes de dar cualquier paso.
          </p>
        </div>

        {/* ¿QUÉ RECIBES EN ESTA PRIMERA VALORACIÓN? - 3 Pasos Visuales */}
        <div className="mb-12 p-6 sm:p-8 bg-white/[0.03] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C8102E] via-[#C8102E]/40 to-transparent" />

          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
            <h3 className="font-display text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white flex items-center">
              <Sparkles className="w-4 h-4 text-[#C8102E] mr-2" />
              ¿QUÉ RECIBES EN ESTA PRIMERA VALORACIÓN?
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8102E]">
              ANÁLISIS INICIAL 100% GRATUITO
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-xs text-[#C8102E] tracking-widest">
                  01
                </span>
                <span className="font-display font-bold text-xs tracking-wider uppercase text-white">
                  ANALIZAMOS TU BÚSQUEDA
                </span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Evaluamos el modelo, presupuesto, kilometraje, año y preferencias que nos has indicado.
              </p>
            </div>

            {/* 02 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-xs text-[#C8102E] tracking-widest">
                  02
                </span>
                <span className="font-display font-bold text-xs tracking-wider uppercase text-white">
                  ESTUDIAMOS EL MERCADO
                </span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Buscamos qué opciones existen realmente en Alemania y cuáles encajan con tus criterios.
              </p>
            </div>

            {/* 03 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="font-display font-bold text-xs text-[#C8102E] tracking-widest">
                  03
                </span>
                <span className="font-display font-bold text-xs tracking-wider uppercase text-white">
                  TE DECIMOS SI TIENE SENTIDO
                </span>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Te orientamos sobre disponibilidad, unidades interesantes y viabilidad de la operación antes de avanzar.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-white/60 font-light">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mr-2 flex-shrink-0" />
            <span className="font-medium text-white/90">
              La primera valoración es gratuita y no te obliga a contratar el servicio.
            </span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* Confirmación de éxito exacta */
            <motion.div
              key="submitted-state"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="py-14 px-8 sm:px-12 bg-white/[0.04] border border-[#C8102E]/40 flex flex-col items-center text-center shadow-2xl relative"
            >
              <div className="w-16 h-16 rounded-full bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center text-[#C8102E] mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3">
                Gracias. Hemos recibido tu solicitud.
              </h3>

              <p className="text-white/80 text-base sm:text-lg max-w-lg mb-8 leading-relaxed font-light">
                Nos pondremos en contacto contigo para conocer exactamente qué estás buscando y estudiar las mejores unidades disponibles en el mercado alemán.
              </p>

              <div className="pt-6 pb-8 border-t border-white/10 w-full max-w-md">
                <p className="font-display text-sm font-bold tracking-[0.2em] uppercase text-white mb-1">
                  CÉSPEDES <span className="text-[#C8102E]">AUTOMOTRIZ</span>
                </p>
                <p className="text-xs text-white/50 font-normal">
                  Personal Car Shopper · Investigación e Importación Alemania
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={getWhatsAppUrl("Hola, acabo de enviar la solicitud de búsqueda en la web y me gustaría adelantar detalles por WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#A50C25] text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors flex items-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>ESCRIBIR POR WHATSAPP</span>
                </a>

                <button
                  type="button"
                  id="reset-search-button"
                  onClick={handleReset}
                  className="px-6 py-3.5 border border-white/30 hover:border-white text-white text-xs font-bold tracking-[0.16em] uppercase transition-colors cursor-pointer"
                >
                  ENVIAR OTRA CONSULTA
                </button>
              </div>
            </motion.div>
          ) : (
            /* Main Form */
            <motion.form
              key="form-fields"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleFormSubmit}
              noValidate
              className="space-y-8"
            >
              {/* BLOQUE 1: DATOS DEL VEHÍCULO */}
              <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 space-y-6">
                <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                  <span className="text-xs font-bold font-display tracking-[0.2em] text-[#C8102E] uppercase">
                    PARTE 1 / EL VEHÍCULO QUE BUSCAS
                  </span>
                  <span className="text-[11px] text-white/40 font-mono">CRITERIOS PRINCIPALES</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Marca */}
                  <div>
                    <label
                      htmlFor="brand"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      MARCA <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="Ej. Audi, Porsche, BMW, Mercedes-Benz..."
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Modelo */}
                  <div>
                    <label
                      htmlFor="model"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      MODELO <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="Ej. RS6 Avant, 911 Carrera 4S, M3 Touring..."
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {errors.vehicleModel && (
                    <div className="md:col-span-2">
                      <p className="text-xs text-red-400 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                        {errors.vehicleModel}
                      </p>
                    </div>
                  )}

                  {/* Presupuesto */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      PRESUPUESTO ORIENTATIVO (€)
                    </label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Ej. 50.000 € - 70.000 €"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Año mínimo */}
                  <div>
                    <label
                      htmlFor="minYear"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      AÑO MÍNIMO
                    </label>
                    <input
                      type="text"
                      id="minYear"
                      name="minYear"
                      value={formData.minYear}
                      onChange={handleChange}
                      placeholder="Ej. 2021"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Kilometraje máximo */}
                  <div>
                    <label
                      htmlFor="maxKm"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      KILOMETRAJE MÁXIMO
                    </label>
                    <input
                      type="text"
                      id="maxKm"
                      name="maxKm"
                      value={formData.maxKm}
                      onChange={handleChange}
                      placeholder="Ej. 60.000 km"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Combustible */}
                  <div>
                    <label
                      htmlFor="fuel"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      COMBUSTIBLE
                    </label>
                    <select
                      id="fuel"
                      name="fuel"
                      value={formData.fuel}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#181818] border border-white/15 focus:border-[#C8102E] text-white text-sm transition-colors focus:outline-none"
                    >
                      <option value="Indiferente">Indiferente</option>
                      <option value="Gasolina">Gasolina</option>
                      <option value="Diésel">Diésel</option>
                      <option value="Híbrido">Híbrido (MHEV / PHEV)</option>
                      <option value="Eléctrico">Eléctrico</option>
                    </select>
                  </div>

                  {/* Cambio */}
                  <div>
                    <label
                      htmlFor="transmission"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      CAMBIO
                    </label>
                    <select
                      id="transmission"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#181818] border border-white/15 focus:border-[#C8102E] text-white text-sm transition-colors focus:outline-none"
                    >
                      <option value="Automático">Automático</option>
                      <option value="Manual">Manual</option>
                      <option value="Indiferente">Indiferente</option>
                    </select>
                  </div>

                  {/* Comentarios o equipamiento clave */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="comments"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      COMENTARIOS / EQUIPAMIENTO IMPRESCINDIBLE{" "}
                      <span className="text-white/40 font-normal lowercase">(opcional)</span>
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={3}
                      value={formData.comments}
                      onChange={handleChange}
                      placeholder="Equipamiento clave: techo panorámico, escape deportivo, frenos carbocerámicos, color exterior/interior, etc."
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* BLOQUE 2: DATOS DE CONTACTO */}
              <div className="p-6 sm:p-8 bg-[#141414] border border-white/10 space-y-6">
                <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                  <span className="text-xs font-bold font-display tracking-[0.2em] text-[#C8102E] uppercase">
                    PARTE 2 / TUS DATOS DE CONTACTO
                  </span>
                  <span className="text-[11px] text-white/40 font-mono">CONFIDENCIALIDAD TOTAL</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Nombre */}
                  <div className="md:col-span-2 sm:col-span-1">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      NOMBRE COMPLETO <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Tu nombre y apellidos"
                      className={`w-full px-4 py-3.5 bg-white/5 border ${
                        errors.fullName ? "border-red-500" : "border-white/15 focus:border-[#C8102E]"
                      } text-white placeholder-white/30 text-sm transition-colors focus:outline-none`}
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-xs text-red-400 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp / Teléfono */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      WHATSAPP / TELÉFONO <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className={`w-full px-4 py-3.5 bg-white/5 border ${
                        errors.phone ? "border-red-500" : "border-white/15 focus:border-[#C8102E]"
                      } text-white placeholder-white/30 text-sm transition-colors focus:outline-none`}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-xs text-red-400 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold tracking-[0.16em] uppercase text-white/90 mb-2 font-display"
                    >
                      CORREO ELECTRÓNICO <span className="text-white/40 font-normal lowercase">(opcional para enviarte el dossier)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-4 py-3.5 bg-white/5 border border-white/15 focus:border-[#C8102E] text-white placeholder-white/30 text-sm transition-colors focus:outline-none"
                    />
                  </div>

                  {/* Consentimiento Privacidad */}
                  <div className="md:col-span-2 pt-2">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={privacyAccepted}
                        onChange={(e) => {
                          setPrivacyAccepted(e.target.checked);
                          if (errors.privacyAccepted) {
                            setErrors((prev) => ({ ...prev, privacyAccepted: undefined }));
                          }
                        }}
                        className="mt-1 w-4 h-4 rounded-none border border-white/30 bg-white/5 text-[#C8102E] focus:ring-0 cursor-pointer accent-[#C8102E]"
                      />
                      <label
                        htmlFor="privacyAccepted"
                        className="text-xs text-white/70 font-light leading-relaxed cursor-pointer select-none"
                      >
                        He leído y acepto la{" "}
                        <button
                          type="button"
                          onClick={() => setPrivacyModalOpen(true)}
                          className="underline text-white hover:text-[#C8102E] font-normal transition-colors cursor-pointer inline"
                        >
                          Política de Privacidad
                        </button>{" "}
                        para tramitar mi solicitud y recibir el análisis de mercado de Céspedes Automotriz. <span className="text-[#C8102E]">*</span>
                      </label>
                    </div>
                    {errors.privacyAccepted && (
                      <p className="mt-2 text-xs text-red-400 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                        {errors.privacyAccepted}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Error */}
              {submitError && (
                <div className="p-4 bg-red-950/40 border border-red-500/40 text-white flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-400 mb-0.5">
                      Error al procesar la solicitud
                    </p>
                    <p className="text-xs text-white/80 font-light">{submitError}</p>
                  </div>
                </div>
              )}

              {/* Botón Principal y WhatsApp alternativo */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticCTA
                  id="lead-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-[#C8102E] hover:bg-[#A50C25] disabled:opacity-50 text-white text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer shadow-xl shadow-[#C8102E]/20 text-center flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      REGISTRANDO SOLICITUD...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span>QUIERO QUE BUSQUÉIS MI COCHE</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  )}
                </MagneticCTA>

                <a
                  href={getWhatsAppUrl("Hola Céspedes Automotriz, me gustaría consultar la búsqueda de un vehículo por WhatsApp directamente.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-bold tracking-[0.14em] uppercase transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-white/70" />
                  <span>PREFIERO HABLAR POR WHATSAPP</span>
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-2.5 text-xs text-white/60 font-light">
                    <ShieldCheck className="w-4 h-4 text-[#C8102E] flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Modal de Privacidad */}
        <LegalModal
          isOpen={privacyModalOpen}
          onClose={() => setPrivacyModalOpen(false)}
          type="privacy"
        />
      </div>
    </section>
  );
};
