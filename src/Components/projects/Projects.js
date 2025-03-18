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
        {/* Premier projet Full Stack E-Commerce */}
        <div>
          <div className="projects__video-container">
            <h2 className="projects__main-title">
              Projet E-Commerce Full Stack (2025)
            </h2>

            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/5v0sgAPvWF4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Si la vidéo ne s'affiche pas correctement, vous pouvez la
              visionner directement sur{" "}
              <a
                href="https://www.youtube.com/watch?v=5v0sgAPvWF4"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .
            </p>
          </div>
        </div>
        <div>
          <h3 className="projects__main-title">Description :</h3>
          <p className="projects__main-description">
            Plateforme e-commerce avec gestion de produits, panier et commandes.
            Développée avec Spring Boot pour le backend et React pour le
            frontend.
          </p>
          <p className="projects__main-description">
            Ce projet permet aux utilisateurs de gérer une boutique en ligne,
            avec des fonctionnalités telles que l'ajout, la modification et la
            suppression de produits. L'application est également responsive, et
            permet de gérer un panier et de passer commande si l'utilisateur est
            connecté.
          </p>
          <p className="projects__main-description">
            Les technologies utilisées incluent :
            <ul>
              <li>- React (Frontend)</li>
              <li>- Spring Boot (Backend)</li>
              <li>- H2 Database (Base de données)</li>
            </ul>
          </p>
          <div className="projects__main-buttons">
            <a
              href="https://github.com/Theo-Everaere/FINAL-Full-Stack-E-Commerce-Project---ReactJS-JAVA/tree/main/ecommerce-react"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              Github Frontend
            </a>
            <a
              href="https://github.com/Theo-Everaere/FINAL-Full-Stack-E-Commerce-Project---ReactJS-JAVA/tree/main/ecommerce-project"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              Github Backend
            </a>
          </div>
        </div>

        {/* MANGAMEMO */}
        <div>
          <div className="projects__video-container">
            <h2 className="projects__main-title">MangaMemo (2025)</h2>

            <iframe
              width="100%"
              height="515"
              src="https://www.youtube.com/embed/vBBbZBFhiIk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              Si la vidéo ne s'affiche pas correctement, vous pouvez la
              visionner directement sur{" "}
              <a
                href="https://youtube.com/shorts/vBBbZBFhiIk?feature=share"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
              .
            </p>

            <p className="projects__main-disclaimer">
              <strong>⚠ Disclaimer :</strong> MangaMemo est un projet personnel.
              L’application utilise l’API MangaDex, et les utilisateurs doivent
              s’assurer de posséder les droits nécessaires pour lire une œuvre
              en ligne.
            </p>
          </div>
        </div>
        <div>
          <h3 className="projects__main-title">Description :</h3>
          <p className="projects__main-description">
            Application de suivi de lecture de mangas.
          </p>
          <p className="projects__main-description">
            Parcourez les dernières sorties, lisez par catégories, plongez dans
            vos mangas favoris et gardez-les bien organisés.
          </p>
          <ul className="projects__main-description-list">
            <li>Recherchez des mangas par titre</li>
            <li>Découvrez leurs informations détaillées</li>
            <li>Parcourez les chapitres</li>
            <li>Marquez les chapitres comme lus</li>
          </ul>

          <p className="projects__main-description">
            Les technologies utilisées incluent :
            <ul>
              <li>- Flutter</li>
            </ul>
          </p>
          <div className="projects__main-buttons">
            <a
              href="https://github.com/Theo-Everaere/MangaMemo"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--flex"
            >
              Github
            </a>
          </div>
        </div>

        {/* Autres projets en dessous */}
        <h2 className="section__title">Autres projets</h2>
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
