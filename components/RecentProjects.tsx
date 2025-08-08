import { projects } from "@/data";
import React from "react";
import Image from "next/image";
import TiltedCard from "./ui/TiltedCard";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const RecentProjects = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-7xl font-bold">
        A small selection of <br />{" "}
        <span className="text-purple-600 mt-2">Recent projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-4 max-w-7xl mx-auto">
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div key={id} className="flex items-center justify-center">
            <TiltedCard
              imageSrc={img}
              altText="Project Image"
              captionText={des}
              containerHeight="600px"
              containerWidth="550px"
              imageHeight="600px"
              imageWidth="550px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="flex h-full w-full flex-col justify-between">
                  {/* Title at top */}
                  <div className="px-6 pt-6 mt-5">
                    <h3 className="text-lg font-bold text-white text-center bg-black/30 backdrop-blur-sm rounded-full py-2 px-4 border border-white/10 inline-block mx-auto">
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
