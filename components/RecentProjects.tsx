import { projects } from "@/data";
import React from "react";
import Image from "next/image";
import ScrollFloat from "@/blocks/TextAnimations/ScrollFloat";
import { Github, Globe } from "lucide-react";

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  website?: string;
  source?: string;
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10 sm:mt-16 px-3 sm:px-4 max-w-4xl mx-auto">
        {projects.map((p) => {
          const project = p as Project;
          const { title, id, des, img, iconLists, link } = project;
          const isGithub =
            typeof link === "string" && link.includes("github.com");
          const website = project.website ?? (!isGithub ? link : undefined);
          const source = project.source ?? (isGithub ? link : undefined);

          const labelFromIcon = (src: string) => {
            if (!src) return null;
            if (src.includes("next")) return "Next.js";
            if (src.includes("tail")) return "TailwindCSS";
            if (src.includes("ts")) return "Typescript";
            if (src.includes("three")) return "Three.js";
            if (src.includes("gsap")) return "GSAP";
            if (src.includes("fm")) return "Framer Motion";
            if (src.includes("re.svg")) return "React";
            if (src.includes("stream")) return "MCP/Streams";
            if (src.includes("c.svg")) return "Clerk";
            if (src.includes("node")) return "Node.js";
            if (src.includes("LLM")) return "LLM";
            return null;
          };

          return (
            <div key={id} className="flex">
              <div className="group w-full overflow-hidden rounded-xl bg-black shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-in-out hover:scale-105">
                {/* Large image section */}
                <div className="relative w-full aspect-[5/4] p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    {id === 4 ? (
                      <video
                        src="/vid4.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : id == 3 ? (
                      <video
                        src="/vid3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : id == 1 ? (
                      <video
                        src="/vid1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={id === 1}
                      />
                    )}
                  </div>
                </div>

                {/* Dark content section */}
                <div className="bg-black p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
                  <p className="text-xs text-gray-400 mb-2">
                    {id === 1
                      ? "Jan 2024 - Feb 2024"
                      : id === 2
                      ? "June 2023 - Present"
                      : id === 3
                      ? "March 2024"
                      : "Dec 2023"}
                  </p>
                  {des && (
                    <p className="text-xs leading-relaxed text-gray-300 mb-3 line-clamp-3">
                      {des}
                    </p>
                  )}

                  {/* Tech badges */}
                  {iconLists?.length ? (
                    <div className="mb-3 flex flex-wrap gap-1">
                      {iconLists.map((icon: string, idx: number) => {
                        const label = labelFromIcon(icon);
                        return label ? (
                          <span
                            key={idx}
                            className="inline-block rounded bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300"
                          >
                            {label}
                          </span>
                        ) : null;
                      })}
                    </div>
                  ) : null}

                  {/* Buttons */}
                  <div className="flex items-center gap-2">
                    {/* Source button for all cards */}
                    {source && (
                      <a
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white bg-black border border-gray-500 hover:border-gray-400 transition"
                        aria-label={`View source code for ${title}`}
                      >
                        <Github size={12} />
                        Source
                      </a>
                    )}

                    {/* Website button only for card 4 */}
                    {id === 4 && website && (
                      <a
                        href={website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-gray-100 transition"
                        aria-label={`Open website for ${title}`}
                      >
                        <Globe size={12} />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
