"use client";

import React, { useState } from "react";
import { X, Play } from "lucide-react";

interface StudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudioModal({ isOpen, onClose }: StudioModalProps) {
  const [activeTab, setActiveTab] = useState<"2d" | "3d" | "timeline" | "nodes">("3d");
  const [isRendering, setIsRendering] = useState(false);
  const [renderProgress, setRenderProgress] = useState(0);

  if (!isOpen) return null;

  const handleRender = () => {
    setIsRendering(true);
    setRenderProgress(10);
    const interval = setInterval(() => {
      setRenderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsRendering(false), 800);
          return 100;
        }
        return prev + 15;
      });
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col select-none overflow-hidden text-gray-200 font-sans">
      {/* 1. TOP STUDIO TOOLBAR (Matching Screen 4) */}
      <header className="h-14 bg-[#0B0B0E] border-b border-white/15 px-4 flex items-center justify-between gap-4 z-20">
        {/* Left: Breadcrumbs & Model Spec */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <button
            type="button"
            onClick={onClose}
            aria-label="Lorem ipsum"
            className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#15151B] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#D44326] animate-pulse"></span>
            <span className="text-white font-bold uppercase">Lorem ipsum</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">Lorem ipsum</span>
          </div>

          <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300 text-[11px] hidden sm:inline">
            Lorem ipsum
          </span>
        </div>

        {/* Center: Viewport Mode Pills */}
        <div className="flex items-center p-1 rounded-lg bg-black/60 border border-white/10 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("2d")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "2d" ? "bg-white text-black font-bold shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Lorem ipsum
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("3d")}
            className={`px-3 py-1 rounded transition-all flex items-center gap-1.5 ${
              activeTab === "3d" ? "bg-white text-black font-bold shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D44326]"></span>
            <span>Lorem ipsum</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "timeline" ? "bg-white text-black font-bold shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Lorem ipsum
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("nodes")}
            className={`px-3 py-1 rounded transition-all ${
              activeTab === "nodes" ? "bg-white text-black font-bold shadow" : "text-gray-400 hover:text-white"
            }`}
          >
            Lorem ipsum
          </button>
        </div>

        {/* Right: GPU Telemetry & Render Button */}
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded bg-[#15151B] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-gray-400">Lorem ipsum</span>
            <span className="text-white font-bold">Lorem ipsum</span>
          </div>

          <button
            type="button"
            onClick={handleRender}
            disabled={isRendering}
            className="px-4 py-1.5 bg-white text-black font-bold rounded text-xs tracking-wider hover:bg-gray-200 active:scale-95 transition-all flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-black" />
            <span>{isRendering ? `Lorem ipsum ${renderProgress}%` : "Lorem ipsum"}</span>
          </button>
        </div>
      </header>

      {/* 2. THREE-PANE STUDIO INTERFACE */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden bg-[#060608]">
        {/* Left Pane: Asset Bin & Hierarchy */}
        <aside className="col-span-12 lg:col-span-3 border-r border-white/10 p-4 flex flex-col gap-4 bg-[#0C0C0F] overflow-y-auto">
          <div className="flex items-center justify-between font-mono text-xs text-gray-400 pb-2 border-b border-white/10">
            <span className="text-white font-bold uppercase tracking-wider">Lorem ipsum</span>
            <span className="text-gray-500">Lorem ipsum</span>
          </div>

          {/* Asset Items */}
          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-black/60 border border-white/10 hover:border-white/30 transition-all cursor-pointer">
              <div className="flex items-center justify-between text-white font-semibold mb-1">
                <span>Lorem ipsum</span>
                <span className="text-emerald-400 text-[10px]">Lorem ipsum</span>
              </div>
              <p className="text-gray-400 text-[11px] font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-black/60 border border-white/10 hover:border-white/30 transition-all cursor-pointer">
              <div className="flex items-center justify-between text-white font-semibold mb-1">
                <span>Lorem ipsum</span>
                <span className="text-[#38bdf8] text-[10px]">Lorem ipsum</span>
              </div>
              <p className="text-gray-400 text-[11px] font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-black/60 border border-white/10 hover:border-white/30 transition-all cursor-pointer">
              <div className="flex items-center justify-between text-white font-semibold mb-1">
                <span>Lorem ipsum</span>
                <span className="text-[#D44326] text-[10px]">Lorem ipsum</span>
              </div>
              <p className="text-gray-400 text-[11px] font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </aside>

        {/* Center Viewport: Interactive 3D Canvas Stage */}
        <main className="col-span-12 lg:col-span-6 relative flex items-center justify-center bg-black overflow-hidden p-6">
          {/* Grid lines background */}
          <div
            className="studio-editor-grid absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Active 3D Scene Viewport Simulator */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-[#09090C]">
            <img
              src="/assets/feature_depth.jpg"
              alt=""
              className="w-full h-full object-cover opacity-85"
            />

            {/* Bounding Box Overlays */}
            <div className="absolute inset-8 border border-[#38bdf8]/60 rounded pointer-events-none flex flex-col justify-between p-2">
              <div className="flex justify-between font-mono text-[10px] text-[#38bdf8]">
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
              </div>
              <div className="flex justify-between font-mono text-[10px] text-[#38bdf8]">
                <span>Lorem ipsum</span>
                <span>Lorem ipsum</span>
              </div>
            </div>

            {/* Crosshair Center */}
            <div className="absolute inset-0 m-auto w-6 h-6 border border-white/40 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-1.5 h-1.5 bg-[#D44326] rounded-full"></div>
            </div>
          </div>
        </main>

        {/* Right Pane: Tensor & Latent Inspector */}
        <aside className="col-span-12 lg:col-span-3 border-l border-white/10 p-4 flex flex-col gap-4 bg-[#0C0C0F] overflow-y-auto font-mono text-xs">
          <div className="flex items-center justify-between text-white font-bold pb-2 border-b border-white/10 uppercase tracking-wider">
            <span>Lorem ipsum</span>
            <span className="text-[#38bdf8]">Lorem ipsum</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-gray-400 block mb-1">Lorem ipsum:</label>
              <textarea
                readOnly
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                className="w-full h-20 p-2.5 rounded bg-black/60 border border-white/10 text-gray-200 text-xs font-mono resize-none focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Lorem ipsum:</span>
                <span className="text-white">65%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="65" className="w-full accent-[#38bdf8]" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Lorem ipsum:</span>
                <span className="text-white">42%</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="42" className="w-full accent-[#D44326]" />
            </div>

            <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-1 text-[11px]">
              <div className="text-gray-400">Lorem ipsum</div>
              <div className="text-gray-400">Lorem ipsum</div>
              <div className="text-gray-400">Lorem ipsum</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
