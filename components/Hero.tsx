import LightRays from "@/blocks/Backgrounds/LightRays";
import TextTyper from "@/blocks/TextAnimations/TextType";
import React from "react";
import RippleGrid from "@/blocks/Backgrounds/RippleGrid";
import { RainbowButton } from "./ui/rainbow-button";
import { Globe } from "lucide-react";
import { Highlighter } from "@/blocks/TextAnimations/highlighter";

const Hero = () => {
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
              color="#a855f7"
              strokeWidth={2}
              animationDuration={800}
              iterations={2}
              padding={4}
            >
              I Build on the Web
            </Highlighter>
          </div>
          <div className="relative mt-10">
            <RainbowButton
              className="px-8 py-4 rounded-full text-base font-semibold hover:scale-105 transform transition-all duration-300 bg-gray-900 text-white"
              size="lg"
              variant="outline"
            >
              <Globe className="animate-spin mr-2 text-cyan-400" size={20} />
              <span className="font-bold">Download my Resume</span>
            </RainbowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
