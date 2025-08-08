import { projects } from "@/data";
import React from "react";
import Image from "next/image";
import TiltedCard from "./ui/TiltedCard";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const RecentProjects = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold">
        A small selection of <br />{" "}
        <span className="text-purple-600 mt-2">Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-16 ">
        {projects.map(({ title, id, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[86vw]"
          >
            <TiltedCard
              imageSrc={img}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText={des}
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <>
                  <p className="mt-10 py-3 px-5 ml-5 bg-gradient-to-r from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] bg-clip-text text-lg font-bold rounded-full border-2 border-gray-400 text-transparent">
                    {title}
                  </p>

                  <a href={link} target="_blank">
                    <InteractiveHoverButton className="mt-40 bg-black hover:bg-purple-800">
                      Check out the Project
                    </InteractiveHoverButton>
                  </a>

                  {/* Tech Stack Section - Moved to bottom */}
                  <div className="flex items-center justify-center mt-6">
                    <div className="flex items-center gap-2">
                      {iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          
                        >
                          <Image
                            src={icon}
                            alt="tech icon"
                            width={32}
                            height={32}
                            className="p-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
