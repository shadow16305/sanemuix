"use client";

import { navLinks } from "@/constants/content";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form from "../form";
import { useContext } from "react";
import { CursorContext } from "@/contexts/cursor-context";

const DesktopNavlinks = () => {
  const pathname = usePathname();
  const cursorCtx = useContext(CursorContext);

  return (
    <ul className="bg-white/50 backdrop-blur-lg hidden lg:flex items-center px-2 rounded-full">
      {navLinks.map((link) => (
        <li
          key={link.name}
          onMouseEnter={cursorCtx.onHover}
          onMouseLeave={cursorCtx.onLeave}
          className={cn(
            "py-2.5 px-4 rounded-3xl text-[13px]",
            pathname === link.path ? "text-white bg-black" : "text-almost-black"
          )}>
          <Link href={link.path}>{link.name}</Link>
        </li>
      ))}
      <li className="py-3 px-4">
        <Form navigation />
      </li>
    </ul>
  );
};

export default DesktopNavlinks;
