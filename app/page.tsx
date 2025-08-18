"use client";
import GooeyNav from "@/blocks/Backgrounds/GooeyNav";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import ProjectWording from "@/components/ProjectWording";
import React from "react";
import Roles from "@/components/Roles";
import Myapproach from "@/components/Myapproach";
import EndPage from "@/components/EndPage";
import GreetingsLoader from "@/components/GreetingsLoader";
import ContactDialog from "@/components/ContactDialog";

const Home = () => {
  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "#About" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const [bootDone, setBootDone] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);
  return (
    <main className=" flex justify-center items-center flex-col sm:px-10 overflow-hidden mx-auto ">
      {!bootDone && (
        <GreetingsLoader
          showForMs={2800}
          stepMs={500}
          onFinish={() => setBootDone(true)}
          watermark="AYUSH"
          greetings={[
            "Hello",
            "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਜੀ",
            "नमस्ते",
            "こんにちは",
            "안녕하세요",
            "مرحبا",
            "Olá",
            "Bonjour",
            "Hallo",
          ]}
          useFramer={false}
        />
      )}
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
          onItemClick={(item, _index, e) => {
            if (item.label.toLowerCase() === "contact") {
              e.preventDefault();
              setContactOpen(true);
            }
          }}
        />
        <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
        <Hero />
        <Grid />
        <RecentProjects />
        <ProjectWording />
        <Roles />
        <Myapproach />
        <EndPage />
      </div>
    </main>
  );
};

export default Home;
