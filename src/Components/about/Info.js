import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Prometteur</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Statut</h3>
        <span className="about__subtitle">Disponible</span>
      </div>
    </div>
  );
};

export default Info;
