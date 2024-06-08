import AboutPreview from "./_components/about-preview";
import Hero from "./_components/hero";
import Projects from "./_components/projects";
import Videos from "./_components/videos";
import Container from "@/components/ui/container";
import ImageParallax from "./_components/image-parallax";
import Experience from "./_components/experience";

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
        <Experience />
      </Container>
    </>
  );
}
