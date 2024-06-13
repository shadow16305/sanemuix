const Skills = () => {
  return (
    <aside className="flex flex-col gap-y-10 text-[13px] mt-24 md:mt-0">
      <div className="space-y-4">
        <span className="text-grey-40">Hard Skills:</span>
        <ul className="space-y-0.5 text-almost-black">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Webflow</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </div>
      <div className="space-y-4">
        <span className="text-grey-40">Soft Skills:</span>
        <ul className="space-y-0.5 text-almost-black">
          <li>Time Management</li>
          <li>Teamwork</li>
          <li>Creative Thinking</li>
          <li>Problem-solving</li>
        </ul>
      </div>
      <div className="space-y-4">
        <span className="text-grey-40">Languages:</span>
        <ul className="space-y-0.5 text-almost-black">
          <li>English - Advanced</li>
          <li>Turkish - Native</li>
        </ul>
      </div>
    </aside>
  );
};

export default Skills;
