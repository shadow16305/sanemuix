import { categories } from "@/constants/content";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Categories = ({ activeCategory }: { activeCategory?: string }) => {
  return (
    <ul className="flex items-center gap-x-3">
      {categories.map((category) => (
        <li key={category.name}>
          <Link
            href={`/projects/${category.name}`}
            className={cn(
              "text-black border text-xs border-black rounded-3xl px-2.5 py-1.5 transition-colors hover:text-white hover:bg-black",
              category.name === activeCategory && "bg-black text-white"
            )}>
            {category.name === "concept" && "Concept"}
            {category.name === "web-design" && "Web Design"}
            {category.name === "art-direction" && "Art Direction"}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
