const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between pt-24 md:pt-40 w-full">
      <h1 className="text-[28px] md:text-[32px] lg:text-[44px] xl:text-[3em] 2xl:text-[4em] lg:w-[35%] tracking-[-0.03em] leading-[1.1]">
        A Comprehensive Look at My Latest Design Portfolio and Creative Works
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cPOfRznwEF8?si=3vrnoD0zj5s0QYjb"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="lg:w-1/2 w-full h-[200px] md:h-[400px] lg:h-[280px] xl:h-[360px] 2xl:h-[400px] rounded-xl mt-7 lg:mt-0"
      />
    </section>
  );
};

export default Hero;
