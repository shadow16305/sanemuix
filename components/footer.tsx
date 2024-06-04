import Form from "./form/form";
import Container from "./ui/container";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-10 mt-16 md:mt-24 relative">
      <Container>
        <div className="flex justify-between text-white text-xs">
          <span>Portfolio 2022-2024</span>
          <span>Sanem Korkmaz</span>
          <span>13.0056'' N, 33.6660'' W</span>
        </div>
        <div className="flex flex-col items-center py-20 md:py-48">
          <span className="text-grey-40">Have a nice project?</span>
          <Form />
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