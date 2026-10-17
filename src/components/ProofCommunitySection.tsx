"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";

interface CommunityFilm {
  id: string;
  image: string;
}

const films: CommunityFilm[] = [
  { id: "film-01", image: "/assets/community_01.jpg" },
  { id: "film-02", image: "/assets/community_02.jpg" },
  { id: "film-03", image: "/assets/community_03.jpg" },
];

const placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

export default function ProofCommunitySection() {
  const [playingFilm, setPlayingFilm] = useState<CommunityFilm | null>(null);

  return (
    <section className="w-full py-24 bg-[#070708] border-b border-white/10 relative z-10" id="community">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
              <span className="text-white font-semibold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#D44326]" />Lorem ipsum</span>
              <span className="text-white/20">—</span>
              <span className="text-gray-400">Lorem ipsum dolor sit amet</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">Made <span className="font-serif italic font-normal text-gray-200 lowercase">with</span> VISION.</h2>
          </div>
          <div className="font-mono text-xs text-gray-400 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400" /><span>{placeholder}</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {films.map((film) => (
            <button key={film.id} type="button" onClick={() => setPlayingFilm(film)} aria-label="Lorem ipsum" className="group text-left relative rounded-xl bg-[#121215] border border-white/10 overflow-hidden flex flex-col hover:border-white/40 transition-all cursor-pointer shadow-xl">
              <div className="relative w-full h-80 overflow-hidden">
                <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" src={film.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/50" />
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-white font-mono text-xs uppercase"><span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur border border-white/15 text-[10px]">Lorem ipsum</span><span className="font-bold text-white/80">Lorem</span></div>
                <span className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transition-all group-hover:scale-110 shadow-2xl"><Play className="w-6 h-6 fill-black translate-x-0.5" /></span>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/80 font-mono text-xs"><span>Lorem ipsum</span><span className="text-white font-semibold underline underline-offset-2">Lorem ipsum</span></div>
              </div>
              <div className="p-4 bg-[#0F0F12] flex items-center justify-between border-t border-white/5"><div><div className="font-sans text-white font-semibold text-base">Lorem ipsum dolor</div><div className="font-mono text-xs text-gray-500">Lorem ipsum</div></div><span className="font-mono text-xs text-[#D44326] px-2 py-0.5 rounded bg-[#D44326]/10 border border-[#D44326]/20">Lorem ipsum</span></div>
            </button>
          ))}
        </div>
      </div>

      {playingFilm && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-label="Lorem ipsum">
          <div className="bg-[#101014] border border-white/20 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/60"><span className="font-mono text-xs text-[#38bdf8] font-bold">Lorem ipsum</span><button type="button" onClick={() => setPlayingFilm(null)} aria-label="Lorem ipsum" className="text-gray-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"><X className="w-5 h-5" /></button></div>
            <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden"><img src={playingFilm.image} alt="" className="w-full h-full object-cover opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" /><div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 font-mono text-xs text-white"><div className="w-full h-1 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-[#D44326] w-1/3" /></div><div className="flex items-center justify-between"><span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Lorem ipsum dolor</span><span>Lorem ipsum</span></div></div></div>
            <div className="p-6 bg-[#0E0E12] flex flex-col gap-2 font-sans text-sm"><span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Lorem ipsum:</span><p className="text-gray-300 leading-relaxed">{placeholder} {placeholder}</p></div>
          </div>
        </div>
      )}
    </section>
  );
}
