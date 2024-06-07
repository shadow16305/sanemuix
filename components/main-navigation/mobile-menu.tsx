import MobileNavlinks from "./mobile-navlinks";

const MobileMenu = ({ toggleOpen }: { toggleOpen: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <MobileNavlinks toggleOpen={toggleOpen} />
      <div className="flex-col flex items-center mt-8">
        <span className="text-xs text-grey-40">Social:</span>
        <a
          href="https://www.linkedin.com/in/sanem-korkmaz/"
          data-after="LINKEDIN"
          className="font-semibold text-[#333333] pseudo-text-effect text-lg">
          <span>LINKEDIN</span>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
