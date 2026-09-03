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

// Showroom Home Components
import { ShowroomVehicles } from "./components/home/ShowroomVehicles";
import { ShowroomPositioning } from "./components/home/ShowroomPositioning";
import { ShowroomWhyGermany } from "./components/home/ShowroomWhyGermany";
import { ShowroomIntelligence } from "./components/home/ShowroomIntelligence";
import { ShowroomProcess } from "./components/home/ShowroomProcess";
import { ShowroomConversion } from "./components/home/ShowroomConversion";
import { ShowroomClosing } from "./components/home/ShowroomClosing";

// Dedicated Pages
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

    if (path === "/leads" || path.startsWith("/leads") || hash === "#leads") {
      return "/leads";
    }
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

  // Monitor location changes (back/forward button, pushState, hash changes)
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;

      if (path === "/leads" || path.startsWith("/leads") || hash === "#leads") {
        setCurrentPath("/leads");
      } else if (path === "/servicio" || hash === "#servicio") {
        setCurrentPath("/servicio");
      } else if (path === "/proceso" || hash === "#proceso") {
        setCurrentPath("/proceso");
      } else if (path === "/importacion" || hash === "#importacion") {
        setCurrentPath("/importacion");
      } else if (path === "/vehiculos" || hash === "#vehiculos") {
        setCurrentPath("/vehiculos");
      } else if (path === "/nosotros" || hash === "#nosotros") {
        setCurrentPath("/nosotros");
      } else if (path === "/contacto" || hash === "#contacto") {
        setCurrentPath("/contacto");
      } else if (path === "/privacidad" || hash === "#privacidad") {
        setCurrentPath("/privacidad");
      } else if (path === "/aviso-legal" || hash === "#aviso-legal") {
        setCurrentPath("/aviso-legal");
      } else if (path === "/cookies" || hash === "#cookies") {
        setCurrentPath("/cookies");
      } else {
        setCurrentPath("/");
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Update page title dynamically
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

  // Monitor Supabase Authentication session for /leads
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

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(Boolean(session));
      setIsCheckingAuth(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Router navigation helper
  const navigateTo = useCallback((route: string) => {
    try {
      window.history.pushState({}, "", route);
    } catch {
      // Fallback for sandboxed iframes
      window.location.hash = route.replace("/", "#");
    }
    setCurrentPath(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleScrollToForm = useCallback(() => {
    navigateTo("/contacto");
  }, [navigateTo]);

  const handleSelectVehicleFromCatalog = useCallback(
    (vehicleName: string) => {
      setSelectedVehicle(vehicleName);
      navigateTo("/contacto");
    },
    [navigateTo]
  );

  const handleLogout = useCallback(async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setIsAuthenticated(false);
  }, []);

  const handleLoginSuccess = useCallback(() => {
    setIsAuthenticated(true);
  }, []);

  // 1. Privado: /leads
  if (currentPath === "/leads") {
    if (isCheckingAuth) {
      return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-6 h-6 border-2 border-white/20 border-t-[#C8102E] rounded-full animate-spin" />
            <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
              Verificando credenciales...
            </span>
          </div>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <AdminLogin
          onBackToHome={() => navigateTo("/")}
          onLoginSuccess={handleLoginSuccess}
        />
      );
    }

    return (
      <LeadsDashboard
        onBackToHome={() => navigateTo("/")}
        onLogout={handleLogout}
      />
    );
  }

  // Helper to determine legal subpage type
  const legalType: LegalDocType =
    currentPath === "/aviso-legal"
      ? "legal"
      : currentPath === "/cookies"
      ? "cookies"
      : "privacy";

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white antialiased selection:bg-[#C8102E] selection:text-white">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Header with full multi-page navigation */}
      <Header
        currentRoute={currentPath}
        onNavigate={navigateTo}
        onCtaClick={handleScrollToForm}
      />

      <main className="flex-grow">
        {/* Route: /servicio */}
        {currentPath === "/servicio" && (
          <ServicePage onCtaClick={handleScrollToForm} />
        )}

        {/* Route: /proceso */}
        {currentPath === "/proceso" && (
          <ProcessPage onCtaClick={handleScrollToForm} />
        )}

        {/* Route: /importacion */}
        {currentPath === "/importacion" && (
          <ImportPage onCtaClick={handleScrollToForm} />
        )}

        {/* Route: /vehiculos */}
        {currentPath === "/vehiculos" && (
          <VehiclesPage onSelectVehicle={handleSelectVehicleFromCatalog} />
        )}

        {/* Route: /nosotros */}
        {currentPath === "/nosotros" && (
          <AboutPage onCtaClick={handleScrollToForm} />
        )}

        {/* Route: /contacto */}
        {currentPath === "/contacto" && (
          <ContactPage prefilledVehicle={selectedVehicle} />
        )}

        {/* Route: /privacidad, /aviso-legal, /cookies */}
        {(currentPath === "/privacidad" ||
          currentPath === "/aviso-legal" ||
          currentPath === "/cookies") && (
          <LegalPage
            type={legalType}
            onNavigateBack={() => navigateTo("/")}
            onSelectDoc={(t) =>
              navigateTo(`/${t === "legal" ? "aviso-legal" : t}`)
            }
          />
        )}

        {/* Route: / (Home - Showroom Digital Premium) */}
        {currentPath === "/" && (
          <>
            {/* HERO */}
            <Hero
              onCtaClick={handleScrollToForm}
              onProcessClick={() => navigateTo("/proceso")}
            />

            {/* 01 / SHOWROOM — VEHÍCULOS */}
            <ShowroomVehicles
              onNavigateVehicles={() => navigateTo("/vehiculos")}
              onSelectVehicle={handleSelectVehicleFromCatalog}
            />

            {/* 02 / QUÉ SOMOS — PERSONAL CAR SHOPPER */}
            <ShowroomPositioning
              onNavigateService={() => navigateTo("/servicio")}
            />

            {/* 03 / POR QUÉ ALEMANIA */}
            <ShowroomWhyGermany
              onNavigateAdvantages={() => navigateTo("/importacion")}
            />

            {/* 04 / INTELIGENCIA — CRITERIO */}
            <ShowroomIntelligence
              onNavigateMethod={() => navigateTo("/servicio")}
            />

            {/* 05 / PROCESO — 5 ETAPAS */}
            <ShowroomProcess
              onNavigateProcess={() => navigateTo("/proceso")}
            />

            {/* 06 / CONVERSIÓN */}
            <ShowroomConversion
              onCtaClick={handleScrollToForm}
            />

            {/* CIERRE CINEMATOGRÁFICO */}
            <ShowroomClosing
              onCtaClick={handleScrollToForm}
            />
          </>
        )}
      </main>

      {/* Footer with comprehensive links and mandatory disclaimer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLeadForm={handleScrollToForm}
      />
    </div>
  );
}
