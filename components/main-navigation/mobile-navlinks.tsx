"use client";

import { navLinks } from "@/constants/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Form from "../menu";

const MobileNavlinks = ({ toggleOpen }: { toggleOpen: () => void }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-y-3">
      {navLinks.map((link) => (
        <li
          key={link.name}
          className={cn(
            "py-2.5 px-4 rounded-3xl text-xl text-center",
            pathname === link.path ? "text-white bg-black" : "text-almost-black"
          )}>
          <Link href={link.path} onClick={toggleOpen}>
            {link.name}
          </Link>
        </li>
      ))}
      <li className="py-3 px-4">
        <Form navigation />
      </li>
    </ul>
  );
};

export default MobileNavlinks;
