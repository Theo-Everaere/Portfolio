import { useState } from "react";
import Education from "./Education";
import EFormation from "./EFormation";
import Experiences from "./Expériences";
import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">Mon parcours</span>

      <div className="qualification__container container">
        {/* TABS */}
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            <span className="qualification__tabs-title">Éducation</span>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            <span className="qualification__tabs-title">Experiences</span>
          </div>

          <div
            className={
              toggle === 3
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            <i className="bx bx-laptop qualification__icon"></i>
            <span className="qualification__tabs-title">E-Formations</span>
          </div>
        </div>
        {/* TABS CONTENT */}
        <Education index={toggle} />
        <Experiences index={toggle} />
        <EFormation index={toggle} />
      </div>
    </section>
  );
};

export default Qualification;
