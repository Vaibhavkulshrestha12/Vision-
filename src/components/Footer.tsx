"use client";

import React from "react";
import { Mail } from "lucide-react";

interface FooterProps {
  onOpenApps?: () => void;
  onOpenStudio?: () => void;
}

export default function Footer({ onOpenApps, onOpenStudio }: FooterProps) {
  return (
    <footer className="w-full bg-[#050506] border-t border-white/10 text-gray-400 font-sans text-xs pt-16 pb-12 select-none relative z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-display font-extrabold text-2xl tracking-widest uppercase">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2L2 22h5l2.2-4.5h5.6L17 22h5L12 2zm0 6.2l1.9 4.3h-3.8L12 8.2z" /></svg>
              <span>VISION</span>
            </div>
            <p className="font-sans text-sm text-gray-400 max-w-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="pt-2 inline-flex items-center gap-2 font-mono text-xs text-white"><Mail className="w-4 h-4" /><span>Lorem ipsum</span></div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">PRODUCT</h4>
            <ul className="space-y-2.5">
              <li><span>Lorem ipsum</span></li>
              <li><span>Lorem ipsum dolor</span></li>
              <li><button type="button" onClick={onOpenStudio} className="hover:text-white transition-colors cursor-pointer text-left">Lorem ipsum</button></li>
              <li><span>Lorem ipsum</span></li>
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">CRAFT APPS</h4>
            <ul className="space-y-2.5">
              {[0, 1, 2, 3, 4, 5].map((item) => <li key={item}><button type="button" onClick={onOpenApps} className="hover:text-white transition-colors cursor-pointer text-left">Lorem ipsum</button></li>)}
            </ul>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">COMMUNITY</h4>
            <ul className="space-y-2.5">
              {[0, 1, 2, 3].map((item) => <li key={item}><span>Lorem ipsum</span></li>)}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <div>Lorem ipsum dolor sit amet</div>
          <div className="flex items-center gap-6">
            <span>Lorem ipsum</span><span>Lorem ipsum</span><span>Lorem ipsum</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
