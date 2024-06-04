"use client";

import { navLinks } from "@/constants/content";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNavlinks = () => {
  const pathname = usePathname();

  return (
    <ul className="bg-white/50 backdrop-blur-3xl hidden lg:flex items-center px-2 rounded-full">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={cn(
            "py-2.5 px-4 rounded-3xl text-xs",
            pathname === link.path ? "text-white bg-black" : "text-black"
          )}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
      <li className="py-3 px-4">
        <button className="text-black text-xs">Contact</button>
      </li>
    </ul>
  );
};

export default DesktopNavlinks;
