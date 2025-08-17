import LightRays from "@/blocks/Backgrounds/LightRays";
import TextTyper from "@/blocks/TextAnimations/TextType";
import React from "react";
import RippleGrid from "@/blocks/Backgrounds/RippleGrid";
import { RainbowButton } from "./ui/rainbow-button";
import { Globe } from "lucide-react";
import { Highlighter } from "@/blocks/TextAnimations/highlighter";
import { Marquee } from "./marquee";
import Image from "next/image";

const Hero = () => {
  const techStack = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(97,218,251,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      invert: true,
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(247,223,30,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(49,120,198,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(244,67,54,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      alt: "Spring Boot",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(109,179,63,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(75,139,190,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      alt: "Flask",
      invert: true,
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.6)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(140,200,75,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(77,182,172,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(51,103,145,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      alt: "Supabase",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(62,207,142,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      alt: "Docker",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(13,183,232,0.6)]",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
      glow: "group-hover:drop-shadow-[0_0_8px_rgba(240,80,50,0.6)]",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff7a6"
          raysSpeed={2.2}
          lightSpread={0.25}
          rayLength={1.2}
          pulsating={true}
          fadeDistance={1.2}
          saturation={1.5}
          followMouse={true}
          mouseInfluence={0.18}
          noiseAmount={0.18}
          distortion={0.12}
          className="custom-rays"
        />
      </div>
      <div className="absolute inset-0">
        <RippleGrid
          enableRainbow={true}
          gridColor="#5227ff"
          rippleIntensity={0.13}
          gridSize={12}
          gridThickness={13}
          fadeDistance={1.2}
          vignetteStrength={1.2}
          glowIntensity={0.22}
          mouseInteraction={true}
          mouseInteractionRadius={1.5}
          opacity={1}
          timeScale={0.6}
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xl mt-5 font-semibold text-center text-white max-w-80">
            Web Developer, Problem Solver, Detail-Obsessed
          </h1>
          <div className="h-24 md:h-32 lg:h-40 flex items-center justify-center w-full">
            <TextTyper
              text={[
                "I love turning challenges into clean solutions.",
                "I bring interfaces to life with precision and flair.",
                "Building sites that feel alive.",
              ]}
              className="text-[30px] font-bold text-center md:text-5xl lg:text-6xl"
              typingSpeed={100}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              textColors={["#60a5fa", "#a855f7", "#f472b6"]}
            />
          </div>
          <div className="text-center mt-3 md:tracking-wider mb-4 md:text-lg lg:text-2xl text-lg font-bold text-gray-300 leading-relaxed flex flex-wrap justify-center items-center gap-2">
            <span className="relative inline-block">
              Hi, I&apos;m Ayush
              <svg
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 200 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8c20-2 40 2 60-1 20-3 40 1 60-2 20-2 40 1 55 0"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12c22-1 38 1 58-2 18-2 42 2 62-1 22-1 38 0 57 1"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </span>
            <span>—</span>
            <Highlighter
              action="highlight"
              color="#9b111e"
              strokeWidth={2}
              animationDuration={800}
              iterations={2}
              padding={4}
            >
              I Build on the Web
            </Highlighter>
          </div>
          {/* Tech Marquee */}
          <div className="w-full mt-6">
            <Marquee
              pauseOnHover
              className="[--duration:40s] [--gap:1.25rem] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            >
              {techStack.map((t) => (
                <div
                  key={t.alt}
                  className="group/icon relative h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center"
                >
                  <Image
                    src={t.src}
                    alt={t.alt}
                    title={t.alt}
                    width={40}
                    height={40}
                    loading="lazy"
                    draggable={false}
                    className={[
                      "h-8 w-8 sm:h-10 sm:w-10 opacity-90 transition-transform duration-300 ease-out",
                      "hover:scale-110",
                      t.glow ?? "",
                      t.invert ? "invert" : "",
                    ].join(" ")}
                  />
                  <span className="pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 translate-y-1 rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] sm:text-xs text-white/80 backdrop-blur-sm opacity-0 transition-all duration-200 group-hover/icon:opacity-100 group-hover/icon:translate-y-0">
                    {t.alt}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
          <div className="relative mt-10">
            <RainbowButton
              asChild
              className="px-8 py-4 rounded-full text-base font-semibold hover:scale-105 transform transition-all duration-300 bg-gray-900 text-white"
              size="lg"
              variant="outline"
            >
              <a
                href="/resume.pdf"
                download="Ayush_Resume.pdf"
                aria-label="Download my resume (PDF)"
                className="inline-flex items-center"
              >
                <Globe className="mr-2 text-cyan-500" size={20} />
                <span className="font-bold">Download my Resume</span>
              </a>
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
