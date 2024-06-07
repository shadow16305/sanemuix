import Image from "next/image";

interface ProjectPreviewsProps {
  previews: (string | null)[];
}

const ProjectPreviews: React.FC<ProjectPreviewsProps> = ({ previews }) => (
  <section className="flex flex-col md:flex-row justify-between gap-y-7 mt-24">
    <div className="flex flex-col gap-y-7 md:w-[49%]">
      {previews[0] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[0]} alt="Preview 1" fill className="rounded-3xl object-cover" />
        </div>
      )}
      {previews[1] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[1]} alt="Preview 2" fill className="rounded-3xl object-cover" />
        </div>
      )}
      {previews[4] && previews[5] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[4]} alt="Preview 5" fill className="rounded-3xl object-cover" />
        </div>
      )}
    </div>
    <div className="flex flex-col gap-y-7 md:w-[49%]">
      {previews[2] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[2]} alt="Preview 3" fill className="rounded-3xl object-cover" />
        </div>
      )}
      {previews[3] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[3]} alt="Preview 4" fill className="rounded-3xl object-cover" />
        </div>
      )}
      {previews[5] && (
        <div className="relative w-full h-[262px] md:h-[580px]">
          <Image src={previews[5]} alt="Preview 6" fill className="rounded-3xl object-cover" />
        </div>
      )}
    </div>
  </section>
);

export default ProjectPreviews;
