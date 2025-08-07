import { projects } from "@/data";
import { div } from "framer-motion/client";
import React from "react";

const RecentProjects = () => {
  return (
    <div className="py-20 text-center">
      <h1 className="text-5xl font-bold">
        A small selection of  <br /> <span className="text-purple-600 mt-2">Recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 mt-10 gap-16 ">
        {projects.map(({title,id,des,img,iconLists,link})=>(
            <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[86vw]">
                {title}
            </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
