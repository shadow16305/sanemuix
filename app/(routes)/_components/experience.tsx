import { experience } from "@/constants/content";

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between text-black mt-16 md:mt-24">
      <span className="text-lg">Experience</span>
      <ul className="md:w-2/3">
        {experience.map((item) => (
          <li
            key={item.text}
            className="flex flex-col md:flex-row md:justify-between gap-y-2 text-base md:text-[1.3em] border-b border-[#cfd1d7] py-5">
            <p>{item.text}</p>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
