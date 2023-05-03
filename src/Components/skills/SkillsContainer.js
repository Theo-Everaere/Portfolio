import IconsHandler from "./IconsHandler";

const SkillsContainer = ({ title, skills }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{title}</h3>
      <div className="skills__box">
        <ul className="skills__group">
          {skills.map((skill) => (
            <IconsHandler skill={skill} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsContainer;
