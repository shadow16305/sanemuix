"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

const ImageParallax = () => {
  const { scrollY } = useScroll();
  const imgScale = useTransform(scrollY, [2800, 3000, 3200, 3300], [1, 1.05, 1.07, 1.09]);

  return (
    <div className="mt-16 md:mt-48 relative w-screen h-56 md:h-[620px] overflow-hidden">
      <motion.div className="w-full h-full relative" style={{ scale: imgScale }}>
        <Image src="/images/desk-image.webp" alt="desk image" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default ImageParallax;
