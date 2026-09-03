import { Lead, LeadStatus, LeadFormData } from "../types";

export const INITIAL_MOCK_LEADS: Lead[] = [
  {
    id: "lead-mock-01",
    createdAt: "20 AGO 2026 · 18:42",
    timestamp: 1787229720000,
    name: "Juan García",
    phone: "+34 612 345 678",
    vehicle: "BMW X1",
    budget: "42.000 €",
    preferences: "M Sport, automático, menos de 50.000 km, techo panorámico.",
    status: "NUEVO",
    notes: "Busca unidad de 2023 en adelante. Color gris o negro preferente.",
    isMock: true,
  },
  {
    id: "lead-mock-02",
    createdAt: "20 AGO 2026 · 15:10",
    timestamp: 1787217000000,
    name: "Carlos Martínez",
    phone: "+34 689 112 233",
    vehicle: "Volkswagen Golf GTI Mk8",
    budget: "35.000 € - 38.000 €",
    preferences: "Acabado ClubsSport o GTI estándar con escape Akrapovic, llantas 19 pulgadas.",
    status: "NUEVO",
    notes: "Busca GTI MK8, presupuesto máximo 38k. Le interesa historial en concesionario oficial.",
    isMock: true,
  },
  {
    id: "lead-mock-03",
    createdAt: "20 AGO 2026 · 11:30",
    timestamp: 1787203800000,
    name: "David López",
    phone: "+34 644 987 654",
    vehicle: "Audi Q5 Sportback",
    budget: "55.000 €",
    preferences: "40 TDI o 45 TFSI, S line, suspensión neumática, virtual cockpit plus.",
    status: "CONTACTADO",
    notes: "Contactado por WhatsApp. Enviadas 2 opciones de concesionarios oficiales en Munich.",
    isMock: true,
  },
  {
    id: "lead-mock-04",
    createdAt: "19 AGO 2026 · 19:15",
    timestamp: 1787145300000,
    name: "Miguel Torres",
    phone: "+34 670 223 344",
    vehicle: "BMW M340i xDrive",
    budget: "60.000 €",
    preferences: "Dravit Grey o Brooklyn Grey, paquete M Pro, frenos M rojos, Head-Up Display.",
    status: "EN_SEGUIMIENTO",
    notes: "Agendada llamada de seguimiento para revisar peritaje técnico de unidad localizada en Stuttgart.",
    isMock: true,
  },
  {
    id: "lead-mock-05",
    createdAt: "18 AGO 2026 · 17:05",
    timestamp: 1787051100000,
    name: "Alejandro Vega",
    phone: "+34 655 432 109",
    vehicle: "Audi RS3 Sportback",
    budget: "68.000 €",
    preferences: "Gris Nardo, escape deportivo RS, paquete dinámico RS plus con frenos carbocerámicos.",
    status: "CITA",
    notes: "Agendada videollamada para el martes a las 17:00 para revisar informe de historial y condiciones.",
    isMock: true,
  },
  {
    id: "lead-mock-06",
    createdAt: "16 AGO 2026 · 12:40",
    timestamp: 1786862400000,
    name: "Roberto Ramos",
    phone: "+34 633 876 543",
    vehicle: "Mercedes-AMG C63 S",
    budget: "75.000 € - 85.000 €",
    preferences: "Acabado Magno mate, asientos AMG Performance, sonido Burmester.",
    status: "CERRADO",
    notes: "Unidad verificada y señalizada en Hamburgo. Gestión de transporte en curso.",
    isMock: true,
  },
  {
    id: "lead-mock-07",
    createdAt: "14 AGO 2026 · 10:20",
    timestamp: 1786681200000,
    name: "Fernando Ruiz",
    phone: "+34 622 198 765",
    vehicle: "Audi RS6 Avant",
    budget: "40.000 €",
    preferences: "Menos de 30.000 km, año 2022 o posterior.",
    status: "DESCARTADO",
    notes: "Presupuesto incompatible con el modelo y año solicitado en el mercado actual. Notificado.",
    isMock: true,
  },
];

const LOCAL_STORAGE_KEY = "cespedes_leads_store";

export function loadStoredLeads(): Lead[] {
  if (typeof window === "undefined") return INITIAL_MOCK_LEADS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_MOCK_LEADS));
      return INITIAL_MOCK_LEADS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_MOCK_LEADS;
  } catch {
    return INITIAL_MOCK_LEADS;
  }
}

export function saveLeads(leads: Lead[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
  } catch (err) {
    console.error("Error guardando leads en almacenamiento local:", err);
  }
}

export function registerNewFormLead(formData: LeadFormData): Lead {
  const now = new Date();
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  const day = now.getDate().toString().padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${day} ${month} ${year} · ${hours}:${minutes}`;

  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    createdAt: formattedDate,
    timestamp: Date.now(),
    name: formData.fullName,
    phone: formData.phone,
    vehicle: formData.vehicleModel,
    budget: formData.budget || "No especificado",
    preferences: formData.preferences || "Sin preferencias adicionales",
    status: "NUEVO",
    notes: "",
    isMock: false,
  };

  const currentLeads = loadStoredLeads();
  const updated = [newLead, ...currentLeads];
  saveLeads(updated);

  return newLead;
}
