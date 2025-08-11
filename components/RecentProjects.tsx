import { projects } from "@/data";
import React from "react";
import Image from "next/image";
import TiltedCard from "./ui/TiltedCard";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import ScrollFloat from "@/blocks/TextAnimations/ScrollFloat";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-16 sm:py-20 text-center scroll-mt-28">
      <div className="flex flex-col items-center">
        <ScrollFloat
          containerClassName="my-0 text-center"
          textClassName="text-4xl sm:text-6xl md:text-7xl font-bold"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top bottom"
          scrollEnd="bottom top+=20%"
          stagger={0.03}
          scrub={0.6}
        >
          A small selection of
        </ScrollFloat>
        <ScrollFloat
          containerClassName="my-0 text-center -mt-1"
          textClassName="text-4xl sm:text-6xl md:text-7xl font-bold text-pink-600"
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="top bottom"
          scrollEnd="bottom top+=20%"
          stagger={0.03}
          scrub={0.6}
        >
          Recent projects
        </ScrollFloat>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-10 sm:mt-16 px-3 sm:px-4 max-w-7xl mx-auto">
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div key={id} className="flex items-center justify-center">
            <TiltedCard
              imageSrc={img}
              altText="Project Image"
              captionText={des}
              containerHeight="clamp(360px, 55vw, 600px)"
              containerWidth="clamp(300px, 85vw, 550px)"
              imageHeight="clamp(360px, 55vw, 600px)"
              imageWidth="clamp(300px, 85vw, 550px)"
              imageFit={id === 1 ? "contain" : "cover"}
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex h-full w-full flex-col justify-between">
                  {/* Title at top */}
                  <div className="px-6 pt-6 mt-5">
                    <h3 className="relative inline-flex items-center gap-2 text-[13px] sm:text-sm md:text-base font-semibold md:font-bold leading-tight text-white text-center px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-black/70 backdrop-blur-md backdrop-saturate-150 ring-1 ring-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.35)] mx-auto">
                      <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                      {title}
                    </h3>
                  </div>

                  {/* Bottom actions */}
                  <div className="px-6 pb-6 flex flex-col items-center gap-3">
                    <a
                      href={link}
                      target="_blank"
                      className="w-full flex justify-center"
                    >
                      <InteractiveHoverButton className="bg-black hover:bg-purple-800 px-8 py-3 text-sm font-semibold">
                        Check out the Project
                      </InteractiveHoverButton>
                    </a>

                    {/* Tech Stack Section */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        {iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[0.3] rounded-full bg-black/80 backdrop-blur-sm lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center hover:scale-110 transition-all duration-200"
                            style={{
                              transform: `translateX(-${3 * index}px)`,
                              zIndex: iconLists.length - index,
                            }}
                          >
                            <Image
                              src={icon}
                              alt="tech icon"
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
