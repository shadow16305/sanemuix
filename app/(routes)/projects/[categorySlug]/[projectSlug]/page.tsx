import Container from "@/components/ui/container";
import { projects } from "@/constants/content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectInfo from "./_components/project-info";
import ProjectPreviews from "./_components/project-previews";
import NextProject from "./_components/next-project";

const ProjectDetailsPage = ({ params }: { params: { projectSlug: string } }) => {
  const filteredProjects = projects.filter((project) => project.query === params.projectSlug);
  const project = filteredProjects[0];

  const previews = [
    project.preview_1,
    project.preview_2,
    project.preview_3,
    project.preview_4,
    project.preview_5,
    project.preview_6,
  ];

  return (
    <Container className="pt-16 md:pt-24 overflow-y-hidden">
      <div className="relative w-full h-[340px] md:h-[540px] 2xl:h-[640px]">
        <Image src={project.img} alt={project.name} fill className="object-cover rounded-3xl" />
      </div>
      <ProjectInfo project={project} />
      <ProjectPreviews previews={previews} />
      {project.preview_5 && !project.preview_6 && (
        <div className="relative w-full mt-7 h-[262px] md:h-[1100px]">
          <Image src={project.preview_5} alt={project.name} fill className="rounded-3xl" />
        </div>
      )}
      <NextProject
        nextProject={{
          path: project.next_project_path,
          name: project.next_project_name,
          img: project.next_project_img,
        }}
      />
    </Container>
  );
};

export default ProjectDetailsPage;
