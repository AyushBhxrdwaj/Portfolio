import LightRays from "@/blocks/Backgrounds/LightRays";
import TextTyper from "@/blocks/TextAnimations/TextType";
import React from "react";
import RippleGrid from "@/blocks/Backgrounds/RippleGrid";
import WrapButton from "./ui/wrap-button";
import { Globe } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
          <h1 className="uppercase tracking-widest text-lg mt-5 font-semibold text-center text-violet-300 max-w-80">
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
          <WrapButton className="mt-10" href="#">
            <Globe className="animate-spin" />
            Download my Resume
          </WrapButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
