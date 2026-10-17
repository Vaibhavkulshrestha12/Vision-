"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Sun, Moon, Menu, X, Terminal, Layers } from "lucide-react";

interface NavbarProps {
  onOpenApps?: () => void;
  onOpenStudio?: () => void;
}

export default function Navbar({ onOpenApps, onOpenStudio }: NavbarProps) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    let isLight = document.documentElement.dataset.theme === "light";
    try {
      isLight = window.localStorage.getItem("vision-theme") === "light";
    } catch {
      // The theme still works for this session when storage is unavailable.
    }
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
    setLightMode(isLight);
  }, []);

  const toggleTheme = () => {
    setLightMode((current) => {
      const next = !current;
      const theme = next ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      try {
        window.localStorage.setItem("vision-theme", theme);
      } catch {
        // Keep the in-memory theme toggle working when storage is unavailable.
      }
      return next;
    });
  };

  const navigateTo = (id: string, closeMobile = false) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setResourcesOpen(false);
    if (closeMobile) setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060607]/90 backdrop-blur-md border-b border-white/10 select-none">
      <div className="w-full px-4 lg:px-7 h-14 flex items-center justify-between text-xs font-mono tracking-wider uppercase">
        <div className="flex items-center space-x-6 lg:space-x-7">
          <button type="button" onClick={() => navigateTo("hero")} aria-label="Vision home" className="flex items-center text-white hover:opacity-80 transition-opacity font-display font-extrabold text-lg tracking-[0.18em]">
            VISION
          </button>

          <nav className="hidden md:flex items-center space-x-5 lg:space-x-6 text-[11px] tracking-widest font-mono" aria-label="Main navigation">
            <button type="button" onClick={() => navigateTo("hero")} className="px-2.5 py-1 text-white bg-white/10 border border-white/30 rounded font-semibold tracking-wider hover:bg-white/15 transition-all">HOME</button>
            <button type="button" onClick={() => navigateTo("features")} className="nav-motion-link text-gray-400 hover:text-white transition-colors">IMAGE</button>
            <button type="button" onClick={() => navigateTo("features")} className="nav-motion-link text-gray-400 hover:text-white transition-colors">VIDEO</button>

            <div className="relative">
              <button type="button" onClick={() => setResourcesOpen(!resourcesOpen)} className="nav-motion-link text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                <span>RESOURCES</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180 text-white" : ""}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 py-2 bg-[#0E0E12] border border-white/15 rounded-md shadow-2xl backdrop-blur-xl z-50 flex flex-col">
                  <button type="button" onClick={() => navigateTo("features")} className="px-3.5 py-1.5 text-left text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-[10px]">Documentation &amp; Tutorials</button>
                  <button type="button" onClick={() => navigateTo("community")} className="px-3.5 py-1.5 text-left text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-[10px]">Showcase &amp; Gallery</button>
                  <button type="button" onClick={() => setResourcesOpen(false)} className="px-3.5 py-1.5 text-left text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-[10px]">GitHub Repository</button>
                  <button type="button" onClick={() => navigateTo("ownership")} className="px-3.5 py-1.5 text-left text-gray-300 hover:bg-white/10 hover:text-white transition-colors text-[10px]">Architecture Spec</button>
                </div>
              )}
            </div>

            <button type="button" onClick={() => navigateTo("download")} className="nav-motion-link text-gray-400 hover:text-white transition-colors">DOWNLOAD</button>
            <button type="button" onClick={() => navigateTo("ownership")} className="nav-motion-link text-gray-400 hover:text-white transition-colors">SUPPORT</button>
            <div className="h-3 w-[1px] bg-white/20" />
            <button type="button" onClick={onOpenApps} className="nav-motion-link text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer font-bold tracking-wider">
              <Layers className="w-3 h-3 text-[#D44326]" /><span>CRAFT APPS</span>
            </button>
          </nav>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-5">
          <button type="button" onClick={() => navigateTo("ownership")} className="nav-motion-link hidden sm:inline-block text-gray-400 hover:text-white transition-colors font-mono text-[11px] tracking-widest">PRICING</button>
          <span className="text-gray-400 hover:text-white transition-colors" aria-hidden="true">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
          </span>
          <button type="button" aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"} onClick={toggleTheme} className="text-gray-400 hover:text-white transition-colors p-1" title={lightMode ? "Switch to dark theme" : "Switch to light theme"}>
            {lightMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
          </button>
          <button type="button" onClick={onOpenStudio} className="px-4 py-1.5 bg-white text-black font-semibold rounded text-[11px] tracking-wider hover:bg-gray-200 active:scale-95 transition-all shadow-md flex items-center gap-1.5 cursor-pointer">
            <Terminal className="w-3 h-3 text-[#D44326]" /><span>LAUNCH APP</span>
          </button>
          <button type="button" aria-label="Open menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-400 hover:text-white p-1">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0C] border-b border-white/10 px-6 py-4 flex flex-col space-y-3 font-mono text-xs">
          <button type="button" onClick={() => navigateTo("hero", true)} className="text-left text-white py-1">HOME</button>
          <button type="button" onClick={() => navigateTo("features", true)} className="text-left text-gray-400 hover:text-white py-1">IMAGE &amp; VIDEO FEATURES</button>
          <button type="button" onClick={() => navigateTo("ownership", true)} className="text-left text-gray-400 hover:text-white py-1">OWNERSHIP &amp; PRICING</button>
          <button type="button" onClick={() => navigateTo("community", true)} className="text-left text-gray-400 hover:text-white py-1">COMMUNITY FILMS</button>
          <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenApps?.(); }} className="text-left text-gray-300 hover:text-white py-1 flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-[#D44326]" /><span>CRAFT APPS ECOSYSTEM</span></button>
          <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenStudio?.(); }} className="w-full mt-2 py-2 bg-white text-black font-semibold rounded text-center">LAUNCH STUDIO APP</button>
        </div>
      )}
    </header>
  );
}
