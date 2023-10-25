import MoviesJMR from "../../assets/projects_section/MoviesJMR.png";
import EvogymThumbnail from "../../assets/projects_section/evogym-thumbnail.png";
import Sociopedia from "../../assets/projects_section/Sociopedia-thumbnail.png";

import ProjectCard from "./ProjectCard";

import "./projects.css";

const cardData = [
  {
    id: 1,
    imgSrc: EvogymThumbnail,
    title: "EVOGYM",
    description:
      "Site de Fitness réalisé avec Typescript, React et TailwindCss.",
    tech: ["bx bxl-react", "bx bxl-typescript", "bx bxl-tailwind-css"],
    link: "https://a5d33901.gym-typescript-eai.pages.dev/",
    github: "https://github.com/Theo-Everaere/gym-typescript",
    redirection: 1,
  },
  {
    id: 2,
    imgSrc: MoviesJMR,
    title: "MoviesJMR",
    description:
      "Permet aux utilisateurs d'afficher un carrousel de films, de regarder des bandes-annonces, d'ajouter/lire des critiques.",
    tech: ["bx bxl-react", "bx bxl-java", "bx bxl-mongodb", "bx bxl-bootstrap"],
    link: "https://www.youtube.com/watch?v=uVThVcEJodk&ab_channel=Th%C3%A9o",
    github: "https://github.com/Theo-Everaere/Movies-Project--Java-React-Mongo",
    redirection: 2,
  },
  {
    id: 3,
    imgSrc: Sociopedia,
    title: "Sociopedia",
    description:
      "Application MERN complète et responsive avec authentification, likes, mode sombre | React, MongoDB, MUI",
    tech: [
      "bx bxl-react",
      "bx bxl-nodejs",
      "bx bxl-expressjs",
      "bx bxl-mongodb",
    ],
    link: "https://www.youtube.com/watch?v=yQEZ3t8MMHA",
    github: "https://github.com/Theo-Everaere/mern-social-media",
    redirection: 2,
  },
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Mes projets</h2>
      <span className="section__subtitle">
        Le code source de chaque projet est disponible sur mon Github
      </span>

      <div className="projects__container container grid">
        <div className="projects__content">
          {cardData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
