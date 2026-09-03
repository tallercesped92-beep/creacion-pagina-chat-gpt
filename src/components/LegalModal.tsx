import React from "react";
import { X, Shield } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "legal" | "privacy" | "cookies" | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  if (!isOpen || !type) return null;

  const contentMap = {
    legal: {
      title: "AVISO LEGAL",
      text: (
        <div className="space-y-4 text-sm text-[#111111]/80 leading-relaxed font-light">
          <p>
            <strong>1. Identificación y Actividad:</strong> En cumplimiento del deber de información, se informa que este sitio web es gestionado por <strong>CÉSPEDES AUTOMOTRIZ</strong> como actividad profesional de persona física con residencia en España. La actividad se centra en el asesoramiento, búsqueda personalizada, intermediación y gestión integral de compra e importación de vehículos procedentes de la Unión Europea, especialmente del mercado alemán.
          </p>
          <p>
            <strong>2. Condiciones de Uso:</strong> El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación plena de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado y lícito de los contenidos y formularios disponibles.
          </p>
          <p>
            <strong>3. Propiedad Intelectual e Industrial:</strong> Todos los contenidos del sitio web (diseño gráfico, logotipos, textos, composiciones, estructura y código fuente) son titularidad de CÉSPEDES AUTOMOTRIZ o de terceros que han autorizado su uso, quedando protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción o distribución sin autorización previa.
          </p>
          <p>
            <strong>4. Exclusión de Responsabilidad:</strong> CÉSPEDES AUTOMOTRIZ no se hace responsable de los posibles daños o perjuicios derivados de interferencias, omisiones, interrupciones, virus informáticos o averías telefónicas ajenas a su control, ni del uso indebido que terceros puedan realizar de la información publicada.
          </p>
          <p>
            <strong>5. Legislación Aplicable:</strong> Las relaciones entre el titular de la web y los usuarios se regirán por la normativa española vigente.
          </p>
        </div>
      ),
    },
    privacy: {
      title: "POLÍTICA DE PRIVACIDAD",
      text: (
        <div className="space-y-4 text-sm text-[#111111]/80 leading-relaxed font-light">
          <p>
            <strong>1. Responsable del Tratamiento:</strong> El responsable del tratamiento de los datos personales recabados a través de esta web es <strong>CÉSPEDES AUTOMOTRIZ</strong> (actividad profesional de persona física en España), garantizando el estricto cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD).
          </p>
          <p>
            <strong>2. Datos Recabados y Finalidad:</strong> A través del formulario de captación se solicitan datos identificativos y de contacto (nombre, teléfono/WhatsApp) así como los criterios del vehículo deseado (modelo, presupuesto aproximado y preferencias técnicas). La finalidad exclusiva es atender, analizar y responder a la solicitud de búsqueda de vehículo formulada por el interesado, contactando con él para evaluar las opciones disponibles en el mercado. No se utilizan los datos para el envío de publicidad masiva, newsletters ni comunicaciones comerciales no solicitadas.
          </p>
          <p>
            <strong>3. Base Jurídica:</strong> La legitimación para el tratamiento de los datos se fundamenta en el consentimiento explícito otorgado por el usuario al marcar la casilla de aceptación y enviar el formulario (art. 6.1.a RGPD), así como en la aplicación de medidas precontractuales a petición del propio interesado (art. 6.1.b RGPD).
          </p>
          <p>
            <strong>4. Conservación de los Datos:</strong> Los datos se conservarán durante el tiempo estrictamente necesario para gestionar y dar respuesta a la solicitud de búsqueda, o hasta que el interesado solicite su supresión o revoque el consentimiento prestado.
          </p>
          <p>
            <strong>5. Destinatarios y Cesiones:</strong> No se cederán datos a terceros salvo obligación legal expresa o servicios técnicos auxiliares de infraestructura web y base de datos imprescindibles para el funcionamiento del servicio. No se realizan transferencias internacionales con fines publicitarios.
          </p>
          <p>
            <strong>6. Derechos del Interesado:</strong> El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, oposición y portabilidad de sus datos dirigiéndose a CÉSPEDES AUTOMOTRIZ. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) a través de su sede electrónica en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="underline text-[#C8102E]">www.aepd.es</a> si considera vulnerados sus derechos.
          </p>
        </div>
      ),
    },
    cookies: {
      title: "POLÍTICA DE COOKIES",
      text: (
        <div className="space-y-4 text-sm text-[#111111]/80 leading-relaxed font-light">
          <p>
            <strong>1. Uso de Cookies Técnicas:</strong> Este sitio web utiliza exclusivamente almacenamiento local y cookies de carácter estrictamente técnico necesarias para posibilitar la navegación fluida, la correcta visualización de la interfaz y la seguridad en la gestión de sesiones administrativas.
          </p>
          <p>
            <strong>2. Ausencia de Cookies Publicitarias y de Rastreo:</strong> Este sitio web no instala cookies de publicidad comportamental, ni herramientas de seguimiento de terceros como Google Analytics, Meta Pixel, TikTok Pixel ni sistemas de remarketing. Al emplear únicamente tecnologías técnicas exceptuadas por el artículo 22.2 de la LSSI-CE, no se requiere la instalación de un banner de consentimiento publicitario.
          </p>
          <p>
            <strong>3. Gestión del Navegador:</strong> El usuario puede en todo momento configurar su navegador para bloquear o ser advertido de la instalación de cookies, si bien algunas funciones técnicas básicas del sitio podrían verse afectadas.
          </p>
        </div>
      ),
    },
  };

  const current = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F3F2EF] text-[#111111] border border-[#111111]/20 p-8 sm:p-10 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#111111]/15 mb-6">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-[#C8102E]" />
            <h3 className="font-display text-xl font-bold tracking-tight uppercase text-[#111111]">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-1 text-[#111111]/60 hover:text-[#111111] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Content */}
        <div className="max-h-[60vh] overflow-y-auto pr-2">
          {current.text}
        </div>

        {/* Footer Button */}
        <div className="mt-8 pt-6 border-t border-[#111111]/15 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#111111] hover:bg-[#C8102E] text-white text-xs font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer"
          >
            ENTENDIDO
          </button>
        </div>
      </div>
    </div>
  );
};
