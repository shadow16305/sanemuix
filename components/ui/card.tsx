"use client";

import { CursorContext } from "@/contexts/cursor-context";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

interface CardProps {
  imgSrc: string;
  name: string;
  location: string;
  date: string;
  className?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, name, className, location, date, link }) => {
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
    <Link
      href={link}
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardLeave}
      onClick={handleCardLeave}
      className={cn(
        "rounded-3xl relative h-[284px] md:h-[320px] lg:h-[430px] 2xl:h-[34em] group hover:scale-95 transition-transform duration-500 w-full",
        className
      )}>
      <Image src={imgSrc} alt={name} fill className="object-cover rounded-3xl" />
      <div className="flex w-[98%] mx-auto justify-between z-10 relative p-2 lg:p-0 lg:-translate-y-1 lg:opacity-0 group-hover:translate-y-4 lg:group-hover:opacity-100 transition-all duration-[400ms]">
        <span className="bg-black/30 text-white rounded-3xl p-2 lg:px-4 lg:py-3 text-xs">{name}</span>
        <div className="gap-x-4 flex items-center">
          <span className="bg-black/30 text-white rounded-3xl p-2 lg:px-4 lg:py-3 text-xs">{location}</span>
          <span className="bg-black/30 text-white rounded-3xl p-2 lg:px-4 lg:py-3 text-xs">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
