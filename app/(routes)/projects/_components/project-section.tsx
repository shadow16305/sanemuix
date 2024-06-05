import Card from "@/components/ui/card";
import { projects } from "@/constants/content";
import Categories from "./categories";

const ProjectSection = () => {
  return (
    <section className="space-y-6 mt-16 md:mt-24">
      <Categories />
      <div className="flex flex-wrap justify-between gap-y-7">
        {projects.map((project) => (
          <Card
            key={project.name}
            name={project.name}
            imgSrc={project.img}
            location={project.location}
            date={project.date}
            link={project.path}
            className="md:w-[49%] w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
