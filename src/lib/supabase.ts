import { createClient } from "@supabase/supabase-js";
import { Lead, LeadFormData, LeadStatus } from "../types";

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://erebbzdqkictprgerczs.supabase.co";

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "sb_publishable_htfIv_EvXEom3pO-KW--uA_gJ0OVpyb";

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

/**
 * Convierte un timestamp o ISO string a formato legible en español
 * Ej: "20 AGO 2026 · 18:42"
 */
export function formatLeadDate(dateInput: string | Date | number): {
  formatted: string;
  timestamp: number;
} {
  const date = new Date(dateInput);
  const timestamp = isNaN(date.getTime()) ? Date.now() : date.getTime();
  const d = new Date(timestamp);

  const months = [
    "ENE",
    "FEB",
    "MAR",
    "ABR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DIC",
  ];
  const day = d.getDate().toString().padStart(2, "0");
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");

  return {
    formatted: `${day} ${month} ${year} · ${hours}:${minutes}`,
    timestamp,
  };
}

/**
 * Parsea un string de presupuesto a número para la columna numeric de Postgres
 */
export function parseNumericBudget(raw?: string): number | null {
  if (!raw || !raw.trim()) return null;
  const clean = raw.replace(/[^\d.,]/g, "").trim();
  if (!clean) return null;

  let numStr = clean;
  if (clean.includes(".") && clean.includes(",")) {
    numStr = clean.replace(/\./g, "").replace(/,/g, ".");
  } else if (clean.includes(".")) {
    const parts = clean.split(".");
    if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) {
      numStr = clean.replace(/\./g, "");
    }
  } else if (clean.includes(",")) {
    numStr = clean.replace(/,/g, ".");
  }

  const val = parseFloat(numStr);
  return isNaN(val) ? null : val;
}

/**
 * Formatea el valor numérico de presupuesto para su visualización estética
 */
export function formatBudgetDisplay(
  budget: number | string | null | undefined
): string {
  if (budget === null || budget === undefined || budget === "")
    return "No especificado";
  const num = typeof budget === "number" ? budget : parseFloat(String(budget));
  if (!isNaN(num)) {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(num);
  }
  return String(budget);
}

/**
 * Inserta un nuevo lead en la tabla `public.leads` de Supabase
 */
export async function submitLeadToSupabase(
  formData: LeadFormData
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return {
      success: false,
      error:
        "No se pudo inicializar el cliente de Supabase. Verifica la configuración.",
    };
  }

  try {
    const numericBudget = parseNumericBudget(formData.budget);

    // Build comprehensive vehicle descriptor
    const finalVehicle =
      formData.brand && formData.model
        ? `${formData.brand} ${formData.model}`.trim()
        : formData.vehicleModel.trim();

    // Aggregate rich preferences into structured string for the database
    const prefDetails: string[] = [];
    if (formData.email?.trim()) prefDetails.push(`Email: ${formData.email.trim()}`);
    if (formData.minYear?.trim()) prefDetails.push(`Año mín: ${formData.minYear.trim()}`);
    if (formData.maxKm?.trim()) prefDetails.push(`Km máx: ${formData.maxKm.trim()}`);
    if (formData.fuel?.trim()) prefDetails.push(`Combustible: ${formData.fuel.trim()}`);
    if (formData.transmission?.trim()) prefDetails.push(`Cambio: ${formData.transmission.trim()}`);
    if (formData.preferences?.trim()) prefDetails.push(formData.preferences.trim());
    if (formData.comments?.trim()) prefDetails.push(`Comentarios: ${formData.comments.trim()}`);

    const preferencesCombined = prefDetails.length > 0 ? prefDetails.join(" | ") : null;

    const { error } = await supabase.from("leads").insert([
      {
        name: formData.fullName.trim(),
        phone: formData.phone.trim(),
        vehicle: finalVehicle,
        budget: numericBudget,
        preferences: preferencesCombined,
        status: "NUEVO",
        notes: "",
      },
    ]);

    if (error) {
      console.error("Error insertando lead en Supabase:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Error inesperado registrando lead:", err);
    return {
      success: false,
      error: err?.message || "Error al conectar con la base de datos",
    };
  }
}

/**
 * Obtiene la lista completa de leads ordenados por created_at DESC desde Supabase
 */
export async function getLeadsFromSupabase(): Promise<{
  leads: Lead[];
  error?: string;
}> {
  if (!supabase) {
    return {
      leads: [],
      error: "Supabase no está configurado.",
    };
  }

  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error obteniendo leads de Supabase:", error);
      return { leads: [], error: error.message };
    }

    const formattedLeads: Lead[] = (data || []).map((row: any) => {
      const { formatted, timestamp } = formatLeadDate(
        row.created_at || Date.now()
      );
      return {
        id: String(row.id),
        createdAt: formatted,
        timestamp,
        name: row.name || "Sin nombre",
        phone: row.phone || "Sin teléfono",
        vehicle: row.vehicle || "Sin vehículo",
        budget: formatBudgetDisplay(row.budget),
        preferences: row.preferences || "",
        status: (row.status as LeadStatus) || "NUEVO",
        notes: row.notes || "",
        isMock: false,
      };
    });

    return { leads: formattedLeads };
  } catch (err: any) {
    console.error("Error inesperado obteniendo leads:", err);
    return {
      leads: [],
      error: err?.message || "Error al cargar los leads",
    };
  }
}

/**
 * Actualiza el estado de un lead existente en Supabase
 */
export async function updateLeadStatusInSupabase(
  leadId: string,
  newStatus: LeadStatus
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: "Supabase no está configurado." };
  }

  try {
    const { error } = await supabase
      .from("leads")
      .update({
        status: newStatus,
        updated_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    if (error) {
      console.error("Error actualizando estado en Supabase:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al actualizar estado" };
  }
}

/**
 * Actualiza las notas internas de un lead en Supabase
 */
export async function updateLeadNotesInSupabase(
  leadId: string,
  notes: string
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: "Supabase no está configurado." };
  }

  try {
    const { error } = await supabase
      .from("leads")
      .update({
        notes,
        updated_at: new Date().toISOString(),
      })
      .eq("id", leadId);

    if (error) {
      console.error("Error actualizando notas en Supabase:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || "Error al guardar notas" };
  }
}
