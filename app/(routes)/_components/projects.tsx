import { projects } from "@/constants/content";
import Card from "../../../components/ui/card";
import { cn } from "@/libs/utils";

const Projects = () => {
  return (
    <section className="w-full mx-auto flex flex-wrap justify-between gap-y-7">
      {projects.map((project, index) => (
        <Card
          key={index}
          imgSrc={project.img}
          name={project.name}
          location={project.location}
          date={project.date}
          link={project.path}
          className={cn(
            index === 0 && "md:w-full",
            index === 1 && "md:w-[60%]",
            index === 2 && "md:w-[38%]",
            index === 3 && "md:w-[38%]",
            index === 4 && "md:w-[60%]"
          )}
        />
      ))}
    </section>
  );
};

export default Projects;
