import React, { useState } from "react";
import { ArrowLeft, Lock, AlertCircle, ShieldCheck } from "lucide-react";
import { supabase, isSupabaseConfigured } from "../../lib/supabase";

interface AdminLoginProps {
  onBackToHome: () => void;
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({
  onBackToHome,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!isSupabaseConfigured || !supabase) {
      setErrorMsg(
        "Supabase no está configurado. Añade las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY."
      );
      return;
    }

    if (!email.trim() || !password.trim()) {
      setErrorMsg("Por favor, introduce el email y la contraseña de administrador.");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) {
        setErrorMsg(
          error.message === "Invalid login credentials"
            ? "Credenciales incorrectas. Verifica tu email y contraseña."
            : error.message
        );
      } else if (data.session) {
        onLoginSuccess();
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "Error al autenticar administrador.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between selection:bg-[#C8102E] selection:text-white">
      {/* Top Bar */}
      <header className="border-b border-white/10 bg-[#0F0F0F] px-4 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToHome}
            className="p-2 -ml-2 rounded border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Volver a la landing pública"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2">
            <span className="font-display text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white">
              CÉSPEDES <span className="text-[#C8102E]">AUTOMOTRIZ</span>
            </span>
          </div>
        </div>

        <button
          onClick={onBackToHome}
          className="text-xs font-bold tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors"
        >
          WEB PÚBLICA
        </button>
      </header>

      {/* Center Box */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-[#141414] border border-white/15 relative">
          {/* Top Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C8102E]" />

          <div className="p-8 sm:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-12 h-12 mx-auto mb-4 bg-black/60 border border-white/15 flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#C8102E]" />
              </div>
              <h1 className="font-display text-xl sm:text-2xl font-bold tracking-tight uppercase text-white mb-1">
                ACCESO PRIVADO
              </h1>
              <p className="text-xs text-white/50 tracking-wider font-mono uppercase">
                Panel de Administración de Leads
              </p>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-6 p-4 bg-[#C8102E]/10 border border-[#C8102E]/40 text-white flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-[#C8102E] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/90 leading-relaxed font-light">
                  {errorMsg}
                </p>
              </div>
            )}

            {!isSupabaseConfigured && (
              <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed space-y-1">
                <p className="font-bold uppercase tracking-wider text-amber-300">
                  Configuración de Supabase Requerida
                </p>
                <p className="text-white/70">
                  Define las variables <code className="text-white bg-black/40 px-1 py-0.5">VITE_SUPABASE_URL</code> y{" "}
                  <code className="text-white bg-black/40 px-1 py-0.5">VITE_SUPABASE_ANON_KEY</code> para conectar la base de datos y autenticación de Supabase.
                </p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="admin-email"
                  className="block text-xs font-bold tracking-[0.16em] uppercase text-white/80 mb-2 font-display"
                >
                  EMAIL DE ADMINISTRADOR
                </label>
                <input
                  id="admin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cespedes.com"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 bg-black/50 border border-white/15 focus:border-white text-sm text-white placeholder-white/30 transition-colors focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="admin-password"
                  className="block text-xs font-bold tracking-[0.16em] uppercase text-white/80 mb-2 font-display"
                >
                  CONTRASEÑA
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="w-full px-4 py-3.5 bg-black/50 border border-white/15 focus:border-white text-sm text-white placeholder-white/30 transition-colors focus:outline-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#C8102E] hover:bg-[#A50C25] disabled:opacity-50 text-white text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-lg shadow-[#C8102E]/20 flex items-center justify-center"
                >
                  {isLoading ? "VERIFICANDO..." : "INICIAR SESIÓN"}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center space-x-2 text-white/40 text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>Autenticación protegida por Supabase RLS</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-4 px-4 text-center text-xs text-white/40 font-mono">
        CÉSPEDES AUTOMOTRIZ &copy; {new Date().getFullYear()} — Todos los derechos reservados.
      </footer>
    </div>
  );
};
