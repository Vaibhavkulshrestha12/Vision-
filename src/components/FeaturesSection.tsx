"use client";

import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

interface FeaturesSectionProps {
  onOpenStudio?: () => void;
}

interface FeatureItem {
  id: string;
  image: string;
  heading: string;
}

const featureItems: FeatureItem[] = [
  { id: "feature-01", image: "/assets/feature_location.jpg", heading: "Image to Location" },
  { id: "feature-02", image: "/assets/feature_depth.jpg", heading: "Build scenes with depth" },
  { id: "feature-03", image: "/assets/feature_mixed.jpg", heading: "Precise layered control" },
  { id: "feature-04", image: "/assets/community_03.jpg", heading: "Image to 3D Mesh" },
  { id: "feature-05", image: "/assets/feature_mixed.jpg", heading: "Mix every kind of asset" },
  { id: "feature-06", image: "/assets/feature_posing.jpg", heading: "Character Posing" },
  { id: "feature-07", image: "/assets/feature_cutout.jpg", heading: "Background Removal" },
];

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export default function FeaturesSection({ onOpenStudio }: FeaturesSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);

  return (
    <section className="w-full py-24 bg-[#070708] border-b border-white/10 relative z-10" id="features">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="lg:col-span-12">
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
              <span className="text-white font-semibold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D44326]" />Lorem ipsum</span>
              <span className="text-white/20">—</span>
              <span className="text-gray-400">Lorem ipsum dolor sit amet</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight max-w-4xl">The control that mere <span className="font-serif italic font-normal text-gray-200 lowercase">words</span> cannot buy.</h2>
            <p className="font-sans text-base sm:text-lg text-gray-400 max-w-2xl mt-4 leading-relaxed">{placeholder} {placeholder}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureItems.slice(0, 2).map((feature) => (
            <button key={feature.id} type="button" onClick={() => setSelectedFeature(feature)} aria-label="Lorem ipsum" className="group text-left rounded-xl bg-[#0F0F12] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-4"><span className="text-white font-semibold">Lorem ipsum</span><span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold">Lorem</span></div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-2">{feature.heading}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-xl">{placeholder} {placeholder}</p>
              </div>
              <div className="w-full h-64 sm:h-72 rounded-lg bg-black/70 border border-white/10 overflow-hidden relative mt-6">
                <img src={feature.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/80 text-white font-mono text-[10px] border border-white/20 tracking-wider">Lorem ipsum</span>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {featureItems.slice(2).map((feature) => (
            <button key={feature.id} type="button" onClick={() => setSelectedFeature(feature)} aria-label="Lorem ipsum" className="group text-left rounded-xl bg-[#0F0F12] border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-all cursor-pointer">
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-4"><span className="text-white font-semibold">Lorem ipsum</span><span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono font-bold">Lorem</span></div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">{feature.heading}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">{placeholder}</p>
              </div>
              <div className="w-full h-44 rounded-lg bg-black/60 border border-white/10 overflow-hidden relative mt-6">
                <img src={feature.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 text-white font-mono text-[10px] border border-white/20">Lorem ipsum</span>
              </div>
            </button>
          ))}

          <button type="button" onClick={onOpenStudio} className="group text-left rounded-xl bg-gradient-to-br from-[#121216] to-[#1A1A22] border border-white/20 p-6 flex flex-col justify-between hover:border-white/50 transition-all cursor-pointer shadow-xl">
            <div>
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gray-400 mb-4"><span className="text-white font-semibold flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-[#D44326]" />Lorem ipsum</span><span className="px-2 py-0.5 rounded bg-white text-black font-mono font-bold">Lorem</span></div>
              <h3 className="font-display font-bold text-xl text-white tracking-tight mb-2">Launch the studio</h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">{placeholder} {placeholder}</p>
            </div>
            <div className="w-full h-44 rounded-lg bg-black/40 border border-white/10 p-4 flex flex-col justify-center items-center text-center mt-6 group-hover:bg-black/60 transition-colors">
              <span className="font-mono text-[11px] text-[#38bdf8] mb-1">Lorem ipsum</span>
              <span className="font-display font-bold text-base text-white">Lorem ipsum</span>
              <span className="font-mono text-[10px] text-gray-500 mt-2">{placeholder}</span>
            </div>
          </button>
        </div>
      </div>

      {selectedFeature && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Lorem ipsum">
          <div className="bg-[#121216] border border-white/20 rounded-xl max-w-2xl w-full p-6 relative flex flex-col gap-4 shadow-2xl">
            <button type="button" onClick={() => setSelectedFeature(null)} aria-label="Lorem ipsum" className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"><X className="w-5 h-5" /></button>
            <div className="font-mono text-xs text-gray-400">Lorem ipsum</div>
            <h3 className="font-display font-bold text-2xl text-white">{selectedFeature.heading}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{placeholder} {placeholder}</p>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-white/10 relative"><img src={selectedFeature.image} alt="" className="w-full h-full object-cover" /></div>
            <div className="flex items-center justify-between pt-2 border-t border-white/10 font-mono text-xs"><span className="text-gray-400">Lorem ipsum</span><button type="button" onClick={() => { setSelectedFeature(null); onOpenStudio?.(); }} className="px-4 py-1.5 bg-white text-black font-semibold rounded text-xs hover:bg-gray-200">Lorem ipsum</button></div>
          </div>
        </div>
      )}
    </section>
  );
}
