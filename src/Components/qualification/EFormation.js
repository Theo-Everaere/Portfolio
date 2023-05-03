import React from "react";

const EFormation = ({ index }) => {
  return (
    <div className="qualification__sections">
      <div
        className={
          index === 3
            ? "qualification__content qualification__content-active"
            : "qualification__content"
        }
      >
        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              React <br /> The complete guide
            </h3>
            <span className="qualification__subtitle">
              <strong>48,5 Heures</strong>
            </span>
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
            <h3 className="qualification__title">
              Flutter <br /> The complete development Bootcamp with Dart
            </h3>
            <span className="qualification__subtitle">
              <strong>29,5 Heures</strong>
            </span>
          </div>
        </div>

        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              The Creative Javascript Course
            </h3>
            <span className="qualification__subtitle">
              <strong>17,5 Heures</strong>
            </span>
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
            <h3 className="qualification__title">
              NodeJs <br /> The complete guide
            </h3>
            <span className="qualification__subtitle">
              <strong>40,5 Heures</strong>
            </span>
          </div>
        </div>

        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              React de A à Z (Hooks, Redux, Context, ...)
            </h3>
            <span className="qualification__subtitle">
              <strong>14,5 Heures</strong>
            </span>
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
            <h3 className="qualification__title">Devenez développeur Java</h3>
            <span className="qualification__subtitle">
              <strong>12,5 Heures</strong>
            </span>
          </div>
        </div>

        <div className="qualification__data">
          <div>
            <h3 className="qualification__title">
              The Complete Java Development Bootcamp
            </h3>
            <span className="qualification__subtitle">
              <strong>28,5 Heures</strong>
            </span>
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
            <h3 className="qualification__title">Understanding Typescript</h3>
            <span className="qualification__subtitle">
              <strong>15 Heures</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EFormation;
