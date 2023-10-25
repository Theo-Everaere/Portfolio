import IconApacheKafka from "../../assets/icon-apache-kafka.svg";
import IconInteliJIdea from "../../assets/icon-intellij-idea.svg";
import IconAndroidStudio from "../../assets/icon-android-studio.svg";
import CSharp from "../../assets/c-sharp.svg";

const IconsHandler = ({ skill }) => {
  let iconSVG;
  if (skill.icon === "kafkaIcon") iconSVG = IconApacheKafka;
  if (skill.icon === "intellijIdeaIcon") iconSVG = IconInteliJIdea;
  if (skill.icon === "androidStudioIcon") iconSVG = IconAndroidStudio;
  if (skill.icon === "csharp") iconSVG = CSharp;

  let iconName;
  if (skill.icon === "kafkaIcon") iconName = "kafkaIcon";
  if (skill.icon === "intellijIdeaIcon") iconName = "intellijIdeaIcon";
  if (skill.icon === "androidStudioIcon") iconName = "androidStudioIcon";
  if (skill.icon === "csharp") iconName = "csharp";

  return (
    <li className="skills__data" id={skill.id}>
      {skill.icon === iconName ? (
        <img src={iconSVG} className="skills-ico" alt={skill.name} />
      ) : (
        <i className={`${skill.icon} skills-ico`}></i>
      )}
      <div>
        <h3 className="skills__name">{skill.name}</h3>
        <span className="skills__level">{skill.level}</span>
      </div>
    </li>
  );
};

export default IconsHandler;
