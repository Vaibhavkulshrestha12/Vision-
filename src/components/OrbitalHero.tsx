"use client";

import React, { useLayoutEffect, useRef } from "react";
import { Monitor } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface OrbitalHeroProps {
  onOpenStudio?: () => void;
}

interface MediaCardData {
  src: string;
  alt: string;
  left: number;
  top: number;
  width: number;
  ratio: number;
  endX: number;
  endY: number;
  start: number;
  end: number;
  rotation: number;
  endRotation: number;
  scale: number;
  endScale: number;
  opacity: number;
  endOpacity: number;
}

// Each card has its own scroll interval and destination. Values are measured
// against the hero viewport so refreshes recalculate cleanly at each breakpoint.
const CARDS: MediaCardData[] = [
  { src: "/assets/feature_depth.jpg", alt: "", left: 14, top: 21, width: 23, ratio: 1.45, endX: 36, endY: 10, start: 0, end: 0.62, rotation: -8, endRotation: 3, scale: 0.92, endScale: 0.72, opacity: 0.9, endOpacity: 0 },
  { src: "/assets/feature_location.jpg", alt: "", left: 83, top: 23, width: 24, ratio: 1.42, endX: 61, endY: 12, start: 0, end: 0.7, rotation: 7, endRotation: -4, scale: 0.84, endScale: 1.02, opacity: 0.78, endOpacity: 0.15 },
  { src: "/assets/community_01.jpg", alt: "", left: 12, top: 77, width: 23, ratio: 1.3, endX: 34, endY: 55, start: 0, end: 0.72, rotation: 5, endRotation: -8, scale: 0.82, endScale: 0.92, opacity: 0.72, endOpacity: 0 },
  { src: "/assets/feature_cutout.jpg", alt: "", left: 88, top: 76, width: 25, ratio: 1.4, endX: 65, endY: 52, start: 0, end: 0.76, rotation: -6, endRotation: 7, scale: 0.88, endScale: 1.08, opacity: 0.86, endOpacity: 0 },
  { src: "/assets/feature_posing.jpg", alt: "", left: 5, top: 48, width: 20, ratio: 1.25, endX: 31, endY: 31, start: 0.12, end: 0.86, rotation: -3, endRotation: 8, scale: 0.76, endScale: 0.98, opacity: 0, endOpacity: 0.78 },
  { src: "/assets/community_02.jpg", alt: "", left: 94, top: 49, width: 22, ratio: 1.45, endX: 67, endY: 36, start: 0.18, end: 0.94, rotation: 8, endRotation: -6, scale: 0.8, endScale: 0.9, opacity: 0, endOpacity: 0.88 },
  { src: "/assets/feature_mixed.jpg", alt: "", left: 50, top: 4, width: 18, ratio: 1.4, endX: 49, endY: 40, start: 0.42, end: 1, rotation: 4, endRotation: -3, scale: 0.68, endScale: 1.05, opacity: 0, endOpacity: 0.72 },
  // Smaller inner-orbit frames restore the layered composition in the reference.
  { src: "/assets/community_03.jpg", alt: "", left: 44, top: 15, width: 10, ratio: 1.38, endX: 47, endY: 26, start: 0, end: 0.48, rotation: -4, endRotation: 5, scale: 0.76, endScale: 0.9, opacity: 0.68, endOpacity: 0.35 },
  { src: "/assets/feature_cutout.jpg", alt: "", left: 62, top: 17, width: 11, ratio: 1.42, endX: 58, endY: 34, start: 0.04, end: 0.58, rotation: 5, endRotation: -5, scale: 0.72, endScale: 0.92, opacity: 0.7, endOpacity: 0.45 },
  { src: "/assets/community_01.jpg", alt: "", left: 20, top: 60, width: 11, ratio: 1.4, endX: 39, endY: 46, start: 0.08, end: 0.66, rotation: -5, endRotation: 4, scale: 0.7, endScale: 0.88, opacity: 0.62, endOpacity: 0.3 },
  { src: "/assets/feature_location.jpg", alt: "", left: 82, top: 57, width: 12, ratio: 1.45, endX: 64, endY: 47, start: 0.15, end: 0.72, rotation: 4, endRotation: -4, scale: 0.72, endScale: 0.9, opacity: 0.65, endOpacity: 0.35 },
  { src: "/assets/feature_depth.jpg", alt: "", left: 50, top: 85, width: 10, ratio: 1.4, endX: 51, endY: 64, start: 0.25, end: 0.82, rotation: -3, endRotation: 3, scale: 0.68, endScale: 0.84, opacity: 0.62, endOpacity: 0.28 },
  { src: "/assets/feature_posing.jpg", alt: "", left: 50, top: 2, width: 9, ratio: 1.3, endX: 52, endY: 27, start: 0.36, end: 0.9, rotation: 3, endRotation: -4, scale: 0.64, endScale: 0.82, opacity: 0, endOpacity: 0.4 },
];

