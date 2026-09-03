/**
 * Configuración y generador de enlaces directos para WhatsApp Business
 */
export const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER || "34612345678";

export function getWhatsAppUrl(customMessage?: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const defaultText =
    "Hola, estoy interesado en el servicio de búsqueda y asesoramiento para importar un vehículo desde Alemania con Céspedes Automotriz.";
  const text = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

export function getWhatsAppDisplayNumber(): string {
  const clean = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (clean.startsWith("34") && clean.length === 11) {
    return `+34 ${clean.slice(2, 5)} ${clean.slice(5, 7)} ${clean.slice(7, 9)} ${clean.slice(9, 11)}`;
  }
  return `+${clean}`;
}

