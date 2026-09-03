import React from "react";
import { ArrowLeft, Shield } from "lucide-react";

export type LegalDocType = "privacy" | "legal" | "cookies";

interface LegalPageProps {
  type: LegalDocType;
  onNavigateBack: () => void;
  onSelectDoc: (type: LegalDocType) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  type,
  onNavigateBack,
  onSelectDoc,
}) => {
  return (
    <div className="pt-28 pb-24 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <button
          onClick={onNavigateBack}
          className="inline-flex items-center text-xs font-mono tracking-widest text-[#C8102E] hover:text-white uppercase mb-8 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>VOLVER A LA PÁGINA PRINCIPAL</span>
        </button>

        {/* Tab switcher */}
        <div className="flex border-b border-white/10 mb-10 space-x-2 sm:space-x-6 overflow-x-auto">
          <button
            onClick={() => onSelectDoc("privacy")}
            className={`pb-4 text-xs font-bold font-display uppercase tracking-[0.16em] transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
              type === "privacy"
                ? "border-[#C8102E] text-white"
                : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            POLÍTICA DE PRIVACIDAD
          </button>
          <button
            onClick={() => onSelectDoc("legal")}
            className={`pb-4 text-xs font-bold font-display uppercase tracking-[0.16em] transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
              type === "legal"
                ? "border-[#C8102E] text-white"
                : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            AVISO LEGAL
          </button>
          <button
            onClick={() => onSelectDoc("cookies")}
            className={`pb-4 text-xs font-bold font-display uppercase tracking-[0.16em] transition-colors cursor-pointer border-b-2 whitespace-nowrap ${
              type === "cookies"
                ? "border-[#C8102E] text-white"
                : "border-transparent text-white/40 hover:text-white"
            }`}
          >
            POLÍTICA DE COOKIES
          </button>
        </div>

        {/* Content based on type */}
        {type === "privacy" && (
          <div className="prose prose-invert max-w-none text-white/75 text-sm sm:text-base leading-relaxed space-y-6 font-light">
            <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              POLÍTICA DE PRIVACIDAD
            </h1>
            <p className="text-xs font-mono text-white/40">
              Última actualización: Enero 2025 · Conforme al Reglamento (UE) 2016/679 (RGPD) y la LOPD-GDD 3/2018.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              1. Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados en este sitio web es <strong>CÉSPEDES AUTOMOTRIZ</strong>, con actividad en España dedicada a la consultoría, asesoramiento y gestión para la importación y búsqueda de vehículos en el ámbito europeo.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              2. Finalidad del Tratamiento de Datos
            </h2>
            <p>
              Los datos personales facilitados a través del formulario de contacto y búsqueda de vehículo (nombre, teléfono/WhatsApp, correo electrónico, preferencias automotrices y presupuesto) se tratarán con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gestionar, analizar y dar respuesta a la solicitud de búsqueda de vehículo remitida por el usuario.</li>
              <li>Elaborar una primera valoración y prospección de mercado sin compromiso.</li>
              <li>Establecer comunicación directa a través de teléfono, WhatsApp o correo electrónico para coordinar los detalles de la consulta.</li>
              <li>Cumplir con las obligaciones legales aplicables en materia de contratación mercantil y fiscal.</li>
            </ul>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              3. Base Jurídica que Legitima el Tratamiento
            </h2>
            <p>
              La base legal para el tratamiento de sus datos es el <strong>consentimiento expreso</strong> otorgado al marcar la casilla de aceptación de la presente política de privacidad con carácter previo al envío del formulario, así como la aplicación de medidas precontractuales a petición del interesado (Art. 6.1.b RGPD).
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              4. Destinatarios y Transferencias
            </h2>
            <p>
              Sus datos no serán cedidos a terceros salvo obligación legal expresa o para la correcta ejecución del servicio solicitado (por ejemplo, peritos inspectores en Alemania o transportistas acreditados una vez formalizada la contratación del servicio). No se comercializan datos con entidades publicitarias.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              5. Derechos del Usuario (ARCO-POL)
            </h2>
            <p>
              Usted tiene derecho a acceder, rectificar, suprimir sus datos personales, así como a limitar u oponerse a su tratamiento y a solicitar la portabilidad de los mismos dirigiendo su solicitud por escrito a través de los canales de contacto habilitados en este sitio web, adjuntando acreditación de su identidad. Asimismo, le asiste el derecho a formular una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que sus derechos no han sido debidamente atendidos.
            </p>
          </div>
        )}

        {type === "legal" && (
          <div className="prose prose-invert max-w-none text-white/75 text-sm sm:text-base leading-relaxed space-y-6 font-light">
            <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              AVISO LEGAL
            </h1>
            <p className="text-xs font-mono text-white/40">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              1. Identidad del Titular
            </h2>
            <p>
              El sitio web es operado bajo la denominación comercial <strong>CÉSPEDES AUTOMOTRIZ</strong>, prestando servicios de búsqueda personalizada, asesoramiento técnico y coordinación logística en la importación de vehículos desde la Unión Europea (Alemania) hacia España.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              2. Propiedad Intelectual e Industrial
            </h2>
            <p>
              Todos los contenidos de este sitio web, incluidos textos, diseños gráficos, logotipos, iconos, arquitectura de navegación y código fuente, son titularidad de CÉSPEDES AUTOMOTRIZ o de terceros legítimos que han autorizado su uso, encontrándose protegidos por la normativa de propiedad intelectual e industrial española e internacional. Queda prohibida su reproducción o distribución sin consentimiento previo por escrito.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              3. Naturaleza del Servicio y Limitación de Responsabilidad
            </h2>
            <p>
              CÉSPEDES AUTOMOTRIZ opera como consultor y personal car shopper independiente. Las estimaciones de precios, tributos (IEDMT) y gastos de importación facilitadas en la web o comunicaciones preliminares tienen carácter meramente orientativo. Los costes definitivos quedan fijados en el presupuesto cerrado específico elaborado para cada vehículo previa comprobación formal de ficha técnica, emisiones WLTP y valoración tributaria oficial.
            </p>
          </div>
        )}

        {type === "cookies" && (
          <div className="prose prose-invert max-w-none text-white/75 text-sm sm:text-base leading-relaxed space-y-6 font-light">
            <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
              POLÍTICA DE COOKIES
            </h1>
            <p className="text-xs font-mono text-white/40">
              Información sobre el uso de cookies y dispositivos de almacenamiento en equipos terminales.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              1. ¿Qué son las Cookies?
            </h2>
            <p>
              Una cookie es un fichero que se descarga en su navegador al acceder a determinadas páginas web para almacenar y recuperar información sobre la navegación efectuada desde dicho equipo.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              2. Tipos de Cookies Utilizadas en este Sitio
            </h2>
            <p>
              Este sitio web utiliza únicamente cookies técnicas indispensables para el funcionamiento y seguridad de la plataforma (sesión, preferencias de navegación y almacenamiento local seguro de formulario). No se emplean cookies invasivas de perfilado de terceros sin su consentimiento.
            </p>

            <h2 className="font-display text-lg font-bold text-white uppercase pt-4">
              3. Gestión y Desactivación de Cookies
            </h2>
            <p>
              Usted puede en cualquier momento permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador de internet que utilice (Chrome, Safari, Firefox, Edge).
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
