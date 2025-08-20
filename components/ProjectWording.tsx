import React from "react";
import { Marquee } from "./marquee";
// Removed ScrollFloat (floating text animation) per request

const stories = [
  {
    title: "My first MCP server",
    text: "Learned about the idea of MCP servers, taken the help of AI to build an AI itself and learn a lot about AI agents.",
  },
  {
    title: "Discuss",
    text: "It started as a simple idea — a place where people could share thoughts in real-time. I built it with Next.js, WebSockets, and Prisma, crafting live threads and instant comments.",
  },
  {
    title: "KhaataBook",
    text: "Managing daily expenses was always a pain, so I set out to simplify it. I created KhaataBook, a personal expense manager with secure, per-user accounts. Later, I added encryption so sensitive files stayed private, and a shareable link system for quick collaboration. It grew from a basic tracker into a secure, user-friendly finance tool.",
  },
  {
    title: "IPL Predictor",
    text: "As a cricket fan and data geek, I wanted to bring stats to life. I trained a Logistic Regression model on years of IPL data, predicting match winners with surprising accuracy. The model sparked debates, laughter, and bragging rights among my friends — and taught me a ton about machine learning.",
  },
  {
    title: "PokeDex",
    text: "Every Pokémon fan knows the joy of flipping through a Pokédex. I decided to recreate that magic with a modern twist — a web app featuring detailed stats, evolutions, and attack lists. With a smooth UI and fast search, it became both a nostalgic trip and a useful companion for fans.1",
  },
];

const ProjectWording = () => {
  const items = stories.slice(0, 5);
  return (
    <section
      id="About"
      className="relative py-16 sm:py-24 overflow-hidden scroll-mt-28 [--marquee-duration-1:12s] sm:[--marquee-duration-1:16s] [--marquee-duration-2:15s] sm:[--marquee-duration-2:20s]"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-400">
          Project stories
        </h2>
      </div>

      {/* Marquee Row 1 */}
      <div className="mt-8 sm:mt-10 px-2 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee
          pauseOnHover
          repeat={3}
          className="[--duration:16s] sm:[--duration:20s] [--gap:0.5rem] sm:[--gap:0.75rem]"
        >
          {items.map((s, idx) => (
            <article
              key={`row1-${idx}`}
              className="box-border w-[85vw] min-w-[85vw] max-w-[85vw] sm:w-[60vw] sm:min-w-[60vw] sm:max-w-[60vw] md:w-[33.333vw] md:min-w-[33.333vw] md:max-w-[33.333vw] lg:w-[25vw] lg:min-w-[25vw] lg:max-w-[25vw] xl:w-[20vw] xl:min-w-[20vw] xl:max-w-[20vw] min-h-[200px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-5 text-left whitespace-normal flex flex-col"
            >
              <h3 className="text-lg font-bold text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm italic font-semibold text-zinc-300 leading-relaxed">
                {s.text}
              </p>
            </article>
          ))}
        </Marquee>
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="mt-4 sm:mt-6 px-2 sm:px-0 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <Marquee
          reverse
          pauseOnHover
          repeat={3}
          className="[--duration:16s] sm:[--duration:20s] [--gap:0.5rem] sm:[--gap:0.75rem]"
        >
          {items.map((s, idx) => (
            <article
              key={`row2-${idx}`}
              className="box-border w-[85vw] min-w-[85vw] max-w-[85vw] sm:w-[60vw] sm:min-w-[60vw] sm:max-w-[60vw] md:w-[33.333vw] md:min-w-[33.333vw] md:max-w-[33.333vw] lg:w-[25vw] lg:min-w-[25vw] lg:max-w-[25vw] xl:w-[20vw] xl:min-w-[20vw] xl:max-w-[20vw] min-h-[200px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm px-6 py-5 text-left whitespace-normal flex flex-col"
            >
              <h3 className="text-lg font-bold text-white/90">{s.title}</h3>
              <p className="mt-2 text-sm italic font-semibold text-zinc-300 leading-relaxed">
                {s.text}
              </p>
            </article>
          ))}
        </Marquee>
      </div>

      {/* Keyframes moved to globals.css to keep this component server-safe */}
    </section>
  );
};

export default ProjectWording;
