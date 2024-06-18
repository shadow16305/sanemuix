const Hero = () => {
  return (
    <section className="w-full mx-auto flex flex-col-reverse md:flex-row md:justify-between pt-24 md:pt-32 lg:pt-40 xl:pt-56">
      <div className="flex flex-col text-[13.5px] mt-6 md:mt-0 justify-between flex-1 lg:pt-4">
        <p className="md:max-w-44 leading-normal">
          As a UX designer, I'm driven by the thrill of dissecting the intricacies of user interaction, understanding
          how even the tiniest elements contribute to a seamless experience. This perspective enables me to shape
          digital landscapes into captivating and user-centric environments.
        </p>
        <div className="flex gap-x-10">
          <p>Last updated</p>
          <span>01-02-2024</span>
        </div>
      </div>
      <h1 className="text-[7.5vw] md:text-[5.6em] md:w-[55%] tracking-[-0.03em] leading-[1.1] mr-24">
        Digital Designer and Art Director currently based in Toronto.
      </h1>
    </section>
  );
};

export default Hero;
