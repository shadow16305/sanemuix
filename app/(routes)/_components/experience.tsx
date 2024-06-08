import { experience } from "@/constants/content";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between text-black mt-16 md:mt-24 lg:mt-32">
      <span className="text-lg">Experience</span>
      <ul className="md:w-2/3 lg:w-7/12">
        {experience.map((item, index) => (
          <li
            key={index}
            className={cn(
              "flex flex-col md:flex-row md:justify-between gap-y-2 text-base lg:text-[1.4em] border-b border-[#cfd1d7] pb-7",
              index !== 0 && "pt-7"
            )}>
            <p>{item.text}</p>
            <span>{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
