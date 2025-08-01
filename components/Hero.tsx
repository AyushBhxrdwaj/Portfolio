import LightRays from "@/blocks/Backgrounds/LightRays";
import TextTyper from "@/blocks/TextAnimations/TextType";
import React from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import RippleGrid from "@/blocks/Backgrounds/RippleGrid";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FF"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={0.8}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="absolute inset-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227ff"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-sm font-bold text-center text-yellow-200 max-w-80">
            Web Developer, Problem Solver, Detail-Obsessed
          </h1>
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
          />
          <p className="text-center mt-3 md:tracking-wider mb-4 md:text-lg lg:text-2xl text-lg bg-gradient-to-r from-zinc-400 via-gray-400 to-zinc-500 bg-clip-text text-transparent font-bold">
            Hi, I&apos;m Ayush — I Build on the Web
          </p>
          <InteractiveHoverButton className="text-sm font-semibold bg-gray-600">
            Show my work
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
