"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SectionInfo {
  id: string;
  label: string;
  tickMark: number;
  initialTop: number;
}

const SECTIONS: SectionInfo[] = [
  { id: "features", label: "FEATURES", tickMark: 15, initialTop: 87 },
  { id: "ownership", label: "OWNERSHIP", tickMark: 60, initialTop: 92 },
  { id: "community", label: "COMMUNITY", tickMark: 70, initialTop: 94 },
  { id: "download", label: "GET STARTED", tickMark: 80, initialTop: 96 },
];

// All graduation ticks from 0 to 100
const RULER_TICKS = Array.from({ length: 101 }, (_, i) => i);

export default function MetricRulerSlider() {
  const [hoverPct, setHoverPct] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const rulerTrackRef = useRef<HTMLDivElement>(null);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const viewportWindowRef = useRef<HTMLDivElement>(null);
  const tickRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(0);
  const scaleExpansionRef = useRef({ value: 0 });
  const sectionLabelRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionDocumentTopsRef = useRef<number[]>([]);

  const updateRulerScale = useCallback((progress: number, expansion: number) => {
    const current = Math.max(0, Math.min(progress, 1));
    const expanded = Math.max(0, Math.min(expansion, 1));
    const progressPct = current * 100;
    // The idle rail is a 12 point window that follows the current scroll value.
    // Hovering reveals the full document scale, as in the supplied reference.
    const rangeStart = Math.min(progressPct * 0.9, 88);
    const rangeSize = 12;
    const zoomMarker = Math.max(0, Math.min(100, ((progressPct - rangeStart) / rangeSize) * 100));
    const markerTop = zoomMarker + (progressPct - zoomMarker) * expanded;

    tickRefs.current.forEach((tick, index) => {
      if (!tick) return;
      const value = RULER_TICKS[index];
      const zoomTop = ((value - rangeStart) / rangeSize) * 100;
      const top = zoomTop + (value - zoomTop) * expanded;
      tick.style.top = `${top}%`;
      const visibleInZoom = zoomTop >= -4 && zoomTop <= 104;
      tick.style.opacity = visibleInZoom ? "1" : `${expanded}`;
    });

    if (progressIndicatorRef.current) progressIndicatorRef.current.style.top = `${markerTop}%`;
    if (percentageRef.current) {
      percentageRef.current.textContent = `${Math.round(progressPct).toString().padStart(3, "0")}%`;
    }
    if (viewportWindowRef.current) viewportWindowRef.current.style.opacity = `${expanded}`;
  }, []);

  const updateSectionLabelPositions = useCallback((progress: number, expansion = 0) => {
    const pct = progress * 100;
    const blend = Math.max(0, Math.min(expansion, 1));
    const clamp01 = (value: number) => Math.max(0, Math.min(value, 1));
    const lerp = (start: number, end: number, amount: number) => start + (end - start) * clamp01(amount);

    SECTIONS.forEach((section, index) => {
      const label = sectionLabelRefs.current[index];
      if (!label) return;

      let top = section.tickMark;
      let rotation = 0;
      let opacity = 1;
      let x = 0;

      if (section.id === "features") {
        if (pct <= 7) {
          const phase = pct / 7;
          top = lerp(87, 72, phase);
          rotation = -90 * phase;
          x = -18 * phase;
        } else if (pct <= 10) {
          const phase = (pct - 7) / 3;
          top = lerp(72, 52, phase);
          rotation = -90;
          x = -18;
        } else if (pct <= 14) {
          const phase = (pct - 10) / 4;
          top = lerp(52, 12, phase);
          rotation = lerp(-90, 0, phase);
          opacity = 1 - phase;
          x = lerp(-18, 0, phase);
        } else {
          top = 12;
          rotation = 0;
          opacity = 0;
          x = 0;
        }
      } else {
        if (section.id === "ownership") {
          if (pct < 58) {
            top = lerp(90, 88, pct / 58);
          } else if (pct <= 62) {
            const phase = (pct - 58) / 4;
            top = lerp(88, 52, phase);
            rotation = -90 * phase;
            x = -18 * phase;
          } else if (pct <= 67) {
            const phase = (pct - 62) / 5;
            top = lerp(52, 12, phase);
            rotation = lerp(-90, 0, phase);
            opacity = 1 - phase;
            x = lerp(-18, 0, phase);
          } else {
            top = 12;
            opacity = 0;
          }
        } else if (section.id === "community") {
          if (pct < 70) {
            top = lerp(93, 91, pct / 70);
          } else if (pct <= 75) {
            const phase = (pct - 70) / 5;
            top = lerp(91, 52, phase);
            rotation = -90 * phase;
            x = -18 * phase;
          } else if (pct <= 82) {
            top = 52;
            rotation = -90;
            x = -18;
          } else if (pct <= 87) {
            const phase = (pct - 82) / 5;
            top = lerp(52, 12, phase);
            rotation = lerp(-90, 0, phase);
            opacity = 1 - phase;
            x = lerp(-18, 0, phase);
          } else {
            top = 12;
            opacity = 0;
          }
        } else {
          if (pct < 80) {
            top = lerp(96, 94, pct / 80);
          } else if (pct <= 85) {
            const phase = (pct - 80) / 5;
            top = lerp(94, 52, phase);
            rotation = -90 * phase;
            x = -18 * phase;
          } else if (pct <= 91) {
            top = 52;
            rotation = -90;
            x = -18;
          } else if (pct <= 96) {
            const phase = (pct - 91) / 5;
            top = lerp(52, 12, phase);
            rotation = lerp(-90, 0, phase);
            opacity = 1 - phase;
            x = lerp(-18, 0, phase);
          } else {
            top = 12;
            opacity = 0;
          }
        }
      }

      top = lerp(top, section.tickMark, blend);
      rotation = lerp(rotation, 0, blend);
      opacity = lerp(opacity, 1, blend);
      x = lerp(x, 0, blend);
      label.style.top = `${top}%`;
      label.style.opacity = `${opacity}`;
      label.style.transform = `translate(${x}px, -50%) rotate(${rotation}deg)`;
    });
  }, []);

  // Drive every ruler readout from the same normalized document scroll value.
  const updateScrollTelemetry = useCallback((progress = 0) => {
    if (typeof window === "undefined") return;

    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const normalized = Math.max(0, Math.min(progress, 1));
    const visiblePct = Math.min(100, Math.max(4, (winHeight / Math.max(docHeight, 1)) * 100));
    // Keep the viewport window centered on the same percentage line/readout.
    const windowTop = Math.max(0, Math.min(100 - visiblePct, normalized * 100 - visiblePct / 2));

    if (viewportWindowRef.current) {
      viewportWindowRef.current.style.top = `${windowTop}%`;
      viewportWindowRef.current.style.height = `${visiblePct}%`;
    }

    const sectionTops = sectionDocumentTopsRef.current;
    // Keep labels on their designed ruler stations as the active section changes.
    const triggerOffset = winHeight * 0.35;
    let activeIdx = -1;
    for (let index = 0; index < sectionTops.length; index += 1) {
      if (sectionTops[index] - scrollY <= triggerOffset) activeIdx = index;
    }
    sectionLabelRefs.current.forEach((label, index) => {
      label?.classList.toggle("is-active", index === activeIdx);
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const measureSectionTops = () => {
      sectionDocumentTopsRef.current = SECTIONS.map((section) => {
        const element = document.getElementById(section.id);
        return element ? element.getBoundingClientRect().top + window.scrollY : 0;
      });
      const maxScroll = ScrollTrigger.maxScroll(window);
      updateSectionLabelPositions(maxScroll > 0 ? window.scrollY / maxScroll : 0);
      updateScrollTelemetry(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    const updateFromProgress = (progress: number) => {
      const normalized = Math.max(0, Math.min(progress, 1));
      progressRef.current = normalized;
      updateRulerScale(normalized, scaleExpansionRef.current.value);
      updateSectionLabelPositions(normalized, scaleExpansionRef.current.value);
      updateScrollTelemetry(normalized);
    };
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: 0,
      end: "max",
      onRefresh: (self) => {
        measureSectionTops();
        updateFromProgress(self.progress);
      },
    });
    let scrollFrame = 0;
    const onScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;
        const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
        updateFromProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
      });
    };
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      trigger.kill();
    };
  }, [updateRulerScale, updateSectionLabelPositions, updateScrollTelemetry]);

  useEffect(() => {
    const tween = gsap.to(scaleExpansionRef.current, {
      value: isHovering || isDragging ? 1 : 0,
      duration: 0.26,
      ease: "power2.out",
      overwrite: true,
      onUpdate: () => {
        const expansion = scaleExpansionRef.current.value;
        updateRulerScale(progressRef.current, expansion);
        updateSectionLabelPositions(progressRef.current, expansion);
      },
    });
    return () => { tween.kill(); };
  }, [isDragging, isHovering, updateRulerScale, updateSectionLabelPositions]);

  // Smooth scroll to a section by element ID
  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate percentage from client Y on the ruler track
  const getPercentageFromY = (clientY: number) => {
    if (!rulerTrackRef.current) return 0;
    const rect = rulerTrackRef.current.getBoundingClientRect();
    const clampedY = Math.min(Math.max(clientY, rect.top), rect.bottom);
    const pct = ((clampedY - rect.top) / rect.height) * 100;
    return Math.min(Math.max(pct, 0), 100);
  };

  // Scroll window to specific percentage
  const scrollToPercentage = (pct: number, smooth = false) => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(docHeight - winHeight, 0);
    const targetY = (pct / 100) * maxScroll;

    window.scrollTo({
      top: targetY,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Hover tracking
  const handleMouseMove = (e: React.MouseEvent) => {
    const pct = getPercentageFromY(e.clientY);
    setHoverPct(pct);
  };

  // Scrubbing via click or drag
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    const pct = getPercentageFromY(e.clientY);
    scrollToPercentage(pct, false);

    const onGlobalMouseMove = (moveEvent: MouseEvent) => {
      const movePct = getPercentageFromY(moveEvent.clientY);
      setHoverPct(movePct);
      scrollToPercentage(movePct, false);
    };

    const onGlobalMouseUp = (upEvent: MouseEvent) => {
      setIsDragging(false);
      const rect = rulerTrackRef.current?.getBoundingClientRect();
      const stillOverTrack = !!rect && upEvent.clientX >= rect.left && upEvent.clientX <= rect.right && upEvent.clientY >= rect.top && upEvent.clientY <= rect.bottom;
      setIsHovering(stillOverTrack);
      if (!stillOverTrack) setHoverPct(null);
      window.removeEventListener("mousemove", onGlobalMouseMove);
      window.removeEventListener("mouseup", onGlobalMouseUp);
    };

    window.addEventListener("mousemove", onGlobalMouseMove);
    window.addEventListener("mouseup", onGlobalMouseUp);
  };

  return (
    <aside
      id="metric-ruler-aside"
      className="fixed right-0 top-14 bottom-2 z-40 select-none flex items-stretch pointer-events-none metric-ruler"
      style={{ width: "min(260px, 100vw)" }}
    >
      {/* 1. LEFT SECTION LABELS & VERTICAL GUIDELINE AXIS */}
      <div className="metric-ruler-labels relative flex-1">
        {/* Continuous thin vertical guideline axis that intersects section labels */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/15" />

        {/* Section labels positioned along the vertical axis at their exact percentages */}
        {SECTIONS.map((sec, idx) => {
          return (
            <button
              key={sec.id}
              ref={(node) => { sectionLabelRefs.current[idx] = node; }}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              aria-label={`Scroll to ${sec.label}`}
              className="metric-ruler-section absolute right-0 -translate-y-1/2 pointer-events-auto cursor-pointer group flex items-center justify-center bg-transparent border-0"
              style={{
                top: `${sec.initialTop}%`,
                transform: "translateY(-50%)",
              }}
            >
              {/* Horizontal cross-line accent under section if desired */}
              {sec.id === "download" && (
                <div className="absolute right-full w-24 h-[1px] bg-white/10 pointer-events-none mr-2" />
              )}

              <span
                className="font-display font-extrabold uppercase tracking-wider text-[15px] sm:text-base px-2 py-0.5 whitespace-nowrap transition-all text-zinc-400/70 group-hover:text-white"
              >
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. GAP / OFFSET BETWEEN GUIDELINE AXIS AND SCALE */}
      <div className="metric-ruler-gap w-8 sm:w-12 relative">
        {/* Subtle horizontal grid lines at key milestones */}
        <div className="absolute top-[80%] left-0 right-0 h-[1px] bg-white/10" />
      </div>

      {/* 3. THE ACCURATE METRIC RULER SCALE (0 to 100) */}
      <div
        ref={rulerTrackRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          if (!isDragging) setHoverPct(null);
        }}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        className="metric-ruler-track relative w-[44px] sm:w-[58px] md:w-[70px] h-full flex flex-col pointer-events-auto cursor-crosshair select-none"
      >
        {/* 3A. HIGHLIGHTED PROPORTION (FROSTED VIEWPORT WINDOW ON THE ENTIRE DOCUMENT) */}
        <div
          ref={viewportWindowRef}
          className="metric-ruler-viewport-window absolute right-0 pointer-events-none select-none"
          style={{
            top: "0%",
            height: "18%",
            opacity: 0,
            width: "calc(100% + 28px)",
            left: "-28px",
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.22)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.22)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.45)",
          }}
        />

        {/* 3B. ACTIVE SCROLL INDICATOR BLUE LINE & CYAN PERCENTAGE READOUT */}
        <div
          ref={progressIndicatorRef}
          className="absolute right-0 pointer-events-none select-none z-20 flex flex-col items-end"
          style={{
            top: "0%",
            transform: "translateY(-50%)",
            width: "100%",
          }}
        >
          {/* Bright blue indicator line spanning across the scale */}
          <div className="metric-ruler-progress-line w-full h-[2px] bg-[#2563eb] shadow-[0_0_8px_#38bdf8]" />

          {/* Cyan percentage telemetry readout directly beneath the line */}
          <div ref={percentageRef} className="pr-1.5 pt-0.5 font-mono text-[9px] sm:text-[10px] text-[#38bdf8] font-bold tracking-tight select-none leading-none">
            000%
          </div>
        </div>

        {/* 3C. INTERACTIVE WHITE HOVER / SCRUB INDICATOR LINE */}
        {(isHovering || isDragging) && hoverPct !== null && (
          <div
            className="metric-ruler-crosshair absolute right-0 pointer-events-none select-none z-30 flex items-center justify-end"
            style={{
              top: `${hoverPct}%`,
              transform: "translateY(-50%)",
              width: "109%",
            }}
          >
            {/* Solid white horizontal bar extending across the scale and vertical guideline */}
            <div className="w-full h-[2px] bg-white relative flex items-center justify-end shadow-[0_0_6px_rgba(255,255,255,0.7)]">
              {/* Technical crosshair indicator '+' positioned over the scale track */}
              <span className="absolute right-5 text-white text-[11px] font-bold leading-none select-none">
                +
              </span>
            </div>
          </div>
        )}

        {/* 3D. 101 PRECISE GRADUATION TICKS & NUMBERS (0 to 100) */}
        {RULER_TICKS.map((val) => {
          const isMajor = val % 5 === 0;
          const topPct = val / 12 * 100;

          return (
            <div
              key={`tick-${val}`}
              ref={(node) => { tickRefs.current[val] = node; }}
              className="absolute right-0 flex items-center justify-end"
              style={{
                top: `${topPct}%`,
                opacity: topPct <= 104 ? 1 : 0,
                transform: "translateY(-50%)",
              }}
            >
              {/* Number label for every multiple of 5 (0, 5, 10, 15, ... 100) */}
              {isMajor && (
                <span className="font-mono text-[9px] sm:text-[10px] text-zinc-400 font-medium select-none pr-1.5 tabular-nums leading-none">
                  {val}
                </span>
              )}

              {/* Graduation hash line */}
              <div
                className={`transition-colors ${
                  isMajor
                    ? "w-5 sm:w-6 h-[1.5px] bg-white/70"
                    : "w-2.5 sm:w-3 h-[1px] bg-white/25"
                }`}
              />
            </div>
          );
        })}
      </div>
    </aside>
  );
}
