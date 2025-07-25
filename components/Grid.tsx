import MagicBento from "@/blocks/Backgrounds/MagicBento";
import React from "react";
const Grid = () => {
  return (
    <section id="about" className="relative w-full max-w-[92rem] mx-auto ">
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={false}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
    </section>
  );
};

export default Grid;
