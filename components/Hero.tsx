import DotGrid from "@/blocks/Backgrounds/DotGrid";
import LightRays from "@/blocks/Backgrounds/LightRays";
import React from "react";

const Hero = () => {
  return (
    <div className="pb-26 pt-30">
      <div className="absolute w-full h-screen">
        <DotGrid
          dotSize={9}
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
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic Web Magic</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
