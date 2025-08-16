"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Myapproach = () => {
  // Refs for each card, used to auto-reveal on mobile when scrolled into view
  const cardRef0 = useRef<HTMLDivElement>(null);
  const cardRef1 = useRef<HTMLDivElement>(null);
  const cardRef2 = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ]);

  // On mobile (no hover), reveal content when card enters viewport
  useEffect(() => {
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia("(hover: none)").matches;
    const isSmall = window.matchMedia("(max-width: 639px)").matches;
    const shouldAutoReveal = noHover || isSmall;
    if (!shouldAutoReveal) return;

    const refs = [cardRef0, cardRef1, cardRef2];

    const revealIndex = (idx: number) =>
      setRevealed((prev) => {
        if (prev[idx]) return prev;
        const copy = [...prev] as [boolean, boolean, boolean];
        copy[idx] = true;
        return copy;
      });

    // Fallback: immediate in-view check on mount (some browsers delay IO callback)
    const vh = window.innerHeight || document.documentElement.clientHeight;
    refs.forEach((r, idx) => {
      const el = r.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh * 0.85 && rect.bottom > vh * 0.15) revealIndex(idx);
    });

    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.findIndex((r) => r.current === entry.target);
            if (idx !== -1) revealIndex(idx);
          }
        });
      },
      // Trigger a bit earlier and ignore bottom 15% to feel snappy
      { threshold: 0.1, rootMargin: "0px 0px -15% 0px" }
    );
    refs.forEach((r) => r.current && obs.observe(r.current));
    return () => obs.disconnect();
  }, []);

  const Corner = ({
    pos,
    size = 26,
    offset = 10,
    color = "rgba(255,255,255,0.75)",
  }: {
    pos: "tl" | "tr" | "bl" | "br";
    size?: number;
    offset?: number; // how much the plus protrudes outside
    color?: string;
  }) => {
    const style: React.CSSProperties = { color };
    if (pos === "tl") Object.assign(style, { top: -offset, left: -offset });
    if (pos === "tr") Object.assign(style, { top: -offset, right: -offset });
    if (pos === "bl") Object.assign(style, { bottom: -offset, left: -offset });
    if (pos === "br") Object.assign(style, { bottom: -offset, right: -offset });
    return (
      <span
        className="absolute z-[2] pointer-events-none"
        style={style}
        aria-hidden
      >
        <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
          {/* plus sign centered; thick stroke for visibility */}
          <path
            d="M10 2 V18 M2 10 H18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  };
  return (
    <section id="my-approach" className="w-full py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <CardSpotlight
            color="#1f2937"
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center bg-[#0b0b12]"
          >
            {/* corners */}
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
              <div ref={cardRef0} className="relative z-10 w-full h-full">
              {/* Pill layer (does not affect layout) */}
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 " +
                    (revealed[0] ? "opacity-0" : "opacity-100")
                  }
                >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 1
                </span>
              </div>
              {/* Reveal content layer */}
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 " +
                    (revealed[0] ? "opacity-100" : "opacity-0")
                  }
                >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    Understanding the Problem
                  </h2>
                  <p className="max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed text-neutral-300 font-semibold">
                    Break down the problem into modular components by
                    identifying key tasks and dependencies. This helps in
                    creating a clear roadmap for development.
                  </p>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Phase 2 */}
          <CardSpotlight
            color="#312e81"
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center bg-[#0b0b12]"
          >
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
              <div ref={cardRef1} className="relative z-10 w-full h-full">
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 " +
                    (revealed[1] ? "opacity-0" : "opacity-100")
                  }
                >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 2
                </span>
              </div>
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 " +
                    (revealed[1] ? "opacity-100" : "opacity-0")
                  }
                >
                <p className="max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed text-neutral-300">
                  Design and iterate quickly. Build clickable prototypes or
                  POCs, validate assumptions, and refine based on feedback.
                </p>
              </div>
            </div>
          </CardSpotlight>

          {/* Phase 3 */}
          <CardSpotlight
            color="#7f1d1d"
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center bg-[#0b0b12]"
          >
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
              <div ref={cardRef2} className="relative z-10 w-full h-full">
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 " +
                    (revealed[2] ? "opacity-0" : "opacity-100")
                  }
                >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 3
                </span>
              </div>
                <div
                  className={
                    "absolute inset-0 flex items-center justify-center px-6 text-center opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100 " +
                    (revealed[2] ? "opacity-100" : "opacity-0")
                  }
                >
                <p className="max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed text-neutral-300">
                  Ship confidently: harden, test, and document. Monitor
                  performance, and apply polish for a stable launch.
                </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Myapproach;