export default function OrbitalHero({ onOpenStudio }: OrbitalHeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pathGroupRef = useRef<SVGGElement | null>(null);
  const wordmarkRef = useRef<HTMLHeadingElement | null>(null);
  const wordmarkLettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const heroBodyRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    gsap.registerPlugin(ScrollTrigger);

    // The images sit on the same elliptical orbit at every point in the
    // timeline. Scroll progress rotates that orbit; it never free-runs.
    const renderOrbit = (progress: number) => {
      const width = hero.clientWidth;
      const height = hero.clientHeight;
      const angleOffset = progress * Math.PI * 1.35;

      cardRefs.current.forEach((card, index) => {
        const data = CARDS[index];
        if (!card || !data) return;

        const normalizedX = (data.left - 50) / 42;
        const normalizedY = (data.top - 50) / 38;
        const baseAngle = Math.atan2(normalizedY, normalizedX);
        const radius = Math.max(0.78, Math.min(1.24, Math.hypot(normalizedX, normalizedY)));
        const angle = baseAngle + angleOffset;
        const depth = Math.sin(angle);
        const depthBlend = (depth + 1) / 2;
        const x = Math.cos(angle) * width * 0.42 * radius;
        const y = Math.sin(angle) * height * 0.38 * radius;
        const cardProgress = Math.max(0, Math.min(1, (progress - data.start) / (data.end - data.start)));
        const baseScale = data.scale + (data.endScale - data.scale) * cardProgress;
        const opacity = (data.opacity + (data.endOpacity - data.opacity) * cardProgress) * (0.76 + depthBlend * 0.24);
        const rotation = data.rotation + (data.endRotation - data.rotation) * cardProgress + Math.cos(angle) * 8;
        const scale = baseScale * (0.82 + depthBlend * 0.28);

        card.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${depth * 120}px) rotateX(${depth * 12}deg) rotateY(${-Math.cos(angle) * 24}deg) rotateZ(${rotation}deg) scale(${scale})`;
        card.style.opacity = `${Math.max(0, Math.min(1, opacity))}`;
        card.style.zIndex = `${10 + Math.round(depthBlend * 30)}`;
        card.style.filter = `brightness(${0.84 + depthBlend * 0.3})`;
      });
    };

    renderOrbit(0);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (match) => {
          if (match.conditions?.reduceMotion) return;

          const timeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: () => `+=${Math.round(window.innerHeight * 0.54)}`,
              scrub: true,
              pin: hero,
              pinSpacing: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          const pathGroup = pathGroupRef.current;
          if (pathGroup) {
            timeline.fromTo(pathGroup, { rotation: -8, xPercent: -1, yPercent: 1 }, {
              rotation: 24,
              xPercent: 3,
              yPercent: -3,
              duration: 1,
            }, 0);
          }

          const orbitProgress = { value: 0 };
          timeline.to(orbitProgress, {
            value: 1,
            duration: 1,
            onUpdate: () => renderOrbit(orbitProgress.value),
          }, 0);

          // Each glyph separates in sequence, then gathers as a compact mark
          // beside the scale while the orbital cards rotate around it.
          if (wordmarkRef.current) {
            timeline.to(wordmarkRef.current, {
              x: () => hero.clientWidth * 0.2,
              y: () => -hero.clientHeight * 0.22,
              scale: 0.72,
              opacity: 1,
              transformOrigin: "right top",
              duration: 0.72,
            }, 0.02);
            timeline.to(wordmarkRef.current, {
              scale: 0.42,
              duration: 0.22,
            }, 0.76);
          }
          wordmarkLettersRef.current.forEach((letter, index) => {
            if (!letter) return;
            const stagger = index * 0.01;
            const direction = index % 2 === 0 ? -1 : 1;
            timeline.to(letter, {
              x: (index - (wordmarkLettersRef.current.length - 1) / 2) * 105,
              y: direction * (55 + (index % 3) * 22),
              rotation: direction * (16 + (index % 4) * 5),
              duration: 0.11,
            }, 0.22 + stagger);
            timeline.to(letter, {
              x: 0,
              y: 0,
              rotation: 0,
              duration: 0.14,
            }, 0.45 + stagger);
          });
          if (heroBodyRef.current) {
            timeline.to(heroBodyRef.current, {
              y: () => -hero.clientHeight * 0.08,
              opacity: 0,
              duration: 0.22,
            }, 0.18);
          }
        },
      );
    }, hero);

    return () => {
      context.revert();
      media.revert();
    };
  }, []);

  return (
      <section
      ref={heroRef}
      id="hero"
      className="orbital-hero relative isolate w-full h-[880px] sm:h-[940px] lg:h-[1020px] bg-[#060607] overflow-hidden flex items-center justify-center pt-14 select-none"
    >
      <svg
        className="orbital-paths absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="orbital-card-warp-hover" x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.025 0.035" numOctaves="2" seed="8" result="texture" />
            <feDisplacementMap in="SourceGraphic" in2="texture" scale="24" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <g ref={pathGroupRef} className="orbital-path-group">
          <path d="M-260 760 C 20 180 370 -50 720 115 S 1110 520 1280 40" className="orbital-path orbital-path-blue" />
          <path d="M-240 105 C 70 430 310 900 675 835 S 1070 585 1260 1050" className="orbital-path orbital-path-green" />
          <path d="M-200 1040 C 190 700 400 245 790 245 S 1080 465 1250 720" className="orbital-path orbital-path-purple" />
          <path d="M-120 590 C 160 1040 490 1040 760 650 S 990 180 1190 -70" className="orbital-path orbital-path-red" />
        </g>
      </svg>

      <div className="orbital-card-stage absolute inset-0 z-10" aria-hidden="true">
        {CARDS.map((card, index) => (
          <div
            key={card.src + index}
            ref={(node) => { cardRefs.current[index] = node; }}
            className="orbital-media-card"
            style={{
              left: "50%",
              top: "50%",
              width: `clamp(${card.width < 13 ? 92 : 140}px, ${Math.min(card.width, 18)}vw, ${card.width < 13 ? 210 : 310}px)`,
              aspectRatio: `${card.ratio}`,
              opacity: card.opacity,
              zIndex: index + 1,
            }}
          >
            <img src={card.src} alt="" loading={index < 4 ? "eager" : "lazy"} draggable="false" />
            <span className="orbital-card-edge" />
            <span className="orbital-card-sheen" />
          </div>
        ))}
      </div>

      <div className="orbital-hero-copy relative z-30 max-w-4xl mx-auto px-4 text-center flex flex-col items-center justify-center pointer-events-auto">
        <h1 ref={wordmarkRef} className="font-display font-extrabold text-[clamp(2.15rem,12vw,8.625rem)] sm:text-[90px] md:text-[118px] lg:text-[168px] tracking-[0.03em] sm:tracking-[0.08em] lg:tracking-[0.14em] text-white leading-none uppercase select-none drop-shadow-[0_12px_45px_rgba(0,0,0,0.95)] flex items-center justify-center whitespace-nowrap will-change-transform">
          {Array.from("VISION").map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(node) => { wordmarkLettersRef.current[index] = node; }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </h1>

        <div ref={heroBodyRef} className="orbital-hero-body flex flex-col items-center will-change-transform">
        <div className="mt-3 sm:mt-5 text-[clamp(1.15rem,5.7vw,2.25rem)] sm:text-3xl md:text-4xl text-white tracking-tight flex flex-wrap items-center justify-center gap-x-1.5 sm:gap-x-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
          <span className="font-display font-bold">Capable tools</span>
          <span className="font-serif italic font-normal text-gray-200">for artists.</span>
        </div>

        <p className="mt-4 max-w-xl text-[13px] sm:text-base text-gray-300 font-sans leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3 sm:px-6 py-2.5 rounded bg-white text-black font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider hover:bg-gray-200 transition-all shadow-xl active:scale-95">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.87c.6-1.04 1.1-2.46.9-3.87-1.18.06-2.6 1-3.32 2.06-.57.85-1.06 2.3-.86 3.7 1.34.1 2.68-.85 3.28-1.89z" />
            </svg>
            <Monitor className="w-4 h-4" />
            <span>Lorem ipsum</span>
          </button>
          <button type="button" onClick={onOpenStudio} className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded border border-white/25 bg-[#0B0B0C]/85 backdrop-blur text-white font-mono font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/40 transition-all shadow-lg active:scale-95 cursor-pointer">
            Lorem ipsum
          </button>
        </div>

        <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <span className="flex items-center gap-1.5"><span>Lorem ipsum</span></span>
          <span className="text-white/20">·</span>
          <span>Lorem ipsum</span>
          <span className="text-white/20">·</span>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
        </div>
      </div>
    </section>
  );
}
