"use client";

import { CursorContext } from "@/contexts/cursor-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface NextProjectProps {
  nextProject: {
    path: string;
    name: string;
    img: string;
  };
}

const NextProject: React.FC<NextProjectProps> = ({ nextProject }) => {
  const cursorCtx = useContext(CursorContext);

  const handleCardHover = () => {
    cursorCtx.onHover();
    cursorCtx.onEnterCard();
  };

  const handleCardLeave = () => {
    cursorCtx.onLeave();
    cursorCtx.onLeaveCard();
  };

  return (
    <div
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      onClick={handleCardLeave}
      className="mt-7 bg-white rounded-3xl px-4 pb-4 pt-8">
      <Link href={nextProject.path} className="space-y-6 size-full">
        <div className="space-y-4 md:pl-8">
          <span className="text-sm">Next Project</span>
          <p className="text-2xl md:text-[4em] leading-none">{nextProject.name}</p>
        </div>
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image src={nextProject.img} alt={nextProject.name} fill className="object-cover rounded-2xl" />
        </div>
      </Link>
    </div>
  );
};

export default NextProject;
