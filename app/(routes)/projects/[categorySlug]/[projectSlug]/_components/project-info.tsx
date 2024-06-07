"use client";

import { CursorContext } from "@/contexts/cursor-context";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";

interface ProjectInfoProps {
  project: {
    name: string;
    category_one: string | null;
    category_two: string | null;
    category_three: string | null;
    date: string;
    sop: string;
    location: string;
    description: string;
    live_site: string | null;
  };
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  const cursorCtx = useContext(CursorContext);

  return (
    <section className="flex flex-col md:flex-row md:justify-between mt-8">
      <div className="space-y-24">
        <p className="text-xs flex gap-x-1">
          <span className="font-semibold">Client:</span>
          <span>{project.name}</span>
        </p>
        <h1 className="text-[2.5em] max-w-[280px] hidden md:block">{project.name}</h1>
      </div>
      <div className="md:space-y-24 md:w-[60%] mt-6">
        <div className="flex flex-col md:flex-row gap-y-6 justify-between">
          <div className="flex gap-x-6 text-xs font-semibold">
            {project.category_one && <p>{project.category_one === "web-design" && "Web Design"}</p>}
            {project.category_two && <p>{project.category_two === "art-direction" && "Art Direction"}</p>}
            {project.category_three && <p>{project.category_three === "concept" && "Concept"}</p>}
          </div>
          <div className="flex items-center gap-x-2 text-xs font-semibold">
            <a
              href={project.live_site ? project.live_site : ""}
              onMouseEnter={cursorCtx.onHover}
              onMouseLeave={cursorCtx.onLeave}
              data-after="View Live Version"
              className="pseudo-text-effect">
              <span>View Live Version</span>
            </a>
            <ArrowRight size={16} />
          </div>
          <h1 className="text-[22px] md:hidden mt-2">{project.name}</h1>
        </div>
        <ul className="mt-6 space-y-6">
          <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-b-[#cfd1d7] pb-4 md:pb-6">
            <span className="text-xs">Client</span>
            <p className="text-base md:text-[1.3em] pt-4">{project.name}</p>
          </li>
          <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-b-[#cfd1d7] pb-4 md:pb-6">
            <span className="text-xs">Year</span>
            <p className="text-base md:text-[1.3em] pt-4">{project.date}</p>
          </li>
          <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-b-[#cfd1d7] pb-4 md:pb-6">
            <span className="text-xs">Scope of Work</span>
            <p className="text-base md:text-[1.3em] pt-4">{project.sop}</p>
          </li>
          <li className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-b-[#cfd1d7] pb-4 md:pb-6">
            <span className="text-xs">Location</span>
            <p className="text-base md:text-[1.3em] pt-4">{project.location}</p>
          </li>
        </ul>
        <p className="text-xl mt-6 md:text-[1.75em] leading-[1.3]">{project.description}</p>
      </div>
    </section>
  );
};

export default ProjectInfo;
