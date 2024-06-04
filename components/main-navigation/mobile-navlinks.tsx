"use client";

import { navLinks } from "@/constants/content";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form from "../form/form";

const MobileNavlinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-3">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={cn(
            "py-2.5 px-4 rounded-3xl text-xl text-center",
            pathname === link.path ? "text-white bg-black" : "text-black"
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

export default MobileNavlinks;
