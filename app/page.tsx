import GooeyNav from "@/blocks/Backgrounds/GooeyNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import ProjectWording from "@/components/ProjectWording";
import React from "react";
import Roles from "@/components/Roles";
import Myapproach from "@/components/Myapproach";

const Home = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <main className=" flex justify-center items-center flex-col sm:px-10 overflow-hidden mx-auto ">
      <div className="bg-black/30 w-screen max-w-8xl">
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
        <Grid />
        <RecentProjects />
        <ProjectWording />
        <Roles />
        <Myapproach />
      </div>
    </main>
  );
};

export default Home;
