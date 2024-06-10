"use client";

import { CursorContext } from "@/contexts/cursor-context";
import Link from "next/link";
import { useContext } from "react";

const AboutPreview = () => {
  const cursorCtx = useContext(CursorContext);

  return (
    <section className="w-full flex flex-col-reverse md:flex-row md:justify-between mt-16 md:mt-24">
      <div className="flex flex-col gap-y-4 mt-16 md:mt-0">
        <span className="text-xs text-grey-40">Skills</span>
        <ul className="text-xs text-black">
          <li>UI/UX</li>
          <li>Branding</li>
          <li>Web Design</li>
          <li>Mobile Design</li>
          <li>Strategy</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-6 md:w-9/12 lg:w-3/4 xl:w-[840px] 2xl:w-7/12">
        <h2 className="text-[22px] md:text-[2.5em] w-11/12 max-w-[340px] md:max-w-none md:w-full">
          Studied Graphic Design at{" "}
          <span className="border border-black py-0.5 px-3 md:py-1 md:px-4 rounded-full">Egean University</span> and
          have been working in the design industry for 5 years.
        </h2>
        <div className="flex flex-col md:flex-row w-full justify-between md:items-end">
          <p className="text-sm md:text-xs md:w-2/3">
            My passion for design started when I was young, and I have pursued this passion by working with a variety of
            clients and projects for 5 years. I have worked with startups, small businesses, and large corporations,
            creating user interfaces for websites, software applications, and mobile apps.
          </p>
          <div className="py-2 px-4 border border-black rounded-full w-fit mt-6 md:mt-0">
            <Link
              href="/about"
              onMouseEnter={cursorCtx.onHover}
              onMouseLeave={cursorCtx.onLeave}
              data-after="Read More"
              className="pseudo-text-effect">
              <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
