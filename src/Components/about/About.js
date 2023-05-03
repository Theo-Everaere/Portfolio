import "./about.css";
import AboutImg from "../../assets/profil-pic.jpg";
import CV from "../../assets/theo-everaere-cv.pdf";
import Info from "./Info";
import Button from "../button/Button";
import Files from "../../assets/files.svg";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">À-propos</h2>
      <span className="section__subtitle">Présentation</span>
      <div className="about__container container grid">
        <img src={AboutImg} className="about__img" alt="Profile" />

        <div className="about__data">
          <p className="about__description">
            Je m'appelle <strong> Théo</strong> , je suis un développeur web &
            web mobile français diplômé de l'AFPA (Roubaix, France) en 2021.
            <br />
            <br />
            Celle-ci m'a permis d'acquérir des bases solides en programmation
            HTML, CSS, Javascript, en plus de me former à l'utilisation de
            ReactJs et NodeJs. <br />
            Depuis, j'ai contribué au développement de l'application mobile
            Virtuose, une application de streaming audio développée avec{" "}
            <strong>Flutter</strong> par la start-up{" "}
            <strong>IOT Symphony</strong> et j'ai également travaillé en tant
            que développeur <strong>Java</strong> pour la société
            <strong> Boulanger</strong>.
          </p>

          <Info />

          <Button
            download=""
            href={CV}
            title="Télécharger mon CV"
            className="button button--flex"
            svg={Files}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
