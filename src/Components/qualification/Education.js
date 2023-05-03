import React from "react";

const Education = ({ index }) => {
  return (
    <div className="qualification__sections">
      <div
        className={
          index === 1
            ? "qualification__content qualification__content-active"
            : "qualification__content"
        }
      >
        {/* DevWeb & Web Mobile */}
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              Titre professionnel: Développeur Web & Web Mobile
            </h3>
            <span className="qualification__subtitle">Roubaix - France</span>
            <div className="qualification__calender">
              <i className="uil-calendar-alt"></i> 2021
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
        </div>

        {/* LEA */}
        <div className="qualification__data">
          <div></div>

          <div>
            <span className="qualification__rounder"></span>
            <span className="qualification__line"></span>
          </div>

          <div>
            <h3 className="qualification__title">
              Licence: <br />
              Langues étrangères appliquées <br />
              (Anglais-Chinois)
            </h3>
            <span className="qualification__subtitle">Roubaix - France</span>
            <div className="qualification__calender">
              <i className="uil-calendar-alt"></i> 2017
            </div>
          </div>
        </div>

        {/* OZANAM */}
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              Baccalauréat:
              <br />
              Science et Technologies de l'Industrie et du Développement Durable
            </h3>
            <span className="qualification__subtitle">Lille - France</span>
            <div className="qualification__calender">
              <i className="uil-calendar-alt"></i> 2013
            </div>
          </div>

          <div>
            <span className="qualification__rounder"></span>
            <div className="qualification__line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
