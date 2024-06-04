const Hero = () => {
  return (
    <section className="w-full mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between pt-24 md:pt-56">
      <div className="flex flex-col gap-y-6 text-xs mt-6 md:mt-0">
        <p className="md:max-w-40 leading-normal">
          As a UX designer, I'm driven by the thrill of dissecting the intricacies of user interaction, understanding
          how even the tiniest elements contribute to a seamless experience. This perspective enables me to shape
          digital landscapes into captivating and user-centric environments.
        </p>
        <div className="flex gap-x-6">
          <p>Last updated</p>
          <span>01-02-2024</span>
        </div>
      </div>
      <h1 className="text-[12vw] md:text-[5.5vw] md:w-[55%] tracking-[-0.03em] leading-[1.1]">
        Digital Designer and Art Director currently based in Toronto.
      </h1>
    </section>
  );
};

export default Hero;
