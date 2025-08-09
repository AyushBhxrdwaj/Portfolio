import React from "react";
import ScrollFloat from "@/blocks/TextAnimations/ScrollFloat";

const stories = [
  {
    title: "From Concept to Launch",
    text: "Sketched the idea on paper, iterated the UI in Figma, and shipped a polished MVP in two weeks.",
  },
  {
    title: "Performance Hunt",
    text: "Cut bundle size by 38% and boosted Lighthouse scores from 72 to 96 using code-splitting and image optimization.",
  },
  {
    title: "Edge Case Chronicles",
    text: "Fixed a race condition causing flaky auth; added retries and exponential backoff for a bulletproof flow.",
  },
  {
    title: "Design System Win",
    text: "Abstracted recurring UI into a mini design system; shipped faster with consistent visuals across the app.",
  },
  {
    title: "DX Upgrade",
    text: "Automated pre-commit checks and preview builds; reduced PR churn and kept main always green.",
  },
];

const ProjectWording = () => {
  const items = stories.slice(0, 5);
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="text-center">
        <ScrollFloat
          containerClassName="my-0 text-center"
          textClassName="text-7xl md:text-7xl font-bold"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top bottom"
          scrollEnd="bottom top+=20%"
          stagger={0.03}
          scrub={0.6}
        >
          Project stories
        </ScrollFloat>
      </div>

      {/* Marquee Row 1 */}
      <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex gap-0 whitespace-nowrap will-change-transform animate-[marquee-horizontal-slow_30s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ animation: "marquee-horizontal-slow 30s linear infinite" }}
        >
          {[...items, ...items].map((s, idx) => (
            <article
              key={`row1-${idx}`}
              className="w-[20vw] min-w-[20vw] max-w-[20vw] min-h-[200px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-5 text-left whitespace-normal flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex gap-0 whitespace-nowrap will-change-transform animate-[marquee-horizontal-slow-reverse_36s_linear_infinite] hover:[animation-play-state:paused]"
          style={{
            animation: "marquee-horizontal-slow-reverse 36s linear infinite",
          }}
        >
          {[...items, ...items].map((s, idx) => (
            <article
              key={`row2-${idx}`}
              className="w-[20vw] min-w-[20vw] max-w-[20vw] min-h-[200px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-5 text-left whitespace-normal flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {s.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Keyframes moved to globals.css to keep this component server-safe */}
    </section>
  );
};

export default ProjectWording;
