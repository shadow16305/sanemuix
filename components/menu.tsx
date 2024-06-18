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
import { menuInfo, services } from "@/constants/content";
import { CursorContext } from "@/contexts/cursor-context";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

const Menu = ({ navigation }: { navigation?: boolean }) => {
  const cursorCtx = useContext(CursorContext);

  return (
    <Drawer direction="right" noBodyStyles disablePreventScroll>
      <DrawerTrigger
        data-after="Get in touch"
        onMouseEnter={cursorCtx.onHover}
        onMouseLeave={cursorCtx.onLeave}
        className={cn(
          navigation
            ? "text-xl lg:text-[13px] text-almost-black"
            : "pseudo-text-effect text-white text-[42px] md:text-[56px]"
        )}>
        <span>{navigation ? "Contact" : "Get in touch"}</span>
      </DrawerTrigger>
      <DrawerContent className=" lg:w-[600px] md:w-2/3 py-6 md:py-16 px-6 !backdrop-blur-xl">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle className="text-xs">Our Services</DrawerTitle>
          <DrawerClose>
            <X />
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription className="text-xl mt-8 flex flex-col justify-center h-full">
          <div className="my-5 flex w-full md:max-w-[90%] justify-center flex-wrap gap-1 md:gap-2 lg:my-12 lg:max-w-[508px]">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={cn(
                  "hover:text-orange-20 bg-black rounded-xl text-white py-4 text-center text-xs font-extrabold transition lg:py-5 lg:text-sm",
                  index === 0 || index === 1 || index === 5 || index === 6
                    ? "w-[49%] lg:w-[250px]"
                    : "w-[32%] lg:w-[164px]"
                )}>
                {service.name}
              </div>
            ))}
          </div>
          <p className="md:pl-6 text-sm font-extrabold text-black lg:text-base text-center md:text-start">
            Need IT Help?
          </p>
          <ul className="mt-2 gap-y-6 pb-7 md:pl-5 lg:mt-8 flex md:flex-col flex-wrap justify-between">
            <li className="flex items-center gap-x-2 text-black text-sm">
              <div className="relative size-3 lg:size-6 invert">
                <Image src="/images/icons/message-icon.png" alt="email" fill />
              </div>
              <a data-after="sanemuix@gmail.com" href="mailto:sanemuix@gmail.com" className="pseudo-text-effect">
                <span>sanemuix@gmail.com</span>
              </a>
            </li>
            {menuInfo.map((item) => (
              <li key={item.text} className="flex items-center gap-x-2 text-black text-sm">
                <div className="relative size-3 lg:size-6 invert">
                  <Image src={item.icon} alt={item.text} fill />
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </DrawerDescription>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
