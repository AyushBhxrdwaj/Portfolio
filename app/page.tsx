import GooeyNav from "@/blocks/Backgrounds/GooeyNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col sm:px-10 overflow-hidden mx-auto">
      <div className="w-screen max-w-8xl">
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
};

export default Home;
