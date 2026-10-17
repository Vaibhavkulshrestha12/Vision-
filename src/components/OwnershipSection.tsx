"use client";

import React, { useState } from "react";
import { LockOpen, ShieldCheck } from "lucide-react";

export default function OwnershipSection() {
  const [activePlatform, setActivePlatform] = useState<"silicon" | "vulkan" | "directml">("silicon");

  const platformSpecs = {
    silicon: {
      backend: "Lorem ipsum dolor sit amet",
      memoryBandwidth: "Lorem ipsum dolor sit amet",
      precision: "Lorem ipsum dolor sit amet",
      recommended: "Lorem ipsum dolor sit amet",
    },
    vulkan: {
      backend: "Lorem ipsum dolor sit amet",
      memoryBandwidth: "Lorem ipsum dolor sit amet",
      precision: "Lorem ipsum dolor sit amet",
      recommended: "Lorem ipsum dolor sit amet",
    },
    directml: {
      backend: "Lorem ipsum dolor sit amet",
      memoryBandwidth: "Lorem ipsum dolor sit amet",
      precision: "Lorem ipsum dolor sit amet",
      recommended: "Lorem ipsum dolor sit amet",
    },
  };

  return (
    <section className="w-full py-24 bg-[#09090C] border-b border-white/10 relative z-10" id="ownership">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 border-b border-white/10 pb-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D44326]"></span>
                Lorem ipsum
              </span>
              <span className="text-white/20">—</span>
              <span className="text-gray-400">Lorem ipsum dolor sit amet</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight max-w-3xl">
              Stop renting from websites.
              <span className="font-serif italic font-normal text-gray-300 block lowercase text-2xl sm:text-4xl mt-2">
                own your creative tools.
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Technical Protocol Telemetry Card */}
          <div className="lg:col-span-4 bg-[#111115] border border-white/15 p-6 rounded-xl flex flex-col gap-3 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                Lorem ipsum
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Lorem ipsum
              </span>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs pt-1">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 uppercase">Lorem ipsum:</span>
                <span className="text-white font-bold">Lorem ipsum</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 uppercase">Lorem ipsum:</span>
                <span className="text-white font-bold">Lorem ipsum</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-gray-500 uppercase">Lorem ipsum:</span>
                <span className="text-emerald-400 font-bold">Lorem ipsum</span>
              </div>
              <div className="flex justify-between py-2 bg-[#060607] px-3 rounded mt-1 border border-white/10">
                <span className="text-gray-400 uppercase">Lorem ipsum:</span>
                <span className="text-emerald-400 font-extrabold tracking-wider">Lorem ipsum</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards: A, B, C */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card A: Open Source */}
          <div className="bg-[#121216] border border-white/10 p-7 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white/30 transition-all shadow-lg group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-6">
                <span className="w-9 h-9 rounded bg-white/10 text-white font-mono font-bold flex items-center justify-center border border-white/15 text-sm">
                  Lorem
                </span>
                <span className="text-[#D44326] font-mono font-bold px-2 py-0.5 rounded bg-[#D44326]/10 border border-[#D44326]/20">
                  Lorem ipsum
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-3">
                Open source
              </h3>

              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="pt-8">
              <span className="inline-flex items-center gap-2 font-mono text-xs text-white uppercase tracking-wider"><span>Lorem ipsum dolor sit amet</span></span>
            </div>
          </div>

          {/* Card B: Yours Forever */}
          <div className="bg-[#121216] border border-white/10 p-7 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white/30 transition-all shadow-lg group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-6">
                <span className="w-9 h-9 rounded bg-white/10 text-white font-mono font-bold flex items-center justify-center border border-white/15 text-sm">
                  Lorem
                </span>
                <span className="text-gray-400 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Lorem ipsum
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-3">
                Yours forever
              </h3>

              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase">
                <LockOpen className="w-4 h-4" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
          </div>

          {/* Card C: No Middleman */}
          <div className="bg-[#121216] border border-white/10 p-7 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white/30 transition-all shadow-lg group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-6">
                <span className="w-9 h-9 rounded bg-white/10 text-white font-mono font-bold flex items-center justify-center border border-white/15 text-sm">
                  Lorem
                </span>
                <span className="text-gray-400 font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  Lorem ipsum
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-3">
                No middleman
              </h3>

              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="pt-8">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-white/80 uppercase">
                <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                <span>Lorem ipsum dolor sit amet</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Platform Specification Switcher (From Screen 3) */}
        <div className="mt-12 bg-[#121216] border border-white/10 rounded-xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                Lorem ipsum
              </span>
              <h4 className="font-display font-bold text-xl text-white uppercase mt-1">
                Zero-Overhead Direct GPU Acceleration
              </h4>
            </div>

            {/* Platform Toggle Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-black/60 rounded-lg border border-white/10">
              <button
                type="button"
                onClick={() => setActivePlatform("silicon")}
                className={`px-3 py-1.5 font-mono text-xs uppercase rounded transition-all ${
                  activePlatform === "silicon"
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Lorem ipsum
              </button>
              <button
                type="button"
                onClick={() => setActivePlatform("vulkan")}
                className={`px-3 py-1.5 font-mono text-xs uppercase rounded transition-all ${
                  activePlatform === "vulkan"
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Lorem ipsum
              </button>
              <button
                type="button"
                onClick={() => setActivePlatform("directml")}
                className={`px-3 py-1.5 font-mono text-xs uppercase rounded transition-all ${
                  activePlatform === "directml"
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Lorem ipsum
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 font-mono text-xs">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-gray-500 uppercase block mb-1">Lorem ipsum:</span>
              <span className="text-white font-semibold">{platformSpecs[activePlatform].backend}</span>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-gray-500 uppercase block mb-1">Lorem ipsum:</span>
              <span className="text-[#38bdf8] font-semibold">{platformSpecs[activePlatform].memoryBandwidth}</span>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-gray-500 uppercase block mb-1">Lorem ipsum:</span>
              <span className="text-white font-semibold">{platformSpecs[activePlatform].precision}</span>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-white/5">
              <span className="text-gray-500 uppercase block mb-1">Lorem ipsum:</span>
              <span className="text-emerald-400 font-semibold">{platformSpecs[activePlatform].recommended}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
