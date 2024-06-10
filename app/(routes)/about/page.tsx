import Container from "@/components/ui/container";
import Skills from "./_components/skills";
import TextBlock from "./_components/text-block";
import InfoList from "@/components/ui/info-list";

const AboutPage = () => {
  return (
    <Container className="pt-32">
      <h1 className="text-[28px] lg:text-[4em] leading-[1.15]">
        Hi! I’m Sanem, a Canadian-Turkish digital designer living in Toronto. I help create brand & digital experiences
        for companies.
      </h1>
      <section className="flex flex-col-reverse md:flex-row md:justify-between mt-10 md:mt-32">
        <Skills />
        <TextBlock />
      </section>
      <InfoList
        title="Education:"
        text_1_left="UX Design Course @Google"
        text_1_right="Google Coursera"
        text_2_left="Graphic Designer @Egean University"
        text_2_right="Izmir , Turkey (2018)"
        text_right_size="text-sm md:text-[1em]"
        containerClassName="py-4"
      />
      <InfoList
        title="Approach:"
        text_1_left="Creative Direction"
        text_1_right="Creating a strong brand direction involves understanding the brand's essence, target audience, and intended message. This requires careful research and analysis, including looking into the brand's history, values, and cultural context. This information helps build a solid brand identity."
        text_2_left="Digital Design"
        text_2_right="With a proven history of crafting websites and apps, I consistently produce robust and user-centric digital designs. Effective corporate branding forms the cornerstone of every thriving website."
        text_3_left="Development"
        text_3_right="I create websites that are both scalable and beginner-friendly, whether building from scratch or collaborating with developers. My foundation in basic HTML and CSS, along with the use of user-friendly tools like Elementor or Webflow, allows me to craft accessible websites with ease."
        text_right_size="text-[13px] md:text-[1em]"
      />
      <InfoList
        title="Certificates:"
        text_1_left="Responsive Web Design in Adobe XD Certificate"
        text_1_right="2022"
        text_2_left="Create High-Fidelity Designs and Prototypes in Figma Certificate"
        text_2_right="2022"
        text_3_left="Conduct UX Research and Test Early Concepts Certificate"
        text_3_right="2022"
        text_4_left="Build Wireframes and Low-Fidelity Prototypes Certificate"
        text_4_right="2021"
        text_5_left="Start the UX Design Process: Empathize. Define. CandIdeate Certificate"
        text_5_right="2021"
        text_6_left="HTML - CSS - JAVASCRIPT Certificate"
        text_6_right="2019"
        text_right_size="text-[13px] lg:text-[1.4em]"
      />
    </Container>
  );
};

export default AboutPage;
