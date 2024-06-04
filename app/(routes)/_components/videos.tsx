const Videos = () => {
  return (
    <section className="w-full grid grid-cols-2 gap-x-4 md:gap-x-12 my-16 md:my-24">
      <iframe
        src="https://www.youtube.com/embed/EiMenaSnFmo?si=JbZtKjDjHfCo-u6Q"
        className="rounded-xl w-full h-[200px] md:h-[400px]"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
      <iframe
        src="https://www.youtube.com/embed/7vjJyTjflj4?si=7XXeVRSZdt3mY_hn"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-xl w-full h-[200px] md:h-[400px]"
      />
    </section>
  );
};

export default Videos;
