import { Role } from "@/data";
import React from "react";
import StarBorder from "./StarBorder";
import { Button } from "./ui/button";
const Roles = () => {
  return (
    <div className="py-20">
      <h1 className="text-7xl font-bold text-purple-500 text-center">Roles</h1>
      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Role.map(({ id, thumbnail,title,desc}) => (
          <StarBorder
            key={id}
            as="button"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            color="cyan"
          >
              <div className="flex lg:flex-row flex-col p-3 py-6 md:p-5 lg:p-10 g">
                <img
                  src={thumbnail}
                  alt={thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p>{desc}</p>   
                </div>
              </div>
          </StarBorder>
        ))}
      </div>
    </div>
  );
};

export default Roles;
