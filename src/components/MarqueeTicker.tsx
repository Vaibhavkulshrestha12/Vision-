"use client";

import React from "react";

const TICKER_ITEMS = [
  "Lorem ipsum",
  "Dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod",
  "Tempor incididunt",
  "Ut labore et dolore",
  "Magna aliqua",
  "Lorem ipsum dolor",
  "Sit amet consectetur",
  "Adipiscing elit sed",
  "Do eiusmod tempor",
  "Incididunt ut labore",
];

export default function MarqueeTicker() {
  return (
    <section className="w-full bg-[#0B0B0D] border-y border-white/10 py-3 overflow-hidden select-none z-20 relative">
      <div className="relative flex w-full overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-wider text-gray-400">
          {/* Double loop for seamless infinite marquee scroll */}
          {TICKER_ITEMS.concat(TICKER_ITEMS).map((item, index) => (
            <span key={`ticker-${index}`} className="flex items-center gap-3">
              <span className="text-[#D44326] text-[10px]">▪</span>
              <span className="hover:text-white transition-colors cursor-default">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
