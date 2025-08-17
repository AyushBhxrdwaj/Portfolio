"use client";
import React, { useEffect, useState } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Myapproach = () => {
  const [revealed, setRevealed] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ]);
  const [isMobile, setIsMobile] = useState(false);
  // Detect mobile/no-hover; keep in sync on resize/orientation change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () => {
      const noHover = window.matchMedia("(hover: none)").matches;
      const coarse = window.matchMedia("(pointer: coarse)").matches;
      const small = window.matchMedia("(max-width: 639px)").matches;
      setIsMobile(noHover || coarse || small);
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const handleTap = (idx: number) => {
    if (!isMobile) return;
    setRevealed((prev) => {
      if (prev[idx]) return prev; // one-shot reveal
      const copy = [...prev] as [boolean, boolean, boolean];
      copy[idx] = true;
      return copy;
    });
  };

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
            opacity="0.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  };
  return (
    <section id="my-approach" className="w-full py-10 sm:py-16">
      <h1 className="text-center mb-12 text-7xl  font-bold">
        My <span className="text-purple-500">Approach</span>
      </h1>
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Phase 1 */}
          <CardSpotlight
            color="#000000"
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center"
            active={isMobile && revealed[0]}
            hoverEnabled={!isMobile}
            effectColors={[[192, 192, 192]]}
            effectContainerClassName="bg-[#064e3b]"
            effectShowGradient={false}
          >
            {/* corners */}
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
            <div
              onClick={() => handleTap(0)}
              className={`relative z-10 w-full h-full ${
                isMobile ? "cursor-pointer select-none" : ""
              }`}
            >
              {/* Pill layer (does not affect layout) */}
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center transition-opacity duration-300 " +
                      (revealed[0] ? "opacity-0" : "opacity-100")
                    : "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 opacity-100"
                }
              >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 1
                </span>
              </div>
              {/* Reveal content layer */}
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 " +
                      (revealed[0] ? "opacity-100" : "opacity-0")
                    : "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover/spotlight:opacity-100 opacity-0"
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
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center"
            active={isMobile && revealed[1]}
            hoverEnabled={!isMobile}
            effectColors={[[192, 192, 192]]}
          >
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
            <div
              onClick={() => handleTap(1)}
              className={`relative z-10 w-full h-full ${
                isMobile ? "cursor-pointer select-none" : ""
              }`}
            >
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center transition-opacity duration-300 " +
                      (revealed[1] ? "opacity-0" : "opacity-100")
                    : "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 opacity-100"
                }
              >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 2
                </span>
              </div>
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 " +
                      (revealed[1] ? "opacity-100" : "opacity-0")
                    : "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover/spotlight:opacity-100 opacity-0"
                }
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    Design and Build
                  </h2>
                  <p className="max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed text-neutral-300 font-semibold">
                    Design and iterate quickly. Build clickable prototypes or
                    POCs, validate assumptions, and refine based on feedback.
                  </p>
                </div>
              </div>
            </div>
          </CardSpotlight>

          {/* Phase 3 */}
          <CardSpotlight
            color="#7f1d1d"
            className="h-[520px] sm:h-[560px] rounded-2xl relative overflow-visible flex items-center justify-center text-center"
            active={isMobile && revealed[2]}
            hoverEnabled={!isMobile}
            effectColors={[[192, 192, 192]]}
          >
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
            <div
              onClick={() => handleTap(2)}
              className={`relative z-10 w-full h-full ${
                isMobile ? "cursor-pointer select-none" : ""
              }`}
            >
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center transition-opacity duration-300 " +
                      (revealed[2] ? "opacity-0" : "opacity-100")
                    : "absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover/spotlight:opacity-0 opacity-100"
                }
              >
                <span className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white px-5 py-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-black shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                  Phase 3
                </span>
              </div>
              <div
                className={
                  isMobile
                    ? "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 " +
                      (revealed[2] ? "opacity-100" : "opacity-0")
                    : "absolute inset-0 flex items-center justify-center px-6 text-center transition-opacity duration-300 group-hover/spotlight:opacity-100 opacity-0"
                }
              >
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    Test, Optimize & Deploy
                  </h2>
                  <p className="max-w-xs sm:max-w-sm text-sm sm:text-base leading-relaxed text-neutral-300 font-semibold">
                    Ship confidently: harden, test, and document. Monitor
                    performance, and apply polish for a stable launch.
                  </p>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};

export default Myapproach;
