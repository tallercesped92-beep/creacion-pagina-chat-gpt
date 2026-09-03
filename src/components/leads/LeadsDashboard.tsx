import React, { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ArrowLeft,
  Phone,
  Car,
  CheckCircle2,
  X,
  RefreshCw,
  LogOut,
  AlertCircle,
  Database,
} from "lucide-react";
import { Lead, LeadStatus } from "../../types";
import {
  getLeadsFromSupabase,
  updateLeadStatusInSupabase,
  updateLeadNotesInSupabase,
} from "../../lib/supabase";

const STATUS_CONFIG: Record<
  LeadStatus,
  { label: string; bg: string; text: string; border: string; dot: string }
> = {
  NUEVO: {
    label: "NUEVO",
    bg: "bg-[#C8102E]/10",
    text: "text-[#C8102E]",
    border: "border-[#C8102E]/30",
    dot: "bg-[#C8102E]",
  },
  CONTACTADO: {
    label: "CONTACTADO",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
    dot: "bg-blue-400",
  },
  EN_SEGUIMIENTO: {
    label: "EN SEGUIMIENTO",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    dot: "bg-amber-400",
  },
  CITA: {
    label: "CITA",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30",
    dot: "bg-purple-400",
  },
  CERRADO: {
    label: "CERRADO",
    bg: "bg-white/10",
    text: "text-white",
    border: "border-white/30",
    dot: "bg-white",
  },
  DESCARTADO: {
    label: "DESCARTADO",
    bg: "bg-neutral-500/10",
    text: "text-neutral-400",
    border: "border-neutral-500/30",
    dot: "bg-neutral-400",
  },
};

interface LeadsDashboardProps {
  onBackToHome: () => void;
  onLogout: () => void;
}

