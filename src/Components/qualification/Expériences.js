import React from "react";

const Experiences = ({ index }) => {
  return (
    <div className="qualification__sections">
      <div
        className={
          index === 2
            ? "qualification__content qualification__content-active"
            : "qualification__content"
        }
      >
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">Développeur Java</h3>
            <span className="qualification__subtitle">
              <strong>Entreprise:</strong>
              <br />
              Boulanger
            </span>
            <span className="qualification__subtitle">
              <strong>Langage de programmation:</strong>
              <br />
              Java
            </span>
            <span className="qualification__subtitle">
              <strong>Technologies:</strong>
              <br />
              Spring, Apashe Kafka, Mongodb, Github
            </span>
            <span className="qualification__subtitle">
              <strong>Méthodologie:</strong>
              <br /> Agil Scrum
            </span>
            <span className="qualification__subtitle">
              <strong>Environnement de développement:</strong>
              <br />
              Intellij IDEA Community
            </span>

            <div className="qualification__calender">
              <i className="uil-calendar-alt"></i> 2022 (~7 mois)
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
        </div>

        <div className="qualification__data">
          <div></div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>

          <div>
            <h3 className="qualification__title">Développeur Flutter</h3>
            <span className="qualification__subtitle">
              <strong>Entreprise:</strong>
              <br />
              IOT Symphony
            </span>
            <span className="qualification__subtitle">
              <strong>Langage de programmation:</strong>
              <br />
              Dart
            </span>
            <span className="qualification__subtitle">
              <strong>Technologies:</strong>
              <br />
              Flutter, Github
            </span>
            <span className="qualification__subtitle">
              <strong>Méthodologie:</strong>
              <br /> Agil Scrum
            </span>
            <span className="qualification__subtitle">
              <strong>Environnement de développement:</strong>
              <br />
              Android Studio
            </span>

            <div className="qualification__calender">
              <i className="uil-calendar-alt"></i> 2021 (~4 mois)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
