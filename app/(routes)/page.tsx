import AboutPreview from "./_components/about-preview";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Videos from "./_components/videos";
import Container from "@/components/ui/container";
import ImageParallax from "./_components/image-parallax";
import InfoList from "@/components/ui/info-list";

export default function Home() {
  return (
    <>
      <Container className="overflow-y-hidden">
        <Hero />
        <Videos />
        <Projects />
        <AboutPreview />
      </Container>
      <ImageParallax />
      <Container>
        <InfoList
          title="Experience"
          text_1_left="UI/UX Designer @ Agency"
          text_1_right="2022-2024"
          text_2_left="Freelancer"
          text_2_right="2021-2022"
          text_3_left="UI/UX Designer Intern @ Moux Agency"
          text_3_right="2020-2021"
          text_4_left="Graphic Designer Intern @ Aegean University"
          text_4_right="2019-2019"
          text_right_size="md:text-[1.3em]"
          width="2xl:w-[62%]"
        />
      </Container>
    </>
  );
}
