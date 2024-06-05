"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CursorContext } from "@/contexts/cursor-context";
import { cn } from "@/libs/utils";
import { ArrowRight, X } from "lucide-react";
import { useContext } from "react";

const Form = ({ navigation }: { navigation?: boolean }) => {
  const cursorCtx = useContext(CursorContext);

  return (
    <Drawer direction="right" noBodyStyles disablePreventScroll>
      <DrawerTrigger
        data-after="Get in touch"
        onMouseEnter={cursorCtx.onHover}
        onMouseLeave={cursorCtx.onLeave}
        className={cn(
          navigation ? "text-xl md:text-xs text-black" : "pseudo-text-effect text-white text-[42px] md:text-[56px]"
        )}>
        <span>{navigation ? "Contact" : "Get in touch"}</span>
      </DrawerTrigger>
      <DrawerContent className="md:w-1/3 py-16 px-6">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="text-xs">Use this form to describe your project</DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription className="text-xl text-black mt-20">
          <form action="">
            <p className="leading-loose">
              Hi, my name is{" "}
              <input
                type="text"
                className="bg-transparent border-b-neutral-500 border-b ml-2 focus:outline-none placeholder:text-neutral-500"
                placeholder="John Smith"
                required
              />
              . You can answer me on this email{" "}
              <input
                type="email"
                className="bg-transparent border-b-neutral-500 border-b ml-2 focus:outline-none placeholder:text-neutral-500"
                placeholder="email@box.com"
                required
              />
              . I am looking for help with a{" "}
              <input
                type="text"
                className="bg-transparent border-b-neutral-500 border-b ml-2 focus:outline-none placeholder:text-neutral-500"
                placeholder="website, design, etc"
                required
              />
              . My budget is ${" "}
              <input
                type="text"
                className="bg-transparent border-b-neutral-500 border-b ml-2 focus:outline-none placeholder:text-neutral-500"
                placeholder="1000"
                required
              />{" "}
              and I need it done by{" "}
              <input
                type="text"
                className="bg-transparent border-b-neutral-500 border-b ml-2 focus:outline-none placeholder:text-neutral-500"
                placeholder="November 24, 2019"
                required
              />
            </p>
            <div className="bg-black rounded-3xl px-4 py-2 text-white flex items-center gap-x-2 w-fit text-sm mt-12">
              <button type="submit" data-after="Contact Us" className="pseudo-text-effect">
                <span>Contact Us</span>
              </button>
              <ArrowRight className="size-4" />
            </div>
          </form>
        </DrawerDescription>
        <DrawerFooter>
          <a data-after="sanemuix@gmail.com" href="mailto:sanemuix@gmail.com" className="text-xs pseudo-text-effect">
            <span>sanemuix@gmail.com</span>
          </a>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Form;
