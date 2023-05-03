import Backend from "./Backend";
import DevEnvironment from "./DevEnvironment";
import Frontend from "./Frontend";
import Mobile from "./Mobile";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Compétences</h2>
      <span className="section__subtitle">Mon niveau technique</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Mobile />
        <DevEnvironment />
      </div>
    </section>
  );
};

export default Skills;
