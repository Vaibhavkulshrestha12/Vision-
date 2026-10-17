"use client";

import React, { useState } from "react";
import { X, Search, Layers, ArrowUpRight } from "lucide-react";

interface CraftAppsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchStudio?: () => void;
}

interface CraftApp {
  id: string;
  name: string;
  category: "2d" | "3d" | "motion" | "layout" | "audio";
  categoryLabel: string;
  desc: string;
  version: string;
  status: "ACTIVE" | "STABLE" | "BETA";
  memory: string;
}

export default function CraftAppsModal({ isOpen, onClose, onLaunchStudio }: CraftAppsModalProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const categories: CraftApp["category"][] = ["2d", "3d", "motion", "layout", "audio"];
  const apps: CraftApp[] = Array.from({ length: 12 }, (_, index) => ({
    id: `app-${index + 1}`,
    name: "Lorem ipsum",
    category: categories[index % categories.length],
    categoryLabel: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    version: "Lorem ipsum",
    status: "ACTIVE",
    memory: "Lorem ipsum",
  }));

  const filteredApps = apps.filter((app) => {
    const matchesCategory = activeFilter === "all" || app.category === activeFilter;
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0B0B0E] border border-white/20 rounded-2xl max-w-6xl w-full min-h-[80vh] flex flex-col shadow-2xl relative my-auto">
        {/* Top Header Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-white/10 text-white border border-white/15">
              <Layers className="w-5 h-5 text-[#D44326]" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <span className="text-[#38bdf8] font-semibold">Lorem ipsum</span>
                <span>•</span>
                <span>Lorem ipsum</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                Lorem ipsum<span className="text-[#D44326]">.</span>
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Lorem ipsum"
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* System Telemetry Monitor Bar */}
        <div className="px-6 py-3 bg-[#111115] border-b border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-semibold">Lorem ipsum</span>
            <span className="text-white/20">|</span>
            <span>Lorem ipsum</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Lorem ipsum</span>
            <span className="text-white/20">|</span>
            <span className="text-[#38bdf8]">Lorem ipsum</span>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/10 bg-[#0E0E12]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none font-mono text-xs">
            {[
              { id: "all", label: "Lorem ipsum" },
              { id: "2d", label: "Lorem ipsum" },
              { id: "3d", label: "Lorem ipsum" },
              { id: "motion", label: "Lorem ipsum" },
              { id: "layout", label: "Lorem ipsum" },
              { id: "audio", label: "Lorem ipsum" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded uppercase font-semibold whitespace-nowrap transition-all ${
                  activeFilter === tab.id
                    ? "bg-white text-black shadow-md"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Lorem ipsum"
              className="w-full pl-9 pr-3 py-1.5 bg-black/60 border border-white/15 rounded font-mono text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#38bdf8]"
            />
          </div>
        </div>

        {/* Apps Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="group rounded-xl bg-[#121216] border border-white/10 p-5 flex flex-col justify-between hover:border-white/30 hover:bg-[#16161c] transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 font-mono text-xs">
                  <span className="text-[#38bdf8] font-bold tracking-wider">
                    {app.categoryLabel}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                    {app.version}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {app.name}
                </h3>

                <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                  {app.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                <span className="text-gray-500">{app.memory}</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onLaunchStudio?.();
                  }}
                  className="px-3 py-1 rounded bg-white/10 text-white hover:bg-white hover:text-black font-semibold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Lorem ipsum</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
