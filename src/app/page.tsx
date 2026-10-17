"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import OrbitalHero from "@/components/OrbitalHero";
import MetricRulerSlider from "@/components/MetricRulerSlider";
import MarqueeTicker from "@/components/MarqueeTicker";
import FeaturesSection from "@/components/FeaturesSection";
import OwnershipSection from "@/components/OwnershipSection";
import ProofCommunitySection from "@/components/ProofCommunitySection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";
import CraftAppsModal from "@/components/CraftAppsModal";
import StudioModal from "@/components/StudioModal";

export default function Home() {
  const [appsModalOpen, setAppsModalOpen] = useState(false);
  const [studioModalOpen, setStudioModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#060607] text-[#f2f1ee] flex flex-col selection:bg-white selection:text-black">
      {/* 1. TOP NAVIGATION */}
      <Navbar
        onOpenApps={() => setAppsModalOpen(true)}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* 2. SIGNATURE METRIC CALIBRATION RULER & TEXT TRAJECTORY SLIDER */}
      <MetricRulerSlider />

      {/* 3. MAIN APPLICATION FLOW */}
      <main className="w-full flex-1 flex flex-col">
        {/* Hero with 3D Distorted Orbital Engine & Wordmark */}
        <OrbitalHero onOpenStudio={() => setStudioModalOpen(true)} />

        {/* Continuous Running Marquee */}
        <MarqueeTicker />

        {/* Section 01: Crafting Features */}
        <FeaturesSection onOpenStudio={() => setStudioModalOpen(true)} />

        {/* Section 02: Ownership & Pricing */}
        <OwnershipSection />

        {/* Section 03: Community Proof & Short Films */}
        <ProofCommunitySection />

        {/* Section 04: Get Started / Download */}
        <GetStartedSection onOpenStudio={() => setStudioModalOpen(true)} />
      </main>

      {/* 4. FOOTER */}
      <Footer
        onOpenApps={() => setAppsModalOpen(true)}
        onOpenStudio={() => setStudioModalOpen(true)}
      />

      {/* 5. INTERACTIVE MODALS */}
      <CraftAppsModal
        isOpen={appsModalOpen}
        onClose={() => setAppsModalOpen(false)}
        onLaunchStudio={() => {
          setAppsModalOpen(false);
          setStudioModalOpen(true);
        }}
      />

      <StudioModal
        isOpen={studioModalOpen}
        onClose={() => setStudioModalOpen(false)}
      />
    </div>
  );
}