export const LeadsDashboard: React.FC<LeadsDashboardProps> = ({
  onBackToHome,
  onLogout,
}) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [currentNotes, setCurrentNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);

  // Load leads from Supabase
  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const response = await getLeadsFromSupabase();
      if (response.error) {
        setLoadError(response.error);
        setLeads([]);
      } else {
        setLeads(response.leads);
      }
    } catch (err: any) {
      setLoadError(err?.message || "Error al conectar con Supabase");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Update notes state when selected lead changes
  useEffect(() => {
    if (selectedLead) {
      setCurrentNotes(selectedLead.notes || "");
      setNoteSavedFeedback(false);
    }
  }, [selectedLead]);

  // Metrics computation
  const metrics = useMemo(() => {
    const total = leads.length;
    const todayCount = leads.filter((l) => {
      const dayDiff = (Date.now() - l.timestamp) / (1000 * 60 * 60 * 24);
      return dayDiff <= 1;
    }).length;

    const pendientes = leads.filter((l) => l.status === "NUEVO").length;
    const contactados = leads.filter(
      (l) =>
        l.status === "CONTACTADO" ||
        l.status === "EN_SEGUIMIENTO" ||
        l.status === "CITA"
    ).length;

    return { total, todayCount, pendientes, contactados };
  }, [leads]);

  // Filtered and sorted leads (most recent first)
  const filteredLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        // Status filter
        if (statusFilter !== "ALL" && lead.status !== statusFilter) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchesName = lead.name.toLowerCase().includes(q);
          const matchesVehicle = lead.vehicle.toLowerCase().includes(q);
          const matchesPhone = lead.phone.toLowerCase().includes(q);
          const matchesPrefs = (lead.preferences || "").toLowerCase().includes(q);
          return matchesName || matchesVehicle || matchesPhone || matchesPrefs;
        }

        return true;
      })
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [leads, statusFilter, searchQuery]);

  // Handle lead status change in Supabase
  const handleStatusChange = async (leadId: string, newStatus: LeadStatus) => {
    // Optimistic update
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
    if (selectedLead && selectedLead.id === leadId) {
      setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null));
    }

    const res = await updateLeadStatusInSupabase(leadId, newStatus);
    if (!res.success) {
      console.error("Error al actualizar estado:", res.error);
      // Revert if error
      fetchLeads();
    }
  };

  // Handle internal notes update in Supabase
  const handleSaveNotes = async () => {
    if (!selectedLead) return;

    setIsSavingNotes(true);
    const res = await updateLeadNotesInSupabase(selectedLead.id, currentNotes);
    setIsSavingNotes(false);

    if (res.success) {
      setLeads((prev) =>
        prev.map((l) =>
          l.id === selectedLead.id ? { ...l, notes: currentNotes } : l
        )
      );
      setSelectedLead((prev) =>
        prev ? { ...prev, notes: currentNotes } : null
      );
      setNoteSavedFeedback(true);
      setTimeout(() => {
        setNoteSavedFeedback(false);
      }, 2000);
    } else {
      console.error("Error al guardar notas:", res.error);
    }
  };

  const statusTabs: { id: string; label: string }[] = [
    { id: "ALL", label: "TODOS" },
    { id: "NUEVO", label: "NUEVOS" },
    { id: "CONTACTADO", label: "CONTACTADOS" },
    { id: "EN_SEGUIMIENTO", label: "EN SEGUIMIENTO" },
    { id: "CITA", label: "CITA" },
    { id: "CERRADO", label: "CERRADOS" },
    { id: "DESCARTADO", label: "DESCARTADOS" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#C8102E] selection:text-white">
      {/* Top Header Bar */}
      <header className="border-b border-white/10 bg-[#0F0F0F]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHome}
              className="p-2 -ml-2 rounded border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
              title="Volver a la landing pública"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
                  CÉSPEDES <span className="text-[#C8102E]">AUTOMOTRIZ</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-white/10 text-white/60 tracking-wider font-mono">
                  SUPABASE CRM
                </span>
              </div>
              <p className="text-xs text-white/50 tracking-wider uppercase font-display mt-0.5">
                PANEL DE LEADS
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={fetchLeads}
              disabled={isLoading}
              className="p-2 rounded border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
              title="Recargar leads desde Supabase"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </button>

            <button
              onClick={onBackToHome}
              className="text-xs font-bold tracking-[0.14em] uppercase text-white/70 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-0.5 hidden sm:inline-block"
            >
              VER WEB
            </button>

            <button
              onClick={onLogout}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-[#C8102E]/30 bg-[#C8102E]/10 hover:bg-[#C8102E] text-white text-xs font-bold tracking-wider uppercase transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CERRAR SESIÓN</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Page Title & Subtitle */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight uppercase text-white mb-2">
              PANEL DE LEADS
            </h1>
            <p className="text-sm text-white/60 font-light">
              Solicitudes de búsqueda recibidas desde la landing
            </p>
          </div>
          <div className="flex items-center space-x-2 text-xs text-white/40 font-mono">
            <Database className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>Sincronizado con base de datos Supabase</span>
          </div>
        </div>

        {/* Error notification if fetch failed */}
        {loadError && (
          <div className="mb-8 p-4 bg-[#C8102E]/10 border border-[#C8102E]/40 text-white flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-[#C8102E] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C8102E] mb-1">
                Error al consultar Supabase
              </p>
              <p className="text-xs text-white/80 font-light leading-relaxed">
                {loadError}
              </p>
              <button
                onClick={fetchLeads}
                className="mt-2 text-xs font-bold underline tracking-wider uppercase text-white hover:text-[#C8102E]"
              >
                Reintentar conexión
              </button>
            </div>
          </div>
        )}

        {/* 4 Metric Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="p-5 sm:p-6 bg-[#141414] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 font-display mb-2">
              TOTAL LEADS
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {isLoading ? "..." : metrics.total}
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#141414] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/50 font-display mb-2">
              HOY
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {isLoading ? "..." : metrics.todayCount}
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#141414] border border-[#C8102E]/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8102E]" />
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#C8102E] font-display mb-2">
              PENDIENTES
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#C8102E]">
              {isLoading ? "..." : metrics.pendientes}
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#141414] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-500/50" />
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-400 font-display mb-2">
              CONTACTADOS
            </p>
            <p className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-blue-400">
              {isLoading ? "..." : metrics.contactados}
            </p>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, teléfono o vehículo..."
              className="w-full pl-11 pr-4 py-3.5 bg-[#141414] border border-white/15 focus:border-white text-sm text-white placeholder-white/35 focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {statusTabs.map((tab) => {
              const isActive = statusFilter === tab.id;
              const count =
                tab.id === "ALL"
                  ? leads.length
                  : leads.filter((l) => l.status === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer ${
                    isActive
                      ? "bg-white text-[#0A0A0A] border-white"
                      : "bg-[#141414] text-white/70 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {tab.label} ({isLoading ? "..." : count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="p-16 text-center bg-[#141414] border border-white/10 flex flex-col items-center justify-center space-y-3">
            <RefreshCw className="w-6 h-6 text-[#C8102E] animate-spin" />
            <p className="text-xs uppercase tracking-widest text-white/60 font-mono">
              Cargando solicitudes desde Supabase...
            </p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-12 text-center bg-[#141414] border border-white/10">
            <p className="text-white/50 text-sm mb-2">
              {leads.length === 0
                ? "No hay leads registrados todavía en la base de datos."
                : "No se encontraron solicitudes con los filtros actuales."}
            </p>
            <button
              onClick={() => {
                setStatusFilter("ALL");
                setSearchQuery("");
              }}
              className="text-xs text-[#C8102E] font-bold tracking-wider uppercase hover:underline"
            >
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeads.map((lead) => {
              const statusInfo = STATUS_CONFIG[lead.status] || STATUS_CONFIG.NUEVO;
              const isNew = lead.status === "NUEVO";

              return (
                <div
                  key={lead.id}
                  className={`p-6 bg-[#141414] border transition-all duration-200 flex flex-col justify-between relative group ${
                    isNew
                      ? "border-[#C8102E]/40 hover:border-[#C8102E]"
                      : "border-white/10 hover:border-white/25"
                  }`}
                >
                  {/* Top Line Indicator */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] ${
                      isNew ? "bg-[#C8102E]" : "bg-white/10 group-hover:bg-white/30"
                    }`}
                  />

                  <div>
                    {/* Header: Status Pill & Date */}
                    <div className="flex items-center justify-between mb-4">
                      {isNew ? (
                        <span className="inline-flex items-center text-[10px] font-bold tracking-[0.16em] uppercase text-[#C8102E] bg-[#C8102E]/10 border border-[#C8102E]/30 px-2 py-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mr-1.5 animate-pulse" />
                          NUEVO LEAD
                        </span>
                      ) : (
                        <span
                          className={`inline-flex items-center text-[10px] font-bold tracking-[0.16em] uppercase px-2 py-0.5 border ${statusInfo.bg} ${statusInfo.text} ${statusInfo.border}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${statusInfo.dot}`} />
                          {statusInfo.label}
                        </span>
                      )}

                      <span className="text-[11px] text-white/40 font-mono">
                        {lead.createdAt}
                      </span>
                    </div>

                    {/* Client Name */}
                    <h3 className="font-display text-lg font-bold tracking-tight uppercase text-white mb-3">
                      {lead.name}
                    </h3>

                    {/* Vehicle & Budget */}
                    <div className="p-3.5 bg-black/40 border border-white/5 mb-4 space-y-1">
                      <div className="flex items-center text-xs font-bold text-white uppercase tracking-wider">
                        <Car className="w-3.5 h-3.5 mr-2 text-[#C8102E]" />
                        {lead.vehicle}
                      </div>
                      <div className="text-xs text-white/70 pl-5.5 font-mono">
                        Presupuesto: {lead.budget || "No especificado"}
                      </div>
                    </div>

                    {/* Contact Phone */}
                    <div className="flex items-center text-xs text-white/70 mb-3">
                      <Phone className="w-3.5 h-3.5 mr-2 text-white/40" />
                      <span className="font-mono">{lead.phone}</span>
                    </div>

                    {/* Preferences Preview */}
                    {lead.preferences && (
                      <div className="text-xs text-white/50 line-clamp-2 mb-4 leading-relaxed bg-white/[0.02] p-2.5 border border-white/5">
                        <span className="text-white/70 font-semibold uppercase text-[10px] block mb-1">
                          Preferencias:
                        </span>
                        {lead.preferences}
                      </div>
                    )}
                  </div>

                  {/* Footer & Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-2">
                    {/* Quick Status Selector */}
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusChange(lead.id, e.target.value as LeadStatus)
                      }
                      className="text-[11px] font-bold tracking-wider uppercase bg-[#0A0A0A] border border-white/15 text-white/80 px-2.5 py-1.5 focus:outline-none focus:border-white cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="NUEVO">NUEVO</option>
                      <option value="CONTACTADO">CONTACTADO</option>
                      <option value="EN_SEGUIMIENTO">EN SEGUIMIENTO</option>
                      <option value="CITA">CITA</option>
                      <option value="CERRADO">CERRADO</option>
                      <option value="DESCARTADO">DESCARTADO</option>
                    </select>

                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="px-3.5 py-1.5 bg-white text-[#0A0A0A] hover:bg-[#C8102E] hover:text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      VER LEAD
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Lead Detail Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLead(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#141414] border border-white/15 text-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              {/* Modal Top Line */}
              <div className="h-[2px] bg-[#C8102E]" />

              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0F0F0F]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                    EXPEDIENTE: {selectedLead.id}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white">
                    {selectedLead.name}
                  </h2>
                </div>

                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
                {/* 1. DATOS DEL CLIENTE */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-white/10">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      DATOS DEL CLIENTE
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                        Nombre
                      </span>
                      <p className="font-semibold text-white">{selectedLead.name}</p>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                        Teléfono / WhatsApp
                      </span>
                      <p className="font-mono text-white flex items-center">
                        <Phone className="w-3.5 h-3.5 mr-2 text-[#C8102E]" />
                        {selectedLead.phone}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                        Fecha de Solicitud
                      </span>
                      <p className="font-mono text-white/80">{selectedLead.createdAt}</p>
                    </div>
                  </div>
                </div>

                {/* 2. BÚSQUEDA */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-white/10">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      BÚSQUEDA
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                        Vehículo
                      </span>
                      <p className="font-semibold text-white text-base">{selectedLead.vehicle}</p>
                    </div>
                    <div>
                      <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                        Presupuesto
                      </span>
                      <p className="font-mono text-white">{selectedLead.budget || "No especificado"}</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-white/40 block mb-1 uppercase font-mono">
                      Preferencias
                    </span>
                    <div className="p-4 bg-black/40 border border-white/10 text-sm text-white/80 leading-relaxed font-light">
                      {selectedLead.preferences || "Sin preferencias adicionales indicadas."}
                    </div>
                  </div>
                </div>

                {/* 3. ESTADO DEL LEAD */}
                <div>
                  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-white/10">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      ESTADO DEL LEAD
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {(
                      [
                        "NUEVO",
                        "CONTACTADO",
                        "EN_SEGUIMIENTO",
                        "CITA",
                        "CERRADO",
                        "DESCARTADO",
                      ] as LeadStatus[]
                    ).map((statusKey) => {
                      const isCurrent = selectedLead.status === statusKey;
                      const cfg = STATUS_CONFIG[statusKey];

                      return (
                        <button
                          key={statusKey}
                          onClick={() => handleStatusChange(selectedLead.id, statusKey)}
                          className={`p-3 text-xs font-bold tracking-wider uppercase border transition-all text-center cursor-pointer ${
                            isCurrent
                              ? `${cfg.bg} ${cfg.text} ${cfg.border} ring-1 ring-white/20`
                              : "bg-[#0A0A0A] border-white/10 text-white/60 hover:text-white hover:border-white/30"
                          }`}
                        >
                          {cfg.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. NOTAS INTERNAS */}
                <div>
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#C8102E] uppercase font-display">
                      NOTAS INTERNAS
                    </span>
                    <span className="text-[11px] text-white/40 font-mono">
                      (Solo visible para administradores)
                    </span>
                  </div>

                  <textarea
                    rows={4}
                    value={currentNotes}
                    onChange={(e) => setCurrentNotes(e.target.value)}
                    placeholder="Ej. Busca GTI MK8, presupuesto máximo 38k. Enviar opciones de Munich. Agendada llamada martes 17:00..."
                    className="w-full p-4 bg-black/40 border border-white/15 focus:border-white text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-none leading-relaxed"
                  />

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-xs text-white/40">
                      Usa este espacio para registrar el seguimiento del cliente en Supabase.
                    </p>

                    <button
                      onClick={handleSaveNotes}
                      disabled={isSavingNotes}
                      className="px-6 py-2.5 bg-[#C8102E] hover:bg-[#A50C25] disabled:opacity-50 text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center space-x-2 cursor-pointer"
                    >
                      {noteSavedFeedback ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          <span>GUARDADO EN SUPABASE</span>
                        </>
                      ) : (
                        <span>{isSavingNotes ? "GUARDANDO..." : "GUARDAR NOTAS"}</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0F0F0F] flex items-center justify-end">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-6 py-2.5 border border-white/20 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  CERRAR
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
