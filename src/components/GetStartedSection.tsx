"use client";

import React, { useState } from "react";
import { Monitor, Terminal, Copy, Check } from "lucide-react";

interface GetStartedProps {
  onOpenStudio?: () => void;
}

export default function GetStartedSection({ onOpenStudio }: GetStartedProps) {
  const [copiedCurl, setCopiedCurl] = useState(false);

  const curlCommand = "Lorem ipsum dolor sit amet";

  const handleCopy = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  return (
    <section className="w-full py-24 bg-[#08080A] relative z-10" id="download">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-[#111114] border border-white/15 p-8 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle dot matrix background texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Lorem ipsum dolor sit amet</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight">
                Start crafting.
              </h2>

              <p className="font-sans text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all shadow-xl active:scale-95"
                >
                  {/* Apple Icon */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.6-1.04 1.1-2.46.9-3.87-1.18.06-2.6 1-3.32 2.06-.57.85-1.06 2.3-0.86 3.7 1.34.1 2.68-.85 3.28-1.89z" />
                  </svg>
                  <Monitor className="w-4 h-4" />
                  <span>Lorem ipsum</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenStudio}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded border border-white/25 bg-black/60 text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all shadow-lg active:scale-95 cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-[#D44326]" />
                  <span>Lorem ipsum</span>
                </button>
              </div>

              {/* Quick CLI Install command */}
              <div className="pt-4 max-w-lg">
                <span className="font-mono text-[11px] text-gray-500 uppercase block mb-1.5">
                  Lorem ipsum:
                </span>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/60 border border-white/15 font-mono text-xs text-gray-300">
                  <span className="text-emerald-400 select-all">{curlCommand}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-1.5 rounded hover:bg-white/10 text-gray-400 hover:text-white transition-colors ml-2"
                    title="Lorem ipsum"
                  >
                    {copiedCurl ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Platform Matrix Card */}
            <div className="lg:col-span-4 bg-black/50 border border-white/10 rounded-xl p-6 font-mono text-xs text-gray-400 flex flex-col gap-3">
              <div className="text-white font-bold pb-2 border-b border-white/10 uppercase tracking-widest flex items-center justify-between">
                <span>Lorem ipsum</span>
                <span className="text-[#38bdf8] text-[10px]">Lorem ipsum</span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Lorem ipsum</span>
                <span className="text-white">Lorem ipsum</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Lorem ipsum</span>
                <span className="text-gray-400">Lorem ipsum</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Lorem ipsum</span>
                <span className="text-white">Lorem ipsum</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-gray-300">Lorem ipsum</span>
                <span className="text-gray-400">Lorem ipsum</span>
              </div>

              <div className="mt-2 p-3 bg-white/5 rounded border border-white/5 flex items-center justify-between text-[11px]">
                <span>Lorem ipsum</span>
                <span className="text-gray-400 font-mono text-[9px]">Lorem ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
