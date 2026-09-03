/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { LeadsDashboard } from "./components/leads/LeadsDashboard";
import { AdminLogin } from "./components/leads/AdminLogin";
import { supabase, isSupabaseConfigured } from "./lib/supabase";

import { ShowroomVehicles } from "./components/home/ShowroomVehicles";
import { ShowroomPositioning } from "./components/home/ShowroomPositioning";
import { ShowroomWhyGermany } from "./components/home/ShowroomWhyGermany";
import { ShowroomIntelligence } from "./components/home/ShowroomIntelligence";
import { ShowroomProcess } from "./components/home/ShowroomProcess";
import { ShowroomConversion } from "./components/home/ShowroomConversion";
import { ShowroomClosing } from "./components/home/ShowroomClosing";

import { ServicePage } from "./pages/ServicePage";
import { ProcessPage } from "./pages/ProcessPage";
import { ImportPage } from "./pages/ImportPage";
import { VehiclesPage } from "./pages/VehiclesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage, LegalDocType } from "./pages/LegalPage";

export default function App() {
  const getInitialPath = (): string => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path === "/leads" || path.startsWith("/leads") || hash === "#leads") return "/leads";
    if (path === "/servicio" || hash === "#servicio") return "/servicio";
    if (path === "/proceso" || hash === "#proceso") return "/proceso";
    if (path === "/importacion" || hash === "#importacion") return "/importacion";
    if (path === "/vehiculos" || hash === "#vehiculos") return "/vehiculos";
    if (path === "/nosotros" || hash === "#nosotros") return "/nosotros";
    if (path === "/contacto" || hash === "#contacto") return "/contacto";
    if (path === "/privacidad" || hash === "#privacidad") return "/privacidad";
    if (path === "/aviso-legal" || hash === "#aviso-legal") return "/aviso-legal";
    if (path === "/cookies" || hash === "#cookies") return "/cookies";
    return "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path === "/leads" || path.startsWith("/leads") || hash === "#leads") setCurrentPath("/leads");
      else if (path === "/servicio" || hash === "#servicio") setCurrentPath("/servicio");
      else if (path === "/proceso" || hash === "#proceso") setCurrentPath("/proceso");
      else if (path === "/importacion" || hash === "#importacion") setCurrentPath("/importacion");
      else if (path === "/vehiculos" || hash === "#vehiculos") setCurrentPath("/vehiculos");
      else if (path === "/nosotros" || hash === "#nosotros") setCurrentPath("/nosotros");
      else if (path === "/contacto" || hash === "#contacto") setCurrentPath("/contacto");
      else if (path === "/privacidad" || hash === "#privacidad") setCurrentPath("/privacidad");
      else if (path === "/aviso-legal" || hash === "#aviso-legal") setCurrentPath("/aviso-legal");
      else if (path === "/cookies" || hash === "#cookies") setCurrentPath("/cookies");
      else setCurrentPath("/");
    };
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "CÉSPEDES AUTOMOTRIZ | Personal Car Shopper · Importación Alemania",
      "/servicio": "Servicio de Personal Car Shopper | CÉSPEDES AUTOMOTRIZ",
      "/proceso": "Cómo Funciona (5 Etapas) | CÉSPEDES AUTOMOTRIZ",
      "/importacion": "Guía de Importación Alemania - España | CÉSPEDES AUTOMOTRIZ",
      "/vehiculos": "Ejemplos de Vehículos en Alemania | CÉSPEDES AUTOMOTRIZ",
      "/nosotros": "Sobre Nosotros y Filosofía | CÉSPEDES AUTOMOTRIZ",
      "/contacto": "Contacto y Atención Directa | CÉSPEDES AUTOMOTRIZ",
      "/privacidad": "Política de Privacidad | CÉSPEDES AUTOMOTRIZ",
      "/aviso-legal": "Aviso Legal | CÉSPEDES AUTOMOTRIZ",
      "/cookies": "Política de Cookies | CÉSPEDES AUTOMOTRIZ",
      "/leads": "Panel de Gestión de Solicitudes | CÉSPEDES AUTOMOTRIZ",
    };
    document.title = titles[currentPath] || titles["/"];
  }, [currentPath]);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setIsAuthenticated(false);
      setIsCheckingAuth(false);
      return;
    }
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(Boolean(session));
      setIsCheckingAuth(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session));
      setIsCheckingAuth(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const navigateTo = useCallback((route: string) => {
    try {
      window.history.pushState({}, "", route);
    } catch {
      window.location.hash = route.replace("/", "#");
    }
    setCurrentPath(route);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleScrollToForm = useCallback(() => navigateTo("/contacto"), [navigateTo]);

  const handleSelectVehicleFromCatalog = useCallback((vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    navigateTo("/contacto");
  }, [navigateTo]);

  const handleLogout = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setIsAuthenticated(false);
  }, []);

  const handleLoginSuccess = useCallback(() => setIsAuthenticated(true), []);

  if (currentPath === "/leads") {
    if (isCheckingAuth) {
      return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white"><div className="flex flex-col items-center space-y-3"><div className="w-6 h-6 border-2 border-white/20 border-t-[#C8102E] rounded-full animate-spin" /><span className="text-xs font-mono tracking-widest text-white/50 uppercase">Verificando credenciales...</span></div></div>;
    }
    if (!isAuthenticated) return <AdminLogin onBackToHome={() => navigateTo("/")} onLoginSuccess={handleLoginSuccess} />;
    return <LeadsDashboard onBackToHome={() => navigateTo("/")} onLogout={handleLogout} />;
  }

  const legalType: LegalDocType = currentPath === "/aviso-legal" ? "legal" : currentPath === "/cookies" ? "cookies" : "privacy";

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white antialiased selection:bg-[#C8102E] selection:text-white">
      <ScrollProgressBar />
      <Header currentRoute={currentPath} onNavigate={navigateTo} onCtaClick={handleScrollToForm} />
      <main className="flex-grow">
        {currentPath === "/servicio" && <ServicePage onCtaClick={handleScrollToForm} />}
        {currentPath === "/proceso" && <ProcessPage onCtaClick={handleScrollToForm} />}
        {currentPath === "/importacion" && <ImportPage onCtaClick={handleScrollToForm} />}
        {currentPath === "/vehiculos" && <VehiclesPage onSelectVehicle={handleSelectVehicleFromCatalog} />}
        {currentPath === "/nosotros" && <AboutPage onCtaClick={handleScrollToForm} />}
        {currentPath === "/contacto" && <ContactPage prefilledVehicle={selectedVehicle} />}
        {(currentPath === "/privacidad" || currentPath === "/aviso-legal" || currentPath === "/cookies") && <LegalPage type={legalType} onNavigateBack={() => navigateTo("/")} onSelectDoc={(t) => navigateTo(`/${t === "legal" ? "aviso-legal" : t}`)} />}
        {currentPath === "/" && (
          <>
            <Hero onCtaClick={handleScrollToForm} onProcessClick={() => navigateTo("/proceso")} />
            <ShowroomVehicles onNavigateVehicles={() => navigateTo("/vehiculos")} onSelectVehicle={handleSelectVehicleFromCatalog} />
            <ShowroomPositioning onNavigateService={() => navigateTo("/servicio")} />
            <ShowroomWhyGermany onNavigateAdvantages={() => navigateTo("/importacion")} />
            <ShowroomIntelligence onNavigateMethod={() => navigateTo("/servicio")} />
            <ShowroomProcess onNavigateProcess={() => navigateTo("/proceso")} />
            <ShowroomConversion onCtaClick={handleScrollToForm} />
            <ShowroomClosing />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} onOpenLeadForm={handleScrollToForm} />
    </div>
  );
}
