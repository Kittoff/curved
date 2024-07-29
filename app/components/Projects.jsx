import React from "react";
import { projects } from "./data";

const Projects = () => {
  return (
    <div className="text-white mix-blend-difference z-10 h-screen w-full relative">
      <ul className="border-b">
        {projects.map((project, index) => {
          return (
            <li key={project.title} className="text-[4vw] p-5 border-t">
              <p>{project.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
