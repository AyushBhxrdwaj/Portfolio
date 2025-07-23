import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col sm:px-10">
      <div className="w-screen max-w-8xl">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
