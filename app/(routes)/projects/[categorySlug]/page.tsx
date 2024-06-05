import Card from "@/components/ui/card";
import Container from "@/components/ui/container";
import { projects } from "@/constants/content";
import Categories from "../_components/categories";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const CategoryPage = ({ params }: { params: { categorySlug: string } }) => {
  const currentCategory = params.categorySlug;

  const filteredProjects = projects.filter(
    (project) =>
      project.category_one?.includes(currentCategory) ||
      project.category_two?.includes(currentCategory) ||
      project.category_three.includes(currentCategory)
  );

  return (
    <Container className="pt-24">
      <div className="flex items-center gap-x-2">
        <ArrowLeft size={16} />
        <Link href="/projects" data-after="All works" className="pseudo-text-effect">
          <span>All works</span>
        </Link>
      </div>
      <h1 className="text-[4em] mb-4">
        {currentCategory === "concept" && "Concept"}
        {currentCategory === "web-design" && "Web Design"}
        {currentCategory === "art-direction" && "Art Direction"}
      </h1>
      <Categories activeCategory={currentCategory} />
      <div className="flex flex-wrap justify-between gap-y-7 mt-12">
        {filteredProjects.map((project) => (
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
    </Container>
  );
};

export default CategoryPage;
