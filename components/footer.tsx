import Menu from "./menu";
import Container from "./ui/container";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-10 mt-16 lg:mt-28 relative">
      <Container>
        <div className="flex justify-between text-white text-xs">
          <span>Portfolio 2022-2024</span>
          <span>Sanem Korkmaz</span>
          <span>13.0056'' N, 33.6660'' W</span>
        </div>
        <div className="flex flex-col items-center py-20 lg:py-28 xl:py-48">
          <span className="text-grey-40 text-base">Have a nice project?</span>
          <Menu />
        </div>
        <p className="text-xs text-grey-40 text-center md:text-start">
          © All rights reserved. Template by Sanem Korkmaz.
        </p>
      </Container>
      <div className="bg-[#f5f5f5] rounded-b-3xl w-full h-24 absolute -top-10" />
    </footer>
  );
};

export default Footer;
