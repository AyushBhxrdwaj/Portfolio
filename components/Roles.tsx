import { Role } from "@/data";
import React from "react";
import StarBorder from "./StarBorder";
import Image from "next/image";
import GlareHover from "@/blocks/Animations/GlareHover";

const Roles = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
          Roles
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Professional experiences and roles that shaped my journey
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {Role.map(({ id, thumbnail, title, desc }, index) => (
          <StarBorder
            key={id}
            as="div"
            className="group text-white border-neutral-200 dark:border-slate-800 hover:scale-105 transition-all duration-300 cursor-pointer"
            color={index % 2 === 0 ? "cyan" : "purple"}
            speed={`${6 + index}s`}
          >
            <GlareHover
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="1rem"
              borderColor="transparent"
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-45}
              glareSize={200}
              transitionDuration={800}
              className="w-full h-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black-100/50 to-black-200/50 backdrop-blur-sm w-full h-full">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-start p-6 md:p-8 gap-6">
                  {/* Icon container with enhanced styling */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={thumbnail}
                        alt={title}
                        width={56}
                        height={56}
                        className="object-contain filter drop-shadow-lg"
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                        {title}
                      </h2>
                      <div className="w-12 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full group-hover:w-20 group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500 shadow-lg" />
                    </div>

                    <p className="text-slate-300 group-hover:text-gray-200 leading-relaxed text-base md:text-lg font-medium transition-colors duration-300">
                      {desc}
                    </p>

                    {/* Experience indicator */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex gap-1">
                        {[...Array(Math.min(5, id))].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-70 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-cyan-300 uppercase tracking-wider font-semibold transition-colors duration-300">
                        Role #{id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Hover arrow indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-cyan-400"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </GlareHover>
          </StarBorder>
        ))}
      </div>

      {/* Bottom decorative section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
          <span className="text-slate-300 text-sm font-medium">
            Continuously growing and learning
          </span>
          <div
            className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-lg shadow-purple-500/50"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Roles;
