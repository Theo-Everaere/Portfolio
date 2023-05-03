import "./projectCard.css";
import Button from "../button/Button";
import ExternalLink from "../../assets/external-link.svg";
import PlayButton from "../../assets/play-button.svg";

const ProjectCard = ({ project }) => {
  let svg = project.redirection === 1 ? ExternalLink : PlayButton;
  return (
    <div className="card">
      <img src={project.imgSrc} alt={project.title} className="card-img" />
      <h2 className="card-title">{project.title}</h2>
      <p className="card-descr">{project.description}</p>
      <div className="card-icons">
        {project.tech.map((ico) => (
          <i className={ico}></i>
        ))}
      </div>
      <div className="buttons-container">
        <Button
          title="voir"
          className="button button--flex card-btn"
          svg={svg}
          href={project.link}
        />
        <Button
          title="Github"
          className="button button--flex card-btn"
          svg={ExternalLink}
          href={project.github}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
