import { Role } from "@/data";
import React from "react";
import StarBorder from "./StarBorder";
import Image from "next/image";
import GlareHover from "@/blocks/Animations/GlareHover";

const Roles = () => {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-gray-400 via-gray-600 to-gray-300 bg-clip-text text-transparent mb-4 drop-shadow-2xl">
          Roles
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {Role.map(({ id, thumbnail, title, desc }, index) => (
          <StarBorder
            key={id}
            as="div"
            className="group text-white border-neutral-200 dark:border-slate-800 hover:scale-105 transition-all duration-300 cursor-pointer"
            color="#C0C0C0"
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
              <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm w-full h-full">
                {/* Subtle white overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative flex flex-col md:flex-row items-start p-6 md:p-8 gap-6">
                  {/* Icon container with enhanced styling */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={thumbnail}
                        alt={title}
                        width={56}
                        height={56}
                        className="object-contain filter drop-shadow-lg"
                      />
                    </div>
                    {/* Decorative elements (neutral) */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/50 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white/30 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-500">
                        {title}
                      </h2>
                      <div className="w-12 h-px bg-white/20 rounded-full group-hover:w-20 group-hover:bg-white/40 transition-all duration-500" />
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
                            className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-white transition-colors duration-300"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-gray-200 uppercase tracking-wider font-semibold transition-colors duration-300">
                        Role #{id.toString().padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Removed hover arrow indicator */}
                </div>
              </div>
            </GlareHover>
          </StarBorder>
        ))}
      </div>

      {/* Bottom decorative section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/60">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
          <span className="text-sm font-bold text-gray-400">
            Always learning, always refining.
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  );
};

export default Roles;
