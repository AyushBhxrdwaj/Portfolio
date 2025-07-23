import DotGrid from "@/blocks/Backgrounds/DotGrid";
import LightRays from "@/blocks/Backgrounds/LightRays";
import TextTyper from "@/blocks/TextAnimations/TextType";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFCE33"
          raysSpeed={1}
          lightSpread={2}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className=" absolute inset-0">
        <DotGrid
          dotSize={8}
          gap={15}
          baseColor="#271E37"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-sm font-bold text-center text-yellow-200 max-w-80">
            Web Developer, Problem Solver, Detail-Obsessed
          </h1>
          <TextTyper
            text={["I love turning challenges into clean solutions.","I bring interfaces to life with precision and flair.","Building sites that feel alive."]}
            className="text-[30px] font-bold text-center md:text-5xl lg:text-6xl"
            typingSpeed={100}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
          <p className="text-center mt-3 md:tracking-wider mb-4 md:text-lg lg:text-2xl text-lg text-gray-300 font-bold">
            Hi, I&apos;m Ayush — I Build on the Web
          </p>
          <RainbowButton className="text-sm bg-gray-500" variant="outline" size="lg">Click Me</RainbowButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
