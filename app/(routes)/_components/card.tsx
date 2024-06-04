import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imgSrc: string;
  name: string;
  location: string;
  date: string;
  className?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, name, className, location, date, link }) => {
  return (
    <Link
      href={link}
      className={cn(
        "rounded-3xl relative h-[34em] group hover:scale-95 transition-transform duration-500 w-full",
        className
      )}>
      <Image src={imgSrc} alt={name} fill className="object-cover rounded-3xl" />
      <div className="flex w-[98%] mx-auto justify-between -translate-y-1 opacity-0 group-hover:translate-y-4 group-hover:opacity-100 transition-all duration-[400ms]">
        <span className="bg-black/30 text-white rounded-3xl px-4 py-3 text-xs">{name}</span>
        <div className="gap-x-4 flex items-center">
          <span className="bg-black/30 text-white rounded-3xl px-4 py-3 text-xs">{location}</span>
          <span className="bg-black/30 text-white rounded-3xl px-4 py-3 text-xs">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
