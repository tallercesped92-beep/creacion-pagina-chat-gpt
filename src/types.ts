export interface LeadFormData {
  fullName: string;
  phone: string;
  email?: string;
  brand?: string;
  model?: string;
  vehicleModel: string;
  budget?: string;
  minYear?: string;
  maxKm?: string;
  fuel?: string;
  transmission?: string;
  preferences?: string;
  comments?: string;
}

export interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  vehicleModel?: string;
  privacyAccepted?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type LeadStatus =
  | "NUEVO"
  | "CONTACTADO"
  | "EN_SEGUIMIENTO"
  | "CITA"
  | "CERRADO"
  | "DESCARTADO";

export interface Lead {
  id: string;
  createdAt: string; // Formato legible ej: "20 AGO 2026 · 18:42" o ISO
  timestamp: number;
  name: string;
  phone: string;
  vehicle: string;
  budget?: string;
  preferences?: string;
  status: LeadStatus;
  notes?: string;
  isMock?: boolean;
}
